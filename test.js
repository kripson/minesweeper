

describe('Testing the functionality, this is the checklist', ()=>{
  it('should select medium as the level', async ()=>{
    let game = new Minesweeper();
    $("select").val("Medium");
    $("#board").css({"min-height":"600px"});
   
     setTimeout(function(){

        $("#start button").click();


    },1);

    let promise = new Promise((resolve,reject)=>
      {
        setTimeout(()=> resolve($('#time').text()),3000);
      });
    let result = await promise;
    expect(result).toBe("Score: 2");
  })
});


describe('Testing the functionality, this is the checklist', ()=>{
  it('should click all the cells serially starting from first', async()=>{
    var cells = document.getElementsByClassName('cell');
    for(var cell of cells)
    {
      $(cell).click();
      if($("#message").text())
      {
        break;
      }
    }

    let promise = new Promise((resolve,reject)=>
      {
        setTimeout(()=> resolve(),3000);
      });
    let result = await promise;
     
    expect($("#message").text()).toBe("You stepped on a mine... Game Over");
    
  })
});

describe('Testing the functionality, this is the checklist', ()=>{
  it('should restart the game after being over',()=>{
    $("#start button").click();

     
    expect($("#message").text()).toBe("");
    
  })
});

// describe('Testing the functionality, this is the checklist', ()=>{
//   it('should start the timer', async ()=>{
//     let game = new Minesweeper();
//     $("#start button").click();
//     game.starttimer();
//     let promise = new Promise((resolve,reject)=>
//     	{
//     		setTimeout(()=> resolve($('#time').text()),3000);
//     	});
//     let result = await promise;
//     expect(result).toBe("Score: 3");
//     clearInterval(game.timer);
//   })
// });



// describe('Testing the functionality, this is the checklist', ()=>{
//   it('should setup the mines', ()=>{
//     let game = new Minesweeper();
//     game.drawgrid();
//     game.setupmines();

//     let minecells = document.getElementsByClassName('cell mine');
//     expect(minecells.length).toBe(20);
//   })
// });