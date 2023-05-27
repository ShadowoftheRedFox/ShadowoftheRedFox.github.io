/*
Defautlt root variables value:

--theme: "light";
--link: rgb(26, 109, 234);
--space_cadet: #22223B;
--space_cadet_bis: #1d1d32;
--independance: #4A4E69;
--heliotrope_gray: #9A8C98;
--silver_pink: #C9ADA7;
--isabeline: #F2E9E4;
*/

function toggleTheme(theme = "dark") {
    // change root colors
    const root = document.querySelector(":root");
    if (!root) return console.warn("Unknown element.");
    /**
     * @type {CSSStyleDeclaration}
     */
    const StyleRoot = root.style;

    // console.log(GetRootVariable("theme"));
    switch (theme) {
        case "dark": {
            StyleRoot.setProperty('--theme', 'dark');
            StyleRoot.setProperty("--isabeline", "#000000");
            break;
        }
        default: {
            StyleRoot.setProperty('--theme', 'light');
            StyleRoot.setProperty("--isabeline", "#F2E9E4");
            break;
        }
    }
}

/**
 * @param {string} href 
 * @param {string[]} param 
 * @param {string[]} value 
 * @returns {string}
*/
function setParam(href, param, value) {
    if (!href || href.split("?").length === 0) {
        return `?lang=${window.site.lang}`;
    } else {
        const s = href.split("?");
        s[1].split("&").forEach((arg, i) => {
            const a = arg.split("=");
            if (param.includes(a[0])) {
                a[1] = value[i];
            }
        });
    }
}

/**
 * 
 * @param {string} string 
 * @returns {any | undefined}
*/
function GetRootVariable(string) {
    return getComputedStyle(document.querySelector(":root")).getPropertyValue(`--${string}`);
}

function paramParser(string) {
    const parsed = string.split("?");
    if (parsed[1]) {
        const params = parsed[1].split("&");
        const r = { lang: "en" };
        params.forEach(param => {
            let p = param.split("=");
            r[p[0]] = p[1];
        });
        return r;
    }
    return { lang: "en" };
}

function init() {
    window.site = paramParser(window.location.href);
    const copyright = document.getElementById("copyrightJS");
    if (!copyright) return console.error("Can't set the copyright year!");
    if (window.site.lang == "fr") {
        copyright.innerHTML = `© ${new Date().getFullYear()} Kyrazail Adventure | Ce site est sous la license &#8203`;
    } else {
        copyright.innerHTML = `© ${new Date().getFullYear()} Kyrazail Adventure | This website is available under the &#8203`;
    }
    const license = document.getElementById("copyrightJSLicense");
    if (!license) {
        copyright.innerHTML += "Apache License 2.0";
        return console.error("Can't set the license link!");
    }
    license.innerHTML = "Apache License 2.0";

    switchLang("en");
}

function switchLang(lang = "en") {
    // get all  'lang' attributes
    const langElements = document.querySelectorAll("[lang]");
    // hide them all
    langElements.forEach(el => {
        el.style.display = "none";
    });

    // show only the selected language
    const wantedLangElements = document.querySelectorAll(`[lang="${lang}"]`);
    wantedLangElements.forEach(el => {
        el.style.display = "";
    });
}

const TradClassFR = [
    "Vous m'avez trouvé! Cliquez moi.",
    "Jeu",
    "Développement",
    "Mini jeux",
    "Thème",
    "Clair",
    "Sombre",
    "Arrive bientôt!",
    "Plus d'informations sur notre <a href=\"https://discord.gg/5mF5AHnRCr\" target=\"_blank\">serveur Discord!</a>",
    "Contactez nous:",
    "Serveur Discord",
    "Liens:",
    "Jeu en ligne",
    "Code ource"
];
const TradClassEN = [
    "You found me! Click me.",
    "Game",
    "Development",
    "Mini games",
    "Theme",
    "Bright",
    "Dark",
    "Coming soon!",
    "More information on our <a href=\"https://discord.gg/5mF5AHnRCr\" target=\"_blank\">Discord server!</a>",
    "Contact us:",
    "Discord server",
    "Links:",
    "Online game",
    "Source code"
];


window.onload = init;