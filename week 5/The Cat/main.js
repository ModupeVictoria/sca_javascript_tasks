

let cat = {
    name: "Jack",
    tiredness: "tired",
    hunger: "hungry",
    lonliness: "lonely",
    happiness: "happy",

    sleep(){
        //console.log(`${this.name} is very ${this.tiredness}`)
      return `${this.name} is very ${this.tiredness}`
    },

    feed(){
        //console.log(`${this.name} is really  ${this.hunger}`)
        return `${this.name} is really  ${this.hunger}`
    },

    feel(){
        //console.log(`${this.name} feel so  ${this.lonliness}`)
        return `${this.name} feel so  ${this.lonliness}`
    },

    mood(){
        //console.log(`${this.name} is very  ${this.happiness}`)
        return `${this.name} is very  ${this.happiness}`
    }
}
document.getElementById('sleep').innerHTML = cat.sleep();
document.getElementById('feed').innerHTML = cat.feed();
document.getElementById('feel').innerHTML = cat.feel();
document.getElementById('mood').innerHTML = cat.mood();
