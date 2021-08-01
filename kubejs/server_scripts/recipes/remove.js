onEvent('recipes', e => {
    e.remove({ type: 'charm:woodcutting' })
    e.remove({ type: 'druidcraft:woodcutting' })

    var outputRemovals = [
        'charm:woodcutter',
        'druidcraft:woodcutter',
        'blocklayering:layer_leaves_oak',
        'blocklayering:layer_leaves_birch',
        'blocklayering:layer_leaves_spruce',
        'blocklayering:layer_leaves_jungle',
        'blocklayering:layer_leaves_big_oak',
        'blocklayering:layer_leaves_acacia',
        'buildersaddition:oak_vertical_slab',
        'buildersaddition:spruce_vertical_slab',
        'buildersaddition:birch_vertical_slab',
        'buildersaddition:jungle_vertical_slab',
        'buildersaddition:acacia_vertical_slab',
        'buildersaddition:dark_oak_vertical_slab',
        'buildersaddition:stone_vertical_slab',
        'buildersaddition:cobblestone_vertical_slab',
        'buildersaddition:smooth_stone_vertical_slab',
        'buildersaddition:cut_sandstone_vertical_slab',
        'buildersaddition:bricks_vertical_slab',
        'buildersaddition:stone_bricks_vertical_slab',
        'buildersaddition:nether_bricks_vertical_slab',
        'buildersaddition:quartz_vertical_slab',
        'buildersaddition:red_sandstone_vertical_slab',
        'buildersaddition:cut_red_sandstone_vertical_slab',
        'buildersaddition:purpur_vertical_slab',
        'buildersaddition:prismarine_vertical_slab',
        'buildersaddition:prismarine_bricks_vertical_slab',
        'buildersaddition:dark_prismarine_vertical_slab',
        'buildersaddition:polished_granite_vertical_slab',
        'buildersaddition:smooth_red_sandstone_vertical_slab',
        'buildersaddition:mossy_stone_bricks_vertical_slab',
        'buildersaddition:polished_diorite_vertical_slab',
        'buildersaddition:mossy_cobblestone_vertical_slab',
        'buildersaddition:end_stone_bricks_vertical_slab',
        'buildersaddition:smooth_sandstone_vertical_slab',
        'buildersaddition:smooth_quartz_vertical_slab',
        'buildersaddition:granite_vertical_slab',
        'buildersaddition:andesite_vertical_slab',
        'buildersaddition:red_nether_bricks_vertical_slab',
        'buildersaddition:polished_andesite_vertical_slab',
        'buildersaddition:diorite_vertical_slab',
        'buildersaddition:crimson_vertical_slab',
        'buildersaddition:warped_vertical_slab',
        'buildersaddition:sandstone_vertical_slab',
        'buildersaddition:blackstone_vertical_slab',
        'buildersaddition:polished_blackstone_vertical_slab',
        'buildersaddition:polished_blackstone_bricks_vertical_slab'
    ]

    outputRemovals.forEach((removal) => {
        e.remove({ output: removal })
    })

    var inputRemovals = [
        'byg:ametrine_gems',
        'byg:ametrine_block',
        'byg:ametrine_ore',
        'byg:ametrine_budding_ore',
        'byg:pendorite_scraps',
        'byg:pendorite_ore'
    ]

    inputRemovals.forEach((removal) => {
        e.remove({ input: removal })
    })
})