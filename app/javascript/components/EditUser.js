import React from "react";

const EditUser = (props) => {
  return (
    <div>
      <h1>Form</h1>
      <form action={`/users/${props.user.id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <p>Name</p>
        <input defaultValue={props.user.name} name="user[name]" />
        <p>Age</p>
        <input defaultValue={props.user.age} name="user[age]" />
        <button type="submit">update</button>
      </form>
      <a href="/">back</a>
    </div>
  );
};

export default EditUser;