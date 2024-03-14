//import {HTML} from "imperative-html/dist/esm/elements-strict";
//const {p, div} = HTML;

export let realMoney: number = parseInt(window.localStorage.getItem('money') || '0', 10);
export let gems: number = parseInt(window.localStorage.getItem('gems') || '0', 10);
export let moneyMaxChance: number = 20;

export function addMoney() {
    realMoney += Math.round(Math.random() * moneyMaxChance); }
