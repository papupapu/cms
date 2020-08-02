import axios from 'axios';
import http from 'http';
import https from 'https';

import isValidVar from '../utils/isValidVar';

import apiConfig from './config';

class HTTPLib {
  constructor(env) {
    this.host = apiConfig.host[env || 'local'];
    this.abort = {
      source: null,
      token: null,
    };
  }

  resetCancelRequest() {
    this.abort.source = null;
    this.abort.token = null;
  }

  uniqueCancelRequest() {
    this.resetCancelRequest();
    const cancelTokenSource = axios.CancelToken.source();
    this.abort.source = cancelTokenSource;
    this.abort.token = cancelTokenSource.token;
  }

  abortRequest(msg = null) {
    if (isValidVar(this.abort.source)) {
      this.abort.source.cancel(msg || 'Request aborted');
    }
  }

  get(url, params = {}, keepAlive) {
    const apiResponse = axios({
      url,
      method: 'get',
      baseURL: this.host,
      params,
      httpAgent:
        isValidVar(keepAlive) && keepAlive && new http.Agent({ keepAlive }),
      httpsAgent:
        isValidVar(keepAlive) && keepAlive && new https.Agent({ keepAlive }),
      cancelToken: this.abort.token,
    })
      .then((resp) => resp)
      .catch((err) => err.response);
    return apiResponse;
  }

  post(url, payload = {}, options = {}) {
    this.uniqueCancelRequest();
    const apiResponse = axios({
      url,
      method: 'post',
      baseURL: this.host,
      data: payload,
      ...{ options },
      cancelToken: this.abort.token,
    })
      .then((resp) => {
        return resp;
      })
      .catch((err) => err.response);
    return apiResponse;
  }

  put(url, payload = {}, options = {}) {
    this.uniqueCancelRequest();
    const apiResponse = axios({
      url,
      method: 'put',
      baseURL: this.host,
      data: payload,
      config: { ...options },
      cancelToken: this.abort.token,
    })
      .then((resp) => resp)
      .catch((err) => err.response);
    return apiResponse;
  }

  delete(url, payload = {}, options = {}) {
    this.uniqueCancelRequest();
    const apiResponse = axios({
      url,
      method: 'delete',
      baseURL: this.host,
      data: payload,
      ...{ options },
      cancelToken: this.abort.token,
    })
      .then((resp) => resp)
      .catch((err) => err.response);
    return apiResponse;
  }
}

export default HTTPLib;
