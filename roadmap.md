# Kostenabschätzung

## google vs mapbox

Google bietet keine Möglichkeit an einzelne Tiles zu laden, sondern rechnet lediglich mit map loads.
Interaktionen wie Zoomen, Bewegen der Karte oder andere Arten neue Tiles zu laden werden nicht berücksichtigt. Daher gibt es auch keine Preisdaten die wir gut vergleichen könnten.

Mapbox bietet zwar auch diese Möglichkeit an nur für einen map load zu zahlen, jedoch nur wenn man deren eigene - auf [leaflet.js](https://leafletjs.com/) basierende - [Bibliothek](https://docs.mapbox.com/mapbox-gl-js/api/) benutzt.

### Vergleich

| Current requests | per month |
| ---------------- | --------- |
| mapload          | 40.000    |
| geocoding        | 55.000    |

![Geocoding](https://docs.google.com/spreadsheets/d/e/2PACX-1vQ9t676f9uY6NktXtffQfe2WpzRjW7UsmaNxiS427Ej2SLTbmYqBIu2RqKppTpH9FvdssKJSDzg5f3L/pubchart?oid=107232545&format=image)

![MapLoads](https://docs.google.com/spreadsheets/d/e/2PACX-1vQ9t676f9uY6NktXtffQfe2WpzRjW7UsmaNxiS427Ej2SLTbmYqBIu2RqKppTpH9FvdssKJSDzg5f3L/pubchart?oid=20924636&format=image)

![TileLoads](https://docs.google.com/spreadsheets/d/e/2PACX-1vQ9t676f9uY6NktXtffQfe2WpzRjW7UsmaNxiS427Ej2SLTbmYqBIu2RqKppTpH9FvdssKJSDzg5f3L/pubchart?oid=308843151&format=image)

### Umrechnung

Ich habe leider nirgendwo einen guten Vergleich gefunden, auch keine Erfahrungsberichte von Leuten die gewechselt und ihre Zahlen veröffentlicht haben.

Derzeit erreichen wir ca. 40.000 Maploads pro Monat, also ca \$80.
Für den selben Preis erhalten wir bei Mapbox also 320.000 Tile requests.
Bei 40.000 Usern sind das dann 8 Tiles pro User.

Für eine detailierte Suche ist das sicherlich nicht ausreichend, aber gleichzeitig gibt es vermutlich auch viele, die einfach nur auf die Seite gehen und nicht mit der Karte interagieren.

Um genau herauszufinden wie viele Tiles der durchschnittliche User benötigt, sollten wir das ganze am besten einfach austesten. [>Tests](Tests)

## Free?

Für die Beschaffung der geojson Polygone für z.B. Länderumrisse werden wir sowieso weiterhin [Nominatim](https://nominatim.openstreetmap.org/) verwenden. Diese Anfragen müssen allerdings gecached werden, da Nominatim ein Ratelimit von 1 req/s angibt. Das sollte aber kein Problem darstellen, da wir dadurch gleichzeitig die Anonymität unserer Endnutzer schützen. (Mehr zum Cache Server weiter unten)

Hier kann man sich dann überlegen ob es nicht sinnvoller wäre alle Geocoding Anfragen über Nominatim zu erledigen. Solange die Anfragen gecached werden, sehe ich hier keine Nachteile.

Matrix oder Isochrone Anfragen zu einem späteren Zeitpunkt müssten dann allerdings trotzdem über Mapbox oder einen anderen Anbieter gehen.

# Tests

# Aufwandsabschätzung

## Proxy Server

### Datenschutz

Um die Anonymität der Kunden und Endnutzer zu gewährleisten verwenden wir einen Proxy/Cache server. Der [server](https://github.com/chronark/charon) ist derzeit unter [jbs-osm.informatik.fh-nuernberg](jbs-osm.informatik.fh-nuernberg.de) zu finden und ist in [go](https://golang.org/) geschrieben.

Zusätzlich zur Anonymität werden secrets für diverse APIs erst beim Server hinzugefügt, damit diese nicht im javascript code an den Endnutzer weiter gegeben werden.

### Statistik

Durch den Server können außerdem einige nützliche Daten erhoben werden um genauer heraus zu finden,
wie der Kartenservice genutzt wird.  
Wie suchen nutzer nach jobs?

- Durch Karten scrollen
- Direkte Suchfragen
- Werden verschiedene Orte verglichen?

# Roadmap to 1.0
