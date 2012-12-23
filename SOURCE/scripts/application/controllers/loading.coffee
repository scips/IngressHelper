define ["jquery","application/controllers/controller","application/models/api"], ($,Controller,RtbfApi) ->

  class loadingController extends Controller

    constructor:(@view,@api)->
      super @view

    load:() ->
      @api.setCallback(@dataLoaded)
      @api.fetchData()

    unload:() ->

    dataLoaded:() =>
      console.log "data:"
      console.log @api.getData()
      $('body').trigger('AppEvent',['LOADED'])