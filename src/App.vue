<template>
    <MyHeader
        TitlePart1="мой демо сайт"
        TitlePart2="по Vue 3"
    />
</template>

<script>
import MyHeader from '@/components/MyHeader.vue';

export default{
    name: 'App',
    components: {
        MyHeader
    },
}
</script>

<style>
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Consolas;
    font-size: 24px;
}
</style>
