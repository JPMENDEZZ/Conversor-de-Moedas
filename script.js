const convertButton = document.querySelector("button")
const selectMoedas = document.querySelector(".selecao-moedas")

function converterValores() {
    const inputMoedaValor = document.querySelector("input").value
    const valorParaConverter = document.querySelector(".valor-para-converter")
    const valorJaConvertido = document.querySelector(".valor-ja-convertido")

    const dolarDoDia = 4.94
    const euroDoDia = 5.36
    const libraDoDia = 6.20
    const bitcoinDoDia = 215.721

    if (selectMoedas.value == "dolar") {
        valorJaConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputMoedaValor / dolarDoDia)
    }

    if (selectMoedas.value == "euro") {
        valorJaConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputMoedaValor / euroDoDia)
    }

    if (selectMoedas.value == "libra") {
        valorJaConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputMoedaValor / libraDoDia)
    }

    if (selectMoedas.value == "bitcoin") {
        valorJaConvertido.innerHTML = new Intl.NumberFormat("XBT", {
            style: "currency",
            currency: "BTC"
        }).format(inputMoedaValor / bitcoinDoDia)
    }

    valorParaConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputMoedaValor)
}

function trocarMoeda() {
    const nomeMoeda = document.getElementById("nome-moeda")
    const trocarImageMoeda = document.querySelector(".moeda-img")

    if (selectMoedas.value == "dolar") {
        nomeMoeda.innerHTML = "Dólar americano"
        trocarImageMoeda.src = "./assets/dolar.png.png"
    }

    if (selectMoedas.value == "euro") {
        nomeMoeda.innerHTML = "Euro"
        trocarImageMoeda.src = "./assets/euro.png.png"
    }

    if (selectMoedas.value == "libra") {
        nomeMoeda.innerHTML = "Libra esterlina"
        trocarImageMoeda.src = "./assets/libra.png.png"
    }

    if (selectMoedas.value == "bitcoin") {
        nomeMoeda.innerHTML = "Bitcoin"
        trocarImageMoeda.src = "./assets/bitcoin.png.png"
    }
    converterValores()
}

convertButton.addEventListener("click", converterValores)
selectMoedas.addEventListener("change", trocarMoeda)