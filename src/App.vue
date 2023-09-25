<template>
  <nav class="navbar navbar-expand-lg navbar-custom">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="img/chile-flag-png.webp" alt="bandera chilena" width="100">Fiestas Patrias</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Un asaito?</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Una cueca zapateada?</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Sus buenas payas</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: linear-gradient(-225deg, #2b4573 0%, #e6e6e6 60%, #ca041a 100%);
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}


.navbar-custom {
  background-image: linear-gradient(-225deg, #2b4573 0%, #e6e6e6 60%, #ca041a 100%);
  background-size: 400% 400%;
  animation: gradient 12s ease infinite;
 
}
 @keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
 
    50% {
        background-position: 100% 50%;
    }
 
    100% {
        background-position: 0% 50%;
    }
}
.navbar-custom .navbar-brand {
  color: #FFFFFF; 
  font-weight: bold;
}

.navbar-custom .navbar-nav .nav-link {
  color: #FFFFFF; 
}

.navbar-custom .navbar-nav .nav-link:hover {
  color: #002D62; 
  }
</style>
