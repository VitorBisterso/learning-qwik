import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { useNavigate } from '@builder.io/qwik-city';
import Button from '~/components/button/button';

import QuotingButtons from '~/components/quoting-buttons/quoting-buttons';

export default component$(() => {
  const navigate = useNavigate()

  return (
    <div>
      <h2>Bem vindo! Escolha qual das cotações gostaria de visualizar!</h2>
      <QuotingButtons />
      <div style={{ display: 'grid', placeItems: 'center', margin: '5vh 0' }}>
        <Button
          title='Ir para página de CEP'
          onClick$={() => {
            navigate.path = '/cep/05424020'
          }}
        />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Cotação de moedas',
  meta: [
    {
      name: 'initial',
      content: 'some tests with qwik',
    },
  ],
};
