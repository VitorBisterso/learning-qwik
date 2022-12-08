import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import QuotingButtons from '~/components/quoting-buttons/quoting-buttons';

export default component$(() => {
  return (
    <div>
      <h2>Bem vindo! Escolha qual das cotações gostaria de visualizar!</h2>
      <QuotingButtons />
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
