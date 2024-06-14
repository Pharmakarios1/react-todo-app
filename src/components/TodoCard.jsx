import { FaPenSquare, FaTrash } from "react-icons/fa";
const TodoCard = ({ children, handleDelete, index }) => {
  return (
    <li className="card-item">
      <div className="input-text-wrapper">
        <input type="checkbox" name="" id="checkbox" />
        <h5 className="text">{children}</h5>
      </div>

      <div className="btn">
        <button>
          <FaPenSquare className="faEdit" />
        </button>

        <button
          className="del"
          onClick={() => {
            handleDelete(index);
          }}
        >
          <FaTrash className="faTrash" />
        </button>
      </div>
    </li>
  );
};

export default TodoCard;
