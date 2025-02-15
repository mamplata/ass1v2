<template>
  <div class="container mt-5">
    <!-- Contact Card -->
    <div class="card p-4 shadow-lg mx-auto" style="max-width: 600px;">
      <div class="card-body text-center">
        <h2 class="text-primary"><i class="fas fa-envelope"></i> Contact Me</h2>
        <p class="text-muted">Feel free to reach out for collaborations or inquiries!</p>

        <!-- Contact Details -->
        <div class="mt-3">
          <p><i class="fas fa-map-marker-alt text-danger"></i> <strong>Location:</strong> Gulod, Cabuyao, Laguna</p>
          <p><i class="fas fa-envelope text-info"></i> <strong>Email:</strong>  
            <a href="mailto:mamplatakyledeejay09@gmail.com">mamplatakyledeejay09@gmail.com</a>
          </p>
          <p><i class="fas fa-phone text-success"></i> <strong>Phone:</strong> +639385873091</p>
        </div>

        <!-- Social Media Links -->
        <div class="mt-4">
          <h4 class="text-primary"><i class="fas fa-globe"></i> Connect with Me</h4>
          <div class="d-flex justify-content-center mt-3">
            <a href="https://github.com/mamplata" class="btn btn-dark me-2" target="_blank">
              <i class="fab fa-github"></i> GitHub
            </a>
            <a href="https://www.facebook.com/share/1A2Ccbc83v/" class="btn btn-primary" target="_blank">
              <i class="fab fa-facebook"></i> Facebook
            </a>
          </div>
        </div>

        <!-- References Section -->
        <div class="mt-4 text-start">
          <h4 class="text-primary"><i class="fas fa-user-tie"></i> References</h4>
          <ul class="list-unstyled">
            <li>
              <i class="fas fa-user text-secondary"></i> <strong>Daniel M. Paz</strong> – Software Engineer FA, Yondu Inc.<br>
              <i class="fas fa-envelope text-info"></i>  
              <a href="mailto:pazdaniel0825@gmail.com">pazdaniel0825@gmail.com</a>
            </li>
            <li class="mt-3">
              <i class="fas fa-user text-secondary"></i> <strong>McRolls Angeles</strong> – Website Specialist, Ad Ronin Digital Marketing<br>
              <i class="fas fa-envelope text-info"></i>  
              <a href="mailto:mcrollsangeles@gmail.com">mcrollsangeles@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
};
</script>

<style>
/* Additional styling */
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
