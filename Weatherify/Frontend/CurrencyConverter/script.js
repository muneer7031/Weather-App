document.getElementById('currencyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const fromCurrency = document.getElementById('fromCurrency').value.toUpperCase();
    const toCurrency = document.getElementById('toCurrency').value.toUpperCase();

    fetchExchangeRate(fromCurrency, toCurrency)
        .then((exchangeRate) => {
            const resultElement = document.getElementById('result');
            resultElement.textContent = `1 ${fromCurrency} = ${exchangeRate} ${toCurrency}`;
        })
        .catch((error) => {
            console.error('Failed to fetch exchange rate:', error.message);
            const resultElement = document.getElementById('result');
            resultElement.textContent = 'Failed to fetch exchange rate. Please try again later.';
        });
});

function fetchExchangeRate(fromCurrency, toCurrency) {
    return fetch(`https://currency-exchange.p.rapidapi.com/exchange?from=${fromCurrency}&to=${toCurrency}&q=1.0`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ba842ffc14msh606eb0f2bd72301p1cc065jsn7d0fb3871e3d',
            'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch exchange rate');
        }
        return response.json();
    })
    .then(data => {
        return data.rate;
    });
}
