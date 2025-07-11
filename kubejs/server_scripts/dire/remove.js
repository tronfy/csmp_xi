ServerEvents.recipes(event => {
    // Movimentação
    event.remove({output:'justdirethings:portalgun'})
    event.remove({output:'justdirethings:portalgun_v2'})
    event.remove({output:'justdirethings:blazejet_wand'})
    event.remove({output:'justdirethings:voidshift_wand'})
    event.remove({output:'justdirethings:eclipsegate_wand'})
    event.remove({output:'justdirethings:upgrade_elytra'})
    event.remove({output:'justdirethings:blockswappert1'})
    event.remove({output:'justdirethings:blockswappert2'})
    // X ray
    event.remove({output:'justdirethings:upgrade_orexray'})
    // Duping
    event.remove({output:'justdirethings:paradoxmachine'})

    // Alteração 
    event.remove({output:'justdirethings:upgrade_hammer'})
    event.shaped(Item.of('justdirethings:upgrade_hammer', 1),[
        'DDD',
        'PBP',
        'DDD'
    ],{
    D: 'create:mechanical_drill',
    P: 'minecraft:netherite_pickaxe',
    B: 'justdirethings:upgrade_blank'
    })
})
