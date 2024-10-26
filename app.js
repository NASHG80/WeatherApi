let btn=document.querySelector(".srchbtn");
let inp=document.querySelector(".srcharea");
let tempdiv=document.querySelector(".temp");
let presdiv=document.querySelector(".pressure");
let humdiv=document.querySelector(".humidity");

const apiKey = 'enter_your_key';
const country = 'IN';
let humidity="";
let pressure="";
let temp="";

async function weatherApi() {
    const city = inp.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${apiKey}`;
    try{
        let res1= await axios.get(url);
        return res1.data.main;
    }catch(e){
        console.log("error: ",e);
        return "error";
    }
}

btn.addEventListener("click",async ()=>{
    let result= await weatherApi();
    console.log(result);
    temp=Math.round(result.temp - 273.15);
    pressure=result.pressure;
    humidity=result.humidity;
    tempdiv.innerText=`Temperature: ${temp} °C`;
    presdiv.innerText=`Pressure: ${pressure} hPa`;
    humdiv.innerText=`Humidity: ${humidity} %`;
});


