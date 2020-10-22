import React, { Component } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import Logo from '../components/logo';
import Stats from '../components/statistics';
import alphabets from '../utils/alphabets';
import Sound from '../components/sound';
import axios from '../utils/axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leves: null,
      words: [''],
      input: '',
      multiplier: 1,
      score: 0,
      level: 1,
      timer: 2500,
      left: false,
      right: false,
      multiplied: false,
      leveled: false,
      gameOver: false,
      loading: false,
    };
    this.intervalPointer = null;
  }
  startTimer = () => {
    console.log('Timer Started');
    const { level, words, timer } = this.state;
    this.intervalPointer = setInterval(() => {
      console.log('before', this.state.words);
      console.log('Before Timer', this.state.timer);

      const removeWord = this.state.words.shift();
      this.setState({
        timer: timer - 500,
        words: this.state.words.filter((word) => word !== removeWord),
        input: '',
        multiplier: 1,
      });

      console.log('After', this.state.words);
      console.log('After Timer', this.state.timer);
    }, timer);
  };
  updateWords = () => {
    const { level, words, timer, score, levels } = this.state;
    if (level === 3) {
      this.setState({ gameOver: true }, () => {
        console.log('Game Over');
      });
      setTimeout(() => {
        window.alert(`Game Over\n score:${score}`);
      }, 1000);
    } else {
      if (score === 0) {
        this.setState({ gameOver: true }, () => {
          console.log('Game Over');
        });
        setTimeout(() => {
          window.alert(`Game Over\n score:${score}`);
        }, 1000);
      } else {
        this.setState({ level: level + 1, words: levels[level + 1] }, () => {
          this.startTimer();
        });
        this.setState({ leveled: true }, () => {
          this.setState({ leveled: false });
        });
      }
    }
  };
  setWords = () => {
    const { level, words, timer, levels } = this.state;
    this.setState({ words: levels[level] });
  };

  start = () => {
    this.setWords();
    this.startTimer();
  };

  stopTimer = () => {
    console.log('Timer Stopped');
    clearInterval(this.intervalPointer);
  };

  log = (e) => console.log(e);
  logKey = (e) => {
    console.log(e.key);
  };

  componentDidUpdate() {
    const { words, level, gameOver } = this.state;
    if (words.length === 0) {
      console.log('No more words');
      if (!gameOver) this.updateWords();
      this.stopTimer();
    }

    document.addEventListener('keypress', this.logKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.log);
    clearInterval(this.intervalPointer);
  }

  onKeyPress = (button) => {
    console.log('Button pressed', button);
    this.showPressedKey(button);
  };

  showPressedKey = (button) => {
    if (alphabets.big.includes(button)) {
      const key = `[data-skbtn='${button}']`;
      document
        .querySelectorAll('.hg-standardBtn')
        .forEach((element) => element.classList.remove('clicked'));
      document.querySelector(key).classList.add('clicked');
    }
  };
  onChange = (key) => {
    this.setState({ input: key });
    console.log('Input changed', key);
  };
  restart = () => {
    this.stopTimer();
    this.setState(
      {
        words: [''],
        input: '',
        multiplier: 1,
        score: 0,
        level: 1,
        timer: 2500,
        gameOver: false,
      },
      () => {
        console.log(this.state.words);
        this.start();
      }
    );
    // this.intervalPointer = null;
  };
  componentDidMount() {
    axios.get('levels').then((res) => {
      console.log(res);
      this.setState({ levels: res.data });
    });
  }
  onChangeInput = ({ target: { value } }) => {
    // this.setState({ left: false, right: false });
    const { input, level, words, multiplier, score } = this.state;
    console.log(value);
    if (value && words[0]) {
      const length = value.length;
      const letter = value[length - 1].toUpperCase();
      const upper = value.toUpperCase();
      console.log(letter);

      if (alphabets.big.includes(letter)) {
        this.showPressedKey(letter);
      }
      this.setState({ input: upper });
      if (upper === words[0].substr(0, length)) {
        console.log('Still Correct');
        this.setState({ right: true }, () => {
          this.setState({ right: false });
        });
      } else {
        this.setState({ multiplier: 1 });
        this.setState({ left: true }, () => {
          this.setState({ left: false });
        });
        console.log('Error made');
      }

      if (upper === words[0]) {
        this.stopTimer();
        console.log('Filtering');
        this.setState({ score: score + level * 10 * multiplier });

        this.setState({ multiplier: multiplier + 1 });
        this.setState({ multiplied: true }, () => {
          this.setState({ multiplied: false });
        });
        const newWords = words.filter((word) => word !== upper);
        this.setState({ words: newWords });
        this.setState({ input: '' });
        console.log(input);
        this.startTimer();
      }

      this.keyboard.setInput(value);
    } else this.setState({ input: value });
  };
  render() {
    const {
      input,
      level,
      words,
      multiplier,
      score,
      left,
      right,
      leveled,
      multiplied,
      gameOver,
    } = this.state;
    return (
      <div className='App'>
        <Sound
          left={left}
          right={right}
          leveled={leveled}
          multiplied={multiplied}
          end={gameOver}
        />
        <header className='App-header'>
          <Logo />
          <div>
            <button onClick={this.start}>Start</button>{' '}
            <button onClick={this.restart}>Restart</button>
          </div>

          <Stats level={level} multiplier={multiplier} score={score} />
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
              onChange={this.onChangeInput}
              autoFocus
            />
            <Keyboard
              keyboardRef={(r) => (this.keyboard = r)}
              layoutName={'default'}
              onChange={this.onChange}
              onKeyPress={this.onKeyPress}
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
}
export default App;
