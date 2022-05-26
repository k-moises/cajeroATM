    window.addEventListener('load', function() {
    
})

    const cargarCuenta = () => {


    const cuenta = [ //  ARREGLO DE OBJETOS

        { // OBJETO 1
            id: 1,
            nombre: "Mali",
            nip: 1231,
            imagen: "./img/usuario.png",
            saldo: 200,
        },

        { // OBJETO 2
            id: 2,
            nombre: "Gera",
            nip: 1232,
            imagen: "./img/usuario2.png",
            saldo: 290,
        },

        { //OBJETO 3
            id: 3,
            nombre: "Maui",
            nip: 1233,
            imagen: "./img/usuario3.png",
            saldo: 67,
        },

    ];
    return cuenta;
};


    const elementoPadre = document.getElementById("iniciarSesion");
    elementoPadre.addEventListener("click", sesion);

    function sesion() { //INICIO SESION


    let ingresaCliente = document.getElementById("usuario").value;
    let ingresaNip = parseInt(document.getElementById("nip").value);
    const clientes = cargarCuenta();
    
   

    clientes.forEach(function (cliente) { //Valida usuario ingresado
    console.log(cliente);



        if (ingresaCliente == cliente.nombre && ingresaNip == cliente.nip) {
            console.log("cliente correcto");

            alert(`${cliente.nombre} has iniciado en ATM `);
            localStorage.setItem('cliente', JSON.stringify({
                id: cliente.if,
                nombre: cliente.nombre,
                saldo: cliente.saldo,
                imagen: cliente.imagen

            }));
        
            const elementoPadre = document.getElementById("sesionUsuario"); //Elemento HTML(div)
            const elementoHijo = document.createElement("div");
            elementoHijo.classList.add("col-4", "d-flex", "flex-column");
            
            //Inserta elementos en nuevo Div creado 
            elementoHijo.innerHTML = `
            
            <h3 style="text-align: center">${cliente.nombre} </h3> 
            <img height="80px" width = "80px" margin= "0px auto"  src="${cliente.imagen}" alt="">
            <p style="display:none;"> Conectando servidor ...</p>
            <p > Conectando servidor ...</p>
            `;

            elementoPadre.appendChild(elementoHijo);
            setTimeout( function() { window.location.href = "enlace.html"; }, 3000 );
            
        }
        else {
            console.log("cliente incorrecto");

        }
    });

    

};

//Estaré actualizando validaciones
