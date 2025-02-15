<template>
    <div class="card shadow-lg mx-auto mb-4" style="max-width: 600px;">
        <div class="card-body">
            <h4 class="text-success"><i class="fas fa-laptop-code"></i> Technical Skills</h4>
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
    name: "TechnicalSkills",
    data() {
        return {
            skills: [
                { name: "JavaScript (Vue.js, React.js)", icon: "fab fa-js text-warning" },
                { name: "Java", icon: "fab fa-java text-primary" },
                { name: "PHP (Laravel)", icon: "fab fa-laravel text-danger" },
                { name: "Git (Version Control)", icon: "fab fa-git-alt text-dark" },
                { name: "MySQL (Database Management)", icon: "fas fa-database text-info" },
                { name: "API Development", icon: "fas fa-cogs text-secondary" },
                { name: "C#", icon: "fab fa-windows text-primary" },
                { name: "Object-Oriented Programming (OOP)", icon: "fas fa-code text-success" }
            ]
        };
    }
};
</script>