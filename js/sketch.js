// var poly;
var polys = [];
var angle = 60;
var delta = 0;;
var tiles = 1;
var sidesCount = 4;
var offset = 1;
var rotation = 90;
var showGrid = true;
var cpoiesCount = 1;
var copiesRotations = [];

var deltaSlider;
var angleSlider;
var tilesSlider;
var sidesSlider;
var offsetSlider;
var rotationSlider;
var GridCheckbox;
var copiesInput;
var copiesButton;
var copiesSliders = [];
var xOffsetSliders = [];
var yOffsetSliders = [];


function setup(){
    createCanvas(600, 600);
    background(255);
    createElement('br');
    createSpan('Delta');
    deltaSlider = createSlider(0,width/offset/tiles,0);
    createSpan('Inner Angle');
    angleSlider = createSlider(0,180,45);
    createSpan('Tiles Count');
    tilesSlider = createSlider(1,50,1,1);
    createElement('br');
    createSpan('Sides');
    sidesSlider = createSlider(4,20,4, 2);
    createSpan('Inner Repetition');
    offsetSlider = createSlider(1,5, 2);
    createSpan('Rotation');
    rotationSlider = createSlider(0,180, 90, 5);
    GridCheckbox = createCheckbox('Show Grid', true);
    copiesInput = createInput('1');
    copiesButton = createButton('Insert');
    copiesButton.mousePressed(makeCopies);
    createElement('br');
    makeCopies();
    angleMode(DEGREES);

    var inc = (width/tiles/offset);
    for(var x = 0; x < width; x+= inc){
        for(var y = 0; y < height; y+= inc){
            for(var j = 0; j < copiesSliders.length; j++){
                var poly = new Polygon(sidesCount);
                var xOffset = (width/2) / tiles/offset;
                var yOffset = (width/2) / tiles/offset;
                var xVal = xOffsetSliders[j].value();
                var yVal = yOffsetSliders[j].value();
                // console.log("Vale of silder # " + j  + 'is ' + val);
                // poly.addVertex(x+xVal,y+yVal);
                // poly.addVertex(x+xOffset+xVal,y+yVal);
                // poly.addVertex(x+xOffset+xVal,y+yOffset+yVal);
                // poly.addVertex(x+xVal,y+yOffset+yVal);

                for(var d = 0; d < 4; d++){
                    poly.addVertex(
                        ( Math.sin( d / 4 * 2 * Math.PI + (0*Math.PI/180) ) * ((width/2) / tiles) ) + xOffset+x+xVal, 
                        ( Math.cos( d / 4 * 2 * Math.PI + (0*Math.PI/180) ) * ((width/2) / tiles) ) + yOffset+y+yVal
                        );
                }

                poly.close();
                polys.push(poly);
                // if(j == 1){
                // console.log(x+val,y+yOffset+val);
                // console.log(xOffset,yOffset);
                // console.log(x+,y);
                // console.log(x,y);
                // }
            }
            // var sidesCount = 10;
            // for(var i = 0; i < sidesCount; i++){
                // poly.addVertex(( Math.sin( i / sidesCount * 2 * Math.PI + (rotation*Math.PI/180) ) * ((width/2) / tiles) ) + xOffset+x, ( Math.cos( i / sidesCount * 2 * Math.PI + (rotation*Math.PI/180) ) * ((width/2) / tiles) )+ yOffset+y);
            // }
            // poly.close();
            // poly.rotate(45*Math.PI/180);
            // polys.push(poly);
        }
    }

    for(var i = 0; i < polys.length; i++){
        polys[i].hankin();
        polys[i].show();
    }

}

function draw(){
    background(255);
    angle = angleSlider.value();
    delta = deltaSlider.value();
    tiles = tilesSlider.value();
    sidesCount = sidesSlider.value();
    offset = offsetSlider.value();
    rotation = rotationSlider.value();
    showGrid = GridCheckbox.checked();
    cpoiesCount = copiesInput.value();
    // console.log(GridCheckbox.checked());

    polys = [];
    var inc = (width/tiles/offset);
    for(var x = 0; x < width; x+= inc){
        for(var y = 0; y < height; y+= inc){
            for(var j = 0; j < copiesSliders.length; j++){
                var poly = new Polygon(sidesCount);
                var xOffset = (width/2) / tiles/offset;
                var yOffset = (width/2) / tiles/offset;
                var xVal = xOffsetSliders[j].value();
                var yVal = yOffsetSliders[j].value();
                var rot = copiesSliders[j].value();
                // console.log("Vale of silder # " + j  + 'is ' + val);
                // poly.addVertex(x+xVal,y+yVal);
                // poly.addVertex(x+xOffset+xVal,y+yVal);
                // poly.addVertex(x+xOffset+xVal,y+yOffset+yVal);
                // poly.addVertex(x+xVal,y+yOffset+yVal);

                for(var d = 0; d < 4; d++){
                    poly.addVertex(
                        ( Math.sin( d / 4 * 2 * Math.PI + (rot*Math.PI/180) ) * ((width/2) / tiles) ) + xOffset+x+xVal, 
                        ( Math.cos( d / 4 * 2 * Math.PI + (rot*Math.PI/180) ) * ((width/2) / tiles) ) + yOffset+y+yVal
                        );
                }

                // poly.addVertex(
                //     ( Math.sin( i / sidesCount * 2 * Math.PI + (rotation*Math.PI/180) ) * ((width/2) / tiles) ) + xOffset+x, 
                //     ( Math.cos( i / sidesCount * 2 * Math.PI + (rotation*Math.PI/180) ) * ((width/2) / tiles) ) + yOffset+y
                //     );

                poly.close();
                polys.push(poly);
                // if(j == 1){
                // console.log(x+val,y+yOffset+val);
                // console.log(xOffset,yOffset);
                // console.log(x+,y);
                // console.log(x,y);
                // }
            }
            // var sidesCount = 10;
            // for(var i = 0; i < sidesCount; i++){
                // poly.addVertex(( Math.sin( i / sidesCount * 2 * Math.PI + (rotation*Math.PI/180) ) * ((width/2) / tiles) ) + xOffset+x, ( Math.cos( i / sidesCount * 2 * Math.PI + (rotation*Math.PI/180) ) * ((width/2) / tiles) )+ yOffset+y);
            // }
            // poly.close();
            // poly.rotate(45*Math.PI/180);
            // polys.push(poly);
        }
    }

    for(var i = 0; i < polys.length; i++){
        polys[i].hankin();
        polys[i].show();
    }
}

function makeCopies(){
    var t = parseInt(cpoiesCount, 10);
    var b = copiesSliders.length;
    if(t < b){

        // var x = document.getElementsByClassName("rotationSlider");
        // var y = document.getElementsByClassName("rotationSpan");
        // var z = document.getElementsByClassName("rotationBr");
        // var xo = document.getElementsByClassName("xOffsetSlider");
        // var yo = document.getElementsByClassName("yOffsetSlider");
        // for(var i = 0; i < b; i++){
        //     if(t >= i+1){
        //         continue;
        //     }
        //     else{
        //         x[i-1].parentNode.removeChild(x[i-1]);
        //         y[i-1].parentNode.removeChild(y[i-1]);
        //         z[i-1].parentNode.removeChild(z[i-1]);
        //         xo[i-1].parentNode.removeChild(xo[i-1]);
        //         yo[i-1].parentNode.removeChild(yo[i-1]);
        //         copiesSliders.pop();
        //         xOffsetSliders.pop();
        //         yOffsetSliders.pop();
        //     }
        // }

        // ==============================
        copiesSliders = [];
        xOffsetSliders = [];
        yOffsetSliders = [];
        var x = document.getElementsByClassName("rotationSlider");
        var y = document.getElementsByClassName("rotationSpan");
        var z = document.getElementsByClassName("rotationBr");
        var xo = document.getElementsByClassName("xOffsetSlider");
        var yo = document.getElementsByClassName("yOffsetSlider");
        while(x.length > 0){
            x[0].parentNode.removeChild(x[0]);
            y[0].parentNode.removeChild(y[0]);
            z[0].parentNode.removeChild(z[0]);
            xo[0].parentNode.removeChild(xo[0]);
            yo[0].parentNode.removeChild(yo[0]);
        }
        for (var i = 0; i < x.length; i++) {
            x[i].style.backgroundColor = "red";
        }
    
    
        
        for(var i = 0; i < t; i++){
            var span = createSpan('Rotation of #' + parseInt(i+1, 10));
            span.class('rotationSpan');
            var s = createSlider(0,width/tiles,0);
            s.class('rotationSlider');
            copiesSliders.push(s);
    
            var xof = createSlider(0,width/tiles,0);
            xof.class('xOffsetSlider');
            xOffsetSliders.push(xof);
    
            var yof = createSlider(0,width/tiles,0);
            yof.class('yOffsetSlider');
            yOffsetSliders.push(yof);
    
            var b = createElement('br');
            b.class('rotationBr')
        }
    }else{
        var tot = t-copiesSliders.length;
        for(var i = 0; i < tot; i++){
            // console.log("Here");
            var span = createSpan('Rotation of #' + parseInt(copiesSliders.length+1, 10));
            span.class('rotationSpan');
            var s = createSlider(0,width/tiles,0);
            s.class('rotationSlider');
            copiesSliders.push(s);
    
            var xof = createSlider(0,width/tiles,0);
            xof.class('xOffsetSlider');
            xOffsetSliders.push(xof);
    
            var yof = createSlider(0,width/tiles,0);
            yof.class('yOffsetSlider');
            yOffsetSliders.push(yof);
    
            var b = createElement('br');
            b.class('rotationBr')
        }
    }

    // console.log(copiesSliders);
}



