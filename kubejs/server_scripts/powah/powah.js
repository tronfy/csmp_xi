ServerEvents.recipes(event => {

    event.remove({ output: '#powah:furnators' })
    event.remove({ output: '#powah:magmators' })
    event.remove({ output: '#powah:thermo_generators' })
    event.remove({ output: '#powah:solar_panels' })
    event.remove({ output: '#powah:reactors' })

    event.replaceOutput({ output: 'powah:uraninite' }, 
        'powah:uraninite',            
        'mekanism:ingot_uranium'
    )

})