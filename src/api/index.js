import axios from './service';

const classes = {
  fetch: () => axios.get('/classes').then((data) => data),
  // можно принимать аргумент
  // fetch: (info) => axios.get(`/${info}`).then((data) => data),
};

const trainers = {
  fetch: () => axios.get('/trainers').then((data) => data),
};

export { classes, trainers };
