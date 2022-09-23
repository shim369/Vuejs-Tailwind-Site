<template>
  <div id="app">
  <Header />
  <Main />
  <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Wave from './wave'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer,
  },
  mounted : function(){
      Wave.init()
  }
}
</script>
