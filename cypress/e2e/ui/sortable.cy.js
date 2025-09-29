import sortable from '../../support/pages/sortablePage';

it('Ordena os itens em ordem crescente', () => {
  sortable.visit();

  sortable.getListTexts().then(initialList => {
    const sortedList = [...initialList].sort();

    sortable.asyncDrag(0, 5);

    sortable.getListTexts().should('not.deep.equal', initialList);
  });
});

