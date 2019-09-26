var numsq=6;
var colors=generate(numsq);
var correctdisplay=pick(6);
var squares=document.querySelectorAll(".square");
var colordisplay=document.querySelector("#display");
var tryagain=document.querySelector("#try");
var h1=document.querySelector("h1");
var resetb=document.querySelector("#reset");
var easyb=document.querySelector("#eas");
var hardb=document.querySelector("#har");










colordisplay.textContent=correctdisplay;
resetb.addEventListener("click",function(){
	resetb.textContent="New Colors"
	tryagain.textContent="";
colors=generate(numsq);
correctdisplay=pick(numsq);
colordisplay.textContent=correctdisplay;
h1.style.background="steelblue";
for(var i=0;i<squares.length;i++)
{
	squares[i].style.background=colors[i];
}

});




for(var i=0;i<squares.length;i++)
{
	squares[i].style.background=colors[i];

squares[i].addEventListener("click",function(){

var clickedcolor=this.style.background;
console.log(clickedcolor,correctdisplay);
if(clickedcolor === correctdisplay)
	{
		tryagain.textContent="Correct";
		resetb.textContent="Play Again?"
		h1.style.background=correctdisplay;

         for(var j=0;j<squares.length;j++)
         {
         	squares[j].style.background=correctdisplay;
         }
}
else{this.style.background="#232323";
tryagain.textContent="Try Again!";

}

});
}

easyb.addEventListener("click",function(){
easyb.classList.add("selected");
h1.style.background="steelblue";
	hardb.classList.remove("selected");
resetb.textContent="New Colors"
numsq=3;
colors=generate(numsq);
correctdisplay=pick(numsq);
colordisplay.textContent=correctdisplay;
for(var i=0;i<squares.length;i++)
{
	if(colors[i])
	squares[i].style.background=colors[i];
else
	squares[i].style.display="none";
}



});
hardb.addEventListener("click",function(){
	hardb.classList.add("selected");
	h1.style.background="steelblue";
	easyb.classList.remove("selected");
	resetb.textContent="New Colors"
	numsq=6;
colors=generate(numsq);
correctdisplay=pick(numsq);
colordisplay.textContent=correctdisplay;
for(var i=0;i<squares.length;i++)
{
	squares[i].style.background=colors[i];
	squares[i].style.display="block";
}

});
function generate(num)
{

var a=[];
for(var i=0;i<num;i++)
a.push(pickrandom());
return a;



}


function pickrandom()
{
var r=Math.floor(Math.random()*256);
var g=Math.floor(Math.random()*256);
var b=Math.floor(Math.random()*256);
return "rgb("+r+", "+g+", "+b+")";


}
function pick(num)
{
	var random=Math.floor(Math.random()*num);
	return colors[random];
}