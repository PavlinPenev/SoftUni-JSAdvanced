function solution(initialNum) {

    let number = initialNum;
    function add(numToAdd) {

        return number + numToAdd;

    }

    return add;

}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));