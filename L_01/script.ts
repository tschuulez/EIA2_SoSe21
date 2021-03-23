namespace Poem {

    let names: string [] = ["Spongebob", "Sandy", "Patrick", "Mr. Krebs", "Taddeus", "Plankton"];
    let verbs: string[] = ["kocht", "pflanzt", "liebt", "mag", "hasst", "isst"];
    let objects: string [] = ["Bananen", "Äpfel", "Orangen", "Erdbeeren", "Pfirsiche", "Mangos"];

    //console.log(names);
    //console.log(verbs);
    //console.log(objects);

    function Forschleife ( _arrayName: string []): void {
        for (let i: number = _arrayName.length; i >= 1; i --) {
            //console.log(i);
            getVerse(names, verbs, objects);
            //console.log(getVerse([], [], []));
        }
    } 
    Forschleife(names);

    function getVerse (_subjects: string [], _verbs: string [], _objects: string []): string {

        let verse: string = "";
        let randomNumber: number = Math.floor(Math.random() * _subjects.length);
        console.log(randomNumber);

        //_subjects.splice(_subjects[randomNumber], 1);
  
        return "Alohomora"; 

    }

    
}

