//função que roda onload no body...
function body() {
    url();
}
function url() {
    //recuperando uma variavel python(no template) que contem uma lista de url´s(API de vídeo da pexels)
    let video = document.getElementById('link').src;

    //convertendo cadeia de strings em um Array javascritpt(a lista python veio em forma de string)
    let listaurl = video.split("%27,%20%27");
    
    //retirando caracteres errados do primeiro item da array
    let letras = listaurl[0];
    letras = letras.replace("http://127.0.0.1:5000/['", '');
    

    //removendo primeira url da lista que contem caracteres errados e substituindo por url correta
    let removed = listaurl.splice(0, 1, letras);

    //script feito pra adcionar um delay de 7 segundos no loop que varre o array de urls
    const timer = (seconds) => {
        let time = seconds * 1000
        return new Promise(res => setTimeout(res, time))
    }
    async function doSomething() {
        for (var i = 0; i <= 14; i++) {
            //adcionando valor ao src da tag vídeo de forma dinâmica
            document.getElementById('link').src = listaurl[i];
         
            await timer(7);
        }
    }
    doSomething();
}
