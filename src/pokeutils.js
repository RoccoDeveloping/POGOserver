export function spawnPkmnAtPlayer(name, pkmn, amount) {



  let spawn = null;
  let.player = null; //TODO: Create method getPlayerByName(name)

  if (player !== null) {
    let index = 0;
    while (++index <= amount) {
      spawn = {
        pokemon_id: pkmn.toUpperCase(),
        cp: Math.random() * 1e3 << 0,
        encounter_id: Math.random() * 1e5 << 0,
        latitude: player.latitude + parseFloat((Math.random() / 1e3).toFixed(5)),
        longitude: player.longitude + parseFloat((Math.random() / 1e3).toFixed(5))
      };
      this.wild_pokemons.push(spawn); //TODO: Change to WorldManager#wildPokemons
    };
    this.print(`Spawned ${amount}x ${pkmn}'s to ${name} at ${spawn.latitude.toFixed(7)}:${spawn.longitude.toFixed(7)}!`);
  }
  else this.print(`Failed to spawn ${pkmn} to player ${name}!`, 31);

}
