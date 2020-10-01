export const logoutMixin = {
  methods: {
    logout() {
      this.$store.dispatch("logout");
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
  },
};
