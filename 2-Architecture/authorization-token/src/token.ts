export default class Token {
  getToken(source: string) {
    if (!source || source === '') return null;

    const prefix = 'Bearer '; // Префикс токена
    const prefixPositon = source.indexOf(prefix); // Позиция префикса
    
    if (prefixPositon === -1 ) return null;

    const tokenLength = source.length - prefix.length - prefixPositon; // Длинна токена
    const token = source.substring(source.length - tokenLength);  // Достаём токен до конца строки

    if (tokenLength < 10) {
      throw new Error('Token length must not be less than 10 chars');
    }

    const pattern = new RegExp(/[^a-zA-Z0-9]+/);
    if (token.search(pattern) !== -1) {
      throw new Error('Token must contain only english letters and numbers.');
    }

    return token;
  }
}
