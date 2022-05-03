import Image from 'next/image'

export async function getStaticProps() {
  const res = await fetch('https://coffee.alexflipnote.dev/random.json')
  const coffee = await res.json()

  return {
    props: {
      image: coffee.file,
    },
  }
}

const Home = ({ image }) => {
  return (
    <Image
      height={400}
      width={400}
      src={image}
    />
  )
}
 
export default Home
