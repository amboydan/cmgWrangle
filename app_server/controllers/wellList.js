const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};
if(process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://cmgworking.herokuapp.com';
}

const homeList = (req, res) => {
    res.render('index', { 
        pageHeader: {
            title: 'CMG Prep',
            strapLine: 'Get Trajectories, Perforations, Production files ready for import to CMG.'
        },
        wells:[
            {Well: 'Well_1'},
            {Well: 'Well_2'},
            {Well: 'Well_3'}
        ]
    });
}

module.exports = {
    homeList
};