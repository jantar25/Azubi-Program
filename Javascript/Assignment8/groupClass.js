class Group {
    constructor() {
        this.group = [];
      }

    add(member) {
      const newGroup = [...this.group,this.group.concat(member)]
        return newGroup;
    }

    delete(member) {
      return this.group.map(item => item)
    }

    has() {

    }

    from () {

    }
}

console.log(new Group().add('Jantar'))
console.log(new Group().delete('Glody'))