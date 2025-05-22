//my answer
const solution = (bandage, health, attacks) => {
  const lastTime = attacks[attacks.length - 1][0];
  const attackTime = [];
  const damage = [];
  attacks.forEach((e) => {
    attackTime.push(e[0]);
    damage.push(e[[1]]);
  });
  let successTime = 0;
  let currentHealth = health;
  for (let i = 0; i <= lastTime; i++) {
    //공격 타임일 때
    if (attackTime.includes(i)) {
      //연속 성공 초기화
      successTime = 0;
      // 대미지 계산
      currentHealth -= damage[attackTime.indexOf(i)];
      // 체력이 0이하일 시 -1 반환
      if (currentHealth <= 0) return -1;
    } else {
      //공격 타임 아닐 때
      //연속 성공 +1
      successTime++;
      //회복량이 최대 체력보다 높을 때
      if (currentHealth + bandage[1] > health) currentHealth = health;
      //아니면 그대로 회복
      else currentHealth += bandage[1];
      //연속 성공 도달 시
      if (successTime === bandage[0]) {
        //연속 성공 초기화
        successTime = 0;
        //추가 체력 회복이 최대 체력보다 높아질 시
        if (currentHealth + bandage[2] > health) currentHealth = health;
        //추가 체력 회복
        else currentHealth += bandage[2];
      }
    }
  }
  //남은 체력 반환
  return currentHealth;
};

//most liked answer
function solution(bandage, health, attacks) {
  let currHealth = health;
  let currTime = 0;

  for (let [attackTime, damage] of attacks) {
    let diffTime = attackTime - currTime - 1;
    currHealth +=
      diffTime * bandage[1] + Math.floor(diffTime / bandage[0]) * bandage[2];

    if (currHealth > health) currHealth = health;
    currHealth -= damage;
    if (currHealth <= 0) return -1;
    currTime = attackTime;
  }

  return currHealth;
}
