import UserTable from "./new/UserTable";

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = async (props: Props) => {
  console.log("UsersPage", props.searchParams.sortOrder);

  return (
    <>
      <h1>Users</h1>
      <UserTable sortOrder={props.searchParams.sortOrder} />
    </>
  );
};

export default UsersPage;
