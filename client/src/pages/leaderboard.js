import React, { Component } from 'react';
import Leaderboard from 'react-leaderboard';

const users = [
  { name: 'string', score: 10 },
  { name: 'string', score: 10 },
  { name: 'string', score: 12 },
  { name: 'string', score: 44 },
  { name: 'string', score: 55 },
  { name: 'string', score: 14 },
  { name: 'string', score: 63 },
  { name: 'string', score: 53 },
  { name: 'string', score: 33 },
  { name: 'string', score: 88 },
];
const LeaderBoard = () => {
  return (
    <div className='App'>
      <div className='App-header'>
        <h1>Leader Board</h1>
        <table>
          <tr>
            <th>SN</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
          {users.map((user, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{user.name}</td>
              <td>{user.score}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};
export default LeaderBoard;
