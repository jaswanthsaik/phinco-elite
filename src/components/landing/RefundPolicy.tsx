import "./ReturnRefundPolicy.css";

const ReturnRefundPolicy = () => {
  return (
    <div className="refund-policy-page">
      <header className="refund-header">
        <h1>Return & Refund Policy</h1>
        <p>
          We value your trust — here’s how returns and refunds work at Phinco
          Elite.
        </p>
      </header>

      <main className="refund-container">
        <section className="refund-card">
          <h2>Overview</h2>

          <p>
            Our policy lasts <strong>14 days</strong>. If 14 days have passed
            since your purchase, we’re unable to offer a refund or exchange.
          </p>

          <p>You are eligible for a refund only if:</p>

          <ul>
            <li>
              The full amount has been paid for the service and refund or
              cancellation is not applicable before the batch starts or in
              between the batch and you can only defer the batch.
            </li>

            <li>
              You’ve completed the application via an approved third-party
              finance provider.
            </li>
          </ul>

          <p>
            <strong>Note:</strong> Receipt or proof of purchase is mandatory to
            process any refund or return.
          </p>
        </section>

        <section className="refund-card">
          <h2>Refunds</h2>

          <p>
            Once your refund request is approved, the process will be initiated
            and funds will be returned to your original method of payment within{" "}
            <strong>30 business days</strong>.
          </p>
        </section>

        <section className="refund-card">
          <h2>Late or Missing Refunds</h2>

          <p>
            If you haven’t received your refund after the estimated period:
          </p>

          <ul>
            <li>Double-check your bank account.</li>

            <li>
              Contact your credit card provider for any posting delays.
            </li>

            <li>
              Reach out to your bank – processing times may vary.
            </li>
          </ul>

          <p>
            If you’ve done all the above and still have not received your
            refund, please contact us at{" "}
            <a href="mailto:info@phincoelite.com">
              info@phincoelite.com
            </a>
            .
          </p>
        </section>
      </main>

      <footer className="refund-footer">
        &copy; 2026 Phinco Elite Pvt. Ltd. All rights reserved.
      </footer>
    </div>
  );
};

export default ReturnRefundPolicy;