//Create a blank array and use function to pass different things person wants inside sandwich
let items: string[] = [];
function item_sandwich(item: string){
    items.push(item);
}

item_sandwich("egg");
item_sandwich("cabage leaf");
item_sandwich("cucumber");

console.log(items);

export{}