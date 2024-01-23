import React from "react";
import { useStopwatch } from "react-timer-hook";
import { MdOutlineRestartAlt, MdMotionPhotosPaused } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";

function MyStopwatch() {
  const stopwatchOffset = new Date();
  stopwatchOffset.setSeconds(stopwatchOffset.getSeconds() + 0);
  const { seconds, minutes, hours, isRunning, start, pause, reset } =
    useStopwatch({
      autoStart: true,
      offsetTimestamp: stopwatchOffset,
    });
  const hourTime = hours < 10 ? `0${hours}` : `${hours}`;
  const secondTime = seconds < 10 ? `0${seconds}` : `${seconds}`;
  const minuteTime = minutes < 10 ? `0${minutes}` : `${minutes}`;

  return (
    <center className=" bg-emerald-300 flex justify-around items-center p-2">
      {isRunning ? (
        <span className=" blinking">
          <GoDotFill />
        </span>
      ) : (
        <span className=" ">
          <GoDotFill />
        </span>
      )}
      <div style={{ fontSize: "12px", color:'black' }}>
        <span>{hourTime}</span>:<span>{minuteTime}</span>:
        <span>{secondTime}</span>
      </div>
      <div className=" flex ">
        <button
          className=" text-gray-700 active:text-white text-xl "
          onClick={start}>
          <MdOutlineRestartAlt />
        </button>
        <button
          className=" text-blue-800 active:text-white text-xl "
          onClick={pause}>
          <MdMotionPhotosPaused />
        </button>
        <button
          className=" text-red-600 active:text-white text-xl "
          onClick={reset}>
          <CiCircleRemove />
        </button>
      </div>
    </center>
  );
}

export default function Timmer() {
  return (
    <div>
      <MyStopwatch />
    </div>
  );
}
