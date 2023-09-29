import React, { useState } from "react";
import Button from "./Button";

function FormAddFriend({ onAddClick }) {
  const [name, setName] = useState("");
  const [image, setImg] = useState("https://i.pravatar.cc/48");

  function handleClickAddFriend(e) {
    e.preventDefault();

    if (!image || !name) return;

    onAddClick({ name, image, id: Date.now(), balance: 0 });
  }
  return (
    <form
      className="form-add-friend"
      action="submit"
      onSubmit={handleClickAddFriend}
    >
      <label style={{ fontSize: "14px", fontWeight: "bold" }}>
        👋Friend name
      </label>
      <input
        type="text"
        placeholder="Friend name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🖼️Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImg(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;
