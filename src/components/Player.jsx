import { useState, useRef } from "react";
export default function Player() {
  const activePlayer = useRef();
  const [playerName, setPlayerName] = useState(null);

  function handleClick() {
    setPlayerName(activePlayer.current.value);
    activePlayer.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? 'Unknown entity'}</h2>
      <p>
        <input ref={activePlayer} type="text"/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
