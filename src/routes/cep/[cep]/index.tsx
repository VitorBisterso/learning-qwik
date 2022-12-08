import { component$, useStylesScoped$, Resource } from '@builder.io/qwik';
import { RequestHandler, useEndpoint } from '@builder.io/qwik-city';

import styles from './style.css?inline';

type ApiResponseType = {
   address: string;
   state: string;
   city: string;
}

export const onGet: RequestHandler<ApiResponseType> = async ({ params }) => {
   const res = await fetch(`https://cep.awesomeapi.com.br/json/${params.cep}`)
   return await res.json()
}

export default component$(() => {
   useStylesScoped$(styles);

   const cepData = useEndpoint<ApiResponseType>();
   return (
      <div class="container">
         <Resource
            value={cepData}
            onPending={() => <label>Carregando...</label>}
            onRejected={(e) => <h3>Erro: {e.message}</h3>}
            onResolved={(cep) => (
               <>
                  <h3>{cep.address} - {cep.city} - {cep.state}</h3>
               </>
            )}
         />
      </div>
   )
})