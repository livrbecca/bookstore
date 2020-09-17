console.log("hello"); // this was to test that it showed in the browser console and was correctly linked
 let books = [ // array of books
    {
    name: "Peter Pan",
    author: "J. M. Barrie",
    price: "£15.99",
    description: "Peter Pan and Tinkerbell lead the three Darling children over the rooftops of London and away to Neverland - the island where the lost boys play. Magic and mischief is in the air but if villainous Captain Hook has his way, before long someone will be swimming with the crocodiles . . .",
    image: "PP.jpg"
    },
    {
    name: "Hansel and Gretel",
    author:"Jacob Grimm",
    price: "£9.99",
    description: "Two innocent children, abandoned in the forest by their cruel mother, who happen upon the enchanting gingerbread house of a wicked witch. Hansel's cunning and little Gretel's courage foil the witch's evil plan to fatten them up and eat them, and in the best fairy tale tradition, they and their loving father live happily ever after.",
    image: "HAG.jpg"
    },
    {
    name: "Rumpelstiltskin",
    author: "Jacob Grimm",
    price: "£10.99",
    description: "When the king charges the miller’s beautififul daughter with spinning straw into gold she makes an ill-advised deal with the cunning Rumpelstiltskin.",
    image: "rump.jpg"
    },
    {
    name: "Snow White",
    author: "The Brothers Grimm",
    price: "£14.99",
    description: "Jealous of Snow White's beauty, the wicked queen orders the murder of her innocent stepdaughter, but later discovers that Snow White is still alive and hiding in a cottage with seven friendly little miners.",
    image: "SW.jpeg"
    }
];

function createListOfBooks(arrayOfBooks) { // function with descriptive parameter
    const listContainer = document.querySelector('#listcontainer'); // ontainers contain components. Components are positioned inside the container

    for(var i =0; i < arrayOfBooks.length; i++) { // for loop INSIDE the container, this one repeats name
        const nameTitle = document.createElement('h2'); // creating h2 element
        const nameText = document.createTextNode(arrayOfBooks[i].name); // creating text for h2, name property, i because it starts from 0 and loops
        nameTitle.appendChild(nameText); // appending text to h2 element
        listContainer.appendChild(nameTitle); // appending text to list container
    
        const author = document.createElement('h4'); // repeats author
        const authorText = document.createTextNode(arrayOfBooks[i].author);
        author.appendChild(authorText);
        listContainer.appendChild(author);
    
        const price = document.createElement('h4'); // repeats price
        const priceText = document.createTextNode(arrayOfBooks[i].price);
        price.appendChild(priceText);
        price.id="pricestyle"; // styling done for this in css
        listContainer.appendChild(price);
    
        const description = document.createElement('p'); // repeats description, p for <p></p>
        const descriptionText = document.createTextNode(arrayOfBooks[i].description);
        description.appendChild(descriptionText);
        listContainer.appendChild(description);
    
        const image = document.createElement('img'); // repeats images
        image.src=arrayOfBooks[i].image;
        image.id="favbk";
        image.width=250;
        image.height=300;
        listContainer.appendChild(image);

        const addcartbutton = document.createElement("button");
        const btntext = document.createTextNode("Add to cart")
        addcartbutton.id="btn-btn-primary";
        addcartbutton.appendChild(btntext);
        listContainer.appendChild(addcartbutton)
    }
}
createListOfBooks(books); // calling the function with books array

//  <button type="button" class="btn btn-primary">Add to cart</button>