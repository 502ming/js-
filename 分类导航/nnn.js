function myAxios({method='get',url,params,data}){
    return new Promise((resolve,reject)=>{
             
              let xhr=new XMLHttpRequest
              if(params){
                let arr=[]
                for(let k in params){arr.push(`${k}=${params[k]}`)
                }
                // console.log(arr.join('&'))
                url+=`?${arr.join('&')}`
              }
           xhr.open(method,url)
           if(method.toLowerCase()==='get'){
            // console.log('get请求方式');
            xhr.send()
           }else{
            if(data){
              // console.log('有data请求体');
              xhr.setRequestHeader('content-type','application/json')
              xhr.send(JSON.stringify(data))
            }
           }
          
           xhr.addEventListener('load',function(){
            resolve(JSON.parse(xhr.response))
           })
         xhr.addEventListener('error',function(){
          reject('网络寄了没法搞')
         })
            })       
    }
         
    