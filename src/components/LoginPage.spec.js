import { mount } from '@vue/test-utils';
import LoginPage from './LoginPage.vue';
import LoginForm from './LoginForm.vue';
import UserInfoView from './UserInfoView.vue';

describe('LoginPage.vue', () => {
  it('컴포넌트가 마운트되면 LoginForm 컴포넌트와 UserInfoView 컴포넌트가 렌더링 되어야합니다.', () => {
    // given
    const wrapper = mount(LoginPage);

    // then
    expect(wrapper.contains(LoginForm)).toBe(true);
    expect(wrapper.contains(UserInfoView)).toBe(true);
  });

  it('로그인 버튼 하단에는 아이디와 비밀번호가 실시간으로 반영이 되어 표시되어야 합니다.', () => {
    // given
    const wrapper = mount(LoginPage);
    const idInput = wrapper.get('[data-test="id"]');
    const pwInput = wrapper.get('[data-test="pw"]');
    const idView = wrapper.get('[data-test="id-view"]');
    const pwView = wrapper.get('[data-test="pw-view"]');
    const [mockId, mockPw] = ['yeonkwon', '1028'];

    // when
    idInput.setValue(mockId);
    pwInput.setValue(mockPw);

    // then
    expect(idView.text()).toBe(`아이디: ${mockId}`);
    expect(pwView.text()).toBe(`비밀번호: ${mockPw}`);
  });
});
