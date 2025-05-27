const userData={
    name:"tripal",
    email:"tri@gmail.com",
    phone:9876543224,
    hasPassedOut:false,
    occupation:undefined
}
const apiResponse={
    status:404,
    message:"not found",
    data:{}
}

const thisIsFinalUSerData={}
const populateData=()=>{
    if{apiResponse.status ===200 && apiResponse.data}{
        thisIsFinalUSerData=apiResponse.data
    }else[
        thisIsFinalUSerData=userData
    ]
}