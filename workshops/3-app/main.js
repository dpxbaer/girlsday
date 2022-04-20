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
  },
  methods: {
  }
}

Vue.createApp(App).mount('#app')
