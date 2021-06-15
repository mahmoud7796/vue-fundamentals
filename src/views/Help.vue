<template>
  <div class="help">
    <h1 v-color>{{ pageDes }}</h1>
    <P>{{ pageName }}</P>
  </div>
</template>

<script>
export default {
  name: "Help",
  data: function () {
    return {
      pageName: "Help Page",
      pageDes: "This is an Help page",
    };
  },
  directives: {
    color: {
      beforeMount(el) {
        el.style.color = "blue";
      },
    },
  },
};
</script>
