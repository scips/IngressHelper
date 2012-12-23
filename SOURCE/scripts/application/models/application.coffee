define [
  "jquery",
  "application/controllers/loading",
  "application/views/loadingScreen",
  "application/controllers/screen1",
  "application/views/screen1Screen",
  "application/controllers/screen2",
  "application/views/screen2Screen",
  "application/controllers/screen3",
  "application/views/screen3Screen",
  "application/models/input",
  "application/models/api",
  "application/models/settings",
  "application/models/statemachine"], ($,loadingController,loadingView,screen1Controller,screen1View,screen2Controller,screen2View,screen3Controller,screen3View,Input,Api,Settings,StateMachine) ->

  class Application
    @settings: null

    init: () ->
      @api = new Api()
      @settings = new Settings()
      @statemachine = new StateMachine()

      @loadingController = new loadingController(new loadingView("#loading"),@settings)
      @loadingController.load()
      @statemachine.add(@loadingController)
      
      @screen1Controller = new screen1Controller(new screen1View("#screen1"),@settings)
      @statemachine.add(@screen1Controller)

      @screen2Controller = new screen2Controller(new screen2View("#screen2"),@settings)
      @statemachine.add(@screen2Controller)
      
      @screen3Controller = new screen3Controller(new screen3View("#screen3"),@settings)
      @statemachine.add(@screen3Controller)

      console.log("Application initialized...")
      
      
      $('body').bind 'keydown', (e) =>
        @dispatch(Input.keyEventToEvent(e))

      $('body').bind 'AppEvent', (e,action) =>
        @dispatch(action)

      @loadingController.activate()

    dispatch: (e)->
      console.log "dispatch received:"
      console.log e
      switch e
        when 'SCREEN1' 
          @statemachine.trigger("change",@screen1Controller)
        when 'SCREEN2'
          @statemachine.trigger("change",@screen2Controller)
        when 'SCREEN3'
          @statemachine.trigger("change",@screen3Controller)
        