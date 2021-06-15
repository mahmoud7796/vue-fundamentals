<template>
  <div class="blog">
    <h1>{{pageDes}}</h1>
    <P>{{pageName}}</P>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="posts-area">
            <blog-post v-for="post in data" :key="post.id" :title="post.title" :date="post.date" :author="post.author" :content="post.content" :category="post.category" :views="post.views" />
          </div>
        </div>
        <div class="col-md-4">
          <div class="sidebar">
            <sidebar />

          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import BlogPost from "../components/Blog/BlogPost";
import Sidebar from "../components/Blog/Sidebar";
import jsonData from "@/json/data.json";

export default {
  name: "Blog",
  data: function (){
    return {
      pageName: 'Blog Page',
      pageDes:'This is an Blog Page',
      data: jsonData
    };
  },
  components: {
    Sidebar,
    BlogPost
  },
};
</script>
