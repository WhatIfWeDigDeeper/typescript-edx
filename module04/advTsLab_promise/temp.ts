function getAvatar_Promise(elem: HTMLElement) {
    fetch('https://uinames.com/api/')
        .then((response) => (response.json()))
        .then((resp) => {
            console.log(resp.name);
            const avatar = `https://robohash.org/set_set3/${resp.name}?size=60x60`; 
            elem.style.backgroundImage = `url("${avatar}")`;
            document.body.appendChild(elem);
        });
}

// getAvatar_Promise(elemClass.element);