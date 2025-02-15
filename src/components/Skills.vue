<template>
  <div class="container mt-5">
    <h2 class="text-primary text-center mb-4">
      <i class="fas fa-code"></i> My Skills
    </h2>

    <!-- Navigation Buttons Always Visible -->
    <div class="d-flex justify-content-center mb-4">
      <button @click="selectedComponent = 'TechnicalSkills'" class="btn btn-success mx-2">
        Technical Skills
      </button>
      <button @click="selectedComponent = 'SoftSkills'" class="btn btn-primary mx-2">
        Soft Skills
      </button>
    </div>

    <!-- Placeholder message when nothing is selected -->
    <p v-if="!selectedComponent" class="text-center text-muted">
      Click a button to display skills.
    </p>

    <!-- Transition wrapper for smooth animations -->
    <transition name="fade" mode="out-in">
      <component :is="selectedComponent" v-if="selectedComponent" :key="selectedComponent" />
    </transition>
  </div>
</template>

<script>
import TechnicalSkills from "./partials/TechnicalSkills.vue";
import SoftSkills from "./partials/SoftSkills.vue";

export default {
  name: "SkillsPage",
  components: {
    TechnicalSkills,
    SoftSkills
  },
  data() {
    return {
      selectedComponent: null, // No component displayed initially
    };
  }
};
</script>

<style>
/* Fade animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
