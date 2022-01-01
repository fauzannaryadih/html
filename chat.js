function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function kirim() {
    let m = document.getElementById("messages");
    const d = document.getElementById("text-area");
    const p = document.createElement("span");
    const b = document.createElement("br");
    const t = document.createTextNode(m.value);
    p.appendChild(t);
    d.appendChild(p);
    d.appendChild(b); 
    m = document.getElementById("messages").value = "";
}