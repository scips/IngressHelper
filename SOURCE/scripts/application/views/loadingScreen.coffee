define ["jquery","application/views/screen"], ($,ScreenView) ->

  class loadingScreenView extends ScreenView
    constructor:(@divID)->
      super @divID
