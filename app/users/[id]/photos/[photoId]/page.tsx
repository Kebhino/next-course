import React from "react";

interface Props {
  params: Promise<{
    id: number;
    photoId: number;
  }>;
}
const UserPhotos = async (props: Props) => {
  return (
    <div>UserPhotos {(await props.params).id}
      {(await props.params).photoId}
    </div>
  );
};

export default UserPhotos;
