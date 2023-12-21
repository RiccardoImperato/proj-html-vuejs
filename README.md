# Midterm Project

In questo progetto replico un layout utilizzando gli assets forniti (immagini, sfondi, effetti hover ecc. ), restando il più fedele possibile alla reference.

La pagina è composta da tre macro elementi che contengono a loro volta i componenti del sito: 

- AppHeader
- AppMain
- AppFooter

### AppHeader 

AppHeader contiene i componenti Banner: in cui sono presenti gli orari, i contatti e i social dell'azienda; e Hero: che contiene la navbar e il titolo principale della pagina e ha una immagine di background.  

### AppMain

In questo componente è racchiusa buona parte del sito: 

- Sezione Action, tre card coi punti di forza dell'azienda
- Sezione Company, storico e valori dell'azienda   
- Sezione Services, griglia di card a rappresentare i servizi che l'azienda offre
- Sezione Prices, tre card col rispettivo tipo di piano mensile
- Sezione News, anche qui tre card con le ultime notizie pubblicate
- Sezione Newsletter, un form in cui l'utente può iscriversi alla newsletter della compagnia
- Sezione Message, un altro form in cui l'utente può inserire i suoi dati e mandare un messaggio all'azienda e una parte di contatti 

### AppFooter

In Appfooter sono presenti due componenti, FooterTop: con i contatti della compagnia e tre card con le voci di menù del sito; e FooterBottom: un piccolo banner con il copyright.   

Per i contatti e le voci di menù di Navbar, le liste nelle card della sezione Price e le liste nelle card della sezione FooterTop, ho realizzato una struttura dati nel file store.js che ho poi richiamato all'interno dei vari componenti.    