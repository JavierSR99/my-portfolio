import { ICompaniesCard } from "../interfaces/companies-card.interface";

const IMG_ROUTE: string = "/assets/images/companies/";

export const COMPANIES: ICompaniesCard[] = [
  {
    title: 'Yub Store',
    logo : `${IMG_ROUTE}yub.png`,
    description : 'Probando descripción'
  },
  {
    title: 'ARATECH lifestyle technology',
    logo : `${IMG_ROUTE}aratech.png`,
    description : 'Probando descripción'
  },
  {
    title: 'ICP',
    logo : `${IMG_ROUTE}icp.png`,
    description : 'Probando descripción'
  }
];