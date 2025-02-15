<template>
  <div class="container mt-5">
    <h2 class="text-primary text-center mb-4"><i class="fas fa-code"></i> My Skills</h2>

    <!-- Technical Skills -->
    <div class="card shadow-lg mx-auto mb-4" style="max-width: 600px;">
      <div class="card-body">
        <h4 class="text-success"><i class="fas fa-laptop-code"></i> Technical Skills</h4>
        <ul class="list-group">
          <li class="list-group-item"><i class="fab fa-js text-warning"></i> JavaScript (Vue.js, React.js)</li>
          <li class="list-group-item"><i class="fab fa-java text-primary"></i> Java</li>
          <li class="list-group-item"><i class="fab fa-laravel text-danger"></i> PHP (Laravel)</li>
          <li class="list-group-item"><i class="fab fa-git-alt text-dark"></i> Git (Version Control)</li>
          <li class="list-group-item"><i class="fas fa-database text-info"></i> MySQL (Database Management)</li>
          <li class="list-group-item"><i class="fas fa-cogs text-secondary"></i> API Development</li>
          <li class="list-group-item"><i class="fab fa-windows text-primary"></i> C#</li>
          <li class="list-group-item"><i class="fas fa-code text-success"></i> Object-Oriented Programming (OOP)</li>
        </ul>
      </div>
    </div>

    <!-- Soft Skills -->
    <div class="card shadow-lg mx-auto" style="max-width: 600px;">
      <div class="card-body">
        <h4 class="text-primary"><i class="fas fa-user-check"></i> Soft Skills</h4>
        <ul class="list-group">
          <li class="list-group-item"><i class="fas fa-lightbulb text-warning"></i> Problem-Solving</li>
          <li class="list-group-item"><i class="fas fa-users text-success"></i> Collaboration & Teamwork</li>
          <li class="list-group-item"><i class="fas fa-clock text-danger"></i> Time Management</li>
          <li class="list-group-item"><i class="fas fa-book text-info"></i> Continuous Learning</li>
          <li class="list-group-item"><i class="fas fa-eye text-secondary"></i> Attention to Detail</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillsPage",
};
</script>

<style>
/* Enhancing list appearance */
.list-group-item {
  font-size: 1.1rem;
}
</style>
