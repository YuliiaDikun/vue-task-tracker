<template>
    <header>
        <h1>{{title}}</h1>
        <ThisButton @toggle-add-task="$emit('toggle-add-task')" text='Add task' color='green'/>
    </header>
</template>

<script>

import ThisButton from './Button'
export default {
    name: 'ThisHeader',
    props: {
        title: String
    },
    components: {
        ThisButton
    }
}
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
</style>