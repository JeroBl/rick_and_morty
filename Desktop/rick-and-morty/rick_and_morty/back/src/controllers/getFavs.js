const { Favorite, User} = require("../DB_connection");

const getFavs = async (req, res) => {
    const { idUser} = req.query;
    try {
        const favs = await Favorite.findAll({
            incluide: [{ model: User, where: { id: idUser}}],
        });
        res.status(200).json(favs);
    } catch (error) {
        res.status(500).json({ messagge: error});
    }
};

module.exports = { getFavs };