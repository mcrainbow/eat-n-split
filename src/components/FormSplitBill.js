import React, { useState } from "react";
import Button from "./Button";

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form action="submit" className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰Bill value:</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />

      <label>🧍‍♂️Your expense:</label>
      <input
        type="number"
        value={paidByUser}
        onChange={(e) => setPaidByUser(e.target.value)}
      />

      <label>🧑‍🤝‍🧑{selectedFriend.name}'s expense:</label>
      <input
        type="number"
        disabled="disabled"
        value={Number(bill) - Number(paidByUser)}
      />

      <label>🤑Who is paying the bill?</label>
      <select onChange={(e) => setWhoIsPaying(e.target.value)}>
        <option value="You">You</option>
        <option value={selectedFriend.name}>{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
export default FormSplitBill;
