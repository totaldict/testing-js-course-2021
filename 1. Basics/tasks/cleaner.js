class Cleaner {
  constructor(arr) {
    this.arr = Array.isArray(arr) ? arr : null;
  }

  removeFalsyValues() {
    this.arr = this.arr.filter(item => item);
  } 
  
}

export default Cleaner;