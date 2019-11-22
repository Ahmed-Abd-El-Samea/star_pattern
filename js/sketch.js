// var poly;
var polys = [];
var angle = 60;
var delta = 20;;
var tiles = 1;
var sidesCount = 7;

var deltaSlider;
var angleSlider;
var tilesSlider;
var sidesSlider;

function setup(){
    createCanvas(400, 400);
    background(51);
    deltaSlider = createSlider(0,25,0);
    angleSlider = createSlider(0,90,45);
    tilesSlider = createSlider(1,20,1);
    sidesSlider = createSlider(3,10,4);
    angleMode(DEGREES);

    var inc = width/tiles;
    for(var x = 0; x < width; x+= inc){
        for(var y = 0; y < height; y+= inc){
            var poly = new Polygon();
            var xOffset = (width / 2) / tiles;
            var yOffset = (width / 2) / tiles;
            // var sidesCount = 10;
            for(var i = 0; i < sidesCount; i++){

                poly.addVertex(( Math.sin( i / sidesCount * 2 * Math.PI ) * width/2 ) + xOffset, ( Math.cos( i / sidesCount * 2 * Math.PI ) * width/2 )+ yOffset);
                ellipse(( Math.sin( i / sidesCount * 2 * Math.PI ) * width/2 ) + xOffset, ( Math.cos( i / sidesCount * 2 * Math.PI ) * width/2 )+ yOffset, 20);
            }
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
    sidesCount = sidesSlider.value();

    polys = [];
    var inc = width/tiles;
    for(var x = 0; x < width; x+= inc){
        for(var y = 0; y < height; y+= inc){
            var poly = new Polygon(sidesCount);
            var xOffset = (width / 2) / tiles;
            var yOffset = (width / 2) / tiles;
            // var sidesCount = 10;
            for(var i = 0; i < sidesCount; i++){

                poly.addVertex(( Math.sin( i / sidesCount * 2 * Math.PI ) * ((width/2) / tiles) ) + xOffset+x, ( Math.cos( i / sidesCount * 2 * Math.PI ) * ((width/2) / tiles) )+ yOffset+y);
                // ellipse(( Math.sin( i / sidesCount * 2 * Math.PI ) * ((width/2) / tiles) ) + xOffset, ( Math.cos( i / sidesCount * 2 * Math.PI ) * ((width/2) / tiles) )+ yOffset, 20/tiles);
            }
            poly.close();
            polys.push(poly);
        }
    }

    for(var i = 0; i < polys.length; i++){
        polys[i].hankin();
        polys[i].show();
    }
}





