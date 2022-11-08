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

    console.log(GetRootVariable("theme"));
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
 * 
 * @param {string} string 
 * @returns {any | undefined}
 */
function GetRootVariable(string) {
    return getComputedStyle(document.querySelector(":root")).getPropertyValue(`--${string}`);
}