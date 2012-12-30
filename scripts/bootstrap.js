require.config({
    paths: {
        "jquery": "vendor/jquery/jquery",
        "depend": "vendor/require/plugins/depend",
        "underscore": "vendor/underscore/underscore",
        "highcharts": "vendor/highcharts/highcharts",
        "highchartsmore": "vendor/highcharts/highcharts-more",
        "highchartsexport": "vendor/highcharts/exporting"
    },
    shim: {
      highcharts: {
        deps: ['jquery'],exports: "Highcharts"
      },highchartsexport: {
        deps: ['highcharts'],exports: "Exporting"
      },highchartsmore: {
        deps: ['highcharts'],exports: "HighchartsMore"
      }
    },
    waitSeconds: 5
});

require(["application/models/application","jquery"],function(Application, $) {
  $.support.cors = true;
  console.log("Bootstrap");
  $(function(){
      application = new Application();
      application.init();
  });
});