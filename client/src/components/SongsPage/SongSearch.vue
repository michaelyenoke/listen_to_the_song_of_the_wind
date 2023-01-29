<template>
  <panel title="Search">
    <v-text-field
      label="Search by song title, artist, album, or genre"
      v-model="search"
      @input="handleSearchInput"
    ></v-text-field>
  </panel>
</template>

<script>
import _ from 'lodash'

export default {
  data () {
    return {
      search: ''
    }
  },
  methods: {
    handleSearchInput: _.debounce(function (value) {
      const route = {
        name: 'songs'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }, 700),
    handleRouteQuerySearch (value) {
        this.search = value
    }
  },
  created() {
    this.$watch(() => this.$route.query.search, this.handleRouteQuerySearch, { immediate: true } )
  }
}
</script>

<style>

</style>
