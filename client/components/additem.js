Vue.component('additem', {
  template: `
  <div class="container">
  <div class="row">
      <div class="col s12 m8">
        <br><br>
        <h5 id="login">Add Item</h5>
        <br><br>
        <div class="container">
          <div class="input-field col s12">
            <input id="name" type="text" class="validate" v-model="name">
            <label for="name">Name: </label>
          </div>
        </div>
        <br><br>
        <div class="container">
          <div class="input-field col s12">
            <input id="price" type="text" class="validate" v-model="price">
            <label for="price">Price</label>
          </div>
        </div>
        <div class="container">
          <div class="input-field col s12">
            <input id="stock" type="text" class="validate" v-model="stock">
            <label for="stock">Stock</label>
          </div>
        </div>
        <div class="container">
          <div class="input-field col s12">
            <input id="tag" type="text" class="validate" v-model="tag">
            <label for="tag">Tag: </label>
          </div>
        </div>
        <br><br><br><br>
        <div class="container" id="submit">
          <button class="btn waves-effect waves-light" type="submit" name="action" @click="additem">SUBMIT</button>
        </div>
        <br>
      </div>
  </div>
</div>
  `,
  data(){
    return{
      name: '',
      price: '',
      stock: '',
      tag: '',
    }
  },
  methods: {
    additem(){
      this.$emit('additem', {
        name: this.name,
        price: this.price,
        stock: this.stock,
        tag: this.tag
      })
    }
  }
})