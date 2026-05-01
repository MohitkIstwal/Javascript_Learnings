// API - Application Programming Interface

// Fetch API - Modern way to make HTTP requests

// Example: Fetching data from a public api using asybnc/await

// const fetchData = async () => {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     } catch (error) {
//         console.error('Error fetching data from API:', error);
//         throw error;
//     }
// };   

// fetchData()
//     .then(data => console.log('Fetched data:', data))
//     .catch(error => console.error('Error:', error)); 

// Example: Fetching data from a public api using .then() and .catch()

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }   
//         return response.json();
//     })
//     .then(data => console.log('Fetched data:', data))
//     .catch(error => console.error('Error fetching data from API:', error));

// const url="https://catfact.ninja/fact";
// const getfacts = async () => {
//     try {
//         console.log("Fetching data from API...");
//         let response = await fetch(url);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         let data = await response.json();
//         console.log(data.fact);
//     } catch (error) {
//         console.error('Error fetching data from API:', error);
//     }
// }   

// getfacts();

// request and response cycle
// 1. Client sends a request to the server (e.g., GET, POST, PUT, DELETE)
// 2. Server processes the request and prepares a response
// 3. Server sends the response back to the client
// 4. Client receives and processes the response (e.g., display data, handle errors)    

// response status codes
// 1xx: Informational responses (e.g., 100 Continue)
// 2xx: Success (e.g., 200 OK, 201 Created)
// 3xx: Redirection (e.g., 301 Moved Permanently, 302 Found)
// 4xx: Client errors (e.g., 400 Bad Request, 404 Not Found)
// 5xx: Server errors (e.g., 500 Internal Server Error, 503 Service Unavailable)

// ========== CURRENCY CONVERTER USING FETCH API ==========

const amountInput = document.getElementById('amount');
const fromCurrencySelect = document.getElementById('fromCurrency');
const toCurrencySelect = document.getElementById('toCurrency');
const convertBtn = document.getElementById('convertBtn');
const resultDiv = document.getElementById('result');
const fromFlagImg = document.getElementById('fromFlag');
const toFlagImg = document.getElementById('toFlag');

// Function to get flag URL from country code
const getFlagUrl = (countryCode) => {
    return `https://flagcdn.com/w80/${countryCode.toLowerCase()}.png`;
};

// Function to update flag images
const updateFlags = () => {
    const fromCountry = countryList[fromCurrencySelect.value];
    const toCountry = countryList[toCurrencySelect.value];
    
    fromFlagImg.src = getFlagUrl(fromCountry);
    toFlagImg.src = getFlagUrl(toCountry);
};

// Populate currency dropdowns
const populateCurrencies = () => {
    for (let currency in countryList) {
        // Add to "From" currency
        let option1 = document.createElement('option');
        option1.value = currency;
        option1.textContent = currency;
        fromCurrencySelect.appendChild(option1);

        // Add to "To" currency
        let option2 = document.createElement('option');
        option2.value = currency;
        option2.textContent = currency;
        toCurrencySelect.appendChild(option2);
    }
    
    // Set default values
    fromCurrencySelect.value = 'USD';
    toCurrencySelect.value = 'INR';
    
    // Update flags on initial load
    updateFlags();
    
    // Add event listeners to update flags when currency changes
    fromCurrencySelect.addEventListener('change', updateFlags);
    toCurrencySelect.addEventListener('change', updateFlags);
};

// Fetch exchange rate using Fetch API
const convertCurrency = async () => {
    const amount = amountInput.value;
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    if (amount <= 0) {
        resultDiv.innerHTML = '<p style="color: red;"><i class="fas fa-exclamation-circle"></i> Please enter a valid amount</p>';
        return;
    }

    try {
        resultDiv.innerHTML = '<p><i class="fas fa-spinner fa-spin"></i> Converting...</p>';
        
        // Using exchange rate API
        const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
        
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        const exchangeRate = data.rates[toCurrency];
        
        if (!exchangeRate) {
            throw new Error('Exchange rate not found');
        }
        
        const convertedAmount = (amount * exchangeRate).toFixed(2);
        
        const fromCountry = countryList[fromCurrency];
        const toCountry = countryList[toCurrency];
        
        resultDiv.innerHTML = `<div class="icon-result"><i class="fas fa-check-circle"></i></div>
                               <div class="result-flags">
                                   <img src="${getFlagUrl(fromCountry)}" alt="${fromCurrency}" class="result-flag-img">
                                   <span class="flag-separator">→</span>
                                   <img src="${getFlagUrl(toCountry)}" alt="${toCurrency}" class="result-flag-img">
                               </div>
                               <p><strong>${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}</strong></p>
                               <p><i class="fas fa-exchange-alt"></i> 1 ${fromCurrency} = ${exchangeRate.toFixed(4)} ${toCurrency}</p>`;
        
    } catch (error) {
        console.error('Error fetching exchange rate:', error);
        resultDiv.innerHTML = `<p style="color: #FF78AC;"><i class="fas fa-times-circle"></i> Error: ${error.message}</p>`;
    }
};

// Event listener for convert button
convertBtn.addEventListener('click', convertCurrency);

// Allow Enter key to convert
amountInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        convertCurrency();
    }
});

// Populate currencies on page load
populateCurrencies();

