import HTTPLib from '../index';
import config from './config';

class PostApis extends HTTPLib {
  constructor(env) {
    super(env, 'esapi');

    this.endpoints = config;
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

export default PostApis;
