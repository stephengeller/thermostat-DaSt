beforeEach(function() {
  thermostat = new Thermostat();
})

describe('Thermostat', function() {
  describe('#initialize', function() {
    it('temperature starts at 20 by default', function() {
      expect(thermostat.temp).toEqual(20);
    })
  })

  describe('#up', function() {
    it('increases the temperature by 1', function() {
      thermostat.up();
      expect(thermostat.temp).toEqual(21);
    })
  })

  describe('#down', function() {
    it('decreases the temperature by 1', function() {
      thermostat.down();
      expect(thermostat.temp).toEqual(19);
    })

    it('cannot go lower then minimum temperature', function() {
      thermostat.temp = 10
      thermostat.down();
      expect(thermostat.temp).toEqual(10);
    })
  })

  describe('#powerMode', function() {
    it('power mode is on by default', function() {
      expect(thermostat.powerMode).toEqual(true);
    })
    it('when on maximum temperature is 25', function() {
      thermostat.temp = 25;
      thermostat.up()
      expect(thermostat.temp).toEqual(25);
    })
  })
})
