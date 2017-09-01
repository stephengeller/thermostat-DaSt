const POWER_MODE_MAX = 25;
const NORMAL_MODE_MAX = 32;
const DEFAULT_TEMP = 20;
const MIN_TEMP = 10;

var Thermostat = function() {
  this.temp = DEFAULT_TEMP;
  this.powerMode = true;
  this.normalMaxTemp = NORMAL_MODE_MAX;
  this.powerMaxemp = POWER_MODE_MAX;
}

Thermostat.prototype.up = function(increment = 1) {
  if ((this.temp + increment >= POWER_MODE_MAX) && this.powerMode === true) {
      this.temp = POWER_MODE_MAX;
  } else if(this.temp + increment >= NORMAL_MODE_MAX && this.powerMode === false) {
      this.temp = NORMAL_MODE_MAX
  } else {
    this.temp += increment;
  }
};

Thermostat.prototype.down = function(increment = 1) {
  if (this.temp - increment <= MIN_TEMP) {
    this.temp = MIN_TEMP;
  } else {
    this.temp -= increment;
  }
};

Thermostat.prototype.reset = function() {
  this.temp = DEFAULT_TEMP;
};

Thermostat.prototype.currentUsage = function() {
  if (this.temp < 18) {
    return 'low-usage';
  }else if (this.temp < 25) {
    return 'medium-usage';
  }else {
    return 'high-usage';
  }
};

Thermostat.prototype.powerModeSet = function(boolean) {
  if (boolean === true) {
    if (this.temp > POWER_MODE_MAX) {
      this.temp = POWER_MODE_MAX
    }
    this.powerMode = true
  }else if (boolean === false) {
    this.powerMode = false
  }
};