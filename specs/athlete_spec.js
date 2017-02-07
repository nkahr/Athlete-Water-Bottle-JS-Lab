var assert = require('assert');
var athlete = require('../athlete');
var waterBottle = require('../water_bottle');

describe('Athlete', function() {
  it('athlete should start at 100 hydration', function() {
    assert.equal(100, athlete.hydration);
  });
  it('athlete should have a distance covered attribute', function() {
    assert.equal(0, athlete.distanceCovered);
  });
  it('athlete should be able to run', function() {
    athlete.run();
    assert.equal(10, athlete.distanceCovered);
    assert.equal(90, athlete.hydration);
  });
  it('athlete should not move when dehydrated', function() {
    makeThirsty();
    athlete.run();
    assert.equal(0, athlete.hydration);
    assert.equal(10, athlete.distanceCovered);
  });
  it('athlete should be able to drink from water bottle', function() {
    waterBottle.fill();
    athlete.drinkFromBottle();
    assert.equal(10, athlete.hydration);
    waterBottle.empty();
  });
  var makeThirsty = function() {
    athlete.hydration = 0;
  };
});