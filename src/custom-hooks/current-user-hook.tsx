import axios from "axios";
import { useEffect, useState } from "react";
import { User } from "../types";

function useCurrentUser() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(function () {
    function getData() {
      axios
        .get<User>("http://localhost:9090/current-user/")
        .then((res) => setUser(res.data))
        .catch((err) => console.error("axios error", err));
    }
    getData();
  }, []);

  return user;
}

export default useCurrentUser;
