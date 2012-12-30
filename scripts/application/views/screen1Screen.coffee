define ["jquery","underscore","application/views/screen","highcharts","highchartsmore","highchartsexport"], ($,_,ScreenView,Highcharts,HighchartsMore,HighchartsExport) ->

  class screen1ScreenView extends ScreenView
    getItemTemplate:()-> 
      """
        <li>
          <%= direction %>: 
          <select name="<%= direction %>">
            <% for(i=0;i<=8;i++)
            {
              if(i==value) 
                print('<option value="'+i+'" selected>'+i+'</option>'); 
              else
                print('<option value="'+i+'">'+i+'</option>'); 
            }
            %>
          </select>
        </li>
      """

    constructor:(@divID)->
      super @divID

    setCallbackListUpdate:(@callbackListUpdate) ->
      $("#{@divID} .list").on("change",@callbackListUpdate)

    show:()->
      html = @parseTemplate()
      $("#{@divID} .list").html(html)
      @displayGraph()
      super()

    parseTemplate:()->
      template = @getItemTemplate()
      if @data
        list = for key,value of @data
          liItem = 
            direction: key
            value: value
          console.log liItem
          _.template(template,liItem)

    displayGraph:() ->
      legend =
        0: "N"
        45: "NE"
        90: "E"
        135: "SE"
        180: "S"
        225: "SW"
        270: "W"
        315: "NW"
      options = 
        chart:
          renderTo: 'portalchart'
          polar: true
          className: 'portalchart'
          backgroundColor: "#000"
        title: null
        credits:
          enabled: false
        legend:
          enabled: false
        navigation:
          buttonOptions:
            enabled: false
        pane:
          startAngle: 0
          endAngle: 360
        xAxis:
          tickInterval: 45
          min: 0
          max: 360
          lineColor: "#0F0"
          gridLineColor: "#0F0"
          labels:
            style:
              color: "#0F0"
            formatter:
              () ->
                legend[this.value]
        yAxis:
          min: 0
          max: 8
          lineColor: "#0F0"
          gridLineColor: "#0F0"
          labels:
            enabled: false
        plotOptions:
          area:
            enableMouseTracking: false
            marker:
              enabled: false
          series:
            pointStart: 0
            pointInterval: 45
          column:
            pointPadding: 0
            groupPadding: 0
        series: [
          type: 'area'
          name: 'defaultlevel'
          data: [8,8,8,8,8,8,8,8]
        ,
          type: 'area'
          name: 'level'
          data: [0,0,0,0,0,0,0,0]
        ]
      values = for key,value of @data
        value
      options.series[1].data = values
      @mychart = new Highcharts.Chart(options)

    updateGraph: (compassDirection,value) ->
      mapCompassDirectionOrder =
        N: 0
        NE: 1
        E: 2
        SE: 3
        S: 4
        SW: 5
        W: 6
        NW: 7
      if @mychart.series[1]?.data[mapCompassDirectionOrder[compassDirection]]?
        @mychart.series[1].data[mapCompassDirectionOrder[compassDirection]].update(value)

    updateLevel: (value) ->
      $("#{@divID} .level").html(value)

    updateDistance: (value) ->
      $("#{@divID} .maxlinkdistance").html(value)

    updateEnergy: (value) ->
      $("#{@divID} .energy").html(value)