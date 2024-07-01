import {HTML} from "imperative-html/dist/esm/elements-strict";
const {div, button} = HTML;

export let realMoney: number = parseInt(window.localStorage.getItem('money') || '0', 10);
export let gems: number = parseInt(window.localStorage.getItem('gems') || '0', 10);
export let moneyMaxChance: number = 20;

const shop = document.getElementById('shopButtons');
const shopPage = document.getElementById('shopPage');

const gachaListCommon = ["choptop84"];
const gachaListRare = ["Fauxx", "Yuck31", "Lenny", "Keiiphobix", "Just a Toad", "yOph", "Grandnands"];
const gachaListEpic = ["Bluto", "Hogbrainrot", "Hailey", "Nintari", "Lognes", "Smerg the Dragon", "Chuck"];
const gachaListSuperRare = ["Answearing", "Soshu", "Main", "TheSeasOfEnvy", "Geli", "Nobonoko", "Okayxairen", "BrodTsumi", "Impasaurus", "TheGubbys", "Em (O^O)", "Scoob"];
const gachaListUltraRare = ["Jummbus", "Neptendo", "LeoV", "Chippy"];
const gachaListLegendary = ["Shaktool"];
var inventory = new Array();
var storedInventory = localStorage.getItem("inventory");

export var boughtStuff = new Array();
var storedStuff = localStorage.getItem("bought");

if (storedInventory != null) {
    inventory = JSON.parse(storedInventory);
}

if (storedStuff != null) {
    boughtStuff = JSON.parse(storedStuff);
}

export function addMoney() {
    realMoney += Math.round(Math.random() * moneyMaxChance); 
    window.localStorage.setItem('money', String(realMoney));

    var gemchance = Math.round(Math.random() * 10)

    if (gemchance == 1) {
        gems++;
        window.localStorage.setItem('gems', String(gems));
    }
}

export function removeMoney(moneyToRemove: number) {
    if (realMoney - moneyToRemove >= 0) {
    realMoney -= moneyToRemove; 
    localStorage.setItem("money", String(realMoney));
    } else {
    alert("You don't have enough shitcoins bitch!");
    }
}

export function removeGems(gemsToRemove: number) {
    if (gems - gemsToRemove >= 0) {
    gems -= gemsToRemove; 
    localStorage.setItem("gems", String(gems));
} else {
    alert("You don't have enough gems bitch!");
    }
}


export let moneyShits: HTMLDivElement = div({style:"top:0; left:0; position:fixed; pointer-events: none; z-index: 15;"},"shitcoins: "+realMoney);
export let gemShits: HTMLDivElement = div({style:"top:32px; left:0; position:fixed; pointer-events: none; z-index: 15;"},"gems: "+gems);

let songPlayerButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"songPlayerOption", onclick: ()=>buyThing("songPlayer", 3000, songPlayerButton)},"Song Player"), div({style:"font-size: 16px"},"3000 shitcoins")
);

let shortenUrlButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"shortenUrlOption", onclick: ()=>buyThing("shortenUrl", 2000, shortenUrlButton)},"Shorten Url"), div({style:"font-size: 16px"},"2000 shitcoins")
);

let beatsPerBarButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"beatsPerBarOption", onclick: ()=>buyThing("beatsPerBar", 2500, beatsPerBarButton)},"BPM Prompt"), div({style:"font-size: 16px"},"2500 shitcoins")
);

let showScrollBarButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"showScrollBarOption", onclick: ()=>buyThing("showScrollBar", 3000, showScrollBarButton)},"Octave ScrollBar"), div({style:"font-size: 16px"},"3000 shitcoins")
);

let showLettersButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"showLettersOption", onclick: ()=>buyThing("showLetters", 3000, showLettersButton)},"Piano Keys"), div({style:"font-size: 16px"},"3000 shitcoins")
);

let keyDButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"keyDOption", onclick: ()=>buyThing("keyD", 500, keyDButton)},"D"), div({style:"font-size: 16px"},"500 shitcoins")
);

let easySadButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"easySadOption", onclick: ()=>buyThing("easySad", 500, easySadButton)},"Easy :("), div({style:"font-size: 16px"},"500 shitcoins")
);

let gachaButton: HTMLButtonElement = button({class:"shopButton", id:"gachaButton", onclick: ()=>openThing("gacha")}, "Gacha");
let itemsButton: HTMLButtonElement = button({class:"shopButton", id:"buyButton", onclick: ()=>openThing("items")}, "Buy");
let closeShopButton: HTMLButtonElement = button({class:"shopButton", id:"closeButton", onclick: ()=>closeshop()}, "Close");

let itemsDiv: HTMLDivElement = div({class:"itemsDiv", id:"itemsDiv", style:"display:none; position:absolute; left:10vw; bottom: 20vw; background: #531619; border: #ff7a87; border-style: solid;"}, 
    div({style:"margin: 0.5em;"},"Stupid Shit"),
    div({style:"display: flex; flex-direction: column;max-height: 270px; overflow-y: scroll;"},
        div({class:"fileMenuStuff"},
            div({style:"font-size: 16px"},"File Menu Shit:"),
                div({style:"display: flex; max-width: 35vw; overflow-x: scroll;"},
                        songPlayerButton, shortenUrlButton,
            ), 
        ),
        div({class:"editMenuStuff"},
            div({style:"font-size: 16px"},"Edit Menu Shit:"),
                div({style:"display: flex; max-width: 35vw; overflow-x: scroll;"},
                    beatsPerBarButton,
            ), 
        ),
        div({class:"prefMenuStuff"},
            div({style:"font-size: 16px"},"Preferences Menu Shit:"),
                div({style:"display: flex; max-width: 35vw; overflow-x: scroll;"},
                    showScrollBarButton, showLettersButton
            ), 
        ),
        div({class:"keys"},
            div({style:"font-size: 16px"},"Keys:"),
                div({style:"display: flex; max-width: 35vw; overflow-x: scroll;"},
                    keyDButton,
            ), 
        ),
        div({class:"scales"},
            div({style:"font-size: 16px"},"Scales:"),
                div({style:"display: flex; max-width: 35vw; overflow-x: scroll;"},
                    easySadButton,
            ), 
        ),
    ),
    button({class:"shopButton", id:"closeButton", onclick: ()=>closeThing("items")},"Close"),
);
let gachaDiv: HTMLDivElement = div({class:"gachaDiv", id:"gachaDiv", style:"display:none; position:absolute; left:7vw; bottom: 20vw; background: #531619; border: #ff7a87; border-style: solid;"}, 
    div({style:"margin-bottom: 0.5em; font-size: 64px;"},"Gacha"),
    div({style:""},"Roll for awesome rewards:"),
    div({style:"display: flex; "},
        div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em;"},
        button({class:"shopButton", id:"gachaButton", onclick: ()=>rollOneGacha()},"Roll 1x"), div({style:"font-size: 16px"},"50 Gems")
        ),
        div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em;"},
        button({class:"shopButton", id:"gachaButton", onclick: ()=>rollMultipleGacha(5)},"Roll 5x"), div({style:"font-size: 16px"},"250 Gems")
        ),
    ),
    div({class:"result", id:"gachaResult", style:"display: flex;"}, `You haven't rolled yet`, div({class:"result", id:"gachaRarity"}, "!")),
    button({class:"shopButton", id:"closeButton", onclick: ()=>closeThing("gacha")},"close"),
);

if (boughtStuff.includes("songPlayer")) {
songPlayerButton.style.display = "none";
}

function rollGacha() {
    let chanceThingy = Math.floor(Math.random() * 100); 
    let whatYouGot = "";
    const gachaResult = document.getElementById('gachaResult');
    const gachaRarity = document.getElementById('gachaRarity');
    if (chanceThingy >= 0 && chanceThingy < 65) { // common
        whatYouGot = gachaListCommon[Math.floor(Math.random() * gachaListCommon.length)]; 
        if (gachaRarity != null) {
            gachaRarity.innerHTML = " (Common)";
        }
    }
    if (chanceThingy >= 65 && chanceThingy < 85) { // rare
        whatYouGot = gachaListRare[Math.floor(Math.random() * gachaListRare.length)]; 
        if (gachaRarity != null) {
            gachaRarity.innerHTML = " (Rare)";
        }
    }
    if (chanceThingy >= 85 && chanceThingy < 95) { // epic
        whatYouGot = gachaListEpic[Math.floor(Math.random() * gachaListEpic.length)]; 
        if (gachaRarity != null) {
            gachaRarity.innerHTML = " (Epic)";
        }
    }
    if (chanceThingy >= 95 && chanceThingy < 98) { // super rare
        whatYouGot = gachaListSuperRare[Math.floor(Math.random() * gachaListSuperRare.length)]; 
        if (gachaRarity != null) {
            gachaRarity.innerHTML = " (SR)";
        }
    }
    if (chanceThingy >= 98 && chanceThingy < 99) { // ultra rare
        whatYouGot = gachaListUltraRare[Math.floor(Math.random() * gachaListUltraRare.length)]; 
        if (gachaRarity != null) {
            gachaRarity.innerHTML = " (UR)";
        }}
    if (chanceThingy >= 99 ) { // LEGENDARY
        whatYouGot = gachaListLegendary[Math.floor(Math.random() * gachaListLegendary.length)]; 
        if (gachaRarity != null) {
            gachaRarity.innerHTML = " (UR)";
        }}

        inventory.push(whatYouGot);
        if (gachaResult != null) {
            gachaResult.innerHTML = "You just got: "+whatYouGot;
        }
    if (inventory != null) {
        localStorage.setItem("inventory", JSON.stringify(inventory));
    }
}

function buyThing(thingToBuy: string, price: number, hides: HTMLDivElement) {
    if (!boughtStuff.includes(thingToBuy)) {
        if (realMoney >= price) {
            removeMoney(price);
            boughtStuff.push(thingToBuy);
            if (boughtStuff != null) {
                localStorage.setItem("bought", JSON.stringify(boughtStuff));
            }
            moneyShits.innerHTML = "shitcoins: "+realMoney;
            hides.style.display = "none";
            alert("You might own what you just bought, but you won't see any changes until you click on the editor. It's a pain I KNOW but deal with it.")
        } else {
            alert("You cannot buy that rn! Get more moneys!!!");
        }
    } else {
        if (realMoney >= price) {
        alert("You can't buy this! You already own it!");
        } else {
        alert("Even though you don't have enough, you still own this. Meaning you don't need to buy it again.");
        }
    }
}

function rollOneGacha() {
    if (gems >= 50) {
        rollGacha();
        removeGems(50);
        gemShits.innerHTML = "gems: "+gems;
    } else {
        alert("damn you're broke");
    }
    
}

function rollMultipleGacha(num: number) {
    if (gems >= 50*num) {
        for (let i = num; i > 0; num--) {
            rollGacha();
        }
        removeGems(50*num);
        gemShits.innerHTML = "gems: "+gems;
    } else {
        alert("damn you're broke");
    }
}

function openThing(thing:string) {
    if (thing != null && thing != undefined) {
       let divThing = document.getElementById(thing+"Div");
           if (divThing != null) {
           divThing.style.display = "unset"; 
                if (shop != null) {
                shop.style.display = "none";
                }
            } else {
             console.log("how the fuck? Somehow the "+thing+" div isn't real! Did you spell it right dumbass?");
            }
        if (shopPage != null) {
            shopPage.style.display = "unset";
            } else {
             console.log("how the fuck? Somehow the shop page isn't real!");
            }
    }
}

function closeThing(thing:string) {
    if (thing != null && thing != undefined) {
       let divThing = document.getElementById(thing+"Div");
           if (divThing != null) {
           divThing.style.display = "none"; 
                if (shop != null) {
                shop.style.display = "";
                }
            } else {
             console.log("how the fuck? Somehow the "+thing+" div isn't real! Did you spell it right dumbass?");
            }
        if (shopPage != null) {
            shopPage.style.display = "none";
            } else {
             console.log("how the fuck? Somehow the shop page isn't real!");
            }
    }
}

function closeshop() {
    const shopdiv = document.getElementById('shop');
    shopdiv!.style.display = 'none';
}

document.body.appendChild(moneyShits);
document.body.appendChild(gemShits);
shop?.appendChild(gachaButton);
shop?.appendChild(itemsButton);
shop?.appendChild(closeShopButton);
shopPage?.appendChild(itemsDiv);
shopPage?.appendChild(gachaDiv);