// Copyright (c) 2012-2022 John Nesky and contributing authors, distributed under the MIT license, see accompanying the LICENSE.md file.

import {DictionaryArray, BeepBoxOption, InstrumentType, toNameMap} from "../synth/SynthConfig";

export interface PresetCategory extends BeepBoxOption {
	readonly presets: DictionaryArray<Preset>;
}

export interface Preset extends BeepBoxOption {
	readonly isNoise?: boolean;
	readonly generalMidi?: boolean;
	readonly midiProgram?: number;
	readonly midiSubharmonicOctaves?: number;
	readonly customType?: InstrumentType;
	readonly settings?: any;
}

export const isMobile: boolean = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|android|ipad|playbook|silk/i.test(navigator.userAgent);

export function prettyNumber(value: number): string {
	return value.toFixed(2).replace(/\.?0*$/, "");
}

export class EditorConfig {
	public static readonly version: string = "";
	
	public static readonly releaseNotesURL: string = "https://github.com/johnnesky/beepbox/releases/tag/v" + EditorConfig.version;
	
	public static readonly isOnMac: boolean = /^Mac/i.test(navigator.platform) || /Mac OS X/i.test(navigator.userAgent) || /^(iPhone|iPad|iPod)/i.test(navigator.platform) || /(iPhone|iPad|iPod)/i.test(navigator.userAgent);
	public static readonly ctrlSymbol: string = EditorConfig.isOnMac ? "⌘" : "Ctrl+";
	public static readonly ctrlName: string = EditorConfig.isOnMac ? "command" : "control";
	
	public static readonly presetCategories: DictionaryArray<PresetCategory> = toNameMap([
		{name: "Custom Instruments", presets: <DictionaryArray<Preset>> toNameMap([
			{name: "chip wave",        customType: InstrumentType.chip},
			{name: "FM (expert)",      customType: InstrumentType.fm},
			{name: "basic noise",      customType: InstrumentType.noise},
			{name: "spectrum",         customType: InstrumentType.spectrum},
			{name: "drumset",          customType: InstrumentType.drumset},
			{name: "harmonics",        customType: InstrumentType.harmonics},
			{name: "pulse width",      customType: InstrumentType.pwm},
			{name: "picked string",    customType: InstrumentType.pickedString},
			{name: "supersaw",         customType: InstrumentType.supersaw},
		])},
		{name: "Presets? Fuck you get creative", presets: <DictionaryArray<Preset>> toNameMap([
			{name: "shit", midiProgram:  80, settings: {"type":"chip","eqFilter":[],"effects":["transition type","chord type","pitch shift","detune","vibrato","note filter","distortion","bitcrusher","chorus","echo","reverb"],"transition":"slide in pattern","chord":"arpeggio","pitchShiftSemitones":24,"detuneCents":45,"vibrato":"heavy","noteFilter":[{"type":"low-pass","cutoffHz":8000,"linearGain":11.3137},{"type":"peak","cutoffHz":2378.41,"linearGain":0.125},{"type":"peak","cutoffHz":3363.59,"linearGain":0.25},{"type":"peak","cutoffHz":1189.21,"linearGain":0.3536},{"type":"peak","cutoffHz":297.3,"linearGain":0.3536},{"type":"peak","cutoffHz":148.65,"linearGain":11.3137},{"type":"low-pass","cutoffHz":16000,"linearGain":11.3137}],"distortion":100,"bitcrusherOctave":0,"bitcrusherQuantization":100,"chorus":100,"echoSustain":100,"echoDelayBeats":2,"reverb":100,"fadeInSeconds":0,"fadeOutTicks":-1,"wave":"spiky","unison":"piano","envelopes":[]}},
		])},
	]);
	
	public static valueToPreset(presetValue: number): Preset | null {
		const categoryIndex: number = presetValue >> 6;
		const presetIndex: number = presetValue & 0x3F;
		return EditorConfig.presetCategories[categoryIndex].presets[presetIndex];
	}
	
	public static midiProgramToPresetValue(program: number): number | null {
		for (let categoryIndex: number = 0; categoryIndex < EditorConfig.presetCategories.length; categoryIndex++) {
			const category: PresetCategory = EditorConfig.presetCategories[categoryIndex];
			for (let presetIndex: number = 0; presetIndex < category.presets.length; presetIndex++) {
				const preset: Preset = category.presets[presetIndex];
				if (preset.generalMidi && preset.midiProgram == program) return (categoryIndex << 6) + presetIndex;
			}
		}
		return null;
	}
	
	public static nameToPresetValue(presetName: string): number | null {
		for (let categoryIndex: number = 0; categoryIndex < EditorConfig.presetCategories.length; categoryIndex++) {
			const category: PresetCategory = EditorConfig.presetCategories[categoryIndex];
			for (let presetIndex: number = 0; presetIndex < category.presets.length; presetIndex++) {
				const preset: Preset = category.presets[presetIndex];
				if (preset.name == presetName) return (categoryIndex << 6) + presetIndex;
			}
		}
		return null;
	}
}
