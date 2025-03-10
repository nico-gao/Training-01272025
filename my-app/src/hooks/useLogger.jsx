import { useEffect } from "react";

const useLogger = (value) => {
  useEffect(() => {
    console.log("value updated");
  }, [value]);
};

export default useLogger;
