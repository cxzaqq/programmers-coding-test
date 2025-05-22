//my answer
const solution = (participant, completion) => {
  let answer;
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      break;
    }
  }
  return answer;
};

//most liked answer
const solution1 = (participant, completion) =>
  participant.find(
    (participant) => !completion[participant]--,
    completion.map(
      (participant) =>
        (completion[participant] = (completion[participant] | 0) + 1)
    )
  );

function solution(participant, completion) {
  const completeObj = {}; // 완주자 명단 만들기
  completion.forEach((name) => {
    // 명단에 없는 이름이면 { 이름: 1 }
    if (!completeObj[name]) completeObj[name] = 1;
    // 이미 올라간 이름이면 등장횟수++
    else completeObj[name]++;
  }); // 참가자와 완주자 명단 비교
  return participant.find((name) => {
    // 현 참가자가 완주자 명단에 있고, 값이 0이 아니면 값--
    if (completeObj[name]) completeObj[name]--;
    // 명단에 없거나 값이 0이면 리턴
    else return name;
  });
}
