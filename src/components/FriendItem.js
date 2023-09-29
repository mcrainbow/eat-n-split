import Button from "./Button";

function FriendItem({ friend, onSelection, selectedFriend }) {
  return (
    <li className={selectedFriend?.id === friend.id ? "selected" : ""}>
      <img src={friend.image} alt="" />
      <h3>{friend.name}</h3>
      {friend.balance === 0 || isNaN(friend.balance) ? (
        <p>You and {friend.name} are even</p>
      ) : friend.balance > 0 ? (
        <p className="green">
          {friend.name} owes you {friend.balance}$
        </p>
      ) : (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}
      <Button onClick={() => onSelection(friend)}>
        {selectedFriend?.id === friend.id ? "Close" : "Select"}
      </Button>
    </li>
  );
}

export default FriendItem;
