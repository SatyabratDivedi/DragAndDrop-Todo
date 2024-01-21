import React from "react";
import { MdCreateNewFolder, MdFolderDelete } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
function App({ ref }) {
  return (
    <>
      <div className=" bg-zinc-800  w-[100vw] h-[100vh] z-20 relative">
        <div className=" tracking-tighter bg-zinc-800  w-[100vw] h-[100vh] z-20 absolute flex text-gray-500 items-center justify-center text-8xl font-bold">
          CRUD
        </div>
        <div className=" absolute top-1 h-[100vh] w-[100vw] text-4xl z-30">
          <nav className=" h-[10%] flex text-black items-center justify-between bg-emerald-300 px-3">
            <NavLink to={"/"} className=" tracking-tighter">
              Floating Card
            </NavLink>
            <div className=" flex gap-2">
              <NavLink
                to={"Deleted-Posts"}
                className=" tracking-tighter cursor-pointer">
                <MdFolderDelete />
              </NavLink>
              <NavLink
                to={"Create-Posts"}
                className=" tracking-tighter cursor-pointer">
                <MdCreateNewFolder />
              </NavLink>
            </div>
          </nav>
          <div ref={ref} className=" h-[90%] m-3">
            <Outlet />
          </div>
        </div>
      </div>

      {/* for timer this section */}
      
    </>
  );
}

export default App;
