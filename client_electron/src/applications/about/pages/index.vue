<template>
  <Button @click="popInfo" type="primary">Help Me!!</Button>
</template>

<script>
    export default {
        name: "index",
        methods: {
            popInfo() {
                this.$Message.info('I can help you!!')
            }
        }
    }
</script>

<style scoped>

</style>
