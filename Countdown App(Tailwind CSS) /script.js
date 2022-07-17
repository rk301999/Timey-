
const hours1 =document.getElementById('hours');
const min1 =document.getElementById('min');
const sec1 =document.getElementById('sec');
const days1 =document.getElementById('days');

const bday = '30 sep 2022';

function countdown(){
    const bdaydate = new Date(bday);
    const currdate = new Date();
    const totalsec = (bdaydate - currdate) / 1000;
    const days = Math.floor(totalsec/3600/24);
    const hours = Math.floor(totalsec/3600)%24;
    const min = Math.floor(totalsec/60)%60;
    const sec = Math.floor(totalsec%60);

    hours1.innerHTML = style(hours);
    min1.innerHTML = style(min);
    sec1.innerHTML = style(sec);
    days1.innerHTML = style(days);
}

function style(time){
    if(time<10)
        return `0${time}`;
    else
        return time;
}

setInterval(countdown,1000);