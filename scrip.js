const numero=document.getElementById('numero')
let cantidad=0

let tiempo=setInterval(() => {
    cantidad+=1
    numero.textContent=cantidad

    if(cantidad===100)
        {
            clearInterval(tiempo)
        }
}, 80);