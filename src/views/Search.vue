<template>
  <div class="pa-4">
    <ApolloQuery :query="require('@/graphql/movies/getMoviesBySearch.gql')" :variables="{title: $route.query.movie}">
      <template slot-scope="{result: {loading, error, data}}">
        <div v-if="data">
          <v-row class="px-8">
            <v-col sm="4" md="2" lg="2" class="d-flex justify-center align-start" v-for="movie in data.Movie" :key="movie.movieId">
              <movie-card class="mx-2" :movie="movie"></movie-card>
            </v-col>
            <p class="mt-4" v-if="!data.Movie.length">Não encontramos os filmes que você estava procurando. Tente novamente!</p>
          </v-row>
        </div>
        <div v-if="loading">Carregando...</div>
        <div v-else-if="error">Ops, tente novamente.</div>
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
