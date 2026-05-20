document.getElementById("conteudo").innerHTML = "<p>olá, mundo Dom!</p>"

document.getElementById("mensagem").innerHTML = "texto simples, sem html"

document.getElementById("foto").setAttribute("src", "mikima.webp")

let url = document.getElementById("link").getAttribute("href")
console.log(url)

document.getElementById("caixa").style.backgroundColor = "lightpink"

document.getElementById("aviso").classList.add("destaque")

document.getElementById("alert").classList.remove("oculto")

let novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "este elemento foi criado pelo JavaScript";
document.getElementById("container").appendChild(novoParagrafo);

let novoItem = document.createElement("li");
novoItem.textContent = "item novo";
document.getElementById("lista").appendChild(novoItem);

let item = document.getElementById("item1");
document.getElementById("list").removeChild(item);