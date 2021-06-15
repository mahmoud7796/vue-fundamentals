<template>
  <div class="about">
    <h1>{{pageDes}}</h1>
    <P v-format.bold.orang="60">{{pageName}}</P>

  </div>
</template>

<script>
export default {
  data: function (){
    return {
      pageName: 'About Us',
      pageDes:'This is an about page'
    };
  },
  components: {
  },
};
</script>
