<template>
  <Header />
  <Title />
  <Controller />
  <Input />
  <List />
  <Footer />
</template>

<script>
import Header from "~/components/TodoHeader";
import Title from "~/components/TodoTitle";
import Controller from "~/components/TodoController";
import Input from "~/components/TodoInput";
import List from "~/components/TodoList";
import Footer from "~/components/TodoFooter";

export default {
  name: "App",
  components: {
    Header,
    Title,
    Controller,
    Input,
    List,
    Footer
  }
}
</script>

<style lang="scss">
  .container {
    text-align: center;
  }
</style>