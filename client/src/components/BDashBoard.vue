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
                        Administration
                    </p>
                    <ul class="menu-list">
                        <RouterLink to="/admin">
                            <i class='bx bxs-group'></i>
                            <span class="text">Admin</span>
                        </RouterLink>
                        <li>
                            <a class="">Manage Your Team</a>
                            <ul>
                                <li><a>Members</a></li>
                                <li><a>Plugins</a></li>
                                <li><a>Add a member</a></li>
                            </ul>
                        </li>
                        <li><a>Invitations</a></li>
                        <li><a>Cloud Storage Environment Settings</a></li>
                        <li><a>Authentication</a></li>
                    </ul>
                    <p class="menu-label">
                        Transactions
                    </p>
                    <ul class="menu-list">
                        <li><a>Payments</a></li>
                        <li><a>Transfers</a></li>
                        <li><a>Balance</a></li>
                    </ul>
                </nav>
            </aside>

            <!--  -->
        </div>
    </div>
</template>


<style scoped></style>