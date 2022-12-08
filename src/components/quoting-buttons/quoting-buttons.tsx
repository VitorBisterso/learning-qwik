import { component$, useStylesScoped$, useStore, $ } from '@builder.io/qwik';

import Button from '../button/button';
import styles from './style.css?inline';

export const URL = 'https://economia.awesomeapi.com.br/last'

type CurrencyType = 'USD' | 'BRL' | 'EUR' | 'BTC'

type ApiResponseType = {
   code: CurrencyType,
   codein: CurrencyType,
   name: string,
   high: string,
   low: string,
   varBid: string,
   pctChange: string,
   bid: string,
   ask: string,
   timestamp: string,
   create_date: string
}

export default component$(() => {
   useStylesScoped$(styles);

   const state = useStore({
      isLoading: false,
      apiResponse: {} as ApiResponseType
   })

   const getQuotation = $(async (fromCurrency: CurrencyType, toCurrency: CurrencyType) => {
      state.isLoading = true
      const res = await fetch(`${URL}/${fromCurrency}-${toCurrency}`)
      const json = await res.json()
      state.apiResponse = json[`${fromCurrency}${toCurrency}`]
      state.isLoading = false
   })

   return (
      <>
         {state.isLoading ? <h2>Carregando...</h2> : (
            <>
               <div class="container">
                  <Button title='Dólar para Real' onClick$={() => {
                     getQuotation('USD', 'BRL')
                  }} />
                  <Button title='Euro para Real' onClick$={() => {
                     getQuotation('EUR', 'BRL')
                  }} />
                  <Button title='Bitcoin para Real' onClick$={() => {
                     getQuotation('BTC', 'BRL')
                  }} />
               </div>

               {Object.keys(state.apiResponse).length > 0 && (
                  <div class="currency-container">
                     <h2>Cotação para {state.apiResponse.name}</h2>
                     <h3>Data: {state.apiResponse.create_date}</h3>
                     <h5>Maior valor: {state.apiResponse.high}</h5>
                     <h5>Menor valor: {state.apiResponse.low}</h5>
                     <h5>Variação: {state.apiResponse.pctChange}%</h5>
                  </div>
               )}
            </>
         )}
      </>
   )
})