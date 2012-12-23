// Generated by CoffeeScript 1.3.3

define(["jquery", "application/controllers/loading", "application/views/loadingScreen", "application/controllers/screen1", "application/views/screen1Screen", "application/models/input", "application/models/api", "application/models/statemachine"], function($, loadingController, loadingView, screen1Controller, screen1View, Input, Api, StateMachine) {
  var Application;
  return Application = (function() {

    function Application() {}

    Application.prototype.init = function() {
      var _this = this;
      this.api = new Api();
      this.statemachine = new StateMachine();
      this.loadingController = new loadingController(new loadingView("#loading"), this.api);
      this.loadingController.load();
      this.statemachine.add(this.loadingController);
      this.screen1Controller = new screen1Controller(new screen1View("#screen1"), this.api);
      this.statemachine.add(this.screen1Controller);
      console.log("Application initialized...");
      $('body').bind('keydown', function(e) {
        return _this.dispatch(Input.keyEventToEvent(e));
      });
      $('body').bind('AppEvent', function(e, action) {
        return _this.dispatch(action);
      });
      return this.loadingController.activate();
    };

    Application.prototype.dispatch = function(e) {
      console.log("dispatch received:");
      console.log(e);
      switch (e) {
        case 'LOADED':
          return this.statemachine.trigger("change", this.screen1Controller);
      }
    };

    return Application;

  })();
});
