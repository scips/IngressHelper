// Generated by CoffeeScript 1.3.3
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["jquery", "application/views/screen"], function($, ScreenView) {
  var loadingScreenView;
  return loadingScreenView = (function(_super) {

    __extends(loadingScreenView, _super);

    function loadingScreenView(divID) {
      this.divID = divID;
      loadingScreenView.__super__.constructor.call(this, this.divID);
    }

    return loadingScreenView;

  })(ScreenView);
});