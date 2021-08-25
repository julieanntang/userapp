import React from "react";

const NewUser = () => {
  return (
    <div>
      <h1>Form</h1>
      <form action="/users" method="post">
        <p>Name</p>
        <input name="user[name]" />
        <p>Age</p>
        <input name="user[age]" />
        <button type="submit">add</button>
      </form>
      <a href="/">back</a>
    </div>
  );
};

export default NewUser;