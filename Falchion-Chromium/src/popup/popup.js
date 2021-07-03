const methodInput = document.getElementById("method");
const button = document.getElementById("btn");
const url = document.getElementById("url");
const body = document.getElementById("body")
const headers = document.getElementById("headers")

chrome.storage.sync.get("method", ({ method }) => {
    methodInput.value = method;
    button.innerText = `${method} it!`;
})

button.addEventListener("click", () => {
    if (methodInput.value == "" || url.value == "") {
        return document.getElementById("error").innerText = "URL or Method field cannot be blank."
    }
    chrome.storage.sync.set({ method: methodInput.value });
    window.open(chrome.runtime.getURL(`./src/options/options.html?method=${methodInput.value}&url=${url.value}&body=${body.value || "{}"}&headers=${headers.value || "{}"}`));

})

methodInput.addEventListener("input", e => {
    button.innerText = `${methodInput.value} it!`
})

document.getElementById("github").addEventListener("click", () => {
    window.open("https://www.github.com/DARKDRAGON532/falchion")
})

body.addEventListener("input", e => {
    if (e.data == '"') {
        body.value = `${body.value.slice(0, e.target.selectionStart)}"${body.value.slice(e.target.selectionStart)}`
        body.setSelectionRange(e.target.selectionStart - 1, e.target.selectionStart - 1);
    }
    else if (e.data == '{') {
        body.value = `${body.value.slice(0, e.target.selectionStart)}}${body.value.slice(e.target.selectionStart)}`
        body.setSelectionRange(e.target.selectionStart - 1, e.target.selectionStart - 1);
    }
})

headers.addEventListener("input", e => {
    if (e.data == '"') {
        headers.value = `${headers.value.slice(0, e.target.selectionStart)}"${headers.value.slice(e.target.selectionStart)}`
        headers.setSelectionRange(e.target.selectionStart - 1, e.target.selectionStart - 1);
    }
    else if (e.data == '{') {
        headers.value = `${headers.value.slice(0, e.target.selectionStart)}}${headers.value.slice(e.target.selectionStart)}`
        headers.setSelectionRange(e.target.selectionStart - 1, e.target.selectionStart - 1);
    }
})
