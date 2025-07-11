ServerEvents.recipes(event => {
    // .energizing([inputs, ...], output, energy)
	event.recipes.powah.energizing([
        'minecraft:nether_star',
        'allthemodium:allthemodium_block',
        'allthemodium:piglich_heart',
        'allthemodium:unobtainium_block',
        'minecraft:nether_star'
    ], 
        'allthemodium:unobtainium_allthemodium_alloy_block', 2147483647)

    event.recipes.powah.energizing([
        'minecraft:nether_star',
        'allthemodium:unobtainium_block',
        'allthemodium:piglich_heart',
        'allthemodium:vibranium_block',
        'minecraft:nether_star'
    ], 
        'allthemodium:unobtainium_vibranium_alloy_block', 2147483647)

    event.recipes.powah.energizing([
        'minecraft:nether_star',
        'allthemodium:vibranium_block',
        'allthemodium:piglich_heart',
        'allthemodium:allthemodium_block',
        'minecraft:nether_star'
    ], 
        'allthemodium:vibranium_allthemodium_alloy_block', 2147483647)
})