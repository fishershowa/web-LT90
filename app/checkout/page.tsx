import CheckoutHeader from "./components/CheckoutHeader";
import CheckoutForm from "./components/CheckoutForm";
import ShippingSection from "./components/ShippingSection";
import PaymentSection from "./components/PaymentSection";
import OrderSummary from "./components/OrderSummary";

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <div className="max-w-[1600px] mx-auto px-20 py-20">

        <div className="grid grid-cols-[1.45fr_0.95fr] gap-28">

          {/* IZQUIERDA */}

          <section className="space-y-20">

            <CheckoutHeader />

            <CheckoutForm />

            <ShippingSection />

            <PaymentSection />

          </section>

          {/* DERECHA */}

          <aside>

            <OrderSummary />

          </aside>

        </div>

      </div>

    </main>
  );
}