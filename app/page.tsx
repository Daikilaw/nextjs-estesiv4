import Head from 'next/head';
import Image from 'next/image';

export default function Home({ games }) {
  return (
    <div>
      <Head>
        <title>Videojuegos Alternativos</title>
        <meta name="description" content="Descubre los mejores videojuegos alternativos." />
      </Head>
      <h1>Bienvenidos a nuestra Tienda de Videojuegos Alternativos</h1>
      <div className="games-list">
        {games.map(game => (
          <div key={game.id} className="game">
            <h2>{game.title.rendered}</h2>
            <Image src={game.featured_image_url} alt={game.title.rendered} width={500} height={300} />
            <div dangerouslySetInnerHTML={{ __html: game.content.rendered }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://your-wordpress-site.com/wp-json/wp/v2/games');
  const games = await res.json();

  return {
    props: {
      games,
    },
    revalidate: 10, // ISR (Incremental Static Regeneration)
  };
}

