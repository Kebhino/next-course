import Link from "next/link";

import { Suspense } from "react";
import UserTable from "./UserTable";

interface Props {
  searchParams: Promise<{ sortOrder: string }>;
}

const UsersPage = async (props: Props) => {
  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
  await delay(3000);

  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn">
        {" "}
        New User
      </Link>
      <Suspense fallback={<div>Loading...</div>}>
        <UserTable sortOrder={(await props.searchParams).sortOrder} />
      </Suspense>
    </>
  );
};

export default UsersPage;
