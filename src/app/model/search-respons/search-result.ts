export interface SearchResult {
  status: string;
  result: Result[];
}

export interface Price {
  priceType: string;
  price: number;
}

export interface ShippingPrice {
  priceType: string;
  price: number;
}

export interface Product {
  price: Price;
  shippingPrice: ShippingPrice;
  itemLocation: string;
  shippingTo: string;
  buyingFormat?: any;
  pictureUrl: string;
  condition?: any;
  itemUrl: string;
  startTime: Date;
  endTime: Date;
  returnAccepted: boolean;
  title: string;
}

export interface PreviouseResultCount {
  EBAY: number;
}

export interface Result {
  products: Product[];
  previouseResultCount: PreviouseResultCount;
}

