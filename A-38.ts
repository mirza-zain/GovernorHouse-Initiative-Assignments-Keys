//Describing every city through using function
function describe_city(city_name: string, coun_name: string){
    console.log(`${city_name} is in ${coun_name}`);
}

const def_count = "Pakistan";
describe_city("Karachi", def_count);
describe_city("Lahore", def_count);
describe_city("Istanbul", "Turkey");

export{};