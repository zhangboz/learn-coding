var hat = ['Normal Hat' , 'trilby', 'sombrero', 'fedora'];
var size = [2 , 3, 3,3];
var price = [4 , 6, 3, 7];
var M = 4;
// Not sure if I need to use JSON files for data inputs, so I simply typed data directly in my code.

function stage8(hat, size, price, M)
{
var	hatvar = hat;
var	sizevar = size;
var	pricevar = price;
var	N = sizevar.length;
var positions = [];	
var C = Math.max(...sizevar)	
// I am using built-in max function to find the maximum in array "sizevar".
// But if it's required, I have provided my own solution to find the maximum.

///////////////////////////////////////////////////////////////////////////////////////////
// My own algorithm to find the maximum in array "sizevar".						///////////
// var	C = sizevar[0];															///////////
// for (var i = 0; i < N; i++) 													///////////
// {																			///////////
// if (sizevar[i] > C)															///////////
// {																			///////////
// C = sizevar [i];																///////////
// }																			///////////
// }																			///////////
///////////////////////////////////////////////////////////////////////////////////////////
for (var i = 0; i < N; i++) 
{
	if (sizevar[i] == C)
	{ 
		for (var j = 0; j < M; j++) 
		{
			positions.push(i);
		}
	}   
}
	return (positions);
}

// End of function, now output on the webpage.

var result = stage8(hat,size,price, M);
var L = result.length;
var hat_print = [];
var size_print = [];
var price_print = [];

for (var k = 0; k < L; k++)
{
	hat_print.push(hat[result[k]]);
}
for (var q = 0; q < L; q++)
{
	size_print.push(size[result[q]]);
}
for (var w = 0; w < L; w++)
{
	price_print.push(price[result[w]]);
}

for (var e = 0; e < L; e++)
{
var trow = document.createElement("tr");
var tbh1 = document.createElement("th");
var tbh2 = document.createElement("th");
var tbh3 = document.createElement("th");
trow.appendChild(tbh1);
trow.appendChild(tbh2);
trow.appendChild(tbh3);
var node1 = document.createTextNode(hat_print[e]);
var node2 = document.createTextNode(size_print[e]);
var node3 = document.createTextNode(price_print[e]);
tbh1.appendChild(node1);
tbh2.appendChild(node2);
tbh3.appendChild(node3);
var element = document.getElementById("table");
element.appendChild(trow);
}
