import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <header>
        <h1>Your App</h1>
        <UserButton afterSignOutUrl="/" />
      </header>
      <div>Your page's content can go here.</div>
      <stripe-pricing-table pricing-table-id="prctbl_1OUW2gK55oNVLbDfwccGQItP"
      publishable-key="pk_live_51OP0wWK55oNVLbDfevbf6os6dGf7Bc6iv5Yze81n6h0Kxg6qIZ6rJmpa7Beii1Q2xUuulpRsjVgDidqMr5Tzpxv000hHeyU9fX">
      </stripe-pricing-table>
      <script async src="https://js.stripe.com/v3/pricing-table.js"></script>

    </>
  );
}

