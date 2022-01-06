function attachEventsListeners() {

    const btn = document.getElementById('convert');
    btn.addEventListener('click', convert);

    function convert() {

        //get distance units and distance to convert
        const typeOfDistanceToConvert = document.getElementById('inputUnits').value;
        let distanceToConvert = Number(document.getElementById('inputDistance').value);
        
        //convert distance into meters
        switch(typeOfDistanceToConvert) {
            case 'km':
                distanceToConvert *= 1000;
                break;
            case 'cm':
                distanceToConvert /= 100;
                break;
            case 'mm':
                distanceToConvert = distanceToConvert / 100 / 10;
                break;
            case 'mi':
                distanceToConvert *= 1609.34; 
                break;
            case 'yrd':
                distanceToConvert *= 0.9144;
                break;
            case 'ft':
                distanceToConvert *= 0.3048;
                break;
            case 'in':
                distanceToConvert *= 0.0254;
                break;
        }

        //get distance units to convert value into
        const typeOfDistanceToConvertInto = document.getElementById('outputUnits').value;

        //calculate and return the corresponding converted value
        switch(typeOfDistanceToConvertInto) {
            case 'km':
                distanceToConvert /= 1000;
                break;
            case 'cm':
                distanceToConvert *= 100;
                break;
            case 'mm':
                distanceToConvert = distanceToConvert * 100 * 10;
                break;
            case 'mi':
                distanceToConvert /= 1609.34; 
                break;
            case 'yrd':
                distanceToConvert /= 0.9144;
                break;
            case 'ft':
                distanceToConvert /= 0.3048;
                break;
            case 'in':
                distanceToConvert /= 0.0254;
                break;
        }
        document.getElementById('outputDistance').value = distanceToConvert;
    }
}