const d = document,
  $inputs = d.querySelectorAll("input[name]"),
  $form = d.getElementById("contact-form");

console.log($inputs);

d.addEventListener("submit", (e) => {
  e.preventDefault();
  $inputs.forEach((input) => {
    if (input.value === "") {
      input.closest(".input-form").classList.add("active");
    } else {
      input.closest(".input-form").classList.remove("active");
    }
  });

  if (d.querySelectorAll(".active").length > 0) return;

  $form.reset();
  console.log(e.target);
});
