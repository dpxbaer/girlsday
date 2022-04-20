const App = {
  data () {
    return {
      headline: 'Vokabeln',
      message: 'Trage die richtige Lösung ein!',
      vocabulary: ladeMeineVokabeln ? ladeMeineVokabeln('standard') : [] // eslint-disable-line no-undef
    }
  },
  computed: {
  },
  methods: {
  }
}

// eslint-disable-next-line no-undef
Vue.createApp(App).mount('#app')
