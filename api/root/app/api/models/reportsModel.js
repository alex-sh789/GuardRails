const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const FindingSchema = new Schema({
    type: {
        type: String,
        required: "Finding type is required",
    },
    ruleId: {
        type: String,
        required: "Finding ruleId is required",
    },
    location: {
        path: {
            type: String,
            required: "Location path is required",
        },
        positions: {
            begin: {
                line: {
                    type: String,
                    required: "Begin line is required",
                }
            },
        },
    },
    metadata: {
        description: {
            type: String
        },
        severity: {
            type: String
        }
    }
});

const ReportSchema = new Schema({
    status: {
        type: String,
        enum: ['Queued', 'In Progress', 'Success', 'Failure'],
        default: 'Queued'
    },
    repositoryName: {
        type: String,
        required: "Repositoury Name shouldn't be empty",
    },
    findings: [FindingSchema],
    queuedAt: {
        type: Number,
        default: Date.getDate,
    },
    scanningAt: {
        type: Number,
        default: Date.getDate,
    },
    finishedAt: {
        type: Number,
        default: Date.getDate,
    },
});

module.exports = mongoose.model('Report', ReportSchema);
