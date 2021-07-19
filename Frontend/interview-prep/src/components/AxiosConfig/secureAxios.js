import axios from 'axios'
const secureAxios=axios.create({
    baseURL:''
})


secureAxios.interceptors.request.use(config=>{
    config.headers["Authorization"]=' barer Token' //key-value  object[key]=value
    return config
})


//use method take call back 
//for request use take only one callback in this we are passing confi (the data tha we want to send across server)

secureAxios.interceptors.response.use(
    response=>{
        console.log("got success from server")
      return response
    },
    error=>{
        console.log("server Crashed here")
        return Promise.reject(error)
    }
)

export default secureAxios

//In case of response use take two callback 
//first callback for resolve  from this we have to return response obj 
//second callback for rejected state.
// when error comes from server this error is fromat of string and we dont want that so we returning a promise with reject(Promise.reject(error))