import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

import PetService from '../services/PetsService';

interface Pet {
    id: string,
    name: string,
    createdAt: string,
    type: string,
    color: string,
    age: number
  }

export default function PetList() {
  
    const [pets, setPets] = React.useState<any[]>([]);
    const [petsCount, setPetsCount] = React.useState<number>(0);

    React.useEffect(() => {
        PetService.getPets().then((response) => {
        setPets(response.data);
        setPetsCount(response.data.length);
        });
    }, []);
    
    return (
    <List
      sx={{
        width: '100%',
        maxWidth: '80%',
        bgcolor: 'background.paper',
        position: 'center',
        overflow: 'auto',
        maxHeight: 300,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
        <ListSubheader>{`${petsCount} pets created`}</ListSubheader>
      {pets.map( pet => (
        <li key={`section-${pet.createdAt}`}>
          <ul>
            <ListSubheader>{`on ${pet.createdAt} a pet named ${pet.name} created`}</ListSubheader>
          </ul>
        </li>
      ))}
    </List>
  );
}