import axios from 'axios';

export default axios.create({
  baseURL: `https://amgapi.cmiller.net/api`,
});
