bomb = document.getElementById("myAudio");
 
document.addEventListener('contextmenu', event => event.preventDefault());

// Function to run when a user clicks a cell
function changebackground(element)
{
	var eclass = element.getAttribute("class");
	if(eclass == "cell mine")
	{
		var cells = document.getElementsByClassName("cell mine");
		for(var cell of cells)
		{
			cell.style.backgroundSize = "contain";
			cell.style.backgroundImage = "url('https://cdn.imgbin.com/12/10/9/imgbin-minesweeper-pro-classic-mine-sweeper-minesweeper-plus-likeminesweeper-bomb-zMHypRPh43qNLA8sm63wt419s.jpg')";
		}
		bomb.play(); 
		//alert("You stepped on a mine... Game Over");
		$("#message").text("You stepped on a mine... Game Over");
		clearInterval(this.timer);

		

	}
	else
	{
		revealcells($(element).index());
	}
	
};



// Function to reveal the clicked cell and neighbouring cells
function revealcells(focalpoint)
{
	var originalFocalPoint = focalpoint;
	var revealnumber = Math.floor(Math.random() * 10) + 1;
	var cells = Array.from(document.getElementsByClassName("cell"));
	var directions = ["northwest","north","northeast","east","southeast","south","southwest","west"];
	var direction = directions[Math.floor(Math.random() * 8)];
	if(this.level.value === "Easy")
	{
		var numberofcells = 10;
	}
	else
	{
		var numberofcells = 15;
	}
	if(this.level.value === "Easy")
	{
		var firstcloumn = [0,10,20,30,40,50,60,70,80,90];
		var lastcolumn = [9,19,29,39,49,59,69,79,89,99];

	}
	else
	{
			var firstcloumn = [0,15,30,45,60,75,90,105,120,135,150,165,180,195,210];
			var lastcolumn = [14,29,44,59,74,89,104,119,134,149,164,179,194,209,224];
	
	}

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


	if(this.level.value === "Easy")
	{
		var numberofcells = 10;
		var totalcells = 100;
	}
	else
	{
		var numberofcells = 15;
		var totalcells = 225;
	}
	if(this.level.value === "Easy")
	{
		var firstcloumn = [0,10,20,30,40,50,60,70,80,90];
		var lastcolumn = [9,19,29,39,49,59,69,79,89,99];

	}
	else
	{
			var firstcloumn = [0,15,30,45,60,75,90,105,120,135,150,165,180,195,210];
			var lastcolumn = [14,29,44,59,74,89,104,119,134,149,164,179,194,209,224];
	
	}
	


	while(true)
	{
		var mine = Math.floor(Math.random() * totalcells);
		if(!mineindex.includes(mine))
		{
			mineindex.push(mine);
		}

		if(mineindex.length >= 20 && this.level.value === "Easy")
		{
			break;
		}
		if(mineindex.length >= 30 && (this.level.value === "Medium" || this.level.value === "Hard"))
		{
			break;
		}		
	}

	mineindex.forEach((position)=>
	{
		cells[position].setAttribute("class","cell mine");
		try
		{
			if(!firstcloumn.includes(position) )
			{
			var minenumber = Number(cells[position - numberofcells - 1].getAttribute("value"));
			cells[position - numberofcells - 1].setAttribute("value",minenumber + 1);
			}
		}
		catch
		{

		}
		try
		{
			var minenumber = Number(cells[position - numberofcells].getAttribute("value"));
			cells[position - numberofcells].setAttribute("value",minenumber + 1);
		}
		catch
		{
			
		}
		try
		{
			if(!lastcolumn.includes(position) )
			{
				var minenumber = Number(cells[position - numberofcells + 1].getAttribute("value"));
				cells[position - numberofcells + 1].setAttribute("value",minenumber + 1);
			}
			
		}
		catch
		{
			
		}
		try
		{
			if(!firstcloumn.includes(position) )
			{
			var minenumber = Number(cells[position - 1].getAttribute("value"));
			cells[position - 1].setAttribute("value",minenumber + 1);
			}
		}
		catch
		{
			
		}
		try
		{
			if(!lastcolumn.includes(position) )
			{
			var minenumber = Number(cells[position + 1].getAttribute("value"));
			cells[position + 1].setAttribute("value",minenumber + 1);
			}
		}
		catch
		{
			
		}
		try
		{
			if(!firstcloumn.includes(position) )
			{
			var minenumber = Number(cells[position + numberofcells - 1].getAttribute("value"));
			cells[position + numberofcells - 1].setAttribute("value",minenumber + 1);
			}
		}
		catch
		{
			
		}
		try
		{
			var minenumber = Number(cells[position + numberofcells].getAttribute("value"));
			cells[position + numberofcells].setAttribute("value",minenumber + 1);
		}
		catch
		{
			
		}
		try
		{
			if(!lastcolumn.includes(position) )
			{
			var minenumber = Number(cells[position + numberofcells + 1].getAttribute("value"));
			cells[position + numberofcells + 1].setAttribute("value",minenumber + 1);
			}
		}
		catch
		{
			
		}
	}
		)

	 

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


function drawgrid()
{
	var gridsetup = "";
	if(this.level.value === "Easy")
	{
		var numberofcells = 100;
	}
	else
	{
		var numberofcells = 225;
	}
	for(var cells = 1; cells <= numberofcells; cells++)
	{
		gridsetup += `<li class = 'cell' value = 0 oncontextmenu = "markmine()" onclick = 'changebackground(this)'></li>`;
	}
	$("#grid ul").html(gridsetup);
	if(this.level.value === "Easy")
	{
		$("#grid").css({"position":"relative","width":"260px"});
	}
	else
	{
		$("#grid").css({"position":"relative","width":"390px"});
	}


	

	
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

class Minesweeper {
  #level;
  #highscore;
  #timer;
  #grid = document.getElementById("#grid");
  constructor() {
   
  }

  changebackground = function(element){ changebackground(element)};
  revealcells = function(focalpoint){ revealcells(focalpoint)};
  setupmines = function(){ setupmines()};
  starttimer = function(){ starttimer()};
  restarttimer = function(){ restarttimer()};
  drawgrid = function(){ drawgrid() };
  setlevel = setlevel;



}








$(document).ready(function()
{
	//When browser window opens new game instance is created
	var game = new Minesweeper();
	$('#board').css("animation-name","showboard");
	setTimeout(() => {
		$('#board>*').css("display","block")
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
		$("#message").text("");
		game.restarttimer();
		game.drawgrid();
		game.setupmines();
	}

}

);






});






