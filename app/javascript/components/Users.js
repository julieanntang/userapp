import React from "react";

const Users = (props) => {
  return (
    <div>
      <h1>Users Page</h1>
      <p>{new Date().toGMTString()}</p>
      {props.users.map((user) => {
        return (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.age}</p>
        </div>
        );
      })}
    </div>
  );
};

export default Users;