function timeToWalk(stepsCount, lengthOfFootprint, studentSpeed){
    let distanceInM = stepsCount * lengthOfFootprint;
    let distanceInKm = distanceInM / 1000;
    let timeInMinutes = (distanceInKm / studentSpeed) * 60;
    let distanceBasedAdditionalTime = distanceInM;

    for(let i = 500; i < distanceBasedAdditionalTime; i+=500){
        timeInMinutes += 1;
    }

    let seconds;
    let minutes;
    let hours;
    if(timeInMinutes >= 60){
        hours = Math.floor(timeInMinutes/60);
        minutes = timeInMinutes - hours * 60;
    } else {
        hours = 0;
        minutes = Math.floor(timeInMinutes);
    }
    seconds = Math.round((timeInMinutes - Math.floor(timeInMinutes))*60);

    console.log(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds}`);
}
timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);