# Model

Het staat model voor digitale tuintjes welke bij 'Het web is voor iedereen' door studenten worden gemaakt.

## Learning Log

### 8 sept - Deepdive

<details>
<summary><strong>Light & Dark Theme</strong></summary>

Vandaag ben ik begonnen met de deep dive Light and Dark themes. Voordat ik aan de eerste oefening begon, heb ik eerst de twee teksten gelezen die erbij stonden. Bij custom properties herkende ik eigenlijk bijna alles al, omdat ik hier tijdens de vorige deep dive over fonts, kleuren en effecten ook al mee had gewerkt. Daardoor snapte ik dit gedeelte vrij snel.

Daarna heb ik de intro over Light and Dark themes gelezen. Hier werd vooral uitgelegd hoe je in CSS een light en dark theme kunt maken en hoe je ervoor zorgt dat de website rekening houdt met de voorkeur van de gebruiker. Hierbij werd onder andere uitgelegd hoe color-scheme, light-dark() en @media (prefers-color-scheme: dark) werken.

Met deze informatie kon ik oefening 1 gaan maken

#### Oefening 1

Bij oefening 1 moest ik zelf een light en dark theme maken. Ik ben daarom eerst kleuren gaan kiezen die goed bij elkaar passen en waarbij er ook echt een duidelijk verschil te zien is tussen de lichte en donkere versie. Ik wilde wel dat beide themes dezelfde uitstraling en dezelfde soort kleuren behielden, zodat het nog steeds als één ontwerp voelde.

n het begin kreeg ik het alleen niet meteen werkend. Zoals je op de afbeelding kunt zien, had ik bij mijn custom properties light dark() geschreven met een spatie ertussen. Daardoor werden mijn kleuren niet goed gelezen en veranderde het theme dus niet zoals ik wilde. Ik heb hier best even naar moeten zoeken voordat ik doorhad dat het light-dark() moest zijn. Nadat ik dit had aangepast werkte het wel.

![Fout in code](images/readme/Codefout.png)

In het begin kreeg ik het alleen niet meteen werkend. Zoals je op de eerste afbeelding kunt zien, had ik bij mijn custom properties light dark() geschreven met een spatie ertussen. Daardoor werden mijn kleuren niet goed gelezen en veranderde het theme dus niet zoals ik wilde. Ik heb hier best even naar moeten zoeken voordat ik doorhad dat het light-dark() moest zijn. Nadat ik dit had aangepast werkte het wel.

![oefening 1](images/readme/oefening1_lightdark.png)

#### Oefening 2

Bij deze opdracht moest ik een light en dark theme maken voor de kattenwinkel. Hierbij moest ik de custom properties in de html-selector definiëren en deze daarna op de juiste plekken in mijn CSS gebruiken.

Deze opdracht ging een stuk makkelijker dan de eerste oefening. Bij oefening 1 had ik al ontdekt welke fout ik maakte met light-dark() en daardoor wist ik nu meteen hoe ik dit goed moest schrijven.

Ik heb aparte properties gemaakt voor de achtergrond, header en verschillende tekstkleuren. Hier moest ik wel voor terug in de HTML kijken, om te kijken wat voor selector er voor wat was gebruikt zodat ik dat in mijn CSS kon targeten. Per property heb ik met light-dark() een kleur voor de lichte en donkere versie ingesteld. Daarna heb ik die properties gekoppeld aan de juiste onderdelen, zoals body, header en de headings. Hierdoor merkte ik dat ik de theorie uit de eerste tekst nu echt beter begon toe te passen en beter wist hoe de opbouw van zo’n light en dark theme in CSS werkt.

![oefening 2](images/readme/oefening2_lightdark.png)

#### Voorbereiding oefening 3

Voordat ik aan de volgende opdracht begon, heb ik eerst de tekst over responsive afbeeldingen gelezen. Hier heb ik vooral geleerd dat je niet alleen rekening moet houden met light en dark mode, maar ook met verschillende schermgroottes. Met het <picture>-element en meerdere <source>-elementen kun je bepalen welke afbeelding er wordt gebruikt op bijvoorbeeld een klein of groot scherm. Met media queries kun je daar voorwaarden aan koppelen, zoals de breedte van het scherm of prefers-color-scheme.

Ik vond dit eigenlijk best interessant, omdat ik hier in jaar 1 nog helemaal niet echt mee bezig was. Daardoor kon een website die er op mijn laptop goed uitzag, er op een groter scherm ineens heel anders uitzien. Nu begrijp ik beter dat je bij het ontwerpen en bouwen rekening moet houden met verschillende devices en situaties, zodat je website niet alleen op je eigen scherm goed werkt.

Daarnaast heb ik geleerd dat je afbeeldingen en iconen ook kunt aanpassen aan light en dark mode. Dat kan bijvoorbeeld met een inline SVG, een CSS-filter of met verschillende afbeeldingen binnen een <picture>-element. Vooral het responsive gedeelte vond ik handig om te leren, omdat ik dit later kan gebruiken om ervoor te zorgen dat mijn website op meerdere apparaten goed blijft werken.

#### Oefening 3

Daarna ben ik verdergegaan met oefening 3, waarbij ik de theorie over responsive afbeeldingen en light/dark mode moest toepassen. Voor deze opdracht moest ik van één afbeelding in totaal vier varianten maken: een grote lichte versie, een grote donkere versie, een kleine lichte versie en een kleine donkere versie. De lichte afbeelding hadden we al gekregen en met AI heb ik daar een donkere variant van gemaakt. Daarna heb ik van beide versies ook nog een kleinere variant gemaakt.

Vervolgens heb ik deze vier afbeeldingen in mijn project gezet en gebruikt binnen een <picture>-element. Ik heb hierbij met <source> aangegeven welke afbeelding gebruikt moet worden op basis van de schermgrootte en of de gebruiker een light of dark theme heeft ingesteld. Voor de donkere versies heb ik prefers-color-scheme: dark gebruikt en voor de grotere afbeeldingen heb ik ook een voorwaarde met de breedte van het scherm toegevoegd.

Ik wist deze code nog niet helemaal uit mijn hoofd, dus ik heb het voorbeeld uit de theorie erbij gehouden. Vanuit dat voorbeeld heb ik de structuur overgenomen en daarna mijn eigen bestandsnamen en voorwaarden ingevuld. Hierdoor begreep ik wel beter hoe de verschillende <source>-regels samenwerken en dat de browser uiteindelijk zelf de afbeelding kiest die het beste past bij de situatie van de gebruiker.

![oefening 3](images/readme/oefening3_lightdark.png)

</details>

### 7 sept - Workshop 1

<details>
<summary><strong>Sprintplanning</strong></summary>

</details>

<details>
<summary><strong>Verkenning onderwerp</strong></summary>

#### Opdracht 1 – Rangschikken

#### Opdracht 2 – Eigen verkenning

<strong>Vanuit de inventarisatie</strong>

Voor mijn Digital Garden wil ik iets maken rondom muziek en hoe muziek een rol speelt in mijn leven. Ik heb voor dit idee gekozen omdat muziek echt een dagelijks onderdeel van mijn leven is. Er staat bijna de hele dag wel muziek aan in mijn kamer, maar ook als ik onderweg ben luister ik eigenlijk altijd wel naar muziek. Daarom leek het me leuk om mijn Digital Garden hierover te maken en te laten zien welke rol muziek in mijn dagelijks leven speelt. Ik wil niet alleen mijn favoriete nummers en artiesten laten zien, maar vooral laten zien welke muziek ik luister op verschillende momenten, welke gevoelens ik bij muziek krijg en welke herinneringen ik aan bepaalde nummers heb.

Tijdens het bekijken van de verschillende websites zag ik veel interactieve elementen en websites die bijna als een soort eigen wereld of kamer waren opgebouwd. Je navigeerde niet alleen via een standaard menu, maar kon op verschillende onderdelen en voorwerpen klikken om weer ergens anders terecht te komen. Dat vond ik heel leuk, omdat je hierdoor zelf de website kunt ontdekken en niet één vaste route hoeft te volgen.

Hierdoor kwam ik op het idee om mijn Digital Garden misschien ook als een soort interactieve kamer rondom muziek te maken. In de kamer zouden dan verschillende voorwerpen kunnen staan, zoals een koptelefoon, cd's, posters of een platenspeler, die je naar verschillende onderdelen van mijn garden brengen.

Dit is voor nu nog maar een idee en ook wel een uitdaging, omdat ik nog niet goed weet hoe ik zoiets moet maken met HTML en CSS. Juist daarom lijkt het me interessant om tijdens deze sprint te kijken hoeveel hiervan mogelijk is en wat ik zelf kan leren maken.

<strong>Welke webby dingen wil ik gebruiken?</strong>

Bij de websites die ik heb bekeken vond ik het vooral leuk als je niet meteen wist wat er allemaal te vinden was en zelf dingen moest ontdekken. Dat wil ik ook in mijn website verwerken en ik wil het natuurlijk zo webby mogelijk maken.

Ik wil bijvoorbeeld gebruikmaken van hover-effecten, klikbare voorwerpen, animaties en verschillende pagina's die met elkaar verbonden zijn. Ook lijkt het me leuk als bepaalde dingen pas zichtbaar worden wanneer je erop klikt of er met je muis overheen gaat. De garden hoeft hierdoor niet in één vaste volgorde bekeken te worden. Je kunt zelf bepalen waar je naartoe gaat en misschien ook verborgen dingen tegenkomen.

<strong>Eigen content, toon, context en doel</strong>

Mijn onderwerp is muziek, maar vooral mijn eigen ervaring met muziek. Ik wil bijvoorbeeld iets vertellen over:

- muziek die bij verschillende moods past
- muziek die ik op bepaalde momenten luister, zoals tijdens het studeren, klaarmaken of 's avonds
- nummers waar ik herinneringen aan heb
- mijn favoriete artiesten en nummers
- muziekfases die ik heb gehad
- nummers die ik vroeger veel luisterde
- nummers die ik nooit skip
- muziek die ik op dit moment veel luister
- guilty pleasures

De toon wil ik persoonlijk, casual en soms een beetje grappig houden. Het moet niet voelen alsof ik informatie over muziek probeer uit te leggen. Het doel is juist dat iemand door mijn garden een beetje kan ervaren hoe ik muziek beleef en welke plek muziek in mijn leven heeft.

<strong>Content van anderen</strong>

Ik zal waarschijnlijk ook content van anderen gebruiken, omdat mijn onderwerp muziek is. Denk bijvoorbeeld aan albumcovers, artiesten, songtitels, links naar muziek en misschien korte verwijzingen naar lyrics. Daarbij wil ik steeds duidelijk maken van wie de originele content is en waar het vandaan komt.

Ik wil die content niet zomaar verzamelen en neerzetten, maar er mijn eigen verhaal en ervaring aan toevoegen. Een albumcover staat er bijvoorbeeld niet alleen omdat ik hem mooi vind, maar omdat ik vertel wat dat album voor mij betekent of waar het mij aan doet denken.

<strong>Hoe kan mijn content worden ervaren?</strong>

Ik wil dat mijn garden niet alleen iets is wat je leest en bekijkt, maar iets waar je zelf doorheen kunt gaan en dingen kunt ontdekken.

Muziek kan natuurlijk ook echt gehoord worden, bijvoorbeeld doordat je nummers kunt afspelen of via links kunt beluisteren. Visueel wil ik verschillende gevoelens en soorten muziek ook anders laten aanvoelen met kleur, typografie, afbeeldingen en beweging.

Bij rustige of late-night muziek kan een gedeelte bijvoorbeeld donkerder en rustiger zijn, terwijl muziek voor tijdens het klaarmaken juist drukker en vrolijker kan voelen. Door te klikken, hoveren en zelf een route door de garden te kiezen wil ik ervoor zorgen dat iedere bezoeker mijn muziekwereld op zijn eigen manier kan ontdekken.

</details>

<details>
<summary><strong>Checkout</strong></summary>

<strong>1. Leg uit wat een digital garden is en waarom dat anders is dan een reguliere website.</strong>
Een digital garden is eigenlijk een soort online plek waar je allemaal dingen verzamelt die je interessant vindt of waar je mee bezig bent. Het hoeft niet allemaal helemaal af te zijn en je kan dingen steeds blijven aanpassen of uitbreiden. Bij een normale website is alles vaak veel meer af en heeft het een duidelijke structuur waar je als bezoeker doorheen gaat. Bij een digital garden mag het juist wat vrijer en persoonlijker zijn. Er is niet 1 bepaalde route die je moet doorlopen, maar er zijn meerdere waaruit je kan kiezen.

<strong>2. Leg uit wat een website 'webby' maakt en welke websites jou het meeste inspireren.</strong>
Een website is webby als hij echt gebruikmaakt van de mogelijkheden van het web, bijvoorbeeld interactie, hover-effecten, animaties, een responsive ontwerp en dingen die je zelf kunt ontdekken. De websites die mij het meest inspireren zijn vooral de websites die als een soort interactieve wereld zijn opgebouwd, waarbij je op verschillende voorwerpen kunt klikken en niet één vaste route hoeft te volgen.

<strong>3. Vertel waar jij mee aan de slag wilt gaan bij het maken van jouw eigen digital garden (let op: dit zijn jouw eerste ideeën, dit kan en mag veranderen in de loop van het programma.)</strong>
Ik wil aan de slag gaan met een Digital Garden rondom muziek en hoe ik muziek beleef in mijn dagelijks leven. Ik wil vooral experimenteren met interactieve elementen, zoals klikbare voorwerpen, hover-effecten en animaties, zodat je zelf door mijn muziekwereld kunt ontdekken.

</details>

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

<details>
<summary><strong>Checkout</strong></summary>
1. Leg uit wat een source hosting platform is en voor welke jij gekozen hebt.
   Een source hosting platform is een plek waar je de code van je website online kunt opslaan en beheren. Ik heb gekozen voor GitHub.

2. Vertel welke domeinnaam jij gekozen hebt en hoe je die hebt gekoppeld aan jouw pagina.
   Ik heb mijn eigebn domeinnaam "yanaarchives.nl" gekozen en heb deze gekoppeld aan GitHub door de DNS-records van mijn domein aan te passen zoals de ip adressen.

3. Beschrijf hoe je aanpassingen aan jouw pagina kunt maken en hoe je ervoor zorgt dat die op het web gepubliceerd worden.
   Ik pas mijn website aan in VSCodium. Daarna commit ik mijn wijzigingen en sync ik ze naar GitHub. Die publiceert de nieuwe aanpassingen vervolgens op mijn website.

Een fork van de model repository gemaakt en gepubliceerd via mijn eigen Github omgeving.

</details>
