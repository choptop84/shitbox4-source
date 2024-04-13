import {HTML} from "imperative-html/dist/esm/elements-strict";
const {div, button} = HTML;

export let realMoney: number = parseInt(window.localStorage.getItem('money') || '0', 10);
export let gems: number = parseInt(window.localStorage.getItem('gems') || '0', 10);
export let moneyMaxChance: number = 20;

const shop = document.getElementById('shopButtons');

export function addMoney() {
    realMoney += Math.round(Math.random() * moneyMaxChance); 
    window.localStorage.setItem('money', String(realMoney));

    var gemchance = Math.round(Math.random() * 10)

    if (gemchance == 1) {
        gems++;
        window.localStorage.setItem('gems', String(gems));
    }

}

export function removeMoney(moneyToRemove = 5) {
    if (realMoney - moneyToRemove > 0) {
    realMoney -= moneyToRemove; } else {
    alert("You don't have enough shitcoins bitch!");
    }
}

export let moneyShits: HTMLDivElement = div({style:"top:0; left:0; position:fixed; pointer-events: none; z-index: 15;"},"shitcoins: "+realMoney);
export let gemShits: HTMLDivElement = div({style:"top:32px; left:0; position:fixed; pointer-events: none; z-index: 15;"},"gems: "+gems);

let gachaButton: HTMLButtonElement = button({class:"shopButton", id:"gachaButton", onclick: ()=>opengacha()}, "Gacha");
let shopButton: HTMLButtonElement = button({class:"shopButton", id:"buyButton", onclick: ()=>openbuy()}, "Buy")
let closeButton: HTMLButtonElement = button({class:"shopButton", id:"closeButton", onclick: ()=>closeshop()}, "Close")

function opengacha() {
    
}

function openbuy() {
    
}

function closeshop() {
    const shopdiv = document.getElementById('shop');
    shopdiv!.style.display = 'none';
}

document.body.appendChild(moneyShits);
document.body.appendChild(gemShits);
shop?.appendChild(gachaButton);
shop?.appendChild(shopButton);
shop?.appendChild(closeButton);