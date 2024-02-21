var friend = [{
        name: "Faran",
        age: 19,
        hobby: ["Gaming", "Coding"]
    }, {
        name: "Gamze",
        age: 19,
        hobby: ["Drawing", "Eating", "Photography"]
    }];
for (var _i = 0, friend_1 = friend; _i < friend_1.length; _i++) {
    var lists = friend_1[_i];
    console.log("Name: ".concat(lists.name, "\nAge: ").concat(lists.age, "\nHobbies: ").concat(lists.hobby.join(", ")));
}
