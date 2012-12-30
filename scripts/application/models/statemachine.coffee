define ["jquery"],($) ->
  class StateMachine

    add: (controller) ->
      @bind "change",(e,current)->
        if controller is current
          controller.activate()
        else
          controller.deactivate()
      # add a proxied method
      controller.active = $.proxy () ->
        @trigger "change", controller


    bind: () ->
      @o ?= $({})
      @o.bind.apply @o, arguments

    trigger: () ->
      @o ?= $({})
      @o.trigger.apply @o, arguments