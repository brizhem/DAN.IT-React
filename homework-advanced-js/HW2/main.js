const books = [
  { 
    author: "Скотт Бэккер",
    name: "Тьма, что приходит прежде",
    price: 70 
  }, 
  {
   author: "Скотт Бэккер",
   name: "Воин-пророк",
  }, 
  { 
    name: "Тысячекратная мысль",
    price: 70
  }, 
  { 
    author: "Скотт Бэккер",
    name: "Нечестивый Консульт",
    price: 70
  }, 
  {
   author: "Дарья Донцова",
   name: "Детектив на диете",
   price: 40
  },
  {
   author: "Дарья Донцова",
   name: "Дед Снегур и Морозочка",
  }
];

function createList() {
  const rootElement = document.getElementById('root');

  if (!rootElement) return console.error('root element not found');

  const listElement = document.createElement('ul');

  createListItems(listElement);

  rootElement.append(listElement);
};

function createListItems(listElement) {
  let stringHtml = '';
  
  books.forEach((element) => {
    try {
      if(!element.author) throw new SyntaxError('property author not found');
            
      if (!element.name) throw new SyntaxError('property name not found');

      if(!element.price) throw new SyntaxError('property price not found');

      stringHtml = stringHtml + `<li>author: ${element.author}</li>
                        <li>name: ${element.name}</li>
                        <li>price: ${element.price}</li>`;
    } catch (err) {
      console.error(err.message);
    }
  });

  listElement.innerHTML = stringHtml;
};

createList();