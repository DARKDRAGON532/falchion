const params = new URLSearchParams(window.location.search);

if (params.get("method").toUpperCase() == "GET") {
    fetch(params.get("url"), {
        method: params.get("method"),
        headers: JSON.parse(params.get("headers")),
    }).then(res => res.text().then(e => document.body.innerHTML = e)).catch(err => document.body.innerText = err)
}
else {
    fetch(params.get("url"), {
        body: JSON.parse(params.get("body")),
        method: params.get("method"),
        headers: JSON.parse(params.get("headers")),
    }).then(res => res.json().then(e => document.body.innerHTML = e)).catch(err => document.body.innerText = err)
}

