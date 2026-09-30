export const CONSENT_STORAGE_KEY = 'cookieConsent';
export const OPEN_CONSENT_EVENT = 'open-cookie-settings';

export type ConsentChoice = 'all' | 'analytics' | 'declined';

export function getConsentState(choice: string | null) {
  const analytics = choice === 'all' || choice === 'analytics' ? 'granted' : 'denied';
  const ads = choice === 'all' ? 'granted' : 'denied';
  return {
    analytics_storage: analytics,
    ad_storage: ads,
    ad_user_data: ads,
    ad_personalization: ads,
  } as const;
}

// Vykdoma <head> dalyje prieš Google Analytics: nustato numatytąjį sutikimą
// pagal anksčiau išsaugotą lankytojo pasirinkimą (arba "denied", jei jo nėra).
export const consentDefaultsScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
(function () {
  var choice = null;
  try { choice = localStorage.getItem('${CONSENT_STORAGE_KEY}'); } catch (e) {}
  var analytics = choice === 'all' || choice === 'analytics' ? 'granted' : 'denied';
  var ads = choice === 'all' ? 'granted' : 'denied';
  gtag('consent', 'default', {
    analytics_storage: analytics,
    ad_storage: ads,
    ad_user_data: ads,
    ad_personalization: ads
  });
})();
`;
