//Script by: Roberto Ochoa Cuevas

//Get button
const confirmButton = document.getElementById('calculate');

//Function to get the fields and log them in the console
function getFields(){
    let distance = document.getElementById('distance').value;
    let time = document.getElementById('time').value;
    let velocity = document.getElementById('velocity').value;

    //Return the values
    return { distance, time, velocity };
}

//Calculate velocity
function calculateVelocity(){
    const { distance, time } = getFields(); //Get distance and time from the fields
    const velocity = (distance / time).toFixed(2); //Get velocity
    console.log('Calculated Velocity is: ' + velocity + "m/s");
    //Set the value of the velocity field with the calculated velocity
    document.getElementById("velocity").value = velocity;
}

//Calculate Time
function calculateTime(){
    const { distance, velocity } = getFields(); //Get distance and time from the fields
    const time = (distance/velocity).toFixed(2);//Get time
    console.log('Calculated time is: ' + time + " seconds");
    //Set the value of the time field with the calculated time
    document.getElementById("time").value = time;
}

//calculate distance
function calculateDistance(){
    const { time, velocity } = getFields();//Get distance and time from the fields
    const distance = (velocity * time).toFixed(2);//Get time
    console.log('Calculated Distance is: ' + distance + " meters");
    //Set the value of the distance field with the calculated distance
    document.getElementById("distance").value = distance;
    animateMovement(distance);
}

//Main function
function calculate(){
    //Get Values of the fields
    const { distance, time, velocity} = getFields();
    
    //Compare every case
    if(time != '' && distance != '' && velocity == '') { //If velocity is in blank
        calculateVelocity();
    }else if(time != '' && velocity != '' && distance == ''){ //If distance is in blank
        calculateDistance();
    }else if(distance != '' && velocity != '' && time == ''){ //If time is in blank
        calculateTime();
    }else{
        alert('you already had all data needed');
    }
}

//Event Listener to the button
confirmButton.addEventListener('click',calculate);

// Function to animate movement
function animateMovement(distance) {
    const object = document.getElementById('animatedObject');
    const time = parseFloat(document.getElementById('time').value);
    const velocity = parseFloat(document.getElementById('velocity').value);

    const intervalTime = 50; // Intervalo de tiempo en milisegundos
    const steps = Math.ceil(time * 1000 / intervalTime); // Número de pasos de animación

    const stepDistance = distance / steps; // Distancia a mover en cada paso

    let currentStep = 0;

    const animationInterval = setInterval(() => {
        if (currentStep < steps) {
            const newPosition = (currentStep * stepDistance).toFixed(2);
            object.style.transform = `translateX(${newPosition}px)`;
            currentStep++;
        } else {
            clearInterval(animationInterval); // Detener la animación cuando se alcanza la distancia deseada
        }
    }, intervalTime);
}