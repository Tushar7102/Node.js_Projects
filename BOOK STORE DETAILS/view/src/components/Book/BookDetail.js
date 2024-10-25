import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BookDetail = () => {
  const [inputs, setInputs] = useState({});
  const id = useParams().id;
  const [checked, setChecked] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:8080/user/product/${id}`)
        .then((res) => res.data)
        .then((data) => {
          setInputs(data.book);
          setChecked(data.book.available); // Set the checked state based on fetched data
        });
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:8080/user/product/${id}`, {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/books"));
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="form-container">
      {inputs && (
        <form onSubmit={handleSubmit}>
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            value={inputs.name}
            onChange={handleChange}
            className="form-input"
            required
          />
          <label className="form-label">Author</label>
          <input
            type="text"
            name="author"
            value={inputs.author}
            onChange={handleChange}
            className="form-input"
            required
          />
          <label className="form-label">Description</label>
          <textarea
            name="description"
            value={inputs.description}
            onChange={handleChange}
            className="form-input"
            required
          />
          <label className="form-label">Price</label>
          <input
            type="number"
            name="price"
            value={inputs.price}
            onChange={handleChange}
            className="form-input"
            required
          />
          <label className="form-label">Image URL</label>
          <input
            type="text"
            name="image"
            value={inputs.image}
            onChange={handleChange}
            className="form-input"
            required
          />
          <div className="checkbox-container">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
              className="checkbox"
            />
            <label className="checkbox-label">Available</label>
          </div>
          <button type="submit" className="submit-button">
            Update Book
          </button>
        </form>
      )}
    </div>
  );
};

export default BookDetail;
