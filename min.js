class Wumphook{constructor(t,e,s=null,i=null,a=[]){this.url=t,this.text=e,this.name=s,this.avatar=i,this.embeds=a}execute(){let t={};if(t.content=this.text,this.name&&(t.username=this.name),this.avatar&&(t.avatar_url=this.avatar),this.embeds.length>0){t.embeds=[];for(let e=0;e<this.embeds.length;e++)t.embeds.push(this.embeds[e].parse())}return Wumphook.post(this.url,t).then(t=>this.response=t),t}static post(t,e){return fetch(t,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)})}}class Embed{constructor(t=null,e=null,s=null,i=null,a=[]){this.title=t,this.color=e,this.description=s,this.fields=a,this.image=i}parse(){let t={};return this.title&&(t.title=this.title),this.color&&(t.color=Embed.hexDec(this.color)),this.description&&(t.description=this.description),this.image&&(t.image={url:this.image}),t.fields=this.fields,t}static hexDec(t){return parseInt(t,16)}}
