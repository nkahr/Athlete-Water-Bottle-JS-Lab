var waterBottle = require('./water_bottle');

var athlete = {
  hydration: 100, 
  distanceCovered: 0, 
  run: function() {
    if(this.hydration >= 10) {
      this.hydration -= 10;
      this.distanceCovered += 10;
    }
  }, 
  drinkFromBottle: function() {
    this.hydration += waterBottle.drink();
  }
};

module.exports = athlete;