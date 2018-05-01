function checkgender()
{
var vb1= document.getElementsByName("gender");
var len = vb1.length
for (i=0; i<len; i++)
{
	if (vb1[i].checked)
	{
		var gvar = vb1[i]
	}//gvar is global variable
}	
return gvar
}



function store_data()
{
// 1. Read gender radio button
var radiobutton1= document.getElementsByName("gender");
var len1 = radiobutton1.length
for (i=0; i<len1; i++)
{
	if (radiobutton1[i].checked)
	{
		var gvar = radiobutton1[i]
	}
}
// 2 Read age radio button

var radiobutton2= document.getElementsByName("age");
var len2 = radiobutton2.length
for (i=0; i<len2; i++)
{
	if (radiobutton2[i].checked)
	{
		var avar = radiobutton2[i]
	}
}

// 3 Read major radio button

var radiobutton3= document.getElementsByName("major");

	if (radiobutton3[0].checked)
	{
		var mvar = radiobutton3[0]
	}
	else
	{
		//var z = document.getElementById("rb3");
		var mvar = rb3;
	}

// 4 Read Name textbox

var name, x;
x = document.getElementById("form_name");
name = x.elements["name"].value;
// 5 store to localStorage
var y = {};
y.name=name;
y.gender=gvar.value;
y.age = avar.value;
y.major = mvar.value;
var data = {items: []};

if (localStorage.data){
		data = JSON.parse(localStorage.data);
		data.items.push(y);
		localStorage.data = JSON.stringify(data);
        } 
else{
		data = {items: [y]};
        localStorage.data = JSON.stringify(data);
		}
		
if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
		var n = localStorage.clickcount;
    document.getElementById("result").innerHTML = n +" sets of data are now stored.";
    document.getElementById("age").innerHTML = "";
	document.getElementById("gender").innerHTML = "";
	document.getElementById("form_name").innerHTML = "";
	document.getElementById("major").innerHTML = "";
	document.getElementById("title1").innerHTML = "Thanks for voting, please refresh the page to vote again.";
	document.getElementById("title2").innerHTML = "";
	document.getElementById("title3").innerHTML = "";
	document.getElementById("title4").innerHTML = "";

document.getElementById("result").innerHTML = localStorage.clickcount + " sets of data are now stored.";
}



function display(){

// display data
var retrieve = JSON.parse(localStorage.data);

for (var e = 0; e < retrieve.items.length; e++)
 {
var trow = document.createElement("tr");
var tbh1 = document.createElement("th");
var tbh2 = document.createElement("th");
var tbh3 = document.createElement("th");
var tbh4 = document.createElement("th");

trow.appendChild(tbh1);
trow.appendChild(tbh2);
trow.appendChild(tbh3);
trow.appendChild(tbh4);

var node1 = document.createTextNode(retrieve.items[e].name);
var node2 = document.createTextNode(retrieve.items[e].gender);
var node3 = document.createTextNode(retrieve.items[e].age);
var node4 = document.createTextNode(retrieve.items[e].major);

tbh1.appendChild(node1);
tbh2.appendChild(node2);
tbh3.appendChild(node3);
tbh4.appendChild(node4);

var element = document.getElementById("table");
element.appendChild(trow);
 }
    var child = document.getElementById("dis_button");
    var parent = document.getElementById("dis");
    parent.removeChild(child)
}

function end_vote(){

 // clear data
localStorage.clear();
document.getElementById("result").innerHTML =" User requested end vote, data cleared.";

}
























