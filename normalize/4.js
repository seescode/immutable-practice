
const normalize = require('normalizr').normalize;
const schema = require('normalizr').schema;


var testContextData = {
  "id": "46427545-71c8-4382-98d8-fb05e7246403",
  "questions": [
    {
      "id": "84cd3d21-1d52-4227-99c6-6ccbe61b4d43",
      "content": {
        "uuid": "84cd3d21-1d52-4227-99c6-6ccbe61b4d43",
        "prompt": "<p>The enzyme triose-phosphate isomerase (TIM) catalyzes the reaction below, one of the steps in glycolysis: </p> <p>GAP <b>⇋</b> DHAP </p> <p>At physiological conditions, <i>K</i><sub>eq</sub> for this reaction is 22.0. In rat liver, however, the [DHAP] to [GAP] ratio is approximately 10. Which of the following is the most plausible explanation for this discrepancy? </p>",
        "answers": [
          {
            "uuid": "cbde97fb-df37-48e2-95be-326b90f337cc",
            "content": "Other reactions deplete the cell’s supply of DHAP."
          },
          {
            "uuid": "953ca1fb-8d33-4133-9618-b1f1502047f9",
            "content": "Other reactions deplete the cell’s supply of GAP."
          }
        ]
      }
    }
  ]
};

var output = normalize(testContextData, /* your schema */);
console.log(JSON.stringify(output, null, 2));
