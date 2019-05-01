class Board{

    constructor()
    {
        this.players = [];
    }

    set Players(value){
        return this.players = value;
    }

    get Players(){
        return this.players;
    }

    serpentOladder(Player,ons,off){
        for (let index = 0; index < ons.length; index++) {
            if (Player.position == ons[index]) 
            {
                return off[index]
            }
        }
    }

    win(Player)
    {
        if(Player.position == 100)
        {
            alert('Felicidades Has Ganado un IPhoneX');
        }
        else if(Player.position < 100)
        {
            return -5
        }
    }
}