import { shallowMount } from '@vue/test-utils';
import ProductOptions from '@/components/molecules/ProductOptions.vue';

describe('ProductOptions.vue', () => {
  it('음료의 단가 하단에는 핫/아이스를 선택할 수 있는 부분이 존재합니다.', () => {
    const wrapper = shallowMount(ProductOptions);
    const hotOrIceButton = wrapper.get('[data-test="hot-or-ice"]');

    expect(hotOrIceButton.exists()).toBeTruthy();
  });

  it('핫을 선택하려고 하면 핫 버튼이 빨간색 배경에 하얀 글자로 바뀌어야 합니다.', async () => {
    const wrapper = shallowMount(ProductOptions);
    const hotButton = wrapper.get('[data-test="hot"]');

    await hotButton.trigger('click');
    expect(hotButton.classes()).toContain('text-red-100', 'bg-red-600');
  });

  it('아이스를 선택하려고 하면 아이스 버튼이 파란색 배경에 하얀 글자로 바뀌어야 합니다.', async () => {
    const wrapper = shallowMount(ProductOptions);
    const iceButton = wrapper.get('[data-test="ice"]');

    await iceButton.trigger('click');
    expect(iceButton.classes()).toContain('text-blue-100', 'bg-blue-600');
  });

  it('핫/아이스 선택 하단에는 음료의 사이즈 선택지가 표시가 되어야 합니다.', () => {
    const wrapper = shallowMount(ProductOptions);
    const sizeOptionButtons = wrapper.get('[data-test="size-option"]');

    expect(sizeOptionButtons.exists()).toBeTruthy();
  });

  it('음료 사이즈 선택지 하단에는 음료를 제공받을 컵에 대한 선택지가 표시되어야 합니다.', () => {
    const wrapper = shallowMount(ProductOptions);
    const cupOptionButtons = wrapper.get('[data-test="cup-option"]');

    expect(cupOptionButtons.exists()).toBeTruthy();
  });

  it('컵 선택지 하단에는 각 음료에 대한 퍼스널 옵션을 추가할 수 있는 UI가 제공되어야 합니다.', () => {
    const wrapper = shallowMount(ProductOptions);
    const personalOptions = wrapper.get('[data-test="personal-option"]');

    expect(personalOptions.exists()).toBeTruthy();
  });

  it('1행 좌측에는 몇 잔 주문할지를 설정할 수 있는 컨트롤이 제공되어야 합니다.', () => {
    const wrapper = shallowMount(ProductOptions);
    const amountControl = wrapper.get('[data-test="amount-control"]');

    expect(amountControl.exists()).toBeTruthy();
  });

  it('1행 우측에는 퍼스널 옵션과 수량을 반영한 최종 가격이 표시가 되어야 합니다.', () => {
    const wrapper = shallowMount(ProductOptions);
    const totalPriceView = wrapper.get('[data-test="total-price"]');

    expect(totalPriceView.exists()).toBeTruthy();
  });

  it('계산식) ( 음료 단가 + 퍼스널 옵션 단가 * 퍼스널 옵션 갯수) * 음료 갯수', async () => {
    const wrapper = shallowMount(ProductOptions);
    await wrapper.setData({
      price: 5000,
      personalOptions: [{ name: '에스프레소 샷', price: 500, count: 1, defaultCount: 1 }],
    });
    const tatalPrice = wrapper.get('[data-test="total-price"]').text();

    expect(Number(tatalPrice)).toEqual(wrapper.totalPrice);
  });
});
