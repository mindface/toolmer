
export class TextCopy {
  text:string
  constructor(stringData:string){
   this.text = stringData
  }

  copy() {
    navigator.clipboard.writeText(this.text).then((e:any) => {
      alert('コピーしました。')
    })
    
  }
}
