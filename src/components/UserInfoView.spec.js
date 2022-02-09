import { shallowMount } from '@vue/test-utils';
import UserInfoView from './UserInfoView.vue';

describe('UserInfoView.vue', () => {
  it('유저 정보를 보여주는 #user-info-view가 생성됩니다.', () => {
    // given
    const wrapper = shallowMount(UserInfoView);
    const userInfoView = wrapper.get('[data-test="user-info-view"]');

    // then
    expect(userInfoView).toBeTruthy();
  });
});
