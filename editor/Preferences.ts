// Copyright (c) 2012-2022 John Nesky and contributing authors, distributed under the MIT license, see accompanying the LICENSE.md file.

import {Scale, Config} from "../synth/SynthConfig";

export class Preferences {
	public static readonly defaultVisibleOctaves: number = 3;
	
	public autoPlay: boolean;
	public autoFollow: boolean;
	public enableNotePreview: boolean;
	public showFifth: boolean;
	public notesOutsideScale: boolean;
	public defaultScale: number;
	public showLetters: boolean;
	public showChannels: boolean;
	public showScrollBar: boolean;
	public alwaysShowSettings: boolean;
	public instrumentCopyPaste: boolean;
	public enableChannelMuting: boolean;
	public shitbox4colorTheme: string;
	public shitbox4layout: string;
	public displayBrowserUrl: boolean;
	public volume: number = 75;
	public visibleOctaves: number = Preferences.defaultVisibleOctaves;
	public pressControlForShortcuts: boolean;
	public keyboardLayout: string;
	public enableMidi: boolean;
	public showRecordButton: boolean;
	public snapRecordedNotesToRhythm: boolean;
	public ignorePerformedNotesNotInScale: boolean;
	public metronomeCountIn: boolean;
	public metronomeWhileRecording: boolean;
	
	
	constructor() {
		this.reload();
	}
	
	public reload(): void {
		this.autoPlay = window.localStorage.getItem("shitbox4autoPlay") == "true";
		this.autoFollow = window.localStorage.getItem("shitbox4autoFollow") != "false";
		this.enableNotePreview = window.localStorage.getItem("shitbox4enableNotePreview") != "false";
		this.showFifth = window.localStorage.getItem("shitbox4showFifth") == "true";
		this.notesOutsideScale = window.localStorage.getItem("shitbox4notesOutsideScale") == "true";
		this.showLetters = window.localStorage.getItem("shitbox4showLetters") == "true";
		this.showChannels = window.localStorage.getItem("shitbox4showChannels") == "true";
		this.showScrollBar = window.localStorage.getItem("shitbox4showScrollBar") == "true";
		this.alwaysShowSettings = window.localStorage.getItem("shitbox4alwaysShowSettings") == "true";
		this.instrumentCopyPaste = window.localStorage.getItem("shitbox4instrumentCopyPaste") == "true";
		this.enableChannelMuting = window.localStorage.getItem("shitbox4enableChannelMuting") == "true";
		this.displayBrowserUrl = window.localStorage.getItem("shitbox4displayBrowserUrl") != "false";
		this.pressControlForShortcuts = window.localStorage.getItem("shitbox4pressControlForShortcuts") == "true";
		this.enableMidi = window.localStorage.getItem("shitbox4enableMidi") != "false";
		this.showRecordButton = window.localStorage.getItem("shitbox4showRecordButton") == "true";
		this.snapRecordedNotesToRhythm = window.localStorage.getItem("shitbox4snapRecordedNotesToRhythm") == "true";
		this.ignorePerformedNotesNotInScale = window.localStorage.getItem("shitbox4ignorePerformedNotesNotInScale") == "true";
		this.metronomeCountIn = window.localStorage.getItem("shitbox4metronomeCountIn") != "false";
		this.metronomeWhileRecording = window.localStorage.getItem("shitbox4metronomeWhileRecording") != "false";
		this.keyboardLayout = window.localStorage.getItem("shitbox4keyboardLayout") || "wickiHayden";
		this.shitbox4layout = window.localStorage.getItem("shitbox4layout") || "small";
		this.shitbox4colorTheme = window.localStorage.getItem("shitbox4colorTheme") || "shitbox4 classic";
		this.visibleOctaves = ((<any>window.localStorage.getItem("shitbox4visibleOctaves")) >>> 0) || Preferences.defaultVisibleOctaves;
		
		const defaultScale: Scale | undefined = Config.scales.dictionary[window.localStorage.getItem("defaultScale")!];
		this.defaultScale = (defaultScale != undefined) ? defaultScale.index : 0;
		
		if (window.localStorage.getItem("volume") != null) {
			this.volume = Math.min(<any>window.localStorage.getItem("volume") >>> 0, 75);
		}
		
	}
	
	public save(): void {
		window.localStorage.setItem("shitbox4autoPlay", this.autoPlay ? "true" : "false");
		window.localStorage.setItem("shitbox4autoFollow", this.autoFollow ? "true" : "false");
		window.localStorage.setItem("shitbox4enableNotePreview", this.enableNotePreview ? "true" : "false");
		window.localStorage.setItem("shitbox4showFifth", this.showFifth ? "true" : "false");
		window.localStorage.setItem("shitbox4notesOutsideScale", this.notesOutsideScale ? "true" : "false");
		window.localStorage.setItem("shitbox4defaultScale", Config.scales[this.defaultScale].name);
		window.localStorage.setItem("shitbox4showLetters", this.showLetters ? "true" : "false");
		window.localStorage.setItem("shitbox4showChannels", this.showChannels ? "true" : "false");
		window.localStorage.setItem("shitbox4showScrollBar", this.showScrollBar ? "true" : "false");
		window.localStorage.setItem("shitbox4alwaysShowSettings", this.alwaysShowSettings ? "true" : "false");
		window.localStorage.setItem("shitbox4enableChannelMuting", this.enableChannelMuting ? "true" : "false");
		window.localStorage.setItem("shitbox4instrumentCopyPaste", this.instrumentCopyPaste ? "true" : "false");
		window.localStorage.setItem("shitbox4displayBrowserUrl", this.displayBrowserUrl ? "true" : "false");
		window.localStorage.setItem("shitbox4pressControlForShortcuts", this.pressControlForShortcuts ? "true" : "false");
		window.localStorage.setItem("shitbox4enableMidi", this.enableMidi ? "true" : "false");
		window.localStorage.setItem("shitbox4showRecordButton", this.showRecordButton ? "true" : "false");
		window.localStorage.setItem("shitbox4snapRecordedNotesToRhythm", this.snapRecordedNotesToRhythm ? "true" : "false");
		window.localStorage.setItem("shitbox4ignorePerformedNotesNotInScale", this.ignorePerformedNotesNotInScale ? "true" : "false");
		window.localStorage.setItem("shitbox4metronomeCountIn", this.metronomeCountIn ? "true" : "false");
		window.localStorage.setItem("shitbox4metronomeWhileRecording", this.metronomeWhileRecording ? "true" : "false");
		window.localStorage.setItem("shitbox4keyboardLayout", this.keyboardLayout);
		window.localStorage.setItem("shitbox4shitbox4layout", this.shitbox4layout);
		window.localStorage.setItem("shitbox4colorTheme", this.shitbox4colorTheme);
		window.localStorage.setItem("shitbox4volume", String(this.volume));
		window.localStorage.setItem("shitbox4visibleOctaves", String(this.visibleOctaves));
	}
}
