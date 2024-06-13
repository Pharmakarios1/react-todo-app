const TodoCard = ({ children }) => {
  return (
    <li className="card-item">
      <div className="input-text-wrapper">
        <input type="checkbox" name="" id="checkbox" />
        <h5 className="text">{children}</h5>
      </div>

      <div className="btn">
        <button>Edit</button>
        <button className="del">Del</button>
      </div>
    </li>
  );
};

export default TodoCard;
