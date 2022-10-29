//METODE PER OBTENIR API DESDE RAPIDAPI JAVASCRIPT->FETCH
const buto_buscarjoc=document.getElementById('butobyscarjuego');
const info_joc=document.getElementById('infojuego');

async function buscarJocData(name_joc){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '74a5507d53mshfca5ed6badc306cp1b09aejsnf07353ade8bf',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    
    const res=await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc', options)
    const record=await res.json();
    console.log(record)
    const f = record.findIndex((game) => game.title==name_joc);
    //const infoFiltrada=record.map(function(x){if(x.title==name_joc){return x;}}); MA FETA JA QUE RETORNA UNA LLLISTA DE INDEFINITS I EL QUE BUSCA
    console.log(record[f]);
    if(record[f]!==undefined){info_joc.innerText=
        "Titol: "+record[f].title+'\n'+
        "Plataforma: "+record[f].platform+'\n'+
        "Companyia: "+record[f].publisher+'\n'+
        "Genere: "+record[f].genre+'\n'+
        "Data de Publicació: "+record[f].release_date+'\n'+
        "Descripció: "+record[f].short_description+'\n'+
        "Link: "+record[f].game_url;
    }
    else{
        info_joc.innerText="Error juego no encontrado :(";
    }
}

buto_buscarjoc.addEventListener('click', function(event){
    event.preventDefault();
    const juego=document.getElementById('juego').value;//VALUE IMPORTANT PER RECOLLIR EL VALOR DE UN INPUT
    buscarJocData(juego);
});