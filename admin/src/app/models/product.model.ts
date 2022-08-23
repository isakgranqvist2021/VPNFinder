export interface Product {
  _id: string;
  title: string;
  description: string;
  image: string;
  affiliateUrl: string;
  hasFreeOption: boolean;
  draft: boolean;
  moneyBackGuarantee: boolean;
  onSale: boolean;
  discount: number;
  features: { label: string }[];
}
