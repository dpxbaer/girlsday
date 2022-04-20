import { installer, serviceWorker } from './pwa.js';

(async () => {
    const serviceWorkerRegistration = await serviceWorker('./sw.js', './');
    installer('#installButton');
})()

class VokabelEditor extends HTMLElement {
    static get tagName() {
        return 'vokabel-editor'
    }
    constructor() {
        super()

        this.listName = this.getAttribute('liste') || 'default'
        const hasShadow = this.hasAttribute('shadow') || false

        this.dom = hasShadow ? this.attachShadow({mode: 'open'}) : this
        this.dom.innerHTML = `
            <div class="vokabel-editor">
                <button aria-expanded="false">Vokabeln bearbeiten</button>
                <div class="vokabel-editor__input">
                    <textarea></textarea>
                    <button>Speichern</button>
                </div>
            </div>
            <style>
                button[aria-expanded] { background-color: transparent; border-color: transparent; }
                textarea { min-height: 100px; }
                .vokabel-editor, .vokabel-editor__input { display: flex; flex-direction: column; }
                .vokabel-editor button { margin: 1rem 0; }
                .vokabel-editor__input { display: none; }
                .vokabel-editor__input.expanded { display: flex; }
            </style>
        `

        this.toggleNode = this.dom.querySelector('button[aria-expanded]')
        this.inputNode = this.dom.querySelector('.vokabel-editor__input')
        this.saveNode = this.dom.querySelector('button:last-child')
        this.textareaNode = this.dom.querySelector('textarea')

        this.toggleNode.addEventListener('click', (event) => {
            const currentStateExpanded = event.target.getAttribute('aria-expanded') === 'true'
            const vocabulary = ladeMeineVokabeln ? ladeMeineVokabeln(this.listName) : this.restoreVocabulary(this.listName)
            const exportedVocabulary = this.exportVocabulary(vocabulary)

            this.textareaNode.value = exportedVocabulary
            this.inputNode.classList.toggle('expanded')
            this.inputNode.setAttribute('aria-hidden', currentStateExpanded)
            event.target.setAttribute('aria-expanded', !currentStateExpanded)
        })

        this.saveNode.addEventListener('click', (event) => {
            if (this.textareaNode.value) {
                const vocabulary = this.importVocabulary(this.textareaNode.value)
                this.storeVocabulary(this.listName, vocabulary)
            } else {
                this.clearVocabulary(this.listName)
            }
            location.reload()
        })
    }

    exportVocabulary (vocabulary = []) {
        return vocabulary.map(entry => entry.native + '=' + entry.foreign).join(';')
    }

    importVocabulary (exportedVocabulary = '') {
        const rawVocabulary = exportedVocabulary.trim().split(';').filter(entry => entry != '=')
        const vocabulary = rawVocabulary.map(entry => {
            const [native, foreign] = entry.split('=')
            return {
                native,
                foreign
            }
        })

        return vocabulary
    }

    clearVocabulary (listname) {
        localStorage.removeItem(listname)
    }

    restoreVocabulary (listname) {
        if (listname && localStorage.getItem(listname)) {
          return JSON.parse(localStorage.getItem(listname))
        }
      
        return []
    }

    storeVocabulary (listname, vocabulary = []) {
        localStorage.setItem(listname, JSON.stringify(vocabulary))
    }
}

customElements.define(VokabelEditor.tagName, VokabelEditor)

