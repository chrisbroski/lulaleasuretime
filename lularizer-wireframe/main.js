/*jslint sloppy: true, browser: true */

var styleData = {
    "joy": {"price": 60, "sizes": ["xs", "s", "m", "l", "xl"]},
    "tween": {"price": 23},
    "tall_&_curvy": {"price": 25},
    "kids_s/m": {"price": 23},
    "sloan": {"price": 28, "sizes": ["2", "4", "6", "8", "10", "12", "14"]},
    "sarah": {"price": 70, "sizes": ["xs", "s", "m", "l", "xl"]},
    "randy": {"price": 35, "sizes": ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl"]},
    "perfect_t": {"price": 36, "sizes": ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl"]},
    "patrick": {"price": 40, "sizes": ["m", "l", "xl", "2xl", "3xl"]},
    "one_size": {"price": 25},
    "nicole": {"price": 48, "sizes": ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl"]},
    "monroe": {"price": 48, "sizes": ["s", "l"]},
    "maxi": {"price": 42, "sizes": ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl"]},
    "madison": {"price": 48, "sizes": ["xs", "s", "m", "l", "xl", "2xl", "3xl"]},
    "kids_l/xl": {"price": 23},
    "lucy": {"price": 52, "sizes": ["xxs", "xs", "s", "m", "l", "xl", "2xl"]},
    "lola": {"price": 48, "sizes": ["xxs", "xs", "s", "m", "l", "xl", "2xl"]},
    "lindsay": {"price": 48, "sizes": ["s", "m", "l"]},
    "kids_azure": {"price": 25, "sizes": ["2", "4", "6", "8", "10", "12", "14"]},
    "julia": {"price": 45, "sizes": ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl"]},
    "jordan": {"price": 65, "sizes": ["xs", "s", "m", "l", "xl", "2xl"]},
    "jill": {"price": 55, "sizes": ["xxs", "xs", "s", "m", "l", "xl", "2xl"]},
    "jade": {"price": 55, "sizes": ["xs", "s", "m", "l", "xl", "2xl"]},
    "irma": {"price": 35, "sizes": ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl"]},
    "gracie": {"price": 28, "sizes": ["2", "4", "6", "8", "10", "12", "14"]},
    "classic_t": {"price": 35, "sizes": ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl"]},
    "cassie": {"price": 35, "sizes": ["xs", "s", "m", "l", "xl", "2xl", "3xl"]},
    "azure": {"price": 35, "sizes": ["xs", "s", "m", "l", "xl", "2xl", "3xl"]},
    "ana": {"price": 60, "sizes": ["xs", "s", "m", "l", "xl", "2xl", "3xl"]},
    "amelia": {"price": 65, "sizes": ["xxs", "xs", "s", "m", "l", "xl", "2xl"]},
    "carly": {"price": 55, "sizes": ["xxxs", "xxs", "xs", "s", "m", "l", "xl", "xxl", "xxxl"]}
};

function Q$(name) {
    var reQs, val;
    reQs = new RegExp("[\\?&]" + name + "=([^&#]*)", "i");
    val = reQs.exec(parent.location.search);
    if (val) {
        return decodeURIComponent(val[1]);
    }
    return "";
}

function getEventTarget(e) {
    var targ;
    targ = e.target || e.srcElement;
    if (targ.nodeType === 3) { // defeat Safari bug
        targ = targ.parentNode;
    }
    return targ;
}

function addEvent(el, evType, fn, bubble) {
    bubble = bubble || false;
    if (el.addEventListener) {
        el.addEventListener(evType, fn, bubble);
    } else if (el.attachEvent) {
        el.attachEvent("on" + evType, fn);
    }
}

function touchclick(el, func, bubble) {
    bubble = !!bubble;
    if ("ontouchstart" in window || "onmsgesturechange" in window) {
        el.addEventListener("touchstart", func, bubble);
    } else {
        addEvent(el, "click", func, bubble);
    }
}

function formatStyle(styleType) {
    return styleType.replace(/_/g, " ");
}

function getLocalStorageJSON(key) {
    var localStorageString = localStorage.getItem(key);
    if (!localStorageString) {
        localStorageObj = {};
    } else {
        localStorageObj = JSON.parse(localStorageString);
    }
    return localStorageObj;
}

document.getElementById("navNew").onclick = function () {
    location.href = "new";
    return false;
};
document.getElementById("navCollection").onclick = function () {
    location.href = "collection";
    return false;
};
document.getElementById("navInventory").onclick = function () {
    location.href = "inventory";
    return false;
};
document.getElementById("navAudit").onclick = function () {
    location.href = "audit";
    return false;
};
document.getElementById("navUpload").onclick = function () {
    location.href = "upload";
    return false;
};
