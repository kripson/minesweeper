bomb = document.getElementById("myAudio");
 
document.addEventListener('contextmenu', event => event.preventDefault());

// Function to run when a user clicks a cell
function changebackground(element)
{
	var red = element.getAttribute("data-red");
	var green = element.getAttribute("data-green");
	var blue = element.getAttribute("data-blue");

	element.style.backgroundColor = `rgb(${red},${green},${blue}`;
	element.setAttribute("data-revealed" ,"true");
	checkgame($(element).index());
	
};


function checkgame(focalpoint)
{
	var cells = document.getElementsByClassName("cell");
	
	try
	{
		
		if(cells[focalpoint - 8].getAttribute("data-revealed")=== "true")
		{
			if(cells[focalpoint].getAttribute("data-red") === cells[focalpoint - 8].getAttribute("data-red")
				&& cells[focalpoint].getAttribute("data-green") === cells[focalpoint - 8].getAttribute("data-green")
				&& cells[focalpoint].getAttribute("data-blue") === cells[focalpoint - 8].getAttribute("data-blue"))
						{
							alert("Game Over, You broke the colouring rule");
							clearInterval(this.timer);
						}

		}
		

	}
	catch
	{

	}
	try
	{
		if(cells[focalpoint - 7].getAttribute("data-revealed") === "true")
		{
			if(cells[focalpoint].getAttribute("data-red") === cells[focalpoint - 7].getAttribute("data-red")
				&& cells[focalpoint].getAttribute("data-green") === cells[focalpoint - 7].getAttribute("data-green")
				&& cells[focalpoint].getAttribute("data-blue") === cells[focalpoint - 7].getAttribute("data-blue"))
						{
							alert("Game Over, You broke the colouring rule");
							clearInterval(this.timer);
						}

		}
		

	}
	catch
	{

	}
	try
	{
		if(cells[focalpoint - 6].getAttribute("data-revealed") === "true")
		{
			if(cells[focalpoint].getAttribute("data-red") === cells[focalpoint - 6].getAttribute("data-red")
				&& cells[focalpoint].getAttribute("data-green") === cells[focalpoint - 6].getAttribute("data-green")
				&& cells[focalpoint].getAttribute("data-blue") === cells[focalpoint - 6].getAttribute("data-blue"))
						{
							alert("Game Over, You broke the colouring rule");
							clearInterval(this.timer);
						}

		}
		

	}
	catch
	{

	}
	try
	{
		if(cells[focalpoint - 1].getAttribute("data-revealed") === "true")
		{
			if(cells[focalpoint].getAttribute("data-red") === cells[focalpoint - 1].getAttribute("data-red")
				&& cells[focalpoint].getAttribute("data-green") === cells[focalpoint - 1].getAttribute("data-green")
				&& cells[focalpoint].getAttribute("data-blue") === cells[focalpoint - 1].getAttribute("data-blue"))
						{
							alert("Game Over, You broke the colouring rule");
							clearInterval(this.timer);
						}

		}
		

	}
	catch
	{

	}
	try
	{
		if(cells[focalpoint + 1].getAttribute("data-revealed") === "true")
		{
			if(cells[focalpoint].getAttribute("data-red") === cells[focalpoint + 1].getAttribute("data-red")
				&& cells[focalpoint].getAttribute("data-green") === cells[focalpoint + 1].getAttribute("data-green")
				&& cells[focalpoint].getAttribute("data-blue") === cells[focalpoint + 1].getAttribute("data-blue"))
						{
							alert("Game Over, You broke the colouring rule");
							clearInterval(this.timer);
						}

		}
		

	}
	catch
	{

	}
	try
	{
		if(cells[focalpoint + 6].getAttribute("data-revealed") === "true")
		{
			if(cells[focalpoint].getAttribute("data-red") === cells[focalpoint - (-6)].getAttribute("data-red")
				&& cells[focalpoint].getAttribute("data-green") === cells[focalpoint - (-6)].getAttribute("data-green")
				&& cells[focalpoint].getAttribute("data-blue") === cells[focalpoint - (-6)].getAttribute("data-blue"))
						{
							alert("Game Over, You broke the colouring rule");
							clearInterval(this.timer);
						}

		}
		

	}
	catch
	{

	}
	try
	{
		if(cells[focalpoint - (-7)].getAttribute("data-revealed") === "true")
		{
			if(cells[focalpoint].getAttribute("data-red") === cells[focalpoint - (-7)].getAttribute("data-red")
				&& cells[focalpoint].getAttribute("data-green") === cells[focalpoint - (-7)].getAttribute("data-green")
				&& cells[focalpoint].getAttribute("data-blue") === cells[focalpoint - (-7)].getAttribute("data-blue"))
						{
							alert("Game Over, You broke the colouring rule");
							clearInterval(this.timer);
						}

		}
		

	}
	catch
	{

	}
	try
	{
		if(cells[focalpoint - (-8)].getAttribute("data-revealed") === "true")
		{
			if(cells[focalpoint].getAttribute("data-red") === cells[focalpoint - (-8)].getAttribute("data-red")
				&& cells[focalpoint].getAttribute("data-green") === cells[focalpoint - (-8)].getAttribute("data-green")
				&& cells[focalpoint].getAttribute("data-blue") === cells[focalpoint - (-8)].getAttribute("data-blue"))
						{
							alert("Game Over, You broke the colouring rule");
							clearInterval(this.timer);
						}

		}
		

	}
	catch
	{

	}

	
		


	


}




// Function to reveal the clicked cell and neighbouring cells
function revealcells(focalpoint)
{
	var originalFocalPoint = focalpoint;
	var revealnumber = Math.floor(Math.random() * 10) + 1;
	var cells = Array.from(document.getElementsByClassName("cell"));
	var directions = ["northwest","north","northeast","east","southeast","south","southwest","west"];
	var direction = directions[Math.floor(Math.random() * 8)];

	
		var numberofcells = 10;
	
	
		var firstcloumn = [0,10,20,30,40,50,60,70,80,90];
		var lastcolumn = [9,19,29,39,49,59,69,79,89,99];

	

	for(var x = 1; x < revealnumber; x++)
	{
		try
		{
				if($(cells[focalpoint]).attr("class") !== "cell mine" && $(cells[focalpoint]).css("background-color") !== "yellow")
			{
				if(direction === "northwest" && !firstcloumn.includes(focalpoint))
				{
					var minenumber = $(cells[focalpoint]).val();
					$(cells[focalpoint]).css("box-shadow","none");
					$(cells[focalpoint]).css("background-color","white");
					$(cells[focalpoint]).html(`<p>${minenumber}</p>`);
					focalpoint -= numberofcells -1;
				}
				else if (direction === "north")
				{
					var minenumber = $(cells[focalpoint]).val();
					$(cells[focalpoint]).css("box-shadow","none");
					$(cells[focalpoint]).css("background-color","white");
					$(cells[focalpoint]).html(`<p>${minenumber}</p>`);
					focalpoint -= numberofcells;
				}
				else if (direction === "northeast" && !lastcolumn.includes(focalpoint))
				{
					var minenumber = $(cells[focalpoint]).val();
					$(cells[focalpoint]).css("box-shadow","none");
					$(cells[focalpoint]).css("background-color","white");
					$(cells[focalpoint]).html(`<p>${minenumber}</p>`);
					focalpoint -= numberofcells + 1;
				}
				else if (direction === "east" && !lastcolumn.includes(focalpoint))
				{
					var minenumber = $(cells[focalpoint]).val();
					$(cells[focalpoint]).css("box-shadow","none");
					$(cells[focalpoint]).css("background-color","white");
					$(cells[focalpoint]).html(`<p>${minenumber}</p>`);
					focalpoint += 1;
				}
				else if (direction === "southeast" && !lastcolumn.includes(focalpoint))
				{
					var minenumber = $(cells[focalpoint]).val();
					$(cells[focalpoint]).css("box-shadow","none");
					$(cells[focalpoint]).css("background-color","white");
					$(cells[focalpoint]).html(`<p>${minenumber}</p>`);
					focalpoint += numberofcells + 1;
				}
				else if (direction === "south")
				{
					var minenumber = $(cells[focalpoint]).val();
					$(cells[focalpoint]).css("box-shadow","none");
					$(cells[focalpoint]).css("background-color","white");
					$(cells[focalpoint]).html(`<p>${minenumber}</p>`);
					focalpoint += numberofcells;
				}
				else if (direction === "southwest" && !firstcloumn.includes(focalpoint))
				{
					var minenumber = $(cells[focalpoint]).val();
					$(cells[focalpoint]).css("box-shadow","none");
					$(cells[focalpoint]).css("background-color","white");
					$(cells[focalpoint]).html(`<p>${minenumber}</p>`);
					focalpoint += numberofcells - 1;
				}
				else if (direction === "west" && !firstcloumn.includes(focalpoint))
				{
					var minenumber = $(cells[focalpoint]).val();
					$(cells[focalpoint]).css("box-shadow","none");
					$(cells[focalpoint]).css("background-color","white");
					$(cells[focalpoint]).html(`<p>${minenumber}</p>`);
					focalpoint -= 1;
				}
				else
				{
					direction = directions[Math.floor(Math.random() * 8)];
					focalpoint = originalFocalPoint;
				}

				
			}
			else
			{
				direction = directions[Math.floor(Math.random() * 8)];
				focalpoint = originalFocalPoint;
			}
		}
		catch
		{
			direction = directions[Math.floor(Math.random() * 8)];
			focalpoint = originalFocalPoint;
		}
		
	}
}


//function for setting up the mines
function setupmines()
{
	var cells = document.getElementsByClassName('cell');
	var mineindex = [];



		var numberofcells = 10;
		var totalcells = 49;
	
		var firstcloumn = [0,7,14,21,28,35,42,49,56,63];
		var lastcolumn = [9,19,29,39,49,59,69,79,89,99];

	
	
	


	while(true)
	{
		var mine = Math.floor(Math.random() * totalcells);
		if(!mineindex.includes(mine))
		{
			mineindex.push(mine);
		}

		if(mineindex.length >= 10 )
		{
			break;
		}		
	}

	mineindex.forEach((position)=>
	{
		if(firstcloumn.includes(position))
		{
			var set = [-7,-6,1,7,8];
			var x = Math.floor(Math.random() * 5);
			var selection = set[x];
			try
			{
				var red = cells[position + (selection)].getAttribute("data-red");
				var green = cells[position + (selection)].getAttribute("data-green");
				var blue = cells[position + (selection)].getAttribute("data-blue");
				cells[position].setAttribute("data-red",red);
				cells[position].setAttribute("data-green",green);
				cells[position].setAttribute("data-blue",blue);

			}
			catch
			{

			}
			

		}
		else if(lastcolumn.includes(position))
		{
			try
			{
				var set = [-8,-7,-1,6,7];
			var x = Math.floor(Math.random() * 5);
			var selection = set[x];
			var red = cells[position + (selection)].getAttribute("data-red");
			var green = cells[position + (selection)].getAttribute("data-green");
			var blue = cells[position + (selection)].getAttribute("data-blue");
			cells[position].setAttribute("data-red",red);
			cells[position].setAttribute("data-green",green);
			cells[position].setAttribute("data-blue",blue);

			}
			catch
			{

			}

		}
		else
		{
			try
			{
				var set = [-8,-7,-6,-1,1,6,7,8];
				var x = Math.floor(Math.random() * 8);
				var selection = set[x];
				var red = cells[position + (selection)].getAttribute("data-red");
				var green = cells[position + (selection)].getAttribute("data-green");
				var blue = cells[position + (selection)].getAttribute("data-blue");
				cells[position].setAttribute("data-red",red);
				cells[position].setAttribute("data-green",green);
				cells[position].setAttribute("data-blue",blue);

			}
			catch
			{

			}
			

		}

	});

}

//function to start timer
function starttimer()
{
	var seconds = 1;
	this.timer = setInterval(function(){
		$('#time').text(`Score: ${seconds}`);
		seconds++;
	},1000);
}

//function to restart timer
function restarttimer()
{
	clearInterval(this.timer);
	var seconds = 1;
	this.timer = setInterval(function(){
		$('#time').text(`Score: ${seconds}`);
		seconds++;
	},1000);
}

function markmine()
{
	var cell = event.target;
	cell.style.backgroundColor = "yellow";
}


function colorgrid()
{

	var cells = document.getElementsByTagName("li");
	for (var x of cells)
	{
		x.style.backgroundColor = "none";

		var red = $(x).data("red");
		var green = $(x).data("green");;
		var blue = $(x).data("blue");;
		color = `rgb(${red},${green},${blue})`;

		$(x).css({"background-color":color});
	}
}



function drawgrid()
{
	var gridsetup = "";
	var numberofcells = 49;
	var red = 225;
	var blue = 225;
	var green = 225;
	
	
	
	for(var cells = 1; cells <= numberofcells; cells++)
	{

		gridsetup += `<li class = 'cell' data-revealed = "false" data-red = ${red} data-green = ${green} data-blue = ${blue} onclick = 'changebackground(this)'></li>`;
		red = Math.floor(Math.random() * 224) + 1;
		green = Math.floor(Math.random() * 224) + 1;
		blue = Math.floor(Math.random() * 224) + 1;

		
	}
	$("#grid ul").html(gridsetup);
	$("#grid").css({"position":"relative","width":"260px"});
	


	

	
}

function setlevel()
{
	this.level = event.target;
	if(event.target.value === "Medium" || event.target.value === "Hard")
	{
		$("#board").css({"min-height":"600px"});
	}
	else
	{
		$("#board").css({"min-height":"500px"});
	}
}


// Minesweeper game Object

function Minesweeper() {
  this.timer;

  this.changebackground = function(element){ changebackground(element)};
  this.revealcells = function(focalpoint){ revealcells(focalpoint)};
  this.setupmines = function(){ setupmines()};
  this.starttimer = function(){ starttimer()};
  this.restarttimer = function(){ restarttimer()};
  this.drawgrid = function(){ drawgrid() };
  this.setlevel = setlevel;


}







$(document).ready(function()
{
	//When browser window opens new game instance is created
	var game = new Minesweeper();
	$('#board').css("animation-name","showboard");
	setTimeout(() => {
		$('#board *').css("display","block")
	},1500);

// When start button is pressed the following functions are invoked and a game session is started
$("#start button").click(function()
{
	if($("#start button").text() === "Start")
	{
		game.starttimer();
		game.drawgrid();
		game.setupmines();
		$("#start button").text("Restart");
	}
	else
	{
		game.restarttimer();
		game.drawgrid();
		game.setupmines();
	}

}

);






});






