// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker{
    constructor(length,width,height){
      this.length = length;
      this.width = width;
      this.height = height;
    }
    volume(){
        return this.length * this.width * this.height;
    }
    surfaceArea(){
      return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }

}  
let cuboid = new CuboidMaker(4,5,5);
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log("The volume of the CuboidMaker")
console.log(cuboid.volume()); // 100
console.log("The Surface Area of the CuboidMaker")
console.log(cuboid.surfaceArea()); // 130

