export default function Redirect() {}

export async function getServerSideProps({ res }) {
  const target =
    'https://www.integrativenutrition.com/health-coaching-101?utm_channel=Referral&utm_medium=SocialLadder&utm_source=ReferAFriend&campaign_idnum__c=701TQ000004HrdXYAS&ambassadorID=ea1f50bb-2942-451a-8f35-25a4f14fbecd&sldiscountcode=YONGLINWUXIIN';

  res.setHeader('Referrer-Policy', 'no-referrer');
  res.setHeader('Cache-Control', 'no-store');
  res.writeHead(302, { Location: target });
  res.end();
  return { props: {} };
}
