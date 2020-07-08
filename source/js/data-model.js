export default class DataModel {
    constructor() {
      this._data = [];
    }

    getData() {
        return this._data;
    }

    setData(data) {
        this._data = Array.from(data);
    }

}