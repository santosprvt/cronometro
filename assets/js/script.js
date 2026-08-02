function cronometro() {
    const elementoTempo = document.querySelector(".elementoTempo");
    const btnIniciar = document.querySelector(".btnIniciar");
    const btnPausar = document.querySelector(".btnPausar");
    const btnZerar = document.querySelector(".btnZerar");

    let segundos = 0;
    let cronometro;

    function retornaTempo(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString("pt-BR", {
            hour12: false,
            timeZone: "UTC"
        });
    };

    function iniciaTemporizador() {
        cronometro = setInterval(function () {
            segundos++
            elementoTempo.innerHTML = retornaTempo(segundos);
        }, 1000);
    };

    btnIniciar.addEventListener("click", function () {
        clearInterval(cronometro);
        segundos = 0;
        elementoTempo.innerHTML = "00:00:00";
        iniciaTemporizador();
    });

    btnPausar.addEventListener("click", function () {
        clearInterval(cronometro);
    });

    btnZerar.addEventListener("click", function () {
        clearInterval(cronometro);
        elementoTempo.innerHTML = "00:00:00";
        segundos = 0;
    });
};

cronometro();
