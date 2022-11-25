/*
* carSpeed - function that detects speed of a car
* @speed - speed of car in km/hr
* Output/Return - Points depending on car speed 
*/

function carSpeed(speed)
{
    if (speed < 70)
    {
        return 'OK';
    }
    else if (speed > 70 && (speed - 70) % 5 == 0 && (speed - 70) / 5 <= 12)
    {
        const points =  (speed - 70) / 5
        return `Points: `+ points
    }
    else if ( (speed - 70) / 5 > 12 )
    {
        return 'License suspended'
    }
    
}
console.log(carSpeed(133))