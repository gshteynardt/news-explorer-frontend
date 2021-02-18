import { token } from "./Token";
import { BASE_URL }  from "./config.js";

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
      Authorization: `Bearer ${current_token}`,
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

  saveArticle(data) {
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

export const api = new Api({
  baseUrl: BASE_URL,
  headers: {
     Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

