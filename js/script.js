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
let num = 1000;
const under = () => {
  const random = Math.floor(Math.random() * 3);
  random == 0 ? (num = 10000) : random == 1 ? (num = 200) : (num = 5000);
};
const intervalId = setInterval(
  () => {
    count++;
    const random_num = Math.floor(Math.random() * 4);
    const value = array_random[random_num].size;
    under();
    box.className = `root_${value}`;
    console.log("a");
    if (count > 5) {
      clearInterval(intervalId);
      b = false;
    }
  },
  num == 1 ? Math.floor(Math.random() * 4000) : Math.floor(Math.random() * 4000)
);
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
