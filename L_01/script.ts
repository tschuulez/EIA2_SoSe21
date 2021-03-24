namespace Poem {

    let names: string [] = ["Spongebob", "Sandy", "Patrick", "Mr.Krebs", "Taddeus", "Plankton"];
    let verbs: string[] = ["kocht", "pflanzt", "liebt", "mag", "hasst", "isst"];
    let objects: string [] = ["Bananen", "Äpfel", "Orangen", "Erdbeeren", "Pfirsiche", "Mangos"];

    function Forschleife ( _arrayName: string []): void {
        for (let i: number = _arrayName.length; i >= 1; i --) {
            //console.log(i);
            let verse: string = getVerse(names, verbs, objects);
            //console.log(getVerse([], [], []));
            console.log(verse);
        }
    } 

    Forschleife(names);
    Forschleife(verbs); 
    Forschleife(objects);

    function getVerse (_subjects: string [], _verbs: string [], _objects: string []): string {

        let randomNumberSubject: number = Math.floor(Math.random() * _subjects.length);
        //console.log(randomNumberSubject);
        let randomNumberVerb: number = Math.floor(Math.random() * _subjects.length);
        let randomNumberObject: number = Math.floor(Math.random() * _subjects.length);

        let verseTemp: string = _subjects[randomNumberSubject] + " " +   _verbs[ randomNumberVerb] + " " +  _objects[ randomNumberObject] + ".";

        _subjects.splice(randomNumberSubject, 1);
        _verbs.splice(randomNumberVerb, 1);
        _objects.splice(randomNumberObject, 1);
  
        return verseTemp; 

    }

    
}

