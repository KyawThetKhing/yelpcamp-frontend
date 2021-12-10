import http from ".";

export const fetchUserInfo = id => http.get(`user/${id}`);
