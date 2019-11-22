function Hankin(a,v){
    this.a = a;
    this.v = v;
    this.end = p5.Vector.add(this.a,this.v);
    // this.end;
    this.minimumDistance;
    // this.b = p5.Vector.mult(this.v,2);

    this.show = function(){
        stroke(255);
        line(this.a.x, this.a.y, this.end.x, this.end.y);
        // if(this.end){
        //     fill(255, 255, 0);
        //     ellipse(this.end.x, this.end.y, 8);
        // }
        // console.log(this.v);
        // console.log(this.v);
        // console.log(this.b);
        // console.log("====================================");
    }

    // this.findEnd = function(other){
    //     //this.a(x1, y1)
    //     //this.b(x2, y2)
    //     //other.a(x3, y3)
    //     //other.b(x4, y4)
    //     var x1 = this.a.x;
    //     var y1 = this.a.y;
    //     var x2 = this.b.x;
    //     var y2 = this.b.y;

    //     var x3 = other.a.x;
    //     var y3 = other.a.y;
    //     var x4 = other.b.x;
    //     var y4 = other.b.y;



    //     var den = ((y4 - y3)*(x2 - x1)) - ((x4 - x3)*(y2 - y1));
    //     if(den == 0) return;
    //     var uanum = ((x4 - x3)*(y1 - y3)) - ((y4 - y3)*(x1 - x3));
    //     var ubnum = ((x2 - x1)*(y1 - y3)) - ((y2 - y1)*(x1 - x3));
    //     // var ubnum = ((this.b.x - this.a.x)*(this.a.y - other.a.y)) - ((this.b.y - this.a.y)*(this.b.y - this.a.y));

    //     var ua = uanum/den;
    //     var ub = ubnum/den;

    //     var x = x1 + ua*(x2-x1);
    //     var y = y1 + ua*(y2-y1);

    //     if(ua > 0 && ub > 0){
    //         var candidate = createVector(x, y);
    //         var distance1 = p5.Vector.dist(candidate, this.a);
    //         var distance2 = p5.Vector.dist(candidate, other.a);
    //         var totalDistance = distance1 + distance2;
    //         if(!this.end && abs(distance1 - distance2) < 0.001){
    //             this.end = candidate;
    //             this.minimumDistance = totalDistance;
    //         } else if(totalDistance < this.minimumDistance && abs(distance1 - distance2) < 0.001){
    //             this.end = candidate;
    //             this.minimumDistance = totalDistance;
    //         }
    //     }
    // }
}