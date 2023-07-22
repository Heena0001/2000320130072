$(document).ready(function () {
    // Function to fetch data from the backend and update the UI
    function Number() {
      const api = 'http://localhost:8008/numbers';
      const url = [
        'http://20.244.56.144/numbers/primes',
        'http://abc.com/fibo',
        'http://20.244.56.144/numbers/rand',
      ];
  
      const params = url.map(url => 'url=' + encodeURIComponent(url)).join('&');
  
      $.get(api + '?' + params, function (data) {
        if (data.numbers && Array.isArray(data.numbers)) {
          // Display the merged unique integers
          const numbersDiv = $('#numbers');
          numbersDiv.empty();
  
          const numbersList = data.numbers.map(num => `<span>${num}</span>`);
          numbersDiv.append(numbersList);
        }
      });
    }
  
    // Call the fetchNumbers function when the page loads
    Number();
  });
  