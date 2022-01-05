import { Fragment } from 'react';
import Contactar from '../src/components/homepage_sections/Contactar';
import Galeria from '../src/components/homepage_sections/Galeria';
import Hero from '../src/components/homepage_sections/Hero';
import Horarios from '../src/components/homepage_sections/Horarios';

export default function Home() {
  return (
    <Fragment>
      <div>
        <Hero />
      </div>
      <div>
        <Horarios />
      </div>
      <div>
        <Galeria />
      </div>
      <div>
        <Contactar />
      </div>
    </Fragment>
  )
};