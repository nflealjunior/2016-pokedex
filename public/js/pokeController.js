(function () {
    "use strict"

    function catchPokemon(pokeNumber) {
        $.ajax({
            method: "GET",
            url: "/api/pokemons/" + pokeNumber
        })
        .done(pokemon => {
            $("#pokeNumber").val('')
            $(document.body)
            .append('<img src="pokemons/' + pokemon.id + '.png" title="' + pokemon.name + '">');
        });
    }

    $("form").on("submit", event => {
        let pokeNumber = $("#pokeNumber").val()
        catchPokemon(pokeNumber)
        return false
    })
    
})()