class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement('h3');
        this.title = createElement('h1');
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        //var title = createElement('h1');
        this.title.html("car Racing Game");
        this.title.position (displayWidth/2 - 50,70);
        
        this.greeting.position(displayWidth/2 - 80,displayHeight/2 - 30);

        this.input.position(displayWidth/2 - 40,displayHeight/2 -40);
        this.button.position(displayWidth/2 ,displayHeight/2 );

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();

            playerCount += 1; // x = x+1 =>  ... x += 1
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello " + player.name);

        })


    }
}