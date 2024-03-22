#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

// Function to display text
const displayMessage = (message: string) => {
  return message;
};

//Thank you note
let thanks = chalk.yellowBright.bold.underline("Thank you") + chalk.red("!");


//Function to handle withdrawal
const handleWithdrawal = (amount: number) => {
  if (amount <= dummyUser.balance) {
    let initialAmount = amount;
    let remainingBalance = (dummyUser.balance -= initialAmount);
    console.log(
      chalk.green(displayMessage(`Withdrawal of ${initialAmount} successful!`))
    );
    // let remainingBalance = dummyUser.balance - amount;
    console.log(
      chalk.magenta(
        displayMessage(`You remaining balance is ${remainingBalance}!`)
      )
    );
  } else {
    console.log(chalk.red(displayMessage(`Insufficient Balance`)));
  }
};
//Function to handle deposit
const handleDeposit = (amount: number) => {
  if (amount <= dummyUser.balance) {
    let initialAmount = amount;
    let newBalance = (dummyUser.balance += initialAmount);
    console.log(
      chalk.green(displayMessage(`Deposit of ${initialAmount} successful!`))
    );
    console.log(
      chalk.magenta(displayMessage(`You new balance is ${newBalance} now!`))
    );
  }
};
//Function to handle trasnfer
const handleTransfer = (amount: number) => {
  if (amount <= dummyUser.balance) {
    let initialAmount = amount;
    initialAmount <= dummyUser.balance;
    let remainingBalance = (dummyUser.balance -= initialAmount);
    console.log(
      chalk.green(displayMessage(`Transfer of ${initialAmount} successful!`))
    );
    console.log(
      chalk.magenta(
        displayMessage(`You remaining balance is ${remainingBalance}`)
      )
    );
  } else {
    console.log(chalk.red(displayMessage(`Insufficient Balance,`)));
  }
};
//Function to handle inquiry
const handleInquiry = () => {
  console.log(
    chalk.cyan(displayMessage(`Your current balance is ${dummyUser.balance}`)) 
  );
  console.log(thanks);
};

let dummyUser = {
  name: "Naimal Salahudidn",
  balance: 100000,
};

//defining enum to prevent from possible typo
enum transaction {
  withdraw = "Withdraw",
  deposit = "Deposit",
  transfer = "Transfer",
  inquiry = "Inquiry",
}
enum account {
  current = "Current",
  saving = "Saving",
}
const promptUser = async () => {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "userId",
      message: chalk.blue.bgHex("#e6e6fa").bold("Kindly enter you userId:"),
    },
    {
      type: "numberuserPin",
      name: "userPin",
      message: chalk.blue.bgHex("#e6e6fa")("Kindly enter you userPin:"),
    },
    {
      type: "list",
      name: "accountType",
      choices: Object.values(account),
      message: chalk.blue.bgHex("#e6e6fa")("Select your Account type:"),
    },
    {
      type: "list",
      name: "transactionType",
      choices: Object.values(transaction),
      message: chalk.blue.bgHex("#e6e6fa")("Select your Transaction:"),
    },
  ]);

  switch (answers.transactionType) {
    case transaction.withdraw:
      promptWithdrawal();
      break;
    case transaction.deposit:
      promptDeposit();
      break;
    case transaction.transfer:
      promptTransfer();
      break;
    case transaction.inquiry:
      handleInquiry();
      
      
  }
  
};
// Prompt for withdrawal
const promptWithdrawal = async () => {
  const answers = await inquirer.prompt([
    {
      type: "number",
      name: "amount",
      message: chalk.rgb(255, 136, 0)("Enter withdrawal amount:"),
    },
  ]);

  handleWithdrawal(answers.amount);
  console.log(thanks);
};
// Prompt for deposit
const promptDeposit = async () => {
  const answers = await inquirer.prompt([
    {
      type: "number",
      name: "amount",
      message: chalk.rgb(255, 136, 0)("Enter deposit amount:"),
    },
  ]);

  handleDeposit(answers.amount);
  console.log(thanks);
};

// Prompt for transfer
const promptTransfer = async () => {
  const answers = await inquirer.prompt([
    {
      type: "number",
      name: "amount",
      message: chalk.rgb(255, 136, 0)("Enter transfer amount:"),
    },
  ]);
  handleTransfer(answers.amount);
  console.log(thanks);
};

console.log(
  "--".repeat(6) +
    chalk.blue.bgWhiteBright.bold.italic("Welcome to the Naimal's ATM CLI") +
    "--".repeat(6)
);
console.log(
  "**".repeat(6) +
    chalk.italic.bgRedBright.black(`Your initial balance is "1lac"`) +
    "**".repeat(6)
);

promptUser();
