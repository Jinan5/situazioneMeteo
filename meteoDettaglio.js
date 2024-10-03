export class InfoMeteo {
    constructor(info) {
        this.myInfo = info;
    }
    toHTML() {
        return `
        <tr>
            <th scope="row">Situazione meteo generale:</td>
            <td>${this.myInfo.weather[0].description}</td>
        </tr>
        <tr>
            <th scope="row">Temperatura:</td>
            <td>max: ${(this.myInfo.main.temp_max - 273.15).toFixed(1)}° - min: ${(this.myInfo.main.temp_min - 273.15).toFixed(1)}°</td> 
        </tr>
        <tr>
            <th scope="row">Pressione:</td>
            <td>${this.myInfo.main.pressure}bar</td>
        </tr>
        <tr>
            <th scope="row">Umidità:</td>
            <td>${this.myInfo.main.humidity}%</td>
        </tr>
        <tr>
            <th scope="row">Vento:</td>
            <td>${this.myInfo.wind.speed}m/sec</td>
        </tr>
        `
    }
}