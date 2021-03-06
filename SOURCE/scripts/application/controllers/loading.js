// Generated by CoffeeScript 1.3.3
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["jquery", "application/controllers/controller", "application/models/api"], function($, Controller, RtbfApi) {
  var loadingController;
  return loadingController = (function(_super) {

    __extends(loadingController, _super);

    function loadingController(view, settings) {
      this.view = view;
      this.settings = settings;
      loadingController.__super__.constructor.call(this, this.view);
    }

    loadingController.prototype.load = function() {};

    loadingController.prototype.unload = function() {};

    loadingController.prototype.activate = function() {
      loadingController.__super__.activate.call(this);
      return setTimeout(this.event, 1000);
    };

    loadingController.prototype.event = function() {
      return $('body').trigger('AppEvent', ['SCREEN1']);
    };

    return loadingController;

  })(Controller);
});
