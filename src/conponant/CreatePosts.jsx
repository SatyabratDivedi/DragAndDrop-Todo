import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoReducer";
import { useNavigate } from "react-router-dom";

function CreatePosts() {
  const [value, setValue] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue("");
    navigate("/");
  };
  return (
    <>
      <div className=" h-full w-full flex justify-center mt-20">
        <form
          onSubmit={submitHandler}
          className=" bg-emerald-300  h-[80px] w-[140px] rounded-2xl ">
          <input
            onChange={(e) => setValue(e.target.value)}
            value={value}
            placeholder="create a task"
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

export default CreatePosts;
