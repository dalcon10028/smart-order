import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import NotFoundPage from './NotFoundPage.vue';

const routes = [
  {
    path: '/',
    component: {
      template: '',
    },
  },
  {
    path: '/home',
    component: {
      template: 'home',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

describe('NotFountPage.vue', () => {
  let wrapper;

  beforeEach(async () => {
    wrapper = mount(NotFoundPage, {
      global: {
        plugins: [router],
      },
    });
  });

  it('"Page not found" 문구가 표시됩니다.', () => {
    expect(wrapper.text()).toContain('Page not found');
  });

  it('"Go home" 버튼을 클릭하면 /home으로 이동합니다.', async () => {
    const homeButton = wrapper.find('[data-test="go-home"]');
    expect(homeButton.attributes('href')).toEqual('/home');
  });
});
