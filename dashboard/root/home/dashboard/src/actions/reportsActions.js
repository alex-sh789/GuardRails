export const reportsInitialState = {
    reports: []
};

export const reportsActions = {
    loadReports: (state)=>(data)=>{
      return {reports: [...state.reports, ...data]}
    },
    addReport: (state)=>(data)=>{
      return {reports: [...state.reports, data]}
    },
};