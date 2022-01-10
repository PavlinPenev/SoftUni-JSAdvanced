function add(value) {

    let result = value;

    function sum(num2) {

        result += num2;
        return sum;

    }

    sum.toString = function() {
        
        return result;
    
    };
    return sum;

}

console.log(Number(add(1)(6)(-3)));