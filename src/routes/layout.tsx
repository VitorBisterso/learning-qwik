import { component$, Slot } from '@builder.io/qwik';
import MainLayout from '~/components/main-layout/main-layout';

export default component$(() => {
  return (
    <MainLayout>
      <Slot />
    </MainLayout>
  );
});
