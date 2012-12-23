define ["jquery","application/controllers/controller"], ($,Controller) ->

  class screen1Controller extends Controller
    @baseDistance = 160

    constructor:(@view,@api)->
      super @view
      @polarArray = ['N','NE','E','SE','S','SW','W','NW']
      @polarValues = [0,0,0,0,0,0,0,0]
      @view.setData(@polarArray)
      @view.setCallbackListUpdate(@listUpdate)
      @level = 0

    activate:() ->
      super()

    unload:() ->

    listUpdate: (updateEvent) =>
      value = parseInt(updateEvent.srcElement.value)
      option = @polarArray.indexOf(updateEvent.srcElement.name)
      @view.updateGraph(option,value)
      @polarValues[option] = value
      @view.updateLevel(@average())
      @view.updateDistance(@distance())
      @view.updateEnergy(@energy())

    average: () ->
      count = 0
      total = 0
      for value in @polarValues
        count++
        total+=value
      total/count

    distance: () ->
      count = 0
      total = 0
      countActif = 0
      for value in @polarValues
        countActif++ if value > 0
        count++
        total+=value
      average = total/count
      if countActif is 8
        Math.round(screen1Controller.baseDistance * Math.pow(@average(),4),0)
      else
        0

    energy: () ->
      energyMap = [0,1,1.5,2,2.5,3,4,5,6]
      total = 0
      for value in @polarValues
        total += energyMap[value]
      total
