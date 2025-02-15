<template>
  <div id="app">
    <!-- Header Navbar -->
    <nav class="navbar navbar-dark bg-primary shadow-sm">
      <div class="container d-flex justify-content-between align-items-center">
        <a class="navbar-brand fw-bold text-uppercase" href="/">Portfolio</a>

        <ul class="nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/" exact-active-class="active">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/skills" exact-active-class="active">Skills</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact" exact-active-class="active">Contact</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Content Section -->
    <div class="container mt-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* Navbar Styling */
.navbar {
  padding: 10px 20px;
}

.navbar-brand {
  letter-spacing: 1px;
  color: #fff !important;
}

.nav .nav-link {
  color: white;
  font-weight: 500;
  padding: 10px 15px;
  transition: all 0.3s ease-in-out;
}

.nav .nav-link:hover {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
}

/* Active Link Styling */
.nav .active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
