async function skr(){
    document.getElementById('weat-id').style.display = 'none';
}
async function getP() {
// API ключ
let apiKey = "6ac0d8b3ee5969a9562da5d28f42350e";
// Город погода которого нужна
var city = document.getElementById("in").value,text,text1, text3;
// Формируем url для GET запроса
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;
// Отправка GET запроса


function setBgColor( hexColor ) {
    document.body.styles.background = color;
}

axios.get(url).then(res => {
    document.getElementById('weat-id').style.display = 'block';
    text3="";
    document.getElementById("de").innerHTML = text3;
    document.getElementById('t').style.display = 'inline';
    
    // Вывод города
    document.querySelector('.city').innerHTML = res.data.name
    // Вывод температуры
    document.querySelector('.temp').innerHTML = res.data.main.temp
    // Вывод влажности
    document.querySelector('.humidity').innerHTML = res.data.main.humidity
    // Вывод скорости ветра
    document.querySelector('.wind').innerHTML = res.data.wind.speed

    //document.body.styles.background="#f3f3f3"
 if (res.data.main.humidity>75){  //дождь
   // text = '<img src="run.png">'
   document.body.style.backgroundSize = 'cover';
   document.body.style.backgroundImage= "url('./img/SFFd.gif')";
    //document.body.style.backgroundImage= "url(SFFd.gif)";
    document.getElementById("weat-id").style.color = 'white';
    document.getElementById("ab").style.color = 'white';
   
    //background=SFFd.gif
   // text1 = ' bgcolor="baacc7"'
   
 }
 if (res.data.main.humidity<=75&&res.data.main.temp>13){ //Солнце
    //text = '<img src="original.gif">'
    document.body.style.backgroundSize = 'cover';

    document.body.style.backgroundImage= "url('./img/IsX.gif')";
    document.getElementById("ab").style.color = 'black';
    document.getElementById("weat-id").style.color = 'black';

  
    //document.body.weather.style.color="#87CEFA"
 }
 if (res.data.main.humidity<=75&&res.data.main.temp<=13){ //облачно
    //text = '<img src="sunobl.jpg">'
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundImage= "url('./img/original.gif')";
    
    document.getElementById("weat-id").style.color = 'black';
    document.getElementById("ab").style.color = 'black';

 }
  if (res.data.wind.speed>6){  //ветер
    //text = '<img src="veter.png">'
   // document.body.style.backgroundImage= "url(1twc.gif)";
   document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundImage= "url('./img/gifgivecom.gif')";
    document.getElementById("weat-id").style.color = 'white';
    document.getElementById("ab").style.color = 'white';
    

    //document.body.style.background="#ADD8E6"
  }
 //document.getElementById("demo").innerHTML = text
 
 //.getElementById("d").innerHTML = text1

}
                             
).catch(err => {
  // document.getElementsByClassName("weather")[0].textContent = "Ошибка. Неверный город";
    //console.clear();
    document.getElementById('weat-id').style.display = 'none';
    document.getElementById('t').style.display = 'none';
   text3="Ошибка. Неверный город.";
   document.getElementById("de").style.color = 'black';
   document.getElementById("de").innerHTML = text3;
   document.body.style.background="#FFFFFF"
}
);
}
