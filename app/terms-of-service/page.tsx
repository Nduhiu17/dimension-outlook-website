import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Dimension Outlook',
  description: 'Our terms of service outlining the rules, conditions, and policies governing the use of our website and services.',
  robots: 'index, follow',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-2 text-4xl font-bold text-slate-900">Terms of Service</h1>
          <p className="text-sm text-slate-600">
            Last Updated: February 6, 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2>1. Agreement to Terms</h2>
            <p>
              These Terms of Service ("Terms") constitute a legally binding agreement between Dimension Outlook ("Company," "we," "us," "our") and you ("User," "customer," "you"). By accessing and using this website and our services, you agree to be bound by these Terms. If you do not agree to comply with all the terms and conditions herein, you may not access or use our services.
            </p>
            <p>
              These Terms are governed by the laws of the Republic of Kenya and are subject to the Consumer Protection Act, 2019 and the Kenya Information and Communications Act, 1998.
            </p>
          </section>

          <section>
            <h2>2. Use License</h2>
            <p>We grant you a limited, non-exclusive, revocable license to use this website for lawful purposes only. You agree not to:</p>
            <ul>
              <li>Use the website in any way that violates any applicable law or regulation</li>
              <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website</li>
              <li>Attempt to gain unauthorized access to any portion or feature of the website</li>
              <li>Upload or transmit viruses or any other malicious code</li>
              <li>Interfere with or disrupt the integrity or performance of the website</li>
              <li>Collect or track personal information of others without consent</li>
              <li>Spam, phish, or engage in other deceptive practices</li>
              <li>Use the website for any illegal or unauthorized purpose</li>
              <li>Circumvent, disable, or otherwise interfere with security-related features</li>
            </ul>
          </section>

          <section>
            <h2>3. Disclaimer of Warranties</h2>
            <p>
              The website and all content, materials, and services are provided on an "AS IS" and "AS AVAILABLE" basis without any representations or warranties, express or implied, including but not limited to:
            </p>
            <ul>
              <li>Merchantability or fitness for a particular purpose</li>
              <li>Non-infringement of third-party rights</li>
              <li>Availability, accuracy, completeness, or reliability of content</li>
              <li>Freedom from viruses or other harmful components</li>
            </ul>
            <p>We do not warrant that:</p>
            <ul>
              <li>The website will be uninterrupted or error-free</li>
              <li>Defects will be corrected</li>
              <li>The website is free from viruses or harmful code</li>
              <li>The results obtained from using the website will meet your expectations</li>
            </ul>
          </section>

          <section>
            <h2>4. Limitation of Liability</h2>
            <p>To the fullest extent permitted by Kenyan law, we shall not be liable for:</p>
            <ul>
              <li>Any indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of profits, data, revenue, or business opportunity</li>
              <li>Damage to your computer, software, or other property</li>
              <li>Any damages arising from unauthorized access to or alteration of your transmissions or data</li>
            </ul>
            <p>
              This limitation applies regardless of whether liability arises from breach of warranty, breach of contract, negligence, tort, or any other legal theory.
            </p>
            <p>
              Our total liability for any claim shall not exceed the amount paid by you (if any) for services in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2>5. Service Description and Pricing</h2>
            <p>We provide printing and digital services including:</p>
            <ul>
              <li>Apparel printing</li>
              <li>Digital printing</li>
              <li>Large-format printing</li>
              <li>Laser/fiber cutting</li>
            </ul>

            <h3>5.1 Pricing</h3>
            <p>
              All prices are quoted in Kenyan Shillings (KES) unless otherwise stated. Prices are subject to change without notice. We reserve the right to revise pricing for ongoing services.
            </p>

            <h3>5.2 Payment Terms</h3>
            <ul>
              <li>Payment terms will be specified in your service quote</li>
              <li>We accept payment via bank transfer, mobile money, and other agreed methods</li>
              <li>Payment must be received before service commencement unless otherwise agreed</li>
              <li>Late payment may result in service suspension</li>
            </ul>
          </section>

          <section>
            <h2>6. Order and Service Delivery</h2>

            <h3>6.1 Order Acceptance</h3>
            <p>We reserve the right to accept or reject any order at our sole discretion. We will confirm order acceptance via email within 24 hours.</p>

            <h3>6.2 Delivery Timeline</h3>
            <ul>
              <li>Delivery timelines are estimates and not guaranteed dates</li>
              <li>We will make reasonable efforts to meet specified delivery dates</li>
              <li>Delays due to unforeseen circumstances do not constitute breach of contract</li>
              <li>Custom orders may require longer turnaround times</li>
            </ul>

            <h3>6.3 Quality Standards</h3>
            <p>
              We maintain professional quality standards for all services. Minor variations in color, size, or finish that do not materially affect the product's functionality or appearance are acceptable.
            </p>
          </section>

          <section>
            <h2>7. Intellectual Property Rights</h2>

            <h3>7.1 Website Content</h3>
            <p>
              All content on our website, including text, graphics, logos, images, and software, is the property of Dimension Outlook or its content suppliers and is protected by international copyright laws.
            </p>

            <h3>7.2 Your Content</h3>
            <p>When you submit content (designs, files, artwork) to us:</p>
            <ul>
              <li>You retain ownership of your intellectual property</li>
              <li>You grant us a license to use your content for service delivery purposes</li>
              <li>You represent that you have the right to submit such content</li>
              <li>You warrant that content does not infringe third-party intellectual property rights</li>
            </ul>

            <h3>7.3 Design Work</h3>
            <p>For custom design work:</p>
            <ul>
              <li>Copyright in design work belongs to Dimension Outlook unless otherwise agreed in writing</li>
              <li>You receive a license to use the design for the agreed purposes</li>
              <li>We may use design elements for portfolio and promotional purposes unless agreed otherwise</li>
            </ul>
          </section>

          <section>
            <h2>8. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul>
              <li>Provide accurate, complete, and truthful information</li>
              <li>Maintain the confidentiality of account information</li>
              <li>Use the service only for lawful purposes</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not violate the rights of others</li>
              <li>Not engage in harassment, abuse, or threatening behavior</li>
              <li>Not reproduce, distribute, or transmit content without permission</li>
            </ul>
          </section>

          <section>
            <h2>9. Limitation on Content</h2>

            <h3>9.1 Prohibited Content</h3>
            <p>We will not produce materials that:</p>
            <ul>
              <li>Are illegal or promote illegal activities</li>
              <li>Infringe intellectual property rights</li>
              <li>Contain hate speech, discrimination, or incite violence</li>
              <li>Are pornographic or sexually explicit</li>
              <li>Defame or libel any person or organization</li>
              <li>Violate privacy or data protection laws</li>
              <li>Promote fraud, deception, or unlawful activities</li>
            </ul>

            <h3>9.2 Refusal of Service</h3>
            <p>
              We reserve the right to refuse service for any order that violates these Terms or applicable law, with full refund of payment.
            </p>
          </section>

          <section>
            <h2>10. Termination</h2>

            <h3>10.1 Termination by User</h3>
            <p>You may terminate your account or service at any time by contacting us in writing.</p>

            <h3>10.2 Termination by Company</h3>
            <p>We may terminate your account or service:</p>
            <ul>
              <li>For violation of these Terms</li>
              <li>For non-payment</li>
              <li>For illegal activity</li>
              <li>For any reason with 30 days' notice (for ongoing services)</li>
            </ul>
            <p>Upon termination, your right to use the service ceases immediately.</p>
          </section>

          <section>
            <h2>11. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Dimension Outlook, its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from:
            </p>
            <ul>
              <li>Your use of the website or services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of applicable law</li>
              <li>Your infringement of third-party rights</li>
              <li>Content you submit or provide</li>
            </ul>
          </section>

          <section>
            <h2>12. Disputes and Governing Law</h2>

            <h3>12.1 Governing Law</h3>
            <p>
              These Terms are governed by the laws of the Republic of Kenya, without regard to conflict of law principles.
            </p>

            <h3>12.2 Dispute Resolution</h3>
            <ul>
              <li>For any dispute, you agree to first contact us to attempt resolution</li>
              <li>If unresolved, disputes shall be resolved under Kenyan law</li>
              <li>You agree to submit to the exclusive jurisdiction of Kenyan courts</li>
            </ul>
          </section>

          <section>
            <h2>13. Modification of Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the website constitutes acceptance of modified Terms. We will notify you of material changes via email or prominent notice on the website.
            </p>
          </section>

          <section>
            <h2>14. Links to Third-Party Websites</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for:
            </p>
            <ul>
              <li>The content of third-party websites</li>
              <li>The availability or functionality of third-party services</li>
              <li>Your interactions with third parties</li>
              <li>Any transactions or disputes with third parties</li>
            </ul>
            <p>Your use of third-party websites is governed by their terms and privacy policies.</p>
          </section>

          <section>
            <h2>15. Cookies and Tracking</h2>
            <p>
              We use cookies to enhance your experience. By using our website, you consent to our use of cookies as described in our Privacy Policy. You can control cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2>16. Accessibility</h2>
            <p>
              We are committed to making our website accessible to all users. If you experience accessibility issues, please contact us and we will make reasonable efforts to assist you.
            </p>
          </section>

          <section>
            <h2>17. Severability</h2>
            <p>
              If any provision of these Terms is found to be invalid or unenforceable, that provision shall be severed, and the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          <section>
            <h2>18. Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and Dimension Outlook regarding your use of the website and services. These Terms supersede all prior agreements, understandings, and negotiations.
            </p>
          </section>

          <section>
            <h2>19. Contact Information</h2>
            <p>For questions about these Terms of Service, contact us:</p>
            <div className="rounded-lg bg-slate-100 p-6">
              <p className="font-semibold text-slate-900">Dimension Outlook</p>
              <ul className="mt-3 space-y-2 text-slate-700">
                <li>
                  <strong>Email:</strong> <a href="mailto:support@dimensionoutlook.com" className="text-blue-600 hover:underline">support@dimensionoutlook.com</a>
                </li>
                <li>
                  <strong>Phone:</strong> <a href="tel:+1234567890" className="text-blue-600 hover:underline">[Your Phone Number]</a>
                </li>
                <li>
                  <strong>Address:</strong> [Your Business Address]
                </li>
                <li>
                  <strong>Business Registration:</strong> [Your Business Registration Number]
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2>20. Notice to Kenyan Residents</h2>
            <p>
              If you are a consumer in Kenya, you have rights under the Consumer Protection Act, 2019. These rights cannot be waived by this agreement. For consumer complaints, you may contact:
            </p>
            <div className="rounded-lg bg-slate-100 p-4 my-4">
              <p className="font-semibold text-slate-900">Consumer Protection Authority</p>
              <ul className="mt-2 space-y-1 text-slate-700 text-sm">
                <li><strong>Website:</strong> <a href="https://www.cpa.or.ke" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.cpa.or.ke</a></li>
                <li><strong>Email:</strong> <a href="mailto:info@cpa.or.ke" className="text-blue-600 hover:underline">info@cpa.or.ke</a></li>
              </ul>
            </div>
          </section>

          <div className="mt-12 rounded-lg bg-slate-100 p-6">
            <p className="text-center text-slate-700">
              <strong>Thank you for choosing Dimension Outlook.</strong>
            </p>
            <p className="text-center text-slate-600 text-sm mt-2">
              Last revised: February 6, 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
