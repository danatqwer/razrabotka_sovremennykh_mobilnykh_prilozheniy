class Country {
    title: String;
    president: String;
    population: Number;
    imageURL: String;

    constructor(name: String, president: String, population: Number, imageURL: String) {
        this.title = name;
        this.president = president;
        this.population = population;
        this.imageURL = imageURL;
    }
}

export default Country;