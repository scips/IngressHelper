// Generated by CoffeeScript 1.3.3
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["jquery", "application/controllers/controller"], function($, Controller) {
  var screen1Controller;
  return screen1Controller = (function(_super) {

    __extends(screen1Controller, _super);

    screen1Controller.baseDistance = 160;

    function screen1Controller(view, settings) {
      this.view = view;
      this.settings = settings;
      this.listUpdate = __bind(this.listUpdate, this);

      screen1Controller.__super__.constructor.call(this, this.view);
      this.polarData = this.settings.polarValues;
      this.view.setData(this.polarData);
      this.view.setCallbackListUpdate(this.listUpdate);
      this.level = 0;
    }

    screen1Controller.prototype.activate = function() {
      return screen1Controller.__super__.activate.call(this);
    };

    screen1Controller.prototype.unload = function() {};

    screen1Controller.prototype.listUpdate = function(updateEvent) {
      var compassDirection, value;
      value = parseInt(updateEvent.srcElement.value);
      compassDirection = updateEvent.srcElement.name;
      this.view.updateGraph(compassDirection, value);
      this.polarData[compassDirection] = value;
      this.view.updateLevel(this.average());
      this.view.updateDistance(this.distance());
      return this.view.updateEnergy(this.energy());
    };

    screen1Controller.prototype.average = function() {
      var count, key, total, value, _ref;
      count = 0;
      total = 0;
      _ref = this.polarData;
      for (key in _ref) {
        value = _ref[key];
        count++;
        total += value;
      }
      return total / count;
    };

    screen1Controller.prototype.distance = function() {
      var average, count, countActif, key, total, value, _ref;
      count = 0;
      total = 0;
      countActif = 0;
      _ref = this.polarData;
      for (key in _ref) {
        value = _ref[key];
        if (value > 0) {
          countActif++;
        }
        count++;
        total += value;
      }
      average = total / count;
      if (countActif === 8) {
        return Math.round(screen1Controller.baseDistance * Math.pow(this.average(), 4), 0);
      } else {
        return 0;
      }
    };

    screen1Controller.prototype.energy = function() {
      var energyMap, key, total, value, _ref;
      energyMap = [0, 1, 1.5, 2, 2.5, 3, 4, 5, 6];
      total = 0;
      _ref = this.polarData;
      for (key in _ref) {
        value = _ref[key];
        total += energyMap[value];
      }
      return total;
    };

    return screen1Controller;

  })(Controller);
});
