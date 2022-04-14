// Main dishes object
const mainMenu = {
    "Beef Steak": 15,
    "Salmon": 14,
    "Chicken": 12
};

// Side dishes object
const sideMenu = {
    "Soup": 4,
    "Salad": 5,
    "Chips": 3,
    "Jamon": 7
};

// Main dishes comments object
const mainMenuComments = {
    "Beef Steak": "chef speciality",
    "Salmon": "the best norwegian",
    "Chicken": "from the local farms"
};
// Side dishes comments object
const sideMenuComments = {
    "Soup": "with garlic and bread",
    "Jamon": "delicious Spanish dish",
    "Salad": "with the best tomatoes in town",
    "Chips": "the crunchy option"
};

// string with the keys of the objects
const menuDishes = menu => {
    let menuString = []
    Object.keys(menu).map(item => {
      menuString.push(` ${item}`)
    })
    return menuString.join()
  }
// Chat with introduction text and showing menu
alert("Welcome to Bottega restaurant");
alert("Today we have the next dishes for dinner");
alert(`Find our main menu: ${menuDishes(mainMenu)}, and our side dishes: ${menuDishes(sideMenu)}.`)

// variable to store the option chosed
const chooseEntree = prompt(`Please choose an entree from our side dishes: ${menuDishes(sideMenu)}.`)

// comment on entree chosed
alert(`${chooseEntree} ${sideMenuComments[chooseEntree]}`)

//price entree chosed
alert(`${chooseEntree} is $${sideMenu[chooseEntree]}`)

// variable to store the option chosed
const chooseMain = prompt(`Please choose a main dish from our menu: ${menuDishes(mainMenu)}.`)

// comment on main chosed
alert(`${chooseMain} ${mainMenuComments[chooseMain]}`)

//price main chosed
alert(`${chooseMain} is $${mainMenu[chooseMain]}`)

// variable to store the sum
const total = (sideMenu[chooseEntree] + mainMenu[chooseMain])

// Chat to show the sum
alert(`Your ${chooseEntree} and your ${chooseMain} sum $${total}`)

// Confirmation
const confirmation = confirm(`Would you like to continue with your order?`)

if (confirmation == true) {
  alert(`Thank you and enjoy your meal`)
} else {
  alert(`Your order has been cancelled`)
}