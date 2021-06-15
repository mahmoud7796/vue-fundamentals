<template>
  <div class="Navbar">
    <div class="logo">Logo Test</div>
    <ul>
     <li> <router-link :to="'/'" exact><a>Home</a></router-link></li>
      <li> <router-link :to="'/about'"><a>About</a></router-link></li>
      <li> <router-link :to="'/help'" replace><a>Help</a></router-link></li>
      <li> <router-link :to="'/blog'" replace><a>Blog</a></router-link></li>

    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped lang="scss">
.Navbar {
  background-color: #333;
  color: #FFF;
  overflow: hidden;
  .logo {
    font-size: 24px;
    padding: 20px;
    float: left;
    width: 200px;
  }
  ul {
    margin: 0;
    float: left;
    width: calc(100% - 200px);
    li {
      display: inline-block;
      padding: 20px;
      a {
        color: #FFF;
        text-decoration: none;
      }
    }
  }
}

</style>
