import { FaPenSquare, FaTrash } from "react-icons/fa";
const TodoCard = ({
  children,
  handleDelete,
  index,
  handleEdit,
  count,
  setCount,
}) => {
  return (
    <li className="card-item">
      <div className="input-text-wrapper">
        <span className="check"></span>
        <input type="checkbox" name="checkbox" id="checkbox" />
        <h5 className="text">{children}</h5>
      </div>

      <div className="btn">
        <button
          onClick={() => {
            handleEdit(index);
            setCount(count - 1);
          }}
        >
          <FaPenSquare className="faEdit" />
        </button>

        <button
          className="del"
          onClick={() => {
            handleDelete(index);
            setCount(count - 1);
          }}
        >
          <FaTrash className="faTrash" />
        </button>
      </div>
    </li>
  );
};

export default TodoCard;
