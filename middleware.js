// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  // 目标最终 IIN 链接（含参数）
  const target = 'https://www.integrativenutrition.com/health-coaching-101?utm_channel=Referral&utm_medium=SocialLadder&utm_source=ReferAFriend&campaign_idnum__c=701TQ000004HrdXYAS&ambassadorID=ea1f50bb-2942-451a-8f35-25a4f14fbecd&sldiscountcode=YONGLINWUXIIN';

  const res = NextResponse.redirect(target, 302);
  res.headers.set('Referrer-Policy', 'no-referrer');
  res.headers.set('Cache-Control', 'no-store');
  return res;
}

// 让 middleware 只在 /go/iin 路径生效
export const config = {
  matcher: ['/go/iin']
};
