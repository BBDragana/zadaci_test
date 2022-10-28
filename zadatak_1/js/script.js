
var pocetniNiz = [2,55,333,685,25,69,887,454,96,151,74,721,3,91,5]; //definisem niz
for(var i=0; i<pocetniNiz.length; i++) {//prolazim kroz elemente niza 
    pNiz.innerHTML += pocetniNiz[i]+" "; //ispis
}

//a
for(var i=0; i<pocetniNiz.length; i++) { 
    var element=pocetniNiz[i]; //definisem element koji uzima element niza
    if (element>9 && element<100){ //provjera da li je dvocifren
         dvocifreni.innerHTML += element+" "; 
    }
}



//b
var suma =0; //definisana pocetna vrijednost sume
for(var i=0; i<pocetniNiz.length; i++) {
    suma+=pocetniNiz[i]; //pocetnoj vrijednosti sume dodajem svaki element niza
}
aritmetickaSredina.innerHTML=suma/pocetniNiz.length; //dijeli ukupnu sumu sa brojem elemenata niza kako bi dobili aritmeticku sredinu



//c
function isPalindrom (broj){ //pravim fukciju koja uzima jedan parametar
    var vrijednost=broj; //pravim promjenjivu koju cu koristiti za racunanje
    var cifre=[]; // niz u koji cu smjestati cifre broja
    while(vrijednost>0){ //dok je vrijednost veca od nule, odvajam cifre
        var cifra= vrijednost%10; //odvajam poslednju cifru broja
        cifre.push(cifra); //ubacujem cifru koju sam odvojila u gore definisan niz cifara
        vrijednost=(vrijednost-cifra)/10; //izbacujem tu cifru iz broja
    }
    var cifreUnazad=[]; //niz u koji smjestam cifre unazad
    for(var i=0; i<cifre.length; i++){
       cifreUnazad.push(cifre[cifre.length-(i+1)]); //ubacujem cifre pocevsi od posljednjeg do prvog indeksa
    }

    var rezultat=true; //inicijalna vrijednost rezultata
    for(var i=0; i<cifre.length; i++){ 
        if (cifre[i]!=cifreUnazad[i]) { //da bi broj bio palindrom cifre na istim indeksima u nizovima "cifre" i "cifreUnazad" bi morale biti jednake
            rezultat=false;
            break; //ako neka od cifara nije jednaka njenom paru u drugom nizu broj nije palindrom
        }
        
    }
    return rezultat;
}

for(var i=0; i<pocetniNiz.length; i++){
    if(isPalindrom(pocetniNiz[i])) //provjera kroz funkciju da li je element iz niza palindrom
    {
        palindromi.innerHTML+=pocetniNiz[i]+ " "; //ispis palindroma
    }
}



//d
for(var i=0; i<pocetniNiz.length; i=i+2){ // kroz petlju pocinjem od parnog indeksa i svaki drugi mora biti paran
    parniIndeksi.innerHTML+=pocetniNiz[i] + " "; 

}



//e
function sortiraj(a,b){ //kreiram funkciju koja ce da poredi elemente niza
    return a-b;
}
pocetniNiz.sort(sortiraj); //nad nizom pozivam funkciju za sortiranje koja ce da koristi moju funkciju
for(var i=0; i<pocetniNiz.length; i++){ //prolazi kroz niz
    sortiranNiz.innerHTML+=pocetniNiz[i] + " "; //ispisuje
}