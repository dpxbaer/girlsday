const initialEntries = [
  {
    native: 'Lehrer',
    foreign: 'teacher'
  },
  {
    native: 'lehren',
    foreign: 'to teach'
  }
]

function getEntries () {
  return initialEntries
}

const App = {
  data () {
    return {
      headline: 'Vokabeln',
      message: 'Trage die richtige Lösung ein!',
      entries: getEntries()
    }
  },
  computed: {
    correctAnswered () {
      const correctEntries = this.entries.filter(
        entry => entry.input && entry.input === entry.foreign
      )
      return correctEntries.length
    }
  },
  methods: {
    isCorrect (entry) {
      // console.log(entry.input, entry.foreign)
      return entry.input && entry.input === entry.foreign
    },
    reset () {
      this.entries.forEach(entry => {
        if (entry.input) {
          entry.input = null
        }
      })
    }
  }
}

Vue.createApp(App).mount('#app')
