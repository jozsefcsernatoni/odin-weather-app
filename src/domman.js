export class DomManager{
    constructor(){
        this.maker=new Creator()
    }
    createDays(arr){
      this.clearDays()
        arr.forEach(element => {
           this.maker.template(element) 
        });
        
        console.log(arr)
    }
    clearDays(){
      const element = document.querySelector(".container");
      while (element.firstChild) {
      element.removeChild(element.firstChild);
      }
    }
    showLocation(loc){
      const curLocation=document.querySelector(".location")
      curLocation.textContent=loc
    }
    showLoader(){
      this.clearDays()
      const element = document.querySelector(".container");
      this.maker.createElements({
      eTag: "div",
      eClasses: ["loader"],
      eRoot: element
    })
    }
}


class Creator {
  constructor() {
    this.Content = document.querySelector(".content");
  }

  createElements(obj) {
    //create element
    const element = document.createElement(obj.eTag);
    if (obj.eASet) {
      obj.eASet.forEach((el) => {
        element.setAttribute(el.eAType, el.eAValue);
      });
    }
    if (obj.eClasses) {
      obj.eClasses.forEach((eClass) => {
        element.classList.add(eClass);
      });
    }
    if (obj.eContent) {
      element.textContent = obj.eContent;
    }
    obj.eRoot.appendChild(element);
  }

  template(obj) {
    const container = document.querySelector(".container");
    this.createElements({
      eTag: "div",
      eClasses: ["day"],
      eRoot: container,
      eASet: [{ eAType: "id", eAValue: "d"+obj.datetime }],
    })
    const curDay=document.querySelector("#d"+obj.datetime)
    this.createElements({
      eTag: "div",
      eClasses: ["dtitle"],
      eRoot: curDay,
      eContent: obj.datetime
    })

    import(`./images/${obj.icon}.svg`) 

    this.createElements({
      eTag: "img",
      eClasses: ["dicon"],
      eRoot: curDay,
      eASet: [{ eAType: "src", eAValue: "./assets/images/"+ obj.icon + ".svg"   },
        { eAType: "alt", eAValue: obj.icon }],
    })
    this.createElements({
      eTag: "div",
      eClasses: ["dtemp"],
      eRoot: curDay,
      eContent: "Temperature: "+obj.temp + " / " +obj.feelslike
    })
    this.createElements({
      eTag: "div",
      eClasses: ["dmaxtemp"],
      eRoot: curDay,
      eContent: "Max: "+obj.tempmax + " / " +obj.feelslikemax
    })
    this.createElements({
      eTag: "div",
      eClasses: ["dmintemp"],
      eRoot: curDay,
      eContent: "Min: "+obj.tempmin + " / " +obj.feelslikemin
    })
    this.createElements({
      eTag: "div",
      eClasses: ["dprecibprob"],
      eRoot: curDay,
      eContent: "Probability of precipitation: "+obj.precipprob
    })
}
}
