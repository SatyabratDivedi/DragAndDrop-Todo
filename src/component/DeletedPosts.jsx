import React from "react";
import { useSelector } from "react-redux";

function DeletedPosts() {
  const receivedDeletedTodos = useSelector(
    (store) => store.todoReducer.deletedTodos
  );
  return (
    <>
      <center>deleted Todos-{receivedDeletedTodos.length}</center> <hr />
      <div className=" flex gap-2 flex-wrap m-2">
        {receivedDeletedTodos.map((item) => (
          <div key={item.id} className=" text-black m-5 bg-emerald-300  h-[100px] w-[150px] rounded-2xl">
            {item.task}
          </div>
        ))}
      </div>
    </>
  );
}

export default DeletedPosts;
