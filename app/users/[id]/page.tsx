import React from "react";

interface Props {
  params: Promise<{
    id: number;
  }>;
}

const UserDetailPage = async (props: Props) => {
  return <div>UserDetailPage {(await props.params).id}</div>;
};

export default UserDetailPage;
