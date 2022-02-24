export const fetchAllProducts = () => {};

export const fetchProduct = () => {
  return Promise.resolve({
    product: {
      productNo: 1,
      name: '카페 라떼',
      discription:
        '풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 카페 라떼',
      isBest: true,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Latte_art_3.jpg',
      price: 5000,
      cupSize: [
        {
          name: 'Short',
          iconSize: 30,
        },
        {
          name: 'Tall',
          iconSize: 35,
        },
        {
          name: 'Grande',
          iconSize: 40,
        },
        {
          name: 'Venti',
          iconSize: 45,
        },
      ],
    },
  });
};
