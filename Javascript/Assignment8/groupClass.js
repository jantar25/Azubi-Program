class Group {
    constructor() {
        this.group = [];
      }
      
    add(member) {
      if (!this.group.includes(member)) {
        this.group.push(member);
      }
    }

    delete(member) {
      let index = this.group.indexOf(member);
      if (index !== -1) {
        this.group.splice(index, 1);
      }
    }

    has(member) {
      return this.group.includes(member);
    }

    static from(a) {
      let g = new Group();
      for (let member of a) {
        g.add(member);
      }
      console.log(g)
      return g;
    }
}

let group = Group.from([1,2,3,4,5,6,7,8,9]);
console.log(group.has(7));
// → true
console.log(group.has(11));
// → false
group.add(50);
console.log(group.has(50));
// → true
group.delete(7);
console.log(group.has(7));
// → false