onEvent('player.logged_in', function (event) {
    if (!event.hasGameStage('starting_items')) {
        event.player.give({item: 'patchouli:guide_book', nbt: {"patchouli:book":"patchouli:building_tips_and_tricks"}})
        event.addGameStage('starting_items')
    }
})