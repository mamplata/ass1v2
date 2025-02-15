<template>
    <div class="card shadow-lg mx-auto" style="max-width: 600px;">
        <div class="card-body">
            <h4 class="text-primary"><i class="fas fa-user-check"></i> Soft Skills</h4>
            <ul class="list-group">
                <li v-for="(skill, index) in skills" :key="index" class="list-group-item">
                    <i :class="skill.icon"></i> {{ skill.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "SoftSkills",
    data() {
        return {
            skills: [
                { name: "Problem-Solving", icon: "fas fa-lightbulb text-warning" },
                { name: "Collaboration & Teamwork", icon: "fas fa-users text-success" },
                { name: "Time Management", icon: "fas fa-clock text-danger" },
                { name: "Continuous Learning", icon: "fas fa-book text-info" },
                { name: "Attention to Detail", icon: "fas fa-eye text-secondary" }
            ]
        };
    }
};
</script>