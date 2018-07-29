<template>
  <v-ons-page>
    <custom-toolbar :title="'News'" :action="toggleMenu"></custom-toolbar>
    <p style="text-align: center">
      Some news here.あsだsd
    </p>
  </v-ons-page>
</template>

<script>
  import customToolbar from './toolbar'
  export default {
    props: ['toggleMenu'],
    components:{customToolbar}
  }
</script>
