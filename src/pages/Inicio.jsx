import Hero from '../components/Hero'
import Activities from '../components/Activities'
import Cursos from '../components/Cursos'
import Comunidad from '../components/Comunidad'
import VideoBox from "../components/VideoBox";
import Intro from "../components/Intro";

export default function Inicio() {
  return (
    <>
      <Hero />
      <Intro />
      <Activities />
      <Comunidad />
      <VideoBox />
    </>
  )
}
