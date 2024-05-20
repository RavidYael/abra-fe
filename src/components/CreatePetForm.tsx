import React, { useState } from 'react';
import PetService from '../services/PetsService';

const CreatePetForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [type, setType] = useState<number>(0);
  const [color, setColor] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [possibleTypes, setPossibleTypes] = useState<string[]>([]);

    React.useEffect(() => {
        PetService.getTypes().then((response) => {
        setPossibleTypes(response.data);
        });
    }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const pet = { id: "", createdAt: "" , name, type, color, age };
    PetService.createPet(pet).then((response) => {
      console.log('Pet created', response.data);
      setName('');
      setType(0);
      setColor('');
      setAge(0);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Type</label>
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value as unknown as number)}
        />
      </div>
      <label>Pet Type</label>
      <select name="types" id="type">
        { possibleTypes.map((type) => ( <option value="javascript">JavaScript</option> ))}
      </select>
      <div>
        <label>Color</label>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <div>
        <label>Age</label>
        <input
          type="text"
          value={age}
          onChange={(e) => setType(e.target.value as unknown as number)}
        />
      </div>
      <button type="submit">Create Pet</button>
    </form>
  );
};

export default CreatePetForm;
