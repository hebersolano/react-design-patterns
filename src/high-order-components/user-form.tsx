import { Author } from "../components/lists/data/types";
import includeUpdatableUser from "./include-updatable-user";

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

const UserInfoForm = includeUpdatableUser<UserFormProps, User>(UserForm, "3");

export default UserInfoForm;
