import { shallowMount } from '@vue/test-utils';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
  it('아이디와 비밀번호를 입력하는 입력란과 로그인을 위한 버튼이 존재합니다.', () => {
    // given
    const wrapper = shallowMount(LoginForm);
    const idInput = wrapper.get('[data-test="id"]');
    const pwInput = wrapper.get('[data-test="pw"]');
    const loginButton = wrapper.get('[data-test="login"]');

    // then
    expect(idInput).toBeTruthy();
    expect(pwInput).toBeTruthy();
    expect(loginButton).toBeTruthy();
  });
});
