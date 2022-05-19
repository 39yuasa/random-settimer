const box = document.querySelector(".root");
const textBox = document.querySelector(".text");
let b = true;
let array = [0];

const array_random = [
  { size: "top" },
  { size: "right" },
  { size: "left" },
  { size: "bottom" },
];

let count = 0;

const intervalId_1 = setInterval(() => {
  count++;
  const random_num = Math.floor(Math.random() * 4);
  const value = array_random[random_num].size;
  box.className = `root_${value}`;
  const random = Math.floor(Math.random() * 3);
  if (count > 5) {
    clearInterval(
      random == 0 ? intervalId_1 : random == 1 ? intervalId_2 : intervalId_3
    );
    b = false;
  }
}, 3000);
const intervalId_2 = setInterval(() => {
  count++;
  console.log("b");
  const random_num = Math.floor(Math.random() * 4);
  const value = array_random[random_num].size;
  const random = Math.floor(Math.random() * 3);
  box.className = `root_${value}`;
  if (count > 5) {
    clearInterval(
      random == 0 ? intervalId_1 : random == 1 ? intervalId_2 : intervalId_3
    );
    b = false;
  }
}, 3000);
const intervalId_3 = setInterval(() => {
  count++;
  console.log("c");
  const random_num = Math.floor(Math.random() * 4);
  const value = array_random[random_num].size;
  const random = Math.floor(Math.random() * 3);
  box.className = `root_${value}`;
  if (count > 5) {
    clearInterval(
      random == 0 ? intervalId_1 : random == 1 ? intervalId_2 : intervalId_3
    );
    b = false;
  }
}, 3000);

let score = 0;
const judge = () => {
  score += 1;
  console.log(score);
  const textBox = document.querySelector(".text");
  textBox.innerHTML = `${score}`;
};
box.onclick = () => {
  b == true ? judge() : console.log("ahh");
};
// 足されている数は何回目かによって違うのではないか->あっていた
//暴走しているのはcount

// 今はcountの合計-回っている回数になっている
