define [
  "jquery",
  "application/controllers/loading",
  "application/views/loadingScreen",
  "application/controllers/screen1",
  "application/views/screen1Screen",
  "application/models/input",
  "application/models/api"
  "application/models/statemachine"], ($,loadingController,loadingView,screen1Controller,screen1View,Input,Api,StateMachine) ->

  class Application
    init: () ->
      @api = new Api()
      @statemachine = new StateMachine()
      
      @loadingController = new loadingController(new loadingView("#loading"),@api)
      @loadingController.load()
      @statemachine.add(@loadingController)
      
      @screen1Controller = new screen1Controller(new screen1View("#screen1"),@api)
      @statemachine.add(@screen1Controller)

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
        when 'LOADED' 
          @statemachine.trigger("change",@screen1Controller)