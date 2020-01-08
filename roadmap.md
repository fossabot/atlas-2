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
Für den selben Preis erhalten wir bei Mapbox 320.000 Tile requests.
Bei 40.000 Usern sind das dann 8 Tiles pro User.

Für eine detailierte Suche ist das sicherlich nicht ausreichend, aber gleichzeitig gibt es vermutlich auch viele, die einfach nur auf die Seite gehen und nicht mit der Karte interagieren.

Meine Vermutung ist, dass wir mehr für die Tiles zahlen, jedoch die Kosten für Forward und Reverse Geocoding gegen 0 gehen werden.

Um genau herauszufinden wie viele Tiles der durchschnittliche User benötigt, sollten wir das ganze am besten einfach austesten. [>Tests](#Tests)

## Free

Für die Beschaffung der geojson Polygone für z.B. Länderumrisse werden wir sowieso weiterhin [Nominatim](https://nominatim.openstreetmap.org/) verwenden. Diese Anfragen müssen allerdings gecached werden, da Nominatim ein Ratelimit von 1 req/s angibt. [>Server](#ProxyServer)

Hier kann man sich dann überlegen ob es nicht sinnvoller wäre alle Geocoding Anfragen über Nominatim zu erledigen. Solange die Anfragen gecached werden, sehe ich hier keine Nachteile.

Matrix oder Isochrone Anfragen zu einem späteren Zeitpunkt müssten dann allerdings trotzdem über Mapbox oder einen anderen Anbieter gehen.

# Tests

Wie mit Birgit kurz besprochen werde ich dem Server noch ein paar Logging Funktionen hinzufügen,sodass wir nach dem Test abschätzen können, wie die Karte genutzt wird.

Hierfür wäre natürlich wichtig zu definieren, was wir alles wissen wollen.

- Requested Tiles pro User
- Suchanfragen
- ???

# Aufwandsabschätzung

## ProxyServer

[github.com/chronark/charon](https://github.com/chronark/charon)

Ich habe vor 1-2 Monaten aus Spaß zu Hause an einer Cache-Implementation in [go](https://golang.org/) gebastelt, weil ich dachte, dass man sich damit eigentlich sämtliche Kosten sparen könnte, da die Anfragen immer weniger sind als das Gratis-Limit.  
Der server ist derzeit unter [jbs-osm.informatik.fh-nuernberg](jbs-osm.informatik.fh-nuernberg.de) zu finden.

Leider verstößt das gegen die [TOS](https://www.mapbox.com/legal/tos) (2.8) von Mapbox.

Auch wenn wir Tiles und Geocoding von mapbox nicht cachen dürfen, gibt es trotzdem einige Vorteile:

- Secrets für diverse APIs erst beim Server hinzugefügt, damit diese nicht im javascript code an den Endnutzer weiter gegeben werden.
- Nominatim's Ratelimit Problem wird gelöst
- Datenschutz der Endnutzer [>Dateschutz](#datenschutz)
- Möglichkeit selbst aus dem Verhalten der Nutzer zu lernen [>Statistik](#Statistik)

### Datenschutz

Durch einen Proxyserver gelangen die IP-Adresse und sonstige Daten der Endnutzer nicht an den Karten-Provider.
Zwar behaupten diese, dass sie nichts mit den Daten anfangen, aber sicher ist sicher.

### Statistik

Durch den Server können außerdem einige nützliche Daten erhoben werden um genauer heraus zu finden,
wie der Kartenservice genutzt wird.  
Wie suchen nutzer nach jobs?

- Durch Karten scrollen
- Direkte Suchfragen
- Werden verschiedene Orte verglichen?

## Karte

# Roadmap to 1.0
