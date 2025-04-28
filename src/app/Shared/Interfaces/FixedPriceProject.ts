export interface Milestone {
    title: string;
    startdate: string;
    enddate: string;
    amount: number;
    description: string;
    status: string;
  }
  
  export interface FixedPriceProject {
    id: number;
    title: string;
    description: string;
    price: number;
    currency: string;
    expectedDuration: number;
    subcategoryID: number;
    experienceLevel: string;
    proposalsCount: number;
    projectSkills: string[];
    milestones: Milestone[];
  }
  // get project by id
  export interface FixedPriceProjectById {
    id: number
    title: string
    description: string
    price: number
    currency: string
    expectedDuration: number
    subcategoryID: number
    experienceLevel: string
    proposalsCount: number
    projectSkills: string[]
    milestones: any[]
  }

  // create project