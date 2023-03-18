<script setup lang="ts">



</script>


<template>
   <div class="admin">
    <h1>
      Welcome to the Admin Page
    </h1>
    <br> 
    <ul class="info">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Picture</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Emails</th>
            <th>Handle</th>
            <th>Is Admin</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src="https://via.placeholder.com/50x50.png" alt="Profile Picture"></td>
            <td>Humza</td>
            <td>Shah</td>
            <td>Hum@gmail.com</td>
            <td>@Hum</td>
            <td><input type="checkbox" checked disabled></td>
            <td>
              <a href="#" class="btn btn-sm btn-primary">Edit </a>
              <a href="#" class="btn btn-sm btn-danger">Delete</a>
            </td>
          </tr>
          <tr>
            <td><img src="https://via.placeholder.com/50x50.png" alt="Profile Picture"></td>
            <td>Tanner</td>
            <td>Festa</td>
            <td>Festa@gmail.com</td>
            <td>@Fanner</td>
            <td><input type="checkbox"></td>
            <td>
              <a href="#" class="btn btn-sm btn-primary">Edit </a>
              <a href="#" class="btn btn-sm btn-danger">Delete</a>
            </td>
          </tr>
          <tr>
            <td><img src="https://via.placeholder.com/50x50.png" alt="Profile Picture"></td>
            <td>Thomas</td>
            <td>Coffey</td>
            <td>Coffey@gmail.com</td>
            <td>@Coffey</td>
            <td><input type="checkbox"></td>
            <td>
              <a href="#" class="btn btn-sm btn-primary">Edit </a>
              <a href="#" class="btn btn-sm btn-danger">Delete</a>
            </td>
          </tr>
          <!-- Add more rows here -->
        </tbody>
      </table>
    </ul>
     
  </div>
</template>



<style scoped>


@media (min-width: 1024px) {
  .admin {
    min-height: 100vh;
    display: flex;
    text-align: right;

    /* This alligns it */
    position: relative;
    width: calc(100% - 280px);
    left: 280px;
    transition: .3s ease;
  }
}
.info{
  margin-top: 100px;
  left: 280px;
}


</style>