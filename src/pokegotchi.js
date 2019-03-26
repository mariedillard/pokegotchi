$(document).ready(function() {
    $('#getPokemon').click(function() {
        const pokemon = $('#pokemon').val();
        $('#pokemon').val("");

        let request = new XMLHttpRequest();
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

        request.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
              const response = JSON.parse(this.responseText);
              getElements(response);
            }
        }

        request.open("GET", url, true);
        request.send();

        const getElements = function(response) {
            $('.showSprite').html(`<img src="${response.sprites.front_default}">`);
            $('.showName').text(`${response.name}`);
        }

        
    });
});