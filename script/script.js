qKey.addEventListener("click", () => {
    const qKey = document.getElementById("qKey");

    document.getElementById("boom").pause();
    document.getElementById("boom").currentTime = 0;
    document.getElementById("boom").play();
});

wKey.addEventListener("click", () => {
    const wKey = document.getElementById("wKey");

    document.getElementById("clap").pause();
    document.getElementById("clap").currentTime = 0;
    document.getElementById("clap").play();
});

eKey.addEventListener("click", () => {
    const eKey = document.getElementById("eKey");

    document.getElementById("hihat").pause();
    document.getElementById("hihat").currentTime = 0;
    document.getElementById("hihat").play();
});

rKey.addEventListener("click", () => {
    const rKey = document.getElementById("rKey");

    document.getElementById("kick").pause();
    document.getElementById("kick").currentTime = 0;
    document.getElementById("kick").play();
});

tKey.addEventListener("click", () => {
    const tKey = document.getElementById("tKey");

    document.getElementById("openhat").pause();
    document.getElementById("openhat").currentTime = 0;
    document.getElementById("openhat").play();
});

yKey.addEventListener("click", () => {
    const yKey = document.getElementById("yKey");

    document.getElementById("ride").pause();
    document.getElementById("ride").currentTime = 0;
    document.getElementById("ride").play();
});

uKey.addEventListener("click", () => {
    const uKey = document.getElementById("uKey");

    document.getElementById("snare").pause();
    document.getElementById("snare").currentTime = 0;
    document.getElementById("snare").play();
});

iKey.addEventListener("click", () => {
    const iKey = document.getElementById("iKey");

    document.getElementById("tink").pause();
    document.getElementById("tink").currentTime = 0;
    document.getElementById("tink").play();
});

oKey.addEventListener("click", () => {
    const oKey = document.getElementById("oKey");

    document.getElementById("tom").pause();
    document.getElementById("tom").currentTime = 0;
    document.getElementById("tom").play();
});

document.addEventListener("keydown", (event) => {
    if (event.key == 'q') {
        document.getElementById("boom").pause();
        document.getElementById("boom").currentTime = 0;
        document.getElementById("boom").play();
    }else if (event.key == 'w') {
        document.getElementById("clap").pause();
        document.getElementById("clap").currentTime = 0;
        document.getElementById("clap").play();
    }else if (event.key == 'e') {
        document.getElementById("hihat").pause();
        document.getElementById("hihat").currentTime = 0;
        document.getElementById("hihat").play();
    }else if (event.key == 'r') {
        document.getElementById("kick").pause();
        document.getElementById("kick").currentTime = 0;
        document.getElementById("kick").play();
    }else if (event.key == 't') {
        document.getElementById("openhat").pause();
        document.getElementById("openhat").currentTime = 0;
        document.getElementById("openhat").play();
    }else if (event.key == 'y') {
        document.getElementById("ride").pause();
        document.getElementById("ride").currentTime = 0;
        document.getElementById("ride").play();
    }else if (event.key == 'u') {
        document.getElementById("snare").pause();
        document.getElementById("snare").currentTime = 0;
        document.getElementById("snare").play();
    }else if (event.key == 'i') {
        document.getElementById("tink").pause();
        document.getElementById("tink").currentTime = 0;
        document.getElementById("tink").play();
    }else if (event.key == 'o') {
        document.getElementById("tom").pause();
        document.getElementById("tom").currentTime = 0;
        document.getElementById("tom").play();
    }
});

