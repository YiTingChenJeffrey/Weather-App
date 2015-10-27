var base_url = "http://api.openweathermap.org/data/2.5/weather";
var base_url2 = "http://api.openweathermap.org/data/2.5/forecast";
var city_url = "?q=Miami";
var app_id = "&appid=3c0717be8c33c4a0695c0b6ba700b72f";
var units = "&units=imperial";
var cityName;
var paddingAmount;
var wea;
var wea2;
var degree1;
var temp;
var d;
var m;
var day;
var weapic;
var weaf
var weaff
var weafff
var weapicc;

function setup(){
    cityName = createInput();
    var searchButton = createButton('search'); 
    cityName.parent('hahaha');
   
    searchButton.parent('lolol');
    searchButton.addClass('hihi');
    searchButton.mousePressed(weatherLookup);
    select("#oneone").mousePressed(index1);
}

function draw(){
}
    

function weatherLookup() {
  city_url = "?q=" + cityName.value();
  var url = base_url + city_url + app_id + units;
  loadJSON(url, gotWeather);
    
    var url2 = base_url2 + city_url + app_id + units;
    loadJSON(url2, gotweather2);
    
   
      
    }

function    index1(){
    
            $.ajax({
              url: "index1.html",
              cache: false
            })
              .done(function( html ) {
                $( "#aaajaaa" ).html(html);
              })
                .done(function(){
                $("#degreee").html("<p>"+temp+"F</p>");
                $(".bbbox").html("<p>"+mon(m)+" "+d+"</p>");
                $(".bbbbox").html("<p>"+weekday(day)+"</p>");
                if(weapic == "clear"){
                   $(".yollll").html('<img src="sun.gif">')};
                if(weapic == "clear1"){
                   $(".yollll").html('<img src="cloud.gif">')};
                if(weapic == "clear2"){
                   $(".yollll").html('<img src="rain.gif">')};
                if(weapic == "clear3"){
                   $(".yollll").html('<img src="lightning.gif">')};
                if(weapic == "clear4"){
                   $(".yollll").html('<img src="snow.gif">')};
                    if(weaf>="01d" && weaf<="02n"){
        $("#ahq").html('<img src="SVG/sun.svg">');
                    }
                    else if(weaf>="03d" && weaf<="04n"){
        $("#ahq").html('<img src="SVG/cloud.svg">');
                        }
                    else if(weaf>="09d" && weaf<="10n"){
        $("#ahq").html('<img src="SVG/rain.svg">');
                        }
                   else if(weaf>="11d" && weaf<="11n"){
        $("#ahq").html('<img src="SVG/lightning.svg">');
                       }
                    else if(weaf>="13d" && weaf<="50n"){
        $("#ahq").html('<img src="SVG/snow.svg">');
                        };
                    if(weaff>="01d" && weaff<="02n"){
        $("#fw").html('<img src="SVG/sun.svg">');
                        }
                    else if(weaff>="03d" && weaff<="04n"){
        $("#fw").html('<img src="SVG/cloud.svg">');
                        }
                    else if(weaff>="09d" && weaff<="10n"){
        $("#fw").html('<img src="SVG/rain.svg">');
                        }
                    else if(weaff>="11d" && weaff<="11n"){
        $("#fw").html('<img src="SVG/lightning.svg">');
                        }
                    else if(weaff>="13d" && weaff<="50n"){
        $("#fw").html('<img src="SVG/snow.svg">');
                        };
                        if(weafff>="01d" && weafff<="02n"){
        $("#tpa").html('<img src="SVG/sun.svg">');
                            }
                    else if(weafff>="03d" && weafff<="04n"){
        $("#tpa").html('<img src="SVG/cloud.svg">');
                        }
                    else if(weafff>="09d" && weafff<="10n"){
        $("#tpa").html('<img src="SVG/rain.svg">');
                        }
                    else if(weafff>="11d" && weafff<="11n"){
        $("#tpa").html('<img src="SVG/lightning.svg">');
                        }
                    else if(weafff>="13d" && weafff<="50n"){
        $("#tpa").html('<img src="SVG/snow.svg">');
                        };
                
            });
}

function mon(a){
    if(a==0)return "January";
    if(a==1)return "Feburary";
    if(a==2)return "March";
    if(a==3)return "April";
    if(a==4)return "May";
    if(a==5)return "June";
    if(a==6)return "July";
    if(a==7)return "Augest";
    if(a==8)return "September";
    if(a==9)return "October";
    if(a==10)return "November";
    if(a==11)return "December";
}

function weekday(day){
    if(day==0)return "Sunday";
    if(day==1)return "Monday";
    if(day==2)return "Tuesday";
    if(day==3)return "Wednesday";
    if(day==4)return "Thursday";
    if(day==5)return "Friday";
    if(day==6)return "Saturday";
}

function gotWeather(weather) {
   
    wea = weather.weather[0].icon;
    temp = weather.main.temp;
    d = new Date(1000*weather.dt).getDate();
    m = new Date(1000*weather.dt).getMonth();
    day =  new Date(1000*weather.dt).getDay();
    if(weather.weather[0].icon>="01d" && weather.weather[0].icon<="02n"){
        $("#oneone").html('<a href="index1.html"><img src="img/sun.svg">');
        weapic = "clear";
       
    } 
    else if (weather.weather[0].icon>="03d" && weather.weather[0].icon<="04n") { 
        $("#oneone").html('<a href="index1.html"><img src="img/cloud.svg">');
        weapic = "clear1";
        
    } 
    else if (weather.weather[0].icon>="09d" && weather.weather[0].icon<="10n"){
        $("#oneone").html('<a href="index1.html"><img src="img/rain.svg">') ;
        weapic = "clear2";
       
    }
    else if (weather.weather[0].icon>="11d" && weather.weather[0].icon<="11n"){
        $("#oneone").html('<a href="index1.html"><img src="img/lightning.svg">');
        weapic = "clear3";
        
    }
    else if (weather.weather[0].icon>="13d" && weather.weather[0].icon<="50n"){
        $("#oneone").html('<a href="index1.html"><img src="img/snow.svg">');
        weapic = "clear4";
        
    };
    
    degree1 = weather.main.temp;
    $("#degree").html(degree1);
    
}

function gotweather2(weather) {
    weaf = weather.list[0].weather[0].icon;
    weaff= weather.list[1].weather[0].icon;
    weafff= weather.list[2].weather[0].icon;
    wea2 = weather.list[8].weather[0].icon;
     
    if(weather.list[8].weather[0].icon>="01d" && weather.list[8].weather[0].icon<="02n"){
        $("#twotwo").html('<img src="img/sun.svg">')
    } 
    else if (weather.list[8].weather[0].icon>="03d" && weather.list[8].weather[0].icon<="04n") { 
        $("#twotwo").html('<img src="img/cloud.svg">') 
    } 
    else if (weather.list[8].weather[0].icon>="09d" && weather.list[8].weather[0].icon<="10n"){
        $("#twotwo").html('<img src="img/rain.svg">') 
    }
    else if (weather.list[8].weather[0].icon>="11d" && weather.list[8].weather[0].icon<="11n"){
        $("#twotwo").html('<img src="img/lightning.svg">') 
    }
    else if (weather.list[8].weather[0].icon>="13d" && weather.list[8].weather[0].icon<="50n"){
        $("#twotwo").html('<img src="img/snow.svg">')
    };
}




    
    


