define ["jquery","application/controllers/controller"], ($,Controller) ->

  class screen1Controller extends Controller
    constructor:(@view,@api)->
      super @view

    activate:() ->
      @data = @api.getData()
      @view.setData(@data)
      console.log "data screen1:"
      console.log @data
      super()

    unload:() ->
