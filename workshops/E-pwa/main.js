const initialeVokabeln = [
  {
    native: 'Lehrer',
    foreign: 'teacher'
  },
  {
    native: 'lehren',
    foreign: 'to teach'
  }
]

// liest Vokabeln aus
function ladeMeineVokabeln (listenname) {
  return initialeVokabeln
}

const App = {
  data () {
    return {
      headline: 'Vokabeln',
      message: 'Trage die richtige Lösung ein!',
      vocabulary: ladeMeineVokabeln('standard')
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

Vue.createApp(App).mount('#app')
