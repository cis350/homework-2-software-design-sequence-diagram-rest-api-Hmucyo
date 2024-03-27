const express = require('express');
const {getCountryFromId} = require("./helper");
const {requireJsonBody, requireAnswerField} = require("./middleware");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Mapping integers => countries
const idToCountries = {
  0: 'Cyprus', 1: 'Eritrea', 2: 'Liberia', 3: 'Bermuda', 4: 'Vatican City', 5: 'Cook Islands', 6: 'Somalia', 
  7: 'Zambia', 8: 'Venezuela', 9: 'Turkmenistan', 10: 'Albania', 11: 'Croatia', 12: 'United Kingdom', 13: 'Sudan', 
  14: 'Timor-Leste', 15: 'Republic of the Congo', 16: 'Azerbaijan', 17: 'Kenya', 18: 'American Samoa', 
  19: 'Ivory Coast', 20: 'Senegal', 21: 'Vietnam', 22: 'El Salvador', 23: 'Afghanistan', 24: 'Saint Martin', 
  25: 'Latvia', 26: 'Guatemala', 27: 'Kuwait', 28: 'São Tomé and Príncipe', 29: 'Kyrgyzstan', 30: 'Poland', 
  31: 'Guam', 32: 'Ghana', 33: 'Lithuania', 34: 'Armenia', 35: 'Jersey', 36: 'Grenada', 37: 'Tajikistan', 
  38: 'Ethiopia', 39: 'Western Sahara', 40: 'Morocco', 41: 'Puerto Rico', 42: 'Christmas Island', 43: 'New Zealand', 
  44: 'Brunei', 45: 'French Guiana', 46: 'Niue', 47: 'Romania', 48: 'Svalbard and Jan Mayen', 49: 'Belarus', 
  50: 'Panama', 51: 'Cameroon', 52: 'Czechia', 53: 'Saint Barthélemy', 54: 'Greece', 55: 'Mali', 56: 'Martinique', 
  57: 'France', 58: 'Pakistan', 59: 'Peru', 60: 'Barbados', 61: 'Greenland', 62: 'Saint Pierre and Miquelon', 
  63: 'Chad', 64: 'Hungary', 65: 'Comoros', 66: 'Bangladesh', 67: 'Tokelau', 68: 'Fiji', 69: 'China', 70: 'Colombia', 
  71: 'British Virgin Islands', 72: 'Algeria', 73: 'Maldives', 74: 'Malaysia', 75: 'Cayman Islands', 76: 'Spain', 
  77: 'Ireland', 78: 'Estonia', 79: 'Paraguay', 80: 'Uruguay', 81: 'South Africa', 82: 'Saint Lucia', 83: 'Vanuatu', 
  84: 'Finland', 85: 'Sweden'}


/**
 * API 1 :
 * GET /api/questions - Endpoint to return a random quiz question
*/
app.get('/api/questions', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 86);
  const countryName = idToCountries[randomNumber]
  return res.status(200).send(
      { 
        question: `What is the capital of ${countryName}?`,
        id: randomNumber,
      }
    )
})


/**
 * API 2 :
 * Endpoint to receive question submissions, ensure 'id' is an integer, and verify that the body contains an 'answer' field.
 *
*/
app.post('/api/questions/:id', requireJsonBody, requireAnswerField, async (req, res) => {
  const questionId = req.params.id
  if (!Number.isInteger(Number(questionId))) {
    return res.status(400).send({ error: `'id' must be an integer. Received ${questionId}`})
  }
  const body = req.body
  const userAnswer = body.answer.toLowerCase()

  try {
    const countryFromId = idToCountries[questionId];
    const response = getCountryFromId(countryFromId);
    const correctCapital = response.data[0].capital[0];

    const isCorrect = userAnswer === correctCapital.toLowerCase();
    if (isCorrect) {
      res.status(200).send({ correct: true, message: `Yes! The capital of ${countryFromId} is ${correctCapital}. Good job :)` });
    } else {
      res.status(200).send({ correct: false, message: `No! The capital of ${countryFromId} is not ${userAnswer}. It is actually ${correctCapital} :(` });
    }
  } catch (error) {
    console.error('Error calling external API or processing data:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
