ServerEvents.recipes(event => {

    // Itens de Refined de Obsidian agora são um upgrade da Netherite

    event.remove({output:'mekanismtools:refined_obsidian_helmet'})
    event.remove({output:'mekanismtools:refined_obsidian_chestplate'})
    event.remove({output:'mekanismtools:refined_obsidian_leggings'})
    event.remove({output:'mekanismtools:refined_obsidian_boots'})

    event.remove({output:'mekanismtools:refined_obsidian_sword'})
    event.remove({output:'mekanismtools:refined_obsidian_pickaxe'})
    event.remove({output:'mekanismtools:refined_obsidian_axe'})
    event.remove({output:'mekanismtools:refined_obsidian_shovel'})
    event.remove({output:'mekanismtools:refined_obsidian_hoe'})

    function refinedn(output, input){
        event.smithing(
            output,
            'minecraft:netherite_upgrade_smithing_template',
            input,
            'mekanism:ingot_refined_obsidian' 
        )}

    refinedn('mekanismtools:refined_obsidian_helmet', 'netherite_helmet')
    refinedn('mekanismtools:refined_obsidian_chestplate', 'netherite_chestplate')
    refinedn('mekanismtools:refined_obsidian_leggings', 'netherite_leggings')
    refinedn('mekanismtools:refined_obsidian_boots', 'netherite_boots')

    refinedn('mekanismtools:refined_obsidian_sword', 'netherite_sword')
    refinedn('mekanismtools:refined_obsidian_pickaxe', 'netherite_pickaxe')
    refinedn('mekanismtools:refined_obsidian_axe', 'netherite_axe')
    refinedn('mekanismtools:refined_obsidian_shovel', 'netherite_shovel')
    refinedn('mekanismtools:refined_obsidian_hoe', 'netherite_hoe')

})