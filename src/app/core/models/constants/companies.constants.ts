import { ICompaniesCard } from "../interfaces/companies-card.interface";

const IMG_ROUTE: string = "/assets/images/companies/";

export const COMPANIES: ICompaniesCard[] = [
  {
    title: 'Yub Store',
    logo : `${IMG_ROUTE}yub.png`,
    description : 'CV.JOBS.YUB.DESCRIPTION',
    timeline : 'CV.JOBS.YUB.TIME'
  },
  {
    title: 'ARATECH',
    logo : `${IMG_ROUTE}aratech.png`,
    description : 'CV.JOBS.ARATECH.DESCRIPTION',
    timeline : 'CV.JOBS.ARATECH.TIME'
  },
  {
    title: 'ICP',
    logo : `${IMG_ROUTE}icp.png`,
    description : 'CV.JOBS.ICP.DESCRIPTION',
    timeline : 'CV.JOBS.ICP.TIME'
  }
];