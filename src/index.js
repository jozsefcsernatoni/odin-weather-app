import style from "./style.css"
import { AsyncMan } from "./asyncman.js"
import { DomManager } from "./domman.js"

const aMan=new AsyncMan()
//const days=aMan.setData("Sarasau","metric")
const domman=new DomManager()


function getFormData(){
let myform=document.querySelector("#myform")
      myform.addEventListener("submit",function(e){
        e.preventDefault()
        domman.showLoader()
        let formdata=new FormData(myform)
        let obj={}
        for (var p of formdata) {
        obj[p[0]]=p[1];
        }
       aMan.setData(obj.inpLocation,"metric")

       //const domman=new DomManager()
      //domman.createDays(aMan.getData())
})
}
getFormData()


