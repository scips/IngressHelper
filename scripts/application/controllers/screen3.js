// Generated by CoffeeScript 1.3.3
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["jquery", "application/controllers/controller"], function($, Controller) {
  var screen3Controller;
  return screen3Controller = (function(_super) {

    __extends(screen3Controller, _super);

    function screen3Controller(view, settings) {
      this.view = view;
      this.settings = settings;
      screen3Controller.__super__.constructor.call(this, this.view);
    }

    screen3Controller.prototype.activate = function() {
      return screen3Controller.__super__.activate.call(this);
    };

    screen3Controller.prototype.unload = function() {};

    return screen3Controller;

  })(Controller);
});
