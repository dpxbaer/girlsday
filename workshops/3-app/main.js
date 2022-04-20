const App = {
  data () {
    return {
      headline: 'Vokabeln',
      message: 'Trage die richtige Lösung ein!',
      vocabulary: ladeMeineVokabeln ? ladeMeineVokabeln('standard') : []
    }
  },
  computed: {
  },
  methods: {
  }
}

Vue.createApp(App).mount('#app')
