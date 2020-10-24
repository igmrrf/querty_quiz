import axios from 'axios';

export default axios.create({
  baseURL:
    process.env.REACT_APP_QWERTY_QUIZ_BASE_URL || 'http://localhost:3333/',
});
