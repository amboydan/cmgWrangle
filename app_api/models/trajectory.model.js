const sql = require("./db.js");

// constructor
const Trajectory = function(trajectory) {
  this.API = trajectory.API;
  this.Well = trajectory.Well;
  this.DEPTHMD = trajectory.DEPTHMD;
  this.TVD = trajectory.TVD;
  this.XCOORD = trajectory.XCOORD;
  this.YCOORD = trajectory.YCOORD;
};

Trajectory.getAll = result => {
    sql.query("SELECT distinct(Well), API FROM trajectories", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      //console.log("wellName: ", res);
      result(null, res);
    });
  };

  module.exports = Trajectory;