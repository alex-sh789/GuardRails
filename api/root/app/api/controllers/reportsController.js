
const mongoose = require('mongoose'),
    Report = mongoose.model('Report');


exports.list_reports = function(req, resp) {
    Report.find({}, function(err, report) {
        if(err) {
            resp.send(err)
        }

        resp.json(report);
    });
};


exports.create_report = function(req, resp) {
    let new_report = new Report(req.body);

    new_report.save(function(err, report) {
        if(err) {
            resp.send(err);
        }

        resp.json(report)
    });
};

exports.get_report = function(req, resp) {
    Report.findOneById(req.params.reportId, function(err, report) {
        if(err) {
            resp.send(err);
        }

        resp.json(report);
    });
};

exports.delete_report = function(req, resp) {
    Report.remove({ _id: req.params.reportId}, function(err, report) {
        if(err) {
            resp.send(err);
        }

        resp.json({"status": "done"});
    });
};
