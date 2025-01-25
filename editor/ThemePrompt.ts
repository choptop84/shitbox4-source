// Copyright (C) 2020 John Nesky, distributed under the MIT license.

import { HTML } from "imperative-html/dist/esm/elements-strict";
import { Prompt } from "./Prompt";
import { SongDocument } from "./SongDocument";
import { ColorConfig } from "./ColorConfig";
import {boughtStuff} from "./MoneyData";

//namespace beepbox {
const { button, div, h2, select, option } = HTML;

export class ThemePrompt implements Prompt {
	public _themeSelect: HTMLSelectElement = select({ style: "width: 100%;", id:"themeSelect" },
		option({ value: "shitbox4 classic" }, "shitbox4"),
		option({ value: "shitbox2" }, "ShitBox 2.0"),
		option({ value: "realm" }, "Realm"),
	);
	private readonly _cancelButton: HTMLButtonElement = button({ class: "cancelButton" });
	private readonly _okayButton: HTMLButtonElement = button({ class: "okayButton", style: "width:45%;" }, "Okay");

	public readonly container: HTMLDivElement = div({ class: "prompt noSelection", style: "width: 220px;" },
		h2("Set Theme"),
		div({ style: "display: flex; flex-direction: row; align-items: center; height: 2em; justify-content: flex-end;" },
			div({ class: "selectContainer", style: "width: 100%;" }, this._themeSelect),
		),
		div({ style: "display: flex; flex-direction: row-reverse; justify-content: space-between;" },
			this._okayButton,
		),
		this._cancelButton,
	);
	private readonly lastTheme: string | null = window.localStorage.getItem("shitbox4colorTheme")

	constructor(private _doc: SongDocument) {
		if (this.lastTheme != null) {
			this._themeSelect.value = this.lastTheme;
		}
		this._okayButton.addEventListener("click", this._saveChanges);
		this._cancelButton.addEventListener("click", this._close);
		this.container.addEventListener("keydown", this._whenKeyPressed);
		this._themeSelect.addEventListener("change", this._previewTheme);
		this._themeSelect.addEventListener("focus", this._reloadThemes);
	}

	private _close = (): void => {
		if (this.lastTheme != null) {
			ColorConfig.setTheme(this.lastTheme);
		} else {
			ColorConfig.setTheme("shitbox4 classic");
		}
		this._doc.undo();
	}

	private _reloadThemes = (): void => {
		if (boughtStuff.includes("shitbox2")) {
			const thingOption: HTMLOptionElement = <HTMLOptionElement>this._themeSelect.querySelector('[value="shitbox2"]');
			thingOption.disabled = false;
		} else {
			
			const thingOption: HTMLOptionElement = <HTMLOptionElement>this._themeSelect.querySelector('[value="shitbox2"]');
			thingOption.disabled = true;
		} 
		if (boughtStuff.includes("realm")) {
			const thingOption: HTMLOptionElement = <HTMLOptionElement>this._themeSelect.querySelector('[value="realm"]');
			thingOption.disabled = false;
		} else {
			const thingOption: HTMLOptionElement = <HTMLOptionElement>this._themeSelect.querySelector('[value="realm"]');
			thingOption.disabled = true;
		} 
	}

	public cleanUp = (): void => {
		this._okayButton.removeEventListener("click", this._saveChanges);
		this._cancelButton.removeEventListener("click", this._close);
		this.container.removeEventListener("keydown", this._whenKeyPressed);
	}

	private _whenKeyPressed = (event: KeyboardEvent): void => {
		if ((<Element>event.target).tagName != "BUTTON" && event.keyCode == 13) { // Enter key
			this._saveChanges();
		}
	}

	private _saveChanges = (): void => {
		window.localStorage.setItem("shitbox4colorTheme", this._themeSelect.value);
		this._doc.prompt = null;
		this._doc.prefs.shitbox4colorTheme = this._themeSelect.value;
		this._doc.undo();
	}

	private _previewTheme = (): void => {
		ColorConfig.setTheme(this._themeSelect.value);
		this._doc.notifier.changed();
	}
}

//}
