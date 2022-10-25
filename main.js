$(document).ready(function() {
    
    $('header button').click(function() {
        $('form').slideDown();
    });

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const endNovaImg = $('#end-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${endNovaImg}" />`).appendTo(novoItem);
        $(`
        <div class="overlay-img-link">
        <a href="${endNovaImg}" title="Ver imagem em tamanho real" target="_blank">
        Ver imagem em tamanho real
        </a>
    </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#end-imagem-nova').val('');
    });
})