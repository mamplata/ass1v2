<template>
    <div>
        <!-- Profile Card -->
        <div class="card mx-auto mt-4 shadow-lg" style="max-width: 600px;">
            <div class="card-body text-center">
                <img :src="user.photo" alt="Profile" class="rounded-circle mb-3" width="120">
                <h3 class="card-title">{{ user.name }}</h3>
                <p class="text-muted">{{ user.role }}</p>
                <p>{{ user.bio }}</p>

                <!-- Social Links -->
                <div class="d-flex justify-content-center mt-3">
                    <a :href="user.github" class="btn btn-dark me-2" target="_blank">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                    <a :href="user.facebook" class="btn btn-primary" target="_blank">
                        <i class="fab fa-facebook"></i> Facebook
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserInfo",
    props: {
        user: Object // ✅ Accepts a user object
    }
};
</script>
