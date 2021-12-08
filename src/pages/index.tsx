import { GetStaticProps } from 'next';
import Head from 'next/head';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

 export default function Home() {


return(
<main className={styles.container}>
  <section className={styles.content}>
      <div>
        <a href="http://" target="_blank" rel="noopener noreferrer">
        <h1>Como utilizar Hooks</h1>
        </a>
        <p>Pensando em sicronização em vez de ciclos de vida.</p>
        <div>
            <time>
              <img src="" alt="" />
              15 Mar 2021 
            </time>
            <p>
              <img src="" alt="" />
              Joseph Oliveira
            </p>
        </div>
        
      </div>

      <div>
        <a href="http://" target="_blank" rel="noopener noreferrer">
        <h1>Como utilizar Hooks</h1>
        <p>Pensando em sicronização em vez de ciclos de vida.</p>
        <div>
            <time>
              <img src="" alt="" />
              15 Mar 2021 
            </time>
            <p>
              <img src="" alt="" />
              Joseph Oliveira
            </p>
        </div>
        </a>
      </div>

      <div>
        <a href="http://" target="_blank" rel="noopener noreferrer">
        <h1>Como utilizar Hooks</h1>
        <p>Pensando em sicronização em vez de ciclos de vida.</p>
        <div>
            <time>
              <img src="" alt="" />
              15 Mar 2021 
            </time>
            <p>
              <img src="" alt="" />
              Joseph Oliveira
            </p>
        </div>
        </a>
      </div>

      <div>
        <a href="http://" target="_blank" rel="noopener noreferrer">
        <h1>Como utilizar Hooks</h1>
        <p>Pensando em sicronização em vez de ciclos de vida.</p>
        <div>
            <time>
              <img src="" alt="" />
              15 Mar 2021 
            </time>
            <p>
              <img src="" alt="" />
              Joseph Oliveira
            </p>
        </div>
        </a>
      </div>
      <div>
        <span>Carregar mais posts...</span>
      </div>
      
  </section>
</main>

)
  
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };
