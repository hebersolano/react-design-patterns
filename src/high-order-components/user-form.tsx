import { Author } from "../components/lists/data/types";
import includeUpdatableResource from "./include-updatable-resource";

type User = Author;

type UserFormProps = {
  user?: User;
  onChangeUser?: (data: Partial<User>) => void;
  onPostUser?: () => void;
  onResetUser?: () => void;
};

function UserForm(props: UserFormProps) {
  const { user, onChangeUser, onPostUser, onResetUser } = props;
  if (!user) return null;

  return (
    <form>
      <div>
        <label>
          Name:
          <input
            className="border"
            type="text"
            value={user.name}
            onChange={(e) => onChangeUser!({ name: e.target.value })}
          />
        </label>
      </div>
      <button onClick={onPostUser!}>Save</button>
      <button onClick={onResetUser!}>Reset</button>
    </form>
  );
}

const UserInfoForm = includeUpdatableResource<UserFormProps, User>(
  UserForm,
  "http://localhost:9090/users/3",
  "user",
);

export default UserInfoForm;
