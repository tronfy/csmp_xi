ServerEvents.recipes(event => {

    // Quantum Armor é um upgrade da armadura de Unobtainium ao invés de Netherite, deixando mais late-game

    event.replaceInput({output:'advanced_ae:quantum_helmet'},'netherite_helmet','allthemodium:unobtainium_helmet')
    event.replaceInput({output:'advanced_ae:quantum_chestplate'},'netherite_chestplate','allthemodium:unobtainium_chestplate')
    event.replaceInput({output:'advanced_ae:quantum_leggings'},'netherite_leggings','allthemodium:unobtainium_leggings')
    event.replaceInput({output:'advanced_ae:quantum_boots'},'netherite_boots','allthemodium:unobtainium_boots')
    
})