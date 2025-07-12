ServerEvents.recipes(event => {
    // fly
    event.replaceInput({output:'advanced_ae:flight_card'},'minecraft:tnt','kubejs:capicoin')
    event.replaceInput({output:'mekanism:module_gravitational_modulating_unit'},'minecraft:nether_star','kubejs:capicoin')
    event.remove({output:'justdirethings:upgrade_flight'})
    event.shapeless(Item.of('justdirethings:upgrade_flight', 1),['justdirethings:upgrade_blank','kubejs:capicoin'])
    
    // outros
    event.shapeless(Item.of('mekanism:creative_energy_cube[mekanism:side_config={config:{energy:{eject:1b,side:{back:"output",bottom:"output",front:"output",left:"output",right:"output",top:"output"}},items:{side:{back:"input",bottom:"input",front:"output",left:"input",right:"input",top:"input"}}}},mekanism:energy={energy_containers:[L;9223372036854775807L]}]', 1),['mekanism:ultimate_energy_cube','kubejs:capicoin'])
    event.shapeless(Item.of('mekanism:creative_fluid_tank', 1),['mekanism:ultimate_fluid_tank','kubejs:capicoin'])
    event.shapeless(Item.of('mekanism:creative_chemical_tank', 1),['mekanism:ultimate_chemical_tank','kubejs:capicoin'])
    event.shapeless(Item.of('create:creative_fluid_tank', 1),['create:fluid_tank','kubejs:capicoin'])
    event.shapeless(Item.of('create:creative_motor', 1),['createaddition:electric_motor','kubejs:capicoin'])
    event.shapeless(Item.of('ae2:creative_energy_cell', 1),['megacells:mega_energy_cell','kubejs:capicoin'])
})
