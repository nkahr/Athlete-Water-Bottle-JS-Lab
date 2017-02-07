var assert = require('assert');
var waterBottle = require('../water_bottle');

describe('Water Bottle', function() {
  it('should be empty', function() {
    assert.equal(0, waterBottle.volume);
  });
  it('should go to 100 when filled', function() {
    waterBottle.fill();
    assert.equal(100, waterBottle.volume);
  });
  it('should go down by 10 when drank', function() {
    waterBottle.drink();
    assert.equal(90, waterBottle.volume);
  });
  it('should go to 0 when emptied', function() {
    waterBottle.empty();
    assert.equal(0, waterBottle.volume);
  });
  it('should not be able to go below 0', function() {
    waterBottle.drink();
    assert.equal(0, waterBottle.volume);
  });
});
