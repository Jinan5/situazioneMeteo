export class serviceApi {
    getOption() {
        return axios.get('https://raw.githubusercontent.com/pmontrasio/codici-stati/master/dist/countries.json')
    }
    getInfo(citta, sigla, api) {
        if (!sigla) {
            return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(citta)}&appid=${api}`)
        }
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(citta)},${sigla}&appid=${api}`)
    }
}
