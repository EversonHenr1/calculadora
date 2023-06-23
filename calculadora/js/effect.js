//guardar as celulas
const cel = document.querySelectorAll("td");
//guardar o swicht
const btnSwicht = document.querySelector('input[type="checkbox"]')
//guardar o menu
const menu = document.querySelector("#menu")

    // efeito de botão
    cel.forEach(element => {
        element.addEventListener("mousedown",()=>{//Apertar o botão
            element.classList.toggle("hover")
        })
        element.addEventListener("mouseup",()=>{//soutar o botão
            element.classList.remove("hover")
        })
        element.addEventListener("mouseout",()=>{//Tirar o mouse
            element.classList.remove("hover")
        })
    })

//Alterar tema
    //Variaveis com cores
    const temaAzul = { destaque:"#2196F3",strong:"#3F7C85",background:"#494F4F",container:"#f55a58"}
    const temaRosa = {destaque:" #fa7977", strong:"#f55a58",background:"#008080",container:"#3F7C85"}

    btnSwicht.addEventListener("click",()=>{
        if (btnSwicht.checked){
            azul()
        }else{
            rosa()
        }
    })
    function azul(){
        variavelCss("--cor-destaque",temaAzul.destaque)
        variavelCss("--cor-destaque-strong",temaAzul.strong)
        variavelCss("--background",temaAzul.background)
        variavelCss("--container",temaAzul.container)
    }
    function rosa(){
        variavelCss("--cor-destaque",temaRosa.destaque)
        variavelCss("--cor-destaque-strong",temaRosa.strong)
        variavelCss("--background",temaRosa.background)
        variavelCss("--container",temaRosa.container)
    }
    function variavelCss(c,t){
        document.documentElement.style.setProperty(c,t)
    }

//Historico
    menu.addEventListener("click",()=>{
        const bars = menu.querySelectorAll("div")
        bars.forEach((element)=>{
            element.classList.toggle("menu")
        })
        const his = document.querySelector("#container-historico")
        his.classList.toggle('his')
    })
