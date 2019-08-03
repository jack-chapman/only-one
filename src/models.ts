export interface Order {
  name: string;
  model: string;
  colour: string;
  address: string;
  wheelsAmount: 1;
  id: number;
}

export interface OrderRequest {
  model: string;
  colour: string;
  wheels: string;
}