import axios from 'axios';

const API_URL = 'https://localhost:7191/api/pet'; 

interface Pet {
  id: string,
  name: string,
  createdAt: string,
  type: number,
  color: string,
  age: number
}

const getPets = () => {
  return axios.get<Pet[]>(API_URL);
};

const createPet = (pet: Pet) => {
  return axios.post<Pet>(API_URL, pet);
};

const getTypes = () => {
  return axios.get<string[]>(`${API_URL}/types`);
}

export default {
    getPets,
    createPet,
    getTypes,
};
