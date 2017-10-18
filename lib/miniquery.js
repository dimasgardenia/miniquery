class SweetSelector {
  static select (input) {
    return document.querySelectorAll(input)
  }
}

class DOM {
  static hide (event) {
    var temp = SweetSelector.select(event);
    for (let i= 0; i<temp.length; i++) {
      temp[i].style.display = 'none'
    }
  }
  static show (event) {
    var temp = SweetSelector.select(event)
    // console.log("masuk");
    for (let i= 0; i<temp.length; i++) {
      // console.log('masuk for');
      temp[i].style.display = 'block'
    }
  }
  static removeClass (event) {
    var temp = SweetSelector.select(event)
    for (let i= 0; i<temp.length; i++) {
      console.log(temp[i])
      temp[i].classList.remove("shaded")
    }
  }
  static addClass (event) {
    var temp = SweetSelector.select(event)
    for (let i = 0; i<temp.length; i++) {
      temp[i].classList.add("shaded")
    }
  }
}
