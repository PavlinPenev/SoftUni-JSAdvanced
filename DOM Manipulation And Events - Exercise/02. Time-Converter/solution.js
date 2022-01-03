function attachEventsListeners() {

    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    const daysBtn = document.getElementById('daysBtn');
    const hoursBtn = document.getElementById('hoursBtn');
    const minutesBtn = document.getElementById('minutesBtn');
    const secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', () => {

        const daysInput = days.value;
        hours.value = daysInput * 24;
        minutes.value = hours.value * 60;
        seconds.value = minutes.value * 60;

    });

    hoursBtn.addEventListener('click', () => {

        const hoursInput = hours.value;
        days.value = hoursInput / 24;
        minutes.value = hoursInput * 60;
        seconds.value = minutes.value * 60;

    });

    minutesBtn.addEventListener('click', () => {

        const minutesInput = minutes.value;
        days.value = minutesInput / 60 / 24;
        hours.value = minutesInput / 60;
        seconds.value = minutesInput * 60;
    
    });

    secondsBtn.addEventListener('click', () => {

        const secondsInput = seconds.value;
        days.value = secondsInput / 60 / 60 / 24;
        hours.value = secondsInput / 60 / 60;
        minutes.value = secondsInput / 60;
        
    });    
}