## CSS

CSS = Cascading Style Sheet --> Aussehen der HTML-Elemente festlegen

# Syntax

- inline: mit einem Style-Attribut (zusätzliche Informationen in einem HTML-Tag) --> <p style="color:red";></p>
- intern: mit einem <style></style> - Element im HTML <head></head> - Tag
- extern: den CSS-File in dem <head> Tag des HTML einbinden --> <link href="style.css" rel="stylesheet"> --> href = Referenz, wo der File liegt, rel = Relation, wie HTML und CSS zueinander stehen

# Selektoren

- Selektor: das HTML-Element ansprechen, das gestyled werden soll
    - type: Typ des HTML-Elements, <p>, <h1>
    - class: Klassen wird verwendet, um die gleichen Styles für mehrere Elemente anzuwenden
    - ID: Styles für ein einziges HTML-Element
    - Pseudoklasse: Styles für bestimmte Zustände der Elemente, z.B. hover

- Deklaration: Eigenschaft und Wert, z.B. "color: red"
    - Eigenschaft (property): welche visuelle Merkmale sollen verändert werden
    - Wert (value): wie die Eigenschaft verändert werden soll

- mehrere Selektoren können dieselben Styles haben

# Reihenfolge

- in einem HTML können mehrere Stylsheets verwendet werden --> das HTML musss wissen, welche Stylesheet-Regeln gelten für welche HTML-Elemente
    --> "cascading" --> geht vom spezifischen zum allgemeinen

    1. ID
    2. Class
    3. Type


