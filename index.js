// let arr = [1,2,3,4,5,6,7,8,9,10]

// let even = []
// let odd = []

// for(let item of arr) {
//     if(item % 2 === 0) {
//         even.push(item)
//     } else {
//         odd.push(item)
//     }
// }

// console.log(even, odd);


// let arr = [1,2,3,'string', 'hello world', true, false, [], {}, null]


// let obj = {
//     string: [],
//     number: [],
//     boolean: [],
//     object: []
// }




// let 


// let obj = {
//     a: 10,
//     b: 20,
//     c: 30,
//     d: 40
// }

// for(let key in obj) {
//     console.log(
//         obj[key]
//     );
// }


let arr = [
    {
        name: 'morgen'        
    },
    {
        name: 'klava koka'        
    },
    {
        name: 'baskov'        
    },
    {
        name: 'filip'        
    },
    {
        name: 'yulduz'        
    },
    {
        ot: 'leps'        
    },
    {
        name: 'skriptonit'        
    }
]


for(let item of arr) {\
    if(!item.name) {
        let name = Object.values(item)[0]
        let key = Object.keys(item)[0]
        
        delete item[key]

        item.name = name
    } 
}


console.log(arr);