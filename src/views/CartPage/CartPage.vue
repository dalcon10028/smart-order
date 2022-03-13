<template>
  <section class="overflow-hidden">
    <div class="flex flex-col mb-20">
      <h3 class="inline-block p-4 text-xl font-extrabold sm:text-3xl" data-test="product-type">
        주문메뉴
      </h3>
      <div class="flex flex-col items-stretch">
        <div
          v-for="order in orderList"
          :key="order.product.nameKr"
          class="flex flex-row px-4 py-8 transition-all duration-200 delay-100 border-t"
          data-test="product"
        >
          <img
            class="rounded-full w-28 h-28"
            :src="order.product.imgUrl"
            :alt="order.product.nameKr"
            data-test="product-image"
          />
          <div class="flex flex-col pt-2 pl-5 grow">
            <div class="text-xl font-bold duration-200 delay-100" data-test="product-name">
              {{ order.product.nameKr }}
            </div>

            <div class="text-gray-400" data-test="product-eng-name">
              {{ order.product.nameEng }}
            </div>
            <div class="flex justify-between mt-3 text-gray-500">
              <span data-test="product-option-name">{{ optionsFormat(order) }}</span>
              <span class="font-semibold" data-test="product-price">{{
                displayPrice(order.product.price)
              }}</span>
            </div>
            <div
              v-for="option in order.options"
              :key="option.optionNo"
              class="flex justify-between text-gray-500"
            >
              <div>
                <span data-test="personal-option-name">{{ option.name }}</span>
                <span>{{ option.quantity }}</span>
              </div>
              <span class="font-semibold" data-test="personal-option-price">{{
                displayPrice(option.unitprice)
              }}</span>
            </div>
            <div class="flex justify-between mt-3">
              <counter min="1" :id="order.product.nameEng" v-model="order.quantity" />
              <div
                class="text-lg font-bold transition-all duration-200 delay-100 group-hover:text-indigo-500"
                data-test="product-total-price"
              >
                {{ displayPrice(totalPrice(order)) }}
              </div>
            </div>
          </div>
          <button class="inline-flex w-6 h-6 p-1 text-gray-400 border rounded-full">
            <x-icon />
          </button>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="my-3 ml-auto text-3xl font-extrabold mr-7" data-test="amt-due">
          {{ displayPrice(amountDue) }}
        </div>
        <button
          class="block h-12 font-bold bg-green-600 mx-7 rounded-3xl text-green-50"
          @click="order"
        >
          주문하기
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { OrderRepository } from '@/api';
import { displayPrice, optionsFormat } from '@/utils/format';
import { XIcon } from '@heroicons/vue/solid';
import Counter from '@/components/molecules/Counter/Counter.vue';

const router = useRouter();

const { data } = await OrderRepository.fetchCart();
const orderList = ref(
  data.cart.map(({ cupSize, options, optionsInfo, product, quantity }) => ({
    cupSize,
    options: options.map(option => ({
      ...option,
      ...optionsInfo.find(({ optionNo }) => optionNo === option.optionNo),
    })),
    quantity,
    product,
  })),
);

const totalPrice = order => {
  const { options, quantity, product } = order;
  return (
    product.price * quantity +
    options.reduce((acc, pn) => acc + (pn.quantity - pn.baseQuantity) * pn.unitprice, 0)
  );
};

const amountDue = computed(() =>
  orderList.value.reduce((acc, order) => acc + totalPrice(order), 0),
);

const order = async () => {
  try {
    await OrderRepository.order();
    alert('주문이 완료되었습니다!');
  } catch ({ response }) {
    alert(response.data.message);
  } finally {
    router.push('/');
  }
};
</script>
