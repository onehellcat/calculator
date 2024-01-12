const display1 = document.querySelector(".display-1");
const display2 = document.querySelector(".display-2");
const tempResult = document.querySelector(".temp-result");
const numbers = document.querySelectorAll(".number");
const operation = document.querySelectorAll(".operation");
const equal = document.querySelector(".equal");
const clearAll = document.querySelector(".all-clear");
const clearLast = document.querySelector(".last-entity-clear");
let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === "." && haveDot) {
      return;
    }
    dis2Num += e.target.innerText;
    display2.innerText = dis2Num;
  });
});

operation.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (!dis2Num) return;
    haveDot = false;
    const operationName = e.target.innerText;
    if (dis1Num && dis2Num && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(dis2Num);
    }
    clearVar(operationName);
    lastOperation = operationName;
    console.log(result);
  });
});
function clearVar(name = "") {
  dis1Num += dis2Num + " " + name + " ";
  display1.innerText = dis1Num;
  display2.innerText = "";
  dis2Num = "";
  tempResult.innerText = result;
}

function mathOperation() {
  if (lastOperation === "x") {
    result = parseFloat(result) * parseFloat(dis2Num);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(dis2Num);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(dis2Num);
  } else if (lastOperation === "/") {
    result = parseFloat(result) / parseFloat(dis2Num);
  } else if (lastOperation === "%") {
    result = parseFloat(result) % parseFloat(dis2Num);
  }
}


equal.addEventListener("click", () => {
  if (!dis2Num || !dis1Num) return;
  haveDot = false;
  mathOperation();
  clearVar();
  display2.innerText = result;
  tempResult.innerText = "";
  dis2Num = result;
  dis1Num = "";
});

clearAll.addEventListener("click", () => {
  dis1Num = "";
  dis2Num = "";
  display1.innerText = "";
  display2.innerText = "";
  result = "";
  tempResult.innerText = "";
});

clearLast.addEventListener("click", () => {
  display2.innerText = "";
  dis2Num = "";
});

window.addEventListener("keydown", (a) => {
  if (
    a.key === "0" ||
    a.key === "1" ||
    a.key === "2" ||
    a.key === "3" ||
    a.key === "4" ||
    a.key === "5" ||
    a.key === "6" ||
    a.key === "7" ||
    a.key === "8" ||
    a.key === "9" ||
    a.key === "."
  ) {
    clickButton(a.key);
    
  } else if (a.key === "+" || a.key === "-" || a.key === "/" || a.key === "%") {
    clickOperation(e.key);
  } else if (a.key === "*") {
    clickOperation("x");
   
  } else if (a.key == "Enter" || e.key === "=") {
    clickEqual();
  }
 
});
function clickButtonEl(key) {
  numbers.forEach((button) => {
    if (button.innerText === key) {
      button.click();
    }
  });
}
function clickOperation(key) {
  operation.forEach((operation) => {
    if (operation.innerText === key) {
      operation.click();
    }
  });
}
function clickEqual() {
  equal.click();
}
