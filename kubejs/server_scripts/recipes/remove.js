onEvent('recipes', e => {
    e.remove({ type: 'charm:woodcutting' })
    e.remove({ type: 'druidcraft:woodcutting' })

    var outputRemovals = [
        'charm:woodcutter',
        'druidcraft:woodcutter'
    ]

    outputRemovals.forEach((removal) => {
        e.remove({ output: removal })
    })
})