export interface OrderItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface CheckoutSummary {
  subtotal: number;
  tax: number;
  total: number;
}

export interface ShippingAddress {
  name: string;
  email: string;
  phone: string;
  zipCode: string;
  streetAddress: string;
  city: string;
  province: string;
}
