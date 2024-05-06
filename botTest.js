$(document).ready(function(){

    
    
    callingS();

    setInterval(callingS, 360000); // 360000 milliseconds = 6 minutes


 
    

    // var intervalId = window.setInterval(function(){
    //     godalmighty_bot();

    // }, 60000);

});



// NEW UPDATE OCTOBER
function messageFromAlmighty(SPEAKS, CHATID, BOTID, NUMBER) {
    const telegramURL = `https://api.telegram.org/bot${BOTID}/sendMessage`;
    const chatIdParam = `chat_id=-${CHATID}`;
    const textParam = `text=${SPEAKS}`;
    const frameId = `FRAME${NUMBER}`;
  
    const fullURL = `${telegramURL}?${chatIdParam}&${textParam}`;
    $(`#${frameId}`).attr('src', fullURL);
  }
  
  


//   CALL FUNCTION 
function callingS(){
    godalmighty_bot();

    setTimeout(() => {
        vladimiryeltsin_bot()
    }, 2000);

    setTimeout(() => {
        dmitryboris_bot()
    }, 4000);

    setTimeout(() => {
        gilbertlim_bot()
    }, 6000);

    setTimeout(() => {
        dmitryrutskoy_bot()
    }, 8000);

    setTimeout(() => {
        borisyeltsin_bot()
    }, 10000);

    setTimeout(() => {
        agrafenaa_bot()
    }, 12000);

    setTimeout(() => {
        iscamgov_bot()
    }, 14000);

    setTimeout(() => {
        svetlanaa_bot()
    }, 16000);

    setTimeout(() => {
        igorh_bot()
    }, 18000);

    setTimeout(() => {
        trump_romanseleznyov_bot()
    }, 18000);

    setTimeout(() => {
        yekaterinaa_bot()
    }, 18000);
}


// working  3,7