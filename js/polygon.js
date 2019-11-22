function Polygon(){
    // this.sides;
    this.vertices = [];
    this.edges = [];

    this.addVertex = function(x,y){
        var newVertex = createVector(x,y);
        var totalVertices = this.vertices.length;
        if(totalVertices > 0){
            var previousVertex = this.vertices[totalVertices - 1];
            var edge = new Edge(previousVertex, newVertex);
            this.edges.push(edge);
        }
        this.vertices.push(newVertex);
    }

    this.close = function(){
        var firstVertex = this.vertices[0];
        var lastVertex = this.vertices[this.vertices.length - 1];
        var lastEdge = new Edge(lastVertex, firstVertex);
        this.edges.push(lastEdge);
    }

    this.show = function(){
        for(var i = 0; i < this.edges.length; i++){
            this.edges[i].show();
        }
    }

    this.hankin = function(){
        for(var i = 0; i < this.edges.length; i++){
            // console.log(i+1);
            this.edges[i].hankin();
        }

        // for(var i = 0; i < this.edges.length; i++){
        //     for(var j = 0; j < this.edges.length; j++){
        //         if(i != j) this.edges[i].findEnds(this.edges[j]);
        //     }
        // }

        // this.edges[0].findEnds(this.edges[1]);
    }
}