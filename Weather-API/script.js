function getWeather() {
  const key =  'a7280184a951438dbfd81208232011'
  const loc = document.getElementById('location').value;
  const baseAddr = 'https://api.weatherapi.com/v1'
  const getAddr = `https://api.weatherapi.com/v1/current.json?q=${loc}&key=${key}`
  
  fetch(getAddr)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Fehler: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
  
      const locationElem = document.getElementById('location');
      const tempCElem = document.getElementById('temp_c');
      const tempFElem = document.getElementById('temp_f');
      const icon = document.getElementById('daytime');
  
  
      // console.log(data);
      // console.log(`Location: ${loc}`);
      // console.log(`Temperatur in °C: ${data.current.temp_c} °C`);
      // console.log(`Temperatur in °F: ${data.current.temp_f} °F`);
  
      locationElem.innerHTML = `Location: ${loc}`;
      tempCElem.innerHTML = `Temperature in °C: ${data.current.temp_c} °C`;
      tempFElem.innerHTML = `Temperature in °F: ${data.current.temp_f} °F`;
      icon.src = data.current.condition.icon
  
    })
    .catch(error => {
      
      console.error('Fehler bei der Fetch-Anfrage:', error);
    });
}
