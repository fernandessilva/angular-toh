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
  maxfound: number;
  limit: number | null;
}

export interface IPaginationList {
  totalPages: number | null;

  nextPage: number | null;

  previousPage: number | null;

  page: number | null;

  maxFound: number | null;

  limit: number | null;
}
