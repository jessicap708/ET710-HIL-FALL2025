function checkDate()
{
    const userDate = document.forms["dateForm"]["userDate"].value;
    const outputMsg = document.getElementById('output');

    let isWeekend = checIfWeekend(userDate);
    let isHoliday = checIfHoliday(userDate);
    
    if(isWeekend || isHoliday)
    {
        outputMsg.textContent = "You can relax today.";
    }
    else
    {
        outputMsg.textContent = "It's a working day."
    }         
}
function checkIfWeekend(today = "")
{
    let date = new Date(today);
    // 0 - 6
    let currentDay0fWeek = date.getUTCDay();

    return false;
}
function checkIFHoliday(today = "")
{
    let date= new Date(today);
    let currentDayofMonth = date.getUTCDate();
    //Add 1 because the result is zero based. 
    // 0 - 11
    let currentMonth = (date.getMonth() + 1);

    return false;
}