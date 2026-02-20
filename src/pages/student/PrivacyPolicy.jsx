import React from "react";
import Footer from "../../component/student/Footer";

const PrivacyPolicy = () => {
  return (
    <>
    <div className="w-full bg-gradient-to-b from-cyan-100/70 to-white min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-5">
        {/* Header */}
        <h5 className="text-red-500 uppercase tracking-wide mb-2 text-center">
          Privacy Policy
        </h5>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 text-center mb-8">
          Your Privacy Matters
        </h1>
        <p className="text-gray-700 text-center mb-12">
          At OCJTech International, we are committed to protecting your personal information and ensuring your data is safe while using our services.
        </p>

        {/* Sections */}
        <div className="space-y-10">

          {/* Information Collection */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              1. Information We Collect
            </h2>
            <p className="text-gray-700 mb-2">
              We may collect the following information from you:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Personal details (name, email, contact information)</li>
              <li>Account information and credentials</li>
              <li>Usage data for courses and services</li>
              <li>Payment details for enrollment (handled securely)</li>
            </ul>
          </div>

          {/* How We Use */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-2">
              Your information is used to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Provide and improve our services</li>
              <li>Process enrollments and payments securely</li>
              <li>Send updates and relevant notifications</li>
              <li>Ensure account security and prevent fraud</li>
            </ul>
          </div>

          {/* Data Security */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              3. Data Security
            </h2>
            <p className="text-gray-700">
              We implement strict security measures to protect your data. All sensitive information is encrypted and securely stored. We regularly review our security practices to keep your data safe.
            </p>
          </div>

          {/* Sharing Information */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              4. Sharing Your Information
            </h2>
            <p className="text-gray-700">
              OCJTech International does not sell, trade, or rent your personal information to third parties. We may share information only:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
              <li>With trusted service providers to deliver services</li>
              <li>As required by law or to protect our rights</li>
            </ul>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              5. Cookies and Tracking
            </h2>
            <p className="text-gray-700">
              We may use cookies and similar technologies to enhance your experience, analyze usage, and improve our website. You can manage your cookie preferences in your browser settings.
            </p>
          </div>

          {/* User Rights */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              6. Your Rights
            </h2>
            <p className="text-gray-700">
              You have the right to access, update, or delete your personal information. Contact us at <span className="font-medium text-red-500">support@ocjtechinternational.com</span> for any requests regarding your data.
            </p>
          </div>

          {/* Changes */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              7. Changes to This Policy
            </h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the effective date will be updated accordingly.
            </p>
          </div>

          {/* Contact */}
          <div className="text-center mt-12">
            <p className="text-gray-700">
              For questions regarding this Privacy Policy, contact us at: 
              <span className="font-medium text-red-500"> support@ocjtechinternational.com</span>
            </p>
          </div>

        </div>
      </div>
</div>
     <Footer />
     </>
  );
};

export default PrivacyPolicy;
