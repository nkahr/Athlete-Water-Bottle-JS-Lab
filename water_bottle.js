var waterBottle = {
  volume: 0, 
  fill: function() {
    this.volume = 100;
  },
  drink: function() {
    if (this.volume >= 10) {
      this.volume -= 10;
      return 10;
    } else {
      this.volume = 0;
      return 0;
    }
  },
  empty: function() {
    this.volume = 0;
  }
};

module.exports = waterBottle;
