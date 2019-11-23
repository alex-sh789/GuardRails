module.exports = function(app) {
    const reportsCtrl = require('../controllers/reportsController');

    //reports routes:
    app.route('/reports')
        .get(reportsCtrl.list_reports)
        .post(reportsCtrl.create_report);


    app.route('/reports/:reportId')
        .get(reportsCtrl.get_report)
        .delete(reportsCtrl.delete_report);
};
