import React from 'react';




const Scoreboard = ({ scoreboard }) => {
  return (
    <div>
      <h2>Scoreboard</h2>
      <table>
        <thead>
          <tr>
            <th>Nickname</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {scoreboard.map((entry, index) => (
            <tr key={index}>
              <td>{entry.nickname}</td>
              <td>{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Scoreboard;