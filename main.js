let dishes = ["Chicken Pot Pie", "Baked Beans", "Macaroni and Cheese", "Burgundy Sasuce with Beef Noodles", "Creamed Spinach", "Pumpkin Pie", "Strawberry Shortcake"];

let addHidden = (item) => {
   item.className += ' hidden';
}


let i = 0;

dishes.forEach((item) => {
  //create
  let foodItemDiv = document.createElement('div');
  foodItemDiv.className = 'food-item click-here';
  foodItemDiv.innerHTML += dishes[i];

  let mainDiv = document.getElementById('main');
  mainDiv.appendChild(foodItemDiv);

  // Add event listener
  foodItemDiv.addEventListener('click', () => {
  foodItemDiv.innerHTML += addHidden(foodItemDiv);
  });

  i++;
});
