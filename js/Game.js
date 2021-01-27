class Game {
    constructor() {

    }
    getState(){
        var gsref = database.ref('gameState')
        gsref.on("value",function(data){
            gameState = data.val();
        })
    }
    update(state) {
        database.ref('/').update({
            gameState:state
        })
    }
    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
        car1 = createSprite(150,600);
        car2 = createSprite(300,600);
        car3 = createSprite(450,600);
        car4 = createSprite(600,600);
        cars = [car1, car2, car3, car4];
    }
    play(){
        form.hide();
        textSize(25);
        text("Game Start", 200,100);
        Player.getplayerinfo();


        if(allPlayers !== undefined){
            var ypos = 200;

            //index of the array
            var index = 0;

            //x and y position of the cars
            var x = 0;
            var y;

            for(var plr in allPlayers){
                //add 1 to the index for every loop
                index = index + 1;

                //position the cars a little away from each other in x direction
                x = x + 200;

                //use data from the database to display the cars in y direction
                y = displayHeight - allPlayers[plr].distance;
                cars[index - 1].x = x;
                cars[index - 1].y = y;

                if (index === player.index) {
                    cars[index-1].shapeColor = "red"
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index - 1].y

                }

                ypos += 20;
                //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 200,ypos);
            }
        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 50;
            player.update();
        }
        drawSprites();
    }

}