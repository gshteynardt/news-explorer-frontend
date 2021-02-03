import {token} from "./token";
import { BASE_URL } from "./auth";

class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _handleOriginal(res) {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  }

  getHeaders(name) {
    const current_token = token.get(name);

    return {
      ...this._headers,
      'Authorization': `Bearer ${current_token}`,
    }
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this.getHeaders('news'),
    })
      .then((res) => this._handleOriginal(res));
  }

  getArticles() {
    return fetch(`${this._baseUrl}/articles`, {
      headers: this.getHeaders('news'),
    })
      .then((res) => this._handleOriginal(res));
  }

  createArticle(data) {
    return fetch(`${this._baseUrl}/articles`, {
      method: 'POST',
      headers: this.getHeaders('news'),
      body: JSON.stringify(data),
    })
      .then((res) => this._handleOriginal(res));
  }

  deleteArticle(ArticleId) {
    return fetch(`${this._baseUrl}/articles/${ArticleId}`, {
      method: 'DELETE',
      headers: this.getHeaders('news'),
    })
      .then((res) => this._handleOriginal(res));
  }
}

const api = new Api({
  baseUrl: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
