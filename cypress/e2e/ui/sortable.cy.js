import sortable from '../../support/pages/sortablePage';

it('Ordena os itens em ordem crescente', () => {
  sortable.visit();

  sortable.getListTexts().then(initialList => {
    const sortedList = [...initialList].sort();

    // mover o primeiro item para o último
    sortable.asyncDrag(0, 5);

    // valida que o DOM mudou
    sortable.getListTexts().should('not.deep.equal', initialList);
  });
});

