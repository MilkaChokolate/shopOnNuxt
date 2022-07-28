<template>
  <div class="form-wrapper">
    <form class="form-container">
      <FormField label="Наименование товара" required>
        <FormInput
          v-model="name"
          :validate="validate"
          placeholder="Введите наименование товара"/>
      </FormField>
      <FormField label="Описание товара">
        <textarea
          class="textarea-issue input"
          v-model="description"
          placeholder="Введите текст"
        />
      </FormField>
      <FormField label="Ссылка на изображение товара" required>
        <FormInput
          v-model="link"
          :validate="validate"
          placeholder="Введите ссылку"
        />
      </FormField>
      <FormField label="Цена товара" required>
        <FormInput
          type="number"
          v-model="price"
          :validate="validate"
          placeholder="Введите цену"
        />
      </FormField>
    </form>
    <FormButton
      text="Добавить товар"
      @click="click"
      :disabled="!formIsValid"
    />
  </div>
</template>

<script>
import FormField from './FormField.vue';
import FormInput from './FormInput.vue';
import FormButton from './FormButton.vue';
export default {
  name: 'FormComponent',
  components: {
    FormField,
    FormInput,
    FormButton,
  },
  emits: ['submit'],
  data() {
    return {
      name: '',
      description: '',
      link: '',
      price: '',
      validate: false,
    };
  },
  computed: {
    formIsValid() {
      return this.name && this.link && this.price;
    },
  },
  methods: {
    click() {
      if (this.formIsValid) {
        const id = Math.floor(Math.random() * 100000);
        const product = {
          id,
          name: this.name,
          description: this.description,
          img: this.link,
          price: this.price,
        };
        this.$emit('submit', product);
        this.name = '';
        this.description = '';
        this.link = '';
        this.price = '';
        this.validate = false;
        return;
      }
      this.validate = true;
    },
  },
};
</script>

<style scoped lang="css">
.form-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.textarea-issue {
  width: 100%;
  height: 108px;
  resize: none;
}

.form-wrapper {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 332px;
  padding: 24px;
  background: #fffefb;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04),
  0 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
}
</style>
