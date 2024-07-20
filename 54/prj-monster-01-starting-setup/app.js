function getRandom(min, max) {
  return Math.floor((max - min) * Math.random() + min);
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      logs: [],
    };
  },
  computed: {
    getPlayerHealthStyle() {
      if (this.playerHealth < 0) return { width: 0 + "%" };

      return { width: this.playerHealth + "%" };
    },
    getMonsterHealthStyle() {
      if (this.monsterHealth < 0) return { width: 0 + "%" };

      return { width: this.monsterHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 2;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
  methods: {
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.winner = null;
      this.currentRound = 0;
      this.logs = [];
    },
    surrender() {
      this.winner = "monster";
    },
    attackMonster() {
      const damage = getRandom(5, 12);
      this.monsterHealth -= damage;
      this.addLogMessage("player", "attack", damage);
      this.attackPlayer();

      this.currentRound++;
    },
    attackPlayer() {
      const damage = getRandom(8, 15);
      this.addLogMessage("monster", "attack", damage);
      this.playerHealth -= damage;
    },
    specialAttackMonster() {
      const damage = getRandom(10, 25);
      this.monsterHealth -= damage;
      this.addLogMessage("player", "attack", damage);
      this.attackPlayer();

      this.currentRound++;
    },
    healPlayer() {
      const healValue = getRandom(8, 20);
      if (this.playerHealth + healValue > 100) this.playerHealth = 100;
      else this.playerHealth += healValue;
      this.addLogMessage("player", "heal", healValue);

      this.attackPlayer();
    },
    addLogMessage(who, what, value) {
      this.logs.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});

app.mount("#game");
