/**
 * 
 * @param {Array} input 
 */
function listProcessor(input) {

    let collection = [];

    const utilityObj = {

        add,
        remove,
        print

    }

    function add(element) {

        collection.push(element);

    }

    function remove(element) {

        collection = collection.filter(e => e !== element);

    }

    function print() {

        console.log(collection.join(','));

    }

    input.forEach(command => {

        const cmdArgs = command.split(' ');
        const cmd = cmdArgs[0];
        const item = cmdArgs[1];

        switch(cmd) {

            case "add":
                utilityObj.add(item);
                break;
            case "remove":
                utilityObj.remove(item);
                break;
            case "print":
                utilityObj.print();
                break;
        }

    });
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);