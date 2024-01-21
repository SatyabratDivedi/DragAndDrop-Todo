import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateTodo } from "../store/todoReducer";

function UpdatePost() {
  const { id } = useParams();
  const post = useSelector((state) => state.todoReducer.todos);
  const takenPost = post.filter((data) => data.id === id);
  const { task } = takenPost[0];
  const [val, setVal] = useState(task);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(updateTodo({
      id: id,
      updateTask: val
    }));
    navigate('/');
  };

  return (
    <>
      <center>Update Post</center>
      <div className=" h-full w-full flex justify-center mt-20">
        <form
          onSubmit={updateHandler}
          className=" bg-emerald-300  h-[80px] w-[140px] rounded-2xl ">
          <input
            onChange={(e) => setVal(e.target.value)}
            value={val}
            type="text"
            name=""
            id=""
            className=" text-black text-lg px-2 w-[100%] outline-none "
          />
          <div
            className={` text-black rounded-xl flex justify-around text-2xl `}>
            <button type="submit" className="  cursor-pointer ">
              <FaRegEdit />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default UpdatePost;
