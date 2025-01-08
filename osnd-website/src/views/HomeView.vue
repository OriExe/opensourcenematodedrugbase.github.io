<script>

import { firestore } from '../main.js'; // Import Firestore instance from main.js
import { collection, addDoc } from 'firebase/firestore'; // Firestore methods

export default {
  methods: {
      async addEntry() {
      try {
        // Reference to the collection
        const testCollectionRef = collection(firestore, 'test-collection');

        // Adding a test document
        const docRef = await addDoc(testCollectionRef, {
          name: 'Test Entry',
          timestamp: new Date(),
          description: 'This is a test entry for Firestore.',
        });

        console.log('Document successfully written with ID:', docRef.id);
      } catch (error) {
        console.error('Error adding document to Firestore:', error);
      }
    },
    }
}

</script>


<template>
  <div class="home">
    <h1 style="text-align:center;">THIS SITE IS UNDER MAINTENANCE</h1>
    <p style="text-align:justify;  text-justify: inter-word;">The World Health Organisation and University of Westminster want to help reduce the spread of infections from parasitic worms around developing  regions. By developing the Nematode DrugBase, we aim to bridge the gap between nematode gene/protein databases and drug-like chemicals databases, creating a comprehensive platform for discovering new medicines. </p>
    
    <h1>The facts about Neglected Diseases</h1>
    <div class="grid" style="display : flex; flex-direction: row; flow-"> 
      <div>
        <!-- Not sure how to add images yet -->
      </div>
      <div>2</div>
      <div>3</div>
    </div>
    <p></p>
    <button @click="addEntry">Add Test Entry</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  .item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}
}
</style>