export interface Author {
  name: string;
  url?: string;
  affiliations: number[];
  isEqualContribution?: boolean;
  isCorresponding?: boolean;
}

export interface Affiliation {
  id: number;
  name: string;
}

export interface LinkButton {
  label: string;
  iconClass: string;
  url: string;
  isImage?: boolean;
}
