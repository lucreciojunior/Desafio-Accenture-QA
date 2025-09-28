import practiceForm from '../../support/pages/practiceFormPage';

describe('Practice Form - Preenchimento e Submit', () => {

  it('Preencher formulário com dados aleatórios e validar popup', () => {
    practiceForm.visit();
    practiceForm.fillForm();
    practiceForm.submit();
    practiceForm.validateModal();
    practiceForm.closeModal();
  });

});
