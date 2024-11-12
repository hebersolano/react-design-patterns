// type ExampleProps = { name: string; email: string };

import UserInfoForm from "./user-form";

// function Example({ name, email }: ExampleProps) {
//   return (
//     <div>
//       <p>Name: {name}</p>
//       <p>Email: {email}</p>
//     </div>
//   );
// }

// const FCWrapped = logProps<ExampleProps>(Example);
// const UserItemWithLoader = includeUser(LargeAuthorItem, "2");

function HocApp() {
  return (
    <div>
      <UserInfoForm />
    </div>
  );
}

export default HocApp;
