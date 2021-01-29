                                                  //OBJECT     
// Explames
var cars = {
	type:"moto", 
	marka:"BMW", 
	model:"GS810", 
	maiden:"Germania", 
	age:"2020"
};
let cars1 = {
	fullname: function() {
		return this.type + " " + this.marka;
	}
}
function cal() {
	let x = cars1.fullname.call(cars);
	document.getElementById('object').innerHTML = x;
}
//Пустая кнопка
function empty() {
	document.getElementById("object").innerHTML = " ";
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
// перебор через цикл
function forin() {
	var x;
	var text ="";
	for (x in cars) {
		text += cars[x] + " ";
	}
	document.getElementById('object').innerHTML = text;
}

//класс для объекта
function Ccclass() {
	class Car {
		constructor(name, year) { 
		this.name = name;
		this.year = year;
	}
}
let myCar = new Car("bmw", 2020);
document.getElementById("object").innerHTML = myCar.name + " " + myCar.year;
}

// добавления нового свойства
 function added () {
 	cars.color = "Red";
 	document.getElementById("object").innerHTML = 
	" Type: "+ cars.type + " " + "marka: "+ cars.marka + " " 
	+ "model: " + cars.model + " " + "maiden: " + cars.maiden + " " 
	+ "age: " + cars.maiden + " Color: " + cars.color;
 }

// удаление свойтсва с его значением
function Delete() {
	 delete cars.type;
}
// Добавление функии в объект
function AddedFunction() {
	cars.name = function() {
		return this.marka + " " + this.model;
	}
	document.getElementById("object").innerHTML = "Use-in Function " +
	+ cars.name();
}
// Отбражение объекта с values
function valuee() {
	var myArray = Object.values(cars);
	document.getElementById("object").innerHTML = myArray;
}
function JSOoN () {
	var myString = JSON.stringify(cars);
	document.getElementById("object").innerHTML = myString;
}
function objectData () {
	var myArrayDate = {toda: new Date()};
	let date = JSON.stringify(myArrayDate);
	document.getElementById("object").innerHTML = date;
}function func () {
	let fun = {name:" ", al:function() {return 26;}};
	let fu = JSON.stringify(fun);
	document.getElementById("object").innerHTML = fu;
}
// свойтсво get lang
function getlang () {
	let chbox = document.getElementById('one');

	if (chbox.checked) {
		let person = {
			  firstName: "John",
			  lastName : "Doe",
			  language : "en",
			  get lang() {
			  	return this.language.toUpperCase();
			  }
			}
			document.getElementById("object").innerHTML = person.lang;
	} else {
		document.getElementById('object').innerHTML = " ";
	}
}
function setlang() {
	let chbox = document.getElementById('setlang');

	if(chbox.checked) {
		let person = {
		  firstName: "John",
		  lastName : "Doe",
		  language : "NO",
		  set lang (value) {
		  	this.language = value;
	  }
	};
		person.lang = "Hey";
		document.getElementById('object').innerHTML = person.language;
} else {
	document.getElementById('object').innerHTML = " ";
}
}

function define () {
	let obj = {counter : 0};
	Object.defineProperty(obj, "reset",{
		get : function () {this.counter = 0;}
	});
	Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (value) {this.counter -= value;}
});

// Play with counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;
document.getElementById("object").innerHTML = obj.subtract = 1;
}
// create to template class object
function objclas () {
		class Car {
	  constructor(name, year) {
	    this.name = name;
	    this.year = year;
	  }
	}

	myCar = new Car("Ford", 2014);
	document.getElementById("object").innerHTML =
	myCar.name + " " + myCar.year;
}

// class inheritance
function inheritance() {
	class Car {
		constructor(brand) {
			this.carname = brand;
		}
		present() {
			return 'I have a '+ this.carname;
		}
	}
class Model extends Car {
	constructor(brand, mod) {
		super(brand);
		this.model = mod;
	}
	show() {
		return this.present() + ', it is a '+ this.model;
	}
}
let myCar = new Model('ford','Mustang');
document.getElementById('object').innerHTML = 
myCar.show();
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
// функция через чекбокс часы
function clock () {
	let chbox = document.getElementById('d');

	if(chbox.checked) {
		setInterval(myfunction, 1000);

		function myfunction() {
			let d = new Date();
			document.getElementById('DATE').innerHTML = 
			d.getHours() + ':' + 
			d.getMinutes() + ':' +
			d.getSeconds();
		}
	} else {
		
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
function strJSоONARR() {
	let der = JSON.stringify(numberOne);
	document.getElementById('ALF').innerHTML = der;
}
                                //MATH

function pi(){
	document.getElementById("MATH").innerHTML = Math.PI;
}
function round(){
	document.getElementById("MATH").innerHTML = Math.round(4.4);
}


									// FUNCTION
function leng() {
	function myfunction( a, b) {
		return arguments.length;
	}
	document.getElementById("functionn").innerHTML = 
	myfunction(1, 2);
}

// arrow function
function arrow() {
	const x = (x, y) => x * y ;
	document.getElementById("functionn").innerHTML = 
	x(3, 5);
}
function str () {
function tostr (a, b)  {
	return a * b ;
}
 document.getElementById('functionn').innerHTML = window.tostr.toString();
}
function msx() {

	function findMax() {
		let i;
		let max = -Infinity;
		for(i = 0; i < arguments.lentgh; i++){
			if(arguments[i] > max) {
				max = arguments[i];
			}
		}
		return max;
	}
	document.getElementById('functionn').innerHTML = findMax(4, 5, 6);

}
// callback function
function callbackk () {
	function mydispalyer(some) {
		document.getElementById("functionn").innerHTML = some;
	}

	function calculator (num1, num2, myCallback) {
		let sum = num1 + num2;
		myCallback(sum);
	}
	calculator(1, 2, mydispalyer);
}
// функция с временем
 function AsynCallback () {
 	setTimeout(myFunction, 3000);

 	function myFunction() {
 		document.getElementById("functionn").innerHTML = 'I love You '  ;
 	}
 }
 // функция с времением 2 вариант
 function AsynCallbackk() {
 	setTimeout( function() { myfunction('I love you ');}, 3000);

 	function myfunction(value) {
 		document.getElementById('functionn').innerHTML = value;
 	}
 }
								// HTML DOM

function changecolor(id) {
	id.innerHTML= "Ooops!"
}
function changetext(obj) {
	obj.innerHTML = "Thank You"
}
function mOut(obj) {
	obj.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, voluptas harum explicabo animi cupiditate illum rerum earum, unde aliquid ut optio atque eum nulla sed velit dolorum qui. Temporibus, suscipit."
}
document.getElementById('addEv').addEventListener('click', function(){alert('Hello World');});
const input = document.querySelector('#input');
const log = document.getElementById('log');

input.addEventListener('keyup', logKey);

function logKey (e) {
  log.textContent += ` ${e.code}`;
}

// меняет ширину
const congo = document.querySelector('.go');
const coeffb = document.querySelector('.tyfghqwrfg')

function pdfp () {
	congo.classList.add('gsaeg');
}
function epfgd () {
	congo.classList.remove('gsaeg');
}
let widthcon = 150;


function sizeWMI () {
	if (widthcon > 0){
	widthcon = widthcon - 10;
	congo.style.width = widthcon + "px";
	} else {

	}
}

function sizeWPL ()  {
	if (widthcon < window.screen.width) {
	widthcon = widthcon + 10;
	congo.style.width = widthcon + "px";
	}
}

function pressCon (e) {
	if (e.keyCode === 39) {
		sizeWPL ();
	} else if (e.keyCode === 37) {
		sizeWMI ();
	}
}

document.addEventListener('keyup', pressCon);


							// AJAX
// json фейковый 
let ajax = () => {
const requesURL = 'https://jsonplaceholder.typicode.com/users';
// GET
function sendREquest (method, url)  {
	return new Promise ((resolve, reject) => {
		const xhr = new XMLHttpRequest();

	xhr.open(method, url);
	xhr.pesponseType ="json"; 
	xhr.onload = () => {
		if (xhr.status >= 400) {  // это проверяет на ошибки больше 400 401 404 ошибки
			reject(xhr.response);
		} else {
			resolve(xhr.response);
		}
		console.log(xhr.response); 
	}
	xhr.onerror = () => {
		reject(xhr.response); // ошибки в сети 
	}
	xhr.send();
	})
}
sendREquest ('GET', requesURL)
	.then(data => console.log(data))
	.catch(err => console.log(err)) 
// POST 
function senDREquest (method, url, body = null)  {
	return new Promise ((resolve, reject) => {
		const xhr = new XMLHttpRequest();

	xhr.open(method, url);
	xhr.pesponseType ="json"; 
	xhr.setReauestHeadr('Content-type', 'application/json')
	xhr.onload = () => {
		if (xhr.status >= 400) {  // это проверяет на ошибки больше 400 401 404 ошибки
			reject(xhr.response);
		} else {
			resolve(xhr.response);
		}
		console.log(xhr.response); 
	}
	xhr.onerror = () => {
		reject(xhr.response); // ошибки в сети 
	}
	xhr.send(JSON.stringify(body));
	})
}
const body = {
	name: 'Zebzeev',
	age: 26
};

senDREquest ('POST', requesURL, body)
	.then(data => console.log(data))
	.catch(err => console.log(err)); 
}

                 // JSON
let jso = () => {
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		var myObj = JSON.parse(this.responseText);
		document.getElementById('json').innerHTML = myObj.name;
	}
};
xhr.open('GET','../json/data.json', true);
xhr.send();
}
// CLass

class Animal {
	static type = 'ANIMAL'
	constructor(options) {
		this.name = options.name
		this.age = options.age 
		this.hasTail = options.hasTail
	}
voice(){
	console.log('I am Animal!')
}
}

const animal = new Animal({
	name : 'Animal',
	age: 5,
	hasTail: true
})

class Cat extends Animal {
	static type = 'CAT';

	constructor (options) {
		super(options);
		this.color = options.color;
	}

	voice() {
		super.voice();
		console.log('i am cat')
	}
	get ageInfo () {
		return this.age * 7
	}
	set ageInfo (newAge) {
		this.age = newAge
	}
}

 const cat = new Cat ({
 	name: 'Cat',
 	age: 7,
 	hasTail: true,
 	color: 'black'
 })
  class Component {
  	constructor(selector) {
  		this.$el = document.querySelector(selector)
  	}
  	hide () {
  		this.$el.style.display = 'none';
  	}
  	show () {
  		this.$el.style.display = 'block';
  	 }
  }
  class Box extends Component {
  	 constructor(options) {
  	 	super(options.selector)

  	 	this.$el.style.width = this.$el.style.height = options.size + 'px'
  	 	this.$el.style.background = options.color
  	 }
  }
 
 const box1 = new Box ({
 	selector: '#box1',
 	size: 200,
 	color: 'red'

 })

 const box2 = new Box({
 	selector: '#box2',
 	size: 250,
 	color: 'lightpink'
 })
  class Circle extends Box {
  	constructor (options) {
  		super(options)

  		this.$el.style.borderRadius = '50%'
  	}
  }
   const c = new Circle ({
   	selector: '#circle',
 	size: 50,
 	color: 'lightgreen'
   })