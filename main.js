// @ts-check


function loadFile(
    /** @type {string} */ filename
) {
    return fetch(
        new URL(`https://raw.githubusercontent.com/schreiberbrett/personal-website/master/${filename}.scm`),
        {cache: 'no-store'}
    )
}

/** @type {Array<Promise<Response>>} */
let filePromises = []

for (let snippet of document.getElementsByClassName("mk-snippet"))
{
    loadFile(`${snippet.id}.mk.scm`).then(response =>
        response.text().then(text =>
            snippet.textContent = text
        )
    )
}
