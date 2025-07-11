ServerEvents.recipes(event => {
    /*
      Uma forma de famar os minérios do mod. Não é tãaaao eficiente,
      porque precisa de 4 ingots pra gerar 1 ore. Só funciona como farm
      depois de setar a quintuplicação de ores do mekanism.

      Por extensão, a máquina do meka que torna isso possivel (combiner)
      tem sua recipe alterada pra precisar de allthemodium
    */
    event.custom({  // Allthemodium
      "type": "mekanism:combining",
      "extra_input": {
        "count": 1,
        "item": 'minecraft:cobbled_deepslate'
      },
      "main_input": {
        "count": 4,
        "item": 'allthemodium:allthemodium_dust'
      },
      "output": {
        "count": 1,
        "id": 'allthemodium:allthemodium_slate_ore'
      }
    })
    event.custom({  // Vibranium
      "type": "mekanism:combining",
      "extra_input": {
        "count": 1,
        "item": 'minecraft:netherrack'
      },
      "main_input": {
        "count": 4,
        "item": 'allthemodium:vibranium_dust'
      },
      "output": {
        "count": 1,
        "id": 'allthemodium:vibranium_ore'
      }
    })
    event.custom({  // Unobtainium
      "type": "mekanism:combining",
      "extra_input": {
        "count": 1,
        "item": 'minecraft:end_stone'
      },
      "main_input": {
        "count": 4,
        "item": 'allthemodium:unobtainium_dust'
      },
      "output": {
        "count": 1,
        "id": 'allthemodium:unobtainium_ore'
      }
    })
})