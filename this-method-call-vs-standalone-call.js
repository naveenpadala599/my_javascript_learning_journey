function createBankAccount() {
    let balance = 1000;

    return {
        deposit(amount) {
            balance += amount;
        },

        getBalance() {
            return balance;
        }
    };
}

const account = createBankAccount();

account.deposit(500);
console.log(account.getBalance());
