ServerEvents.recipes(event => {
    event.remove({output:'extendedae:mddyue'})
    event.shaped(Item.of('extendedae:mddyue', 1),[
        'QNQ',
        'MCM',
        'QNQ'
      ],{
        C: 'advanced_ae:quantum_core',
        M: 'megacells:cell_component_256m',
        N: 'sophisticatedbackpacks:stack_upgrade_tier_4',
        Q: 'advanced_ae:quantum_alloy_block'
      })
})