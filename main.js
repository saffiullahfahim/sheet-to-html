let FULL_URL = "https://script.google.com/macros/s/AKfycbzG0VRWNW46Ct27v6VxjVFoOM0OMS6uCD5G3GV8prGDNRIBxo5PdSQcuD6zBg8UpXcKSA/exec"

fetch(FULL_URL)
.then(res => res.json())
.then(rep => {
    let html = rep.map(row => {
      return `<h3>The dog ran ${row[0]} and ${row[1]}</h3>`
    }).join("");


    document.getElementById("app").innerHTML = html;
})