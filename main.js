const posts = [
    {title:"post one" , body:"this is post one" , createAt: new Date().getTime()},
    {title:"post two" , body:"this is post two", createAt: new Date().getTime()}
]
     let interVal = 0
function Getpost (){
    clearInterval(interVal)
    interVal=setInterval( () => {
       let output = ""
       posts.forEach( (post , index) =>{
        output += `<li> ${post.title}--last update ${(new Date().getTime()-post.createAt)/1000}  second ago</li>`
       })
       document.body.innerHTML=output
    },1000)
}

function createPost(post){
   return new Promise((resolve, reject)=>{
    setTimeout( ()=>{
        posts.push({...post ,createAt: new Date().getTime()} )
        const error=false;
        if(!error){
            resolve()
        }else{
            reject("something went wrong !")
        }
    
    },2000)
   })
}

function Delete(){

}



createPost({title:"third post", body:"this is third posts"}).then(()=>{
    Getpost();
    Delete().then(()=>{
        Getpost()
    })
    .catch()
})
.catch(()=> console.log("error"))
