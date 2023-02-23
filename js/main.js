$('document').ready(function () {
  // JQUERY MASK
  $('#cpf').mask('000.000.000-00', {
    placeholder: '000.000.000-00',
  });
  $('#telefone').mask('(00) 9 0000-0000', {
    translation: {
      9: {
        pattern: /[9]/,
        optional: false,
      },
    },
    placeholder: '(00) 9 0000-0000',
  });
  $('#cep').mask('00000-000', {
    placeholder: '00000-000',
  });
});
