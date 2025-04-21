import { PortfolioImage } from "./PortfolioImage";

export interface portfolioProject
 {
   id: number;
   title: string;
   description: string;
   createdAt: string; 
   freelancerId: string;
   images: PortfolioImage[];
 }

 