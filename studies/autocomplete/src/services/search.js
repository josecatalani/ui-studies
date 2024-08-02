export default class SearchAPI {
  static cached = {};

  static async doQuery(term) {
    if (this.cached[term]) {
      console.log("Retrieved From Cache");
      return this.cached[term];
    }

    const response = await fetch(`./mock-${term}.json`);
    const json = await response.json();

    this.cached[term] = json;

    console.log("Requested from server");
    return this.cached[term];
  }
}
