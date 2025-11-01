function showweatherDetails(event){
    event.preventDefault();

    const city = document.getElementById('city').value 
    const apiKey = "YOUR_API_KEY";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    // function TempCelsius(temp) {
    //     const celsius = (temp - 32) * 5 / 9;
    //     return celsius;
    // }

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            //const tempCelsius = ((data.main.temp - 32) * 5 / 9).toFixed(1);

            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                    <p>Temperature : ${data.main.temp}ºC</p>
                                    <p>Weather: ${data.weather[0].description}</p>`
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
          }); 
}


document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );





