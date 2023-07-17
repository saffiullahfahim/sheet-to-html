class SheetToHtml {
  #data;
  #callBack;
  constructor({ scriptUrl, callBack }) {
    if (!scriptUrl) {
      throw new Error("scriptUrl is required");
    }

    if (typeof scriptUrl !== "string") {
      throw new Error("scriptUrl must be a string");
    }

    if (!callBack) {
      throw new Error("callBack is required");
    }

    if (typeof callBack !== "function") {
      throw new Error("callBack must be a function");
    }

    this.scriptUrl = scriptUrl;
    this.#data = [];
    this.#callBack = callBack;

    this.#init();
  }

  async #loadScript() {
    try {
      let result = await fetch(this.scriptUrl);
      let json = await result.json();

      if (json.data) {
        this.#data = json.data;
      } else {
        console.error(json.error);
      }
    } catch (e) {
      console.error(e);
    }
  }

  getData(A1Notation) {
    try {
      let row = parseInt(A1Notation.match(/\d+/)[0]) - 1;
      let str = A1Notation.match(/[A-Z]+/)[0];
      let column = 0;
      for (let i = 0; i < str.length; i++) {
        column += (str.charCodeAt(i) - 64) * Math.pow(26, str.length - i - 1);
      }

      column = column > 0 ? column - 1 : 0;

      if (isNaN(row) || isNaN(column)) throw new Error("Invalid A1Notation");

      if (row > this.#data.length) return "";
      if (!this.#data[row]) return "";
      if (column > this.#data[row].length) return "";

      return this.#data[row][column];
    } catch (e) {
      console.error(e);
      return "";
    }
  }

  getRowColumn(row_, column_) {
    if (isNaN(row_) || isNaN(column_)) throw new Error("Invalid A1Notation");
    let row = row_ > 0 ? row_ - 1 : 0;
    let column = column_ > 0 ? column_ - 1 : 0;

    if (row > this.#data.length) return "";
    if (column > this.#data[row].length) return "";

    return this.#data[row][column];
  }

  async #init() {
    await this.#loadScript();
    this.#callBack(this);
  }
}
