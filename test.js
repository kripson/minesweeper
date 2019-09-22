
describe('Testing the functionality, this is the checklist', ()=>{
  it('should start the timer', async ()=>{
    let game = new Minesweeper();
    game.starttimer();
    let promise = new Promise((resolve,reject)=>
    	{
    		setTimeout(()=> resolve($('#time').text()),3000);
    	});
    let result = await promise;
    expect(result).toBe("Score: 3");
    clearInterval(game.timer);
  })
});



describe('Testing the functionality, this is the checklist', ()=>{
  it('should setup the mines', ()=>{
    let game = new Minesweeper();
    game.drawgrid();
    game.setupmines();

    let minecells = document.getElementsByClassName('cell mine');
    expect(minecells.length).toBe(20);
  })
});