<!--
пример отслеживания события click
https://v3.ru.vuejs.org/ru/guide/events.html#обработчики-событии
-->

<template>
  <section>
    <p>самый простой пример отслеживания и обработчика события click</p>
    <p><button @click="counterHandler">нажми на эту кнопку</button></p>
    <p>
      Счетчик равен <strong>{{ counter }}</strong>
    </p>
  </section>
</template>

<script>
export default {
  name: 'EventClick',
  data() {
    return {
      counter: 3,
    }
  },
  methods: {
    counterHandler(event) {
      this.counter += 1
      if (event) {
        // пока не знаю зачем нужен event
        // и без него все вроде работает
        // это важный момент, выяснить это
      }
    },
  },
}
</script>

<style scoped>
section {
  margin-bottom: 40px;
  border: 3px solid rgb(112, 59, 59);
  background-color: lightgoldenrodyellow;
  padding: 20px;
}
</style>
