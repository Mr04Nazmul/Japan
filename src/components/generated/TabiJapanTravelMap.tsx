import {JapanAd} from './JapanAd';
import { createPosterSVG } from './PosterExport';
import { japanGeometry } from './JapanGeometry';
import React, { useState, useEffect, useRef } from 'react';
import './Tabi.css';
const raw = [['Hokkaido', '北海道', 11, 0, 'Hokkaido'], ['Aomori', '青森', 10, 2, 'Tohoku'], ['Iwate', '岩手', 11, 3, 'Tohoku'], ['Miyagi', '宮城', 11, 4, 'Tohoku'], ['Akita', '秋田', 10, 3, 'Tohoku'], ['Yamagata', '山形', 10, 4, 'Tohoku'], ['Fukushima', '福島', 11, 5, 'Tohoku'], ['Ibaraki', '茨城', 11, 6, 'Kanto'], ['Tochigi', '栃木', 10, 6, 'Kanto'], ['Gunma', '群馬', 9, 6, 'Kanto'], ['Saitama', '埼玉', 10, 7, 'Kanto'], ['Chiba', '千葉', 11, 8, 'Kanto'], ['Tokyo', '東京', 10, 8, 'Kanto'], ['Kanagawa', '神奈川', 9, 8, 'Kanto'], ['Niigata', '新潟', 9, 5, 'Chubu'], ['Toyama', '富山', 8, 5, 'Chubu'], ['Ishikawa', '石川', 7, 4, 'Chubu'], ['Fukui', '福井', 7, 5, 'Chubu'], ['Yamanashi', '山梨', 9, 7, 'Chubu'], ['Nagano', '長野', 8, 6, 'Chubu'], ['Gifu', '岐阜', 7, 6, 'Chubu'], ['Shizuoka', '静岡', 8, 8, 'Chubu'], ['Aichi', '愛知', 7, 7, 'Chubu'], ['Mie', '三重', 6, 8, 'Kansai'], ['Shiga', '滋賀', 6, 6, 'Kansai'], ['Kyoto', '京都', 5, 6, 'Kansai'], ['Osaka', '大阪', 5, 7, 'Kansai'], ['Hyogo', '兵庫', 4, 6, 'Kansai'], ['Nara', '奈良', 6, 7, 'Kansai'], ['Wakayama', '和歌山', 5, 8, 'Kansai'], ['Tottori', '鳥取', 3, 6, 'Chugoku'], ['Shimane', '島根', 2, 6, 'Chugoku'], ['Okayama', '岡山', 3, 7, 'Chugoku'], ['Hiroshima', '広島', 2, 7, 'Chugoku'], ['Yamaguchi', '山口', 1, 7, 'Chugoku'], ['Tokushima', '徳島', 4, 9, 'Shikoku'], ['Kagawa', '香川', 4, 8, 'Shikoku'], ['Ehime', '愛媛', 2, 9, 'Shikoku'], ['Kochi', '高知', 3, 9, 'Shikoku'], ['Fukuoka', '福岡', 0, 8, 'Kyushu'], ['Saga', '佐賀', -1, 8, 'Kyushu'], ['Nagasaki', '長崎', -2, 9, 'Kyushu'], ['Kumamoto', '熊本', 0, 9, 'Kyushu'], ['Oita', '大分', 1, 8, 'Kyushu'], ['Miyazaki', '宮崎', 1, 10, 'Kyushu'], ['Kagoshima', '鹿児島', 0, 10, 'Kyushu'], ['Okinawa', '沖縄', -2, 11, 'Okinawa']];
const prefs = raw.map(([name, jp, x, y, region], i) => ({
  id: i,
  name: String(name),
  jp: String(jp),
  x: Number(x),
  y: Number(y),
  region: String(region)
}));
const mapLabels = [{
  "id": 17,
  "x": 25,
  "y": 158.0,
  "side": "left"
}, {
  "id": 30,
  "x": 25,
  "y": 182.69565217391303,
  "side": "left"
}, {
  "id": 25,
  "x": 25,
  "y": 207.3913043478261,
  "side": "left"
}, {
  "id": 24,
  "x": 25,
  "y": 232.08695652173913,
  "side": "left"
}, {
  "id": 27,
  "x": 25,
  "y": 256.7826086956522,
  "side": "left"
}, {
  "id": 31,
  "x": 25,
  "y": 281.47826086956525,
  "side": "left"
}, {
  "id": 32,
  "x": 25,
  "y": 306.17391304347825,
  "side": "left"
}, {
  "id": 33,
  "x": 25,
  "y": 330.8695652173913,
  "side": "left"
}, {
  "id": 26,
  "x": 25,
  "y": 355.5652173913044,
  "side": "left"
}, {
  "id": 28,
  "x": 25,
  "y": 380.2608695652174,
  "side": "left"
}, {
  "id": 36,
  "x": 25,
  "y": 404.95652173913044,
  "side": "left"
}, {
  "id": 34,
  "x": 25,
  "y": 429.6521739130435,
  "side": "left"
}, {
  "id": 35,
  "x": 25,
  "y": 454.3478260869565,
  "side": "left"
}, {
  "id": 29,
  "x": 25,
  "y": 479.04347826086956,
  "side": "left"
}, {
  "id": 37,
  "x": 25,
  "y": 503.7391304347826,
  "side": "left"
}, {
  "id": 39,
  "x": 25,
  "y": 528.4347826086956,
  "side": "left"
}, {
  "id": 38,
  "x": 25,
  "y": 553.1304347826087,
  "side": "left"
}, {
  "id": 40,
  "x": 25,
  "y": 577.8260869565217,
  "side": "left"
}, {
  "id": 43,
  "x": 25,
  "y": 602.5217391304348,
  "side": "left"
}, {
  "id": 41,
  "x": 25,
  "y": 627.2173913043478,
  "side": "left"
}, {
  "id": 42,
  "x": 25,
  "y": 651.9130434782609,
  "side": "left"
}, {
  "id": 44,
  "x": 25,
  "y": 676.6086956521739,
  "side": "left"
}, {
  "id": 45,
  "x": 25,
  "y": 701.304347826087,
  "side": "left"
}, {
  "id": 46,
  "x": 25,
  "y": 726.0,
  "side": "left"
}, {
  "id": 0,
  "x": 835,
  "y": 158.0,
  "side": "right"
}, {
  "id": 1,
  "x": 835,
  "y": 183.8181818181818,
  "side": "right"
}, {
  "id": 4,
  "x": 835,
  "y": 209.63636363636363,
  "side": "right"
}, {
  "id": 2,
  "x": 835,
  "y": 235.45454545454544,
  "side": "right"
}, {
  "id": 5,
  "x": 835,
  "y": 261.27272727272725,
  "side": "right"
}, {
  "id": 3,
  "x": 835,
  "y": 287.0909090909091,
  "side": "right"
}, {
  "id": 14,
  "x": 835,
  "y": 312.9090909090909,
  "side": "right"
}, {
  "id": 6,
  "x": 835,
  "y": 338.72727272727275,
  "side": "right"
}, {
  "id": 16,
  "x": 835,
  "y": 364.5454545454545,
  "side": "right"
}, {
  "id": 8,
  "x": 835,
  "y": 390.3636363636364,
  "side": "right"
}, {
  "id": 15,
  "x": 835,
  "y": 416.1818181818182,
  "side": "right"
}, {
  "id": 9,
  "x": 835,
  "y": 442.0,
  "side": "right"
}, {
  "id": 7,
  "x": 835,
  "y": 467.8181818181818,
  "side": "right"
}, {
  "id": 19,
  "x": 835,
  "y": 493.6363636363636,
  "side": "right"
}, {
  "id": 10,
  "x": 835,
  "y": 519.4545454545455,
  "side": "right"
}, {
  "id": 20,
  "x": 835,
  "y": 545.2727272727273,
  "side": "right"
}, {
  "id": 12,
  "x": 835,
  "y": 571.090909090909,
  "side": "right"
}, {
  "id": 18,
  "x": 835,
  "y": 596.9090909090909,
  "side": "right"
}, {
  "id": 11,
  "x": 835,
  "y": 622.7272727272727,
  "side": "right"
}, {
  "id": 13,
  "x": 835,
  "y": 648.5454545454545,
  "side": "right"
}, {
  "id": 22,
  "x": 835,
  "y": 674.3636363636364,
  "side": "right"
}, {
  "id": 21,
  "x": 835,
  "y": 700.1818181818181,
  "side": "right"
}, {
  "id": 23,
  "x": 835,
  "y": 726.0,
  "side": "right"
}];
const regions = ['All regions', 'Hokkaido', 'Tohoku', 'Kanto', 'Chubu', 'Kansai', 'Chugoku', 'Shikoku', 'Kyushu', 'Okinawa'];
export const TabiJapanTravelMap = () => {
  const [visited, setVisited] = useState<number[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('tabi-visited') || '[]');
    } catch {
      return [];
    }
  });
  const [selected, setSelected] = useState(27),
    [query, setQuery] = useState(''),
    [region, setRegion] = useState('All regions'),
    [tab, setTab] = useState('map'),
    [name, setName] = useState('My Japan'),
    [owner, setOwner] = useState(() => {
      try {
        return localStorage.getItem('tabi-owner') || '';
      } catch {
        return '';
      }
    }),
    [toast, setToast] = useState(''),
    [zoom, setZoom] = useState(1);
  useEffect(() => {
    try {
      localStorage.setItem('tabi-owner', owner);
    } catch {}
  }, [owner]);
  const svg = useRef<SVGSVGElement>(null);
 const mapShell=useRef<HTMLDivElement>(null);
  const [poster, setPoster] = useState<string | null>(null);
  const [vectorPoster, setVectorPoster] = useState<string | null>(null);
  useEffect(() => () => { if (vectorPoster) URL.revokeObjectURL(vectorPoster); }, [vectorPoster]);
  const [exporting, setExporting] = useState(false);
  useEffect(() => () => {
    if (poster) URL.revokeObjectURL(poster);
  }, [poster]);
  const p = prefs[selected];
  const pct = (visited.length / 47 * 100).toFixed(1);
  useEffect(() => {
    try {
      localStorage.setItem('tabi-visited', JSON.stringify(visited));
    } catch {}
  }, [visited]);
  useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(''), 2800);
      return () => clearTimeout(t);
    }
  }, [toast]);
  const toggle = (id: number) => setVisited(v => v.includes(id) ? v.filter(n => n !== id) : [...v, id]);
  const download = async () => {
    if (exporting) return;
    setExporting(true);
    let source = '';
    try {
      const markup = createPosterSVG(japanGeometry, prefs, visited, owner, name);
      source = URL.createObjectURL(new Blob([markup], {
        type: 'image/svg+xml;charset=utf-8'
      }));
      const picture = new Image();
      await new Promise<void>((resolve, reject) => {
        picture.onload = () => resolve();
        picture.onerror = () => reject(new Error('Image generation failed'));
        picture.src = source;
      });
      const canvas = document.createElement('canvas');
      canvas.width = 3000;
      canvas.height = 3750;
      const context = canvas.getContext('2d');
      if (!context) throw new Error('Canvas unavailable');
      context.fillStyle = '#f5f1e8';
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(picture, 0, 0, canvas.width, canvas.height);
      const blob = await new Promise<Blob>((resolve, reject) => canvas.toBlob(b => b ? resolve(b) : reject(new Error('PNG generation failed')), 'image/png'));
      setPoster(URL.createObjectURL(blob));
      setVectorPoster(source);
      source = "";
    } catch {
      setToast('Could not create the poster. Please try again.');
    } finally {
      if (source) URL.revokeObjectURL(source);
      setExporting(false);
    }
  };
  const savePoster = () => {
    if (!poster) return;
    const a = document.createElement('a');
    a.href = poster;
    a.download = (owner.trim() || 'My') + '-Japan-Travel-Map.png';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setToast('PNG picture downloaded. To save to Photos, use Save to Gallery → Save Image.');
  };
  const saveVector = () => {
    if (!vectorPoster) return;
    const a = document.createElement("a");
    a.href = vectorPoster;
    a.download = (owner.trim() || "My") + "-Japan-Travel-Map.svg";
    document.body.appendChild(a); a.click(); a.remove();
    setToast("Vector SVG downloaded — stays sharp at any zoom.");
  };
  const sharePoster = async () => {
    if (!poster) return;
    try {
      const blob = await (await fetch(poster)).blob();
      const file = new File([blob], 'myjapan.png', {
        type: 'image/png'
      });
      if (navigator.canShare?.({
        files: [file]
      })) {
        await navigator.share({
          files: [file],
          title: 'My Japan travel map'
        });
      } else savePoster();
    } catch (e) {
      if ((e as Error).name !== 'AbortError') setToast('Sharing unavailable. Use Download PNG instead.');
    }
  };
  const filtered = prefs.filter(x => (region === 'All regions' || x.region === region) && (x.name.toLowerCase().includes(query.toLowerCase()) || x.jp.includes(query)));
  return <div className="tabi"><nav><a className="brand" href="#" onClick={e => e.preventDefault()}><span className="brandicon">旅</span>myjapan<span className="branddot">.</span></a><div className="navlinks"><button className={tab === 'map' ? 'active' : ''} onClick={() => setTab('map')}>My Japan</button><button className={tab === 'list' ? 'active' : ''} onClick={() => setTab('list')}>Prefectures <span>47</span></button></div><div className="nav-actions"><a className="settings-link" href="./settings.html" aria-label="Settings"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="m9 3-.6 2.2-2 .9-2-.6-2 3.5 1.6 1.6v2.3L2.4 14l2 3.5 2-.6 2 .9L9 20h4l.6-2.2 2-.9 2 .6 2-3.5-1.6-1.6v-2.3L19.6 8l-2-3.5-2 .6-2-.9L13 3Z"/><circle cx="11" cy="11.5" r="3"/></svg><span>Settings</span></a><button className="export" onClick={download}>↗ <span>Export my map</span></button></div></nav>
 <main><svg className="japanbackdrop" viewBox="0 0 900 650" aria-hidden="true"><circle cx="660" cy="170" r="120" fill="#c1a179"/><path d="M0 620L430 70 900 620Z" fill="#779c83"/><path d="M304 230L430 70 574 248 493 225 441 260 389 201Z" fill="#e4f1da"/><g stroke="#adc4a6" strokeWidth="18"><path d="M120 390v210M270 390v210M86 390h222M102 428h190"/></g></svg><header><div><div className="eyebrow"><span /> YOUR JOURNEY, ONE PREFECTURE AT A TIME</div><h1>A little more Japan.<br /><em>A lot more you.</em></h1><p>Every place becomes a part of your story. Where have you been?</p></div><div className="passport"><span>JAPAN EXPLORER</span><strong>{pct}<small>%</small></strong><div><i style={{
              width: pct + '%'
            }} /></div><p>{visited.length} of 47 prefectures explored</p></div></header>
 <section className="postercontrols"><div><label htmlFor="traveler-name">Your name</label><input id="traveler-name" value={owner} maxLength={36} placeholder="Enter your name" onChange={e => setOwner(e.target.value)} /></div><div className="posterstat"><strong>{visited.length}<small> / 47</small></strong><span>Prefectures visited</span></div><div className="posterstat"><strong>{pct}%</strong><span>Japan explored</span></div><button onClick={download}>↓ Download picture (PNG)</button></section><div className="workspace"><section className="mapcard"><div className="mapheading"><div><span className="eyebrow">THE EXPLORATION MAP</span><h2>{name} <span>YOUR TRAVEL STORY</span></h2></div><div className="maptabs"><button onClick={() => setTab('map')} className={tab === 'map' ? 'chosen' : ''}>◈ Map</button><button onClick={() => setTab('list')} className={tab === 'list' ? 'chosen' : ''}>☷ List</button></div></div>
 {tab === 'map' ? <div className="mapwrap"><div className="watermark">日本</div><div className="large-map-shell" ref={mapShell} style={{overflow:zoom>1?'auto':'hidden'}}><div style={{width:(zoom*100)+'%',minWidth:'100%'}} dangerouslySetInnerHTML={{__html:createPosterSVG(japanGeometry,prefs,visited,owner,name).replace('<svg ','<svg data-interactive="true" ').replace('width="3000" height="3750"','width="100%" height="auto"')}} onClick={e=>{const target=(e.target as Element).closest('[data-pref-id]');if(target){const id=Number(target.getAttribute('data-pref-id'));setSelected(id);toggle(id)}}} onKeyDown={e=>{if(e.key==='Enter'||e.key===' '){const t=(e.target as Element).closest('[data-pref-id]');if(t){e.preventDefault();const id=Number(t.getAttribute('data-pref-id'));setSelected(id);toggle(id)}}}}/></div><div className="zoom" aria-label="Map zoom controls"><button aria-label="Zoom in" onClick={() => setZoom(z => Math.min(2, z + .25))}>+</button><button aria-label="Reset zoom" onClick={() => setZoom(1)}>⌖</button><button aria-label="Zoom out" onClick={() => setZoom(z => Math.max(1, z - .25))}>−</button></div><div className="legend"><span><i />Visited</span><span><i />Yet to explore</span><small>Tap to mark / unmark visited</small></div></div> : <div className="prefgrid">{filtered.map(f => <button key={f.id} onClick={() => {
              setSelected(f.id);
              toggle(f.id);
            }} className={visited.includes(f.id) ? 'visited' : ''}><span>{f.jp}<small>{f.name}</small></span><b>{visited.includes(f.id) ? '✓' : '+'}</b></button>)}</div>}
 <div className="mapfoot"><span>✧ Small trips. Lasting memories.</span><button onClick={() => {
              if (confirm('Clear all visited prefectures?')) setVisited([]);
            }}>Reset map</button></div></section>
 <aside><div className="detail"><div className="detailtop"><span>YOUR NEXT CHAPTER</span><b>{String(selected + 1).padStart(2, '0')} / 47</b></div><div className="mountain"><span>旅</span><svg viewBox="0 0 300 130"><path d="M0 130L90 45l45 42 50-74 115 117" fill="#26483e" /><path d="M132 91l53-78 45 51-27-8-15 13-15-17z" fill="#b1dcc8" /><circle cx="65" cy="29" r="15" fill="#cbb281" /><path d="M0 130l80-38 40 25 80-24 100 37" fill="#172f2d" /></svg></div><div className="prefintro"><span>{p.region.toUpperCase()} REGION</span><h2>{p.name}<small>{p.jp}</small></h2><p>{visited.includes(p.id) ? 'Another beautiful part of your Japan story.' : 'A new place. A new perspective. Make this part of your story.'}</p><button className={visited.includes(p.id) ? 'mark done' : 'mark'} onClick={() => toggle(p.id)}>{visited.includes(p.id) ? '✓  Visited · tap to unmark' : '+  Mark as visited'}</button></div></div>
 <div className="stats"><div><span>PLACES EXPLORED</span><b>{String(visited.length).padStart(2, '0')}<small> / 47</small></b></div><div><span>STILL TO DISCOVER</span><b>{47 - visited.length}<small> possibilities</small></b></div></div>
 <div className="personal"><span>MAKE IT YOURS</span><label htmlFor="journey">Name your journey</label><input id="journey" maxLength={28} value={name} onChange={e => setName(e.target.value)} /><button onClick={download}>↓ Download picture <span>PNG</span></button><p>Your name and visited places stay in this browser.</p></div></aside></div>
 <JapanAd/><section className="directory"><div><span className="eyebrow">47 PLACES. ENDLESS STORIES.</span><h2>Where to next?</h2></div><input aria-label="Search prefectures" placeholder="⌕ Search prefectures..." value={query} onChange={e => setQuery(e.target.value)} /><div className="regionfilters">{regions.map(r => <button className={region === r ? 'on' : ''} key={r} onClick={() => setRegion(r)}>{r}</button>)}</div><div className="chips">{filtered.map(f => <button key={f.id} className={visited.includes(f.id) ? 'yes' : ''} aria-pressed={visited.includes(f.id)} onClick={() => {
            setSelected(f.id);
            toggle(f.id);
          }}>{visited.includes(f.id) ? '✓' : '○'} {f.name}</button>)}{!filtered.length && <p>No prefectures found. Try another name.</p>}</div></section><footer><span className="brand">旅 myjapan</span><p>Collect moments, not just destinations. <a href="./settings.html">Settings</a></p><span>MADE FOR THE WANDERER IN YOU ↗</span></footer></main>{exporting && <div className="toast" role="status">Creating your HD poster…</div>}{poster && <div className="posterbackdrop" role="dialog" aria-modal="true" aria-label="Download poster preview" onClick={() => setPoster(null)}><section className="postermodal" onClick={e => e.stopPropagation()}><header><div><strong>Your myjapan poster</strong><p>PNG · 3000 × 3750 + sharp vector SVG</p></div><button autoFocus aria-label="Close preview" onClick={() => setPoster(null)}>×</button></header><p className="galleryhint">iPhone: tap Save to Gallery, then choose Save Image. If unavailable, open in Safari or hold the image to save.</p><div className="posterimage"><img src={vectorPoster || poster} alt="Your personalized Japan travel map with full place names, visited prefectures, name and exploration progress" /></div><div className="posteractions"><button onClick={sharePoster}>▧ Save to Gallery</button><button onClick={savePoster}>↓ Download PNG</button><button onClick={saveVector}>◇ Download SVG<span>Sharp at any zoom</span></button></div></section></div>}{toast && <div className="toast" role="status">✓ {toast}</div>}</div>;
};