define ["jquery","application/controllers/controller","application/models/api"], ($,Controller,RtbfApi) ->

  class loadingController extends Controller

    constructor:(@view,@api)->
      super @view

    load:() ->
      

    unload:() ->

    activate:() ->
      super()
      $('body').trigger('AppEvent',['LOADED'])