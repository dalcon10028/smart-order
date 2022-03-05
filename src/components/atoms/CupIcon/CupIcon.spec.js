import { shallowMount } from '@vue/test-utils';
import CupIcon from './CupIcon.vue';

const CUP_SIZE = {
  'text-sm': 30,
  'text-md': 35,
  'text-lg': 40,
  'text-xl': 45,
};

describe('CupIcon.vue', () => {
  it('아이콘 렌더링 확인', () => {
    const wrapper = shallowMount(CupIcon);
    const cupIcon = wrapper.get('[data-test="cup-icon"]');

    expect(cupIcon.exists()).toBeTruthy();
  });

  it('사이즈 변경 확인', () => {
    const size = 'text-sm';
    const wrapper = shallowMount(CupIcon, {
      props: {
        size,
      },
    });
    const cupIcon = wrapper.get('[data-test="cup-icon"]');

    expect(cupIcon.attributes('width')).toBe(CUP_SIZE[size].toString());
    expect(cupIcon.attributes('height')).toBe(CUP_SIZE[size].toString());
  });
});
