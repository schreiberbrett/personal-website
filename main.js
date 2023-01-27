// @ts-check


function loadFile(
    /** @type {string} */ filename
) {
    return fetch(
        new URL(`https://raw.githubusercontent.com/schreiberbrett/personal-website/master/${filename}`),
        {cache: 'no-store'}
    )
}

class SchemeCode extends HTMLElement {
    constructor() {
        super();
        this.contentEditable = 'true';
        this.spellcheck = false;

        this.style.display = 'block';
        this.style.whiteSpace = 'pre';
        this.style.fontFamily = 'monospace';
    }

    static get observedAttributes() {
        return ['src']
    }

    attributeChangedCallback(
        /** @type {string} */ name,
        /** @type {string} */ oldValue,
        /** @type {string} */ newValue
    ) {
        switch (name) {
            case 'src':
                loadFile(newValue).then(response =>
                    response.text().then(text =>
                        this.textContent = text
                    )
                )
        }
    }
}

customElements.define("scheme-code", SchemeCode)