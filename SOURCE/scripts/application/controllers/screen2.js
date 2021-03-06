// Generated by CoffeeScript 1.3.3
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["jquery", "application/controllers/controller"], function($, Controller) {
  var screen2Controller;
  return screen2Controller = (function(_super) {

    __extends(screen2Controller, _super);

    function screen2Controller(view, settings) {
      this.view = view;
      this.settings = settings;
      screen2Controller.__super__.constructor.call(this, this.view);
      this.unit = 'metric';
      this.energy = 'K';
    }

    screen2Controller.prototype.activate = function() {
      return screen2Controller.__super__.activate.call(this);
    };

    screen2Controller.prototype.unload = function() {};

    return screen2Controller;

  })(Controller);
});
