import React from "react";

interface Props {
  params: {
    id: number;
  };
}

const UserDetailPage = (props: Props) => {
  return <div>UserDetailPage {props.params.id}</div>;
};

export default UserDetailPage;
