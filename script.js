const cardDeck = require("./cardDeck.json");
// Imports tarot cards array from JSON file

//Start function. By default picks 3 cards.
const tarotFortuneTelling = (numberOfCards = 3) => {
  //Picking up random card index
  const randomCardNumber = (maxNum) => {
    return Math.floor(Math.random() * maxNum);
  };

  //Randomly getting upright or reversed card
  const randomUpright = () => {
    return Math.floor(Math.random() * 2) > 0;
  };

  //Prints to console text and object data from array
  const displayCardMeaning = (pickedCard) => {
    console.log(`${pickedCard.id} ${pickedCard.cardName}`);

    //Checks to show upright or reversed meaning
    if (randomUpright()) {
      console.log(`Upright. It means: ${pickedCard.uprightWords} \n`);
    } else {
      console.log(`Reversed. It means: ${pickedCard.reversedWords} \n`);
    }
  };

  console.log("Your cards are: \n");

  //Iterates for chosen number of cards

  for (let i = 0; i < numberOfCards; i++) {
    let cardIndex = randomCardNumber(cardDeck.length);

    let pickedCard = cardDeck[cardIndex];

    displayCardMeaning(pickedCard);

    cardDeck.splice(cardIndex, 1);
  }
};
