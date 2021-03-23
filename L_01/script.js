"use strict";
var Poem;
(function (Poem) {
    let names = ["Spongebob", "Sandy", "Patrick", "Mr. Krebs", "Taddeus", "Plankton"];
    let verbs = ["kocht", "pflanzt", "liebt", "mag", "hasst", "isst"];
    let objects = ["Bananen", "Äpfel", "Orangen", "Erdbeeren", "Pfirsiche", "Mangos"];
    //console.log(names);
    //console.log(verbs);
    //console.log(objects);
    function Forschleife(_arrayName) {
        for (let i = _arrayName.length; i >= 1; i--) {
            //console.log(i);
            getVerse(names, verbs, objects);
            //console.log(getVerse([], [], []));
        }
    }
    Forschleife(names);
    function getVerse(_subjects, _verbs, _objects) {
        let verse = "";
        let randomNumber = Math.floor(Math.random() * _subjects.length);
        console.log(randomNumber);
        //_subjects.splice(_subjects[randomNumber], 1);
        return "Alohomora";
    }
})(Poem || (Poem = {}));
//# sourceMappingURL=script.js.map