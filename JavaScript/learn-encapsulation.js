class Action {
  #balance = 0; //  private variable
  constructor(name) {
    this.name = name;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      this.#viewbalance();
    } else {
      console.log("Cannot add negative money");
    }
  }

  withdraw(amount) {
    if (amount < this.#balance) {
      this.#balance -= amount;
      this.#viewbalance();
    } else {
      console.log("insufficient balance");
    }
  }

  #viewbalance() {
    console.log(`Account balance : ${this.#balance}`);
  }
}

let bank = new Action("Axis");
bank.deposit(10000);
bank.withdraw(2000);
// bank.#balance() // error -> #balance is private variable
// bank.#viewbalance() // -> #viewbalance() is private method
