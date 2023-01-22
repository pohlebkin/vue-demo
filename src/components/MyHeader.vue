<template>
    <header>
        <img class="logo" src="@/assets/logo.png">
        <div class="title">{{ MyTitle }}</div>
    </header>
</template>

<script>
export default{
    name: 'MyHeader',
    props: {
        MyTitle: String
    }
}
</script>

<style scoped>
header{
    padding: 10px 15px;
    background-color: #f1d6d6;
    border: 3px solid #e76565;
    display: flex;
    background-image: url('@/assets/bg.jpg');
}

.logo{
    width: 40px;
    height: 40px;
    margin-right: 20px;
}

.title{
    font-size: 30px;
}
</style>
