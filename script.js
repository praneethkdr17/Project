function convertToFar() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    if (isNaN(celsius)) {
      alert('Please enter a valid number for Celsius');
      return;
    }
  
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('result').innerHTML = `${celsius}°C = ${fahrenheit}°F`;
  }
  