import axios from "axios";
import { useEffect, useState } from "react";
import { User } from "../types";

function useUser(id: string) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(
    function () {
      function getData() {
        axios
          .get<User>("http://localhost:9090/users/" + id)
          .then((res) => setUser(res.data))
          .catch((err) => console.error("axios error", err));
      }
      getData();
    },
    [id],
  );

  return user;
}

export default useUser;
