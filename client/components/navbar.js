Vue.component('navbar', {
  template: `
  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Uber Fox</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><button class="btn-flat" @click="login">Login</button></li>
      </ul>
    </div>
  </nav>
  `,
  methods: {
    login(){
      this.$emit('login', 'login')
    }
  }

})