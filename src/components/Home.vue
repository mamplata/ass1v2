<template>
  <div class="container mt-5">
    <!-- Hero Section -->
    <div class="text-center">
      <h1 class="display-4 fw-bold text-primary">Welcome to My Portfolio</h1>
      <p class="lead text-muted">Discover more about my skills, projects, and interests.</p>
    </div>

    <!-- Profile Card -->
    <div class="card mx-auto mt-4 shadow-lg" style="max-width: 600px;">
      <div class="card-body text-center">
        <img :src="photo" alt="Profile" class="rounded-circle mb-3" width="120">
        <h3 class="card-title">Kyle Deejay C. Mamplata</h3>
        <p class="text-muted">Back-end Developer | Problem Solver</p>
        <p>
          Passionate IT student specializing in backend development with expertise in Laravel, MySQL, and Git.
          Dedicated to learning new technologies and solving complex problems.
        </p>

        <!-- Social Links -->
        <div class="d-flex justify-content-center mt-3">
          <a href="https://github.com/mamplata" class="btn btn-dark me-2" target="_blank">
            <i class="fab fa-github"></i> GitHub
          </a>
          <a href="https://www.facebook.com/share/1A2Ccbc83v/" class="btn btn-primary" target="_blank">
            <i class="fab fa-facebook"></i> Facebook
          </a>
        </div>
      </div>
    </div>

    <!-- Projects Section -->
    <div class="mt-5">
      <h2 class="text-center text-primary">Featured Project</h2>
      <div class="card mx-auto mt-3 shadow" style="max-width: 800px;">
        <div class="card-body">
          <h4 class="card-title"><i class="fas fa-leaf text-success"></i> AgroConnect Cabuyao</h4>
          <p class="card-text">
            An **agricultural information system** integrating **seasonal trends & geotagging of crops** to improve
            farming data accuracy and decision-making.
          </p>
          <ul class="list-unstyled">
            <li><i class="fas fa-check-circle text-success"></i> Developed using Laravel, MySQL, and JavaScript</li>
            <li><i class="fas fa-check-circle text-success"></i> Backend API development & database management</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Hobbies Section -->
    <div class="mt-5 text-center">
      <h2 class="text-primary">Hobbies & Interests</h2>
      <div class="d-flex justify-content-center flex-wrap mt-3">
        <span class="badge bg-secondary p-3 m-1"><i class="fas fa-bed"></i> Sleeping</span>
        <span class="badge bg-secondary p-3 m-1"><i class="fas fa-gamepad"></i> Gaming</span>
        <span class="badge bg-secondary p-3 m-1"><i class="fas fa-film"></i> Anime & Manga</span>
        <span class="badge bg-secondary p-3 m-1"><i class="fas fa-code"></i> Programming</span>
        <span class="badge bg-secondary p-3 m-1"><i class="fas fa-lightbulb"></i> Problem Solving</span>
      </div>
    </div>
  </div>
</template>

<script>
import photo from '../assets/photo.png';
export default {
  name: "HomePage",
  // data() {
  //   return {
  //     photo
  //   }
  // }
  props: {
    photo: String
  }
};
</script>

<style>
/* Additional styling */
.badge {
  font-size: 1rem;
}
</style>
