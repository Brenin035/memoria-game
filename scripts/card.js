class CardManager {

    flippedCards = new Set();
    urlFactory

    constructor(Factory) {
        this.urlFactory = Factory;
    }
}