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
        const cépageDiv = document.querySelector(`.${domain.location}`)
        const domainDiv = cépageDiv.appendChild(document.createElement('h4'))
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
  const cépageDiv = selectedDiv.appendChild(document.createElement('div'))
  cépageDiv.classList.add(`${domain.location}`)
  const cépage = cépageDiv.appendChild(document.createElement('h2'))
  cépage.innerText = domain.location
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
    id: 'Château de Pizay',
    products: ['Morgon, Beaujolais, Bourgogne'],
    color: ['Vin', 'Rosé', 'Rouge', 'Blanc'],
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
    color: ['Vin', 'Rosé', 'Rouge', 'Blanc'],
  },
  { location: 'BORDEAUX', id: 'Gironde et Gascogne', color: ['Rouge'] },
  {
    location: 'BORDEAUX',
    id: 'Château Tourteau Chollet',
    color: ['Vin', 'Rosé', 'Rouge', 'Blanc'],
  },
  {
    location: 'BORDEAUX',
    id: 'Famille André Lurton',
    products: ['AOC Pessac Leognan'],
    color: ['Vin', 'Rosé', 'Rouge', 'Blanc'],
  },
  {
    location: 'BOURGOGNE',
    id: 'Domaines Devillard',
    products: ['AOC Mercurey'],
    color: ['Vin', 'Rouge', 'Blanc'],
  },
  {
    location: 'BOURGOGNE',
    id: 'Domaine Nathalie & Gilles Fèvre',
    products: ['AOC Chablis'],
    color: ['Vin', 'Blanc'],
  },
  {
    location: 'BOURGOGNE',
    id: 'Maison René Lamy',
    products: ['Vins de Bourgogne'],
    color: ['Vin', 'Rosé', 'Rouge', 'Blanc'],
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
    products: ['AOC Corbières'],
    color: ['Vin', 'Rosé', 'Rouge', 'Blanc'],
  },
  {
    location: 'LANGUEDOC',
    id: 'Domaine Grand Chemin',
    color: ['Vin', 'Rosé', 'Rouge', 'Blanc'],
  },
  {
    location: 'LANGUEDOC',
    id: 'Domaine la Croix Chaptal',
    color: ['Vin', 'Rosé', 'Rouge', 'Blanc'],
  },
  { location: 'LANGUEDOC', id: 'Domaines Bru', color: ['Vin', 'Rouge'] },
  {
    location: 'LANGUEDOC',
    id: 'Château de Fontenille',
    color: ['Vin', 'Rosé', 'Rouge', 'Blanc'],
  },
  {
    location: 'LANGUEDOC',
    id: 'Anne de Joyeuse',
    color: ['Vin', 'Rosé', 'Rouge', 'Blanc'],
  },
  {
    location: 'LOIRE',
    id: 'Levron & Vincenot',
    color: ['Vin', 'Rosé', 'Rouge', 'Blanc'],
  },
  {
    location: 'LOIRE',
    id: 'Domaine Filliatreau',
    color: ['Vin', 'Rosé', 'Rouge', 'Blanc'],
  },
  {
    location: 'LOIRE',
    id: 'Domaine Laporte',
    products: ['AOC Sancerre & Pouilly'],
    color: ['Vin', 'Rosé', 'Rouge', 'Blanc'],
  },
  { location: 'LOIRE', id: 'Domaine Pierre Luneau-Papin', color: ['Vin', 'Blanc'] },
  {
    location: 'LOIRE',
    id: 'Lorieux Alain & Pascal',
    products: ['AOC St Nicolas de Bourgueil & Chinon'],
    color: ['Vin', 'Rosé', 'Rouge'],
  },
  {
    location: 'LOIRE',
    id: 'Domaine Maison Père & Fils',
    products: ['AOC Cheverny'],
    color: ['Vin', 'Rosé', 'Rouge', 'Blanc'],
  },
  {
    location: 'LOIRE',
    id: 'Saget La Perrière',
    color: ['Vin', 'Rosé', 'Rouge', 'Blanc'],
  },
  {
    location: 'LOIRE',
    id: 'Domaines Tatin',
    color: ['Vin', 'Rosé', 'Rouge', 'Blanc'],
  },
  {
    location: 'PROVENCE',
    id: 'Château Pas du Cerf',
    products: ['AOC Cotes de Provence'],
    color: ['Vin', 'Rosé', 'Rouge', 'Blanc'],
  },
  {
    location: 'PROVENCE',
    id: 'Domaine de la Bégude',
    color: ['Vin', 'Rosé', 'Rouge', 'Blanc'],
  },
  {
    location: 'PROVENCE',
    id: 'Domaine la Rouillère ',
    color: ['Vin', 'Rosé', 'Rouge', 'Blanc'],
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
    id: 'Domaine de la Mordorée',
    products: ['Vins du Rhone – AOC Tavel'],
    color: ['Vin', 'Rosé', 'Rouge', 'Blanc'],
  },
  {
    location: 'RHONE',
    id: 'Domaine de Montvac',
    products: ['AOC Vacqueyras & Gigondas'],
    color: ['Vin', 'Rosé', 'Rouge', 'Blanc'],
  },
  {
    location: 'RHONE',
    id: 'Domaine Saint Amant',
    color: ['Vin', 'Rosé', 'Rouge', 'Blanc'],
  },
  {
    location: 'RHONE',
    id: 'Château de Nages',
    color: ['Vin', 'Rosé', 'Rouge', 'Blanc'],
  },
  {
    location: 'RHONE',
    id: 'Domaine Lionel Faury',
    products: ['Vins du Rhone – St Joseph'],
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
    color: ['Vin', 'Rosé', 'Rouge', 'Blanc'],
  },
  {
    location: 'SUD-OUEST',
    id: 'Domaines Brumont',
    products: ['Vins du Sud Ouest'],
    color: ['Vin', 'Rosé', 'Rouge', 'Blanc'],
  },
  {
    location: 'SUD-OUEST',
    id: 'Domaine Tariquet',
    products: ['Vins de Cotes de Gascogne'],
    color: ['Vin', 'Rosé', 'Blanc', 'Spiritueux'],
  },
]
