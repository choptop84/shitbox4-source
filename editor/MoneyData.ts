import {HTML} from "imperative-html/dist/esm/elements-strict";
const {div, button} = HTML;

export let realMoney: number = parseInt(window.localStorage.getItem('money') || '0', 10);
export let gems: number = parseInt(window.localStorage.getItem('gems') || '0', 10);
export let moneyMaxChance: number = 50;

const shop = document.getElementById('shopButtons');
const shopPage = document.getElementById('shopPage');

const gachaListCommon = ["choptop84", "Just a Toad"];
const gachaListRare = ["Fauxx", "Yuck31", "Lenny", "Keiiphobix",  "yOph", "Grandnands"];
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
        gems += Math.round(Math.random() * 3);
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

//#region File Menu Shits
    let songPlayerButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
        button({class:"shopButton", id:"songPlayerOption", onclick: ()=>buyThing("songPlayer", 2500, songPlayerButton)},"Song Player"), div({style:"font-size: 16px"},"2500 shitcoins")
    );
    if (boughtStuff.includes("songPlayer")) {
        songPlayerButton.style.display = "none";
    }

    let shortenUrlButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
        button({class:"shopButton", id:"shortenUrlOption", onclick: ()=>buyThing("shortenUrl", 1000, shortenUrlButton)},"Shorten Url"), div({style:"font-size: 16px"},"1000 shitcoins")
    );
    if (boughtStuff.includes("shortenUrl")) {
        shortenUrlButton.style.display = "none";
    }

    let importButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
        button({class:"shopButton", id:"importOption", onclick: ()=>buyThing("import", 2500, importButton)},"Import Prompt"), div({style:"font-size: 16px"},"2500 shitcoins")
    );
    if (boughtStuff.includes("import")) {
        importButton.style.display = "none";
    }

    let exportButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
        button({class:"shopButton", id:"exportOption", onclick: ()=>buyThing("export", 2500, exportButton)},"Export Prompt"), div({style:"font-size: 16px"},"2500 shitcoins")
    );
    if (boughtStuff.includes("export")) {
        exportButton.style.display = "none";
    }

    let recoveryButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
        button({class:"shopButton", id:"recoveryOption", onclick: ()=>buyThing("recovery", 2500, recoveryButton)},"Recovery Prompt"), div({style:"font-size: 16px"},"2500 shitcoins")
    );
    if (boughtStuff.includes("recovery")) {
        exportButton.style.display = "none";
    }

    let copyUrlButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
        button({class:"shopButton", id:"copyUrlOption", onclick: ()=>buyThing("copyUrl", 1500, copyUrlButton)},"Copy Url"), div({style:"font-size: 16px"},"1500 shitcoins")
    );
    if (boughtStuff.includes("copyUrl")) {
        copyUrlButton.style.display = "none";
    }
//#endregion
//#region Edit Menu Shits
    let beatsPerBarButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
        button({class:"shopButton", id:"beatsPerBarOption", onclick: ()=>buyThing("beatsPerBar", 2500, beatsPerBarButton)},"BPM Prompt"), div({style:"font-size: 16px"},"2500 shitcoins")
    );
    if (boughtStuff.includes("beatsPerBar")) {
        beatsPerBarButton.style.display = "none";
    }
//#endregion
//#region Preferences Menu Shits
let showScrollBarButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"showScrollBarOption", onclick: ()=>buyThing("showScrollBar", 1500, showScrollBarButton)},"Octave ScrollBar"), div({style:"font-size: 16px"},"1500 shitcoins")
);
if (boughtStuff.includes("showScrollBar")) {
    shortenUrlButton.style.display = "none";
}

let showLettersButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"showLettersOption", onclick: ()=>buyThing("showLetters", 1500, showLettersButton)},"Piano Keys"), div({style:"font-size: 16px"},"1500 shitcoins")
);
if (boughtStuff.includes("showLetters")) {
    showLettersButton.style.display = "none";
}

let autoPlayButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"autoPlayOption", onclick: ()=>buyThing("autoPlay", 500, autoPlayButton)},"Auto Play"), div({style:"font-size: 16px"},"500 shitcoins")
);
if (boughtStuff.includes("autoPlay")) {
    autoPlayButton.style.display = "none";
}

let autoFollowButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"autoFollowOption", onclick: ()=>buyThing("autoFollow", 500, autoFollowButton)},"Auto Follow"), div({style:"font-size: 16px"},"1000 shitcoins")
);
if (boughtStuff.includes("autoFollow")) {
    autoFollowButton.style.display = "none";
}

let enableNotePreviewButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"enableNotePreviewOption", onclick: ()=>buyThing("enableNotePreview", 2000, enableNotePreviewButton)},"Preview Notes"), div({style:"font-size: 16px"},"2000 shitcoins")
);
if (boughtStuff.includes("enableNotePreview")) {
    enableNotePreviewButton.style.display = "none";
}

let fifthNoteButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"fifthNoteOption", onclick: ()=>buyThing("fifthNote", 2500, fifthNoteButton)},"Fifth Note"), div({style:"font-size: 16px"},"2500 shitcoins")
);
if (boughtStuff.includes("fifthNote")) {
    fifthNoteButton.style.display = "none";
}

let notesOutsideScaleButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"notesOutsideScaleOption", onclick: ()=>buyThing("notesOutsideScale", 1000, notesOutsideScaleButton)},"Notes Outside Scale"), div({style:"font-size: 16px"},"1000 shitcoins")
);
if (boughtStuff.includes("notesOutsideScale")) {
    notesOutsideScaleButton.style.display = "none";
}

let showChannelsButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"showChannelsOption", onclick: ()=>buyThing("showChannels", 2500, showChannelsButton)},"Show Channels"), div({style:"font-size: 16px"},"2500 shitcoins")
);
if (boughtStuff.includes("showChannels")) {
    showChannelsButton.style.display = "none";
}

let instrumentCopyPasteButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"instrumentCopyPasteOption", onclick: ()=>buyThing("instrumentCopyPaste", 1000, instrumentCopyPasteButton)},"Copy/Paste Buttons"), div({style:"font-size: 16px"},"1000 shitcoins")
);
if (boughtStuff.includes("showChannels")) {
    showChannelsButton.style.display = "none";
}

let enableChannelMutingButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"enableChannelMutingOption", onclick: ()=>buyThing("enableChannelMuting", 3000, enableChannelMutingButton)},"Channel Muting"), div({style:"font-size: 16px"},"3000 shitcoins")
);
if (boughtStuff.includes("enableChannelMuting")) {
    enableChannelMutingButton.style.display = "none";
}

let displayBrowserUrlButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"displayBrowserUrlOption", onclick: ()=>buyThing("displayBrowserUrl", 3000, displayBrowserUrlButton)},"Show URL"), div({style:"font-size: 16px"},"3000 shitcoins")
);
if (boughtStuff.includes("displayBrowserUrl")) {
    enableChannelMutingButton.style.display = "none";
}

let recordingSetupButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"recordingSetupOption", onclick: ()=>buyThing("recordingSetup", 1500, recordingSetupButton)},"Midi setup"), div({style:"font-size: 16px"},"1500 shitcoins")
);
if (boughtStuff.includes("recordingSetup")) {
    recordingSetupButton.style.display = "none";
}
//#endregion
//#region Key Shits
let keyCSharpButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"keyCSharpOption", onclick: ()=>buyThing("keyCSharp", 500, keyCSharpButton)},"C#"), div({style:"font-size: 16px"},"500 shitcoins")
);
if (boughtStuff.includes("keyCSharp")) {
    keyCSharpButton.style.display = "none";
}

let keyDButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"keyDOption", onclick: ()=>buyThing("keyD", 500, keyDButton)},"D"), div({style:"font-size: 16px"},"500 shitcoins")
);
if (boughtStuff.includes("keyD")) {
    keyDButton.style.display = "none";
}

let keyDSharpButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"keyDSharpOption", onclick: ()=>buyThing("keyDSharp", 500, keyDSharpButton)},"D#"), div({style:"font-size: 16px"},"500 shitcoins")
);
if (boughtStuff.includes("keyDSharp")) {
    keyDSharpButton.style.display = "none";
}

let keyEButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"keyEOption", onclick: ()=>buyThing("keyE", 500, keyEButton)},"E"), div({style:"font-size: 16px"},"500 shitcoins")
);
if (boughtStuff.includes("keyE")) {
    keyEButton.style.display = "none";
}

let keyFButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"keyFOption", onclick: ()=>buyThing("keyF", 500, keyFButton)},"F"), div({style:"font-size: 16px"},"500 shitcoins")
);
if (boughtStuff.includes("keyF")) {
    keyFButton.style.display = "none";
}

let keyFSharpButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"keyFSharpOption", onclick: ()=>buyThing("keyFSharp", 500, keyFSharpButton)},"F#"), div({style:"font-size: 16px"},"500 shitcoins")
);
if (boughtStuff.includes("keyFSharp")) {
    keyFSharpButton.style.display = "none";
}

let keyGButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"keyGOption", onclick: ()=>buyThing("keyG", 500, keyGButton)},"G"), div({style:"font-size: 16px"},"500 shitcoins")
);
if (boughtStuff.includes("keyG")) {
    keyGButton.style.display = "none";
}

let keyGSharpButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"keyGSharpOption", onclick: ()=>buyThing("keyGSharp", 500, keyGSharpButton)},"G#"), div({style:"font-size: 16px"},"500 shitcoins")
);
if (boughtStuff.includes("keyGSharp")) {
    keyGSharpButton.style.display = "none";
}

let keyAButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"keyAOption", onclick: ()=>buyThing("keyA", 500, keyAButton)},"A"), div({style:"font-size: 16px"},"500 shitcoins")
);
if (boughtStuff.includes("keyA")) {
    keyAButton.style.display = "none";
}

let keyASharpButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"keyASharpOption", onclick: ()=>buyThing("keyASharp", 500, keyASharpButton)},"A#"), div({style:"font-size: 16px"},"500 shitcoins")
);
if (boughtStuff.includes("keyASharp")) {
    keyASharpButton.style.display = "none";
}

let keyBButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"keyBOption", onclick: ()=>buyThing("keyB", 500, keyBButton)},"B"), div({style:"font-size: 16px"},"500 shitcoins")
);
if (boughtStuff.includes("keyB")) {
    keyBButton.style.display = "none";
}
//#endregion
//#region Scale Shits
let easySadButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"easySadOption", onclick: ()=>buyThing("easySad", 500, easySadButton)},"Easy :("), div({style:"font-size: 16px"},"500 shitcoins")
);
if (boughtStuff.includes("easySad")) {
    easySadButton.style.display = "none";
}

let islandHappyButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"islandHappyOption", onclick: ()=>buyThing("islandHappy", 500, islandHappyButton)},"Island :)"), div({style:"font-size: 16px"},"500 shitcoins")
);
if (boughtStuff.includes("islandHappy")) {
    islandHappyButton.style.display = "none";
}

let islandSadButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"islandSadOption", onclick: ()=>buyThing("islandSad", 500, islandSadButton)},"Island :("), div({style:"font-size: 16px"},"500 shitcoins")
);
if (boughtStuff.includes("islandSad")) {
    islandSadButton.style.display = "none";
}

let bluesHappyButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"bluesHappyOption", onclick: ()=>buyThing("bluesHappy", 500, bluesHappyButton)},"Blues :)"), div({style:"font-size: 16px"},"500 shitcoins")
);
if (boughtStuff.includes("bluesHappy")) {
    bluesHappyButton.style.display = "none";
}

let bluesSadButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"bluesSadOption", onclick: ()=>buyThing("bluesSad", 500, bluesSadButton)},"Blues :("), div({style:"font-size: 16px"},"500 shitcoins")
);
if (boughtStuff.includes("bluesSad")) {
    bluesSadButton.style.display = "none";
}

let normalHappyButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"normalHappyOption", onclick: ()=>buyThing("normalHappy", 500, normalHappyButton)},"Normal :)"), div({style:"font-size: 16px"},"500 shitcoins")
);
if (boughtStuff.includes("normalHappy")) {
    normalHappyButton.style.display = "none";
}

let normalSadButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"normalSadOption", onclick: ()=>buyThing("normalSad", 500, normalSadButton)},"Normal :("), div({style:"font-size: 16px"},"500 shitcoins")
);
if (boughtStuff.includes("NormalSad")) {
    normalSadButton.style.display = "none";
}

let dblHappyButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"dblHappyOption", onclick: ()=>buyThing("dblHappy", 500, dblHappyButton)},"DblH :)"), div({style:"font-size: 16px"},"500 shitcoins")
);
if (boughtStuff.includes("dblHappy")) {
    dblHappyButton.style.display = "none";
}

let dblSadButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"dblSadOption", onclick: ()=>buyThing("dblSad", 500, dblSadButton)},"DblH :("), div({style:"font-size: 16px"},"500 shitcoins")
);
if (boughtStuff.includes("dblSad")) {
    dblSadButton.style.display = "none";
}

let strangeButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"strangeOption", onclick: ()=>buyThing("strange", 500, strangeButton)},"Strange"), div({style:"font-size: 16px"},"500 shitcoins")
);
if (boughtStuff.includes("strange")) {
    strangeButton.style.display = "none";
}

let expertButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"expertOption", onclick: ()=>buyThing("expert", 5000, expertButton)},"Expert"), div({style:"font-size: 16px"},"5000 shitcoins")
);
if (boughtStuff.includes("expert")) {
    expertButton.style.display = "none";
}
//#endregion

//#region Preferences Menu Shits
let shitbox2Button: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"shitbox2Option", onclick: ()=>buyThing("shitbox2", 2000, shitbox2Button)},"ShitBox 2.0"), div({style:"font-size: 16px"},"2000 shitcoins")
);
if (boughtStuff.includes("shitbox2")) {
    shitbox2Button.style.display = "none";
}

let realmButton: HTMLDivElement = div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em; text-align: center;"},
    button({class:"shopButton", id:"realmOption", onclick: ()=>buyThing("realm", 2000, realmButton)},"Realm"), div({style:"font-size: 16px"},"2000 shitcoins")
);
if (boughtStuff.includes("realm")) {
    realmButton.style.display = "none";
}


//#endregion

let gachaButton: HTMLButtonElement = button({class:"shopButton", id:"gachaButton", onclick: ()=>openThing("gacha")}, "Gacha");
let itemsButton: HTMLButtonElement = button({class:"shopButton", id:"buyButton", onclick: ()=>openThing("items")}, "Buy");
let closeShopButton: HTMLButtonElement = button({class:"shopButton", id:"closeButton", onclick: ()=>closeshop()}, "Close");

let fileMenuStuffs: HTMLDivElement = div({id:"fileMenuStuff"},
    div({style:"font-size: 16px"},"File Menu Shit:"),
        div({style:"display: flex; max-width: 35vw; overflow-x: scroll;"},
               importButton, exportButton, copyUrlButton, songPlayerButton, shortenUrlButton, recoveryButton
    ), 
);

let editMenuStuffs: HTMLDivElement = div({id:"editMenuStuff"},
    div({style:"font-size: 16px"},"Edit Menu Shit:"),
        div({style:"display: flex; max-width: 35vw; overflow-x: scroll;"},
            beatsPerBarButton,
    ), 
);

let prefMenuStuffs: HTMLDivElement = div({id:"prefMenuStuff"},
    div({style:"font-size: 16px"},"Preferences Menu Shit:"),
        div({style:"display: flex; max-width: 35vw; overflow-x: scroll;"},
            autoPlayButton, autoFollowButton, enableNotePreviewButton, showLettersButton, fifthNoteButton, notesOutsideScaleButton, 
            showChannelsButton, showScrollBarButton, instrumentCopyPasteButton, enableChannelMutingButton, displayBrowserUrlButton, recordingSetupButton
    ), 
);

let keyStuffs: HTMLDivElement = div({id:"keys"},
    div({style:"font-size: 16px"},"Keys:"),
        div({style:"display: flex; max-width: 35vw; overflow-x: scroll;"},
            keyCSharpButton, keyDButton, keyDSharpButton, keyEButton, keyFButton, keyFSharpButton, keyGButton, keyGSharpButton, keyAButton, keyASharpButton, keyBButton,
    ), 
);

let scaleStuffs: HTMLDivElement = div({id:"scales"},
    div({style:"font-size: 16px"},"Scales:"),
        div({style:"display: flex; max-width: 35vw; overflow-x: scroll;"},
            easySadButton, islandHappyButton, islandSadButton, bluesHappyButton, bluesSadButton, normalHappyButton, normalSadButton, dblHappyButton, dblSadButton, strangeButton, expertButton
    ), 
);

let themeMenuStuffs: HTMLDivElement = div({id:"themeMenuStuff"},
    div({style:"font-size: 16px"},"Themes:"),
        div({style:"display: flex; max-width: 35vw; overflow-x: scroll;"},
            shitbox2Button, realmButton
    ), 
);

let itemsDiv: HTMLDivElement = div({class:"itemsDiv", id:"itemsDiv", style:"display:none; position:absolute; left:10vw; bottom: 20vw; background: #531619; border: #ff7a87; border-style: solid;"}, 
    div({style:"margin: 0.5em;"},"Stupid Shit"),
    div({style:"display: flex; flex-direction: column;max-height: 270px; overflow-y: scroll;"},
        fileMenuStuffs,
        editMenuStuffs,
        prefMenuStuffs,
        keyStuffs,
        scaleStuffs,
        themeMenuStuffs,
    ),
    button({class:"shopButton", id:"closeButton", onclick: ()=>closeThing("items")},"Close"),
);

if (boughtStuff.includes("songPlayer")
    &&boughtStuff.includes("shortenUrl")
    &&boughtStuff.includes("import")
    &&boughtStuff.includes("export")
    &&boughtStuff.includes("recovery")
    &&boughtStuff.includes("copyUrl")) {
        fileMenuStuffs.style.display = "none";
}

if (boughtStuff.includes("beatsPerBar")) {
        editMenuStuffs.style.display = "none";
}

if (boughtStuff.includes("showScrollBar")
    &&boughtStuff.includes("showLetters")) {
        prefMenuStuffs.style.display = "none";
}

if (boughtStuff.includes("keyCSharp")
    &&boughtStuff.includes("keyCSharp")
    &&boughtStuff.includes("keyD")
    &&boughtStuff.includes("keyDSharp")
    &&boughtStuff.includes("keyE") 
    &&boughtStuff.includes("keyF")
    &&boughtStuff.includes("keyFSharp")
    &&boughtStuff.includes("keyG")
    &&boughtStuff.includes("keyGSharp")
    &&boughtStuff.includes("keyA")
    &&boughtStuff.includes("keyASharp")
    &&boughtStuff.includes("keyB")) {
            keyStuffs.style.display = "none";
    }

if (boughtStuff.includes("easySad")
    &&boughtStuff.includes("islandHappy")
    &&boughtStuff.includes("islandSad")
    &&boughtStuff.includes("bluesHappy")
    &&boughtStuff.includes("bluesSad") 
    &&boughtStuff.includes("normalHappy")
    &&boughtStuff.includes("normalSad")
    &&boughtStuff.includes("dblHappy")
    &&boughtStuff.includes("dblSad")
    &&boughtStuff.includes("strange")
    &&boughtStuff.includes("expert")) {
            scaleStuffs.style.display = "none";
    }

let gachaDiv: HTMLDivElement = div({class:"gachaDiv", id:"gachaDiv", style:"display:none; position:absolute; left:7vw; bottom: 20vw; background: #531619; border: #ff7a87; border-style: solid;"}, 
    div({style:"margin-bottom: 0.5em; font-size: 64px;"},"Gacha"),
    div({style:""},"Roll for awesome rewards:"),
    div({style:"display: flex; "},
        div({style:"display:flex; flex-direction: column; align-items: center; margin: 0.5em;"},
        button({class:"shopButton", id:"gachaButton", onclick: ()=>rollOneGacha()},"Roll 1x"), div({style:"font-size: 16px"},"50 Gems")
        ),
    ),
    div({class:"result", id:"gachaResult", style:"display: flex;"}, `You haven't rolled yet`, div({class:"result", id:"gachaRarity"}, "!")),
    button({class:"shopButton", id:"closeButton", onclick: ()=>closeThing("gacha")},"close"),
);

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
    const chaChing = new Audio("sfx/buy.mp3");
    const nope = new Audio("sfx/nuh_uh.mp3");

    if (!boughtStuff.includes(thingToBuy)) {
        if (realMoney >= price) {
            removeMoney(price);
            boughtStuff.push(thingToBuy);
            if (boughtStuff != null) {
                localStorage.setItem("bought", JSON.stringify(boughtStuff));
            }
            moneyShits.innerHTML = "shitcoins: "+realMoney;
            hides.style.display = "none";
            chaChing.play();
        } else {
            nope.play();
            alert("You cannot buy that rn! Get more moneys!!!");
            
        }
    } else {
        nope.play();
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