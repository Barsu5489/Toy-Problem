/*
* carSpeed - function that detects speed of a car
* @speed - speed of car in km/hr
* Output/Return - Points depending on car speed 
*/

function carSpeed(speed)
{
    if (speed < 70) // Output is 'OK' if speed is less than 70km/hr
    {
        return 'OK';
    }
    else if (speed > 70 && (speed - 70) % 5 == 0 && (speed - 70) / 5 <= 12) // calculates demerit points and outputs demerits points if it is less thsn 12 .
    {
        const points =  (speed - 70) / 5
        return `Points: `+ points
    }
    else if ( (speed - 70) / 5 > 12) // Checks if demerits points in more than 12 and outputs 'License suspended' if true.
    {
        return 'License suspended'
    }
    else if (speed > 70 && (speed - 70) % 5 != 0) // Handle whole numbers not divisible by 5.
    {
        return 'Points will increase after 5km/hr speed increase'
    }
    
}
console.log(carSpeed(100)) // Testing if program works 
