<template>
  <v-main>
    <v-row class="d-flex flex-column pa-8 align-center justify-center">
      <h3 class="mb-4">Login</h3>
      <v-text-field v-model="username" label="Nome de usuário" color="#0000FF" outlined></v-text-field>
      <v-btn outlined @click="login(username)">Entrar</v-btn>
    </v-row>
    <v-row class="d-flex flex-column pa-8 align-center justify-center">
      <router-link to="/register">Não tem uma conta? Crie uma</router-link>
    </v-row>
    <div class="apollo">{{user.userId}}</div>
  </v-main>
</template>

<script>
export default {
  name: 'Login',
  data(){
    return{
      username: '',
      user: ''
    }
  },
  methods: {
    async login(username){
      let response = await this.searchUser(username)
      if(response.data.User[0]){
        localStorage.setItem("user_id", response.data.User[0].userId)
        this.$router.push('/')
      }
      else{
        console.log("Não existe esse usuário")
      }
    },
    async searchUser(username){
      return await this.$apollo.query({
        query: require('@/graphql/users/GetUser.gql'),
        variables: {name: username},
        fetchPolicy: 'network-only'
      })
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