# Design Decisions

The app is consist of two react components `CreatePetForm` ,  `PetList`

And a seperate requests service `PetService`

## `CreatePetForm` 

In charge of validation the pet creation input achived by:
- Limiting the pet's age to a range
- Chosing a pet color out of color palate
- Chosing a pet type out of a drop down menu fetched by `PetService`


## `PetList` 

In charge of rendering the pet list and count the numbers of pets recived by response


## `PetService` 

Encapsulates all interaction with BE for easy maintnce and faster development