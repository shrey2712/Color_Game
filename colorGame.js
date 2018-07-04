var difficulty=6;
var colors=generateColors(difficulty);
var squares=document.querySelectorAll(".square");
var pickedColor=pickcolor();
var text=document.getElementById("color");
var messageDisplay=document.querySelector("#message");
var h1=document.getElementsByTagName("h1")[0];
var reset=document.getElementById("reset");
var easy=document.getElementById("easyBtn");
var hard=document.getElementById("hardBtn");

text.textContent=pickedColor;

easy.addEventListener("click",function()
	{
		if(easy.classList[0]!="selected")
		{
			difficulty=3;
			//changing color of buttons
			easy.classList.add("selected");
			hard.classList.remove("selected");
			//applying rest of the logic
			colors=generateColors(difficulty);
			pickedColor=pickcolor();
			text.textContent=pickedColor;
			for(var i=0;i<3;i++)
			{
				squares[i].style.backgroundColor=colors[i];
			}
			for(var i=3;i<6;i++)
			{
				squares[i].style.display="none";
			}
			messageDisplay.textContent="";
			h1.style.backgroundColor="steelblue";
		}

	});

hard.addEventListener("click",function()
	{
		if(hard.classList[0]!="selected")
		{
			difficulty=6;
			//changing color of buttons
			easy.classList.remove("selected");
			hard.classList.add("selected");
			//applying rest of the logic
			colors=generateColors(difficulty);
			pickedColor=pickcolor();
			text.textContent=pickedColor;
			for(var i=3;i<6;i++)
			{
				squares[i].style.display="block";
			}
			for(var i=0;i<squares.length;i++)
			{
				squares[i].style.backgroundColor=colors[i];
			}
			messageDisplay.textContent="";
			h1.style.backgroundColor="steelblue";
		}

	});

reset.addEventListener("click",function(){
	reset.textContent="New Colors";
	colors=generateColors(difficulty);
	pickedColor=pickcolor();
	text.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";
	messageDisplay.textContent="";
});

for(var i=0; i<squares.length; i++)
{
	squares[i].style.backgroundColor=colors[i];


	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedColor)
		{
			messageDisplay.textContent="Correct!!!";
			for(var j=0;j<squares.length;j++)
			{
				squares[j].style.backgroundColor=pickedColor;
			}
			h1.style.backgroundColor=pickedColor;
			reset.textContent="Play Again";
		}
		else
		{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again";
		}
	});
}

function pickcolor()
{
	var n=Math.floor(Math.random()*colors.length);
	return colors[n];
}

function generateColors(n)
{
	var arr=[];
	var r,g,b;
	for(var i=0;i<n;i++)
	{
		r=Math.floor(Math.random()*256);
		g=Math.floor(Math.random()*256);
		b=Math.floor(Math.random()*256);
		arr[i]="rgb("+r+", "+g+", "+b+")";
	}
	return arr;
}