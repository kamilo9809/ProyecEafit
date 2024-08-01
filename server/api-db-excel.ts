// Importo las dependencias necesarias
import fetch from 'node-fetch';

// Defino la URL de la API de SheetDB
const SHEETDB_API_URL = 'https://sheetdb.io/api/v1/oxjtdankgbu46';

// Defino la estructura de datos
interface Person {
  Name: string;
  Age: number;
  Email?: string;
}

async function getData() {
  try {
    const response = await fetch(SHEETDB_API_URL);
    const data = await response.json();
    console.log('Data fetched:', data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

async function addData(newData: Person) {
  try {
    const response = await fetch(SHEETDB_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: newData })
    });
    const result = await response.json();
    console.log('Data added:', result);
  } catch (error) {
    console.error('Error adding data:', error);
  }
}

const newPerson: Person = { Name: "Yesenia Luna", Age: 30, Email: "yepe@example.com" };
addData(newPerson);

getData();



