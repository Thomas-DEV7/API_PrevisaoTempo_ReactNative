import axios from "axios";


const Api = axios.create({
    baseURL: 'https://api.hgbrasil.com/',

  });

  export default Api;