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
window.addEventListener("scroll",()=>{
    if(window.scrollY>100){
        console.log("Abajo")
    }
    })
// const item=document.createElement("DIV")
// item.classList.add("itemProducto")
// listaProductos.appendChild(item)
