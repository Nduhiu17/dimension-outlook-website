import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Dimension Outlook',
  description: 'Our privacy policy outlining how we collect, use, and protect your personal information.',
  robots: 'index, follow',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-2 text-4xl font-bold text-slate-900">Privacy Policy</h1>
          <p className="text-sm text-slate-600">
            Last Updated: February 6, 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2>Introduction</h2>
            <p>
              Dimension Outlook ("we," "us," "our," or "Company") is committed to protecting your privacy in accordance with the Constitution of Kenya and the Data Protection Act, 2019. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our services. This policy is governed by the laws of the Republic of Kenya.
            </p>
          </section>

          <section>
            <h2>1. Information We Collect</h2>
            
            <h3>1.1 Personal Information You Provide</h3>
            <p>We collect information you provide directly when:</p>
            <ul>
              <li><strong>Contact Forms:</strong> Submitting inquiries through our contact forms (name, email, phone number, company name, message content)</li>
              <li><strong>Email Communications:</strong> Communicating with us directly via email</li>
              <li><strong>Service Requests:</strong> Requesting quotes or information about our printing and cutting services</li>
              <li><strong>Account Creation:</strong> Creating an account on our platform (if applicable)</li>
              <li><strong>Payment Information:</strong> Processing payments through third-party payment processors</li>
            </ul>

            <h3>1.2 Automatically Collected Information</h3>
            <p>When you visit our website, we automatically collect:</p>
            <ul>
              <li><strong>Device Information:</strong> Browser type, operating system, device type, device identifiers</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent on pages, links clicked, referral sources</li>
              <li><strong>Location Information:</strong> General geographic location (city/country level)</li>
              <li><strong>Cookies and Tracking Technologies:</strong> Persistent and session-based cookies, web beacons, pixels</li>
            </ul>

            <h3>1.3 Information from Third Parties</h3>
            <p>We may receive information about you from:</p>
            <ul>
              <li>Third-party analytics services</li>
              <li>Payment processors</li>
              <li>Social media platforms (if you interact with us through social channels)</li>
            </ul>
          </section>

          <section>
            <h2>2. How We Use Your Information</h2>
            <p>We use collected information for:</p>
            <ul>
              <li><strong>Service Delivery:</strong> Providing, maintaining, and improving our printing and digital services</li>
              <li><strong>Communication:</strong> Responding to inquiries, sending service updates, and customer support</li>
              <li><strong>Marketing:</strong> Sending promotional materials and newsletters (with your consent)</li>
              <li><strong>Analytics:</strong> Understanding user behavior and website performance</li>
              <li><strong>Compliance:</strong> Meeting legal obligations and enforcing our terms</li>
              <li><strong>Security:</strong> Detecting, preventing, and addressing fraud and security issues</li>
              <li><strong>Business Operations:</strong> Improving our services and developing new features</li>
            </ul>
          </section>

          <section>
            <h2>3. Data Sharing and Disclosure</h2>
            <p>
              We do not sell your personal information to third parties. We may share information with:
            </p>
            <ul>
              <li><strong>Service Providers:</strong> Payment processors, hosting providers, analytics services that assist in our operations</li>
              <li><strong>Legal Requirements:</strong> When required by law, court orders, or government requests</li>
              <li><strong>Business Transfers:</strong> In case of merger, acquisition, or bankruptcy</li>
              <li><strong>Your Consent:</strong> When you authorize us to share your information</li>
            </ul>
          </section>

          <section>
            <h2>4. Data Retention</h2>
            <p>We retain your personal information for as long as:</p>
            <ul>
              <li>Necessary to provide our services</li>
              <li>Required by law or regulation</li>
              <li>Your account remains active</li>
              <li>You request deletion (subject to legal obligations)</li>
            </ul>
            <p>You may request deletion of your data at any time by contacting us.</p>
          </section>

          <section>
            <h2>5. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your information:</p>
            <ul>
              <li>SSL/TLS encryption for data in transit</li>
              <li>Secure authentication mechanisms</li>
              <li>Regular security audits and assessments</li>
              <li>Limited employee access to personal data</li>
              <li>Employee training on data protection</li>
            </ul>
            <p>
              However, no method of transmission over the Internet is completely secure. We cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2>6. Your Privacy Rights</h2>
            <p>
              Pursuant to the Data Protection Act, 2019 and the Constitution of Kenya, you have the following rights regarding your personal information:
            </p>
            <ul>
              <li><strong>Right to Access:</strong> Request access to your personal information we hold about you</li>
              <li><strong>Right to Correction:</strong> Request correction of inaccurate, incomplete, or misleading data</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your data (subject to legal and contractual obligations)</li>
              <li><strong>Right to Object:</strong> Object to processing of your information where we rely on legitimate interests</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for processing at any time (without affecting past processing)</li>
              <li><strong>Right to Lodge a Complaint:</strong> File a complaint with the Office of the Data Protection Commissioner (ODPC)</li>
            </ul>
            <p>To exercise these rights, contact us using the information provided in Section 8.</p>
          </section>

          <section>
            <h2>7. Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar tracking technologies to:</p>
            <ul>
              <li>Maintain your session</li>
              <li>Remember your preferences</li>
              <li>Analyze website traffic</li>
              <li>Improve user experience</li>
              <li>Deliver personalized content</li>
            </ul>

            <h3>7.1 Types of Cookies</h3>
            <ul>
              <li><strong>Essential:</strong> Necessary for website functionality</li>
              <li><strong>Analytics:</strong> Google Analytics and similar services</li>
              <li><strong>Marketing:</strong> Tracking for advertising purposes</li>
              <li><strong>Third-Party:</strong> Cookies from external services</li>
            </ul>
            <p>
              You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.
            </p>
          </section>

          <section>
            <h2>8. Third-Party Services</h2>
            <p>
              Our website may contain links to and integrate with third-party services like Google Analytics, payment processors, and social media platforms. We are not responsible for the privacy practices of third parties. Please review their privacy policies independently.
            </p>
          </section>

          <section>
            <h2>9. Children's Privacy</h2>
            <p>
              Our services are not directed to children under 18 years of age. We do not knowingly collect personal information from children under 18. If we become aware that we have collected information from a child under 18, we will delete such information promptly.
            </p>
            <p>
              Parents or guardians who believe we have collected information from a minor should contact us immediately using the contact information in Section 8.
            </p>
          </section>

          <section>
            <h2>10. Data Storage and Transfers</h2>
            <p>
              Your personal information may be stored on servers located in Kenya or internationally. If data is transferred outside Kenya, we ensure appropriate safeguards are in place in accordance with the Data Protection Act, 2019. By using our services, you consent to the transfer, storage, and processing of your information as described in this policy.
            </p>
            <p>
              We comply with the principle of data localization where applicable under Kenyan law.
            </p>
          </section>

          <section>
            <h2>11. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy periodically. We will notify you of material changes by:</p>
            <ul>
              <li>Updating the "Last Updated" date</li>
              <li>Sending a notification email (if required)</li>
              <li>Posting a prominent notice on our website</li>
            </ul>
            <p>Your continued use of our services after changes constitutes acceptance of the updated policy.</p>
          </section>

          <section>
            <h2>12. Contact Us</h2>
            <p>
              If you have questions, concerns, or requests regarding this Privacy Policy, please contact us:
            </p>
            <div className="rounded-lg bg-slate-100 p-6">
              <p className="font-semibold text-slate-900">Dimension Outlook</p>
              <ul className="mt-3 space-y-2 text-slate-700">
                <li>
                  <strong>Email:</strong> <a href="mailto:privacy@dimensionoutlook.com" className="text-blue-600 hover:underline">privacy@dimensionoutlook.com</a>
                </li>
                <li>
                  <strong>Phone:</strong> <a href="tel:+1234567890" className="text-blue-600 hover:underline">[Your Phone Number]</a>
                </li>
                <li>
                  <strong>Address:</strong> [Your Business Address]
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2>13. Additional Notices</h2>
            
            <h3>13.1 Compliance with Kenyan Law</h3>
            <p>
              This Privacy Policy is subject to and governed by the laws of the Republic of Kenya, including:
            </p>
            <ul>
              <li>The Constitution of Kenya, 2010 (particularly Article 31 on right to privacy)</li>
              <li>The Data Protection Act, 2019</li>
              <li>The Kenya Information and Communications Act, 1998</li>
              <li>The Penal Code (Cap. 63) provisions on privacy</li>
            </ul>

            <h3>13.2 Communications and Consent</h3>
            <p>
              We comply with Kenyan telecommunications regulations regarding electronic communications. We obtain explicit consent before sending marketing messages via email, SMS, or other channels, and provide easy opt-out mechanisms.
            </p>

            <h3>13.3 Data Protection Commissioner</h3>
            <p>
              For inquiries or complaints regarding data protection, you may contact:
            </p>
            <div className="rounded-lg bg-slate-100 p-4 my-4">
              <p className="font-semibold text-slate-900">Office of the Data Protection Commissioner (ODPC)</p>
              <ul className="mt-2 space-y-1 text-slate-700 text-sm">
                <li><strong>Website:</strong> <a href="https://www.odpc.or.ke" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.odpc.or.ke</a></li>
                <li><strong>Email:</strong> <a href="mailto:complaints@odpc.or.ke" className="text-blue-600 hover:underline">complaints@odpc.or.ke</a></li>
                <li><strong>Address:</strong> Waiyaki Way, Nairobi, Kenya</li>
              </ul>
            </div>

            <h3>13.4 Consumer Protection</h3>
            <p>
              We comply with the Consumer Protection Act regarding fair practices, transparency, and consumer rights. If you believe we have violated consumer protection laws, you may lodge a complaint with the Consumer Protection Authority.
            </p>
          </section>

          <section>
            <h2>14. Entire Agreement</h2>
            <p>
              This Privacy Policy, together with our Terms of Service, constitutes the entire agreement regarding privacy and the use of our website. It is governed by and construed in accordance with the laws of Kenya, and you irrevocably submit to the exclusive jurisdiction of Kenyan courts.
            </p>
          </section>

          <div className="mt-12 rounded-lg bg-slate-100 p-6">
            <p className="text-center text-slate-700">
              <strong>Thank you for trusting Dimension Outlook with your information.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
