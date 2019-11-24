// var poly;
var polys = [];
var angle = 60;
var delta = 20;;
var tiles = 1;
var sidesCount = 7;
var offset = 0;
var rotation = 90;
var showGrid = true;

var deltaSlider;
var angleSlider;
var tilesSlider;
var sidesSlider;
var offsetSlider;
var rotationSlider;
var GridCheckbox;

function setup(){
    createCanvas(400, 400);
    background(51);
    createElement('br');
    createSpan('Delta');
    deltaSlider = createSlider(0,width,0);
    createSpan('Inner Angle');
    angleSlider = createSlider(0,360,45);
    createSpan('Tiles Count');
    tilesSlider = createSlider(1,50,1,1);
    createSpan('Sides');
    sidesSlider = createSlider(4,20,4, 2);
    createSpan('inner repetition');
    offsetSlider = createSlider(0,5, 1);
    createSpan('Rotation');
    rotationSlider = createSlider(0,180, 90, 5);
    GridCheckbox = createCheckbox('Show Grid', true);
    angleMode(DEGREES);

    var inc = width/tiles;
    for(var x = 0; x < width; x+= inc){
        for(var y = 0; y < height; y+= inc){
            var poly = new Polygon();
            var xOffset = (width / 2) / tiles;
            var yOffset = (width / 2) / tiles;
            // var sidesCount = 10;
            for(var i = 0; i < sidesCount; i++){

                poly.addVertex(( Math.sin( i / sidesCount * 2 * Math.PI + (rotation*Math.PI/180) ) * width/2 ) + xOffset, ( Math.cos( i / sidesCount * 2 * Math.PI + (rotation*Math.PI/180) ) * width/2 )+ yOffset);
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
    offset = offsetSlider.value();
    rotation = rotationSlider.value();
    showGrid = GridCheckbox.checked();
    // console.log(GridCheckbox.checked());

    polys = [];
    var inc = (width/tiles/offset);
    for(var x = 0; x < width; x+= inc){
        for(var y = 0; y < height; y+= inc){
            var poly = new Polygon(sidesCount);
            var xOffset = (width / 2) / tiles/offset;
            var yOffset = (width / 2) / tiles/offset;
            // var sidesCount = 10;
            for(var i = 0; i < sidesCount; i++){

                poly.addVertex(( Math.sin( i / sidesCount * 2 * Math.PI + (rotation*Math.PI/180) ) * ((width/2) / tiles) ) + xOffset+x, ( Math.cos( i / sidesCount * 2 * Math.PI + (rotation*Math.PI/180) ) * ((width/2) / tiles) )+ yOffset+y);
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





