var verImagem = function imagem(img, imagem) {
    for (i = 1; i < 3; i++) {
        document.getElementById('img0' + i).style.backgroundColor = '#dddddd';
    }

    document.getElementById(img).style.backgroundColor = '#990000';
    document.getElementById('imagem').firstElementChild.setAttribute('src', imagem);


}