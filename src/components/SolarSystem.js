import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

export default class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {
          planets.map((dataPlanet) => (<PlanetCard
            key={ dataPlanet.name }
            planetName={ dataPlanet.name }
            planetImage={ dataPlanet.image }
          />))
        }
      </div>
    );
  }
}
