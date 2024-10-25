import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const AddBook = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    price: "",
    author: "",
    image: "",
  });
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    await axios.post("http://localhost:8080/user/product", {
      name: String(inputs.name),
      author: String(inputs.author),
      description: String(inputs.description),
      price: Number(inputs.price),
      image: String(inputs.image),
      available: Boolean(checked),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/books"));
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label className="form-label">Name</label>
      <input
        type="text"
        value={inputs.name}
        onChange={handleChange}
        name="name"
        className="form-input"
      />

      <label className="form-label">Author</label>
      <input
        type="text"
        value={inputs.author}
        onChange={handleChange}
        name="author"
        className="form-input"
      />

      <label className="form-label">Description</label>
      <textarea
        value={inputs.description}
        onChange={handleChange}
        name="description"
        className="form-input"
      />

      <label className="form-label">Price</label>
      <input
        type="number"
        value={inputs.price}
        onChange={handleChange}
        name="price"
        className="form-input"
      />

      <label className="form-label">Image</label>
      <input
        type="text"
        value={inputs.image}
        onChange={handleChange}
        name="image"
        className="form-input"
      />

      <label className="form-label">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="checkbox"
        />
        Available
      </label>

      <button type="submit" className="submit-button">
        Add Book
      </button>
    </form>
  );
};

export default AddBook;
