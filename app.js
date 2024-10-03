import { serviceApi } from './serviceApi.js'
import { Option } from './optionDettaglio.js'
import { InfoMeteo } from './meteoDettaglio.js'

window.onload = () => {
    generaOption();


    document.querySelector('#boxInput form').addEventListener('submit', e => {
        e.preventDefault();
        const inputText = document.getElementById('inputText').value.trim().toLowerCase();
        const optionValue = document.getElementById('selectNazione').value;
        const apikey = '708b10cc3b4c98fb24c6bdda48e66767';
        const boxMeteo = document.getElementById('infoMeteo');
        const p = document.getElementById('risultato');

        document.querySelector('#boxInfo table').classList.add('d-none');
        document.querySelector('#boxInfo p').innerHTML = '';
        p.innerHTML = '';
        document.getElementById('boxInfo').classList.remove('d-none');
        //controllo campi input
        if (!inputText) {
            document.getElementById('boxInput').classList.add('border', 'border-danger');
            document.getElementById('inputText').classList.add('border', 'border-danger');
            document.querySelector('#boxInput p').classList.remove('d-none');
            return
        }


        //reset visualizzazione errori 
        document.getElementById('boxInput').classList.remove('border', 'border-danger');
        document.getElementById('inputText').classList.remove('border', 'border-danger');
        document.querySelector('#boxInput p').classList.add('d-none');

        let chiamata = new serviceApi;
       
        document.getElementById('spinner').classList.replace('d-none','d-block');
        chiamata.getInfo(inputText, optionValue, apikey)
            .then(res => {
                document.querySelector('#boxInfo table').classList.remove('d-none');
                p.innerHTML = `Situazione meteo per <strong>${inputText.toUpperCase()} (${res.data.sys.country})</strong>`;
                let risposta = new InfoMeteo(res.data);
                boxMeteo.innerHTML = `${risposta.toHTML()}`
            })
            .catch(() => document.querySelector('#boxInfo p').innerHTML = `Non sono presenti risultati per: <strong>${inputText.toUpperCase()}</strong>(${optionValue})`)
            .finally(() => document.getElementById('spinner').classList.replace('d-block','d-none'));
    })


    //reset box info meteo

    document.getElementById('reset').addEventListener('click', () => {
        document.querySelector('#boxInfo p').innerHTML = '';
        document.getElementById('infoMeteo').innerHTML = '';
        document.getElementById('risultato').innerHTML = '';

    })
}


////
function generaOption() {
    const select = document.getElementById('selectNazione');
    select.innerHTML = '<option value=""></option>';
    const servizio = new serviceApi;
    servizio.getOption()
        .then(res => {
            const risposta = Object.values(res.data);
            for (const r of risposta) {
                let opzione = new Option(r);
                select.innerHTML += `${opzione.toHTML()}`
            }
        })
}