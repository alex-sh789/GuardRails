import config from "react-global-configuration";
import axios from "axios";

const loadReports = function ()  {
    let url = config.get("API_URL");
    return axios.get(url + '/reports')
        .then(function(response) {
            console.log(response);
            return response.data;
        });
};

const submitReport = function (report) {
    return axios.post( config.get("API_URL") + "/reports", report)
        .then(function(resp) {
            return resp.data;
        });
};

export {loadReports, submitReport}
