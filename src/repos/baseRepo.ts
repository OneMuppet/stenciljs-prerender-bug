export class BaseRepo {
  getHeaders() {
    let headers = new Headers();
    if (window['user']) {
      headers.append('Authorization', window['user'].getAuthResponse().id_token);
    }
    headers.append('content-type', 'application/json');
    return headers;
  }
}