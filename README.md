## Dein GirlsDay

- Als IT Entwicklerin in der Agentur
- Grundbausteine einer Internetseite
- Vorstellung der Agentur
- Interaktive Webseiten
- Mittagspause
- Scrum & Co.
- Hands on in Workshops

## Workshops

- Bildet kleinere Gruppen anhand gemeinsamer Interessen und löst die Aufgaben im Team
- Jeder in der Gruppe arbeitet sich zunächst durch den Punkt Vorbereitung mit gegenseitiger Hilfe
- Sucht euch als Gruppe je nach Interesse einen Startpunkt aus
- Jeder in der Gruppe arbeitet an seinem Computer
- Eine Person aus der Gruppe teilt dabei ihren Bildschirm
- Löst die Aufgaben gemeinsam in der Gruppe Schritt für Schritt
### Vorbereitung

1. Öffnet folgende URL, um den Code auszuchecken und ein neues Projekt zu starten: https://codesandbox.io/s/github/dpxbaer/girlsday

### Workshop 1: HTML/CSS Grundlagen

Ziel des Workshops ist das Wiederholen der Grundlagen in HTML und CSS

1. Kopiert aus dem Ordner `workshops/1-html` die HTML-Datei `index.html` in den Hauptordner!
2. Wie lautet der Titel des HTML-Dokumentes?
4. Legt eine CSS-Datei an und bindet diese in die HTML-Datei im Kopfbereich ein!
5. Fügt in die CSS-Datei die initialen CSS-Anweisungen für das html-Element und zur Definition von CSS-Variablen ein (siehe weiter unten)!
6. Was macht die Angabe `font-size`?
7. Gebt der Seite eine Überschrift erster Ordnung "Abfrage" im Hauptteil innerhalb des main-Blocks!
8. Bindet das Bild `unicorn.png` im Hauptteil am Ende des main-Blocks ein!
9. Erstellt unterhalb der Überschrift ein div-Element mit der ID `app`!
10. Legt innerhalb dieses neu erstellten div-Elementes folgende Elemente an!
   1. Überschrift zweiter Ordnung "Vokabeln"
   2. Absatz mit der CSS-Klasse `info` und dem Text "Trage die richtige Lösung ein!"
   3. Button mit dem Titel "Zurücksetzen"
11. Zentriert das Bild horizontal!
12. Gebt der Überschrift erster Ordnung die Textfarbe rot (evtl. mit Hilfe der vorhandenen CSS-Variable)
13. Style den Button wie folgt!
    - Innenabstand von 4 Pixeln
    - Hintergrundfarbe hellgrau (z.B. mit CSS-Variable)
    - Rahmen von 2 Pixeln in hellgrau (z.B. auch mit CSS-Variable)
14. Was ist der Vorteil der CSS-Variable?
15. Gebt dem Button beim Darüberfahren mit der Maus einen anderen Mauszeiger und eine andere Rahmenfarbe (z.B. rot mit CSS-Variable)
16. Gebt Elementen mit der CSS-Klasse `info` einen unteren Innenabstand von 16 Pixeln!
17. Ergänzt über dem Button einen neuen div-Block, welcher folgende neuen Elemente enthält!
    - div-Element mit der CSS-Klasse `entry`
    - darin ein weiteres div-Element mit dem Inhalt "Lehrer"
    - unter dem div-Element mit dem Inhalt "Lehrer" ein Eingabefeld
19. Ergänzt unter Zuhilfenahme der CSS-Klasse am Eintrag einen Innennabstand von 16 Pixeln!
20. Gebt dem Eingabefeld eine Breite von 100% und verbessert dessen Zeilenhöhe (z.B. auf 32 Pixel)!
21. HTML-Dokument und CSS-Datei sollten nun in etwa denen in `workshops/2-vue` entsprechen

Initiale CSS-Anweisungen:

```
:root {
  --primary-color: red;
  --secondary-color: lightgrey;
}

html {
  font-family: sans-serif;
  font-size: 16px;
}
```
### Workshop 2: VueJS Setup

Ziel des Workshops ist das Wiederholen des VueJS-Setups

1. Kopiert aus dem Ordner `workshops/2-vue` alle Dateien in den Hauptordner oder erweitert euren eigenen bisher erarbeiteten Projektstand!
2. Wie werden das Styling geladen?
3. Was ist `--primary-color`?
4. Wie werden Vorder-, Hintergrund und Rahmenfarben in CSS festgelegt?
5. Was macht die CSS-Angabe `padding`?
6. Ladet VueJS im Kopfbereich der HTML-Seite von der URL `https://unpkg.com/vue@3.2.28/dist/vue.global.prod.js`!
7. Erstellt eine neue Datei `main.js` und ladet diese am Ende des Bodys der HTML-Seite!
8. Erzeugt mit `const App = {}` ein zunächst leeres App-Objekt!
9. Initialisiert die VueJS-App und bindet sie an die ID `app` mit dem Befehl `Vue.createApp(App).mount('#app')`!
10. Rendert die Werte für Headline und Message (aus dem Absatz) mit VueJS anstelle einer statischen Ausgabe!
11. Erstellt eine Funktion `ladeMeineVokabeln`, welche ein leeres Array zurückgibt!
12. Ergänzt ein weiteres Daten-Attribut `vocabulary`, das seine Daten aus dem Aufruf der Funktion `ladeMeineVokabeln` bezieht!
13. Aktualisiert die Funktion `ladeMeineVokabeln` so, dass sie eine Liste von Objekten als Vokabeln zurückgibt (siehe dazu Anmerkung zu initialen Vokabeln)!
14. Gebt für alle Einträge in `vocabulary` mit `v-for` jeweils ein div-Element mit der CSS-Klasse `entry` aus und ersetzt den statischen Text im inneren div-Element durch die Ausgabe des Wertes in `native` aus den Vobakel-Einträgen!
15. Ergänzt im HTML jeden Vokabel-Eintrag um ein Eingabefeld, das mit `v-model` an `entry.input` gebunden ist, um dynamische Benutzereingaben entgegen zu nehmen!
16. Gebt den Wert der Benutzereingabe zur Kontrolle des Funktionsweise ebenfalls für jeden Eintrag aus!

Initiale Vokabeln:

```
[{
    native: 'Lehrer',
    foreign: 'teacher'
  },
  {
    native: 'lehren',
    foreign: 'to teach'
}]
```


### Workshop 3: VueJS Entwicklung

Ziel des Workshops ist das Kennenlernen der Möglichkeiten von VueJS

1. Kopiert aus dem Ordner `workshops/3-app` alle Dateien in den Hauptordner oder erweitert euren eigenen bisher erarbeiteten Projektstand!
2. Was passiert im Header der HTML-Datei beim script-Element durch die Angabe des `src`-Attributes?
3. Wofür ist das script-Element im Body?
4. Was macht `Vue.createApp(App).mount('#app')` in der Datei `main.js`?
5. Woher kommen die Daten für `vocabulary`?
6. Wofür ist `v-model` am input-Element?
7. Entfernt zunächst die dynamische Ausgabe des vom Benutzer eingegebenen Wertes aus dem div-Element im `entry`-Block und den Trennstrich!
8. Erstellt eine Methode `isCorrect`, welche einen übergebenen Vokabel-Eintrag daraufhin prüft, dass
   - ein vom Benutzer eingegebener Wert vorhanden ist (`input`)
   - und der vom Benutzer eingegebene Wert der Fremdsprachen-Vokabel (`foreign`) entspricht
9. Ergänzt dynamisch gerenderte CSS-Klassen `correct`, `incorrect` und `missing`, um auf den Status der Benutzer-Eingabe reagieren zu können! Verwendet dafür die zuvor erstellte Methode `isCorrect`!
10. Erweitert das Styling für einzelne Vokabel-Einträge so, dass dem Benutzer anhand der Farbgebung eines 2 Pixel breiten Randes an der linken Seite der jeweilige Status visualisiert wird (z.B. mit den Farben rot, grün und hellgrau)!
11. Erstellt einen dynamisch berechneten Wert `correctAnswered`, welcher die Anzahl der korrekt beantworteten Fragen zurückgibt!
12. Fügt einen Absatz (p-Element) vor dem Button ein, in dem eine Ausgabe erscheint "2 von 10 richtige Antworten" (mit korrekten Werten)
13. Ergänzt einen click-Handler mit Namen `reset` für den Button, der die Property `input` für jeden Eintrag zurücksetzt (null), sofern dieser existiert!

### Workshop 4: Ausbau der VueJS

Ziel des Workshops ist der weitere Ausbau der bisher programmierten Anwendung

1. Kopiert aus dem Ordner `workshops/4-optimize` alle Dateien in den Hauptordner oder erweitert euren eigenen bisher erarbeiteten Projektstand!
2. Was macht `v-for` in der index.html?
3. Erklärt das Verhalten von `v-bind:class`!
4. Was verbirgt sich hinter `correctAnswered`?
5. Wie könnte ein weiterer Ausbau aussehen? Verfolgt eigene Ideen oder lasst euch von den Vorschlägen inspirieren!  

- Richtig gelöste Vokabeln könnten ausgeblendet werden
- Statt allen wird nur eine Vokabel (die jeweils aktuelle Vokabel) angezeigt
- Eine positive bzw. negative Rückmeldung informiert darüber, ob die Vokabel richtig gelöst wurde
- Falsch gelöste Vokabeln werden am Ende der Liste noch einmal angefügt

### Workshop E: Umbau zur Browser-App

Ziel des Workshops ist die Integration von vorbereitetem Code zur Bedienung als Web-App

### Workshop F: Deployment

Ziel des Workshops ist das Veröffentlichen eurer Projekte