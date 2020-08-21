const index = (req, res) => {
    res.render('index', { title: 'CMG Prep'});
};

module.exports = {
    index
};