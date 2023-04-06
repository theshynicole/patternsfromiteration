var xss=[];
var yss=[];
var curly=[];
var spinny=[];
var colour=[];
var shape=[];


function setup(){
    createCanvas(720,480);
    for(var i=0;i<600;i++){
        xss.push(random(width));
        yss.push(random(height));
        curly[i]=random(-10,10);
        spinny[i]=random(10,20);
        // colour[i]=random(255),random(255),random(255);
        colour[i]=colourPlease();
        // console.log(colour[i]);
        shape[i]=shapePlease();
        console.log(shape[i]);
    }
    noStroke();
}

function colourPlease(){
    var ourColours=["white","pink","red","purple","Plum","Khaki"];
    var randomNumber=random(ourColours.length-1);
    randomNumber=randomNumber.toFixed(0);
    return ourColours[randomNumber];
}

function shapePlease(){
    var shapes=["circle","triangle","circle2"];
    var randomNumber=random(shapes.length-1);
    randomNumber=randomNumber.toFixed(0);
    console.log(shapes[randomNumber]);
    return shapes[randomNumber];
}

function draw(){
    background('Teal');
    for(var i=0;i<xss.length;i++){
        yss[i]+=random(2);
        if(yss[i]>height){
            yss[i]=-10;
        }
        push();
        translate(xss[i],yss[i]);
        rotate(frameCount/spinny[i]);
        fill(colour[i]);
        // if(shape[i]==="rectangle"){
        //     rect(curly[i],curly[i],10,10);
        // }
        if(shape[i]==="circle"){
            ellipse(curly[i],curly[i],20,10);
        }
        if(shape[i]==="triangle"){
            triangle(3,-7,-5,6,9,8);
        }
        // rect(curly[i],curly[i],10,10);
        // ellipse(curly[i],curly[i],10,10);
        // triangle(0,-5,-5,5,5,5);
        if(shape[i]==="circle2"){
            ellipse(curly[i],curly[i],20,50);
        }
        pop();
    }
}