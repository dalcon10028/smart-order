import { shallowMount, mount } from '@vue/test-utils';
import { HomeIcon, ShoppingCartIcon, CogIcon } from '@heroicons/vue/solid';
import BottomNavigation from './BottomNavigation.vue';

describe(('BottomNavigation.vue'), () => {
  it('"메뉴" 부분에는 "홈", "장바구니", "설정" 아이콘들이 존재합니다.', () => {
    // given
    const wrapper = mount(BottomNavigation);

    // then
    expect(wrapper.contains(HomeIcon)).toBe(true);
    expect(wrapper.contains(ShoppingCartIcon)).toBe(true);
    expect(wrapper.contains(CogIcon)).toBe(true);
  });

  it('Nav 영역은 최하단에 고정되어 있어야 합니다.', () => {
    // given
    const wrapper = shallowMount(BottomNavigation);

    // when
    const bottomNavigation = wrapper.find('#bottom-navigation');

    // then
    expect(bottomNavigation.classes()).toContain('fix', 'bottom-0');
  });

  it('각 아이콘들을 수평 방향으로 균등하게 배치가 되어야 합니다.', () => {
    // given
    const wrapper = shallowMount(BottomNavigation);

    // when
    const bottomNavigation = wrapper.find('#bottom-navigation');

    // then
    expect(bottomNavigation.classes()).toContain('justify-center');
  });
});
