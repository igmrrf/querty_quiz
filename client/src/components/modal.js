import React, { useState } from 'react';
import axios from '../utils/axios';
import { Redirect } from 'react-router-dom';

const Modal = ({ score, level, hideModal, show }) => {
  const [username, setUsername] = useState('');
  const [id, setId] = useState(null);
  const average_score = score / level;

  const handleShow = () => {
    hideModal();
  };
  const handleInput = ({ target: { value } }) => {
    console.log(value);
    setUsername(value);
  };
  const handleSave = async () => {
    console.log('saving');
    try {
      const savedData = await axios
        .post('/api/games', {
          games_played: 1,
          average_score,
          max_level: level,
          username,
        })
        .then((res) => res.data);
      console.log(savedData);
      if (savedData._id) {
        setId(savedData._id);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  if (id) {
    return <Redirect to={'/leaderboard'} />;
  }
  return (
    <React.Fragment>
      {show ? (
        <div className={'modal'}>
          <div className='modal-main'>
            <button onClick={handleShow} className={'close-button'}>
              X
            </button>
            <h2 style={{ color: '#4268ba' }}>Game Over</h2>
            <h5>Score: {score}</h5>
            <h5>Level: {level}</h5>
            <h5>Average Score: {score / level}</h5>
            <div className={'input-div'}>
              <label htmlFor={'input-field'}>Enter Username</label>
              <input
                onChange={handleInput}
                placeholder={'Enter your username to save'}
                className={'username-input'}
              />
              <button
                className={'save-button'}
                disabled={username.length <= 4}
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default Modal;
