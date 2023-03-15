<template>
  <div>
    <h1>Pokemon Page <span>#{{ id }}</span></h1>
  </div>
</template>

<script>
export default {
  props: {
    id: {
        type: Number,
        required: true
    }
  },
  data() {
    return {
    //   id: null,
    };
  },
  created() {
    // const { id } = this.$route.params;
    // this.id = id;
  },
};
</script>

<style>
</style>