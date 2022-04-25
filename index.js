/** index.js */
document.getElementById("status").innerHTML = "LOADING...";

setTimeout(() => {
    loadData();
    setTimeout(() => {
        onEncryt();
    }, 3000)
}, 3000)

const oaepHashAlgo = 'SHA256';
const pinFormat = 'NONE-SHORT';
const key = ['pubKeyIndex', 'e2eeSid', 'serverRandom', 'oaepHashAlgo', 'pubKey', 'channelAccessToken'];

let password;
let _objBff = {};

let enryptedPassword;

function loadData() {
    password = data.password || 'Thom@1234';
    let temp = data.objBff.replace(/[{}]/g, "");
    temp = temp.split(",");
    for (let index = 0; index < temp.length; index++) {
        const element = temp[index].trim().split(':');
        if(key.includes(element[0])) {
            _objBff[element[0]] = element[1].trim()
        } else {
            const prvElement = temp[index - 1].trim().split(':');
            _objBff[prvElement[0]] = _objBff[prvElement[0]] + ',' + element;
        }
    }
}

function onEncryt() {
    enryptedPassword = ame2eea.encryptPinForAM(
        _objBff.e2eeSid, _objBff.pubKey, _objBff.serverRandom, password, _objBff.oaepHashAlgo || oaepHashAlgo, pinFormat);
    document.getElementById("status").innerHTML = "DONE";
    document.getElementById("result").innerHTML = enryptedPassword;
};