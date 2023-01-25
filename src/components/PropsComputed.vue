<template>
  <section>
    <img class="logo" src="@/assets/logo.png" />
    <div class="title">{{ TitleFull }}</div>
  </section>
</template>

<script>
export default {
  name: 'PropsComputed',
  props: {
    TitlePart1: {
      type: String,
      required: true,
      default: 'строка по умолчанию',
    },
    TitlePart2: {
      type: String,
      required: true,
      default: 'строка по умолчанию',
    },
  },
  computed: {
    TitleFull() {
      return `${this.TitlePart1} ${this.TitlePart2}`
    },
  },
}
</script>

<style scoped>
section {
  padding: 10px 15px;
  background-color: #f1d6d6;
  border: 3px solid #e76565;
  display: flex;
  background-image: url('@/assets/bg.jpg');
  margin-bottom: 40px;
}

.logo {
  width: 40px;
  height: 40px;
  margin-right: 20px;
}
</style>
