describe('Thermostat', function() {

    beforeEach(function() {
        thermostat = new Thermostat();
    });

    describe('#initialize', function() {
    it('temperature starts at 20 by default', function() {
      expect(thermostat.temp).toEqual(20);
    })
  });

  describe('#up', function() {
    it('increases the temperature by 1', function() {
      thermostat.up();
      expect(thermostat.temp).toEqual(21);
    })
  });

  describe('#down', function() {
    it('decreases the temperature by 1', function() {
      thermostat.down();
      expect(thermostat.temp).toEqual(19);
    });

    it('cannot go lower then minimum temperature', function() {
      thermostat.temp = 10;
      thermostat.down();
      expect(thermostat.temp).toEqual(10);
    })
  });

  describe('#powerMode', function() {
    it('on by default', function() {
      expect(thermostat.powerMode).toBe(true);
    });

    it('when on, maximum temperature is 25', function() {
        thermostat.temp = 25;
        thermostat.up();
        expect(thermostat.temp).toEqual(25);
    });

    it('when off, maximum temperature is 32', function() {
        thermostat.powerMode = false;
        thermostat.temp = 32;
        thermostat.up();
        expect(thermostat.temp).toEqual(32);
    })
  });

    describe('#reset', function() {
      it ('resets to default temp', function() {
          thermostat.temp = 23;
          thermostat.reset();
          expect(thermostat.temp).toEqual(20);
      });
    });

    describe('#currentUsage', function() {
      it('gives low-usage below 18 degrees', function() {
        thermostat.temp = 15;
          expect(thermostat.currentUsage()).toEqual('low-usage')
      });

      it('gives medium-usage below 25 degrees', function() {
          thermostat.temp = 20;
          expect(thermostat.currentUsage()).toEqual('medium-usage')
      });

      it('gives high-usage above 25 degrees', function() {
          thermostat.temp = 30;
          expect(thermostat.currentUsage()).toEqual('high-usage')
      });
    });
});
