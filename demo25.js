// const userData = {
//     name: "tripal",
//     email: "tri@gmail.com",
//     phone: 9876543224,
//     hasPassedOut: false,
//     occupation: undefined
// };

// const apiResponse = {
//     status: 404,
//     message: "not found",
//     data: {}
// };

// let thisIsFinalUserData = {}; // Changed to `let` to allow reassignment

// const populateData = () => {
//     if (apiResponse.status === 200 && apiResponse.data) {
//         thisIsFinalUserData = apiResponse.data;
//     } else {
//         thisIsFinalUserData = userData;
//     }
// };

// // Call the function to test
// populateData();
// console.log(thisIsFinalUserData);

const customer=[
    {custid:1, name:"aurum",bought:[{id:2,name:"t shirt"},{id:2,name:"earphone"}]},
    {custid:2, name:"rabina",bought:[{id:3,name:"pen"},{id:4,name:"hen"}]},
    {custid:3, name:"ritu",bought:[{id:5,name:" book"},{id:6,name:"copy"}]},
    {custid:4, name:"prabin",bought:[{id:7,name:" momo"},{id:8,name:"sprite"}]}
];

const customerAPIres={
    status: 200,
    message: "customer data fetched",
    data: customer,
};

const getProductName=() => {
    if (customerAPIres.status===200){
        let boughtProducts=[]
        customerAPIres.data.forEach
        ((customer)=>{customer.bought.map((item)=>{
            boughtProducts.unshift(item.name)
        });

        });
    return boughtProducts;
    }

};
console.log(getProductName());