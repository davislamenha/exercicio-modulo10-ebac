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

  // JQUERY VALIDATE
  $('form').validate({
    rules: {
      nome: {
        required: true,
      },
      telefone: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      cpf: {
        required: true,
      },
      endereco: {
        required: true,
      },
      cep: {
        required: true,
      },
    },
    messages: {
      nome: {
        required: 'Por favor, insira seu nome',
      },
      telefone: {
        required: 'Por favor, insira seu telefone',
      },
      email: {
        required: 'Este campo é obrigatório',
      },
      cpf: {
        required: 'Este campo é obrigatório',
      },
      endereco: {
        required: 'Este campo é obrigatório',
      },
      cep: {
        required: 'Este campo é obrigatório',
      },
    },
  });
});
