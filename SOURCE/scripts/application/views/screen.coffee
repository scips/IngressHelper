define ["jquery"], ($) ->

  class ScreenView
    constructor:(@divID)->

    setData:(@data) ->

    show: ->
      $("#{@divID}").show()

    hide: ->
      $("#{@divID}").hide()