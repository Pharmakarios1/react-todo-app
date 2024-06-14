import { FaPenSquare, FaTrash } from "react-icons/fa";
const TodoCard = ({ children, handleDelete, index, handleEdit }) => {
  return (
    <li className="card-item">
      <div className="input-text-wrapper">
        <input type="checkbox" name="checkbox" id="checkbox" />
        <h5 className="text">{children}</h5>
      </div>

      <div className="btn">
        <button
          onClick={() => {
            handleEdit(index);
          }}
        >
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
