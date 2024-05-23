const listaProductos=document.getElementById("listaProductosItems")
let lista=["Detergente Patito","Detergente Sapito","Botella de Ola limpiador"
    ,"Detergente de platos Ola","Detergente Ola","Esponja","Esponja de Metal","Esponja de metal y Tela"
    ,"Cera para Muebles"
]
const form=document.querySelector(".forms");
for(i=0;i<9;i++){
    const item=document.createElement("DIV")
    item.classList.add("itemProducto")
    item.innerHTML="<img src='Assets/Imagenes/producto"+i+".jpg'><p>"
    +lista[i]+"</p><span>"+
    Math.floor(Math.random()*10+1)+"</span>Bs<br><span>Stock:"+
    +Math.floor(Math.random()*10+1)+"</span>"
    listaProductos.appendChild(item)
}
for (let j=0;j<6;j++){
    let child=document.createElement("INPUT");
    child.setAttribute("type","text")
    child.setAttribute("placeholder","   "+arr[j])
    form.appendChild(child)
}
let child=document.createElement("textarea");
child.style.width="95.5%";
child.style.height="200px";
form.appendChild(child);
child=document.createElement("BUTTON")
child.classList.add("button")
child.innerHTML="Melting"
form.appendChild(child)
// const item=document.createElement("DIV")
// item.classList.add("itemProducto")
// listaProductos.appendChild(item)
