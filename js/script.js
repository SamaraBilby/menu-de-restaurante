const menu = [
  {
    id: 1,
    title: 'Sanduiche Frango',
    categoria: 'Sanduiche',
    preco: 11.23,
    imagem: '../assets/image/sanduiche/sanduiche-frango.jpg',
    descricao:
      'Iscas de peito de frango, alface, tomate, 1 fatia de queijo muçarela e maionese americana'
  },
  {
    id: 2,
    title: 'Sanduiche Carne',
    categoria: 'Sanduiche',
    preco: 15.59,
    imagem: '../assets/image/sanduiche/sanduiche-chapa.jpg',
    descricao:
      '100 g do hamburger 100% carne Angus, 2 fatias de muçarela derretida, alface, tomate fresquinho, picles, cebola e maionese à sua escolha.'
  },
  {
    id: 3,
    title: 'Sanduiche carne em dobro',
    categoria: 'Sanduiche',
    preco: 25.0,
    imagem: '../assets/image/sanduiche/sanduiche-duplo-batata.jpg',
    descricao:
      '2 hambúrguer Angus 100% carne, picles, alface-americana,2 fatias bacon, cebola picada, 2 fatias de muçarela, maionese e porção de batata-frita'
  },
  {
    id: 4,
    title: 'Sanduiche peito de frango',
    categoria: 'Sanduiche',
    preco: 11.23,
    imagem: '../assets/image/sanduiche/sanduiche-peito-frango.jpg',
    descricao:
      '50g de peito de frango, alface, tomate, cebola, 1 fatias de muçarela e maionese americana'
  },
  {
    id: 5,
    title: 'Sanduiche tamanho da sua fome',
    categoria: 'Sanduiche',
    preco: 29.0,
    imagem: '../assets/image/sanduiche/sanduiche-cebola.jpg',
    descricao:
      '150 g do hamburger 100% carne Angus, 2 fatias de muçarela derretida, alface, tomate fresquinho, picles, cebola e maionese à sua escolha.'
  },
  {
    id: 6,
    title: 'Salmon grelhado',
    categoria: 'paixes',
    preco: 62.88,
    imagem: '../assets/image/peixe/salmon-salada.jpg',
    descricao: '100g de Salmon, molho de laranja, salada amarericana'
  },
  {
    id: 7,
    title: 'Costela suína',
    categoria: 'suino',
    preco: 35.15,
    imagem: '../assets/image/suino/carne-costela-molho-madeira.jpg',
    descricao:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt! Saepe dignissimos odio doloribus harum dolores eaque tempora dolorem! Nemo nam reiciendis cumque modi molestiae nisi corporis explicabo inventore assumenda.'
  },
  {
    id: 8,
    title: 'Salada cesar',
    categoria: 'salada',
    preco: 25.0,
    imagem: '../assets/image/salada/salada-cesar.jpg',
    descricao:
      'preparada com alface romana e molho Caesar. Os temperos usados para compor este molho são azeite de oliva, suco de limão, anchovas, queijo parmesão, molho inglês, sal, açúcar e pimenta preta. A salada geralmente é servida com croutons e queijo parmesão fresco ralado.'
  },
  {
    id: 9,
    title: 'Salada Frango e Queijo',
    categoria: 'salada',
    preco: 25.0,
    imagem: '../assets/image/salada/salada-frango-melancia.jpg',
    descricao:
      'Cubos de peito de frango, tomates cereja, alface, pepino e molho a escolha'
  },
  {
    id: 10,
    title: 'Salada italiana',
    categoria: 'salada',
    preco: 25.0,
    imagem: '../assets/image/salada/salada-frango-melancia.jpg',
    descricao:
      'tomatinho cereja, alho, pão brioche, manjericão, alface americana e mini pão baguete'
  },
  {
    id: 11,
    title: 'Salada Verão',
    categoria: 'salada',
    preco: 25.0,
    imagem: '../assets/image/salada/salada-frango-manga-tomate-laranja.jpg',
    descricao:
      'Iscas de frango, tomate cereja, manga, manjericão e molho de laranja ou de preferência'
  },
  {
    id: 12,
    title: 'Salada Frango com brócolis',
    categoria: 'salada',
    preco: 25.0,
    imagem: '../assets/image/salada/salada-frango-brocolis.jpg',
    descricao:
      'Iscas de frango, tomate cereja, brocolis, cenoura cozida, manjericão e molho da preferência'
  },
  {
    id: 13,
    title: 'Sorvete em dobro',
    categoria: 'promocao',
    preco: 25.0,
    imagem: '../assets/image/promocao/promocao-2-sorvete.jpg',
    descricao:
      '2 unidades de Sorvete de baunilha com pedaços de chocolate ou chocolate crocante'
  },
  {
    id: 14,
    title: 'Sanduiche em dobro',
    categoria: 'promocao',
    preco: 25.0,
    imagem: '../assets/image/promocao/promocao-2-sanduiche.jpg',
    descricao:
      '2 sanduiche de 50g hamburger 100% carne Angus, 2 fatias de muçarela derretida, alface, tomate fresquinho, picles e maionese americana'
  },
  {
    id: 15,
    title: 'Amigos da Sexta',
    categoria: 'promocao',
    preco: 25.0,
    imagem:
      '../assets/image/promocao/frita-assa-de-frango-batata-calabresa-carne.jpg',
    descricao:
      'Coxas de frango frito, batata-frita ou assada, fatias de cenoura, calabresa na chapa, isca de carne e molho de preferência'
  },
  {
    id: 16,
    title: 'Amigos da Sexta Primium',
    categoria: 'promocao',
    preco: 25.0,
    imagem:
      '../assets/image/promocao/promocao-anais-cebola-camarao-asa-frango.jpg',
    descricao:
      'Coxas de frango frito, batata-frita ou assada, fatias de cenoura, calabresa na chapa, camarão frito, aneis da cebola e molho de preferência'
  },
  {
    id: 17,
    title: 'Asas de Frango frito',
    categoria: 'frango',
    preco: 25.0,
    imagem: '../assets/image/frango/frango-asa-frito.jpg',
    descricao: 'Asas de frango frito ao molho de preferência e salada'
  },
  {
    id: 18,
    title: 'Peito de Frango Gralhado',
    categoria: 'frango',
    preco: 25.0,
    imagem: '../assets/image/frango/frango-batata-assada.jpg',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic dignissimos aliquid labore quae consequuntur ratione praesentium ad porro, nam expedita'
  },
  {
    id: 19,
    title: 'Peito de Frango Gralhado com brocolis',
    categoria: 'frango',
    preco: 25.0,
    imagem: '../assets/image/frango/frango-brocolis.jpg',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic dignissimos aliquid labore quae consequuntur ratione praesentium ad porro, nam expedita'
  },
  {
    id: 20,
    title: 'Cubos de peito de frango Gralhado com arroz e brocolis',
    categoria: 'frango',
    preco: 25.0,
    imagem: '../assets/image/frango/frango-brocolis.jpg',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic dignissimos aliquid labore quae consequuntur ratione praesentium ad porro, nam expedita'
  },
  {
    id: 21,
    title: 'Frango empanado com salada',
    categoria: 'frango',
    preco: 25.0,
    imagem: '../assets/image/frango/frango-empanado-salada.jpg',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic dignissimos aliquid labore quae consequuntur ratione praesentium ad porro, nam expedita'
  },
  {
    id: 22,
    title: 'Coxa de Frango frita',
    categoria: 'frango',
    preco: 25.0,
    imagem: '../assets/image/frango/frango-frito-coxa-batata-frita.jpg',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic dignissimos aliquid labore quae consequuntur ratione praesentium ad porro, nam expedita'
  },
  {
    id: 23,
    title: 'Peito de Frango grelhado com salada cozida',
    categoria: 'frango',
    preco: 25.0,
    imagem: '../assets/image/frango/frango-grelhado-peito-salada-cozida.jpg',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic dignissimos aliquid labore quae consequuntur ratione praesentium ad porro, nam expedita'
  },
  {
    id: 24,
    title: 'Peito de Frango com arroz e brocólis',
    categoria: 'frango',
    preco: 25.0,
    imagem: '../assets/image/frango/frango-peito-arroz-brocolis.jpg',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic dignissimos aliquid labore quae consequuntur ratione praesentium ad porro, nam expedita'
  },
  {
    id: 25,
    title: 'Peito de Frango com arroz e brocólis',
    categoria: 'frango',
    preco: 25.0,
    imagem: '../assets/image/frango/frango-peito-arroz-brocolis.jpg',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic dignissimos aliquid labore quae consequuntur ratione praesentium ad porro, nam expedita'
  },
  {
    id: 26,
    title: 'Peito de Frango com arroz e brocólis',
    categoria: 'frango',
    preco: 25.0,
    imagem: '../assets/image/carne/carne-arroz-salada-batata.jpg',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic dignissimos aliquid labore quae consequuntur ratione praesentium ad porro, nam expedita'
  },
  {
    id: 27,
    title: 'Bife de carne com arroz e salada',
    categoria: 'carne',
    preco: 25.0,
    imagem: '../assets/image/carne/carne-arroz-salada.jpg',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic dignissimos aliquid labore quae consequuntur ratione praesentium ad porro, nam expedita'
  },
  {
    id: 28,
    title: 'Bife de carne com fritas',
    categoria: 'carne',
    preco: 25.0,
    imagem: '../assets/image/carne/carne-assada-fritas.jpg',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic dignissimos aliquid labore quae consequuntur ratione praesentium ad porro, nam expedita'
  },
  {
    id: 29,
    title: 'Bife de carne com com salada',
    categoria: 'carne',
    preco: 25.0,
    imagem: '../assets/image/carne/carne-bife-molho-batata-salada.jpg',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic dignissimos aliquid labore quae consequuntur ratione praesentium ad porro, nam expedita'
  },
  {
    id: 30,
    title: 'Carne ao molho madeira',
    categoria: 'carne',
    preco: 25.0,
    imagem: '../assets/image/carne/carne-molho-madeira.jpg',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic dignissimos aliquid labore quae consequuntur ratione praesentium ad porro, nam expedita'
  },
  {
    id: 31,
    title: 'Bolo de chocolate e baunilha',
    categoria: 'sobremesa',
    preco: 25.0,
    imagem: '../assets/image/sobremesa/bolo-chocolate-baunilha.jpg',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic dignissimos aliquid labore quae consequuntur ratione praesentium ad porro, nam expedita'
  },
  {
    id: 32,
    title: 'Bolo de chocolate e morango',
    categoria: 'sobremesa',
    preco: 25.0,
    imagem: '../assets/image/sobremesa/bolo-de-chocolate-morango.jpg',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic dignissimos aliquid labore quae consequuntur ratione praesentium ad porro, nam expedita'
  },
  {
    id: 33,
    title: 'Bolo de frutas',
    categoria: 'sobremesa',
    preco: 25.0,
    imagem: '../assets/image/sobremesa/bolo-frutas.jpg',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic dignissimos aliquid labore quae consequuntur ratione praesentium ad porro, nam expedita'
  },
  {
    id: 34,
    title: 'Bolo de gelado de frutas vermelhas',
    categoria: 'sobremesa',
    preco: 25.0,
    imagem: '../assets/image/sobremesa/bolo-gelado.jpg',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic dignissimos aliquid labore quae consequuntur ratione praesentium ad porro, nam expedita'
  },
  {
    id: 35,
    title: 'Brownie e sorvete',
    categoria: 'sobremesa',
    preco: 25.0,
    imagem: '../assets/image/sobremesa/brownie-sorvete.jpg',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic dignissimos aliquid labore quae consequuntur ratione praesentium ad porro, nam expedita'
  },
  {
    id: 36,
    title: 'Pudim',
    categoria: 'sobremesa',
    preco: 25.0,
    imagem: '../assets/image/sobremesa/pudim.jpg',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic dignissimos aliquid labore quae consequuntur ratione praesentium ad porro, nam expedita'
  },
  {
    id: 37,
    title: 'Milk Sheke chocolate',
    categoria: 'sobremesa',
    preco: 25.0,
    imagem: '../assets/image/sobremesa/shake-chocolate.jpg',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic dignissimos aliquid labore quae consequuntur ratione praesentium ad porro, nam expedita'
  },
  {
    id: 38,
    title: 'Milk Sheke Morango',
    categoria: 'sobremesa',
    preco: 25.0,
    imagem: '../assets/image/sobremesa/shake-morango.jpg',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic dignissimos aliquid labore quae consequuntur ratione praesentium ad porro, nam expedita'
  },
  {
    id: 39,
    title: 'Milk Sheke Oreo',
    categoria: 'sobremesa',
    preco: 25.0,
    imagem: '../assets/image/sobremesa/shake-oreo.jpg',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic dignissimos aliquid labore quae consequuntur ratione praesentium ad porro, nam expedita'
  },
  {
    id: 40,
    title: 'Refrigerante',
    categoria: 'bebida',
    preco: 25.0,
    imagem: '../assets/image/bebida/bebida-refrigerante.jpg',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic dignissimos aliquid labore quae consequuntur ratione praesentium ad porro, nam expedita'
  },
  {
    id: 41,
    title: 'Suco',
    categoria: 'bebida',
    preco: 25.0,
    imagem: '../assets/image/bebida/bebida-suco-melancia.jpg',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic dignissimos aliquid labore quae consequuntur ratione praesentium ad porro, nam expedita'
  }
]

const itensMenu = document.querySelector('.r-item')
const btnContainer = document.querySelector('.r-button')

window.addEventListener('DOMContentLoaded', function () {
  displayMenuItens(menu)
  displayMenuButtons()
})

function displayMenuItens(menuItens = []) {
  let displayMenu = menuItens.map(function (item) {
    return `<article class="r-menu-item">
                        <img src='${item.imagem}' class="r-photo" alt='${item.title}'>
                        <div class="r-menu-item__info">
                            <header>
                                <h4>${item.title}</h4>
                                <h4 class="price">${item.preco}</h4>
                            </header>
                            <p class="r-menu-item__text">${item.descricao}</p>
                        </div>
           
                    </article>`
  })
  displayMenu = displayMenu.join('')
  itensMenu.innerHTML = displayMenu
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.categoria)) {
        values.push(item.categoria)
      }
      return values
    },
    ['todos']
  )

  //console.log('ALL CATEOGIRES', categories)

  const categoryBtns = categories
    .map(function (categoria) {
      return `<button type="button" class="r-button-filter" data-id=${categoria}>
                ${categoria}
              </button>`
    })
    .join('')

  btnContainer.innerHTML = categoryBtns
  const filterBtns = btnContainer.querySelectorAll('.r-button-filter')
  //console.log('FILTER', filterBtns)

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      //console.log(e.currentTarget.dataset)

      const categoria = e.currentTarget.dataset.id
      console.log('categoria selecionada: ', categoria)

      const newCategory = [...menu].filter(menuItem => {
        if (menuItem.categoria !== categoria && categoria != 'todos') return

        return menuItem
      })

      //console.log('aqui', newCategory)
      return displayMenuItens(newCategory)
    })
  })
}
