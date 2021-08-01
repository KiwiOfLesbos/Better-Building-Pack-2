onEvent('recipes', e => {

    // Environmental
    e.shaped(Item.of('environmental:stripped_willow_post', 8), [' A ', ' A ', ' A '], {
        A: 'environmental:stripped_willow_log'
    })
    e.shaped(Item.of('environmental:stripped_cherry_post', 8), [' A ', ' A ', ' A '], {
        A: 'environmental:stripped_cherry_log'
    })
    e.shaped(Item.of('environmental:stripped_wisteria_post', 8), [' A ', ' A ', ' A '], {
        A: 'environmental:stripped_wisteria_log'
    })
    e.shaped(Item.of('environmental:willow_post', 8), [' A ', ' A ', ' A '], {
        A: 'environmental:willow_log'
    })
    e.shaped(Item.of('environmental:cherry_post', 8), [' A ', ' A ', ' A '], {
        A: 'environmental:cherry_log'
    })
    e.shaped(Item.of('environmental:wisteria_post', 8), [' A ', ' A ', ' A '], {
        A: 'environmental:wisteria_log'
    })
    e.shaped(Item.of('hole_filler_mod:throwable_hole_filler_balanced', 4), ['G#G', '#D#', 'G#G'], {
        '#': '#forge:slimeballs',
        'D': 'minecraft:dirt',
        'G': '#forge:nuggets/gold'
    }).id('hole_filler_mod:throwable_hole_filler_balanced')
    e.shaped(Item.of('hole_filler_mod:throwable_hole_filler_water'), ['$$$', '$#$', '$$$'], {
        '#': 'hole_filler_mod:throwable_hole_filler_balanced',
        '$': 'minecraft:ice'
    }).id('hole_filler_mod:throwable_hole_filler_water')
    e.shaped(Item.of('hole_filler_mod:throwable_hole_filler_water'), ['$$$', '$#$', '$$$'], {
        '#': 'hole_filler_mod:throwable_hole_filler_balanced',
        '$': 'minecraft:ice'
    })
    e.shaped(Item.of('hole_filler_mod:throwable_hole_filler_lava'), ['@$@', '$#$', '@$@'], {
        '#': 'hole_filler_mod:throwable_hole_filler_balanced',
        '$': 'minecraft:magma_block',
        '@': 'minecraft:magma_cream'
    }).id('hole_filler_mod:throwable_hole_filler_lava')
    e.shaped(Item.of('hole_filler_mod:throwable_hole_filler_light'), ['@$@', '$#$', '@$@'], {
        '#': 'hole_filler_mod:throwable_hole_filler_balanced',
        '$': 'minecraft:glowstone',
        '@': '#forge:dusts/glowstone'
    }).id('hole_filler_mod:throwable_hole_filler_light')
})