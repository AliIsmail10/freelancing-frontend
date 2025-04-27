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
    currency: string
    expectedDuration: number
    subcategoryID: number
    experienceLevel: string
    proposalsCount: number
    projectSkills: string[]
    milestones: any[]
  }
  export interface ProjectsResponse {
    totalCount: number;
    pageNumber: number;
    pageSize: number;
    projects: FixedPriceProject[];
  }