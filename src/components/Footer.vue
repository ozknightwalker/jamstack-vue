<template>
    <footer class="footer">
        Copyright {{getCurrentYear}} by
        <a :href="href">Jc Din</a>
    </footer>
</template>

<script>
export default {

    name: 'Footer',

    data() {
        return {
            href: "https://jcdin.cf"
        };
    },

    computed: {
        getCurrentYear() {
            return new Date().getFullYear();
        }
    }
};
</script>

<style lang="css" scoped>
footer {
    text-align: center;
    color: #00a672;
    letter-spacing: 0.5px;
    padding: 20px;
}
</style>
