
import React, { useState, useEffect, useRef } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import logo from './static/logo';
import alphabets from './utils/alphabets';
import levels from './utils/levels';
import useSound from 'use-sound';
import correct from './static/audio/correct.mp3';

function App() {
  const [words, setWords] = useState(['GOOD', 'BLUE', 'MORE', 'SAVE']);
  const [input, setInput] = useState('');
  const [multiplier, setMultiplier] = useState(1);
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(5000);
  const keyboard = useRef();
  const [play] = useSound(correct);

  let intervalPointer = null;
  useEffect(() => {
    console.log(levels[level]);
    setWords(levels[level]);
    startTimer();
  }, [levels, level]);

  const startTimer = () => {
    intervalPointer = setInterval(() => {
      console.log('before', words);
      const removeWord = words.shift();
      setWords(words.filter((word) => word !== removeWord));
      setInput('');
      setMultiplier(1);
      console.log('After', words);
    }, timer);
  };

  const updateWords = () => {
    if (window.confirm('Do you want to move to the next level?')) {
      setWords(levels[level + 1]);
      setLevel(level + 1);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalPointer);
  };

  const log = (e) => console.log(e);
  const logKey = (e) => {
    console.log(e.key);
  };

  useEffect(() => {
    if (words.length === 0 && level === 2) {
      updateWords();
      stopTimer();
    }
    document.addEventListener('keypress', logKey);

    return document.removeEventListener('keypress', log);
  }, [stopTimer, updateWords]);

  const onKeyPress = (button) => {
    console.log('Button pressed', button);
    showPressedKey(button);
  };

  const showPressedKey = (button) => {
    if (alphabets.big.includes(button)) {
      const key = `[data-skbtn='${button}']`;
      document
        .querySelectorAll('.hg-standardBtn')
        .forEach((element) => element.classList.remove('clicked'));
      document.querySelector(key).classList.add('clicked');
    }
  };
  const onChange = (key) => {
    setInput(key);
    console.log('Input changed', key);
  };

  const onChangeInput = ({ target: { value } }) => {
    console.log(value);
    if (value && words[0]) {
      const length = value.length;
      const letter = value[value.length - 1].toUpperCase();
      const upper = value.toUpperCase();
      console.log(letter);

      if (alphabets.big.includes(letter)) {
        showPressedKey(letter);
      }
      setInput(upper);
      if (upper === words[0].substr(0, length)) {
        console.log('Still Correct');
      } else {
        setMultiplier(1);
        console.log('Error made');
      }
      if (upper === words[0]) {
        stopTimer();
        console.log('Filtering');
        setScore(score + level * 10 * multiplier);
        setMultiplier(multiplier + 1);
        const newWords = words.filter((word) => word !== upper);
        setWords(newWords);
        setInput('');
        console.log(input);
        startTimer();
        if (words.length === 0) {
          alert('Do you want to move to the next level?');
        }
      }

      keyboard.current.setInput(value);
    } else setInput(value);
  };

  return (
    <div className='App'>
      <div>
        <audio controls loop>
          <source src={correct} type='audio/mpeg' />
          Your browser does not support the audio element.
        </audio>
        <audio controls>
          <source src='../static/audio/wrong.mp3' type='audio/mpeg' />
          Your browser does not support the audio element.
        </audio>
      </div>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <div className='statistics'>
          <h5 className='level'>Level: {level} </h5>
          <h3 className='score'>Score: {score}</h3>
          <h5 className='multiplier'>Multiplier x{multiplier} </h5>
        </div>

        <div style={{ color: 'black', width: '80%' }}>
          <div className='slide'>
            {words
              ? words.slice(0, 1).map((word, i) => (
                  <h4 key={i}>
                    {word} <span>{i + 1}</span>
                  </h4>
                ))
              : null}
          </div>
          <input
            value={input}
            placeholder={'Tap'}
            onChange={onChangeInput}
            autoFocus
          />
          <Keyboard
            keyboardRef={(r) => (keyboard.current = r)}
            layoutName={'default'}
            onChange={onChange}
            onKeyPress={onKeyPress}
            layout={{
              default: [
                'Q W E R T Y U I O P',
                ' A S D F G H J K L ',
                ' Z X C V B N M ',
              ],
            }}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
