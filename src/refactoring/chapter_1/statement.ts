interface Statement {
  calculate(invoice, plays): string
}

export class StringStatement implements Statement {
  calculate(invoice, plays) {
    if(!invoice || !plays) return '';
  
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `Statement for ${invoice.customer}\n`;
    const format = new Intl.NumberFormat("en-US",
      {
        style: "currency", currency: "USD",
        minimumFractionDigits: 2
      }).format;
    for (let perf of invoice.performances) {
      const play = plays[perf.playID];
      const thisAmount = calculateAmount(perf, play);
  
      // print line for this order
      result += `  ${play.name}: ${format(thisAmount / 100)} (${perf.audience} seats)\n`;
      totalAmount += thisAmount;
    }
    volumeCredits = voumeCredits(invoice);
    result += `Amount owed is ${format(totalAmount / 100)}\n`;
    result += `You earned ${volumeCredits} credits\n`;
    return result;
  }
}

function voumeCredits(invoice) {
  let volumeCredits = 0;
  for (let perf of invoice.performances) {
    const play = plays[perf.playID];
    volumeCredits += Math.max(perf.audience - 30, 0);
    if (PlayTypes.COMEDY === play.type) volumeCredits += Math.floor(perf.audience / 5);
  }
  return volumeCredits
}

function calculateAmount(perf, play){
  let totalAmount = 0;
    switch (play.type) {
      case PlayTypes.TRAGEDY:
        totalAmount = 40000;
        if (perf.audience > 30) {
          totalAmount += 1000 * (perf.audience - 30);
        }
        break;
      case PlayTypes.COMEDY:
        totalAmount = 30000;
        if (perf.audience > 20) {
          totalAmount += 10000 + 500 * (perf.audience - 20);
        }
        totalAmount += 300 * perf.audience;
        break;
      default:
        throw new Error(`unknown type: ${play.type}`);
    }
    return totalAmount
}
const plays = {
  "hamlet": { "name": "Hamlet", "type": "tragedy" },
  "as-like": { "name": "As You Like It", "type": "comedy" },
  "othello": { "name": "Othello", "type": "tragedy" }
}

const invoices = [
  {
    "customer": "BigCo",
    "performances": [
      {
        "playID": "hamlet",
        "audience": 55
      },
      {
        "playID": "as-like",
        "audience": 35
      },
      {
        "playID": "othello",
        "audience": 40
      }
    ]
  }
]

enum PlayTypes {
  TRAGEDY = 'tragedy',
  COMEDY = 'comedy'
}