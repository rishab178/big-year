export default function PrivacyPage() {
  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose prose-slate dark:prose-invert">
        <p className="text-sm text-muted-foreground mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">1. Data Collection</h2>
          <p className="mb-3">
            Big Year accesses your Google user data through the Google Calendar API to provide calendar management functionality. 
            Specifically, we collect and access the following data:
          </p>
          <ul className="list-disc pl-6 mb-3">
            <li className="mb-2">
              <strong>Authentication Information:</strong> We collect OAuth access tokens and refresh tokens that are necessary 
              to authenticate API requests to Google Calendar on your behalf. These tokens are stored securely in our database.
            </li>
            <li className="mb-2">
              <strong>User Profile Information:</strong> When you sign in with Google, we collect your name, email address, 
              and profile image to identify your account and provide personalized services.
            </li>
            <li className="mb-2">
              <strong>Calendar Data:</strong> We access your Google Calendar data, including calendar lists, calendar metadata 
              (such as calendar names and colors), and calendar events. We specifically access all-day events (events with 
              date-only start times) to display them in our yearly calendar view.
            </li>
            <li className="mb-2">
              <strong>User Preferences:</strong> We store your application preferences, such as which calendars to display, 
              which events to hide, and display settings (e.g., showing days of week, weekend alignment).
            </li>
          </ul>
          <p>
            We only access data that you explicitly grant permission for through the Google OAuth consent screen. 
            You can revoke this access at any time.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">2. Data Storage</h2>
          <p className="mb-3">
            We store the following data in our secure PostgreSQL database:
          </p>
          <ul className="list-disc pl-6 mb-3">
            <li className="mb-2">
              <strong>OAuth Tokens:</strong> Access tokens and refresh tokens are stored in encrypted form in our database. 
              These tokens are required to make API requests to Google Calendar on your behalf.
            </li>
            <li className="mb-2">
              <strong>User Account Information:</strong> Your user profile data (name, email, profile image) is stored in our 
              database to maintain your account and session.
            </li>
            <li className="mb-2">
              <strong>User Preferences:</strong> Your application preferences are stored in our database to maintain your 
              personalized settings across sessions.
            </li>
          </ul>
          <p className="mb-3">
            <strong>Important:</strong> We do NOT store your actual calendar events. Calendar events are fetched directly 
            from Google Calendar API in real-time when you use the application and are only displayed in your browser. 
            Event data is not persisted to our database.
          </p>
          <p>
            All data is stored on secure servers with appropriate access controls and encryption at rest. 
            We retain your data only as long as necessary to provide our services or as required by law.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">3. Data Usage</h2>
          <p className="mb-3">
            We use the collected data for the following purposes:
          </p>
          <ul className="list-disc pl-6 mb-3">
            <li className="mb-2">
              <strong>Calendar Display:</strong> Your calendar events are fetched from Google Calendar API and displayed 
              in our yearly calendar interface. This allows you to visualize all your all-day events across the entire year.
            </li>
            <li className="mb-2">
              <strong>Calendar Management:</strong> We use your OAuth tokens to allow you to create, edit, and delete 
              all-day events directly within the application. These changes are made to your Google Calendar through the 
              Google Calendar API.
            </li>
            <li className="mb-2">
              <strong>Authentication:</strong> OAuth tokens are used to authenticate API requests to Google Calendar, 
              ensuring that we can only access calendars you have authorized.
            </li>
            <li className="mb-2">
              <strong>Personalization:</strong> User preferences are used to customize your calendar view according to 
              your settings, such as which calendars to show and how events are displayed.
            </li>
          </ul>
          <p>
            We do not use your data for advertising, marketing, or any purpose other than providing the calendar 
            management functionality described above. We do not sell, rent, or share your data with third parties.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">4. Data Protection</h2>
          <p className="mb-3">
            We implement comprehensive security measures to protect your Google user data:
          </p>
          <ul className="list-disc pl-6 mb-3">
            <li className="mb-2">
              <strong>Encryption:</strong> All data transmitted between your browser and our servers uses HTTPS/TLS encryption. 
              OAuth tokens stored in our database are encrypted at rest using database-level encryption.
            </li>
            <li className="mb-2">
              <strong>Secure Storage:</strong> Our database is hosted on secure cloud infrastructure with restricted access. 
              Only authorized personnel with a legitimate need can access the database, and all access is logged and monitored.
            </li>
            <li className="mb-2">
              <strong>Token Management:</strong> OAuth tokens are automatically refreshed when they expire to maintain secure 
              access. If you revoke access through Google, we immediately stop using your tokens and remove them from our system.
            </li>
            <li className="mb-2">
              <strong>Access Controls:</strong> We implement strict access controls to ensure that your data can only be 
              accessed by authenticated users. Each user can only access their own calendar data.
            </li>
            <li className="mb-2">
              <strong>API Security:</strong> All API requests to Google Calendar are made using secure HTTPS connections 
              with proper authentication headers. We follow Google's security best practices for API usage.
            </li>
            <li className="mb-2">
              <strong>No Data Sharing:</strong> We do not share your Google user data with any third parties. Your calendar 
              data remains private and is only used to provide the calendar management functionality within our application.
            </li>
            <li className="mb-2">
              <strong>Regular Security Updates:</strong> We keep our systems and dependencies up to date with security patches 
              to protect against known vulnerabilities.
            </li>
          </ul>
          <p>
            In the event of a data breach, we will notify affected users and relevant authorities as required by applicable 
            data protection laws.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">5. Data Sharing</h2>
          <p>
            We do not share, sell, rent, or disclose your Google user data to any third parties. Your calendar data, 
            authentication tokens, and personal information remain private and are only used to provide the calendar 
            management services within our application.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">6. Your Rights</h2>
          <p className="mb-3">
            You have the following rights regarding your data:
          </p>
          <ul className="list-disc pl-6 mb-3">
            <li className="mb-2">
              <strong>Access:</strong> You can view all data we store about you through the application interface.
            </li>
            <li className="mb-2">
              <strong>Revocation:</strong> You can revoke access to your Google Calendar at any time through your 
              Google Account settings (at myaccount.google.com/permissions) or by disconnecting your account within 
              the application. When you revoke access, we will immediately stop accessing your calendar data and 
              remove your OAuth tokens from our database.
            </li>
            <li className="mb-2">
              <strong>Deletion:</strong> You can delete your account and all associated data at any time by clicking the 
              settings icon in the sidebar, then selecting "Delete account" from the menu. 
              This will immediately delete your account, OAuth tokens, user preferences, and all other stored data. 
              Alternatively, you can contact us at gabe@valdivia.works to request account deletion.
            </li>
            <li className="mb-2">
              <strong>Export:</strong> You can export your calendar data directly from Google Calendar at any time, 
              as we do not store your actual calendar events.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">7. Google API Services User Data Policy</h2>
          <p className="mb-3">
            Our use of information received from Google APIs adheres to the{" "}
            <a 
              href="https://developers.google.com/terms/api-services-user-data-policy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              Google API Services User Data Policy
            </a>
            , including the Limited Use requirements:
          </p>
          <ul className="list-disc pl-6 mb-3">
            <li className="mb-2">
              We only use Google user data to provide and improve calendar management functionality within our application.
            </li>
            <li className="mb-2">
              We do not transfer Google user data to third parties except as necessary to provide or improve user-facing 
              features, comply with applicable laws, or as part of a merger, acquisition, or sale of assets.
            </li>
            <li className="mb-2">
              We do not use Google user data for serving advertisements.
            </li>
            <li className="mb-2">
              We do not allow humans to read Google user data unless we have your affirmative agreement for specific messages, 
              doing so is necessary for security purposes such as investigating abuse, to comply with applicable law, or our 
              use is limited to internal operations and the data (including derivations) have been aggregated and anonymized.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">8. Changes to This Privacy Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any material changes by updating 
            the "Last updated" date at the top of this page. Your continued use of the application after such changes 
            constitutes your acceptance of the updated privacy policy.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">9. Contact</h2>
          <p>
            If you have questions, concerns, or requests regarding this privacy policy or how we handle your Google user data, 
            please contact us at: <a href="mailto:gabe@valdivia.works" className="text-blue-600 dark:text-blue-400 underline">gabe@valdivia.works</a>
          </p>
        </section>
      </div>
    </div>
  );
}






