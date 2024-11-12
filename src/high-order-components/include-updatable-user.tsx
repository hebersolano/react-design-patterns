import axios from "axios";
import { FC, useEffect, useState } from "react";

function includeUpdatableUser<T, U>(Component: FC<T>, userId: string) {
  return (props: T) => {
    const [initUser, setInitUser] = useState<U | null>(null);
    const [user, setUser] = useState<U | null>(null);

    useEffect(() => {
      async function getUser() {
        axios
          .get("http://localhost:9090/users/" + userId)
          .then((res) => {
            console.log(res);
            setInitUser(res.data);
            setUser(res.data);
          })
          .catch((err) => console.error(err));
      }
      getUser().then();
    }, []);

    const onChangeUser = (data: U) => {
      setUser((currUser) => ({ ...currUser, ...data }));
    };

    const onResetUser = () => setUser(initUser);

    const onPostUser = () => {
      console.log(userId, user);
      axios
        .post("http://localhost:9090/users/" + userId, { user })
        .then((res) => {
          setInitUser(res.data);
          setUser(res.data);
        })
        .catch((err) => console.error("error axios", err));
    };

    return (
      <Component
        {...props}
        user={user}
        onChangeUser={onChangeUser}
        onPostUser={onPostUser}
        onResetUser={onResetUser}
      />
    );
  };
}

export default includeUpdatableUser;
