<script>
import { firestore } from '@/main.js'; // Assuming firebase is set up and exported from here
import { collection, getDocs } from 'firebase/firestore';

export default {
  data() {
    return {
      blogs: [], // Array to hold the blog entries
    };
  },
  created() {
    // Fetch blog data from Firestore when the component is created
    this.fetchBlogs();
  },
  methods: {
    async fetchBlogs() {
      try {
        // Access the 'blogs' collection in Firestore
        const blogsCollection = collection(firestore, 'blog-collection');
        const querySnapshot = await getDocs(blogsCollection);

        // Map Firestore docs to the blogs array
        this.blogs = querySnapshot.docs.map(doc => ({
          id: doc.id, // Store the document ID
          ...doc.data(), // Store the blog data
        }));
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    },
  },
};
</script>

<template>
  <div class="home">
    <h1>This is the blog page</h1>

    <div v-for="blog in blogs" :key="blog.id">
      <router-link :to="'/blog/' + blog.id">
        <button>{{ blog.title }}</button>
      </router-link>
    </div>

  </div>

</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>