import { IDeveloper } from '../../core/models/developer.interface';
import { punctuations_mock } from './punctuations';
export const SIMPLEDEVELS: IDeveloper[] = [
    { id: '100', full_name: 'Luis Gerardo Manrique',
     color:  '#2196F3',  available_hours_per_week:  null,
     punctuations: punctuations_mock,
     role_name : 'Developer'},

     { id: '101', full_name: 'Jefferson Meneses',
     color:  'rgb(255, 87, 0)',  available_hours_per_week:  30,
     punctuations: punctuations_mock,
     role_name : 'Developer'}
  ];
