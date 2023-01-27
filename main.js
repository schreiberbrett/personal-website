// @ts-check

var x = new XMLHttpRequest();
var sourceCode = new URL('https://raw.githubusercontent.com/schreiberbrett/personal-website/master/code.scm')

fetch(sourceCode).then(response => {
    if (response.ok) {
        response.text().then(x => {
            console.log('I found:', x)
        })
    }
});


console.log('Hello, world!');