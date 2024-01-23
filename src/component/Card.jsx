import React, { useRef } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../store/todoReducer";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Timmer from "./Timmer";

function Card() {
  const receveTodo = useSelector((store) => store.todoReducer.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const ref = useRef();
  return (
    <>
      <div ref={ref} className=" h-full w-full">
        {receveTodo.length === 0 ? (
          <center>
            No any post....
            <center>please create</center>
          </center>
        ) : (
          <div className=" flex gap-2 flex-wrap">
            {receveTodo.map((tod) => (
              <motion.div
                drag
                dragConstraints={ref}
                whileDrag={{ scale: 1.3 }}
                dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
                key={tod.id}
                className=" main bg-emerald-300  h-[140px] w-[120px] rounded-2xl overflow-hidden">
                <div className=" mainDo text-sm duration-300">
                  <Timmer />
                  <div
                    className={` mainDo  text-lg bg-white text-black rounded-lg flex duration-300 justify-center items-center overflow-hidden p-1`}>
                    {tod.task}
                  </div>
                </div>

                <div
                  className={` text-black h-full rounded-xl flex justify-around text-2xl translate-y-2 `}>
                  <div
                    onClick={() => {
                      navigate(`/UpdatePost/${tod.id}`);
                    }}
                    className="  cursor-pointer p-1 ">
                    <FaRegEdit />
                  </div>
                  <div className=" h-[25px] w-[1px] bg-white translate-y-1"></div>
                  <div
                    onClick={() => dispatch(deleteTodo(tod.id))}
                    className=" cursor-pointer p-1">
                    <MdOutlineDeleteForever />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Card;
