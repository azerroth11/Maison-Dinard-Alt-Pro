const selection = document.querySelector('.selection')
const choice = Array.from(selection.children)

choice.forEach((a) => {
  a.addEventListener('click', () => {
    const selectedDiv = document.querySelector('.selectedDiv')
    if (window.innerWidth < 800) {
      a.classList.toggle('selected')
      a.firstElementChild.classList.toggle('selectedH1')
      a.children[1].classList.toggle('selectedi')
      a.lastElementChild.classList.toggle('selectedIMG')
      const choiceSiblings = choice.filter((name) => name.className != a.className)
      choiceSiblings.forEach((sibling) => {
        sibling.classList.toggle('hiddenSibling')
      })
      if (selectedDiv.innerHTML == '') {
        populate(a, selectedDiv)
      } else {
        selectedDiv.innerHTML = ''
      }
    } else {
      if (selectedDiv.innerHTML == '') {
        selectedDiv.classList.add('opacity1')
        populate(a, selectedDiv)
        selectedDiv.classList.add('selectedDivBorder')
      } else if (a.classList.contains('hiddenSiblingBig')) {
        selectedDiv.innerHTML = ''
        populate(a, selectedDiv)
      } else {
        selectedDiv.classList.remove('opacity1')
        setTimeout(function () {
          selectedDiv.classList.remove('selectedDivBorder')
          selectedDiv.innerHTML = ''
        }, 1000)
      }
      choice.forEach(() => {
        const choiceSiblings = choice.filter((name) => name.className != a.className)
        if (a.classList.contains('hiddenSiblingBig')) {
          a.classList.remove('hiddenSiblingBig')
          choiceSiblings.forEach((sibling) => {
            sibling.classList.add('hiddenSiblingBig')
          })
        } else {
          choiceSiblings.forEach((sibling) => {
            sibling.classList.toggle('hiddenSiblingBig')
          })
        }
      })
    }
  })
})

function populate(a, selectedDiv) {
  data.forEach((domain) => {
    if (domain.color.includes(a.classList[0])) {
      if (selectedDiv.children.length == 0) {
        createDomain(domain, selectedDiv)
      } else if (selectedDiv.lastChild.classList[0].includes(domain.location)) {
        const c??pageDiv = document.querySelector(`.${domain.location}`)
        const domainDiv = c??pageDiv.appendChild(document.createElement('h4'))
        domainDiv.innerText = domain.id
        if (domain.products != undefined && domain.products != 'Champagne') {
          const domainProducts = domainDiv.appendChild(document.createElement('p'))
          domainProducts.innerText = domain.products
        }
      } else {
        createDomain(domain, selectedDiv)
      }
    }
  })
}

function createDomain(domain, selectedDiv) {
  const c??pageDiv = selectedDiv.appendChild(document.createElement('div'))
  c??pageDiv.classList.add(`${domain.location}`)
  const c??page = c??pageDiv.appendChild(document.createElement('h2'))
  c??page.innerText = domain.location
  const domainDiv = selectedDiv.lastChild.appendChild(document.createElement('h4'))
  domainDiv.innerText = domain.id
  if (domain.products != undefined && domain.products != 'Champagne') {
    const domainProducts = domainDiv.appendChild(document.createElement('p'))
    domainProducts.innerText = domain.products
  }
}

// Data
const data = [
  {
    location: 'BEAUJOLAIS',
    id: 'Domaine Dubost',
    products: ['Vins de Bourgogne'],
    color: ['Vin', 'Rouge'],
  },
  {
    location: 'BEAUJOLAIS',
    id: 'Ch??teau de Pizay',
    products: ['Morgon, Beaujolais, Bourgogne'],
    color: ['Vin', 'Ros??', 'Rouge', 'Blanc'],
  },
  {
    location: 'BORDEAUX',
    id: 'H. Cuvelier & Fils',
    products: ['Vins de Bordeaux'],
    color: ['Vin', 'Rouge'],
  },
  {
    location: 'BORDEAUX',
    id: 'Domaines Select',
    color: ['Vin', 'Ros??', 'Rouge', 'Blanc'],
  },
  { location: 'BORDEAUX', id: 'Gironde et Gascogne', color: ['Rouge'] },
  {
    location: 'BORDEAUX',
    id: 'Ch??teau Tourteau Chollet',
    color: ['Vin', 'Ros??', 'Rouge', 'Blanc'],
  },
  {
    location: 'BORDEAUX',
    id: 'Famille Andr?? Lurton',
    products: ['AOC Pessac Leognan'],
    color: ['Vin', 'Ros??', 'Rouge', 'Blanc'],
  },
  {
    location: 'BOURGOGNE',
    id: 'Domaines Devillard',
    products: ['AOC Mercurey'],
    color: ['Vin', 'Rouge', 'Blanc'],
  },
  {
    location: 'BOURGOGNE',
    id: 'Domaine Nathalie & Gilles F??vre',
    products: ['AOC Chablis'],
    color: ['Vin', 'Blanc'],
  },
  {
    location: 'BOURGOGNE',
    id: 'Maison Ren?? Lamy',
    products: ['Vins de Bourgogne'],
    color: ['Vin', 'Ros??', 'Rouge', 'Blanc'],
  },
  {
    location: 'CHAMPAGNE',
    id: 'Billecart-Salmon',
    products: ['Champagne'],
    color: ['Champagne'],
  },
  {
    location: 'CHAMPAGNE',
    id: 'Champagne Drappier',
    products: ['Champagne'],
    color: ['Champagne'],
  },
  {
    location: 'CORSE',
    id: 'Domaine Vico',
    products: ['Vins de Corse'],
    color: ['Vin', 'Rouge', 'Blanc'],
  },
  {
    location: 'LANGUEDOC',
    id: 'Domaine de la Cendrillon',
    products: ['AOC Corbi??res'],
    color: ['Vin', 'Ros??', 'Rouge', 'Blanc'],
  },
  {
    location: 'LANGUEDOC',
    id: 'Domaine Grand Chemin',
    color: ['Vin', 'Ros??', 'Rouge', 'Blanc'],
  },
  {
    location: 'LANGUEDOC',
    id: 'Domaine la Croix Chaptal',
    color: ['Vin', 'Ros??', 'Rouge', 'Blanc'],
  },
  { location: 'LANGUEDOC', id: 'Domaines Bru', color: ['Vin', 'Rouge'] },
  {
    location: 'LANGUEDOC',
    id: 'Ch??teau de Fontenille',
    color: ['Vin', 'Ros??', 'Rouge', 'Blanc'],
  },
  {
    location: 'LANGUEDOC',
    id: 'Anne de Joyeuse',
    color: ['Vin', 'Ros??', 'Rouge', 'Blanc'],
  },
  {
    location: 'LOIRE',
    id: 'Levron & Vincenot',
    color: ['Vin', 'Ros??', 'Rouge', 'Blanc'],
  },
  {
    location: 'LOIRE',
    id: 'Domaine Filliatreau',
    color: ['Vin', 'Ros??', 'Rouge', 'Blanc'],
  },
  {
    location: 'LOIRE',
    id: 'Domaine Laporte',
    products: ['AOC Sancerre & Pouilly'],
    color: ['Vin', 'Ros??', 'Rouge', 'Blanc'],
  },
  { location: 'LOIRE', id: 'Domaine Pierre Luneau-Papin', color: ['Vin', 'Blanc'] },
  {
    location: 'LOIRE',
    id: 'Lorieux Alain & Pascal',
    products: ['AOC St Nicolas de Bourgueil & Chinon'],
    color: ['Vin', 'Ros??', 'Rouge'],
  },
  {
    location: 'LOIRE',
    id: 'Domaine Maison P??re & Fils',
    products: ['AOC Cheverny'],
    color: ['Vin', 'Ros??', 'Rouge', 'Blanc'],
  },
  {
    location: 'LOIRE',
    id: 'Saget La Perri??re',
    color: ['Vin', 'Ros??', 'Rouge', 'Blanc'],
  },
  {
    location: 'LOIRE',
    id: 'Domaines Tatin',
    color: ['Vin', 'Ros??', 'Rouge', 'Blanc'],
  },
  {
    location: 'PROVENCE',
    id: 'Ch??teau Pas du Cerf',
    products: ['AOC Cotes de Provence'],
    color: ['Vin', 'Ros??', 'Rouge', 'Blanc'],
  },
  {
    location: 'PROVENCE',
    id: 'Domaine de la B??gude',
    color: ['Vin', 'Ros??', 'Rouge', 'Blanc'],
  },
  {
    location: 'PROVENCE',
    id: 'Domaine la Rouill??re ',
    color: ['Vin', 'Ros??', 'Rouge', 'Blanc'],
  },
  {
    location: 'RHONE',
    id: 'Yanne Chave',
    products: ['Crozes Hermitage & Hermitage'],
    color: ['Vin', 'Rouge', 'Blanc'],
  },
  { location: 'RHONE', id: 'Ames Complices', color: ['Rouge'] },
  {
    location: 'RHONE',
    id: 'Domaine de Beaurenard',
    color: ['Vin', 'Rouge', 'Blanc'],
  },
  {
    location: 'RHONE',
    id: 'Domaine de la Mordor??e',
    products: ['Vins du Rhone ??? AOC Tavel'],
    color: ['Vin', 'Ros??', 'Rouge', 'Blanc'],
  },
  {
    location: 'RHONE',
    id: 'Domaine de Montvac',
    products: ['AOC Vacqueyras & Gigondas'],
    color: ['Vin', 'Ros??', 'Rouge', 'Blanc'],
  },
  {
    location: 'RHONE',
    id: 'Domaine Saint Amant',
    color: ['Vin', 'Ros??', 'Rouge', 'Blanc'],
  },
  {
    location: 'RHONE',
    id: 'Ch??teau de Nages',
    color: ['Vin', 'Ros??', 'Rouge', 'Blanc'],
  },
  {
    location: 'RHONE',
    id: 'Domaine Lionel Faury',
    products: ['Vins du Rhone ??? St Joseph'],
    color: ['Vin', 'Rouge', 'Blanc'],
  },
  { location: 'SPIRITUEUX', id: 'Dirum Dzama', color: ['Spiritueux'] },
  {
    location: 'SPIRITUEUX',
    id: 'Les Whiskies du Monde',
    color: ['Spiritueux'],
  },
  { location: 'SPIRITUEUX', id: 'Pardela Spirits', color: ['Spiritueux'] },
  { location: 'SPIRITUEUX', id: 'Moon Harbour', color: ['Spiritueux'] },
  { location: 'SPIRITUEUX', id: 'Raymond Ragnaud', color: ['Spiritueux'] },
  {
    location: 'SUD-OUEST',
    id: 'Bisto de Nas',
    products: ['Vins du Sud Ouest'],
    color: ['Vin', 'Ros??', 'Rouge', 'Blanc'],
  },
  {
    location: 'SUD-OUEST',
    id: 'Domaines Brumont',
    products: ['Vins du Sud Ouest'],
    color: ['Vin', 'Ros??', 'Rouge', 'Blanc'],
  },
  {
    location: 'SUD-OUEST',
    id: 'Domaine Tariquet',
    products: ['Vins de Cotes de Gascogne'],
    color: ['Vin', 'Ros??', 'Blanc', 'Spiritueux'],
  },
]

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 'auto',
  autoplay: {
    delay: 2500,
  },
  speed: 1000,
  centeredSlides: true,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    horizontalClass: 'swiper-pagination-horizontal',
    clickable: true,
  },
})
