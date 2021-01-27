class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    }

    getCount(){
        var pcref = database.ref('playerCount')
        pcref.on("value",function(data){
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
        playerCount:count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;//player1 or player2 or player3 or player4
        database.ref(playerIndex).set({
            name : this.name,
            distance : this.distance
        })
    }
    static getplayerinfo() {
        var playerinfo = database.ref('players');
        playerinfo.on("value",(data) =>{
            allPlayers = data.val();
        })

    }
}