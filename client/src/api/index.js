import axios from 'axios';

const fetchCars = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/cars');
    return response.data;
    
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch cars');
  }
};

export { fetchCars };