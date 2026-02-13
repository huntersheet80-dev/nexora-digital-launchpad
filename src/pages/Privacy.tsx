import LegalLayout from "@/components/LegalLayout";

const Privacy = () => (
  <LegalLayout title="Privacy Policy" updated="February 1, 2026">
    <p>This Privacy Policy describes how Nexora Digital ("we," "us," or "our") collects, uses, and protects your personal information when you use our website and services.</p>

    <h2>1. Information We Collect</h2>
    <h3>Personal Information</h3>
    <p>We collect information you provide directly, including your name, email address, billing information, and any other data you submit through our forms or account registration process.</p>
    <h3>Usage Data</h3>
    <p>We automatically collect information about how you interact with our services, including IP address, browser type, pages visited, time spent on pages, and referring URLs.</p>
    <h3>Cookies and Tracking</h3>
    <p>We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and deliver personalized content. You can manage cookie preferences through your browser settings.</p>

    <h2>2. How We Use Your Information</h2>
    <ul>
      <li>To provide, maintain, and improve our services</li>
      <li>To process transactions and send related information</li>
      <li>To send promotional communications (with your consent)</li>
      <li>To detect, prevent, and address technical issues and fraud</li>
      <li>To comply with legal obligations</li>
    </ul>

    <h2>3. Payment Processing Security</h2>
    <p>All payment transactions are processed through Stripe, a PCI DSS Level 1 certified payment processor. We do not store credit card numbers on our servers. Payment data is encrypted using industry-standard SSL/TLS protocols.</p>

    <h2>4. Data Sharing and Disclosure</h2>
    <p>We do not sell your personal information. We may share data with trusted third-party service providers who assist in operating our services, conducting business, or serving you, so long as they agree to keep this information confidential.</p>

    <h2>5. Data Retention</h2>
    <p>We retain personal information for as long as your account is active or as needed to provide services. You may request deletion of your data at any time by contacting support@nexoradigital.com.</p>

    <h2>6. Your Rights</h2>
    <p>Depending on your location, you may have the right to access, correct, delete, or port your personal data. You may also opt out of marketing communications at any time.</p>

    <h2>7. Children's Privacy</h2>
    <p>Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.</p>

    <h2>8. Changes to This Policy</h2>
    <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page and updating the "Last updated" date.</p>

    <h2>9. Contact Us</h2>
    <p>If you have any questions about this Privacy Policy, please contact us at support@nexoradigital.com.</p>
  </LegalLayout>
);

export default Privacy;
