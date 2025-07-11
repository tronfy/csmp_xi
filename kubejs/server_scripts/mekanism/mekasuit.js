ServerEvents.recipes(event => {

    // Mekasuit é um upgrade da armadura de Unobtainium ao invés de Netherite, deixando mais late-game

    event.replaceInput({output:'mekanism:mekasuit_helmet'},'netherite_helmet','allthemodium:unobtainium_helmet')
    event.replaceInput({output:'mekanism:mekasuit_bodyarmor'},'netherite_chestplate','allthemodium:unobtainium_chestplate')
    event.replaceInput({output:'mekanism:mekasuit_pants'},'netherite_leggings','allthemodium:unobtainium_leggings')
    event.replaceInput({output:'mekanism:mekasuit_boots'},'netherite_boots','allthemodium:unobtainium_boots')
    
})