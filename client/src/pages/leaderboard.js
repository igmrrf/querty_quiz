import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';

const LeaderBoard = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    axios.get('api/games').then((res) => {
      setGames(res.data);
    });
    console.log('edited');
  }, []);
  return (
    <div className='App'>
      <div className='App-header'>
        <h1>Leader Board</h1>
        <table className='leaderboard'>
          <thead>
            <tr>
              <th>SN</th>
              <th>Username</th>
              <th>Average Score</th>
              <th>Max Level</th>
              <th>Games Played</th>
            </tr>
          </thead>
          <tbody>
            {games.length > 0
              ? games.map((game, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{game.username}</td>
                    <td>{game.average_score}</td>
                    <td>{game.max_level}</td>
                    <td>{game.games_played}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default LeaderBoard;
