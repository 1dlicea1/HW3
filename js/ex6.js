let hour = Number(prompt("what hour is it?"));
let minute = Number(prompt("what minute is it?"));
let second = Number(prompt("what second is it?"));

if (second > 59 || second < 0 || minute > 59 || minute < 0 || hour > 23 || hour < 0) 
{
    console.log("please, enter a valid time");
} 
else{
    second++;
}

if(second == 60)
{
    second = 00;
    minute++;
        
    if(minute == 60)
    {
        minute = 00;
        hour++;

        if(hour == 24)
        {
            hour = 00;
        }
    }      
}

console.log(`${hour}h ${minute}m ${second}s`);
