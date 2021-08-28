export default class CategorieList {

    constructor() {
        this.categories = [];
        this._observers = [];
    }

    subscribe(func) {
        this._observers.push(func);
    }

    unsubscribe(func) {
        this._observers = this._observers.filter(f => f !== func);
    }

    notify() {
        this._observers.forEach(func => func(this.categories));
    }

    addCategorie(newCategorie) {
        this.categories.push(newCategorie);
        this.notify();
    }
}