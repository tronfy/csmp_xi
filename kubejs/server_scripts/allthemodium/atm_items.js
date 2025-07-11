ServerEvents.recipes(event => {

    // Equipamentos de Allthemodium agora são um upgrade da Refined Obsidian, ao invés de Netherite

    event.remove({output:'allthemodium:allthemodium_helmet'})
    event.remove({output:'allthemodium:allthemodium_chestplate'})
    event.remove({output:'allthemodium:allthemodium_leggings'})
    event.remove({output:'allthemodium:allthemodium_boots'})

    event.remove({output:'allthemodium:allthemodium_sword'})
    event.remove({output:'allthemodium:allthemodium_pickaxe'})
    event.remove({output:'allthemodium:allthemodium_axe'})
    event.remove({output:'allthemodium:allthemodium_shovel'})
    event.remove({output:'allthemodium:allthemodium_hoe'})

    function alltheobsidian(output, input){
        event.smithing(
            output,
            'allthemodium:allthemodium_upgrade_smithing_template',
            input,
            'allthemodium:allthemodium_ingot' 
        )}

    alltheobsidian('allthemodium:allthemodium_helmet', 'mekanismtools:refined_obsidian_helmet')
    alltheobsidian('allthemodium:allthemodium_chestplate', 'mekanismtools:refined_obsidian_chestplate')
    alltheobsidian('allthemodium:allthemodium_leggings', 'mekanismtools:refined_obsidian_leggings')
    alltheobsidian('allthemodium:allthemodium_boots', 'mekanismtools:refined_obsidian_boots')

    alltheobsidian('allthemodium:allthemodium_sword', 'mekanismtools:refined_obsidian_sword')
    alltheobsidian('allthemodium:allthemodium_pickaxe', 'mekanismtools:refined_obsidian_pickaxe')
    alltheobsidian('allthemodium:allthemodium_axe', 'mekanismtools:refined_obsidian_axe')
    alltheobsidian('allthemodium:allthemodium_shovel', 'mekanismtools:refined_obsidian_shovel')
    alltheobsidian('allthemodium:allthemodium_hoe', 'mekanismtools:refined_obsidian_hoe')

})