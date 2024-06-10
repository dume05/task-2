document.getElementById('searchBtn').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = '22f24ba962ed4644b3f161350240906';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    console.log(`Fetching weather data for: ${city}`);
    console.log(`API URL: ${url}`);

    fetch(url)
        .then(response => {
            console.log('API Response:', response);
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            console.log('Weather Data:', data);
            document.getElementById('errorMessage').style.display = 'none';
            document.getElementById('cityName').innerText = data.location.name;
            document.getElementById('description').innerText = data.current.condition.text;
            document.getElementById('temperature').innerText = `Temperature: ${data.current.temp_c}°C`;
            document.getElementById('humidity').innerText = `Humidity: ${data.current.humidity}%`;
            document.getElementById('wind').innerText = `Wind Speed: ${data.current.wind_kph} kph`;
            document.querySelector('.weather-info').style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            document.querySelector('.weather-info').style.display = 'none';
            document.getElementById('errorMessage').innerText = error.message;
            document.getElementById('errorMessage').style.display = 'block';
        });
});
