<template>
    <div class="app" id="app">
        <Header />
        <div class="container">
            <router-view />
        </div>
        <Footer />
    </div>
</template>

<script>
export default {

    name: 'App',

    data() {
        return {};
    },

    components: {
        Header: () =>
            import ("~/components/Header.vue"),
        Footer: () =>
            import ("~/components/Footer.vue"),
    },
};
</script>

<style lang="css" scoped>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.app {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
