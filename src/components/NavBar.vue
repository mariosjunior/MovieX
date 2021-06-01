<template>
  <v-app-bar app color="grey darken-4" dark>
    <v-row class="align-center">
      <v-col cols="auto">
        <router-link to="/">
          <div class="d-flex align-center">
            <h1 class="brand-title d-none d-sm-inline mx-4">MovieX</h1>
          </div>
        </router-link>
      </v-col>

      <v-col>
        <div class="mx-4 mt-6" style="max-width: 400px;">
          <v-text-field
            append-icon="mdi-search"
            placeholder="Search for movies"
            v-model="searchText"
            @keyup.enter="search"
          />
        </div>
      </v-col>

      <v-col cols="auto">
        <div>
          <router-link to="/profile">Profile</router-link>
        </div>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  data(){
    return{
      searchText: ''
    }
  },
  methods:{
    search(){
      this.$router.push({path: 'search', query: {movie: this.searchText}})
    }
  }
}
</script>

<style scoped>
.v-app-bar >>> h1.brand-title {
  color: #fff;
  font-size: 2rem;
}
</style>