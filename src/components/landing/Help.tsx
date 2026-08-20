import "./HelpSupport.css";

const HelpSupport = () => {
  return (
    <div className="help-support-page">
      <header className="help-header">
        <h1>Help & Support</h1>
        <p>Need assistance? We’re here to guide you.</p>
      </header>

      <main className="help-container">
        <section className="help-card">
          <h2>Account & Login</h2>

          <ul>
            <li>
              Forgot your password? Use the "Reset Password" link on the login
              page.
            </li>

            <li>
              Need to update your contact details? Visit your profile settings.
            </li>

            <li>
              Still can’t access your dashboard? Contact{" "}
              <a href="mailto:info@phincoelite.com">
                info@phincoelite.com
              </a>
              .
            </li>
          </ul>
        </section>

        <section className="help-card">
          <h2>Enrollment & Payments</h2>

          <ul>
            <li>
              Need help enrolling? Fill out our application form or call our
              support.
            </li>

            <li>
              Payment not reflecting? It may take up to 24 hours — if delayed,
              email us.
            </li>

            <li>
              Want to switch courses? We’ll review it case-by-case depending on
              the batch stage.
            </li>
          </ul>
        </section>

        <section className="help-card">
          <h2>Course Access & Support</h2>

          <ul>
            <li>
              Classes not showing? Ensure you are logged in and assigned to the
              right batch.
            </li>

            <li>
              Missed a session? Most sessions have replays — check your course
              dashboard.
            </li>

            <li>
              Want mentor support? Ping us through your course chat or email.
            </li>
          </ul>
        </section>

        <section className="help-card">
          <h2>Certificates & Placement</h2>

          <ul>
            <li>
              Certificates are released after course completion & project
              review.
            </li>

            <li>
              Placement support starts after the mandatory mock assessments.
            </li>

            <li>
              To access placement services, ensure you’ve completed at least 80%
              attendance.
            </li>
          </ul>
        </section>

        <div className="help-cta">
          <p>Still need help? We’re one email away.</p>

          <a href="mailto:info@phincoelite.com">Contact Support</a>
        </div>
      </main>

      <footer className="help-footer">
        &copy; 2026 Phinco Elite Pvt. Ltd. All rights reserved.
      </footer>
    </div>
  );
};

export default HelpSupport;