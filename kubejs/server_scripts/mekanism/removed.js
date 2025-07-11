ServerEvents.recipes(event => {
    // teleporters
    event.remove({output:'mekanism:teleporter_frame'})
    event.remove({output:'mekanism:teleporter'})
    event.remove({output:'mekanism:portable_teleporter'})
    //elytra
    event.remove({output:'mekanism:hdpe_elytra'})
    event.remove({output:'mekanism:module_elytra_unit'})
    //chunk loader
    event.remove({output:'mekanism:upgrade_anchor'})
    event.remove({output:'mekanism:dimensional_stabilizer'})
})
