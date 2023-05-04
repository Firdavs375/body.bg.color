var btn = document.querySelector(".btn")
var body = document.querySelector("body")
// console.log(body);


btn.onclick = () => {
    let a1 = Math.floor(Math.random() * 250)
    let a2 = Math.floor(Math.random() * 250)
    let a3 = Math.floor(Math.random() * 250)
    let a4 = Math.floor(Math.random() * 250)
    body.style.background = `rgba(${a1}, ${a2}, ${a3}, ${a4})`
    btn.style.background = "#f" + a1
}