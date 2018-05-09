var myDuymem = document.getElementById("btnContainer").childNodes[3];
var myDuymemPause = document.getElementById("btnContainer").childNodes[1];

var qirmiziDiv = document.querySelector(".first");
qirmiziDiv.setAttribute("style","left:0; top:0;");

var maviDiv = document.querySelector(".second");
maviDiv.style.top = 0;
maviDiv.style.left = "calc(100% - 40px)";

var kokRengiDiv = document.querySelector(".third");
kokRengiDiv.style.left = "0";
kokRengiDiv.style.top = "300px";


var sariDiv = document.querySelector(".fourth");
sariDiv.style.left = "calc(100% - 40px)",
sariDiv.style.top = "300px";



myDuymem.addEventListener("click",function(){

	qirmiziDiv.style.top = maviDiv.style.top;
	qirmiziDiv.style.left = maviDiv.style.left;

	function MoveBlue(){

		maviDiv.style.top = sariDiv.style.top;
		maviDiv.style.left = sariDiv.style.left;
	   
	}
    setTimeout(MoveBlue, 700);


    	function MoveYellow(){

		sariDiv.style.top = kokRengiDiv.style.top;
	    sariDiv.style.left = kokRengiDiv.style.left;
	   }
        setTimeout(MoveYellow, 1400);


        function moveKok(){

		kokRengiDiv.style.top = "0";
	    kokRengiDiv.style.left = "0";
	   }
        setTimeout(moveKok, 2100);
    
})

	 
myDuymemPause.addEventListener("click",function(){

	window.clearTimeout();
})