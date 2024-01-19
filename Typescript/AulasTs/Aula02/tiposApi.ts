import axios from 'axios';

interface Country {
  name: string;
  capital: string;
  population: number;
  area: number;
  currencies: { code: string; name: string }[];
}

const countryName = 'Brasil'; // Aqui vai o nome do país q desejo exibir
// aqui está definido o tipo Country que vem da interface
axios.get<Country[]>(`https://restcountries.com/v3.1/name/${countryName}`)
  .then(response => {
    const data = response.data[0];
    console.log('Nome:', data.name);
    console.log('Capital:', data.capital);
    console.log('População:', data.population);
    console.log('Área:', data.area);
    console.log('Moedas:');
    data.currencies.forEach(currency => {
      console.log(`  - Código: ${currency.code}, Nome: ${currency.name}`);
    });
  })
  .catch(error => {
    console.error('Ocorreu um erro:', error);
  });

