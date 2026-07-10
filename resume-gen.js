document.getElementById('resume-download-link').addEventListener('click', function(e) {
  e.preventDefault();

  var html = '<div style="font-family:Arial,Helvetica,sans-serif;color:#1a1a1a;padding:28px 34px;width:100%;font-size:9.5px;line-height:1.5;box-sizing:border-box;">'

  // HEADER
  + '<div style="text-align:center;margin-bottom:2px;">'
  + '<h1 style="font-size:26px;font-weight:700;margin:0 0 4px 0;">Yash Khandelwal</h1>'
  + '<p style="font-size:10.5px;font-weight:500;color:#555;margin:0 0 7px 0;text-transform:uppercase;letter-spacing:3px;">Media Buyer &amp; CRM Strategist</p>'
  + '<p style="font-size:9px;color:#555;margin:0;">Pune, India &nbsp; | &nbsp; yashkhandelwal1997@gmail.com &nbsp; | &nbsp; +91 77218 32029</p>'
  + '<p style="font-size:9px;margin:2px 0 0 0;"><a href="https://www.linkedin.com/in/yash-khandelwal-067b54312/" style="color:#b45309;">linkedin.com/in/yash-khandelwal-067b54312</a> &nbsp; | &nbsp; <a href="https://khandelwalyash.com/" style="color:#b45309;">khandelwalyash.com</a></p>'
  + '</div>'

  + '<hr style="border:none;border-top:2px solid #1a1a1a;margin:12px 0 10px 0;">'

  // PROFILE
  + '<div style="margin-bottom:10px;">'
  + '<h2 style="font-size:8.5px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:#b45309;margin:0 0 5px 0;border-bottom:1px solid #ddd;padding-bottom:3px;">Profile</h2>'
  + '<p style="margin:0;color:#333;font-size:9.5px;line-height:1.5;">Systems-first Media Buyer &amp; CRM Strategist with multi-industry execution across <b>Real Estate, Preschools, D2C Fashion, Finance, Exports &amp; Agencies</b>. I design end-to-end acquisition engines across Meta &amp; Google Ads, connecting ads to tracking to CRM to automation to reporting. Every part measured, every rupee accounted for.</p>'
  + '</div>'

  // SKILLS
  + '<div style="margin-bottom:10px;">'
  + '<h2 style="font-size:8.5px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:#b45309;margin:0 0 5px 0;border-bottom:1px solid #ddd;padding-bottom:3px;">Technical Skills</h2>'
  + '<table style="width:100%;font-size:9px;color:#333;border-collapse:collapse;">'
  + '<tr><td style="padding:2px 10px 2px 0;vertical-align:top;width:50%;"><b>Tracking &amp; Analytics:</b> GA4, GTM, BigQuery, Looker Studio, Meta Pixel, CAPI, UTMs, gclid</td>'
  + '<td style="padding:2px 0;vertical-align:top;"><b>Paid Media:</b> Meta Ads, Google Search, Shopping, Performance Max</td></tr>'
  + '<tr><td style="padding:2px 10px 2px 0;vertical-align:top;"><b>CRM &amp; Automation:</b> Zoho CRM, Zapier, WhatsApp, AI Bots, Google Sheets</td>'
  + '<td style="padding:2px 0;vertical-align:top;"><b>SEO &amp; Content:</b> Local SEO, GBP, AEO/GEO, WordPress, WooCommerce</td></tr>'
  + '<tr><td colspan="2" style="padding:2px 0;vertical-align:top;"><b>AI &amp; Intelligence:</b> Claude AI, AI Daily Reports, Campaign Planning, Competitive Analysis, Keyword Clustering</td></tr>'
  + '</table></div>'

  // EXPERIENCE
  + '<div style="margin-bottom:10px;">'
  + '<h2 style="font-size:8.5px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:#b45309;margin:0 0 7px 0;border-bottom:1px solid #ddd;padding-bottom:3px;">Experience</h2>'

  // Haemoglobbinn
  + '<div style="margin-bottom:10px;">'
  + '<table style="width:100%;border-collapse:collapse;"><tr>'
  + '<td style="padding:0;font-size:10.5px;"><b>Haemoglobbinn</b> <span style="color:#777;font-size:9px;font-style:italic;">(Branding &amp; Integrated Marketing Co.)</span></td>'
  + '<td style="padding:0;text-align:right;color:#777;font-size:8.5px;white-space:nowrap;">Pune</td></tr></table>'
  + '<table style="width:100%;border-collapse:collapse;margin-bottom:4px;"><tr>'
  + '<td style="padding:0;font-weight:600;font-size:9.5px;">Performance Marketing Manager</td>'
  + '<td style="padding:0;text-align:right;color:#777;font-size:8.5px;white-space:nowrap;">Sept 2025 to Jan 2026</td></tr></table>'
  + '<ul style="margin:0;padding-left:14px;color:#333;font-size:9px;line-height:1.5;">'
  + '<li style="margin-bottom:2px;">Ran full-funnel Meta + Google Ads across real estate, preschools, daycare, D2C &amp; finance clients</li>'
  + '<li style="margin-bottom:2px;">Engineered a real estate lead system: <b>sub-₹150 CPL, qualification rate roughly double the industry norm, generating a multi-crore sales pipeline</b> on a modest ad budget</li>'
  + '<li style="margin-bottom:2px;">Built full tracking: Pixel, Google Ads Tags, CAPI, GA4, UTMs, gclid for attribution consistency across platforms</li>'
  + '<li style="margin-bottom:2px;">Created Zoho CRM → Zapier → Sheets real-time reporting (100% visibility, zero leakage)</li>'
  + '<li style="margin-bottom:2px;">Optimised GMB listings, improved Map Pack rank, direction requests &amp; walk-in behaviour</li>'
  + '<li style="margin-bottom:2px;">Built LinkedIn content engine for founders</li>'
  + '<li>Delivered <b>44% CPC reduction for a finance-sector client</b></li>'
  + '</ul></div>'

  // Angelicez
  + '<div style="margin-bottom:10px;">'
  + '<table style="width:100%;border-collapse:collapse;"><tr>'
  + '<td style="padding:0;font-size:10.5px;"><b>Angelicez</b> <span style="color:#777;font-size:9px;font-style:italic;">(D2C Lingerie &amp; Fashion Brand)</span></td>'
  + '<td style="padding:0;text-align:right;color:#777;font-size:8.5px;white-space:nowrap;">Delhi (Hybrid)</td></tr></table>'
  + '<table style="width:100%;border-collapse:collapse;margin-bottom:4px;"><tr>'
  + '<td style="padding:0;font-weight:600;font-size:9.5px;">Manager, Customer Experience Strategy</td>'
  + '<td style="padding:0;text-align:right;color:#777;font-size:8.5px;white-space:nowrap;">Apr 2025 to Aug 2025</td></tr></table>'
  + '<ul style="margin:0;padding-left:14px;color:#333;font-size:9px;line-height:1.5;">'
  + '<li style="margin-bottom:2px;">Built 28-page website from scratch including content, UX, product categorisation, and SEO hygiene</li>'
  + '<li style="margin-bottom:2px;">Defined brand voice, positioning &amp; messaging; planned Meta Ads, influencer &amp; WhatsApp marketing</li>'
  + '<li>Mapped full customer journey: website → add to cart → WhatsApp follow-up → feedback loops</li>'
  + '</ul></div>'

  // Entourage
  + '<div style="margin-bottom:0;">'
  + '<table style="width:100%;border-collapse:collapse;"><tr>'
  + '<td style="padding:0;font-size:10.5px;"><b>Entourage</b> <span style="color:#777;font-size:9px;font-style:italic;">(Marketing Agency)</span></td>'
  + '<td style="padding:0;text-align:right;color:#777;font-size:8.5px;white-space:nowrap;">Delhi (Remote)</td></tr></table>'
  + '<table style="width:100%;border-collapse:collapse;margin-bottom:4px;"><tr>'
  + '<td style="padding:0;font-weight:600;font-size:9.5px;">Content Strategist</td>'
  + '<td style="padding:0;text-align:right;color:#777;font-size:8.5px;white-space:nowrap;">Mar 2025 to Apr 2025</td></tr></table>'
  + '<ul style="margin:0;padding-left:14px;color:#333;font-size:9px;line-height:1.5;">'
  + '<li style="margin-bottom:2px;">Posts hit <b>1,500–4,500+ reactions, 150–180 comments, 30–80 reposts</b> with zero controversy, zero clickbait</li>'
  + '<li style="margin-bottom:2px;">Multiple posts crossed <b>100K+ organic impressions</b>; achieved 4.6% follower growth MoM</li>'
  + '<li>Built repeatable narrative systems: Problem → Insight → Strategy → Impact frameworks</li>'
  + '</ul></div>'
  + '</div>'

  // PROJECTS
  + '<div style="margin-bottom:10px;">'
  + '<h2 style="font-size:8.5px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:#b45309;margin:0 0 7px 0;border-bottom:1px solid #ddd;padding-bottom:3px;">Key Projects &amp; Case Studies</h2>'

  + '<div style="margin-bottom:7px;"><b style="font-size:9.5px;">Content Intelligence Engine</b> <span style="color:#777;font-size:8.5px;\">| AI Tool, Built &amp; Live</span>'
  + '<p style="margin:2px 0 0 0;color:#333;font-size:9px;line-height:1.5;">Tool that studies competitors&rsquo; published content and generates a 1/3/6-month content roadmap, every idea traceable to a real article. Running on a live client, not a demo.</p></div>'

  + '<div style="margin-bottom:0;"><b style="font-size:9.5px;">Automated Performance Reports</b> <span style="color:#777;font-size:8.5px;\">| AI Tool, Built &amp; Live</span>'
  + '<p style="margin:2px 0 0 0;color:#333;font-size:9px;line-height:1.5;">GA4 + Search Console tool that auto-emails weekly, monthly &amp; quarterly reports with a 0&ndash;100 performance score and action items. Zero manual work.</p></div>'
  + '</div>'

  // EDUCATION
  + '<div style="margin-bottom:10px;">'
  + '<h2 style="font-size:8.5px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:#b45309;margin:0 0 5px 0;border-bottom:1px solid #ddd;padding-bottom:3px;">Education</h2>'
  + '<table style="width:100%;border-collapse:collapse;margin-bottom:2px;font-size:9.5px;"><tr>'
  + '<td style="padding:0;"><b>PG Diploma in Digital Marketing</b> | Purdue University | Simplilearn</td>'
  + '<td style="padding:0;text-align:right;color:#777;font-size:8.5px;white-space:nowrap;">2024 to Jun 2025</td></tr></table>'
  + '<table style="width:100%;border-collapse:collapse;font-size:9.5px;"><tr>'
  + '<td style="padding:0;"><b>B.Tech in Computer Engineering</b> | University of Pune, Lonavla</td>'
  + '<td style="padding:0;text-align:right;color:#777;font-size:8.5px;white-space:nowrap;">2015 to 2020</td></tr></table>'
  + '</div>'

  // INTERESTS
  + '<div>'
  + '<h2 style="font-size:8.5px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:#b45309;margin:0 0 4px 0;border-bottom:1px solid #ddd;padding-bottom:3px;">Interests</h2>'
  + '<p style="margin:0;color:#555;font-size:9px;">Emotional &amp; Behavioural Marketing &nbsp;·&nbsp; Luxury Branding Psychology &nbsp;·&nbsp; Global Sports Marketing &nbsp;·&nbsp; Marketing Architecture &nbsp;·&nbsp; Funnel &amp; Systems Thinking</p>'
  + '</div>'

  + '</div>';

  var container = document.createElement('div');
  container.style.cssText = 'position:absolute;left:0;top:0;width:210mm;background:#fff;z-index:-1;opacity:0;pointer-events:none;';
  container.innerHTML = html;
  document.body.appendChild(container);

  var opt = {
    margin: 0,
    filename: 'Yash_Khandelwal_Resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, scrollY: 0 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    pagebreak: { mode: ['css', 'legacy'] }
  };

  // Open the tab now, inside the tap gesture, so the browser doesn't treat
  // the later navigation (after async PDF rendering) as a blocked popup.
  // Use a blob URL, not a data URI: Chrome and other browsers block
  // top-level navigation to data: URIs outright, which just leaves the
  // tab blank.
  var pdfWindow = window.open('', '_blank');

  html2pdf().set(opt).from(container.firstElementChild).outputPdf('bloburl').then(function(pdfUrl) {
    document.body.removeChild(container);
    if (pdfWindow) {
      pdfWindow.location.href = pdfUrl;
    } else {
      window.location.href = pdfUrl;
    }
  });
});
