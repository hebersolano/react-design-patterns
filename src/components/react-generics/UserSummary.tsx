import { Summary } from "./Summary";

interface User {
  id: number;
  name: string;
  email: string;
}

const userData: User = {
  id: 1,
  name: "John Doe",
  email: "johndoe@example.com",
};

function UserSummary() {
  return <Summary<User, "name"> data={userData} property="name" />;
}

export default UserSummary;
