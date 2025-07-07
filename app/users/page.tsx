import UserTable from "./new/UserTable";

interface Props {
  searchParams: Promise<{ sortOrder: string }>;
}

const UsersPage = async (props: Props) => {
  console.log("UsersPage", (await props.searchParams).sortOrder);

  return (
    <>
      <h1>Users</h1>
      <UserTable sortOrder={(await props.searchParams).sortOrder} />
    </>
  );
};

export default UsersPage;
