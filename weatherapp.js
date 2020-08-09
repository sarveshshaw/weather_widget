window.addEventListener('load',function(){
    var long;
    var lat;
    let temperaturedesc=document.querySelector('.tempdesc');
    let temperaturedegree=document.querySelector('.degree');
    let timezone=document.querySelector('.timezone');
    let comdesc=document.querySelector('.tempdescmore');
    let dtype=document.querySelector('.degreetype');
    let gap=document.querySelector('.space');
    
    if(this.navigator.geolocation)
    {
        this.navigator.geolocation.getCurrentPosition(function(position){
            console.log(position);
            long=position.coords.longitude;
            lat=position.coords.latitude;
            var api='https://openweathermap.org/data/2.5/weather?lat=28.6128&lon=77.2311&appid=439d4b804bc8187953eb36d2a8c26a02';

            fetch(api)
            .then(response => {
                return response.json();
            })
            .then( data=>{
                console.log(data);
                var degree=data.main.temp;
                var desc=data.weather[0].main;
                var iconcode = data.weather[0].icon;
                var com=data.weather[0].description  ;
                // set dom elements form api
                temperaturedegree.textContent=degree;
                temperaturedesc.textContent=desc;
                comdesc.textContent=com;
                timezone.textContent="New Delhi";
                gap.textContent=":";
                dtype.textContent="°C";
                window.addEventListener('click',function(){
                    if(dtype.textContent=="°C")
                    {
                        dtype.textContent="°F";
                        var temp= (degree*1.8)+ 32;
                        temperaturedegree.textContent=Math.round(temp);
                    }
                    else
                    {
                        dtype.textContent="°C";
                        temperaturedegree.textContent=degree;

                    }
                });
              
                //set icon
                var iconsrc = "http://openweathermap.org/img/w/" + iconcode + ".png";
                $('#wicon').attr('src', iconsrc);
            });
        
        });

      
    }

    else
    {
        h1.textContent="Allow To Get Location"
    }
    

});