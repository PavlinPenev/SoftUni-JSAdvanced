function wordsUpperCase(string){
    string = string.toUpperCase();
    let regex = /[A-Za-z0-9]+/g;
    strArray = [...string.matchAll(regex)];
    console.log(strArray.join(", "));
}
wordsUpperCase('Hi, how are you?');
wordsUpperCase('hello');