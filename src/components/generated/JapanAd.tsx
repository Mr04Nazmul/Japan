import React,{useEffect,useRef} from 'react';
// Keep the placement visible while AdSense review is pending. No ad request is
// made until serving is explicitly enabled after approval.
const ADS_ENABLED = false;
export function JapanAd(){
 const element=useRef<HTMLElement>(null);
 useEffect(()=>{
  if(!ADS_ENABLED||!element.current)return;
  let sent=false;
  const request=()=>{if(sent||!element.current||!element.current.getBoundingClientRect().width)return;sent=true;try{const w=window as typeof window&{adsbygoogle?:unknown[]};(w.adsbygoogle=w.adsbygoogle||[]).push({})}catch{}};
  const observer=new ResizeObserver(request);observer.observe(element.current);request();return()=>observer.disconnect();
 },[]);
 return <section className="japan-ad" aria-label="Advertisement placement" data-ad-slot="9686075799"><span>Advertisement</span>{ADS_ENABLED?<ins ref={element} className="adsbygoogle" style={{display:'block'}} data-ad-client="ca-pub-3728341118830943" data-ad-slot="9686075799" data-ad-format="auto" data-full-width-responsive="true"/>:<div className="ad-placeholder" aria-hidden="true">Ad space</div>}</section>
}
