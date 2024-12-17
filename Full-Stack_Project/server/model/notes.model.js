const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema(
  {
    title: String,
    body: String,
    noteImage: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXJr-fGkiy1DE5A0JNOkcmCNGcXuQXdzENZA&s",
    },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const NoteModel = mongoose.model("notes", notesSchema);

module.exports = NoteModel;
