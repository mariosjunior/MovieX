<template>
  <div>
    <v-card outlined max-width="300">
      <v-img v-if="profile" :src="movie.Movie.poster"/>
      <router-link :to="'/movie/' + movie.movieId">
      <v-img :src="movie.poster">
        <v-chip
          label
          color="#0000ff"
          text-color="#fff"
        >IMDb Rating: {{movie.imdbRating ? movie.imdbRating : "-"}}</v-chip>
      </v-img>
      </router-link>
      <v-card-title v-if="!profile" class="pb-2" style="fontSize: 1em; wordBreak: normal; lineHeight: 1.3">{{movie.title}}</v-card-title>
      <v-card-text v-if="!profile" style="fontSize: 0.7em; textAlign: left">{{movie.year}} - {{movie.runtime}} minutos</v-card-text>
      <v-col>
        <Rating :imdbRating="movie.imdbRating" :movieId="movie.movieId" />
      </v-col>
    </v-card>
  </div>
</template>
<script>
import Rating from './Rating.vue'

export default {
  props: ['movie', 'profile'],
  components: {
    Rating,
  }
}
</script>

<style scoped>
  .v-chip{
    position: absolute;
    left: 0;
    text-align: center;
  }
</style>
