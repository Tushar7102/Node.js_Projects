import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Book = (props) => {
  const history = useNavigate();
  const { _id, name, author, description, price, image } = props.book;

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:8080/user/product/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/books"));
  };

  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <article className="card-author">By {author}</article>
      <h2 className="card-title">{name}</h2>
      <p className="card-description">{description}</p>
      <h2 className="card-price">Rs {price}</h2>
      <div className="card-buttons">
        <Link to={`/books/${_id}`} className="button update-button">
          Update
        </Link>
        <button onClick={deleteHandler} className="button delete-button">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Book;
