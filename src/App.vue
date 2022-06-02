<template>
  <Header />
  <Input />
  <List />
  <Footer />
</template>

<script>
import Header from "~/components/Header"
import Input from "~/components/Input"
import List from "~/components/List"
import Footer from "~/components/Footer"

export default {
  components: {
    Header,
    Input,
    List,
    Footer
  },
  data() {
    return {
      message: 'Hello Vue!'
    }
  },
  methods: {
    handler() {
      console.log(this.message)
      this.message += '!'
    }
  }
}
</script>

<style lang="scss">
  .container {
    text-align: center;
  }
</style>