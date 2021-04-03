let shape = {
    type: "shape",
    getType: function(){
        return this.type;
    }
};

var Triangle = function(a,b,c){
    this.a = a;
    this.b = b;
    this.c = c;
    this.type = "Triangle";
};


Triangle.prototype = shape;

Triangle.prototype.getPerimeter = function(){
    return this.a + this.b + this.c;
};

Triangle.prototype.constructor = Triangle;


let getKeys = function(obj){
    for(let key in obj){
        if (obj.hasOwnProperty(key)) {
            console.log(key + " : " +  obj[key]);
        }
    }
};

var t = new Triangle(1,2,3);

console.log(t.constructor === Triangle);
console.log(shape.isPrototypeOf(t));
console.log(t.getPerimeter());
console.log(t.getType());
console.log(getKeys(t));


Object.defineProperty(Array.prototype, 'shuffle',{
    value: function(){
        for(let i=0;i<=Math.random()*99;i++){
            var a=Math.random()*this.length;
            var b=Math.random()*this.length;
            var c= this[a];
            this[a]=this[b];
            this[b]=c; 
        }
        return this;
    }
});

[1,2,3,4,5,6,7,8,9,0].shuffle();