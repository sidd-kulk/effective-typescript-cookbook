
import {StringStatement} from './statement';

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

  let statement: StringStatement;
  beforeAll(() => {
    statement = new StringStatement();
  })
  describe('statement', () => {
    it('should return the statement', () => {
        const response = statement.calculate(invoices[0], plays)
        expect(response.replace(/\s/g, '')).toBe(`StatementforBigCoHamlet:$650.00(55seats)AsYouLikeIt:$580.00(35seats)Othello:$500.00(40seats)Amountowedis$1,730.00Youearned47credits`);
    });

    it('should return blank string if invoices and plays are null', () => {
        const response = statement.calculate(null, null)
        expect(response).toBe('');
    });

    it(`should throw an error if play type is unknown`, () => {
        const incorrectPlaysInput = {
            "hamlet": { "name": "Hamlet", "type": "unknown" },
            "as-like": { "name": "As You Like It", "type": "comedy" },
            "othello": { "name": "Othello", "type": "tragedy" }
        }
        expect(() => {
          statement.calculate(invoices[0], incorrectPlaysInput)
        }).toThrow(`unknown type: unknown`);
    })
  });