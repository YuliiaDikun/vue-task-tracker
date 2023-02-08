<template>
  <header>
    <h1>{{ title }}</h1>
    <ThisButton
      v-if="homePage"
      @btn-click="$emit('toggle-add-task')"
      :text="showAddTask ? 'Close' : 'Add task'"
      :color="showAddTask ? 'red' : 'green'"
    />
  </header>
</template>

<script>
import ThisButton from "./Button";
export default {
  name: "ThisHeader",
  props: {
    title: String,
    showAddTask: Boolean,
  },
  components: {
    ThisButton,
  },

  computed: {
    homePage() {
      return this.$route.path === "/";
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>