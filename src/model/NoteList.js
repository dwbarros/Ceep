import Note from "./Note.js";

export default class NoteList {

    constructor() {
        this.noteList = [];
        this._observers = [];
    }

    subscribe(func) {
        this._observers.push(func)
    }

    notify() {
        this._observers.forEach(func => func(this.noteList))
    }

    addNote(title, text, categorie) {
        const newNote = new Note(title, text, categorie);
        this.noteList.push(newNote);
        this.notify();
    }

    deleteNote(index) {
        this.noteList.splice(index, 1);
        this.notify();
    }
}