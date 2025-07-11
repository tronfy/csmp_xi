ServerEvents.recipes(event => {

    event.replaceInput({output:'mekanism:qio_drive_base'},'#c:ingots/lead','ae2:cell_component_4k')

    event.replaceInput({output:'mekanism:qio_drive_hyper_dense'},'#c:pellets/plutonium','ae2:cell_component_64k')

    event.replaceInput({output:'mekanism:qio_drive_time_dilating'},'mekanism:pellet_plutonium','ae2:cell_component_256k')

    event.replaceInput({output:'mekanism:qio_drive_supermassive'},'mekanism:pellet_polonium','megacells:cell_component_256m')
    event.replaceInput({output:'mekanism:qio_drive_supermassive'},'mekanism:pellet_antimatter','allthemodium:unobtainium_ingot')

    event.replaceInput({output:'mekanism:qio_dashboard'},'mekanism:teleportation_core','aeinfinitybooster:dimension_card')

})