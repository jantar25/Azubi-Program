class Vec {
    constructor(x,y) {
        this.x = x;
        this.y = y;
      }

    plus({x,y}) {
      return new Vec(this.x + x, this.y + y);
    }

    minus({x,y}) {
        return new Vec(this.x - x, this.y - y);
      }

    length() {
        return Math.sqrt((this.x ** 2) + (this.y ** 2));
      } 
  }


  console.log(new Vec(5, 7).plus(new Vec(5, 4)));
  console.log(new Vec(12, 7).minus(new Vec(7, 3)));
  console.log(new Vec(3, 4).length())