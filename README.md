# Model

Het staat model voor digitale tuintjes welke bij 'Het web is voor iedereen' door studenten worden gemaakt.

## Learning Log

### 7 sept - Workshop 1

### 4 sept - Deepdives

<details>
<summary><strong>Praktische CSS</strong></summary>

#### Voorbereidingen:

Vandaag ben ik begonnen met de Deepdive Praktische CSS. Voor de voorbereiding moesten we eerst een CodePen-account aanmaken, daarna opdracht 1 maken en als laatste de CSS Diner game spelen. Met deze opdrachten gingen we alvast oefenen met HTML en CSS voordat we tijdens de deepdive verder de stof in gingen.

##### Opdracht 1 – Een lelijke HTML-pagina maken

Bij de eerste opdracht was het de bedoeling om een simpele HTML-pagina te maken zonder deze mooi te maken met CSS. We kregen een vaste structuur met verschillende HTML-elementen die we moesten gebruiken, zoals een main, h1, h2, meerdere p-elementen, een img, een ul met li's en een blockquote.

Ik heb ervoor gekozen om mijn pagina over herfst te maken, omdat dit mijn favoriete seizoen is en de herfstperiode nu ook weer begint. Ik heb de gegeven structuur aangehouden en deze gevuld met mijn eigen content. Zo heb ik verschillende headings en stukjes tekst toegevoegd, een afbeelding gebruikt, een lijst gemaakt met dingen die voor mij bij de herfst horen en een quote toegevoegd. Het eindresultaat was expres nog een hele simpele en "lelijke" HTML-pagina, omdat het bij deze opdracht vooral ging om de structuur van HTML en nog niet om de vormgeving met CSS.

Dat kwam er uiteindelijk zo uit te zien:

![Voorbereidende opdracht op de deepdive Praktische CSS](images/readme/PraktischeCSS_Voorbereiding.png)

##### CSS Diner Game

Daarna heb ik de CSS Diner game gespeeld. In deze game moest ik met verschillende CSS-selectors de juiste objecten selecteren. Hier heb ik best wel even over gedaan, omdat ik niet alles meer wist en er ook veel dingen tussen zaten die nieuw voor mij waren.

Ik heb er wel zeker wat dingen uit meegenomen. Zo begrijp ik nu beter hoe je met CSS heel specifiek bepaalde elementen kunt selecteren en wat het verschil is tussen bijvoorbeeld een element, class en verschillende selectors zoals :first-child of :nth-child(). Vooral bij de wat moeilijkere levels moest ik goed naar de HTML-structuur kijken om te begrijpen welk element ik precies moest aanspreken.

Ik blijf CSS-selectors nog wel een beetje lastig vinden, vooral omdat er zoveel verschillende manieren zijn om iets te selecteren. Ik denk dat dit vooral iets is wat makkelijker wordt als ik het vaker ga gebruiken tijdens het maken van websites.

![CSS Diner Game](images/readme/CSSdinergame.png)

#### Huiswerk:

Ik ben verder gegaan met het ontwikkelen van mijn HTML-pagina die ik in de voorbereidingen heb gemaakt. Ik heb deze met CSS leesbaarder en duidelijker gemaakt. Ik heb hierbij vooral gewerkt aan de leesbaarheid, witruimte en hiërarchie. Zo heb ik onder andere de tekstbreedte, lettertypes, tekstgroottes en ruimtes tussen verschillende elementen aangepast.

Een belangrijk onderdeel dat ik uit deze opdracht heb meegenomen zijn custom properties. Ik begrijp nu eindelijk goed hoe ik ze moet maken en waarom ze zo handig zijn. In plaats van steeds dezelfde waarde op verschillende plekken individueel aan te passen, kun je deze op één plek veranderen en wordt het overal toegepast. Hier heb ik tijdens deze opdracht dan ook veel gebruik van gemaakt door bijvoorbeeld een custom property van kleur te maken die ik op meerdere plekken heb toegevoegd in de pagina, of voor witruimtes.

Ook heb ik gewerkt met calc() en clamp(). Vooral clamp() vond ik nog wat lastig, maar ik begrijp nu beter waarvoor het gebruikt wordt. Als laatste heb ik interactie toegevoegd met onder andere :hover en :focus en een formulier toegevoegd.

Ik heb vooral geleerd dat CSS niet alleen gaat om een website mooier maken, maar ook om ervoor te zorgen dat een pagina duidelijk, consistent en prettig te gebruiken is.

Mijn uiteindelijke HTML-Pagina:
https://codepen.io/editor/Rianne-Maria/pen/01a067cf-330c-79e7-a191-3e2bded8e517

![Mijn uiteindlijke HTML-Pagina](images/readme/PraktischeCSS_Opdracht1.png)
![Mijn uiteindlijke HTML-Pagina](images/readme/PraktischeCSS_Opdracht1_2.png)

</details>

<details>
<summary><strong>Fonts met kleur en effecten</strong></summary>

#### Voorbereidingen:

Voor de deepdive heb ik eerst verschillende teksten gelezen over het gebruiken van lettertypes op websites. Hieruit heb ik vooral geleerd dat er verschillende manieren zijn om fonts te gebruiken en dat de keuze die je maakt ook invloed kan hebben op de snelheid en betrouwbaarheid van je website.

Ik heb geleerd dat web-safe fonts makkelijk te gebruiken zijn, omdat deze al op veel apparaten aanwezig zijn. Van vorig jaar wist ik al hoe je font-families kunt stacken. Hierbij zet je meerdere fonts achter elkaar, zodat de browser een ander font kan gebruiken wanneer de eerste niet beschikbaar is.

Een belangrijk ding dat ik heb meegenomen is dat je beter geen externe webfont-services, zoals Google Fonts of Adobe Fonts, kunt gebruiken voor deze opdracht. Deze kunnen onder andere extra laadtijd veroorzaken. Dit was wel handig om te weten want voorheen gebruikte ik dit wel altijd. In plaats daarvan heb ik geleerd hoe ik met @font-face zelf font-bestanden aan mijn website kan toevoegen.

##### Oefening 1 – @font-face

Met deze informatie ben ik begonnen aan oefening 1. Ik heb deze oefening eerst helemaal zelf gemaakt zonder naar het antwoord te kijken, zodat ik kon testen hoeveel ik van de voorbereiding had begrepen en zelf kon toepassen.

Na het nakijken merkte ik dat ik nog automatisch pixels (px) gebruik voor font-size, terwijl in het antwoord em werd gebruikt. Dit is iets wat ik mezelf nog moet aanleren, omdat ik em eigenlijk nooit eerder heb gebruikt. Ook was ik vergeten om een fallback font achter mijn eigen font te zetten.

Daarnaast had ik geen font-style en font-display gebruikt. Ik weet op dit moment nog niet helemaal goed wanneer ik deze moet gebruiken en welke waarde ik dan moet kiezen. Dit is dus iets waar ik tijdens de volgende oefeningen nog extra op wil letten.

![Oefening 1](images/readme/Fonts_oefening1.png)
![Oefening 1 code](images/readme/Fonts_oefening1_code.png)

#### Huiswerk:

##### Oefening 2 – Fonts, kleur en effecten

Bij oefening 2 moest ik twee voorbeelden zo goed mogelijk namaken met CSS. Hierbij heb ik vooral gebruikgemaakt van de tips en CSS-code die al bij de oefening stonden en ben ik vanuit daar verder gaan werken.

Uit de theorie heb ik meegenomen hoe je met @font-face zelf fonts inlaadt en hoe belangrijk het is om daarbij goed met font-family, font-weight en verschillende fontvarianten te werken. Ook heb ik deze keer bewust geprobeerd om em te gebruiken in plaats van px bij de font-size. Dit ging voor mijn gevoel best goed en ik begin steeds beter te begrijpen hoe ik hiermee moet werken.

Voor de text-shadow moest ik nog wel even opzoeken hoe ik deze precies moest opbouwen, omdat ik dat alweer een beetje vergeten was. De letter-spacing heb ik vooral op gevoel aangepast om het zo dicht mogelijk op het voorbeeld te laten lijken.

Wat ik nog beter had kunnen doen is mijn @font-face completer opbouwen, bijvoorbeeld met font-style, en een fallback font toevoegen. Ook wil ik beter leren welke waardes en eenheden ik het beste kan gebruiken in plaats van deze vooral op gevoel te bepalen.

![Oefening 2](images/readme/Fonts_oefening2.png)

##### Oefening 3 – Fonts, kleur en effecten

<strong>Myst</strong>

Voor oefening 3 mocht ik zelf een aantal voorbeelden uitkiezen om na te maken. Ik ben begonnen met Myst, omdat dit een van de makkelijkere voorbeelden was en ik eerst even in de opdracht wilde komen. Ik heb de CSS-tips uit de opdracht aangehouden en gewerkt met onder andere text-transform en text-shadow. Door de vorige oefening wist ik nu al beter hoe een shadow was opgebouwd, waardoor ik deze dit keer zelf kon maken zonder het op te zoeken. Dit ging eigenlijk best goed, dus daarna wilde ik mezelf wat meer uitdagen.

<strong>Puff</strong>

Daarna ben ik naar een wat moeilijker voorbeeld gegaan en heb ik Puff gekozen. Hierbij heb ik opnieuw het font met @font-face toegevoegd en vanuit de CSS-tips gewerkt. De groene rand om de letters en de gele/groene glow vond ik een stuk lastiger. Ik wist nog niet hoe ik zo'n dikke rand om tekst kon maken en hoe ik het kleurverloop op de achtergrond moest aanpakken. Hiervoor heb ik opgezocht hoe -webkit-text-stroke en een radial-gradient werken. Uiteindelijk kreeg ik het effect redelijk goed nagemaakt. Hierdoor heb ik vooral geleerd dat je met CSS veel verder kunt gaan met tekst dan alleen een kleur, font en shadow.

<strong>Bananas</strong>

Omdat ik Puff nog best lastig vond, wilde ik nog een voorbeeld uit dezelfde categorie proberen. Hiervoor koos ik Bananas omdat toen ik die zag, ik geen idee had hoe ik die moest gaan maken. Ik heb eerst zoveel mogelijk zelf geprobeerd en de gegeven CSS-tips gebruikt als richting. Zo heb ik gewerkt met een background-image, background-size, border, border-radius, letter-spacing en rotate. Het lastigste vond ik het maken van de twee kleuren in het ovale vlak achter de tekst. Ik wist niet hoe ik dit moest aanpakken en heb daarom opgezocht hoe een linear-gradient werkt. De rest heb ik zoveel mogelijk zelf gemaakt.

![Oefening 3](images/readme/Fonts_oefening3.png)

Bij deze drie oefeningen merkte ik vooral dat ik de theorie over fonts, font-weights en @font-face steeds makkelijker begin toe te passen. Ook begin ik beter te begrijpen hoe verschillende CSS-effecten gecombineerd kunnen worden om uiteindelijk een compleet ontwerp na te maken.

##### Oefening 4 – Transitions

Bij oefening 4 moest ik verder met de blokjes van oefening 3 en hier transitions aan toevoegen die zichtbaar worden wanneer je eroverheen hovert. Met transitions heb ik in het eerste jaar al best veel gewerkt, dus ik wist nog goed hoe ik dit moest aanpakken.

Ik heb daarom zelf twee verschillende effecten gemaakt. Bij de ene verandert onder andere de grootte en kleur wanneer je eroverheen hovert en bij de andere laat ik de tekst draaien. Met transition heb ik ervoor gezorgd dat deze veranderingen niet in één keer gebeuren, maar vloeiend worden uitgevoerd.

Deze oefening was voor mij vooral een goede herhaling. Ik wist nog dat transitions handig zijn om feedback te geven op een interactie. Een gebruiker kan hierdoor bijvoorbeeld duidelijker zien dat iets klikbaar of interactief is. Het kan een website daarnaast wat levendiger maken, zolang je de effecten niet te veel gebruikt.

![Oefening 4](images/readme/Fonts_oefening4.png)

</details>

### 2 sept - Deepdives

<details>
<summary><strong>HTML & CSS Basics</strong></summary>

Voorbereidende vragen:

1. Hoe weet ik wanneer iets in HTML hoort en wanneer ik CSS moet gebruiken?
   -> HTML gebruik je voor de inhoud, structuur en betekenis van een website. Hiermee geef je bijvoorbeeld aan wat een titel, paragraaf, afbeelding, link of lijst is. CSS gebruik je daarna om te bepalen hoe deze onderdelen eruitzien, bijvoorbeeld de kleur, grootte, het lettertype, de achtergrond en de positie.

2. Wanneer gebruik je px en wanneer is het beter om em te gebruiken?
   -> px is handig wanneer je een vaste en specifieke grootte wilt instellen. em is vooral handig wanneer je wilt dat de grootte van een element meeschaalt met de tekstgrootte.
   Dit is bijvoorbeeld handig bij titels. Als je wilt dat een titel altijd twee keer zo groot is als de normale tekst, kun je 2em gebruiken. Wanneer je later de normale tekst groter of kleiner maakt, verandert de titel automatisch mee.

3. Wanneer is het handig om meerdere stylesheets te gebruiken in plaats van alles in één CSS-bestand te zetten?
   -> Bij een kleine website is het vaak overzichtelijk om alle CSS in één stylesheet te bewaren. Wanneer een website groter wordt en verschillende soorten pagina's heeft, kunnen meerdere stylesheets handig zijn om de code overzichtelijk te houden.

   Je kunt bijvoorbeeld een styles.css gebruiken voor de algemene vormgeving van de hele website en daarnaast een product.css voor alleen productpagina's en een blog.css voor blogpagina's.
   </details>

<details>
<summary><strong>MMD, Micro-interacties, Forms</strong></summary>
</details>

### 31 aug - Kickoff

1. Leg uit wat een source hosting platform is en voor welke jij gekozen hebt.
   Een source hosting platform is een plek waar je de code van je website online kunt opslaan en beheren. Ik heb gekozen voor GitHub.

2. Vertel welke domeinnaam jij gekozen hebt en hoe je die hebt gekoppeld aan jouw pagina.
   Ik heb mijn eigebn domeinnaam "yanaarchives.nl" gekozen en heb deze gekoppeld aan GitHub door de DNS-records van mijn domein aan te passen zoals de ip adressen.

3. Beschrijf hoe je aanpassingen aan jouw pagina kunt maken en hoe je ervoor zorgt dat die op het web gepubliceerd worden.
   Ik pas mijn website aan in VSCodium. Daarna commit ik mijn wijzigingen en sync ik ze naar GitHub. Die publiceert de nieuwe aanpassingen vervolgens op mijn website.

Een fork van de model repository gemaakt en gepubliceerd via mijn eigen Github omgeving.
