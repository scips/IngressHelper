define ["jquery","underscore","application/views/screen","vendor/jquery/jquery.flot","vendor/jquery/jquery.flot.time"], ($,_,ScreenView,jQueryFlot,jQueryFlotTime) ->

  class screen1ScreenView extends ScreenView
    getItemTemplate:()-> 
      """
        <li class="item">
          <span class="title"><%= title %></span><span class="value"><%= value %></span>
        </li>
      """

    constructor:(@divID)->
      super @divID

    show:()->
      html = @parseTemplate()
      console.log html
      $("#{@divID} .list").html(html)
      @displayGraph()
      super()

    parseTemplate:()->
      template = @getItemTemplate()
      if @data && @data.length >0
        list = for item in @data
          liItem = 
            title: item.name
            value: item.value
          _.template(template,liItem)

    displayGraph:() ->
      seriesData = @data
      placeholder = $("#{@divID} .graph")
      options =
        lines:
          show: true
        points:
          show: true
        xaxis:
          mode: "time"
      $.plot(placeholder,seriesData,options)
      