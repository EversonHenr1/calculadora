//guardar numerosResultado
const numeros = document.querySelectorAll(".num")
//guardar operadores
const operador = document.querySelectorAll(".op")
//guardar btn excluir
const excluir = document.querySelector("#clearOne")
//guardar resultado
const resultado = document.querySelector("#resultado")
//guardar clear
const clear = document.querySelector("#clear")
//guardar lista
const lista = document.querySelector("ul")
//guardar virgula
const virg = document.querySelector("#virgula")
//guardar igual
const igual = document.querySelector("#igual")
//Guardar Operadores
var matop = ["+","-","/","*"]

//Inserir numeros na calculadora pelo teclado
    document.addEventListener("keydown",(e) =>{
        //guardar a tecla
        let teclada = e.key
        if (/[0-9]/.test(teclada)){ //Inserir Numeros
            inserirNum(teclada)
        } 
        if(teclada == matop[0] || teclada == matop[1] || teclada == matop[2] || teclada == matop[3]){
            oneContentOP(teclada)//Inserir Operadores
        }
        if(teclada == "=" || teclada == "Enter"){//
            total();
        }
        if(teclada == "Backspace"){ // Apaga o ultimo caractere
            clearEX()
        }
        if(teclada == "c"){ //Excluir Todos os dados
            limpar()
        }
        if(teclada == "." || teclada == ","){//Inserir Virgula
            oneContent()
        }
        
    })
//Inserir Calculadora
    //Inserir numeros na calculadora
    numeros.forEach((e)=>{
        e.onclick = ()=>{
            let num = e.textContent
            inserirNum(num)
        }
    })
    //Inseir operadores
    operador.forEach((op,i)=>{
        op.addEventListener("click",()=>{
            oneContentOP(op.textContent)
        })
    })
    ////excluir
    excluir.onclick = clearEX;
    //clear
    clear.onclick = limpar;
    //virgula
    virg.onclick = oneContent;
    //Resultado
    igual.onclick = total;

//Funções

    //Inserir Numeros
    function inserirNum(e){
        resultado.innerHTML += e
    }

    //Inserir Operadores
    function oneContentOP(op){
        resul = resultado.textContent;
        if(resul.length == 0){//SE Resultado está vazio
            resultado.textContent += "0" + op 
        }else{  //resultado não esta vazio
            resultado.textContent += op
            if(resul[resul.length - 1] == "." ){ //Se o ultimo caractere  for igual a "." substituir ele pelo operador
                resultado.textContent = resul.slice(0,-1)+op
            }
            matop.forEach((e,i,a)=>{ //Saber qual operador ja tem
                if(resul.indexOf(matop[i]) > -1){//SE tiver mais que 1 operador do  mesmos
                    if(resul[resul.length - 1] == matop[0] || resul[resul.length - 1] == matop[1] || resul[resul.length - 1] == matop[2] || resul[resul.length - 1] == matop[3] ){
                        resultado.textContent = resul.slice(0,-1)+op //SE meu ultimo item é um operador
                    }
                }})}
    }

    //Excluir 1 Caractere
    function clearEX(){
        let ex =  resultado.textContent.slice(0,-1); 
        resultado.textContent = ex;
    }
    //Excluir tudo
    function limpar(){
        resultado.textContent =""
    }
    //Inserir virgula com algumas condições
    function oneContent(){
        //guardar o resultado e ponto
        let resul = resultado.textContent;
        let op = "."
        if(resul.length == 0){//SE resultado estiver vazio inserir o 0
            resultado.textContent += "0" + op
        }else{
            if(resul.indexOf(".") == -1){//SE ultimo caractere do resultado não for . inserir o .
                resultado.textContent += op
            }else{
                matop.forEach((e,i,a)=>{//Olha todos os operadoradores
                        if(resul.indexOf(e)>0){//Se tiver alguma operador no resultado
                            if(resul[resul.length-1] ==e ){//SE o ultimo caractere é algum operador adiciona 0 antes da virgula
                                resultado.textContent += "0"+ op  
                            }else{
                                if(resul[resul.length-1] !="."){//Se não hover um . como ultimo caracte pode inserir outro .
                                    resultado.textContent += op 
                                }
                            }
                        }})}}}
    //Calcular o resultado e guardar no historico
    function total(){
        var expressao = resultado.textContent;
        if(expressao == "0/"){//Se estiver tentando fazer divisões por 0
            limpar()
            alert("Não e possivel fazer divisões por 0")
        }else{
            //guardar a expresssao e realizar o calculo
            let resul = eval(expressao)
            resultado.textContent = resul;//Mostrar o resultado para usuario
            if(resultado.textContent == resul){//SE tiver realizado o calculo, guardar no historico
                let el = document.createElement("li")//criar elemento
                let txt = document.createTextNode(expressao +"="+resul) //Criar o txt
                el.appendChild(txt)
                lista.appendChild(el)
                if(lista.style.display == "none"){
                    lista.style.display="block"
                }}}}


