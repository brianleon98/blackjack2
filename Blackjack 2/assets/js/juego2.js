 //agregamos los nombres de los jugadores
var players = []; //array que va almacenar el nombre de los jugadores
 const name = document.querySelectorAll('h1');//almaceno en una constante el ID del h1 del documento html

 /*este for va ir de 0 hasta 3 y lo que va ser esque va mostrar 3 veses un prompt y va almacenar en la variable names lo que le ingresen al prompt,
 luego va validar si lo que hay en la variable names es mayor que 10 o igual a 0 va mostrar un alert y se va recargar la pagina, si no se va ejecutar lo que hay
en el else que va almacenar en el array players mediante el metodo push lo que halla en names luego va haber un for que va recorrer el array players y dentro
va agregar los nombres que allan en el array players en la variable name en cada vuelta 
 */
    for (var i = 0; i <= 3; i++) {
        let names = prompt("Ingrese el nombre de los jugadores, Maximo 3 jugadores y 10 caracteres" );
        if (names.length > 10 || names.length === 0) {
            alert("exedio caracteres o los campos estan vacios")
            setTimeout (() =>{
                window.location.href = 'index.html';
            },1000);
        }
        else{
            players.push(names);
            for (var i = 0; i < players.length; i++) {
                name[i].innerText = players[i] ;
            }
        }
    }




let deck         = []; // declaro un array vacio
const tipos      = ['C','D','H','S'];//creo una constante otro array  con los tipos de carta , corazones, treboles, pica,,diamante 
const especiales = ['J','Q','K','A'];// creo una constante que me almacene las cartas especiales

// Puntos 
var puntosJugador = 0; // declaro una variable de tipo entero inicializada en 0
var puntosJugador2 = 0;// variable para el jugador inicializada en 0
var puntosJugador3 = 0;// variable para el jugador 3 inicializada en 0
var puntosComputadora=0; // declaro una dvariable de tipo entero inicializada en 0

// Referencias Del HTML donde almaceno en una constante el ID btnDetener del documento html
const btnPedir = document.querySelector('#btnPedir'); // almaceno el boton del primer jugador
const btnPedir2 = document.querySelector('#btnPedir2');// almaceno el boton del segundo jugador 
const btnPedir3 = document.querySelector('#btnPedir3');// almaceno el boton delmtercer jugador
const detener4 = document.querySelector('.Detener4');;// alamaceno el boton de terminar partida 
const puntos = document.querySelectorAll('small');  // almaceno en una constante el elemento small del documento html

// capturo en constantes el valor 
const divCartasJugador = document.querySelectorAll('#jugador-cartas'); // almaceno en una constante los ID jugador-cartas del documento html
const divCartasComputador = document.querySelector('#computadora-cartas'); // almaceno en una constante del ID computadoras-cartas del documento html
const detenerTurno = document.querySelector('#btnDetener'); // almaceno en una constante el ID del boton detener del documento html del primer jugador
const detenerTurno2 = document.querySelector('#btnDetener2');// almaceno en una constante el ID del boton detener del documento html del segundo jugador
const detenerTurno3 = document.querySelector('#btnDetener3');// almaceno en una constante el ID del boton detener del documento html del tercer jugador
const nuevoJuego = document.querySelector('#btnNuevo'); // almaceno en una constante el ID del boton nuevo del documento html



// creo la funcion que creará el deck con las cartas
let crearDeck = ()=>{    //una variable que alamacene una funcion de de flecha 
    for (let i = 2; i <=10; i++) { // creo un ciclo inicilizado en 2 que va hasta 10 de forma ascendente
       for (const tipo of tipos) { // creo un ciclo for of para recorrer el arreglo tipos que contine los tipos de cartas
           deck.push(i+tipo); // mediante el metodo push añado al final del array la concatenacion del valor de i con los tipos de cartas
           for (const especial
             of especiales) { // creo un ciclo que recorra las cartas especiales 
            deck.push(especial + tipo); //  mediante el metodo push añado al final de arreglo deck la concatenacion de las cartas especiales con los tipos de cartas
        }
        }
    }
    deck = _.shuffle(deck); // reasigno el valor del deck y con el metodo _.shuffle de la libreria underscore devuelvo el arreglo desordenado
    // console.log(deck);
    return deck; // retorno el arreglo deck 
};
crearDeck(); // llamo la funcion crearDeck

// esta funcion me permite pedir una carta de la baraja

const pedirCarta= ()=>{ // creo una constante que resive como valor una funcion de flecha
    if (deck.length === 0) { // si el deck se queda sin cartas ejecuta lo siguiente
        alert('No hay cartas en el Deck'); // creo un alert que imprima un mensaje mediante una ventana emergente
    }
    const carta = deck.pop();  // mediante el metodo pop devuelvo la ultima carta del arreglo deck y la almaceno dentro  de la constante carta
    return carta; // retorno la carta
}

// funcion para determinar el valor de cada carta

const valorCarta = (carta) => { // creo una constante que tiene una funcion de flecha que resive un parametro
    const valor = carta.substring(0, carta.length-1); // creo una constante que recorra la carta mediante el metodo substring utilizado para recorrer cadenas  y le doy como parametros un valor de inicio y un valor de final
    return (isNaN(valor)) ? // retorno el resultado de validar la constante valor para saber si es cadena o entero
                (valor === 'A') ?  11 : 10 // recondiciono para saber si el valor del parametro equivale al string A entonces devolvera el valor 11 sino devolverá el valor 10
            : valor * 1;  // en caso de que no sea una cadena el valor se multiplicará por 1 para pasarlo de cadena a entero, tambien se puede usar la funcion parseInt
}

// Eventos

// Pedir Carta Jugador 1
btnPedir.addEventListener('click', () => { // a la constante btnPedir le agregamos el metodo de escucha para que cuando se presione un click en este ejecute la siguiente funcion de flecha
    const carta = pedirCarta(); // creamos una constante carta que haga un llamado a la funcion pedirCarta
    puntosJugador = puntosJugador + valorCarta(carta); // a la variable puntosJugador le asignamos el valor de esta y la sumamos con el resultado de la funcion valorCarta y le enviamos la constante carta como parámetro
    puntos[0].innerText = puntosJugador; // a la constante puntos le añadimos un texto que va ser igual a los puntos de las cartas del jugador
    const imgCarta = document.createElement('img'); // creo una constante que mediante la funcion document cree un elemento con el metodo createElement que sea igual a una imagen
    imgCarta.src= `assets/cartas/${carta}.png`; // a la constante imgCarta le añadimos un ruta o enlace que corresponde al css
    imgCarta.classList = 'carta'; // a la constante imgCarta le añadimos una clase que corresponde al css
    divCartasJugador[0].append(imgCarta); // a la constante divCartasJugador almaceno en la primer posicion mediante el metodo append le añadimos en su contenido los valores previamente establecidos en la constante  imgCarta
    
/* valido si los puntos del jugaor 1 son mayores a 21 se ejecuta un alert diciendo has perdido, los botones no se podran precionar mas
y se reiniziaran los puntos del jugador a 0*/
    setTimeout(()=>{
    if (puntosJugador > 21) { 
        alert('Has perdido'); 
        btnPedir.disabled = true; 
        detenerTurno.disabled=true;
        puntosJugador = 0;
     }
    },400)
});
// Pedir Carta Jugador 2
btnPedir2.addEventListener('click', () => { //a la constante btnPedir2 del segundo jugador le agregamos metodo de escucha para que cuando se presione un click en este ejecute la siguiente funcion de flecha
    const carta = pedirCarta(); //va hacer un llamado ala funcion carta y se va alamacenar el valor en la constante
    puntosJugador2 = puntosJugador2 + valorCarta(carta); // a la variable puntosJugador2 le asignamos el valor de esta y la sumamos con el resultado de la funcion valorCarta y le enviamos la constante carta como parámetro 
    puntos[1].innerText = puntosJugador2;  // a la constante puntos le añadimos un texto que va ser igual a los puntos de las cartas del jugador 2 y se va mostrar en la segunda etiqueta small
    const imgCarta = document.createElement('img'); 
    imgCarta.src= `assets/cartas/${carta}.png`; 
    imgCarta.classList = 'carta'; 
    divCartasJugador[1].append(imgCarta);// a la constante divCartasJugador almaceno en la segunda posicion mediante el metodo append le añadimos en su contenido los valores previamente establecidos en la constante  imgCarta

/* valido si los puntos del jugaor 2 son mayores a 21 se ejecuta un alert diciendo has perdido, los botones no se podran precionar mas
y se reiniziaran los puntos del jugador a 0*/
    setTimeout(()=>{
    if (puntosJugador2 > 21) { 
        alert('Has perdido'); 
        btnPedir2.disabled = true; 
        detenerTurno2.disabled=true;
        puntosJugador2 = 0;
     }
    },400)
    
});

//pedir carta jugador 3
btnPedir3.addEventListener('click',()=>{//a la constante btnPedir3 del tercer jugador le agregamos metodo de escucha para que cuando se presione un click en este ejecute la siguiente funcion de flecha
    const carta = pedirCarta();
    puntosJugador3 = puntosJugador3 + valorCarta(carta);
    puntos[2].innerText = puntosJugador3; // a la constante puntos le añadimos un texto que va ser igual a los puntos de las cartas del jugador 3 y se va mostrar en la tercer etiqueta small
    const imgCarta = document.createElement('img'); 
    imgCarta.src= `assets/cartas/${carta}.png`; 
    imgCarta.classList = 'carta'; 
    divCartasJugador[2].append(imgCarta);// a la constante divCartasJugador almaceno en la tercer posicion mediante el metodo append le añadimos en su contenido los valores previamente establecidos en la constante  imgCarta

/* valido si los puntos del jugaor 3 son mayores a 21 se ejecuta un alert diciendo has perdido y los botones no se podran precionar mas
y se reiniziaran los puntos del jugador a 0*/
    setTimeout(()=>{
    if (puntosJugador3 > 21) { 
        alert('Has perdido'); 
        btnPedir3.disabled = true; 
        detenerTurno3.disabled=true;
        puntosJugador3 = 0 ;
     }
    },400)

});

// Pedir carta Turno de la computadora
const turnoComputadora = (puntosMinimos, puntosMinimos2, puntosMinimos3)=>{ // creamos una constante que resive como valor una funcion de flecha que a su vez contien tres parametros
        do { // con el ciclo do ejecutamos el codigo minimo una vez
            const carta = pedirCarta(); // creamos una constante carta que haga un llamado a la funcion pedirCarta
    puntosComputadora = puntosComputadora + valorCarta(carta); // a la variable puntosComputador le concatenamos su valor junto con el resultado de la funcion valorCarta
    puntos[3].innerText = puntosComputadora; // a la constante puntos le añadimos un texto que va ser igual a los puntos de las cartas de la computadora
    const imgCarta = document.createElement('img'); // creo una constante que mediante la funcion document cree un elemento con el metodo createElement que sea igual a una imagen
    imgCarta.src= `assets/cartas/${carta}.png`; // a la constante imgCarta le añadimos un ruta o enlace que corresponde al css
    imgCarta.classList = 'carta'; // a la constante imgCarta le añadimos una clase que corresponde al css
    divCartasComputador.append(imgCarta); // a la constante divCartasJugador mediante el metodo append le añadimos en su contenido los valores previamente establecidos en la constante  imgCarta

    if (puntosMinimos > 21 || puntosMinimos2 > 21 || puntosMinimos3 > 21) { // creo una validacion para que en caso de que los puntosMinimos o los puntos minimos 2 y 3 sean mayores a 21 ejecute lo siguiente
        break; // detengo la ejecucion del ciclo

    }
    } while (puntosComputadora<=puntosMinimos && puntosComputadora<=puntosJugador2 && puntosComputadora<=puntosJugador3 && (puntosMinimos<=21) && (puntosMinimos2<=21)&& (puntosMinimos3<=21));
    
/* hago la siguiente validacion para mostrar quien gano*/
 




// si los puntos del primer jugador son mayores al segundo y si tambien son mayores alos del tercero mostran jugador 1 gano
    if (puntosMinimos > puntosMinimos2 && puntosMinimos > puntosMinimos3 && puntosMinimos > puntosComputadora) {
        alert(`${players[0]} gana`);

// si los puntos del segundo jugador son mayores alos del primero y si tambien son mayores alos del tercero mostran jugador 2 gano      
    }else if (puntosMinimos2 > puntosMinimos && puntosMinimos2 > puntosJugador3 && puntosMinimos2 > puntosComputadora) {
        alert(`${players[1]} gana`);

// si los puntos del tercer jugador son mayores alos del primero y si tambien son mayores alos del segundo mostran jugador 3 gano          
    }else if (puntosMinimos3 > puntosMinimos && puntosJugador3 > puntosMinimos2 && puntosMinimos3 > puntosComputadora) {
        alert(`${players[2]} gana`);
//sii los puntos de la computadora son mayores alos del primer jugador  y si son mayores alos del segundo y si tambien son mayores alos del tercero.
//mostrar computadora gana
   }else if (puntosComputadora > puntosMinimos && puntosComputadora > puntosMinimos2 && puntosComputadora > puntosMinimos3 && puntosComputadora<=21) {
      alert("computadora gana");




//si los puntos del primer jugador son iguales alos del segundo jugador 
//y si los puntos del primer jugador son mayores alos del tercero y si tambien son mayores alos de la computadora mostrar priemer y segundo jugador ganan
    }else if (puntosMinimos === puntosMinimos2 && puntosMinimos > puntosMinimos3 && puntosMinimos > puntosComputadora) {
        alert(`${players[0]} Y ${players[1]} ganan`)
 
//si los puntos del primer jugador son iguales alos del tercer jugador 
//y si los puntos del primer jugador son mayores alos del segundo y si tambien son mayores alos de la computadora mostrar primer y tercer jugador ganan  
    } else if (puntosMinimos === puntosMinimos3 && puntosMinimos > puntosMinimos2 && puntosMinimos > puntosComputadora) {
        alert(`${players[0]} Y ${players[2]} ganan`)

   //si los puntos de la computadora son iguales a los puntos del primer jugador y si son mayores a los del degundo jugador y si tambien son mayores
//alos del tercer jugador mostrar computadora y jugador 1 ganan
    }else if (puntosComputadora === puntosMinimos && puntosComputadora > puntosMinimos2 && puntosComputadora > puntosMinimos3) {
        alert(` computadora Y ${players[0]} ganan`)



  //si los puntos del segundo jugador son iguales alos del segundo tercero 
//y si los puntos del segundo jugador son mayores alos del primero y si tambien son mayores alos de la computadora mostrar segundo y tercer jugador ganan
    }else if (puntosMinimos2 === puntosMinimos3 && puntosMinimos2 > puntosMinimos && puntosMinimos2 > puntosComputadora) {
        alert(`${players[1]} Y ${players[2]} ganan`)      

//si los puntos del segundo jugador son iguales alos de la computadora
//y si los puntos del segundo jugador son mayores alos del primero y si tambien son mayores alos del tercero mostrar segundo jugador y la computadora ganan       
    }else if (puntosMinimos2 === puntosComputadora && puntosMinimos2 > puntosMinimos && puntosMinimos2 > puntosMinimos3) {
        alert(`${players[1]} Y la computadora ganan`)



 //si los puntos de la computadora son iguales a los puntos del tercer jugador y si son mayores a los del primer jugador y si tambien son mayores
//alos del segundo jugador mostrar computadora y jugador 3 ganan       
   }else if (puntosComputadora === puntosMinimos3 && puntosComputadora > puntosMinimos && puntosComputadora > puntosMinimos2) {
        alert(` computadora Y ${players[2]} ganan`)


//si los puntos del primer jugador son iguales alos del segundo y a la computadora pero son mayores alos del tercer jugador mostrar
//jugador 1 2 y la computadora ganan
   } else if (puntosMinimos === puntosMinimos2 && puntosMinimos === puntosComputadora && puntosMinimos > puntosMinimos3) {
        alert(`ganan ${players[0]}, ${players[1]} y la computadora`)

//si los puntos del primer jugador son iguales alos del tercero y a la computadora pero son mayores alos del segundo jugador mostrar
//jugador 1 3 y la computadora ganan
   }else if (puntosMinimos === puntosMinimos3 && puntosMinimos === puntosComputadora && puntosMinimos > puntosMinimos2) {     
        alert(`ganan ${players[0]}, ${players[2]} y la computadora`)
  

  // si lpos puntos del jugador son iguales alos del tercer juagdor ya los de la computadora pero los puntos del primer jugador son menores alos del segundo
  //mostrar ganan jugador 1 , 2 y la computadora 
   }else if (puntosMinimos2 === puntosMinimos3 && puntosMinimos2 === puntosComputadora && puntosMinimos < puntosMinimos2) {     
        alert(`ganan ${players[1]}, ${players[2]} y la computadora`)



//si los puntos del jugador 3 1 y 2 son iguales y los puntos del jugador 3 mayores alos de la computadora
//mostrar jugador 1 2 y tres ganan
   }else if (puntosMinimos3 === puntosMinimos && puntosMinimos3 === puntosMinimos2 && puntosMinimos3 > puntosComputadora) {  
        alert(`ganan ${players[0]}, ${players[1]} y  ${players[2]}`)

//si los puntos del primer jugador son menor o igual a 21 y si los puntos del segundo jiugador son menor o igual a 21 y si tambien los del tercer jugador tambien son menor o iguales a 21
//pero si los de la computadora son mayores a 21 mostrar ganan los mas cercanos a 21
    }else if (puntosMinimos<=21 && puntosMinimos2 <= 21 && puntosMinimos3 <= 21 && puntosComputadora > 21) {
      alert("ganan los mas cercanos a 21");

//si los puntos del primer jugador son iguales a los puntos de segundo jugador y si los puntos del primer jugador son iguales alos del tercero y si tambien son
//iguales alos de la computadora y si los puntos del segundo jugador son iguales alos del tercero y si los puntos de la computadora son iguales
//alos del segundo jugador y si tambien son iguales alos del tercero mostrar un mesaje diciendo empate       
    }else if (puntosMinimos === puntosMinimos2 && puntosMinimos === puntosMinimos3 && puntosMinimos === puntosComputadora && puntosMinimos2=== puntosMinimos3 && puntosComputadora === puntosMinimos2 && puntosComputadora === puntosMinimos3) {
        alert("empate")
    }
}

//evento para el boton detener 4 que en el html se llama terminar cuando este boton se precione en el html mostrara quien gano
detener4.addEventListener('click', ()=>{ 

//se desabilitaran estos botonos por si en el html no se an desabilitado
  btnPedir.disabled = true; //boton pedir carta del primer jugador se desabilita
  detenerTurno.disabled=true; //boton detener turno del primer jugador se desabilita

  btnPedir2.disabled = true;  //boton pedir carta del segundo jugador se desabilita
  detenerTurno2.disabled=true;  //boton detener turno del segundo jugador se desabilita

  btnPedir3.disabled = true;  //boton pedir carta del tercer jugador se desabilita
  detenerTurno3.disabled=true;  //boton detener turno del tercer jugador se desabilita
 
  turnoComputadora(puntosJugador, puntosJugador2, puntosJugador3); // se llamara ala funcion turno computadora  y se le pasaran por parametros los puntos del
  //jugador 1 , 2 y 3
});

// evento para el boton detener
detenerTurno.addEventListener('click', ()=>{
    btnPedir.disabled = true;  // Deshabilita el boton perdir carta
    detenerTurno.disabled=true; // Deshabilita el boton detener
  
});
// evento para el boton detener del segundo jugador
detenerTurno2.addEventListener('click', ()=>{
    btnPedir2.disabled = true;  
    detenerTurno2.disabled=true; 
  
});
// evento para el boton detener del tercer jugador 
detenerTurno3.addEventListener('click', ()=>{
    btnPedir3.disabled = true;  
    detenerTurno3.disabled=true; 
 
});


// Nuevo Juego
nuevoJuego.addEventListener('click',()=>{ // al elemento nuevoJuego le agrego un evento de escucha de click que ejecutará la siguiente funcion de flecha
    deck= []; // reiniciamos el deck
    deck = crearDeck(); // añado las cartas al deck nuevamente

    btnPedir.disabled=false; // habilito el boton pedirCarta primer jugador
    detenerTurno.disabled=false;//se habilita el boton detener del primer jugador

    btnPedir2.disabled=false; //habilito el boton pedirCarta segundo jugador
    detenerTurno2.disabled=false; // habilito el boton detenerTurno del segundo jugador

    btnPedir3.disabled=false; //habilito el boton pedirCarta tercer jugador
    detenerTurno3.disabled=false;//habilito el boton detenerTurno del segundo jugador

    //for que recorre lo que hay divcartasjugador de cada jugador y en cada vuelta lo iguala a nada
    for (var i = 0; i < divCartasJugador.length; i++) {
        divCartasJugador[i].innerHTML= "";

        divCartasComputador.innerHTML='';// ala div cartas de la computadora se va igualar a nada
    }

   //for que recorre lo que hay en la variable puntos y en cada vuelta lo iguala a un espacio en blanco
   for (var i = 0; i < puntos.length; i++) {
       puntos[i].innerHTML = "";
   }
    puntosJugador=0; // reinicio los puuntos del jugador inicializando la variable en 0
    puntosJugador2=0;// se reinicia los puntos del segundo jugador inicializando la variable a 0
    puntosJugador3=0;//se reinicia los puntos del tercer jugador inicializando la variable a 0
    puntosComputadora=0; // reinicio los puntos de la computadora inicializando la variable en 0

});