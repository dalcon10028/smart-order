import { instance } from './instance';

export const createUser = joinForm => instance.post('/join', joinForm);

export const fetchUserInfo = () => instance.get('/info');
