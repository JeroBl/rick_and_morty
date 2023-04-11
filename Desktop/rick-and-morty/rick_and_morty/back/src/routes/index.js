const { Router } = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
let favs = require("../utils/favs");

const { postFav: addFav } = require("../controllers/postFav");
const { getFavs} = require("../controllers/getFavs");
const { deleteFav } = require("../controllers/deleteFav");
const { postUser } = require("../controllers/postUser");
const { login } = require("../controllers/login");

const router = Router();

router.get("/onsearch/:id", getCharById);

router.get("/detail/:id", getCharDetail);



// router.post("/rickandmorty/fav", (req, res) => {
//   favs.push(req.body);
//   res.status(200).json({ status: "ok" });
// });

router.post("/fav", addFav);
router.get("/fav", getFavs);
router.delete("/fav/:id", deleteFav);

router.get("/login", login);
router.post("/login", postUser);


// router.get("/rickandmorty/fav", (req, res) => {
//   res.status(200).json(favs);
// });

// router.delete("/rickandmorty/fav/:id", (req, res) => {
//   const { id } = req.params;
//   favs = favs.filter((char) => char.id != id);
//   res.status(200).json({ status: "ok" });
// });

module.exports = router;
