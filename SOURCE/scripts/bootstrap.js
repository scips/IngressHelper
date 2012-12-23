require.config({
    paths: {
        "jquery": "vendor/jquery/jquery",
        "depend": "vendor/require/plugins/depend",
        "underscore": "vendor/underscore/underscore"
    },
    shim: {
      'vendor/jquery/jquery.flot.time': ['vendor/jquery/jquery.flot','jquery'],
      'vendor/jquery/jquery.flot':['jquery']
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