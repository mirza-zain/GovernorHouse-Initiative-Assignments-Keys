//Creating that contains the values of Object
type Friends = {
    name: string,
    age: number,
    hobby: string[]
}

const friend: Friends[] = [{
    name: "Faran",
    age: 19,
    hobby: ["Gaming", "Coding"]
}, {
    name: "Gamze",
    age: 19,
    hobby: ["Drawing", "Eating", "Photography"]
}]

for(let lists of friend){
    console.log(`Name: ${lists.name}\nAge: ${lists.age}\nHobbies: ${lists.hobby.join(", ")}`)
}