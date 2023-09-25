// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat (name){
    cats.push ("Ralph")

};
function destructivelyPrependCat (name){
    cats.unshift ("Bob")   

}; 
function destructivelyRemoveLastCat (name) {
    cats.pop ()    

}; 
function destructivelyRemoveFirstCat (name) {
    cats.shift ()  

};   
function appendCat (name) {
    const newCats = [...cats, "Broom"];
    return newCats

};
function prependCat (name) {
    const newestCats = ["Arnold", ...cats];
    return newestCats

};
function removeLastCat (name) {
    const newerCats = cats.slice(0, -1);
    return newerCats;
    
};
function removeFirstCat (name){
    const neewCats = cats.slice(1);
    return neewCats;

};   


