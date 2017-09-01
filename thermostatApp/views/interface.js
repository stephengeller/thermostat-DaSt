$(document).ready(function() {
    var thermostat = new Thermostat();
    updateTemperature();

    $('button').click(function(){
      $(this).hide('slow').show('fast');
    })

    $('#temperature-up').click(function () {
        thermostat.up();
        updateTemperature()
    });

    $('#temperature-down').click(function () {
        thermostat.down();
        updateTemperature()
    });
    $('#temperature-reset').click(function () {
        thermostat.reset();
        updateTemperature()
    });
    $('#powersaving-on').click(function () {
        thermostat.powerModeSet(true);
        $('#power-saving-status').text('on');
        updateTemperature()
    });
    $('#powersaving-off').click(function () {
        thermostat.powerModeSet(false);
        $('#power-saving-status').text('off');
        updateTemperature()

    });

    function updateTemperature() {
        $('#temperature').text(thermostat.temp);
        $('#temperature').attr('class', thermostat.currentUsage());
    };
});
