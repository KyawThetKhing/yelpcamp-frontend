import http from ".";

export const getCampListService = body => http.get("camp");

export const fetchCampInfoService = id => http.get(`camp/${id}`);

export const updateCampInfoService = (id, body) => http.put(`camp/${id}`, body);

export const createCampInfoService = body => http.post("camp", body);
