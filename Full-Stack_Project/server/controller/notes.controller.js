const NoteModel = require("../model/notes.model");

const notesCreate = async (req, res) => {
  const { title, body } = req.body;

  if (!title || !body) {
    return res.status(400).send({ massage: "plase fill in all fields" });
  }
  try {
    console.log(req.user);
    await NoteModel.create({ title, body, userId: req.user._id });
    res.status(200).send({ massage: "note create suceessfully" });
  } catch (error) {
    res.status(400).send({ massage: error });
  }
};

const notesDelete = async (req, res) => {
  const { notesId } = req.params;
  const isExistnotes = await NoteModel.findById(notesId);
  if (!isExistnotes) {
    return res.status(400).json({ massage: "notes not Exist" });
  }
  if (isExistnotes.userId != req.user._id) {
    return res
      .status(400)
      .json({ massage: "you have note permision to delete note" });
  }
  // console.log(isExistnotes)
  await NoteModel.findByIdAndDelete(notesId);
  return res.status(200).json({ massage: "notes deleted successfully" });
};

const getNotesByuser = async (req, res) => {
  const { userId } = req.params;
  try {
    if (userId != req.user._id) {
      return res
        .status(400)
        .json({ massage: "you have note permision to delete note" });
    }
    const allusernootes = await NoteModel.find({ userId: userId });
    if (allusernootes.length === 0) {
      return res.status(400).json({ massage: "you have no notes yet" });
    }
    console.log(allusernootes);
    res.status(200).json(allusernootes);
  } catch (error) {
    return res.status(400).json({ massage: error });
  }
};

const getsinglenote = async (req, res) => {
  const { notesId } = req.params;
  try {
    const isExistnotes = await NoteModel.findById(notesId);
    if (!isExistnotes) {
      return res.status(400).json({ massage: "notes not Exist" });
    }
    if (isExistnotes.userId !== req.user._id) {
      return res
        .status(400)
        .json({ massage: "you have note permision to delete note" });
    }
    res.status(200).json(isExistnotes);
  } catch (error) {
    return res.status(400).json({ massage: error });
  }
};

const notesupdate = async (req, res) => {
  const { notesId } = req.params;

  try {
    const isExistnotes = await NoteModel.findById(notesId);
    if (!isExistnotes) {
      return res.status(400).json({ massage: "notes not Exist" });
    }
    if (isExistnotes.userId != req.user._id) {
      return res
        .status(400)
        .json({ massage: "you have note permision to update note" });
    }
    if (req.file) {
      await NoteModel.findByIdAndUpdate(notesId, {
        ...req.body,
        noteImage: req.file.originalname,
      });
      res.status(200).json({ massage: "Notes Update Successfully" });
    } else {
      await NoteModel.findByIdAndUpdate(notesId, req.body);
      res.status(200).json({ massage: "Notes Update Successfully" });
    }
  } catch (error) {
    res.status(400).json({ massage: error });
  }
};

const getallnotesByAdmin = async (req, res) => {
  // console.log(req.user.role)
  try {
    const totalnotes = await NoteModel.find();
    if (totalnotes.length == 0) {
      return res.status(400).json({ massage: "No Notes Exist" });
    }
    res.status(200).json({ message: "notes Get Successfully", totalnotes });
  } catch (error) {
    res.status(400).json({ massage: error });
  }
};

const deleteallnotesByAdmin = async (req, res) => {
  try {
    await NoteModel.deleteMany({});
    res.status(200).json({ massage: "Notes Delete Successfully" });
  } catch (error) {
    res.status(400).json({ massage: error });
  }
};

module.exports = {
  notesCreate,
  notesDelete,
  getNotesByuser,
  getsinglenote,
  notesupdate,
  getallnotesByAdmin,
  deleteallnotesByAdmin,
};
