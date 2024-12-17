const express = require("express");
const {
  notesCreate,
  notesDelete,
  getNotesByuser,
  getsinglenote,
  notesupdate,
  getallnotesByAdmin,
  deleteallnotesByAdmin,
} = require("../controller/notes.controller");
const isAuth = require("../middleware/Auth");
const upload = require("../middleware/multer");
const isAdmin = require("../middleware/CheackRole");

const notesRouter = express.Router();

notesRouter.post("/create", isAuth, notesCreate);

notesRouter.delete("/delete/:notesId", isAuth, notesDelete);

notesRouter.get("/getallnotes/:userId", isAuth, getNotesByuser);

notesRouter.get("/getsinglenotes/:notesId", isAuth, getsinglenote);

notesRouter.patch(
  "/update/:notesId",
  isAuth,
  upload.single("file"),
  notesupdate
);

notesRouter.get("/getallnotes", isAuth, isAdmin, getallnotesByAdmin);

notesRouter.delete("/deleteallnotes", isAuth, isAdmin, deleteallnotesByAdmin);

module.exports = notesRouter;
