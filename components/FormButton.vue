<template>
  <button
    class="submit-btn"
    :class="{ disabled }"
    @click.prevent="$emit('click')"
    type="submit"
    v-text="text"
  />
</template>

<script>
export default {
  name: 'AddButton',
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    text: {
      type: String,
      required: false,
      default: 'Добавить товар',
    },
  },
  emits: ['click'],
};
</script>

<style lang="css" scoped>
.submit-btn {
  background: #7bae73;
  display: inline-block;
  padding: 10px;
  color: white;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.submit-btn :hover {
  opacity: 0.7;
}

.submit-btn :active {
  opacity: 1;
}

.disabled {
  background: #eeeeee;
  color: #b4b4b4;
  opacity: 1;
}
</style>
