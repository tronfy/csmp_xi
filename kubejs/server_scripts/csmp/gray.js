ServerEvents.recipes(event => {
    event.remove({output:'extendedae:fishbig'})
    event.custom({
        "type": "advanced_ae:reaction",
        "input_energy": 1000000,
        "input_fluid": {
            "amount": 8000,
            "ingredient": {
            "fluid": "advanced_ae:quantum_infusion_source"
            }
        },
        "input_items": [
            {
            "amount": 32,
            "ingredient": {
                "item": 'megacells:mega_energy_cell'
            }
            },
            {
            "amount": 16,
            "ingredient": {
                "item": 'advanced_ae:quantum_processor'
            }
            },
            {
            "amount": 4,
            "ingredient": {
                "item": 'mekanism:qio_drive_supermassive'
            }
            },
            {
            "amount": 1,
            "ingredient": {
                "item": 'minecraft:dragon_egg'
            }
            }
        ],
        "output": {
            "#": 1,
            "#t": "ae2:i",
            "id": 'extendedae:fishbig'
        }
    })
})