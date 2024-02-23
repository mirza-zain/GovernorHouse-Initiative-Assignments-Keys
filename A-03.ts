//Name Cases 
let name: string = "Mirza zain";
console.log(name.toUpperCase());
console.log(name.toLowerCase());

function titleCase(name: string){
    let title = name.split(' ');
    let newTitle = [];
    for (let word of title){
        newTitle.push(word.charAt(0).toUpperCase() + word.slice(1));
    }
    return newTitle.join(' ');
}

console.log(titleCase(name));

export {}