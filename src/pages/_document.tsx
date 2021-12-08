import Document , {Html , Head , Main , NextScript} from 'next/document';
import React from 'react';
import Header from '../components/Header';

export default class MyDocument extends Document {
   render() {
     return(
<Html lang="pt-BR">
  <Head>
    <link rel="preconnect" href="https://fonts.gstatic.com" />  
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;600&display=swap" rel="stylesheet"/>
    <title>Post | By Me</title>
  </Head>
  <body>
   
    <Main />
    <NextScript />
  
  </body>
</Html>

     )
   }
}
