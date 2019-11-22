// var poly;
var polys = [];
var angle = 60;
var delta = 20;;
var tiles = 1;

var deltaSlider;
var angleSlider;

function setup(){
    createCanvas(400, 400);
    background(51);
    deltaSlider = createSlider(0,25,0);
    angleSlider = createSlider(0,90,45);
    tilesSlider = createSlider(1,20,1);
    angleMode(DEGREES);

    var inc = width/tiles;
    for(var x = 0; x < width; x+= inc){
        for(var y = 0; y < height; y+= inc){
            var poly = new Polygon();
            poly.addVertex(x,y);
            poly.addVertex(x+inc,y);
            poly.addVertex(x+inc,y+inc);
            poly.addVertex(x,y+inc);
            poly.close();
            polys.push(poly);
        }
    }

}

function draw(){
    background(51);
    angle = angleSlider.value();
    delta = deltaSlider.value();
    tiles = tilesSlider.value();

    polys = [];
    var inc = width/tiles;
    for(var x = 0; x < width; x+= inc){
        for(var y = 0; y < height; y+= inc){
            var poly = new Polygon();
            poly.addVertex(x,y);
            poly.addVertex(x+inc,y);
            poly.addVertex(x+inc,y+inc);
            poly.addVertex(x,y+inc);
            poly.close();
            polys.push(poly);
        }
    }

    for(var i = 0; i < polys.length; i++){
        polys[i].hankin();
        polys[i].show();
    }
}





