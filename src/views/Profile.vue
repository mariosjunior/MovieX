<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="grey--text text--darken-3">Editar Perfil</h1>

        <v-text-field
          label="Username"
          class="mt-6"
          outlined
          v-model="inputUsername"
          :color="inputUsername.length >= 4 ? 'success' : 'error'"
        ></v-text-field>

        <v-btn @click="updateUsername" color="green" dark class="d-block mb-5"
          >Salvar mudança</v-btn
        >
        <v-btn @click="removeAccount" color="primary" dark
          >Remover minha conta</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    inputUsername: '',
  }),

  created() {
    this.inputUsername = this.$store.getters.userName;
  },

  methods: {
    updateUsername() {
      this.$apollo
        .mutate({
          mutation: require('@/graphql/users/UpdateUser.gql'),
          variables: {
            userId: this.$store.getters.userId,
            name: this.inputUsername,
          },
        })
        .then(({ data }) => {
          const { name, userId } = data.UpdateUser;
          this.$store.commit('setUser', { name, id: userId });
        });
    },

    removeAccount() {
      this.$apollo
        .mutate({
          mutation: require('@/graphql/users/DeleteUser.gql'),
          variables: {
            userId: this.$store.getters.userId,
          },
        })
        .then(() => {
          setTimeout(() => {
            this.$router.go();
          }, 1000);
        });
    },
  },
};
</script>
