fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then(response => response.json())
  .then(pokemonData => {
    console.log('Data Pokemon:');
    console.log('Name:', pokemonData.name);
    console.log('Ability:');
    pokemonData.abilities.forEach(ability => {
      console.log('-', ability.ability.name);
    });
  })