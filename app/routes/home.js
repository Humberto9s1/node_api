module.exports = function(app){

    app.get('/', function(req, res){
        app.app.controllers.HomeController.dashboards(app, req, res);
    });
};