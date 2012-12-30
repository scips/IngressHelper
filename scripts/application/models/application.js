// Generated by CoffeeScript 1.3.3

define(["jquery", "application/controllers/loading", "application/views/loadingScreen", "application/controllers/screen1", "application/views/screen1Screen", "application/controllers/screen2", "application/views/screen2Screen", "application/controllers/screen3", "application/views/screen3Screen", "application/models/input", "application/models/api", "application/models/settings", "application/models/statemachine"], function($, loadingController, loadingView, screen1Controller, screen1View, screen2Controller, screen2View, screen3Controller, screen3View, Input, Api, Settings, StateMachine) {
  var Application;
  return Application = (function() {

    function Application() {}

    Application.settings = null;

    Application.prototype.init = function() {
      var _this = this;
      this.api = new Api();
      this.settings = new Settings();
      this.statemachine = new StateMachine();
      this.loadingController = new loadingController(new loadingView("#loading"), this.settings);
      this.loadingController.load();
      this.statemachine.add(this.loadingController);
      this.screen1Controller = new screen1Controller(new screen1View("#screen1"), this.settings);
      this.statemachine.add(this.screen1Controller);
      this.screen2Controller = new screen2Controller(new screen2View("#screen2"), this.settings);
      this.statemachine.add(this.screen2Controller);
      this.screen3Controller = new screen3Controller(new screen3View("#screen3"), this.settings);
      this.statemachine.add(this.screen3Controller);
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
        case 'SCREEN1':
          return this.statemachine.trigger("change", this.screen1Controller);
        case 'SCREEN2':
          return this.statemachine.trigger("change", this.screen2Controller);
        case 'SCREEN3':
          return this.statemachine.trigger("change", this.screen3Controller);
      }
    };

    return Application;

  })();
});
