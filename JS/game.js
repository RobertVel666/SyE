var b1 = new Board();
var dd = new Dice();

//Players
var p1 = new Player();
var p2 = new Player(); 
var p3 = new Player();
var p4 = new Player();

//Board
b1.Players= [p1,p2,p3,p4];

//Start game
document.getElementById("stGame").addEventListener('click',() =>{
    
    for(let i = 0; i < b1.players.length; i++)
    {
        b1.players[i].Position = 0
    }
    alert('Se ha empezado/reiniciado el juego');
});

//serpents
var serpentAct = [25,34,47,65,87,91,99]
var serpentOff = [-5,-1,-19,-52,-57,-61,-69]
//ladders
var lads = [3,6,20,36,63,68]
var tops = [51,27,60,55,95,98]

let inc = 0;
let oeifeiowjf

//PLay turn
document.getElementById("ptGame").addEventListener('click', () => {
    inc+=1
    
    if (inc==1) 
    {
        p1.position += dd.throwDice();
        // p1.position += b1.serpentOladder(p1,serpentAct,serpentOff);
        // p1.position += b1.serpentOladder(p1,lads,tops);
        console.log(p1.position);
        // p1.position += b1.win(p1);
    }
    else if(inc==2)
    {
        p2.position += dd.throwDice();
        p2.position += b1.serpentOladder(p1,serpentAct,serpentOff);
        p2.position += b1.serpentOladder(p1,lads,tops);
        console.log(p2.position);
        p2.position += b1.win(p2);
    }
    else if(inc==3)
    {
        p3.position += dd.throwDice();
        p3.position += b1.serpentOladder(p1,serpentAct,serpentOff);
        p3.position += b1.serpentOladder(p1,lads,tops);
        console.log(p3.position);
        p3.position += b1.win(p3);
    }
    else if(inc==4)
    {
        p1.position += dd.throwDice();
        p1.position += b1.serpentOladder(p1,serpentAct,serpentOff);
        p1.position += b1.serpentOladder(p1,lads,tops);
        console.log(p4.position);
        p1.position += b1.win(p4);
        inc = 0;
    }
})


// for (let index = 0; index < b1.players.length; index++) {
//     b1.players[index].position += dd.throwDice();
//     b1.players[index].position += b1.serpentOladder(p1,serpentAct,serpentOff);
//     b1.players[index].position += b1.serpentOladder(p1,lads,tops);
//     console.log((b1.players[indx].position);
//     b1.players[index].position += win(b1.plaers[index]));
// }