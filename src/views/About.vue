<template>
<v-container>
  <v-card
    class="mx-auto"
    color="#3F51B5"
    dark
    max-width="400"
  >
    <v-card-title>
      <v-icon
        large
        left
      >
        mdi-account
      </v-icon>
      <span class="title font-weight-light">About Us</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      "We are driven by our absolute fascination with quality design and engineering. We are agile, always-improving, take pride in what we create, and always have each other's back."
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="@/assets/mudbath_logo.jpg" id="mudbath_logo"
          ></v-img>
        </v-list-item-avatar>
        <v-spacer></v-spacer>
        <v-list-item-content>
          <v-list-item-title>Mudbath Team</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card-actions>
  </v-card>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      //
    }),
  }
</script>
