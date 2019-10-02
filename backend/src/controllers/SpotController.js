const User = require("../models/User");
const Spot = require("../models/Spot");

module.exports = {
  async index(req, res) {
    const { tech } = req.query;

    const spots = await Spot.find({ techs: tech });

    return res.json(spots);
  },
  async store(req, res) {
    const { filename } = req.body;
    const { company, techs, price } = req.body;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);
    console.log(user);
    if (!user) {
      return res.status(400).json({ error: "O Usuario não existe" });
    }

    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      company,
      techs: techs.split(",").map(tech => tech.trim()),
      price
    });
    return res.json(spot);
  }
};