ServerEvents.recipes(event => {
    event.remove({ output: '#c:gears' })
    event.remove({ output: '#alltheores:ore_hammers' })
    event.remove({ input: '#alltheores:ore_hammers' })
})