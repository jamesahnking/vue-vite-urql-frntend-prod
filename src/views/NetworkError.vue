// Vue Component Template for Project
<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    name: "NetworkError",
    props: {

    },
    data() { },
    mounted() {
        console.log("NetworkError component mounted");
    },

    methods: {},

    components: {

    },
});
</script>

<template>
<div> 
    <h1> Uh-Oh..!</h1>

    <h3>
        It looks like you're experiencing some entwork issues, places take a breath and <a href="#" @click="$router.go(-1)">Click Here</a>
        to try again. 
    </h3>
</div>
</template>