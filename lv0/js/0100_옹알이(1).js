//my answer
function solution(babbling) {
  let answer = 0;
  let canBab = ["aya", "ye", "woo", "ma"];
  let tempt1 = [];
  let tempt2 = [];
  let tempt3 = [];
  let tempt4 = [];

  for (let i = 0; i < babbling.length; i++) {
    for (let j = 0; j < canBab.length; j++) {
      if (babbling[i].includes(canBab[j])) {
        tempt1.push(babbling[i].replace(canBab[j], "1"));
      }
    }
  }
  console.log(tempt1);

  for (let i = 0; i < tempt1.length; i++) {
    if (tempt1[i] === "1") {
      answer++;
    }
  }

  for (let i = 0; i < tempt1.length; i++) {
    for (let j = 0; j < canBab.length; j++) {
      if (tempt1[i].includes(canBab[j])) {
        tempt2.push(tempt1[i].replace(canBab[j], "1"));
      }
    }
  }
  console.log(tempt2);

  let t = 0;
  for (let i = 0; i < tempt2.length; i++) {
    if (tempt2[i] === "11") {
      t++;
    }
  }
  answer = answer + t / 2;

  for (let i = 0; i < tempt2.length; i++) {
    for (let j = 0; j < canBab.length; j++) {
      if (tempt2[i].includes(canBab[j])) {
        tempt3.push(tempt2[i].replace(canBab[j], "1"));
      }
    }
  }
  console.log(tempt3);

  t = 0;
  for (let i = 0; i < tempt3.length; i++) {
    if (tempt3[i] === "111") {
      t++;
    }
  }
  answer = answer + t / 6;

  for (let i = 0; i < tempt3.length; i++) {
    for (let j = 0; j < canBab.length; j++) {
      if (tempt3[i].includes(canBab[j])) {
        tempt4.push(tempt3[i].replace(canBab[j], "1"));
      }
    }
  }
  console.log(tempt4);

  t = 0;
  for (let i = 0; i < tempt4.length; i++) {
    if (tempt4[i] === "1111") {
      t++;
    }
  }
  answer = answer + t / 24;
  return answer;
}

//most liked answer
function solution(babbling) {
  var answer = 0;
  const regex = /^(aya|ye|woo|ma)+$/;

  babbling.forEach((word) => {
    if (regex.test(word)) answer++;
  });

  return answer;
}
/*
regexObj.test(str)
주어진 문자열 str 중 정규 표현식이 일치하는 부분이 있으면 true, 아니면 false 반환
^ : 시작
$ : 끝
만약 regex가 /^(aya|ye|woo|ma)+$/가 아니고 /^(aya|ye|woo|ma)$/면
합쳐진 문자열은 찾을 수 없음
*/
