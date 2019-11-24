function Edge(a,b, sides){
    this.a = a;
    this.b = b;
    this.mid;

    this.sidesCount = sides;

    this.h1;
    this.h2;
    this.show = function(){
        stroke(0, 30);
        if(showGrid){
            line(this.a.x, this.a.y, this.b.x, this.b.y);
        }
        this.h1.show();
        this.h2.show();
    }

    this.hankin = function(){
        // console.log("Hankining this edge");
        this.mid = p5.Vector.add(this.a, this.b);
        this.mid.mult(0.5);

        var v1 = p5.Vector.sub(this.a, this.mid);
        var v2 = p5.Vector.sub(this.b, this.mid);
        var edgeLength = v1.mag() + delta; //Correct
        // console.log(edgeLength);
        var offset1;
        var offset2;

        var alpha = (180*(sidesCount-2))/(sidesCount)/2; // half the angle of the square right now
        // console.log(alpha);
        var beta = 180 - angle - alpha;
        hlen = (edgeLength * Math.sin(alpha * Math.PI / 180)) / Math.sin(beta * Math.PI / 180);
        // console.log(hlen);
        // console.log(200*Math.sin(45 * (Math.PI / 180)) / Math.sin(90 * (Math.PI / 180)));
        // console.log(200*Math.sin(45*Math.PI / 180) / sin(90 * Math.PI / 180));

        if(delta > 0){
            // console.log("SADA");
            offset1 = p5.Vector.sub( this.mid, p5.Vector.mult(v1.normalize(), delta) );
            offset2 = p5.Vector.sub( this.mid, p5.Vector.mult(v2.normalize(), delta) );
        }else{
            offset1 = this.mid;
            offset2 = this.mid;
            // console.log(this.mid);
        }
        v1.rotate(angle);
        v2.rotate(-angle);
        // console.log(this.mid, v1, v2);

        
        this.h1 = new Hankin(offset1, v1.setMag(hlen));
        this.h2 = new Hankin(offset2, v2.setMag(hlen));
        // console.log(this.h1, this.h2);
    }

    // this.findEnds = function(edge){
    //     this.h1.findEnd(edge.h1);
    //     this.h1.findEnd(edge.h2);
    //     this.h2.findEnd(edge.h1);
    //     this.h2.findEnd(edge.h2);
    // }
}

