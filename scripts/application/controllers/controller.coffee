define ["jquery"], () ->
  class Controller
    constructor:(@view)->

    activate:() ->
      @view.show()

    deactivate:() ->
      @view.hide()