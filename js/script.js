
//show date
function showDate(){
	document.getElementById('d_h2').innerHTML= Date();
}

//bulb on/off
function bulbOn(){
	document.getElementById('img').src= "img/on.gif";
}
function bulbOff(){
	document.getElementById('img').src= "img/off.gif";
}

//font size
function fontChange(){
	document.getElementById('f_h2').style.fontSize= "60px";
}


//show hide
function show(){
	document.getElementById('c_h2').style.display= "block";
}
function hide(){
	document.getElementById('c_h2').style.display= "none";
}

//Dwrite
function writeOutput(){
	document.write('Hello world')
}

//walert
function walert(){
	window.alert('Hello world');
}

//console log
function cLog(){
	console.log('Hello world');
}

//variable output
var number1 = 10;
var number2 = 20;

var data = number2 + number1;

function vOutput(){
	document.getElementById('vh2').innerHTML=data;
}

//Click Me
function clickMe(){
	document.getElementById('m_h2').innerHTML="Hello JavaScript!";
}

//font size
function fsize(){
	document.getElementById('n_h2').style.fontSize="60px";
}

//show/hide
function showTag(){
	document.getElementById('Ta_h2').style.display="block";
}
function hideTag(){
	document.getElementById('Ta_h2').style.display="none";
}

//paragraph change
function change(){
	document.getElementById('p_h2').innerHTML="Paragraph change";
}

//dwrite
function dwrite(){
	document.write('Hello world')
}

//dwrite
function walert(){
	window.alert('Hello world')
}

//var
var numbar1 = 100;
var numbar2 = 50;

var data= numbar1 + numbar2

function rOutput(){
	document.getElementById('rh2').innerHTML=data;
}

//date
function sDate(){
	document.getElementById('e_h2').innerHTML=Date();
}

//date
function hDate(){
	document.getElementById('l_h2').innerHTML=Date();
}

//date
function eDate(){
	document.getElementById('g_h2').innerHTML=Date();
}

//math pi
function mathPl(){
	document.getElementById('a_h2').innerHTML=Math.PI;
}

//math.E
function mathE(){
	document.getElementById('on_h2').innerHTML=Math.E;
}

//math.sqrt2
function mathSQRT2(){
	document.getElementById('da_h2').innerHTML=Math.SQRT2;
}

//math.SQRT1_2
function mathSQRT1_2(){
	document.getElementById('sq_h2').innerHTML=Math.SQRT1_2;
}

//Math.LN2
function mathLN2(){
	document.getElementById('L_h2').innerHTML=Math.LN2;
}

//Math.LN10
function mathLN10(){
	document.getElementById('N_h2').innerHTML=Math.LN10;
}

//Math.LOG2E
function mathLOG2E(){
	document.getElementById('G_h2').innerHTML=Math.LOG2E;
}

//Math.round
function mathRound(){
	document.getElementById('R_h2').innerHTML=Math.round(4.6);
}

//Math.random
function mathRandom(){
	document.getElementById('u_h2').innerHTML=Math.random();
}

//booLeans
function booLeans(){
	document.getElementById('s_h2').innerHTML=Boolean(10 > 9);
}


//Operator Precedence
function peratorPrecedence(){
	document.getElementById('to_h2').innerHTML= 100 / 50 * 3;
}