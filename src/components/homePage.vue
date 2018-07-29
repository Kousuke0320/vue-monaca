<template>
    <v-ons-page>
      <custom-toolbar :title="'Home'" :action="toggleMenu"></custom-toolbar>
      <p style="text-align: center">
        tintintinだsだsasd
      </p>
    </v-ons-page>
</template>

<script>
  import customToolbar from './toolbar'
  export default {
    props: ['toggleMenu'],
    components: { customToolbar }
  }
</script>
