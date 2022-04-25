const { JSDOM } = require('jsdom');

const options = {
  resources: 'usable',
  runScripts: 'dangerously',
};

let result = null;

JSDOM.fromFile('index.html', options).then((dom) => {
    console.log(dom.window.document.body.textContent.trim());
    intervalID = setInterval(() => {
        console.log('===== STATUS ' + dom.window.document.getElementById("status").textContent + ' =====')
        if(dom.window.document.getElementById("result").textContent.trim() !== "NONE") {
            console.log(dom.window.document.getElementById("result").textContent)
            result = dom.window.document.getElementById("result").textContent.trim();
            clearInterval(intervalID);
        }
    }, 1000);
    setTimeout(() => {
        !result && console.log('===== STATUS ERROR =====');
        clearInterval(intervalID);
    }, 8000);
});