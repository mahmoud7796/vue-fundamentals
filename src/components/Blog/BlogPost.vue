<template>
  <div class="post-box">
    <span class="views">{{ views }}</span>
    <h3 class="title">{{ title }}</h3>
    <span class="date">{{ date }}</span>
    <p class="content">{{ limit(content, 90, "more...") }}</p>
    <div class="row">
      <div class="col-sm-6 author">
        <span class="post-author">{{ uppercase(author) }}</span>
      </div>
      <div class="col-sm-6 category">
        <span class="post-category">{{ category }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "content", "author", "category", "date", "views"],
  name: "BlogPost",
  computed: {
    uppercase() {
      return (v) => {
        return v.toUpperCase();
      };
    },
    limit() {
      return (v, textLength, more) => {
        return v.substring(0, textLength) + more;
      };
    },
  },
};
</script>
<style scoped lang="scss">
.post-box {
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px #ddd;
  position: relative;
  text-align: left;
  margin-bottom: 10px;
  .views {
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: #4caf50;
    border-radius: 4px;
    padding: 4px 5px;
    color: #fff;
    text-align: center;
    font-weight: bold;
  }
  .title {
    color: #888;
  }
  .date {
    color: #888;
  }
  .author {
    text-align: left;
  }
  .post-author {
    color: #fff;
    background-color: royalblue;
    padding: 9px;
    border-radius: 6px;
  }
  .post-category {
    color: #fff;
    background-color: royalblue;
    padding: 9px;
    border-radius: 6px;
  }

  .category {
    text-align: right;
  }
  .content {
    line-height: 25px;
  }
}
</style>
