const Trajectory = require("../models/trajectory.model.js");

const findAll = (req, res) => {
    //res.send("this is crap");
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
