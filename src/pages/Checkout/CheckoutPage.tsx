import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ShoppingBag, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import type { OrderItem, CheckoutSummary } from "@/types";

export function CheckoutPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

  useEffect(() => {
    console.log("Received state:", state);

    if (state?.orderItems && Array.isArray(state.orderItems)) {
      console.log("Setting orderItems from state");
      setOrderItems(state.orderItems);
      return;
    }

    // Fallback to localStorage (only if user manually refreshed)
    const saved = localStorage.getItem("cartItems");
    if (saved) {
      console.log("Fallback to cartItems from localStorage");
      setOrderItems(JSON.parse(saved));
    }
  }, [state]);

  // Save latest buy-now item for refresh persistence
  useEffect(() => {
    if (orderItems.length === 1) {
      localStorage.setItem("lastBuyNowItem", JSON.stringify(orderItems[0]));
    }
  }, [orderItems]);

  // Compute total
  const calculateSummary = (): CheckoutSummary => {
    const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = subtotal * 0.12;
    const total = subtotal + tax;
    return { subtotal, tax, total };
  };

  const summary = calculateSummary();

  const handleConfirmCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderItems.length === 0) {
      alert("No product to checkout.");
      return;
    }


    localStorage.removeItem("lastBuyNowItem");

    navigate("/receipt", { state: { orderItems, summary } });
  };

  const handleCancel = () => navigate(-1);

  // Order Summary Card
  const OrderSummaryCard = () => (
    <Card className="flex flex-col gap-5 w-xl">
      <CardHeader>
        <h3 className="font-semibold flex items-center gap-2">
          <ShoppingBag className="h-4 w-4" />
          Order Summary
        </h3>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          {orderItems.length === 0 ? (
            <p className="text-gray-500 text-sm italic">No items in your order.</p>
          ) : (
            orderItems.map((item, index) => (
              <div key={`${item.id}-${index}`} className="flex gap-3 items-center">
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
                  <span className="text-sm font-semibold">₱ {item.price.toLocaleString()}</span>
                </div>
                <div className="text-sm font-semibold">
                  ₱ {(item.price * item.quantity).toLocaleString()}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="flex flex-col gap-2 border-t pt-4">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>₱{summary.subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Tax (12%)</span>
            <span>₱{summary.tax.toLocaleString()}</span>
          </div>
          <div className="flex justify-between font-semibold text-lg border-t pt-2">
            <span>Total</span>
            <span>₱{summary.total.toLocaleString()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  //  Shipping Form
  const OrderFieldCard = () => (
    <Card className="w-xl p-5">
      <CardHeader className="text-center">
        <h2 className="text-xl font-semibold flex items-center gap-2 justify-center">
          <MapPin className="h-5 w-5" />
          Shipping Information
        </h2>
        <CardDescription>Enter your information below.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <form onSubmit={handleConfirmCheckout}>
          <FieldGroup>
            <FieldSet>
              <FieldLegend>Checkout Details</FieldLegend>
              <FieldDescription>All transactions are secure and encrypted.</FieldDescription>
              <FieldGroup>
                <Field>
                  <FieldLabel>Name</FieldLabel>
                  <Input placeholder="Juan Dela Cruz" required />
                </Field>
                <div className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel>Zip Code</FieldLabel>
                    <Input placeholder="6000" required />
                  </Field>
                  <Field>
                    <FieldLabel>Phone</FieldLabel>
                    <Input placeholder="(+63)" required />
                  </Field>
                </div>
              </FieldGroup>
            </FieldSet>

            <FieldSeparator />

            <FieldSet>
              <FieldLegend>Address Information</FieldLegend>
              <FieldDescription>We need your address to deliver your order.</FieldDescription>
              <FieldGroup>
                <Field>
                  <FieldLabel>Street Address</FieldLabel>
                  <Input placeholder="123 Main St" required />
                </Field>
                <div className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel>City</FieldLabel>
                    <Input placeholder="Cebu City" required />
                  </Field>
                  <Field>
                    <FieldLabel>Province</FieldLabel>
                    <Input placeholder="Cebu" required />
                  </Field>
                </div>
              </FieldGroup>
            </FieldSet>

            <Field orientation="horizontal" className="mt-4 flex gap-4 justify-end">
              <Button type="submit">Confirm Checkout</Button>
              <Button variant="outline" type="button" onClick={handleCancel}>
                Cancel
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );

  return (
    <div className="w-full mx-auto p-6 flex flex-col gap-6">
      <div className="bg-muted flex flex-col md:flex-row min-h-svh items-center justify-center p-6 md:p-10 gap-6 md:gap-20">
        <OrderFieldCard />
        <OrderSummaryCard />
      </div>
    </div>
  );
}
