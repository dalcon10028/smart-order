export const fetchProductList = () =>
  Promise.resolve({
    productType: '에스프레소',
    productList: [
      {
        name: '에스프레소',
        engName: 'Espresso',
        imageUrl:
          'http://whalesbean.com/web/upload/NNEditor/20170722/ED81ACEAB8B0EBB380ED9998_01_231EC9790EC8AA4ED9484EBA088EC868C2.jpg',
      },
      {
        name: '카페 라떼',
        isNew: true,
        engName: 'Cafe Latte',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Latte_art_3.jpg',
      },
      {
        name: '아메리카노',
        isHot: true,
        engName: 'Americano',
        imageUrl:
          'http://img.danawa.com/prod_img/500000/609/014/img/3014609_1.jpg?shrink=330:330&_v=20220113165030',
      },
    ],
  });

export const fetchProduct = () =>
  Promise.resolve({
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
