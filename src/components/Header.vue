<template>
    <header class="header">
        <strong>
            <g-link to="/">{{ $static.metadata.siteName }}</g-link>
        </strong>
        <nav class="nav">
            <g-link class="nav__link" to="/">Home</g-link>
            <g-link class="nav__link" to="/about/">About</g-link>
        </nav>
    </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {

    name: 'Header',

    data() {
        return {};
    },
};
</script>

<style lang="css" scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    height: 80px;
}

.header .nav__link {
    margin-left: 20px;
}
</style>
