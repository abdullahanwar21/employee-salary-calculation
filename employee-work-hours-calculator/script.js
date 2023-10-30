let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  let text = document.getElementById("text");
  function employerOvertimeCalc(totalHoursEmpWorked) {
    let ans = document.querySelector(".ans");
    let overTimePay = totalHoursEmpWorked - 40;
    let regularHoursPay = 40 * 1200;
    let overTimePayHours = overTimePay * 1200;
    let totalPayToEmpOfSalary = regularHoursPay + overTimePayHours;
    if (totalHoursEmpWorked < 40) {
      ans.innerHTML = `<b>Sorry </b> Minimum Hours Are 40hrs`;
      ans.style.color = "red";
    } else {
      text.value = totalPayToEmpOfSalary;
      ans.style.color = "black";
      ans.innerHTML = text.value;
      ans.innerHTML = `The Employee Works Of Total Hours <b>${totalHoursEmpWorked}hrs</b> And Salary <b>${totalPayToEmpOfSalary}Rs</b> And OverTimes Hours <b>${overTimePay}Hrs</b> `;
    }
    text.value = "";
    return totalPayToEmpOfSalary;
  }
  employerOvertimeCalc(text.value);
});

// let shoppingList = [];
// shoppingList.push("milk","bread","apples");
// shoppingList.splice(1,1,"bananas","eggs");
// shoppingList.pop();
// shoppingList.sort();
// shoppingList.indexOf("milk");
// shoppingList.splice(1,0,"carrots","lettuce")
// let newList = ["juice","pop"];
// let final = shoppingList.concat(newList);
// console.log(final);

// let myCar = {
//     make : "bmw",
//     model : 2022,
//     color : "black",
//     price : 34567890,
//     airCondition : true
// };
// let  carColor = "blue"
// myCar["color"] = carColor;
// console.log(myCar); 

// let people = {
//     friends: []
// };
// let friend1 = {
//     first_name : "ali",
//     last_name : "baloch",
//     id: 90
// };
// let friend2 = {
//     first_name : "ali",
//     last_name : "baloch",
//     id: 91
// };
// let friend3 = {
//     first_name : "ali",
//     last_name : "baloch",
//     id: 92
// };
// people.friends.push([friend1],[friend2],[friend3]);
// console.log(people);