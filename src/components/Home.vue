<template>
  <div class="container mt-5">
    <!-- Hero Section -->
    <HeroSection />
    <!-- Profile Card -->
    <UserInfo :user="userData" />

    <!-- Projects Section -->
    <div class="container mt-2 p-5">
      <div class="accordion" id="featuredAccordion">
        <!-- Button for toggling -->
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" :class="{ 'collapsed': !isDropdownOpen }" type="button"
              @click="toggleDropdown" aria-expanded="isDropdownOpen">
              <i class="fas fa-leaf text-success me-2"></i>
              {{ isDropdownOpen ? "Hide" : "Show" }} Featured Project
            </button>
          </h2>

          <!-- Accordion Body -->
          <div :class="['accordion-collapse collapse', { show: isDropdownOpen }]" aria-labelledby="headingOne"
            data-bs-parent="#featuredAccordion">
            <div class="accordion-body">
              <component :is="featuredProject" />
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- Hobbies Section -->
    <HobbiesList :hobbies="hobbies" @toggle-hobby="toggleHobby" />
  </div>
</template>

<script>
import UserInfo from './partials/UserInfo.vue';
import HeroSection from './partials/Hero.vue';
import HobbiesList from './partials/Hobbies.vue';
import FeaturedProject from './partials/FeaturedProject.vue';
export default {
  name: "HomePage",
  components: {
    HeroSection,
    UserInfo,
    HobbiesList,
    FeaturedProject
  },
  data() {
    return {
      userData: {
        name: "Kyle Deejay C. Mamplata",
        role: "Back-end Developer | Problem Solver",
        bio: "Passionate IT student specializing in backend development with expertise in Laravel, MySQL, and Git. Dedicated to learning new technologies and solving complex problems.",
        photo: this.photo,
        github: "https://github.com/mamplata",
        facebook: "https://www.facebook.com/share/1A2Ccbc83v/"
      },
      isDropdownOpen: false,
      featuredProject: "FeaturedProject",
      hobbies: [
        { name: "Sleeping", icon: "fas fa-bed", show: false },
        { name: "Gaming", icon: "fas fa-gamepad", show: false },
        { name: "Anime & Manga", icon: "fas fa-film", show: false },
        { name: "Programming", icon: "fas fa-code", show: false },
        { name: "Problem Solving", icon: "fas fa-lightbulb", show: false }
      ]
    };
  },
  props: {
    photo: String
  },
  methods: {
    async toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    toggleHobby(index) {
      this.hobbies[index].show = !this.hobbies[index].show;
    }
  }
};
</script>

<style>
/* Additional styling */
.badge {
  font-size: 1rem;
}
</style>
