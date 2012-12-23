// Generated by CoffeeScript 1.4.0

define([], function() {
  var Input;
  return Input = (function() {

    function Input() {}

    Input.dictionnary = {
      37: 'KEY_LEFT',
      38: 'KEY_UP',
      39: 'KEY_RIGHT',
      40: 'KEY_DOWN'
    };

    Input.keyEventToEvent = function(e) {
      var key;
      key = e.keyCode ? e.keyCode : e.charCode ? e.charCode : e.which;
      if (this.dictionnary[key] != null) {
        return this.dictionnary[key];
      }
    };

    return Input;

  })();
});
