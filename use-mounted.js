import { useEffect } from "react";

function useMounted(callback) {
  useEffect(() => {
    callback();
  }, []);
}

export default useMounted;
