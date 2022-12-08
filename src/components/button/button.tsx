import { component$, PropFunction, useStylesScoped$ } from '@builder.io/qwik';

import styles from './button.css?inline';

type ButtonProps = {
   title: string;
   onClick$: PropFunction<() => void>;
}

export default component$((props: ButtonProps) => {
   useStylesScoped$(styles);

   return (
      <button onClick$={props.onClick$}>
         {props.title}
      </button>
   )
})