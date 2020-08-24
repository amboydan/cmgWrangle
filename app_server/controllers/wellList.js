const request = require('request');
const { response } = require('../../app');
const apiOptions = {
    server: 'http://localhost:3000'
};
if(process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://cmgwrangle.herokuapp.com';
}

const renderHomepage = (req, res, responseBody) => {
    res.render('index2', {
        pageHeader: {
            title: 'CMG Prep',
            strapLine: 'Get Trajectories, Perforations, Production files ready for import to CMG.'
        },
        wells: responseBody
    });
}

const homeList = (req, res) => {
    const path = '/api/allWells';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
        qs:{}
    };
    request(
        requestOptions,
        (err, response, body) => {
            renderHomepage(req, res, body);
        }
    )
}


// const homeList = (req, res) => {
//     res.render('index', { 
//         pageHeader: {
//             title: 'CMG Prep',
//             strapLine: 'Get Trajectories, Perforations, Production files ready for import to CMG.'
//         },
//         wells:[
//             {Well: 'Well_1'},
//             {Well: 'Well_2'},
//             {Well: 'Well_3'}
//         ]
//     });
// }

module.exports = {
    homeList
};