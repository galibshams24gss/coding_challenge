<template>
  <v-container>
    <v-card color="#385F73" dark id="dataholder">
    <v-card-title>
      XYZ Clothing
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>

    <v-data-table
    :headers="headers"
    :items="productdData"
    :search="search"
    class="elevation-1"
  >
    <template v-slot:top>
        <v-dialog v-model="dialog" max-width="800px">
          <v-card
          :loading="loading"
          class="mx-auto my-12"
          max-width="800"
          id="dataholder"
        >

    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card
            color="#FF5722"
            dark
          >
            <v-card-title class="headline">ID</v-card-title>
            <v-card-subtitle>{{viewedItem.id}}</v-card-subtitle>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card
            color="#03A9F4"
            dark
          >
            <v-card-title class="headline">Name</v-card-title>
            <v-card-subtitle>{{viewedItem.name}}</v-card-subtitle>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card
            color="#385F73"
            dark
          >
            <v-card-title class="headline">Description</v-card-title>
            <v-card-subtitle>{{viewedItem.description}}</v-card-subtitle>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card
            color="#4CAF50"
            dark
          >
            <v-card-title class="headline">Price</v-card-title>
            <v-card-subtitle>{{viewedItem.amount}} {{viewedItem.base}}</v-card-subtitle>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card
            color="#FFAB00"
            dark
          >
            <v-card-title class="headline">Related Products</v-card-title>
            <v-card-subtitle>{{viewedItem.relatedProducts}}</v-card-subtitle>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card
            color="red"
            dark
          >
            <v-card-actions>
              <v-btn text @click="close">Close</v-btn>
            </v-card-actions>
            </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-dialog>
    </template>
    <template v-slot:item.action="{ item }">
       <div class="text-center">
        <v-btn rounded color="pink" dark @click="viewItem(item)">Product Details</v-btn>
      </div>
    </template>

    <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="search">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </template>
  </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'Products',

    data: () => ({
      search: '',
      dialog: false,
      headers: [
        {
          text: 'ID',
          align: 'center',
          sortable: false,
          value: 'id',
        },
        { text: 'Name', align: 'center', value: 'name' },
        { text: 'Action', align: 'center', value: 'action', sortable: false },
      ],
      viewedIndex: -1,
      viewedItem: {
        id: '',
        name: '',
        description: '',
        price: '',
        relatedProducts: ''
      },
      defaultItem: {
        id: '',
        name: '',
        description: '',
        price: '',
        relatedProducts: ''
      },
      loading: false
    }),

    computed: {
      products(){
        return this.$store.getters['datastore/products'];
      },

      productdData(){
          const dataArr = [];
          const dataProc = this.products;
          dataProc.forEach(function(obj) {
            const id = obj.id;
            const name = obj.name;
            const description = obj.description;
            const amount = obj.price.amount;
            const base = obj.price.base;
            const relatedProducts = obj.relatedProducts;
            dataArr.push({id: id, name: name, description: description, amount: amount, base: base, relatedProducts: relatedProducts})
          });
          return dataArr;
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    mounted(){
      this.products;
    },

    created () {},

    methods: {
      viewItem (item) {
        this.viewedIndex = this.productdData.indexOf(item)
        this.viewedItem = Object.assign({}, item)
        this.dialog = true
      },

      close () {
        this.dialog = false
      }
    }
  }
</script>

<style lang="scss">
  #dataholder {
    border-radius: 20px;
  }
</style>
