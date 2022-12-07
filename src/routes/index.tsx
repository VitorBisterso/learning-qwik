import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      <p>Parte principal</p>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Página inicial',
  meta: [
    {
      name: 'initial',
      content: 'some tests with qwik',
    },
  ],
};
