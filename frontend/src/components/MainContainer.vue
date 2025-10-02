<script setup>
    
    import NavBar from './common/NavBar.vue';
    import HelloFromBackend from './HelloFromBackend.vue';

</script>

<template>

    <NavBar/>

    <h1 class="text-3xl font-bold underline"> Hello world! </h1>

    <HelloFromBackend />

    <div class="text-white m-4 p-4 bg-emerald-950 font-bold rounded-lg">
        <p>Please be careful when feeding the birds.</p>
    </div>

</template>