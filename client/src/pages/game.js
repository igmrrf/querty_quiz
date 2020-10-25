import React, { Component } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import Logo from '../components/logo';
import Stats from '../components/statistics';
import alphabets from '../utils/alphabets';
import Sound from '../components/sound';
import axios from '../utils/axios';
import Modal from '../components/modal';

let wrongKey;
const failed = [];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      levels: null,
      words: [],
      failedWords: [],
      showModal: false,
      input: '',
      multiplier: 1,
      score: 0,
      level: 0,
      timer: 5000,
      wrong: false,
      right: false,
      multiplied: false,
      leveled: false,
      gameOver: false,
    };
    this.intervalPointer = null;
  }
  handleShow = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  componentDidMount() {
    document.addEventListener('keypress', this.logKey);
    axios.get('api/words').then((res) => {
      this.setState({ levels: res.data });
    });
  }

  componentDidUpdate() {
    const { words, gameOver, failedWords, score } = this.state;
    if (failedWords.length > 3 && gameOver === false) {
      this.setState({ gameOver: true }, () => {
        this.setState({ showModal: true });
        this.stopTimer();
      });
    } else if (words.length === 0 && score > 1 && gameOver === false) {
      this.stopTimer();
      this.updateWords();
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.log);
    this.stopTimer();
  }

  startTimer = () => {
    this.intervalPointer = setInterval(() => {
      const removeWord = this.state.words.shift();
      failed.push(removeWord);
      this.setState({
        words: this.state.words.filter((word) => word !== removeWord),
        input: '',
        failedWords: failed,
      });
      if (this.state.timer > 2000) {
        this.setState({ timer: this.state.timer - 200 });
      }
    }, this.state.timer);
  };

  stopTimer = () => {
    clearInterval(this.intervalPointer);
  };

  updateWords = () => {
    const { level, levels, words } = this.state;
    if (level === levels.length && words.length === 0) {
      this.setState({ gameOver: true }, () => {
        this.stopTimer();
        this.setState({ showModal: true });
      });
    } else {
      this.setState({ level: level + 1, leveled: true }, () => {
        this.setState({ leveled: false, words: levels[level].words });
        this.startTimer();
      });
    }
  };

  start = () => {
    document.getElementById('let-the-games-begin').focus();
    const { level, levels } = this.state;
    if (levels.length > 0) {
      this.setState({ level: level + 1, words: levels[level].words });
      this.startTimer();
    } else {
      alert("There's no word in the database");
    }
  };

  restart = () => {
    failed.length = 0;
    this.stopTimer();
    this.setState(
      {
        failedWords: [],
        multiplier: 1,
        score: 0,
        level: 0,
        timer: 5000,
        gameOver: false,
      },
      () => {
        this.start();
      }
    );
  };

  log = (e) => console.log(e);
  logKey = (e) => {
    console.log(e.key);
  };

  showPressedKey = (key) => {
    if (wrongKey) wrongKey.classList.remove('wrong');
    const query = `[data-skbtn='${key}']`;
    document
      .querySelectorAll('.hg-standardBtn')
      .forEach((element) => element.classList.remove('clicked'));
    document.querySelector(query).classList.add('clicked');
  };

  showWrongKey = (key) => {
    const query = `[data-skbtn='${key}']`;
    wrongKey = document.querySelector(query);
    document
      .querySelectorAll('.hg-standardBtn')
      .forEach((element) => element.classList.remove('wrong'));
    document.querySelector(query).classList.add('wrong');
  };

  onChange = (key) => {
    this.setState({ input: key });
  };

  onChangeInput = ({ target: { value } }) => {
    const { level, words, multiplier, score } = this.state;
    if (value && words[0]) {
      const length = value.length;
      const letter = value[length - 1].toUpperCase();
      const upper = value.toUpperCase();

      if (
        alphabets.big.includes(letter) &&
        upper === words[0].substr(0, length)
      ) {
        this.showPressedKey(letter);
        this.setState({ input: upper, right: true }, () => {
          this.setState({ right: false });
        });
      } else if (alphabets.big.includes(letter)) {
        this.setState({ multiplier: 1, wrong: true }, () => {
          this.setState({ wrong: false });
        });
        const currentCorrect = words[0].substr(0, length);
        const currentCorrectLetter = currentCorrect[currentCorrect.length - 1];
        this.showPressedKey(currentCorrectLetter);
        this.showWrongKey(letter);
      }
      if (upper === words[0]) {
        this.stopTimer();
        this.setState(
          {
            score: score + level * 10 * multiplier,
            multiplier: multiplier + 1,
            multiplied: true,
          },
          () => {
            this.setState({ multiplied: false });
          }
        );
        const newWords = words.filter((word) => word !== upper);
        this.setState({ words: newWords, input: '' });
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
      wrong,
      right,
      leveled,
      multiplied,
      gameOver,
      failedWords,
      showModal,
    } = this.state;
    return (
      <div className='App'>
        <Sound
          left={wrong}
          right={right}
          leveled={leveled}
          multiplied={multiplied}
          end={gameOver}
        />
        <section className='App-header'>
          <Logo />
          <Modal
            score={score}
            level={level}
            hideModal={this.handleShow}
            show={showModal}
          />
          <div>
            {level ? (
              <button onClick={this.restart}>Restart</button>
            ) : (
              <button onClick={this.start}>Start</button>
            )}
          </div>

          <Stats level={level} multiplier={multiplier} score={score} />
          <div style={{ color: 'black', width: '80%' }}>
            <div className='slide'>
              {failedWords.length > 0
                ? failedWords.map((word, i) => (
                    <h4 key={i}>
                      {word} <span>{i + 1}</span>
                    </h4>
                  ))
                : null}

              {words.length > 0
                ? words.slice(0, 1).map((word, i) => <h4 key={i}>{word}</h4>)
                : null}
            </div>
            <span style={{ fontSize: '14px', color: 'white' }}>
              Fail attempts left: {4 - failedWords.length}
            </span>
            <br />
            {!gameOver ? (
              <input
                value={input}
                placeholder={'Tap'}
                onChange={this.onChangeInput}
                autoFocus
                id={'let-the-games-begin'}
              />
            ) : null}

            <Keyboard
              keyboardRef={(r) => (this.keyboard = r)}
              layoutName={'default'}
              onChange={this.onChange}
              onKeyPress={this.showPressedKey}
              layout={{
                default: [
                  'Q W E R T Y U I O P',
                  ' A S D F G H J K L ',
                  ' Z X C V B N M ',
                ],
              }}
            />
          </div>
        </section>
      </div>
    );
  }
}
export default App;
