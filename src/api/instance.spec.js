import { instance } from './instance';

describe('instance.js', () => {
  it('instance의 BASE_URL은 evn파일의 VUE_APP_TALING_API값과 같습니다.', () => {
    const BASE_URL = process.env.VUE_APP_TALING_API;
    expect(instance.defaults.baseURL).toEqual(BASE_URL);
  });

  it('instance의 Basic auth는 evn파일의 CLIENT_ID, CLIENT_SECRET 값과 같습니다.', () => {
    const CLIENT_ID = process.env.VUE_APP_TALING_CLIENT_ID;
    const CLIENT_SECRET = process.env.VUE_APP_TALING_CLIENT_SECRET;
    expect(instance.defaults.auth.username).toEqual(CLIENT_ID);
    expect(instance.defaults.auth.password).toEqual(CLIENT_SECRET);
  });
});
