export class Option {
    constructor(option) {
        this.myOption = option;
    }

    toHTML() {
        return `
        <option value="${this.myOption.iso3361_2_characters}">${this.myOption.italian_country_name_1}</option>
        `
    }
}