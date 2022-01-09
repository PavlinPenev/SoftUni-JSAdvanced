function solution() {

    let result = '';

    return {

        append,
        removeStart,
        removeEnd,
        print

    }

    function append(string) {

        result += string;

    }

    function removeStart(charCountToRemove) {

        result = result.slice(charCountToRemove);

    }

    function removeEnd(charCountToRemove) {

        result = result.slice(0, -charCountToRemove);

    }

    function print() {

        console.log(result);

    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();