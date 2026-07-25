function ListofPlayers() {

  const players = [
    { name: "Virat Kohli", score: 95 },
    { name: "Rohit Sharma", score: 82 },
    { name: "Shubman Gill", score: 66 },
    { name: "KL Rahul", score: 71 },
    { name: "Hardik Pandya", score: 59 },
    { name: "Ravindra Jadeja", score: 80 },
    { name: "R Ashwin", score: 65 },
    { name: "Mohammed Shami", score: 72 },
    { name: "Jasprit Bumrah", score: 55 },
    { name: "Kuldeep Yadav", score: 61 },
    { name: "Mohammed Siraj", score: 74 }
  ];

  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>

      <h2>List of Players</h2>

      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>

      <h2>Players with Score Below 70</h2>

      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default ListofPlayers;