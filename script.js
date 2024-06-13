const perguntas = [
    {
    enunciado: "Assim que saiu da escola você se depara com uma nova oportunidade de trabalho. Qual o primeiro pensamento?",
    alternativas: [
    "Isso é assustador!",
    "Isso é maravilhoso!"
    ]
    },
    {
    enunciado: "Com essa oprtunidade você pode pagar sua faculdade dos sonhos. Qual atitude você toma?",
    alternativas: [
    "Entro no trabalho e faço faculdade.",
    "Fico em casa fazendo nada."
    ]
    },
    {
    enunciado: "Após a decisão vc conta a seus pais, como eles se posicionam?",
    alternativas: [
    "Amam a ideia e apoiam.",
    "Não gostam e brigam com você."
    ]
    },
    {
    enunciado: "Ao final da discussão você deve se organizar. E agora?",
    alternativas: [
    "Vai dormir.",
    "Arruma tudo pois vai começar amanhã."
    ]
    
    },
    {
    enunciado: "Você tem uma grande responsábilidade ou vai ser um zé ruela. O que você faz?",
    alternativas: [
    "Tomo vergonha na cara e sigo meus objetivos.",
    "Vou ser um bosta."
    ]
    }
    ];
    let atual = 0;
    let perguntaAtual;
    const caixaPerguntas = document.getElementById('caixaPerguntas');
    const alternativasContainer = document.getElementById('alternativas');
    function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa, index) => {
    const button = document.createElement('button');
    button.textContent = alternativa;
    button.addEventListener('click', () => {
    atual++;
    if (atual < perguntas.length) {
    mostraPergunta();
    } else {
    caixaPerguntas.textContent = 'Você completou o questionário!';
    alternativasContainer.innerHTML = '';
    }
    });
    alternativasContainer.appendChild(button);
    });
    }
    mostraPergunta();
