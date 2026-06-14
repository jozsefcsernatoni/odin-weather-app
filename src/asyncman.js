import { DomManager } from "./domman.js"

export class AsyncMan{
constructor(){
this.appKey="FJZXH6WQD6GZZKLTNFXQTZGUD"
this.arr=[]
this.domman=new DomManager()
}

async setData(location,unit){
    //unit=us, metric
    let that=this
    
    const url="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"
            + location +
            "?unitGroup="
            +unit+
            "&include=days&key="
            +this.appKey+
            "&contentType=json"    
    
    fetch(url)
    .then((res) => {
        if(res.status==200) return res.json()
        else {throw new Error('Something went wrong')}
        })       
    .then((data) => {
        
        this.domman.showLocation("Location: " + data.resolvedAddress)
        this.arr=(data.days);
        
        this.domman.createDays(this.arr)
    })
    .catch((error)=>{
        
        this.domman.showLocation("Please enter a valid location.")
        this.domman.clearDays()
        console.error(error)})
}


}