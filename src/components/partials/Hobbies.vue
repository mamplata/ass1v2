<template>
    <div>
        <div class="mt-5 text-center">
            <h2 class="text-primary">Hobbies & Interests</h2>
            <div class="d-flex justify-content-center flex-wrap mt-3">
                <span v-for="(hobby, index) in hobbies" :key="index" class="badge bg-secondary p-3 m-1 hobby-badge"
                    @click="$emit('toggle-hobby', index)">
                    <i :class="hobby.icon"></i>
                    <transition name="fade">
                        <span v-if="hobby.show" class="hobby-text ms-2"> {{ hobby.name }}</span>
                    </transition>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HobbiesList",
    props: {
        hobbies: Array // Receive hobbies data from Home.vue
    }
};
</script>

<style>
/* Animation */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease-in-out;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

/* Badge Styling */
.hobby-badge {
    cursor: pointer;
    user-select: none;
}
</style>
