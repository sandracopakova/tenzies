import React from "react";

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };
  return (
    <div className="die__card" style={styles} onClick={props.holdDice}>
      <div className="die__num">{props.value}</div>
    </div>
  );
}
