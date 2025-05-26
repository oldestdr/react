const UserData=[{
    Id:1, name:"abdul", gender:"male", age:20, occupation:undefined},
    {Id:2, name:"rabina", gender:"female", age:21, occupation:intern},
    {Id:3, name:"sabina", gender:"female", age:20, occupation:SWE},
    {Id:3, name:"rabin", gender:"male", age:19, occupation:intern},
    {Id:4, name:"nabin", gender:"male", age:18, occupation:undefined}

]

const response={
    status:200,
    message:"User data fetched succuessfully",
    data:UserData
}

const fetchUserNames=()=>{
    if(response.status===200)
        {response.data.map()

    }else{
        const message="Api fetch failed"
        return message
    }
}
console.log(fetchUserNames())
