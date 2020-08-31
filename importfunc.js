let lists = {};

//funcao fetch item and return it/feito
export function fetchItems() {
  return lists;
}

//funcao adicionar valores na lista/feito
export function addItem(item) {
  return (lists = { ...lists, [item.id]: item });
}

//function remover
export function removeItem(item) {
  delete lists[item];
}

//function updateItem atualiza um item
export function updateItem(id, property) {
  lists[id] = {
    ...lists[id],
    ...property,
  };
}
export function clearList() {
  return (lists = {});
}
