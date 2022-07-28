<template>
  <div>
    <input
    class="input"
    type="text"
    :class="{ invalid }"
    @input="setValue"
    :placeholder="placeholder"
    :value="value"
    />
    <p v-if="invalid" class="invalid-msg">Поле является обязательным</p>
  </div>
</template>

<script>
export default {
  name: 'FormInput',
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    placeholder: {
      type: String,
      required: false,
      default: 'Введите текст',
    },
    validate: {
      type: Boolean,
      required: false,
      default: false,
    },
    type: {
      type: String,
      required: false,
      default: 'text',
    },
  },
  emits: ['update:modelValue'],
  computed: {
    localNumbers() {
      if (this.type === 'text') {
        return this.modelValue;
      }
      return this.modelValue === ''
        ? ''
        : new Intl.NumberFormat('ru-RU').format(this.modelValue);
    },
    invalid() {
      return this.validate && !this.checkValid();
    },
  },
  methods: {
    setValue(event) {
      console.log(this.value, event.target.value);
      if (this.type === 'text') {
        return this.$emit('input', event.target.value);
      }
      let value = event.target.value.replace(/[^0-9]/g, '');
      event.target.value = value;
      value = value === '' ? '' : Number(value).toString();
      return this.$emit('input', event.target.value);
    },
    checkValid() {
      return !!this.modelValue;
    },
  },
};
</script>

<style lang="css" scoped>
.input {
  box-sizing: border-box;
  width: 100%;
}

.invalid {
  outline: 1px solid #ff8484;
}

.invalid::-webkit-outer-spin-button, .invalid::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0;
}

.invalid-msg {
  position: absolute;
  bottom: -14px;
  font-size: 8px;
  line-height: 10px;
  color: #ff8484;
}
</style>
