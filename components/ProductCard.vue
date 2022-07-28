<template>
  <div class="card-container">
    <header class="photo">
      <img :src="data.img" alt="Изображение товара" />
      <div class="product-remove" @click="$emit('click')">
        <img src="../static/Group 16.png">
      </div>
    </header>
    <main class="card-info">
      <section class="product-info">
        <p class="title" v-text="data.name" />
        <p class="description" v-text="data.description" />
      </section>
      <p class="product-price" v-text="price" />
    </main>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  emits: ['click'],
  computed: {
    price() {
      const beautyPrice = new Intl.NumberFormat('ru-RU').format(
        this.data.price
      );
      return `${beautyPrice} руб.`;
    },
  },
};
</script>

<style lang="css" scoped>
.card-container {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 332px;
  text-align: left;
  background: #fffefb;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04),
  0 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
}

.card-container:hover .product-remove {
  opacity: 1;
  transition-duration: 300ms;
}
.photo {
  display: flex;
  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: inherit;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.photo img {
  min-width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-info {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 16px 16px 24px 16px;
}

.card-info .product-info {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.card-info .product-info .title {
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
}
.card-info .product-info .description {
  font-size: 16px;
  line-height: 20px;
  height: 80px;
}

.card-info .product-price {
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
}

.product-remove {
  position: absolute;
  display: inline-block;
  opacity: 0;
  top: -8px;
  right: -8px;
  width: 32px;
  height: 32px;
  content: '';
  border-radius: 10px;
  background-color: #ff8484;
  cursor: pointer;
}

.product-remove .product-remove-ico {
  position: absolute;
  top: 8px;
  left: 9.5px;
}
</style>
