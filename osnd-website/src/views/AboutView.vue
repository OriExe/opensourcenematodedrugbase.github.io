<template>
  <div class="home">
    <h1>About</h1>
    <p>The ‘Nematode Drugbase’ is a platform to tackle neglected diseases caused by parasitic worms (nematodes).  </p>
  </div>
  <section class="header-section">
    <h2>The Team</h2>
    <!--Will need to ask each of the team members the email they want to be shown and their role-->
    <p>The open-source nematode drub-based project team is comprised of students and academics from the University of Westminster. Our ambition is to create a platform that is open access that enables the advancement of research regarding diseases caused by nematodes.</p>
    <ul>
        <li>Alastair Barr -</li>
        <li>Freddie Partidge - </li>
        <li>Dipankar Sengupta -</li>
        <li>Teddy Seyoum - </li>
        <li>Polly Hayes - </li>
        <li>Gabriela Mondini Moraes - </li>
        <li>Magdalena Ruiz Perez - </li>
        <li>Oliver Guy – Website Developer – o.guy@westminster.ac.uk</li>
        <li>Azam Farooqui – Website Developer – A.Farooqui@Westminster.ac.uk </li>
        <li>Mateo Batol -</li>
        <li>Paule Abrutyte -</li>
    </ul>
  </section>
</template>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
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
.home {
  text-align: center;
  padding: 3rem;
  background-color: #ffffff;
  border-bottom: 1px solid #ddd;
}
.header-section {
  padding: 2rem 2rem;
  margin: 0 auto;
  max-width: 900px;
}

.header-section h2 {
  font-size: 42px;
  margin-bottom: 1rem;
}
.header-section ul {
  font-size: 24px;
  
}
p {
  font-size: 24px;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}
ul {
  list-style: none; 
}
</style>