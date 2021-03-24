"use strict";
var Poem;
(function (Poem) {
    let names = ["Spongebob", "Sandy", "Patrick", "Mr.Krebs", "Taddeus", "Plankton"];
    let verbs = ["kocht", "pflanzt", "liebt", "mag", "hasst", "isst"];
    let objects = ["Bananen", "Äpfel", "Orangen", "Erdbeeren", "Pfirsiche", "Mangos"];
    function Forschleife(_arrayName) {
        for (let i = _arrayName.length; i >= 1; i--) {
            //console.log(i);
            let verse = getVerse(names, verbs, objects);
            //console.log(getVerse([], [], []));
            console.log(verse);
        }
    }
    Forschleife(names);
    Forschleife(verbs);
    Forschleife(objects);
    function getVerse(_subjects, _verbs, _objects) {
        let randomNumberSubject = Math.floor(Math.random() * _subjects.length);
        //console.log(randomNumberSubject);
        let randomNumberVerb = Math.floor(Math.random() * _subjects.length);
        let randomNumberObject = Math.floor(Math.random() * _subjects.length);
        let verseTemp = _subjects[randomNumberSubject] + " " + _verbs[randomNumberVerb] + " " + _objects[randomNumberObject] + ".";
        _subjects.splice(randomNumberSubject, 1);
        _verbs.splice(randomNumberVerb, 1);
        _objects.splice(randomNumberObject, 1);
        return verseTemp;
    }
})(Poem || (Poem = {}));
//# sourceMappingURL=script.js.map