import React from "react";

const Users = (props) => {
  return (
    <div>
      <h1>Users Page</h1>
      <p>{new Date().toGMTString()}</p>
      <a href="/users/new">create new user</a>
      {props.users.map((user) => {
        return (
        <div style={{ margin: "20px", border: "1px solid" }} key={user.id}>
          <p>ID: {user.id}</p>
          <p>{user.name}</p>
          <p>{user.age}</p>
          <div>
            <a href={`/users/${user.id}`}>show user</a>
            <a href={`/users/${user.id}/edit`}>edit user</a>
            <a href={`/users/${user.id}`} data-method="delete">delete user</a>
          </div>
        </div>
        );
      })}
    </div>
  );
};

export default Users;