import React, { useEffect } from 'react';
import useSound from 'use-sound';
import correctKeySound from '../static/audio/correct.mp3';
import wrongKeySound from '../static/audio/wrong.mp3';
import levelUpSound from '../static/audio/Short Sms Tone.mp3';
import multiplierSound from '../static/audio/1 Second Tone.mp3';
import gameOverSound from '../static/audio/notify.mp3';

const Sound = ({ right, left, leveled, multiplied, end }) => {
  const [playCorrect] = useSound(correctKeySound);
  const [playWrong] = useSound(wrongKeySound);
  const [levelingUp] = useSound(levelUpSound);
  const [multiplierChange] = useSound(multiplierSound);
  const [gameOver] = useSound(gameOverSound);

  useEffect(() => {
    if (right) playCorrect();
    if (left) playWrong();
    if (leveled) levelingUp();
    if (multiplied) multiplierChange();
    if (end) gameOver();
  }, [
    right,
    playCorrect,
    playWrong,
    left,
    leveled,
    end,
    gameOver,
    multiplierChange,
    levelingUp,
    multiplied,
  ]);

  return <div></div>;
};
export default Sound;
