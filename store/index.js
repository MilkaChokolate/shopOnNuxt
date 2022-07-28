export const state = () =>( {
  products: [
    {
      name: 'Тарелка из Икеи',
      id: '987654321',
      description: 'Прекрасная тарелка из Икеи. Мои идеальные тарелки. Летний вариант в зеленом цвете.',
      img: 'https://irecommend.ru/sites/default/files/product-images/482758/ZgPPfCg99MpOi5mlaD96mw.jpg',
      price: '700'
    },
    {
      name: 'Пластмассовая тарелка',
      id: '123456789',
      description: 'Какая-то пластиковая зеленая тарелка',
      img: 'https://res.cloudinary.com/lmru/image/upload/LMCode/98254566.jpg',
      price: '30'
    }
  ],
  sortOptions: [
    { value: 'default', text: 'По умолчанию' },
    { value: 'min', text: 'По цене min' },
    { value: 'max', text: 'По цене max' },
    { value: 'name', text: 'По наименованию' },
  ]
})

export const getters = {

}

export const mutations = {
  addProduct(state, product) {
      state.products.push(product);
    },
  removeProduct(state, removedId) {
    const index = state.products.findIndex(({ id }) => id === removedId);
    state.products.splice(index, 1);
  }
}

export const actions = {
  addProduct({ commit }, product) {
      commit('addProduct', product);
    },
  removeProduct({ commit }, removedId) {
    commit('removeProduct', removedId);
  }
}

