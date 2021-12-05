function roadRadar(driverSpeed, area){
    let maxSpeed;
    let result;
    let status;
    switch(area){
        case 'motorway':
            maxSpeed = 130;
            break;
        case 'interstate':
            maxSpeed = 90;
            break;
        case 'city':
            maxSpeed = 50;
            break;
        case 'residential':
            maxSpeed = 20;
            break;
    }
    if(driverSpeed <= maxSpeed){
        result = `Driving ${driverSpeed} km/h in a ${maxSpeed} zone`
    } else {
        let difference = driverSpeed - maxSpeed;
        switch(true){
            case difference <= 20:
                status = 'speeding';
                break;
            case difference <= 40:
                status = 'excessive speeding';
                break;
            default:
                status = 'reckless driving';
                break;
        }
        result = `The speed is ${driverSpeed - maxSpeed} km/h faster than the allowed speed of ${maxSpeed} - ${status}`;
    }
    console.log(result);
}
roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');