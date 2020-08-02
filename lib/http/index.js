import axios from 'axios';
import http from 'http';
import https from 'https';

import isValidVar from '../utils/isValidVar';

import apiConfig from './config';

class HTTPLib {
  constructor(env) {
    this.host = apiConfig.host[env || 'local'];
    this.endpoints = apiConfig.endpoints;
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

  put(url, payload = {}, options = {}) {
    const apiResponse = axios({
      url,
      method: 'put',
      baseURL: this.host,
      data: payload,
      config: { ...options },
    })
      .then((resp) => resp)
      .catch((err) => err.response);
    return apiResponse;
  }

  async getPostsList() {
    const { url, keepAlive } = this.endpoints.postsList;
    const params = null;
    const apiResponse = await this.get(url, params, keepAlive);
    return apiResponse.data;
  }

  async getPost(postId) {
    const { url, keepAlive } = this.endpoints.getPost;
    const params = null;
    const apiResponse = await this.get(`${url}/${postId}`, params, keepAlive);
    return apiResponse.data;
  }

  async createPost(params) {
    const { url } = this.endpoints.createPost;
    const apiResponse = await this.post(url, params);
    return apiResponse.data;
  }

  async editPost(postId, params) {
    const { url } = this.endpoints.editPost;
    const apiResponse = await this.put(`${url}/${postId}`, params);
    return apiResponse.data;
  }

  async deletePost(postId) {
    const { url } = this.endpoints.deletePost;
    const params = null;
    const apiResponse = await this.delete(`${url}/${postId}`, params);
    return apiResponse.data;
  }
}

export default HTTPLib;
