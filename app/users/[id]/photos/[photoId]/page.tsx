import React from "react";

interface Props {
  params: {
    id: number;
    photoId: number;
  };
}
const UserPhotos = (props: Props) => {
  return (
    <div>
      UserPhotos {props.params.id}
      {props.params.photoId}
    </div>
  );
};

export default UserPhotos;
