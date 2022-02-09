import { mount } from '@vue/test-utils';
import LoginPage from './LoginPage.vue';

describe('LoginPage.vue', () => {
  it('컴포넌트가 마운트되면 LoginForm 컴포넌트와 UserInfoView 컴포넌트가 렌더링 되어야한다.', () => {
    // given
    const wrapper = mount(LoginPage);

    // when
    const idInput = wrapper.find('#id');
    const pwInput = wrapper.find('#pw');
    const userInfo = wrapper.find('#user-info');

    // then
    expect(idInput).toBeTruthy();
    expect(pwInput).toBeTruthy();
    expect(userInfo).toBeTruthy();
  });
});
