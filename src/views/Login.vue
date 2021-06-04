<template>
  <v-container fluid class="signin-container">
    <v-row justify="center" class="px-8 mt-4">
      <v-col style="max-width: 500px">
        <v-card>
          <v-row class="d-flex flex-column pa-8 align-center justify-center">
            <h3 class="mb-4">Login</h3>
            <v-text-field @keyup.enter="logIn" v-model="username" label="Nome de usuário" color="#0000ff" outlined></v-text-field>
            <v-btn outlined @click="logIn">Entrar</v-btn>
          </v-row>
          <v-row class="d-flex flex-column pa-8 align-center justify-center">
            <router-link class="black--text" to="/register">Não tem uma conta? Crie uma</router-link>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Login',
  data(){
    return{
      username: ''
    }
  },
  methods: {
    logIn() {
      this.$apollo
        .query({
          query: require('@/graphql/users/GetUser.gql'),
          variables: { name: this.username },
        })
        .then(({ data }) => {
          if (data.User.length > 0) {
            this.$store.commit('setUser', {
              isLoggedIn: true,
              name: data.User[0].name,
              id: data.User[0].userId,
            });
            this.$router.replace('/');
          } else {
            console.log("Erro! Não foi encontrado um usuário");
          }
        });
    }
  }
}
</script>

<style scoped>
  .v-text-field >>> label {
    font-size: 0.9em;
  }
  h3{
    color: #000;
  }
</style>