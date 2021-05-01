canvas= document.getElementById("myCanvas");
ctx = canvas.getContext("2d") ;

rover_width = 100;
rover_height = 90;

rover_x = 10;
rover_y = 10;
background_image = "";
car_image= "https://i.postimg.cc/YqdnnNX1/car1.png";
car1_image = "https://www.clipartmax.com/png/middle/26-268510_28-collection-of-car-clipart-top-view-transparent-race-car-cartoon-top.png";

function add() {
    bg_imgtag = new Image();
    bg_imgtag.onload= uploadBackground;
    bg_imgtag.src = background_image;

    car_imgtag = new Image();
    car_imgtag.onload = uploadcar;
    car_imgtag.src = rover_image;

    car1_imgtag = new Image();
    car1_imgtag.onload = uploadcar1;
    car1_imgtag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(bg_imgtag, 0,0, canvas.width,canvas.height);
}

function uploadcar() {
    ctx.drawImage(car_imgtag, car_x, car_y, car_width, car_height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgtag, car1_x, car1_y, car1_width, car1_height);
}

window.addEventListener("keydown", my_keydown); 

function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed == '38') {
        up();
        console.log("up");
    }
    if(keypressed == '40') {
        down();
        console.log("down");
    }
    if(keypressed == '37') {
        left();
        console.log("left");
    }
    if(keypressed == '37') {
        left();
        console.log("left");
    }

    if(keypressed == '87') {
        up();
        console.log(" key w");
    }

    if(keypressed == '83') {
        down();
        console.log(" key s");
    }

    if(keypressed == '68') {
        left();
        console.log(" key d");
    }

    if(keypressed == '65') {
        left();
        console.log(" key a");
    }
}

function up(){
    if(rover_y >= 0){
        rover_y = rover_y - 10 ;
        console.log(" When up arrow is pressed" + "x= " + rover_x + "y= " + rover_y);
    uploadBackground();
    uploadcar();
    };
}

function down(){
    if(rover_y <= 500){
        rover_y = rover_y + 10 ;
        console.log(" When down arrow is pressed" + "x= " + rover_x + "y= " + rover_y);
        uploadBackground();
        uploadcar();
    };
}

function left(){
    if(rover_x >= 0){
        rover_x = rover_x - 10 ;
        console.log(" When left arrow is pressed" + "x= " + rover_x + "y= " + rover_y);
        uploadBackground();
        uploadcar();
    };
}

function right(){
    if(rover_x <= 700){
        rover_x = rover_x + 10 ;
        console.log(" When right arrow is pressed" + "x= " + rover_x + "y= " + rover_y);
        uploadBackground();
        uploadcar();
    };
}

