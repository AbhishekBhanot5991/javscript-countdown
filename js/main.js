 const endDate = "23 April 2026 01:27 PM";

 document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input") 
 const clock = () =>{
    const end = new Date(endDate);
    const now = new Date();
    console.log(end);
    console.log(now);
    // const diff = end - now // this will give us difference between endDate and now date in miliseconds
    const diff =  (end - now) / 1000; //converted miliseconds to seconds
    console.log(diff);
    if(diff < 0 ) return;
    console.log(Math.floor(diff / 3600 / 24)) // counted days Math.floor convert floating numbers into a number 
    inputs[0].value = Math.floor(diff / 3600 / 24); // counted days Math.floor convert floating numbers into a number

    console.log(Math.floor(diff / 3600) % 24); // counted hours
    inputs[1].value = Math.floor(diff / 3600) % 24; //counted hours

    console.log(Math.floor(diff / 60) % 60);
    inputs[2].value = Math.floor(diff / 60) % 60; //counted minutes

    console.log(Math.floor(diff) % 60);
    inputs[3].value = Math.floor(diff) % 60;

 }  

//  initial call
 clock();

 setInterval(
    () =>{
        clock();
    }, 1000
 )
