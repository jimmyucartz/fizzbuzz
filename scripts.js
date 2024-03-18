const checkResult = () => {
  const input_value = document.getElementById("input_val").value;
  let fizz_span = "FIZZ";
  let buzz_span = "BUZZ";
  let fizz_buzz_span = "FIZZBUZZ";
  let none_span = "NONE";

  const result_p = document.getElementById("result");

  if (document.getElementById("result_ul")) {
    document.getElementById("result_ul").remove();
  }

  let result = document.createElement("ul");
  result.id = "result_ul";
  result_p.appendChild(result);

  for (let i = 1; i <= input_value; i++) {
    let li = document.createElement("li");
    //
    if (i % 15 == 0) {
      li.innerHTML = `${i} - ${fizz_buzz_span}`;

      result.appendChild(li);
      li.classList.add("fizz_buzz");
      continue;
    }
    //
    else if (i % 3 == 0) {
      li.innerHTML = `${i} - ${fizz_span}`;

      result.appendChild(li);
      li.classList.add("fizz");
      continue;
    }

    //
    else if (i % 5 == 0) {
      li.innerHTML = `${i} - ${buzz_span}`;

      result.appendChild(li);
      li.classList.add("buzz");
      continue;
    }
    //
    else {
      li.innerHTML = `${i} - ${none_span}`;

      result.appendChild(li);
      li.classList.add("none");
    }
  }
};
