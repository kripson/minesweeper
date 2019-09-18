var timer;
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
		alert("You stepped on a mine... Game Over");
		clearInterval(timer);
		

	}
	else
	{
		revealcells($(element).index());
	}
	
};


function revealcells(focalpoint)
{
	var originalFocalPoint = focalpoint;
	var revealnumber = Math.floor(Math.random() * 10) + 1;
	var cells = Array.from(document.getElementsByClassName("cell"));
	var directions = ["northwest","north","northeast","east","southeast","south","southwest","west"];
	var direction = directions[Math.floor(Math.random() * 8)];
	var firstcloumn = [0,10,20,30,40,50,60,70,80,90];
	var lastcolumn = [9,19,29,39,49,59,69,79,89,99];

	for(var x = 1; x < revealnumber; x++)
	{
		try
		{
				if($(cells[focalpoint]).attr("class") !== "cell mine")
			{
				if(direction === "northwest" && !firstcloumn.includes(focalpoint))
				{
					var minenumber = $(cells[focalpoint]).val();
					$(cells[focalpoint]).css("background-color","white");
					$(cells[focalpoint]).html(`<p>${minenumber}</p>`);
					focalpoint -= 11;
				}
				else if (direction === "north")
				{
					var minenumber = $(cells[focalpoint]).val();
					$(cells[focalpoint]).css("background-color","white");
					$(cells[focalpoint]).html(`<p>${minenumber}</p>`);
					focalpoint -= 10;
				}
				else if (direction === "northeast" && !lastcolumn.includes(focalpoint))
				{
					var minenumber = $(cells[focalpoint]).val();
					$(cells[focalpoint]).css("background-color","white");
					$(cells[focalpoint]).html(`<p>${minenumber}</p>`);
					focalpoint -= 9;
				}
				else if (direction === "east" && !lastcolumn.includes(focalpoint))
				{
					var minenumber = $(cells[focalpoint]).val();
					$(cells[focalpoint]).css("background-color","white");
					$(cells[focalpoint]).html(`<p>${minenumber}</p>`);
					focalpoint += 1;
				}
				else if (direction === "southeast" && !lastcolumn.includes(focalpoint))
				{
					var minenumber = $(cells[focalpoint]).val();
					$(cells[focalpoint]).css("background-color","white");
					$(cells[focalpoint]).html(`<p>${minenumber}</p>`);
					focalpoint += 11;
				}
				else if (direction === "south")
				{
					var minenumber = $(cells[focalpoint]).val();
					$(cells[focalpoint]).css("background-color","white");
					$(cells[focalpoint]).html(`<p>${minenumber}</p>`);
					focalpoint += 10;
				}
				else if (direction === "southwest" && !firstcloumn.includes(focalpoint))
				{
					var minenumber = $(cells[focalpoint]).val();
					$(cells[focalpoint]).css("background-color","white");
					$(cells[focalpoint]).html(`<p>${minenumber}</p>`);
					focalpoint += 9;
				}
				else if (direction === "west" && !firstcloumn.includes(focalpoint))
				{
					var minenumber = $(cells[focalpoint]).val();
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
function setupmines()
{
	var cells = document.getElementsByClassName('cell');
	var mineindex = [];
	var firstcloumn = [0,10,20,30,40,50,60,70,80,90];
	var lastcolumn = [9,19,29,39,49,59,69,79,89,99];
	while(true)
	{
		var mine = Math.floor(Math.random() * 100);
		if(!mineindex.includes(mine))
		{
			mineindex.push(mine);
		}
		if(mineindex.length >= 20)
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
			var minenumber = Number(cells[position - 11].getAttribute("value"));
			cells[position - 11].setAttribute("value",minenumber + 1);
			}
		}
		catch
		{

		}
		try
		{
			var minenumber = Number(cells[position - 10].getAttribute("value"));
			cells[position - 10].setAttribute("value",minenumber + 1);
		}
		catch
		{
			
		}
		try
		{
			if(!lastcolumn.includes(position) )
			{
				var minenumber = Number(cells[position - 9].getAttribute("value"));
				cells[position - 9].setAttribute("value",minenumber + 1);
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
			var minenumber = Number(cells[position + 9].getAttribute("value"));
			cells[position + 9].setAttribute("value",minenumber + 1);
			}
		}
		catch
		{
			
		}
		try
		{
			var minenumber = Number(cells[position + 10].getAttribute("value"));
			cells[position + 10].setAttribute("value",minenumber + 1);
		}
		catch
		{
			
		}
		try
		{
			if(!lastcolumn.includes(position) )
			{
			var minenumber = Number(cells[position + 11].getAttribute("value"));
			cells[position + 11].setAttribute("value",minenumber + 1);
			}
		}
		catch
		{
			
		}
	}
		)

	 

}

$(document).ready(function()
{
	$('#board').css("animation-name","showboard");
	timer = setTimeout(() => {
		$('#board *').css("display","block")
	},1500);

	

function starttimer()
{
	var seconds = 1;
	timer = setInterval(function(){
		$('#time').text(`Score: ${seconds}`);
		seconds++;
	},1000);
}


function drawgrid()
{
	var gridsetup = "";
	for(var rows = 1; rows <= 100; rows++)
	{
		gridsetup += `<li class = 'cell' value = 0 onclick = 'changebackground(this)'></li>`;
	}
	$("#grid ul").html(gridsetup);

	$("#grid").css({"position":"relative","width":"260px"});
	
}






$("#start button").click(function()
{
	if(!$("#time").text())
	{
		starttimer();
		drawgrid();
		setupmines();
	}
	else
	{

	}

}

);






});






