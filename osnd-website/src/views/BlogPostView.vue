<script>
import { firestore } from '@/main.js'; // Assuming firebase is set up and exported from here
import { doc, getDoc } from 'firebase/firestore';

export default {
  data() {
    return {
      blog: null, // Store the specific blog post
      loading: true, // Show a loading indicator while fetching the blog post
      error: null, // Store error message if something goes wrong
    };
  },
  created() {
    // Fetch blog data when the component is created
    this.fetchBlogPost();
  },
  methods: {
    async fetchBlogPost() {
      const blogId = this.$route.params.id; // Get the id from the route params
      try {
        // Access the specific blog document from Firestore
        const blogDoc = doc(firestore, 'blog-collection', blogId);
        const docSnap = await getDoc(blogDoc);

        if (docSnap.exists()) {
          // Set the blog data if it exists
          this.blog = { id: docSnap.id, ...docSnap.data() };
        } else {
          this.error = 'Blog not found';
        }
      } catch (error) {
        this.error = 'Error fetching blog post: ' + error.message;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<template>
  <div class="blog-post">
    <h1 v-if="loading">Loading...</h1>
    <div v-if="error">{{ error }}</div>

    <div v-if="blog">
      <h2>{{ blog.title }}</h2>
      <div v-html="blog.textcontent"></div>
    </div>

  </div>
</template>

<style>
.blog-post {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}
</style>
