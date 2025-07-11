ServerEvents.recipes(event => {
  // Atomic disassembler
  event.remove({output:'mekanism:atomic_disassembler'})
  event.shaped(Item.of('mekanism:atomic_disassembler', 1),[
      'CBC',
      ' A ',
      ' A '
    ],{
      A: 'mekanism:alloy_atomic',
      B: 'mekanismtools:refined_obsidian_paxel',
      C: 'mekanism:energy_tablet'
    })

  // Combiner
  event.replaceInput({output:'mekanism:combiner'},'#mekanism:stone_crafting_materials','allthemodium:allthemodium_ingot')  

})