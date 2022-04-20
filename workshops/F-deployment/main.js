const App = {
  data () {
    return {
      headline: 'Vokabeln',
      message: 'Trage die richtige Lösung ein!',
      vocabulary: ladeMeineVokabeln ? ladeMeineVokabeln('standard') : [] // eslint-disable-line no-undef
    }
  },
  computed: {
    correctAnswered () {
      const correctVocabulary = this.vocabulary.filter(
        entry => entry.input && entry.input === entry.foreign
      )
      return correctVocabulary.length
    }
  },
  methods: {
    isCorrect (entry) {
      // console.log(entry.input, entry.foreign)
      return entry.input && entry.input === entry.foreign
    },
    reset () {
      this.vocabulary.forEach(entry => {
        if (entry.input) {
          entry.input = null
        }
      })
    }
  }
}

// eslint-disable-next-line no-undef
Vue.createApp(App).mount('#app')
