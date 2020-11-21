                                                  //OBJECT
"use strict"                     
// Explames
var cars = {
	type:"moto", 
	marka:"BMW", 
	model:"GS810", 
	maiden:"Germania", 
	age:"2020"
};

//Пустая кнопка
function empty() {
	document.getElementById("object").innerHTML = " "
}

//Сам объект
function Cars() {
	document.getElementById("object").innerHTML = 
	" type: "+ cars.type + " " + "marka: "+ cars.marka + " " + "model: " + cars.model + " " + "maiden: " + cars.maiden + " " + "age: " + cars.maiden;
}

//
function THIS(){
	var cars1 = {
	type:"moto", 
	marka:"BMW", 
	model:"GS810", 
	maiden:"Germania", 
	age:"2020",
	fullName: function() {
		return this.type + " " + this.marka + " " + this.model + " " + this.maiden + " " + this.age 
						}
				};
document.getElementById("object").innerHTML =
cars1.fullName();
}
function forin() {
	var x;
	var text ="";
	for (x in cars) {
		text += cars[x] + " ";
	}
	document.getElementById('object').innerHTML = text;
}
									//STRING
function cikleForOf() {
		var txt = "JavaScript";
		var x;
		for (x of txt) {
  			document.write(x + " ");
}
}



                                     //DATE
var d = new Date();
//Пустая кнопка
function empty1() {
	document.getElementById("DATE").innerHTML = " "
}                                     
          
function displayDate() {
		document.getElementById("DATE").innerHTML = Date()
	};
function tostring1(){
	document.getElementById("DATE").innerHTML=d.toString();
}	
function toutcstring(){
	document.getElementById("DATE").innerHTML=d.toUTCString();
}
function todatestring(){
	document.getElementById("DATE").innerHTML=d.toDateString();
}
function toisostring(){
	document.getElementById("DATE").innerHTML=d.toISOString();
}
function Mybirthday(){
	document.getElementById("DATE").innerHTML= new Date("1994-03-08");
}
function mylife() {
	var dod = Date.parse("1994-03-08");
	var heredata = Date.parse(d);
	var life = heredata - dod;
	var min = life/60000;
document.getElementById("DATE").innerHTML= "Сколько я прожил в милесекундах:" + " " + life + " " + "В минутах:" + " " + min;
}
function getItme(){
	document.getElementById("DATE").innerHTML = d.getTime();
}
function getfullyear(){
	document.getElementById("DATE").innerHTML = d.getFullYear();
}
function getmonth(){
	document.getElementById("DATE").innerHTML = d.getMonth()+1;
}
function getdate(){
	document.getElementById("DATE").innerHTML = d.getDate();
}
function gethours(){
	document.getElementById("DATE").innerHTML = d.getHours();
}
function getminutes(){
	document.getElementById("DATE").innerHTML =d.getMinutes();
}
function getseconds(){
	document.getElementById("DATE").innerHTML =d.getSeconds();
}
function getmilliseconds(){
	document.getElementById("DATE").innerHTML =d.getMilliseconds();
}
function getdate(){
	document.getElementById("DATE").innerHTML =d.getDay();
}
function vremidni(){
	if (new Date().getHours() < 12){
		document.getElementById("DATE").innerHTML =" Good Mornig";
	}else if (new Date().getHours() < 18) {
		document.getElementById("DATE").innerHTML =" Good Day";
	}else {
		document.getElementById("DATE").innerHTML =" Good Evening";
	}
}

                                     //ARRAY METHOD

var frui = ["Banana", "Orange", "Apple", "Mango", "Lemon"];
var numberOne = [2,1,5,7,345,62,45,0];
//Пустая кнопка
function empty3() {
	document.getElementById("ALF").innerHTML = " ";
}                                     
function event12(){ 
	document.getElementById("ALF").innerHTML = frui;
}
function  SortAlf() {
	frui.sort();
	document.getElementById("ALF").innerHTML = frui;
};
//
function element (){
 	var txt = "";
frui.forEach(myFunction);
document.getElementById("ALF").innerHTML = txt;

function myFunction(value) {
  txt = txt + value + "<br>"; 
}
}
 function myRevers(){
 	document.getElementById("ALF").innerHTML = frui.reverse();
 }
 function mynumberOne() {
 	var p = numberOne.sort(function(a,b){return a-b});
 	document.getElementById("ALF").innerHTML = p;
 }
 function mynumberTwo() {
 	var p = numberOne.sort(function(a,b){return b-a});
 	document.getElementById("ALF").innerHTML = p;
 }
 function enety13(){
 	document.getElementById("ALF").innerHTML = numberOne;
 }
 function mymap () {
 	var nember = numberOne.map(myrer);

 	document.getElementById("ALF").innerHTML = nember;
 	function myrer (value, index, array) {
 		return value*2;
 	}
 }
function myfilter2() {
 	var nember1 = numberOne.filter(myrer1);

 	document.getElementById("ALF").innerHTML = nember1;
 	function myrer1(value, index, array) {
 		return value > 18;
 	}
}
function reduce1 () {
	var vnutri = numberOne.reduce(myrer2);

 	document.getElementById("ALF").innerHTML = "Это сумма массива:"+" "+vnutri;
 	function myrer2(total, value) {
 		return total + value;
 	}
}
function evere2 () {
	var vnutri = numberOne.every(myrer2);

 	document.getElementById("ALF").innerHTML = "Не все элементы соотвествуют тесту:"+" "+vnutri;
 	function myrer2 (value) {
 		return value > 18;
 	}
}
function some2() {
	var vnutri = numberOne.some(myrer3);

 	document.getElementById("ALF").innerHTML = "Что есть числа больше 18:" + " " + vnutri;
 	function myrer3 (value, index, array) {
 		return value > 18;
 	}
}
function indexOf1() {
	var vnutri = frui.indexOf("Banana");

 	document.getElementById("ALF").innerHTML = "Счет идет с начало индекс слова банан" + " " + vnutri;
}
function lastindexOf1() {
	var vnutri = frui.lastIndexOf("Apple");

 	document.getElementById("ALF").innerHTML = "Счет идет с конца индекс слова яблоко:" + " " + vnutri;
}
function find2() {
	var vnutri = numberOne.find(myrer3);

 	document.getElementById("ALF").innerHTML = "Возращает первый элемент которые прошел тест value > 18:" + " " + vnutri;
 	function myrer3 (value, index, array) {
 		return value > 18;
 	}
}
function find3() {
	var vnutri = numberOne.findIndex(myrer3);

 	document.getElementById("ALF").innerHTML = "Возращает первый индекс элемента которые прошел тест value > 12:" + " " + vnutri;
 	function myrer3 (value, index, array) {
 		return value > 12;
 	}
}
function length1(){
	var l = frui.length;
	document.getElementById("ALF").innerHTML=l;
}
function perebor1() {
	text ="<ol>";
	for (i=0; i<frui.length; i++) {
		text += "<li>" + frui[i] + "</li>";
	}
	text += "</ol>";
	document.getElementById("ALF").innerHTML=text;
}
function tostring() {
	document.getElementById("ALF").innerHTML = frui.toString();
}
function join1(){
	document.getElementById("ALF").innerHTML = frui.join("<b>");
}
function pop1() {
	document.getElementById("ALF").innerHTML = frui.pop();
}
function push1(){
	document.getElementById("ALF").innerHTML = frui.push("Kiwi");
}
function shift1() {
	document.getElementById("ALF").innerHTML = frui.shift();
}
function unshift1() {
	document.getElementById("ALF").innerHTML = frui.unshift("Mango");
}
function dlina(){
	var z 
	var x = frui.lenght;
	switch (x){
		case 0:
		case 1:
		case 2:
		z = " Меньше четырех значений";
		break;
		case 3:
		case 4:
		case 5:
		z = " Больше четырех значений";
		break;
		default:
		z = "Больше семи значений, ОГО";
	}
document.getElementById("ALF").innerHTML = z;
}
function cikle(){
	var text ="";
	var i;
	for(i = 0; i < numberOne.length; i++) {
	text += numberOne[i] + " ";
	}
document.getElementById("ALF").innerHTML = text;
}

                                //MATH

function pi(){
	document.getElementById("MATH").innerHTML = Math.PI;
}
function round(){
	document.getElementById("MATH").innerHTML = Math.round(4.4);
}