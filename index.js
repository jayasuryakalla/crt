function calculate() {
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  let add = document.getElementById("add");
  let sub = document.getElementById("sub");
  let mul = document.getElementById("mul");
  let div = document.getElementById("div");
  let pow = document.getElementById("pow");
  let res = document.getElementById("res");
  if (add.checked == true) res.value = a + b;
  else if (sub.checked == true) res.value = a - b;
  else if (mul.checked == true) res.value = a * b;
  else if (div.checked == true) res.value = a / b;
  else if (pow.checked == true) res.value = a ** b;
  else res.value = "In Valid Choice";
}
