const range = document.getElementById("range");

range.addEventListener("input", (e) => {
  const value = +e.target.value;
  const label = e.target.nextElementSibling;

  const range_width = getComputedStyle(e.target).getPropertyValue("width");
  // console.log(range_width);
  const label_width = getComputedStyle(label).getPropertyValue("width");
  // console.log(label_width);
  const num_width = +range_width.substring(0, range_width.length - 2);
  // console.log(num_width);
  const num_label_width = +label_width.substring(0, label_width.length - 2);

  const max = +e.target.max;
  const min = +e.target.min;

  // console.log(min, max);
  // const left = value * (num_width / max) - num_label_width / 2;

  const left =
    value * (num_width / max) -
    num_label_width / 2 +
    scale(value, min, max, 10, -10);
  // console.log(left);
  // console.log(scale(value, min, max, 10, -10));

  label.style.left = `${left}px`;

  label.innerHTML = value;
});

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
