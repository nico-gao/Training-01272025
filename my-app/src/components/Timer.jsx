import React, { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(new Date());

  // startInterval
  // idRef.current = setInterval

  // removeInterval
  // clearInterval(idRef.current)

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("timer interval");
      setTime(new Date());
    }, 1000);

    // clean up
    // initial mount: useEffect
    // clean up function
    // rerender: useEffect
    return () => {
      // clear the interval in the previous useEffect
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div>Current time: {`${time.getMinutes()} : ${time.getSeconds()}`}</div>
  );
};

export default Timer;
