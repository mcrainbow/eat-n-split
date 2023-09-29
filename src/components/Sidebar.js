import React, { useState } from "react";

import FriendsList from "./FriendsList";
import FormAddFriend from "./FormAddFriend";
import Button from "./Button";

function Sidebar({
  onSelection,
  selectedFriend,
  splitedBill,
  friends,
  setFriends,
}) {
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleAddFriend(friend) {
    setFriends((prevState) => [...prevState, friend]);
    setShowAddFriend((prevState) => !prevState);
  }

  function handleShowAddFriendsForm() {
    setShowAddFriend((prevState) => !prevState);
  }

  return (
    <div className="sidebar">
      <FriendsList
        friends={friends}
        onSelection={onSelection}
        selectedFriend={selectedFriend}
        splitedBill={splitedBill}
      />
      {showAddFriend && <FormAddFriend onAddClick={handleAddFriend} />}

      <Button onClick={handleShowAddFriendsForm}>
        {showAddFriend ? "Close" : "Add Friend"}
      </Button>
    </div>
  );
}

export default Sidebar;
