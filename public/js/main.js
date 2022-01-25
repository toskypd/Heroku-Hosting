const cityName= document.getElementById('cityName');
const submitBtn= document.getElementById('submitBtn');

const city_name= document.getElementById('city_name');
const temp= document.getElementById('temp');
const temp_status= document.getElementById('temp_status');
const datahide= document.querySelector('.middle_layer');
const tempreal= document.getElementById('tempreal');

const getInfo = async(event) => {
    event.preventDefault();
   let cityVal= cityName.value;
   if(cityVal === ""){
     city_name.innerText= `Please enter the city name first`;
     datahide.classList.add('data_hide');
   }else{
       try{
    let url= `https://yacdn.org/proxy/http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=376113179c09db520d87c8fae2351868`
    const response= await fetch(url);
    const data= await response.json();
    const arrData= [data];
    

    city_name.innerText= `${arrData[0].name}, ${arrData[0].sys.country}`;
    tempreal.innerText= arrData[0].main.temp;
    
    const tempMood= arrData[0].weather[0].main;

    //condition to check sunny or cloudy
    if(tempMood == "Clear"){
        temp_status.innerHTML=
        "<i class='fas fa-sun' style='color: #eccc68;'></i>";
    }else if (tempMood == "Clouds"){
        temp_status.innerHTML=
        "<i class='fas fa-cloud' style='color: #364049;'></i>";
    }else if (tempMood == "Rain") {
        temp_status.innerHTML = 
        "<i class='fas fa-cloud-rain' style='color: #077FEB'></i>";
    }else if (tempMood == "Snow") {
        temp_status.innerHTML = 
        "<i class='fas fa-snowman' style='color: #117DD3 ;'></i>";
    } else {
        temp_status.innerHTML=
        "<i class='fas fa-cloud-sun-rain' style='color: #4C5C69;'></i>";
    }

    datahide.classList.remove('data_hide');

}catch{
      city_name.innerText= `No such City`;
      datahide.classList.add('data_hide');
   }
}
}

submitBtn.addEventListener('click', getInfo);