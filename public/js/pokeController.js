(function () {
    "use strict"

    function catchPokemon(pokeId) {
        $.ajax({
            method: "GET",
            url: "/api/pokemons/" + pokeId
        })
        .done(function onResponse(pokemon) {
            $("#pokeNumber").val('')
            $(document.body)
            .append('<img src="pokemons/' + pokemon.id + '.png" title="' + pokemon.name + '">');
        });
    }

    $("form").on("submit", event => {
        let pokeId = $("#pokeNumber").val()
        catchPokemon(pokeId)
        return false
    })
    
})()