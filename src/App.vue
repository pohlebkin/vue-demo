<template>
  <EventClick />

  <PropsComputed
    TitlePart1="эта секция пример использования props,"
    TitlePart2="computed и картинок"
  />

  <ButtonUI style="margin-bottom: 40px">
    эта кнопка пример глобально зарегситрированного компонента
  </ButtonUI>
</template>

<script>
import PropsComputed from '@/components/PropsComputed.vue'
import EventClick from '@/components/EventClick.vue'

export default {
  name: 'App',
  components: {
    PropsComputed,
    EventClick,
  },
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Consolas;
  font-size: 24px;
}

body {
  padding: 40px 20px;
}

p {
  margin-bottom: 20px;
}
</style>
