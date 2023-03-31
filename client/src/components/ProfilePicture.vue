<script lang ="ts">
  import { Humza } from '@/model/session';

export default {
  name: 'AnotherComponent',
  data() {
    return {
      user: Humza
    }
  }
}
  
</script>

<template>
  <div>
    <img :src="user.pfp" width="128" length="128">
  </div>
</template>


<style scoped>
</style>