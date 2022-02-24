import { mount } from '@vue/test-utils';
import ProductOptions from '@/components/molecules/ProductOptions/ProductOptions.vue';
import { ProductTemperature } from '@/constant/product';

describe('ProductOptions.vue', () => {
  it('음료의 단가 하단에는 핫/아이스를 선택할 수 있는 부분이 존재합니다.', () => {
    const wrapper = mount(ProductOptions, {
      props: {
        hotOrIce: '',
        cupSize: '',
        cupType: '',
        sizeList: [{ name: 'Short', iconSize: 30 }],
        personalOptions: [
          {
            optionNo: 1,
            quantity: 1,
            name: '에스프레소 샷',
            unitPrice: 500,
            baseQuantity: 1,
          },
          {
            optionNo: 2,
            quantity: 0,
            name: '시럽',
            unitPrice: 300,
            baseQuantity: 0,
          },
        ],
      },
    });
    const hotOrIceButton = wrapper.get('[data-test="hot-or-ice"]');

    expect(hotOrIceButton.exists()).toBeTruthy();
  });

  it('핫을 선택하려고 하면 핫 버튼이 빨간색 배경에 하얀 글자로 바뀌어야 합니다.', async () => {
    const wrapper = mount(ProductOptions, {
      props: {
        hotOrIce: '',
        cupSize: '',
        cupType: '',
        sizeList: [{ name: 'Short', iconSize: 30 }],
        personalOptions: [
          {
            optionNo: 1,
            quantity: 1,
            name: '에스프레소 샷',
            unitPrice: 500,
            baseQuantity: 1,
          },
          {
            optionNo: 2,
            quantity: 0,
            name: '시럽',
            unitPrice: 300,
            baseQuantity: 0,
          },
        ],
      },
    });

    wrapper.vm.$emit('update:hotOrIce', ProductTemperature.HOT);
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted('update:hotOrIce')[0]).toEqual([ProductTemperature.HOT]);
  });

  it('아이스를 선택하려고 하면 아이스 버튼이 파란색 배경에 하얀 글자로 바뀌어야 합니다.', async () => {
    const wrapper = mount(ProductOptions, {
      props: {
        hotOrIce: '',
        cupSize: '',
        cupType: '',
        sizeList: [{ name: 'Short', iconSize: 30 }],
        personalOptions: [
          {
            optionNo: 1,
            quantity: 1,
            name: '에스프레소 샷',
            unitPrice: 500,
            baseQuantity: 1,
          },
          {
            optionNo: 2,
            quantity: 0,
            name: '시럽',
            unitPrice: 300,
            baseQuantity: 0,
          },
        ],
      },
    });

    wrapper.vm.$emit('update:hotOrIce', ProductTemperature.ICE);
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted('update:hotOrIce')[0]).toEqual([ProductTemperature.ICE]);
  });

  it('핫/아이스 선택 하단에는 음료의 사이즈 선택지가 표시가 되어야 합니다.', () => {
    const cupSizeList = [
      { name: 'Short', iconSize: 30 },
      { name: 'Tall', iconSize: 35 },
    ];

    const wrapper = mount(ProductOptions, {
      props: {
        hotOrIce: '',
        cupSize: '',
        cupType: '',
        sizeList: cupSizeList,
        personalOptions: [
          {
            optionNo: 1,
            quantity: 1,
            name: '에스프레소 샷',
            unitPrice: 500,
            baseQuantity: 1,
          },
          {
            optionNo: 2,
            quantity: 0,
            name: '시럽',
            unitPrice: 300,
            baseQuantity: 0,
          },
        ],
      },
    });

    const sizeOptionLength = wrapper.find('[data-test="size-option"]').findAll('input');

    expect(sizeOptionLength).toHaveLength(cupSizeList.length);
  });

  it('음료 사이즈 선택지 하단에는 음료를 제공받을 컵에 대한 선택지가 표시되어야 합니다.', () => {
    const wrapper = mount(ProductOptions, {
      props: {
        hotOrIce: '',
        cupSize: '',
        cupType: '',
        sizeList: [
          { name: 'Short', iconSize: 30 },
          { name: 'Tall', iconSize: 35 },
        ],
        personalOptions: [
          {
            optionNo: 1,
            quantity: 1,
            name: '에스프레소 샷',
            unitPrice: 500,
            baseQuantity: 1,
          },
          {
            optionNo: 2,
            quantity: 0,
            name: '시럽',
            unitPrice: 300,
            baseQuantity: 0,
          },
        ],
      },
    });
    const cupTypeRadio = wrapper.findAll('[data-test="cup-type"]');

    expect(cupTypeRadio).toHaveLength(3);
  });

  it('컵 선택지 하단에는 각 음료에 대한 퍼스널 옵션을 추가할 수 있는 UI가 제공되어야 합니다.', () => {
    const wrapper = mount(ProductOptions, {
      props: {
        hotOrIce: '',
        cupSize: '',
        cupType: '',
        sizeList: [
          { name: 'Short', iconSize: 30 },
          { name: 'Tall', iconSize: 35 },
        ],
        personalOptions: [
          {
            optionNo: 1,
            quantity: 1,
            name: '에스프레소 샷',
            unitPrice: 500,
            baseQuantity: 1,
          },
          {
            optionNo: 2,
            quantity: 0,
            name: '시럽',
            unitPrice: 300,
            baseQuantity: 0,
          },
        ],
      },
    });
    const personalOptions = wrapper.get('[data-test="personal-option"]');

    expect(personalOptions.exists()).toBeTruthy();
  });
});
