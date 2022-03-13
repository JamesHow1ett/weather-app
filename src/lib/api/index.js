import axios from 'axios';
// import Raven from 'raven-js';
import { API_URL } from './constants';

/**
 * Create a new Axios client instance
 */
const getClient = (baseUrl = API_URL) => {
  const options = {
    baseURL: baseUrl,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  // const token = IdentityService.getToken();
  // if (token) {
  //   options.headers = {
  //     'X-AUTH-TOKEN': token,
  //   };
  // }

  const client = axios.create(options);

  // Add a request interceptor
  // client.interceptors.request.use(
  //   (requestConfig) => {
  //     const currentToken = IdentityService.getToken();
  //     if (currentToken) {
  //       requestConfig.headers['X-AUTH-TOKEN'] = currentToken;
  //     }
  //     return requestConfig;
  //   },
  //   (requestError) => {
  //     Raven.captureException(requestError);

  //     return Promise.reject(requestError);
  //   },
  // );

  // // Add a response interceptor
  // client.interceptors.response.use(
  //   (response) => response,
  //   (error) => {
  //     if (error.response.status >= 500) {
  //       Raven.captureException(error);
  //     } else if (error.response.status === 401) {
  //       IdentityService.destroyUser();
  //       if (router.currentRoute.name !== 'user-login') {
  //         router.push('/logout');
  //       }
  //       Raven.captureException(error);
  //     }
  //     return Promise.reject(error);
  //   },
  // );

  return client;
};

/**
 * Base HTTP Client
 */
export default {
  // Provide request methods with the default base_url
  get(url, conf = {}) {
    return getClient().get(url, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  },

  delete(url, conf = {}) {
    return getClient().delete(url, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  },

  head(url, conf = {}) {
    return getClient().head(url, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  },

  options(url, conf = {}) {
    return getClient().options(url, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  },

  auth(url, conf = {}) {
    const newClient = getClient();
    newClient.defaults.headers = {
      'X-AUTH-EMAIL': btoa(conf.email),
      'X-AUTH-PASSWORD': btoa(conf.password),
    };
    return newClient.post(url, {}, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  },

  post(url, data = {}, conf = {}) {
    return getClient().post(url, data, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  },

  put(url, data = {}, conf = {}) {
    return getClient().put(url, data, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  },

  patch(url, data = {}, conf = {}) {
    return getClient().patch(url, data, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  },
};
