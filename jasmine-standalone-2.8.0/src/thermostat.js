var Thermostat = function() {
  this.temp = 20;
  this.powerMode = true;
}

Thermostat.prototype.up = function(increment = 1) {
  if (this.temp == 25 && this.powerMode == true) {
    this.temp = 25;
  } else {
    this.temp += increment;
  }
}

Thermostat.prototype.down = function(increment = 1) {
  if (this.temp - increment <= 10) {
    this.temp = 10;
  } else {
    this.temp -= increment;
  }
}
