let url = "https://reqres.in/api/users"

axios.get(url+ '/1')
.then((data)=>console.log(data.data))
.catch((error)=>console.log('error:' + error))


axios.post(url,{
    nama : "yulianto",
    job : "tenaga admin"
})
.then((data)=>console.log(data.data));

// menampilkan error
axios.get(url+ '/x')
.then((data)=>console.log(data.data))
.catch((error)=>console.log('error:' + error))
