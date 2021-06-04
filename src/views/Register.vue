<template>
  <v-container fluid class="register-container">
    <v-row justify="center" class="px-8 mt-4">
      <v-col style="max-width: 500px">
        <v-card>
          <v-container fluid class="pa-8">
              <v-container class="d-flex flex-column pa-8 align-center justify-center">
                  <h3 class="mb-4">Register</h3>
              </v-container>

            <ApolloMutation
              :mutation="require('@/graphql/users/CreateUser.gql')"
              :variables="{
                name: username,
              }"
              @done="onDone"
            >
              <template v-slot="{ mutate, loading, error }">
                <v-row>
                  <v-col class="py-1">
                    <p v-if="loading">Registering user...</p>
                    <p v-else-if="error">An error occurred: {{ error }}</p>
                    <v-text-field v-model="username" label="Nome de usuário" color="#0000ff" outlined></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col class="text-center">
                    <v-btn outlined @click="register(mutate)">Registrar</v-btn>
                  </v-col>
                </v-row>
                <v-row class="d-flex flex-column pa-8 align-center justify-center">
                    <router-link class="black--text" to="/login">Já tem uma conta? Logue agora</router-link>
                </v-row>
              </template>
            </ApolloMutation>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    username: '',
  }),

  methods: {
    register(mutate) {
      // Check if username is taken
      this.$apollo
        .query({
          query: require('@/graphql/users/GetUser.gql'),
          variables: { name: this.username },
        })
        .then(({ data }) => {
          if (data.User.length > 0) {
              console.log("O usuário já existe");
          }
          // Register
          else {
            mutate();
          }
        });
    },

    onDone({ data }) {
      this.$store.commit('setUser', {
        isLoggedIn: true,
        name: data.CreateUser.name,
        id: data.CreateUser.userId,
      });
      this.$router.replace('/');
    },
  },
};
</script>
