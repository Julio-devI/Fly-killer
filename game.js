var height = 0
var width = 0
var lifes = 1
var time = 15

var mosquitoTimer = 1500

var nivel = window.location.search
nivel = nivel.replace('?','')

if (nivel === 'easy') {
    //1500
    mosquitoTimer = 1500
}
else if (nivel === 'normal') {
    //1000
    mosquitoTimer = 1000
}
else if (nivel === 'hard') {
    //750 
    mosquitoTimer = 750
}

function adjust_screen_size()
{
    height = window.innerHeight
    width = window.innerWidth
}

adjust_screen_size()

var stopwatch = setInterval(function () {
    time -= 1

    if (time < 0)
    {
        clearInterval(stopwatch)
        clearInterval(createmosquito)
        window.location.href = 'win.html'
    }
    else
    {
        document.getElementById('stopwatch').innerHTML = time
    }
}, 1000)

function random_position_mosquito() 
{
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if (lifes > 3) 
        {
            window.location.href = 'gameover.html'
        }
        else
        {
            document.getElementById('heart' + lifes).src="imagens/coracao_vazio.png"
            lifes++
        }
    }
    
    var posicaoX = Math.floor(Math.random() * width) - 90
    var posicaoY = Math.floor(Math.random() * height) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = random_size() + ' ' +random_side()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'

    mosquito.onclick =  function () {
        this.remove()
    }

    document.body.appendChild(mosquito)
}

function random_size() 
{
    var size_random =  Math.floor(Math.random() * 3) 
    
    switch (size_random) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }

}

function random_side()
{
    var size_random =  Math.floor(Math.random() * 2) 
    
    switch (size_random) {
        case 0:
            return 'sideA'
        case 1:
            return 'sideB'
    }
}



