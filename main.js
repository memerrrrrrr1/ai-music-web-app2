coconutmall = ""
wiitheme = ""


function preload(){
    coconutmall = loadSound("coconut.mp3")
    wiitheme = loadSound("wii.mp3")   
}

function setup(){
    my_canvas=createCanvas(700,400)
    my_canvas.center()
    my_vid = createCapture(VIDEO)
    my_vid.hide()
}

function draw(){
    image(my_vid, 0, 0, 700,350)
}
