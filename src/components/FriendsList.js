import FriendItem from "./FriendItem";

function FriendsList({ friends, onSelection, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => {
        return (
          <FriendItem
            key={friend.id}
            friend={friend}
            onSelection={onSelection}
            selectedFriend={selectedFriend}
          />
        );
      })}
    </ul>
  );
}

export default FriendsList;
