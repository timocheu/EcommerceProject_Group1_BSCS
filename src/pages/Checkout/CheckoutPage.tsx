import { useState, useEffect } from "react";

import { ShoppingBag, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"


interface OrderItem {
id: string;
name: string;
price: number;
image: string;
quantity: number;
}

interface CheckoutSummary {
subtotal: number;
tax: number;
total: number;
}

interface ShippingAddress {
name: string;
email: string;
phone: string;
zipCode: string;
streetAddress: string;
city: string;
province: string;
}

export function CheckoutPage()
{
    const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
    const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
      name: "",
      email: "",
      phone: "",
      zipCode: "",
      streetAddress: "",
      city: "",
      province: "",
    });

    const sampleOrderItems: OrderItem[] = [
      {
        id: "1",
        name: "Wireless Bluetooth Headphones",
        price: 89.99,
        image:
          "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1165&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        quantity: 2,
      },
      {
        id: "2",
        name: "Minimalist Desk Lamp",
        price: 45.99,
        image:
          "https://images.unsplash.com/photo-1617363020293-62faac14783d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        quantity: 1,
      },
      {
        id: "3",
        name: "Organic Coffee Beans",
        price: 24.99,
        image:
          "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop",
        quantity: 3,
      },
    ];

    useEffect(() => {
      const loadCheckout = async () => {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 1200));
        setOrderItems(sampleOrderItems);
      };

      loadCheckout();
    }, []);

    const calculateSummary = (): CheckoutSummary => {
      const subtotal = orderItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      const tax = subtotal * 0.12; // 8% tax
      const total = subtotal + tax;

      return {
        subtotal,
        tax,
        total,
      };
    };

    const summary = calculateSummary();

    const OrderSummaryCard = () => (
      <Card className="flex flex-col gap-5 w-xl">
        <CardHeader>
          <h3 className="font-semibold flex items-center gap-2">
            <ShoppingBag className="h-4 w-4" />
            Order Summary
          </h3>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {/* Order Items */}
          <div className="flex flex-col gap-4">
            {orderItems.map((item) => (
              <div key={item.id} className="flex gap-3">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-md"
                  />
                  <Badge
                    size="sm"
                    className="absolute -top-1 -right-1 text-xs min-w-5 h-5 flex items-center justify-center"
                  >
                    {item.quantity}
                  </Badge>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{item.name}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">${item.price}</span>
                  </div>
                </div>
                <div className="text-sm font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          {/* Pricing Breakdown */}
          <div className="flex flex-col gap-2 border-t pt-4">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>₱{summary.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Tax</span>
              <span>₱{summary.tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg border-t pt-2">
              <span>Total</span>
              <span>₱{summary.total.toFixed(2)}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    );

    const OrderFieldCard = () => (
    <Card className="w-xl p-5">
        <CardHeader className="flex flex-col text-center items-center">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Shipping Information
              </h2>
              <CardDescription>
                Enter your information below.
              </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <form>
            <FieldGroup>
              <FieldSet>
                <FieldLegend>Checkout Details</FieldLegend>
                <FieldDescription>
                  All transactions are secure and encrypted
                </FieldDescription>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                      Name
                    </FieldLabel>
                    <Input
                      id="checkout-7j9-card-name-43j"
                      placeholder="Anchor Jave"
                      required
                    />
                  </Field>
                  <div className="grid grid-cols-2 gap-4">
                    <Field>
                      <FieldLabel htmlFor="zip">Zip Code</FieldLabel>
                      <Input id="zip" type="text" placeholder="6000" required/>
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="phone">Phone</FieldLabel>
                      <Input id="phone" type="text" placeholder="(+63)" required/>
                    </Field>
                  </div>
                </FieldGroup>
              </FieldSet>
              <FieldSeparator />
                <div className="w-full max-w-md space-y-6">
                  <FieldSet>
                    <FieldLegend>Address Information</FieldLegend>
                    <FieldDescription>
                      We need your address to deliver your order.
                    </FieldDescription>
                    <FieldGroup>
                      <Field>
                        <FieldLabel htmlFor="street">Street Address</FieldLabel>
                        <Input id="street" type="text" placeholder="123 Main St" required/>
                      </Field>
                      <div className="grid grid-cols-2 gap-4">
                        <Field>
                          <FieldLabel htmlFor="city">City</FieldLabel>
                          <Input id="city" type="text" placeholder="Cebu City" required/>
                        </Field>
                        <Field>
                          <FieldLabel htmlFor="zip">Province</FieldLabel>
                          <Input id="province" type="text" placeholder="Bulacao" required/>
                        </Field>
                      </div>
                    </FieldGroup>
                  </FieldSet>
                </div>
              <Field orientation="horizontal">
                <Button type="submit">Confirm Checkout</Button>
                <Button variant="outline" type="button">
                  Cancel
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    );

    return (
        <>
            <div className="w-full mx-auto p-6 flex flex-col gap-6">
              <div className="bg-muted flex flex-col md:flex-row min-h-svh items-center justify-center p-6 md:p-10 gap-6 md:gap-20">
                <OrderFieldCard />
                <OrderSummaryCard />
              </div>
            </div>
        </>
    )
}
