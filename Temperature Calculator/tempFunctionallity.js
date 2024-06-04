const celsiusTemp = document.querySelectorAll("#celcius");

const fahrenheitTemp = document.querySelectorAll("#farenheight");

const kelvinTemp = document.querySelectorAll("#kelvin");

function calculateTemp(e) {
  const currentValue = +e.target.value;

  switch (e.target.name) {
    case "celcius":
      kelvinTemp.value = (currentValue + 273.32).toFixed(2);

      fahrenheitTemp.value = (currentValue * 1.8 + 32).toFixed(2);
      break;

    case "farenheight":

      celsiusTemp.value = ((currentValue - 32) / 1.8).toFixed(2);

     
      kelvinTemp.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
      break;
    
      case "kelvin":

      celsiusTemp.value = (currentValue - 273.32).toFixed(2);

      fahrenheitTemp.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
      break;
    default:
      break;
  }
}

calculateTemp();