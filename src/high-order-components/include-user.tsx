import axios from "axios";
import { FC, useEffect, useState } from "react";

export function includeUser<T extends object>(
  Component: FC<T>,
  userId: string,
) {
  return (props: T) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      async function getUser() {
        axios
          .get("http://localhost:9090/users/" + userId)
          .then((res) => setUser(res.data))
          .catch((err) => console.error(err));
      }
      getUser().then();
    }, []);

    return <Component {...props} author={user} />;
  };
}
