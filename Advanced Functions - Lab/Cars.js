/**
 * 
 * @param {Array} arrayOfCommands 
 */
function cars(arrayOfCommands) {

    let objectOfCars = {};

    const utilityObj = {

        create,
        createInherit,
        set,
        print

    }

    arrayOfCommands.forEach(cmd => {

        const cmdArgs = cmd.split(' ');
        const command = cmdArgs[0];
        const name = cmdArgs[1];

        switch(command) {

            case "create":

                let car;
                if (cmdArgs[2]) {
                    const nameToInheritFrom = cmdArgs[3];
                    utilityObj.createInherit(name, nameToInheritFrom);
                    
                } else {

                    utilityObj.create(name);

                }

                break;
            case "set":
                const key = cmdArgs[2];
                const value = cmdArgs[3];
                utilityObj.set(name, key, value);
                break;
            case "print":
                utilityObj.print(name);
                break;
        }
    });

    function create(name) {

        objectOfCars[name] = {};

    }

    function createInherit(name, nameToInherit) {

        create(name);
        let carObj = objectOfCars[name];
        carObj = Object.setPrototypeOf(carObj,objectOfCars[nameToInherit]);

    }

    function set(name, key, val) {

        objectOfCars[name][key] = val;

    }

    function print(name) {

        let print = '';
        const carToPrint = objectOfCars[name];
        for (const car in carToPrint) {
            
            print += `${car}:${carToPrint[car]},`;

        }

        console.log(print.slice(0, -1));

    }
}

cars(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']);