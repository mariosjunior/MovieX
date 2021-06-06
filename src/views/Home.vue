<template>
  <v-container class="pt-4 pb-16">
    <!-- Recommended -->
    <v-row>
      <v-col class="d-flex align-center">
        <h2 class="font-weight-bold primary--text mr-5" style="font-size: 3rem">
          Recomendados para você
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <ApolloQuery :query="require('@/graphql/movies/getRecommended.gql')" :variables="{first: 20, id: this.userId}">
      <template slot-scope="{result: {loading, error, data}}">
        <v-row class="px-8">     
        </v-row>
        <div v-if="data">
          <v-row class="px-8">
            <v-col sm="4" md="2" lg="2" class="d-flex justify-center align-start" v-for="movie in data.User[0].recommendedMovies" :key="movie.movieId">
              <MovieCard class="mx-2" :movie="movie"/>
            </v-col>
          </v-row>
        </div>
        <div v-if="loading">Carregando...</div>
        <div v-else-if="error">Ops, tente novamente.</div>
      </template>
    </ApolloQuery>
      </v-col>
    </v-row>

    <v-divider class="mb-4 mt-8"></v-divider>

    <!-- Gender -->
    <v-row>
      <v-col class="d-flex align-center">
        <h2
          class="font-weight-bold primary--text d-inline-block mr-5"
          style="font-size: 3rem"
        >
          Filmes por gênero
        </h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <ApolloQuery :query="require('@/graphql/movies/getAllMoviesByGenres.gql')" :variables="{first: 20}">
      <template slot-scope="{result: {loading, error, data}}">
        <div v-if="data">
          <v-flex v-for="genero in data.Genre" :key="genero.name">
            <v-row class="px-8">
              <v-col sm="10" align="left">
                <h3 class="my-4">{{genero.name}}</h3>
              </v-col>
            </v-row>
            <v-row class="px-8">
              <v-slide-group show-arrows="desktop" v-if="data">
                <v-slide-item sm="4" md="2" lg="2" class="d-flex justify-center align-start" v-for="movie in genero.movies" :key="movie.movieId">
                <MovieCard class="mx-2" :movie="movie"/>
                </v-slide-item>
              </v-slide-group>
            </v-row>
          </v-flex>
        </div>
        <div v-if="loading">Loading...</div>
        <div v-else-if="error">Try again.</div>
      </template>
    </ApolloQuery>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MovieCard from '../components/MovieCard'


export default {
  components: {
    MovieCard
  },

  computed: {
    userId() {
      return this.$store.getters.userId;
    }
  }
};
</script>
