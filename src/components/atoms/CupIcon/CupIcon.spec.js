import { shallowMount } from '@vue/test-utils';
import CupIcon from './CupIcon.vue';

describe('CupIcon.vue', () => {
  it('아이콘 렌더링 확인', () => {
    const wrapper = shallowMount(CupIcon);
    const cupIcon = wrapper.get('[data-test="cup-icon"]');

    expect(cupIcon.exists()).toBeTruthy();
  });

  it('사이즈 변경 확인 Number Type', () => {
    const size = 30;
    const wrapper = shallowMount(CupIcon, {
      props: {
        size,
      },
    });
    const cupIcon = wrapper.get('[data-test="cup-icon"]');

    expect(cupIcon.attributes('width')).toBe(size.toString());
    expect(cupIcon.attributes('height')).toBe(size.toString());
  });

  it('사이즈 변경 확인 String Type', () => {
    const size = '30';
    const wrapper = shallowMount(CupIcon, {
      props: {
        size,
      },
    });
    const cupIcon = wrapper.get('[data-test="cup-icon"]');

    expect(cupIcon.attributes('width')).toBe(size.toString());
    expect(cupIcon.attributes('height')).toBe(size.toString());
  });
});
