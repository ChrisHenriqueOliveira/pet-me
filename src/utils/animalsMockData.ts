import pet1 from '../assets/pet1.jpg';
import pet2 from '../assets/pet2.jpg';
import pet3 from '../assets/pet3.jpg';
import pet4 from '../assets/pet4.jpg';
import pet5 from '../assets/pet5.jpg';

interface PetInfo {
  id: string;
  ownerName: string;
  ownerNumber: string;
  petImage: string;
  petName: string;
  petSize: string;
  petGender: string;
  petSpecies: string;
  petAge: string;
  petDescription: string;
  stateId: string;
  cityId: string;
  stateName: string;
  cityName: string;
}
export const PetsData: PetInfo[] = [
  {
    id: '1',
    ownerName: 'Christian',
    ownerNumber: '11-92837-2832',
    petImage: pet1,
    petName: 'Pet 1',
    petSize: 'Grande',
    petSpecies: 'Cachorro',
    petGender: 'Macho',
    petAge: '02 meses',
    petDescription:
      'Usuário de ossos e impiedoso perante os aquáticos eroedores enquanto navega pelos rios em busca da gata certa.',
    stateId: '23434242',
    cityId: '120001305',
    stateName: 'São Paulo',
    cityName: 'Jundiaí',
  },
  {
    id: '2',
    ownerName: 'Christian',
    ownerNumber: '11-92837-2832',
    petImage: pet2,
    petName: 'Pet 2',
    petSize: 'Grande',
    petSpecies: 'Gato',
    petGender: 'Femea',
    petAge: '09 meses',
    petDescription:
      'Usuário de ossos e impiedoso perante os aquáticos eroedores enquanto navega pelos rios em busca da gata certa.',
    stateId: '23434242',
    cityId: '120001305',
    stateName: 'São Paulo',
    cityName: 'Jundiaí',
  },
  {
    id: '3',
    ownerName: 'Christian',
    ownerNumber: '11-92837-2832',
    petImage: pet3,
    petName: 'Pet 3',
    petSize: 'Grande',
    petSpecies: 'Gato',
    petGender: 'Femea',
    petAge: '09 meses',
    petDescription:
      'Usuário de ossos e impiedoso perante os aquáticos eroedores enquanto navega pelos rios em busca da gata certa.',
    stateId: '23434242',
    cityId: '120001305',
    stateName: 'São Paulo',
    cityName: 'Jundiaí',
  },
  {
    id: '4',
    ownerName: 'Christian',
    ownerNumber: '11-92837-2832',
    petImage: pet4,
    petName: 'Pet 4',
    petSize: 'Grande',
    petSpecies: 'Gato',
    petGender: 'Femea',
    petAge: '09 meses',
    petDescription:
      'Usuário de ossos e impiedoso perante os aquáticos eroedores enquanto navega pelos rios em busca da gata certa.',
    stateId: '23434242',
    cityId: '120001305',
    stateName: 'São Paulo',
    cityName: 'Jundiaí',
  },
  {
    id: '5',
    ownerName: 'Christian',
    ownerNumber: '11-92837-2832',
    petImage: pet5,
    petName: 'Pet 5',
    petSize: 'Grande',
    petSpecies: 'Gato',
    petGender: 'Femea',
    petAge: '09 meses',
    petDescription:
      'Usuário de ossos e impiedoso perante os aquáticos eroedores enquanto navega pelos rios em busca da gata certa.',
    stateId: '23434242',
    cityId: '120001305',
    stateName: 'São Paulo',
    cityName: 'Jundiaí',
  },
];
