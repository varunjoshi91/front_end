class BrowserHistory {
  
    /**
     * @param {string} url
     * if url is set, it means new tab with url
     * otherwise, it is empty new tab
     */
    constructor(url) {
      this.visited = [];
      this.currentIdx = 0;
      if (url !== undefined) {
        this.visited.push(url);
      }
    }
    /**
     * @param { string } url
     */
    visit(url) {
      this.visited.length = this.currentIdx + 1
      this.visited.push(url)
      this.currentIdx += 1
    }
    
    /**
     * @return {string} current url
     */
    get current() {
      return this.visited[this.currentIdx];
    }
    
    // go to previous entry
    goBack() {
      this.currentIdx = Math.max(0, this.currentIdx - 1);
    }
    
    // go to next visited url
    forward() {
      this.currentIdx = Math.min(this.currentIdx + 1, this.visited.length - 1);
    }
  }