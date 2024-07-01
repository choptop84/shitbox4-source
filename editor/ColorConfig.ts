// Copyright (c) 2012-2022 John Nesky and contributing authors, distributed under the MIT license, see accompanying the LICENSE.md file.

import {BeepBoxOption, DictionaryArray, toNameMap} from "../synth/SynthConfig";
import {Song} from "../synth/synth";
import {HTML} from "imperative-html/dist/esm/elements-strict";

export interface ChannelColors extends BeepBoxOption {
	readonly secondaryChannel: string;
	readonly primaryChannel:   string;
	readonly secondaryNote: string;
	readonly primaryNote: string;
}

export class ColorConfig {
	public static readonly themes: {[name: string]: string} = {
		"shitbox4 classic": `
		:root {
			--page-margin: #252525;
			--editor-background: #252525;
			--hover-preview: white;
			--playhead: white;
			--primary-text: #C8C8C8;
			--secondary-text: #999;
			--inverted-text: black;
			--text-selection: rgba(119,68,255,0.99);
			--box-selection-fill: rgba(255,255,255,0.2);
			--loop-accent: #74f;
			--link-accent: #945800;
			--ui-widget-background: #444;
			--ui-widget-focus: #777;
			--pitch-background: #444;
			--tonic: #864;
			--fifth-note: #468;
			--white-piano-key: #bbb;
			--black-piano-key: #444;
			--pitch1-secondary-channel: #0099A1;
			--pitch1-primary-channel:   #25F3FF;
			--pitch1-secondary-note:    #00BDC7;
			--pitch1-primary-note:      #92F9FF;
			--pitch2-secondary-channel: #A1A100;
			--pitch2-primary-channel:   #FFFF25;
			--pitch2-secondary-note:    #C7C700;
			--pitch2-primary-note:      #FFFF92;
			--pitch3-secondary-channel: #C75000;
			--pitch3-primary-channel:   #FF9752;
			--pitch3-secondary-note:    #FF771C;
			--pitch3-primary-note:      #FFCDAB;
			--pitch4-secondary-channel: #00A100;
			--pitch4-primary-channel:   #50FF50;
			--pitch4-secondary-note:    #00C700;
			--pitch4-primary-note:      #A0FFA0;
			--pitch5-secondary-channel: #D020D0;
			--pitch5-primary-channel:   #FF90FF;
			--pitch5-secondary-note:    #E040E0;
			--pitch5-primary-note:      #FFC0FF;
			--pitch6-secondary-channel: #7777B0;
			--pitch6-primary-channel:   #A0A0FF;
			--pitch6-secondary-note:    #8888D0;
			--pitch6-primary-note:      #D0D0FF;
			--pitch7-secondary-channel: #8AA100;
			--pitch7-primary-channel:   #DEFF25;
			--pitch7-secondary-note:    #AAC700;
			--pitch7-primary-note:      #E6FF92;
			--pitch8-secondary-channel: #DF0019;
			--pitch8-primary-channel:   #FF98A4;
			--pitch8-secondary-note:    #FF4E63;
			--pitch8-primary-note:      #FFB2BB;
			--pitch9-secondary-channel: #00A170;
			--pitch9-primary-channel:   #50FFC9;
			--pitch9-secondary-note:    #00C78A;
			--pitch9-primary-note:      #83FFD9;
			--pitch10-secondary-channel:#A11FFF;
			--pitch10-primary-channel:  #CE8BFF;
			--pitch10-secondary-note:   #B757FF;
			--pitch10-primary-note:     #DFACFF;
			--noise1-secondary-channel: #6F6F6F;
			--noise1-primary-channel:   #AAAAAA;
			--noise1-secondary-note:    #A7A7A7;
			--noise1-primary-note:      #E0E0E0;
			--noise2-secondary-channel: #996633;
			--noise2-primary-channel:   #DDAA77;
			--noise2-secondary-note:    #CC9966;
			--noise2-primary-note:      #F0D0BB;
			--noise3-secondary-channel: #4A6D8F;
			--noise3-primary-channel:   #77AADD;
			--noise3-secondary-note:    #6F9FCF;
			--noise3-primary-note:      #BBD7FF;
			--noise4-secondary-channel: #7A4F9A;
			--noise4-primary-channel:   #AF82D2;
			--noise4-secondary-note:    #9E71C1;
			--noise4-primary-note:      #D4C1EA;
			--noise5-secondary-channel: #607837;
			--noise5-primary-channel:   #A2BB77;
			--noise5-secondary-note:    #91AA66;
			--noise5-primary-note:      #C5E2B2;
				--disabled-note-primary:    #999;
				--disabled-note-secondary:  #666;
			}

			.beepboxEditor input[type="range"]::-moz-range-thumb {
				width: 8px !important;
			  }

			button.playButton,
			button.pauseButton,
			button.recordButton {
				width: 80px;
			}
			button.prevBarButton {
				width: 40px;
				left:-5px;
			}
			button.nextBarButton {
				width: 40px;
			}

			input, 
			div.harmonics svg,
			div.spectrum svg,
			div.filterEditor svg,
			div.fadeInOut svg,
			div.loopEditor svg
			{
				background: black !important;
			}

			div.pattern-area div div svg {
				background: black !important;
			}

			div.trackContainer div.noSelection div {
				--editor-background: black !important;
			}

			.beepboxEditor {
				line-height: 1.25;
			}

			#text-content {
				font-size: 32px;
				line-height: 40px;
			}

			#text-content > section > h1 {
				color: #C8C8C8;
				}
		`,
		"shitbox2": `
		:root {
			--page-margin: maroon;
					--editor-background: black;
					--hover-preview: white;
					--playhead: firebrick;
					--primary-text: silver;
					--secondary-text: #999;
					--inverted-text: black;
				--text-selection: rgba(139,69,19,0.99);
					--box-selection-fill: rgba(220,20,60,0.2);
					--loop-accent: #841;
					--link-accent: #841;
					--ui-widget-background: #800;
					--ui-widget-focus: #a00;
					--pitch-background: #700;
					--tonic: #522;
					--fifth-note: #f75;
					--third-note: #9d3535;
					--white-piano-key: #bbb;
					--black-piano-key: #444;
				--pitch1-secondary-channel: #7e4a35;
					--pitch1-primary-channel:   #c27251;
					--pitch1-secondary-note:    #7e4a35;
					--pitch1-primary-note:      #f09571;
					--pitch2-secondary-channel: #998a5c;
					--pitch2-primary-channel:   #d9c27c;
					--pitch2-secondary-note:    #998a5c;
					--pitch2-primary-note:      #fae196;
					--pitch3-secondary-channel: #9c927c;
					--pitch3-primary-channel:   #dbceb0;
					--pitch3-secondary-note:    #9c927c;
					--pitch3-primary-note:      #eddebb;
					--pitch4-secondary-channel: #838060;
					--pitch4-primary-channel:   #ccc795;
					--pitch4-secondary-note:    #838060;
					--pitch4-primary-note:      #f2ecb1;
					--pitch5-secondary-channel: #8b6f47;
					--pitch5-primary-channel:   #d1a76b;
					--pitch5-secondary-note:    #8b6f47;
					--pitch5-primary-note:      #ffcc82;
					--pitch6-secondary-channel: #a96e5b;
					--pitch6-primary-channel:   #e3967d;
					--pitch6-secondary-note:    #a96e5b;
					--pitch6-primary-note:      #ffa68a;
						--pitch7-secondary-channel: #7e4a35;
					--pitch7-primary-channel:   #c27251;
					--pitch7-secondary-note:    #7e4a35;
					--pitch7-primary-note:      #f09571;
					--pitch8-secondary-channel: #998a5c;
					--pitch8-primary-channel:   #d9c27c;
					--pitch8-secondary-note:    #998a5c;
					--pitch8-primary-note:      #fae196;
					--pitch9-secondary-channel: #9c927c;
					--pitch9-primary-channel:   #dbceb0;
					--pitch9-secondary-note:    #9c927c;
					--pitch9-primary-note:      #eddebb;
					--pitch10-secondary-channel: #838060;
					--pitch10-primary-channel:   #ccc795;
					--pitch10-secondary-note:    #838060;
					--pitch10-primary-note:      #f2ecb1;
					--noise1-secondary-channel: #6f6f6f;
					--noise1-primary-channel:   #aaaaaa;
					--noise1-secondary-note:    #a7a7a7;
					--noise1-primary-note:      #e0e0e0;
					--noise2-secondary-channel: #996633;
					--noise2-primary-channel:   #ddaa77;
					--noise2-secondary-note:    #cc9966;
					--noise2-primary-note:      #f0d0bb;
					--noise3-secondary-channel: #4a6d8f;
					--noise3-primary-channel:   #77aadd;
					--noise3-secondary-note:    #6f9fcf;
					--noise3-primary-note:      #bbd7ff;
					--noise4-secondary-channel: #6f6f6f;
					--noise4-primary-channel:   #aaaaaa;
					--noise4-secondary-note:    #a7a7a7;
					--noise4-primary-note:      #e0e0e0;
					--noise5-secondary-channel: #996633;
					--noise5-primary-channel:   #ddaa77;
					--noise5-secondary-note:    #cc9966;
					--noise5-primary-note:      #f0d0bb;
				}

			.beepboxEditor input[type="range"]::-moz-range-thumb {
				width: 8px !important;
			  }

			button.playButton,
			button.pauseButton,
			button.recordButton {
				width: 80px;
			}
			button.prevBarButton {
				width: 40px;
				left:-5px;
			}
			button.nextBarButton {
				width: 40px;
			}

			.beepboxEditor {
				line-height: 1.25;
			}

			#text-content {
				font-size: 32px;
				line-height: 40px;
			}

			#text-content > section > h1 {
				color: #C8C8C8;
				}
		`,
		"realm": `
		:root {
			--page-margin: #252525;
			--editor-background: #252525;
			--hover-preview: white;
			--playhead: white;
			--primary-text: #6e6e6e;
			--secondary-text: #999;
			--inverted-text: black;
			--text-selection: rgba(119,68,255,0.99);
			--box-selection-fill: rgba(255,255,255,0.2);
			--loop-accent: #673daf;
			--link-accent: #945800;
			--ui-widget-background: #444;
			--ui-widget-focus: #565656;
			--pitch-background:  #673daf;
			--tonic: #673daf;
			--fifth-note: #673daf;
			--octave-scrollbar: #673daf;
			--white-piano-key: #bbb;
			--black-piano-key: #444;
			 --pitch1-secondary-channel: #0099a1;
			 --pitch1-primary-channel:   #25f3ff;
			 --pitch1-secondary-note:    #0099a1;
			 --pitch1-primary-note:      #25f3ff;
			 --pitch2-secondary-channel: #439143;
			 --pitch2-primary-channel:   #44ff44;
			 --pitch2-secondary-note:    #439143;
			 --pitch2-primary-note:      #44ff44;
			 --pitch3-secondary-channel: #a1a100;
			 --pitch3-primary-channel:   #ffff25;
			 --pitch3-secondary-note:    #a1a100;
			 --pitch3-primary-note:      #ffff25;
			 --pitch4-secondary-channel: #c75000;
			 --pitch4-primary-channel:   #ff9752;
			 --pitch4-secondary-note:    #c75000;
			 --pitch4-primary-note:      #ff9752;
			 --pitch5-secondary-channel: #d020d0;
			 --pitch5-primary-channel:   #FF90FF;
			 --pitch5-secondary-note:    #d020d0;
			 --pitch5-primary-note:      #ff90ff;
			 --pitch6-secondary-channel: #552377;
			 --pitch6-primary-channel:   #9f31ea;
			 --pitch6-secondary-note:    #552377;
			 --pitch6-primary-note:      #9f31ea;
			 --pitch7-secondary-channel: #221b89;
			 --pitch7-primary-channel:   #2b6aff;
			 --pitch7-secondary-note:    #221b89;
			 --pitch7-primary-note:      #2b6aff;
			 --pitch8-secondary-channel: #00995f;
			 --pitch8-primary-channel:   #00ff9f;
			 --pitch8-secondary-note:    #00995f;
			 --pitch8-primary-note:      #00ff9f;
			 --pitch9-secondary-channel: #d6b03e;
			 --pitch9-primary-channel:   #ffbf00;
			 --pitch9-secondary-note:    #d6b03e;
			 --pitch9-primary-note:      #ffbf00;
			 --pitch10-secondary-channel:#b25915;
			 --pitch10-primary-channel:  #d85d00;
			 --pitch10-secondary-note:   #b25915;
			 --pitch10-primary-note:     #d85d00;
			 --pitch11-secondary-channel:#891a60;
			 --pitch11-primary-channel:  #ff00a1;
			 --pitch11-secondary-note:   #891a60;
			 --pitch11-primary-note:     #ff00a1;
			 --pitch12-secondary-channel:#965cbc;
			 --pitch12-primary-channel:  #c26afc;
			 --pitch12-secondary-note:   #965cbc;
			 --pitch12-primary-note:     #c26afc;
			 --noise1-secondary-channel: #991010;
			 --noise1-primary-channel:   #ff1616;
			 --noise1-secondary-note:    #991010;
			 --noise1-primary-note:      #ff1616;
			 --noise2-secondary-channel: #aaaaaa;
			 --noise2-primary-channel:   #ffffff;
			 --noise2-secondary-note:    #aaaaaa;
			 --noise2-primary-note:      #ffffff;
			 --noise3-secondary-channel: #5869BD;
			 --noise3-primary-channel:   #768dfc;
			 --noise3-secondary-note:    #5869BD;
			 --noise3-primary-note:      #768dfc;
			 --noise4-secondary-channel: #7c9b42;
			 --noise4-primary-channel:   #a5ff00;
			 --noise4-secondary-note:    #7c9b42;
			 --noise4-primary-note:      #a5ff00;
			 --noise5-secondary-channel: #7c9b42;
			 --noise5-primary-channel:   #A2BB77;
			 --noise5-secondary-note:    #91AA66;
			 --noise5-primary-note:      #C5E2B2;
			}

			.beepboxEditor input[type="range"]::-moz-range-thumb {
				width: 8px !important;
			  }

			button.playButton {
				width: 80px;
			}
			button.prevBarButton {
				width: 40px;
				left:-5px;
			}
			button.nextBarButton {
				width: 40px;
			}

			span input, 
			div.harmonics svg,
			div.spectrum svg,
			div.filterEditor svg,
			div.fadeInOut svg,
			div.loopEditor svg,
			svg#firstImage 
			{
				background: black !important;
			}

			.beepboxEditor {
				line-height: 1.25;
			}

			 #octaveScrollBarContainer {
			 background-color: black;
			 }

			#text-content {
				font-size: 32px;
				line-height: 40px;
			}

			#text-content > section > h1 {
				color: #C8C8C8;
				}

			html {
				font: monospace !important;
				}
				`,
	};
	
	public static readonly pageMargin: string = "var(--page-margin)";
	public static readonly editorBackground: string = "var(--editor-background)";
	public static readonly hoverPreview: string = "var(--hover-preview)";
	public static readonly playhead: string = "var(--playhead)";
	public static readonly primaryText: string = "var(--primary-text)";
	public static readonly secondaryText: string = "var(--secondary-text)";
	public static readonly invertedText: string = "var(--inverted-text)";
	public static readonly textSelection: string = "var(--text-selection)";
	public static readonly boxSelectionFill: string = "var(--box-selection-fill)";
	public static readonly loopAccent: string = "var(--loop-accent)";
	public static readonly linkAccent: string = "var(--link-accent)";
	public static readonly uiWidgetBackground: string = "var(--ui-widget-background)";
	public static readonly uiWidgetFocus: string = "var(--ui-widget-focus)";
	public static readonly pitchBackground: string = "var(--pitch-background)";
	public static readonly tonic: string = "var(--tonic)";
	public static readonly fifthNote: string = "var(--fifth-note)";
	public static readonly whitePianoKey: string = "var(--white-piano-key)";
	public static readonly blackPianoKey: string = "var(--black-piano-key)";
	
	public static readonly pitchChannels: DictionaryArray<ChannelColors> = toNameMap([
		{
			name: "pitch1", // cyan
			secondaryChannel: "var(--pitch1-secondary-channel)",
			primaryChannel:   "var(--pitch1-primary-channel)",
			secondaryNote:    "var(--pitch1-secondary-note)",
			primaryNote:      "var(--pitch1-primary-note)",
		}, {
			name: "pitch2", // yellow
			secondaryChannel: "var(--pitch2-secondary-channel)",
			primaryChannel:   "var(--pitch2-primary-channel)",
			secondaryNote:    "var(--pitch2-secondary-note)",
			primaryNote:      "var(--pitch2-primary-note)",
		}, {
			name: "pitch3", // orange
			secondaryChannel: "var(--pitch3-secondary-channel)",
			primaryChannel:   "var(--pitch3-primary-channel)",
			secondaryNote:    "var(--pitch3-secondary-note)",
			primaryNote:      "var(--pitch3-primary-note)",
		}, {
			name: "pitch4", // green
			secondaryChannel: "var(--pitch4-secondary-channel)",
			primaryChannel:   "var(--pitch4-primary-channel)",
			secondaryNote:    "var(--pitch4-secondary-note)",
			primaryNote:      "var(--pitch4-primary-note)",
		}, {
			name: "pitch5", // magenta
			secondaryChannel: "var(--pitch5-secondary-channel)",
			primaryChannel:   "var(--pitch5-primary-channel)",
			secondaryNote:    "var(--pitch5-secondary-note)",
			primaryNote:      "var(--pitch5-primary-note)",
		}, {
			name: "pitch6", // blue
			secondaryChannel: "var(--pitch6-secondary-channel)",
			primaryChannel:   "var(--pitch6-primary-channel)",
			secondaryNote:    "var(--pitch6-secondary-note)",
			primaryNote:      "var(--pitch6-primary-note)",
		}, {
			name: "pitch7", // olive
			secondaryChannel: "var(--pitch7-secondary-channel)",
			primaryChannel:   "var(--pitch7-primary-channel)",
			secondaryNote:    "var(--pitch7-secondary-note)",
			primaryNote:      "var(--pitch7-primary-note)",
		}, {
			name: "pitch8", // red
			secondaryChannel: "var(--pitch8-secondary-channel)",
			primaryChannel:   "var(--pitch8-primary-channel)",
			secondaryNote:    "var(--pitch8-secondary-note)",
			primaryNote:      "var(--pitch8-primary-note)",
		}, {
			name: "pitch9", // teal
			secondaryChannel: "var(--pitch9-secondary-channel)",
			primaryChannel:   "var(--pitch9-primary-channel)",
			secondaryNote:    "var(--pitch9-secondary-note)",
			primaryNote:      "var(--pitch9-primary-note)",
		}, {
			name: "pitch10", // purple
			secondaryChannel: "var(--pitch10-secondary-channel)",
			primaryChannel:   "var(--pitch10-primary-channel)",
			secondaryNote:    "var(--pitch10-secondary-note)",
			primaryNote:      "var(--pitch10-primary-note)",
		},
	]);
	public static readonly noiseChannels: DictionaryArray<ChannelColors> = toNameMap([
		{
			name: "noise1", // gray
			secondaryChannel: "var(--noise1-secondary-channel)",
			primaryChannel:   "var(--noise1-primary-channel)",
			secondaryNote:    "var(--noise1-secondary-note)",
			primaryNote:      "var(--noise1-primary-note)",
		}, {
			name: "noise2", // brown
			secondaryChannel: "var(--noise2-secondary-channel)",
			primaryChannel:   "var(--noise2-primary-channel)",
			secondaryNote:    "var(--noise2-secondary-note)",
			primaryNote:      "var(--noise2-primary-note)",
		}, {
			name: "noise3", // azure
			secondaryChannel: "var(--noise3-secondary-channel)",
			primaryChannel:   "var(--noise3-primary-channel)",
			secondaryNote:    "var(--noise3-secondary-note)",
			primaryNote:      "var(--noise3-primary-note)",
		}, {
			name: "noise4", // purple
			secondaryChannel: "var(--noise4-secondary-channel)",
			primaryChannel:   "var(--noise4-primary-channel)",
			secondaryNote:    "var(--noise4-secondary-note)",
			primaryNote:      "var(--noise4-primary-note)",
		}, {
			name: "noise5", // sage
			secondaryChannel: "var(--noise5-secondary-channel)",
			primaryChannel:   "var(--noise5-primary-channel)",
			secondaryNote:    "var(--noise5-secondary-note)",
			primaryNote:      "var(--noise5-primary-note)",
		},
	]);
	
	public static getChannelColor(song: Song, channel: number): ChannelColors {
		return channel < song.pitchChannelCount
			? ColorConfig.pitchChannels[channel % ColorConfig.pitchChannels.length]
			: ColorConfig.noiseChannels[(channel - song.pitchChannelCount) % ColorConfig.noiseChannels.length];
	}
	
	private static readonly _styleElement: HTMLStyleElement = document.head.appendChild(HTML.style({type: "text/css"}));
	
	public static setTheme(name: string): void {
		let theme: string = this.themes[name];
		if (theme == undefined) theme = this.themes["dark classic"];
		this._styleElement.textContent = theme;
		
		const themeColor = <HTMLMetaElement> document.querySelector("meta[name='theme-color']");
		if (themeColor != null) {
			themeColor.setAttribute("content", getComputedStyle(document.documentElement).getPropertyValue('--ui-widget-background'));
		}
	}
}
