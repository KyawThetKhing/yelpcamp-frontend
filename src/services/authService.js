import http from '.';

export const signIn = body => http.post('auth/login', body);

export const signUp = body => http.post('auth/register', body);

