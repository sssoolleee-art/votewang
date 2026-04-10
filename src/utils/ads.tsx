import { useEffect, useRef } from 'react';
import { TossAds } from '@apps-in-toss/web-framework';

export const AD_ID = {
  banner: 'ait-ad-test-banner-id',
};

export function BannerAd() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current || !TossAds.attachBanner.isSupported()) return;
    const result = TossAds.attachBanner(AD_ID.banner, ref.current);
    return () => result.destroy();
  }, []);
  return <div ref={ref} style={{ width: '100%', minHeight: 50 }} />;
}
