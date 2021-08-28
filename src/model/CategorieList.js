export default class CategorieList {

    constructor() {
        this.categories = [];
        this._observers = [];
    }

    subscribe(func) {
        this._observers.push(func);
    }

    notify() {
        this._observers.forEach(func => func(this.categories));
    }

    addCategorie(newCategorie) {
        this.categories.push(newCategorie);
        this.notify();
    }
}