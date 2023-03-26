
<script setup lang ="ts">
import { useSession } from '@/model/session';

const session = useSession();
</script>


<template>
  <div>
    <img :src="(session.user?.pfp)" alt="Profile Picture" />
  </div>
</template>


<style scoped>

</style>