const url = require('url');
const Trajectory = require("../models/trajectory.model.js");

const findAll = (req, res) => {
    Trajectory.getAll((err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || "Some error occured while retrieving trajectories"
            });
        else res.send(data);
    });
};

module.exports = {
    findAll
};
