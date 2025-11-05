import { Button } from "@/components/ui/button"
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


export function CheckoutField() {
  return (
    <div className="w-full max-w-md">
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
    </div>
  )
}
