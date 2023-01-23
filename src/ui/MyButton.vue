<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default{
    name: 'MyButton',
}
</script>

<style scoped>
.btn{
    padding: 10px 15px;
    background-color: brown;
    border: 4px solid black;
    cursor: pointer;
    color: white;
    font-weight: bold;
}
</style>
