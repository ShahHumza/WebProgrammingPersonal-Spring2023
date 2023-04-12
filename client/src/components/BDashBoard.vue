<script setup lang="ts">

</script>


<template>
    <div class="section">
        <div class="columns">
            <aside class="column is-2">
                <nav class="menu">
                    <p class="menu-label">
                        General
                    </p>
                    <ul class="menu-list">
                        <RouterLink to="/dashboard" class="brand">
                            <i class='bx bxs-smile'></i>
                            <span class="text">DashBoard</span>
                        </RouterLink>
                        <RouterLink to="/friends">
                            <i class='bx bxs-shopping-bag-alt'></i>
                            <span class="text">Friends</span>
                        </RouterLink>
                    </ul>

                    <p class="menu-label">
                        Workout Tools
                    </p>
                    <ul class="menu-list">
                        <RouterLink to="/workouts">
                            <i class='bx bxs-doughnut-chart'></i>
                            <span class="text">Workouts</span>
                        </RouterLink>
                        <RouterLink to="/calories">
                            <i class='bx bxs-doughnut-chart'></i>
                            <span class="text">Calorie Tracker</span>
                        </RouterLink>
                        <!-- <li><a>Transfers</a></li>
                        <li><a>Balance</a></li> -->
                    </ul>

                    <p class="menu-label">
                        Administration
                    </p>
                    <ul class="menu-list">
                        <RouterLink to="/admin">
                            <i class='bx bxs-group'></i>
                            <span class="text">Admin</span>
                        </RouterLink>
                            
                    </ul>
                    
                </nav>
            </aside>

            <!--  -->
        </div>
    </div>
</template>


<style scoped></style>