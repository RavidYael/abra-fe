import axios from 'axios';

const API_URL = 'https://localhost:7191/api/pet'; 

interface Pet {
  id: string,
  name: string,
  createdAt: Date,
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

export default {
    getPets,
    createPet,
};
