<template>
  <div class="home">
    <h1>Welcome to the Open Nematode Drug-Based Project Website</h1>
    <p class="intro-text">Our ambition is to introduce a platform to tackle neglected diseases caused by parasitic worms (nematodes).</p>
  </div>
  <section class="header-section">
    <h2>The Platform</h2>
    <p class="section-text">We want to create an open-access platform, enabling research of neglected diseases caused by nematodes (parasitic worms).</p>
    <p class="section-text">The ‘Nematode Drugbase’ will launch here in 2025, hosting a collection of information concerning parasitic worms.</p>
  </section>
  <section class="header-section">
    <h2>Mission Statement</h2>
    <p class="section-text">Our mission is to combat neglected diseases caused by parasitic nematodes through innovative research and collaborative efforts. By developing the Nematode DrugBase, we aim to bridge the gap between nematode gene/protein databases and drug-like chemical databases, creating a comprehensive platform for discovering new medicines.</p>
    <img class="image cavendish-img" src="@/assets/cavendish-exterior.jpg" alt="Cavendish Exterior">
    <p class="section-text">This project, driven by University of Westminster students and open to global contributions, will provide valuable resources and foster hands-on learning experiences.</p>
    <p class="section-text">We are committed to enhancing student employability, promoting engagement with real-world problems, and contributing to the global fight against parasitic diseases.</p>
    <img class="image microscope-img" src="@/assets/ousa-chea-gKUC4TMhOiY-unsplash.jpg" alt="Microscope">
    <p class="section-text">Our work aligns with the UN Sustainable Development Goals, striving for health, equal access to medicines, and improved quality of life for affected communities.</p>
    <img class="image usnd-img" src="@/assets/E_SDG_logo_UN_emblem_square_trans_WEB.png" alt="USND">
  </section>
  <section class="header-section">
    <h2>Want to get involved or have questions?</h2>
    <p class="section-text">If you are interested in the project's developments, or would like to provide insight/expertise, we would be delighted to hear from you. Please see our <router-link to="/contact">contact</router-link> page for details.</p>
  </section>
</template>

<style scoped>
/* General styling */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f7f6;
  color: #333;
}

h1, h2 {
  color: #2a2a2a;
  font-weight: 600;
  line-height: 1.4;
}

/* Home section styling */
.home {
  text-align: center;
  padding: 3rem;
  background-color: #ffffff;
  border-bottom: 1px solid #ddd;
}

.intro-text {
  font-size: 24px;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Header section styling */
.header-section {
  padding: 2rem 2rem;
  margin: 0 auto;
  max-width: 900px;
}

.header-section h2 {
  font-size: 42px;
  margin-bottom: 1rem;
}

.section-text {
  font-size: 32px;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

/* Image styling */
.image {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 1rem auto;
}

.cavendish-img {
  max-width: 650px;
}

.microscope-img {
  max-width: 700px;
}

.usnd-img {
  max-width: 500px;
}

/* Responsive design */
@media (max-width: 768px) {
  .home {
    padding: 2rem;
  }

  .header-section {
    padding: 1.5rem;
  }

  .intro-text, .section-text {
    font-size: 1rem;
  }

  .cavendish-img, .microscope-img {
    max-width: 100%;
  }
}
</style>
