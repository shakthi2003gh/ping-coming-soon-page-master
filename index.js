function check() {
  const label = document.querySelector("label");
  const input = document.querySelector("#email");

  console.log(input.value);
  if (
    !input.value.includes("@") ||
    !input.value.endsWith(".com") ||
    input.value == ""
  ) {
    label.classList.add("error");
    return;
  }

  label.classList.remove("error");
}
