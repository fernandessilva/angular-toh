export interface Hero {
  idHero: number;
  name: string;
  image: string;
  category: string | null;
}

export interface HeroPagination {
  items: Hero[];
  totalPages: number;
  nextPage: number | null;
  previousPage: number | null;
  page: number;
  maxFound: number;
  limit: number | null;
}
