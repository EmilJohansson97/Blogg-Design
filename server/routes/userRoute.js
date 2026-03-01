const router = require("express").Router();
const db = require("../models/");
const validate = require("validate.js");
const postService = require("../services/postService");

const constraints = {
  email: {
    length: {
      minimum: 4,
      maximum: 200,
      tooShort: "^E-postadressen måste vara minst %{count} tecken lång",
      tooLong: "^E-postadressen får inte vara längre än %{count} tecken",
    },
    email: {
      message: "^E-postadressen måste vara giltig",
    },
  },
  username: {
    length: {
      minimum: 3,
      maximum: 50,
      tooShort: "^Användarnamnet måste vara minst %{count} tecken långt",
      tooLong: "^Användarnamnet får inte vara längre än %{count} tecken",
    },
  },
  imageUrl: {
    url: {
      message: "^Bild-URL måste vara giltig",
    },
  },
};

router.get("/:id/posts", (req, res) => {
  const id = req.params.id;
  postService.getByAuthor(id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.get("/", (req, res) => {
  db.user.findAll().then((result) => {
    res.send(result);
  });
});

router.post("/", (req, res) => {
  const user = req.body;
  const InvalidData = validate(user, constraints);
  if (InvalidData) {
    res.status(400).json(InvalidData);
  } else {
    db.user.create(user).then((result) => {
      res.send(result);
    });
  }
});

router.put("/", (req, res) => {
  const user = req.body;
  const InvalidData = validate(user, constraints);
  const id = req.body.id;
  if (InvalidData || !id) {
    res.status(400).json(InvalidData || "ID är obligatoriskt");
  } else {
    db.user
      .update(user, {
        where: { id: user.id },
      })
      .then((result) => {
        res.send(result);
      });
  }
});

router.delete("/", (req, res) => {
  const id = req.body.id;
  if (!id) {
    res.status(400).json("ID är obligatoriskt");
  } else {
    db.user
      .destroy({
        where: { id: req.body.id },
      })
      .then((result) => {
        res.json(`Inlägget raderades ${result}`);
      });
  }
});
module.exports = router;
