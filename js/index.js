// eslint-disable-next-line no-unused-vars
function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

// eslint-disable-next-line no-unused-vars
function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}


const project = [
  {
    id: 0,
    img: './Images/Pink-gel.jpeg',
    title: 'Pink-Gel',
    supportingText: 'A color builder gel which can be mix with other colorful gel to have your desirable color',
    button: 'Buy Now',
  },
  {
    id: 1,
    img: './Images/Nail-Set.jpeg',
    title: 'Nail Set',
    supportingText: 'Main Equipements every nail tech needs to get into the nail business althought not a complete set',
    button: 'Buy Now',

  },
  {
    id: 3,
    img: './Images/Foot-Bath-Fizz.jpeg',
    title: 'Foot Bath Fizz',
    supportingText: 'It helps refresh and revive hard working feet. softening and refreshing the fizzy foot bath contains cooling peppermint and antibacterial Tea tree essential oil',
    button: 'Buy Now',

  },
  {
    id: 4,
    img: './Images/Gel-Scrub.jpeg',
    title: 'Gel Scrub',
    supportingText: 'This soothes and eliminates buildup of dead skin, moisturizes and nourishes while regenerating the skin back to a healthy state',
    button: 'Buy Now',

  },

  {
    id: 5,
    img: './Images/Foot-Mask.jpeg',
    title: 'Foot Mask',
    supportingText: 'It help detox the body draw impurities from the skin, boost circulation and cell turnover, trap and eliminate foot odor, and exfoliate, smooth and moisturize the foot skin',
    button: 'Buy Now',

  },

  {
    id: 6,
    img: './Images/Bath-Sea-Salt.jpeg',
    title: 'Bath Sea Salt',
    supportingText: 'This is essential for relaxing and rejuvenating experience',
    button: 'Buy Now',

  },

  {
    id: 7,
    img: './Images/Chrome-Powder.jpeg',
    title: 'Chrome Powder',
    supportingText: 'A nail design which is chic and gives a mirror effect',
    button: 'Buy Now',

  },

  {
    id: 8,
    img: './Images/Base-coat.jpeg',
    title: 'Base coat',
    supportingText: 'Base coat helps the gel or the polish stick and prevents it from coming in contact with our natural nails',
    button: 'Buy Now',

  },
  
];

const workSection = document.querySelector('.row');

project.forEach((work) => {
  let media = document.createElement('div');
  media.classList.add('media');
  media.innerHTML = `

  <div class="media col-12 col-md-6 mt-4">
        <img src=${work.img} class="roundimg">
        <div class="media-body">
          <h5>${work.title}</h5>
          <p>${work.supportingText}</p>
          <button type="button" class="btn btn-success">${work.button}</button>
        </div>
      </div>

  `;

  workSection.appendChild(media);
});
