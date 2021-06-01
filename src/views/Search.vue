<template>
  <div class="pa-4">
    <ApolloQuery :query="require('@/graphql/movies/getMoviesBySearch.gql')" :variables="{title: $route.query.movie}">
      <template slot-scope="{result: {loading, error, data}}">
        <div v-if="data">
          <v-row class="px-8">
            <v-col sm="4" md="2" lg="2" class="d-flex justify-center align-start" v-for="movie in data.Movie" :key="movie.movieId">
              <movie-card class="mx-2" :movie="movie"></movie-card>
            </v-col>
            <p class="mt-4" v-if="!data.Movie.length">Movie is missing</p>
          </v-row>
        </div>
        <div v-if="loading">Loading...</div>
        <div v-else-if="error">Try again!</div>
      </template>
    </ApolloQuery>
  </div>
</template>
<script>
import MovieCard from '../components/MovieCard'
export default {
  name: 'Search',
  components: {MovieCard}
}
</script>
