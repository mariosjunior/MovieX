<template>
  <v-app-bar app color="grey lighten-3" light>
    <v-row class="align-center justify-center">
      <v-col cols="auto">
        <router-link to="/">
          <div class="d-flex align-center">
            <h1 class="brand-title mx-4" color="#000">MovieX</h1>
          </div>
        </router-link>
      </v-col>

      <v-col v-if="userIsLoggedIn">
        <div class="mx-4 mt-6" style="max-width: 400px;">
          <v-text-field
            append-icon="mdi-search"
            placeholder="Search for movies"
            v-model="searchText"
            @keyup.enter="search"
          />
        </div>
      </v-col>

        <v-chip v-if="userIsLoggedIn" link to="/profile" class="ma-2" color="#0000ff" outlined pill><v-avatar left>
        <v-icon>mdi-account-circle</v-icon>
      </v-avatar>{{ userName }}</v-chip>

      <v-col cols="auto" v-if="userIsLoggedIn">
        <v-btn @click="$router.go()">Log Out</v-btn>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    searchText: '',
  }),

  computed: {
    userIsLoggedIn() {
      return this.$store.getters.userIsLoggedIn;
    },
    userName() {
      return this.$store.getters.userName;
    },
  },

  methods: {
    search(){
      this.$router.push({path: 'search', query: {movie: this.searchText}})
    },
    logOff() {
      this.userIsLoggedIn = false;
      this.$router.push({path: '/'});
    }
  },
};
</script>

<style scoped>
.v-app-bar >>> h1.brand-title {
  color: #000;
  font-size: 2rem;
}

.v-chip {
  cursor: pointer;
}
</style>