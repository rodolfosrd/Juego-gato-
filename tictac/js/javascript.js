
var turno = 1;
var queTurno;
var arregloGato = new Array(9);
var celdas = document.getElementsByClassName("gato");

function ganaJugador(letra)
{
	if(
		(arregloGato[0]==letra && arregloGato[1]==letra && arregloGato[2]==letra) ||
		(arregloGato[3]==letra && arregloGato[4]==letra && arregloGato[5]==letra) ||
		(arregloGato[6]==letra && arregloGato[7]==letra && arregloGato[8]==letra) ||
		(arregloGato[0]==letra && arregloGato[3]==letra && arregloGato[6]==letra) ||
		(arregloGato[1]==letra && arregloGato[4]==letra && arregloGato[7]==letra) ||
		(arregloGato[2]==letra && arregloGato[5]==letra && arregloGato[8]==letra) ||
		(arregloGato[0]==letra && arregloGato[4]==letra && arregloGato[8]==letra) ||
		(arregloGato[2]==letra && arregloGato[4]==letra && arregloGato[6]==letra)
	)
	{
		alert("Jugador "+letra+" GANA");
		window.location.reload();
	}
}

function gato(evento)
{
	
	var celda = evento.target;
	celda.removeEventListener("click",gato);
	
	var idCelda = evento.target.id;
	

	var posicionAMarcar = idCelda[1]-1;
	

	queTurno = turno%2;

	
	if(queTurno==1)
	{
		celda.innerHTML = "X";
		celda.style.background = "#EC673A";
		arregloGato[posicionAMarcar] = "X";
		ganaJugador("X");
	}

	else
	{
		celda.innerHTML = "O";
		celda.style.background = "#1C5F81";
		arregloGato[posicionAMarcar] = "O";
		ganaJugador("O");
	}

	console.log(turno,queTurno,arregloGato);

	if(turno==9)
	{
		alert("Empate");
		
		window.location.reload();
	}
	else
	{
		turno++;
	}
}

function cargarDocumento()
{
	
	var n=0;

	while(n<celdas.length)
	{
	
		celdas[n].addEventListener("click",gato);
		n++;
	}
}


window.addEventListener("load",cargarDocumento);