import { shallowMount } from '@vue/test-utils';
import Counter from './Counter.vue';

describe('Counter.vue', () => {
  it('렌더링 확인', () => {
    const wrapper = shallowMount(Counter, { props: { id: 'temp', modelValue: 1 } });

    expect(wrapper.isVisible()).toBe(true);
  });

  it('+ 버튼을 누르면 input 값이 증가합니다.', async () => {
    const originalCount = 1;
    const wrapper = shallowMount(Counter, {
      props: {
        id: 'temp',
        modelValue: originalCount,
      },
    });

    wrapper.vm.increment();
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted()['update:modelValue']).toEqual([[originalCount + 1]]);
  });

  it('- 버튼을 누르면 input 값이 감소합니다.', async () => {
    const originalCount = 1;
    const wrapper = shallowMount(Counter, {
      props: {
        id: 'temp',
        modelValue: originalCount,
      },
    });

    wrapper.vm.decrement();
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted()['update:modelValue']).toEqual([[originalCount - 1]]);
  });
});
