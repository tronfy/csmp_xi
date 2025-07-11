ServerEvents.recipes(event => {
    /* Augmentation 
       Motivo: buffs extramamente fortes, de fácil acesso  */
    event.remove({output:'oritech:augment_application_block'})
    event.remove({output:'oritech:simple_augment_station'})
    event.remove({output:'oritech:advanced_augment_station'})
    event.remove({output:'oritech:arcane_augment_station'})
    // Railgun
    event.remove({output:'oritech:portable_laser'})
    // Elytras
    event.remove({output:'oritech:jetpack_elytra'})
    event.remove({output:'oritech:jetpack_exo_elytra'})
    // Nukes
    event.remove({output:'oritech:low_yield_nuke'})
    event.remove({output:'oritech:nuke'})
})
