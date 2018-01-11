// Snakes Game
// Game Loop -- Init, Draw, Update

function init(){
    // console.log("Init");
    canvas = document.getElementById('myCanvas')
    pen = canvas.getContext('2d');
    W = canvas.width;
    H = canvas.height;
    
    snake = {
        init_l:5,
        color:"green",
        cells:[],
        direction:"right",
        
        createSnake:function(){
            for(var i = this.init_l-1;i>=0; i--){
                this.cells.push({x:i, y:0});
            }
        },
        drawSnake:function(){
            for(var i =0;i<this.cells.length; i++){
                pen.fillStyle = this.color;
                pen.strokeStyle = "black";
                // pen.lineWidth = 5; 
                pen.strokeRect(this.cells[i].x * 10,this.cells[i].y * 10, 10, 10);
                pen.fillRect(this.cells[i].x * 10,this.cells[i].y * 10, 10, 10);
                console.log("in draw");
            }
        },
        updateSnake:function(){
             var headx = this.cells[0].x;
             var heady = this.cells[0].y;
             
             // snake moves right
             // insertion at head
            //  nextheadx = headx + 1;
             this.cells.pop();
            //  this.cells.unshift({x:nextheadx, y: heady});
            if(this.direction == "right"){
                 nextx = headx + 1;
                 nexty = heady;
            }
            else if(this.direction =="left"){
                nextx = headx - 1;
                nexty = heady;
            }
            else if(this.direction =="down"){
                nextx = headx;
                nexty = heady + 1;
            }
            else if(this.direction =="up"){
                nextx = headx;
                nexty = heady - 1;
            }
            
            // add new cell to front of cels
            this.cells.unshift({x:nextx, y:nexty});
            
             
        }
    };
    snake.createSnake();
    
    // add eventlisteners to game
    // keyboard events
    
    function keyPressed(e){
        console.log("you pressed: ");
        console.log(e);
        
        if(e.key == "ArrowRight"){
            snake.direction = "right";
        }
        if(e.key == "ArrowUp"){
            snake.direction = "up";
        }
        if(e.key == "ArrowLeft"){
            snake.direction = "left";
        }
        if(e.key == "ArrowDown"){
            snake.direction = "down";
        }
    }
    
    document.addEventListener('keydown', keyPressed);
}

function draw(){
    // console.log("Draw");
    pen.clearRect(0, 0, W, H);
    snake.drawSnake();
}
    
function update(){
    // console.log("Update");
    snake.updateSnake();
}

function gameloop(){
    draw();
    update();
}

init();
// call gameloop after t time repeatedly
// gameloop();
setInterval(gameloop, 100);