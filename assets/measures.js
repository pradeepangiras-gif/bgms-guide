/* BGMS Measure Picker dataset.
   Economy layer rules (agreed limits):
   - Cost BANDS only (<$50 / $50–500 / >$500). No local prices, no live feeds.
   - Payback BANDS only where a logged Tier 1/2 source supports them
     (DOE Building America; NRCan; IEA; WHO; ENERGY STAR — as cited in the guide).
   - Financing note required for every >$500 measure.
   - Every numeric claim traces to the guide / BGMS research log.
   Fields: id, name, ch (guide chapter), zones (best-fit), avoid (flagged-against),
   cost (1=<$50, 2=$50–500, 3=>$500), ease (1=no skill, 2=one afternoon, 3=professional),
   horizon (today | replacement | structural), payback (text band or null),
   finance (text or null), caveat, src */
const BGMS_MEASURES = [
  { id:"led", name:"Replace all bulbs with LEDs", ch:2,
    zones:["HH","HD","TM","CO","HA","MX"], avoid:[], cost:1, ease:1, horizon:"today",
    payback:"Under 1 year", finance:null,
    caveat:"Buy the right colour temperature once — replacing twice erases the saving.",
    src:"DOE / ENERGY STAR; payback band per DOE Building America (guide Fig 6.B)" },

  { id:"airseal", name:"Seal gaps around windows, doors and pipes (caulk / foam / weatherstrip)", ch:2,
    zones:["CO","HA","TM","MX","HD"], avoid:[], cost:1, ease:1, horizon:"today",
    payback:"1–2 years", finance:null,
    caveat:"In tight homes, pair every sealing step with a ventilation plan — fresh air still has to come from somewhere.",
    src:"DOE Building America; NRCan (guide Fig 6.B)" },

  { id:"crossvent", name:"Morning cross-ventilation routine (open two sides, 15–30 min)", ch:5,
    zones:["HH","TM"], avoid:["MX"], cost:1, ease:1, horizon:"today",
    payback:null, finance:null,
    caveat:"Logic inverts where outdoor air is the hazard: in MX cities like Delhi (PM2.5 routinely 6–7× WHO limits) and HD dust seasons, seal and filter instead.",
    src:"Guide Ch5 IEQ inversions table; WHO air quality guideline comparisons" },

  { id:"leaktest", name:"Toilet silent-leak test (food colouring in the cistern)", ch:4,
    zones:["HH","HD","TM","CO","HA","MX"], avoid:[], cost:1, ease:1, horizon:"today",
    payback:"Immediate if a leak is found", finance:null,
    caveat:"Costs nothing; a silently leaking toilet can waste more than every other fixture combined.",
    src:"EPA WaterSense (guide Ch4)" },

  { id:"aerators", name:"Low-flow showerhead and tap aerators", ch:4,
    zones:["HH","HD","TM","CO","HA","MX"], avoid:[], cost:1, ease:1, horizon:"today",
    payback:"Under 1 year where water is metered", finance:null,
    caveat:"Verify your shower type first — some electric and low-pressure systems need matched fittings.",
    src:"EPA WaterSense (guide Ch4)" },

  { id:"secondhand", name:"Choose secondhand or reclaimed materials before buying new", ch:3,
    zones:["HH","HD","TM","CO","HA","MX"], avoid:[], cost:1, ease:1, horizon:"today",
    payback:"Saves money at purchase", finance:null,
    caveat:"Reuse beats recycling: demolition drives over 90% of construction-sector waste volume.",
    src:"Guide Ch3; Soto-Paz et al. 2023 / EPA (research log)" },

  { id:"refuge", name:"Identify and prepare the coolest room as a heatwave refuge", ch:6,
    zones:["HH","HD","TM","MX"], avoid:[], cost:1, ease:1, horizon:"today",
    payback:null, finance:null,
    caveat:"A resilience measure, not a savings measure — its value shows up on the worst day of the year.",
    src:"Guide Ch6 / Ch7 quick wins" },

  { id:"curtains", name:"Seasonal curtain and shading routine (shade by day in summer, close at dusk in winter)", ch:2,
    zones:["MX","TM","CO","HA"], avoid:[], cost:1, ease:1, horizon:"today",
    payback:null, finance:null,
    caveat:"Free, but only works if it becomes a habit — automation is what the higher budget bands buy.",
    src:"Guide Ch2 passive design" },

  { id:"co2meter", name:"CO₂ meter check (one week in the bedroom)", ch:5,
    zones:["CO","TM","HA","MX"], avoid:[], cost:2, ease:1, horizon:"today",
    payback:null, finance:null,
    caveat:"Readings regularly above 1,000 ppm with the door closed mean the room needs a ventilation answer.",
    src:"Guide Ch5 (editorial-review strengthened quick win)" },

  { id:"fans", name:"Ceiling or high-volume fans before any air conditioning", ch:2,
    zones:["HH","MX","HD"], avoid:[], cost:2, ease:2, horizon:"today",
    payback:"Months, vs. running AC", finance:null,
    caveat:"A fan cools people, not rooms — switch it off in an empty room.",
    src:"Guide Ch2; IEA Staying Cool (passive/low-energy cooling can cut cooling demand 35–70%)" },

  { id:"extshade", name:"External shading on east/west glass (screens, awnings, chiks, jaali-style)", ch:2,
    zones:["HH","HD","MX"], avoid:["CO"], cost:2, ease:2, horizon:"today",
    payback:null, finance:null,
    caveat:"External beats internal — stop the heat before the glass. In CO, don't shade the winter sun you need.",
    src:"Guide Ch2 WWR & shading; vernacular: Rajasthani jaali" },

  { id:"coolroof", name:"Cool-roof / reflective roof coating", ch:2,
    zones:["HH","HD","MX"], avoid:["CO","HA"], cost:2, ease:2, horizon:"replacement",
    payback:null, finance:null,
    caveat:"In heating-dominated zones a dark roof's winter gain can outweigh the summer benefit — climate-dependent physics, no universal answer.",
    src:"Guide Ch2/Ch6; UNEP urban heat guidance" },

  { id:"rainbarrel", name:"Rain barrel / rooftop rainwater harvesting", ch:4,
    zones:["HH","MX","TM","HD"], avoid:[], cost:2, ease:2, horizon:"today",
    payback:null, finance:null,
    caveat:"Size the tank for the longest dry spell, not annual rainfall — a low-rainfall city with a long dry season needs a far larger tank than a rainy one with steady rain.",
    src:"Guide Ch4 yield formula; Londra et al. 2015; Fewkes & Butler 2000" },

  { id:"greywater", name:"Simple greywater diversion to landscape", ch:4,
    zones:["HD","MX"], avoid:[], cost:2, ease:2, horizon:"today",
    payback:null, finance:null,
    caveat:"Regulations vary widely — check local rules before plumbing anything. Laundry-to-landscape is the usual legal entry point.",
    src:"Guide Ch4 greywater section (regulatory caveat)" },

  { id:"insulhw", name:"Insulate hot-water tank and accessible pipes", ch:2,
    zones:["CO","TM","HA","MX"], avoid:[], cost:2, ease:2, horizon:"today",
    payback:"Around 1 year", finance:null,
    caveat:"Cheap, invisible, permanent — do it once, save every day.",
    src:"DOE (guide Ch2)" },

  { id:"cookstove", name:"Improved cookstove with flue, or LPG where supply allows", ch:5,
    zones:["HA","HH"], avoid:[], cost:2, ease:3, horizon:"replacement",
    payback:null, finance:null,
    caveat:"The biggest health measure in the guide: household air pollution causes an estimated 3.2 million premature deaths per year (WHO 2021). Indoor PM2.5 near open biomass stoves can reach 100× WHO guideline levels.",
    src:"WHO 2021 (guide Ch5 Key Number, corrected figure)" },

  { id:"attic", name:"Attic / roof insulation top-up", ch:2,
    zones:["CO","TM","HA","MX"], avoid:[], cost:2, ease:3, horizon:"replacement",
    payback:"2–3 years", finance:null,
    caveat:"Insulate the attic before the walls — best saving per unit cost in heating climates. Plan the ventilation/moisture path at the same time.",
    src:"DOE Building America; NRCan (guide Fig 6.B)" },

  { id:"hepa", name:"HEPA purifier or box-fan filter for the sleeping room", ch:5,
    zones:["MX","HD"], avoid:[], cost:2, ease:1, horizon:"today",
    payback:null, finance:null,
    caveat:"Target the room you spend eight hours in, not the whole house — that's where the budget does the most health work.",
    src:"Guide Ch5 IEQ" },

  { id:"dualflush", name:"Dual-flush or efficient toilet at replacement time", ch:4,
    zones:["HH","HD","TM","CO","HA","MX"], avoid:[], cost:2, ease:3, horizon:"replacement",
    payback:null, finance:null,
    caveat:"Conventional toilets use 9–12 litres per flush; efficient models cut that by more than half.",
    src:"Guide Ch4 fixtures; EPA WaterSense" },

  { id:"heatpump", name:"Heat pump at heating-system replacement time", ch:2,
    zones:["TM","CO","MX"], avoid:[], cost:3, ease:3, horizon:"replacement",
    payback:"4–6 years (typical band)", finance:"Time it to boiler/furnace end-of-life so you're paying the difference, not the whole unit. Check national/utility incentive programmes — they exist in most TM/CO markets and can shorten payback substantially. Verify locally.",
    caveat:"Modern cold-climate units hold useful output well below freezing. Reversible units suit MX's dual season.",
    src:"DOE Building America; NRCan (guide Fig 6.B); h2x (tropical COP, research log)" },

  { id:"solar", name:"Rooftop solar PV — after demand is minimised", ch:2,
    zones:["HD","HH","MX","TM","HA"], avoid:[], cost:3, ease:3, horizon:"replacement",
    payback:"6–10 years (typical band)", finance:"Net-metering rules, feed-in tariffs and financing vary by country and utility — they move the economics more than the panels do. Verify locally. Renters: generally not yours to install; community/shared solar is the route where offered.",
    caveat:"Solar generates 70–90% of remaining demand on-site — it offsets load rather than reducing it, which is why the demand-reduction steps come first.",
    src:"IRENA/NREL 2024–25 costs (research log); guide Table 2.4 (corrected framing)" },

  { id:"glazing", name:"Double / secondary glazing when windows are due anyway", ch:2,
    zones:["CO","TM","HA"], avoid:[], cost:3, ease:3, horizon:"replacement",
    payback:"Long on energy alone; bundle with comfort and noise", finance:"Do it at natural replacement time — the marginal cost over standard windows is the real number, not the sticker price. Verify locally.",
    caveat:"Secondary glazing and heavy curtains capture much of the benefit at a fraction of the cost if full replacement isn't due.",
    src:"Guide Ch2 envelope hierarchy" },

  { id:"cseb", name:"CSEB / thermal-mass walls when building or extending", ch:3,
    zones:["HD","HA"], avoid:["HH"], cost:3, ease:3, horizon:"structural",
    payback:null, finance:"A structural decision with a 60–100 year horizon — get the design hours in before the material order; the carbon and comfort are locked in at the drawing stage. Verify local soil suitability and codes.",
    caveat:"Thermal mass works where day-night swings are large (HD, HA). In HH it stores heat and moisture against you — flagged against.",
    src:"Guide Ch3/Ch6; CSEB & lime plaster sections" },

  { id:"lowcarb", name:"Low-carbon structural choices: SCM-blended cement, EAF/recycled steel, certified timber", ch:3,
    zones:["HH","HD","TM","CO","HA","MX"], avoid:[], cost:3, ease:3, horizon:"structural",
    payback:null, finance:"Often near cost-parity at tender stage — ask for it in the specification; suppliers won't volunteer it. Verify locally.",
    caveat:"EAF steel from recycled scrap cuts CO₂ by 50–80% vs blast-furnace. Blended cements with SCMs are mainstream (global clinker ratio fell from 0.83 in 1990 to 0.66 in 2016).",
    src:"Andrew 2018 ESSD (cement, research log Tier 1); guide Ch3 harmonised steel figures" },

  { id:"flood", name:"Flood resilience: backwater valve, raised utilities, sealed penetrations", ch:6,
    zones:["HH","TM","CO","MX"], avoid:[], cost:3, ease:3, horizon:"replacement",
    payback:"One avoided event can repay it many times over", finance:"Some insurers and municipalities subsidise backwater valves — ask before you pay full price. Verify locally.",
    caveat:"Average flooded-basement repair runs ≈ $43,000 CAD (Canadian data; varies by region and currency), excluding contents.",
    src:"Partners for Action / Clean Foundation (guide Ch6, corrected currency)" },

  { id:"sunspace", name:"Equator-facing glazing / attached sunspace when building (HA, CO)", ch:2,
    zones:["HA","CO"], avoid:["HH"], cost:3, ease:3, horizon:"structural",
    payback:null, finance:"Costs little extra at design stage, a lot as a retrofit — another reason orientation decisions belong in the first sketch. Verify with a local designer.",
    caveat:"Guide WWR bands: CO 25–40% on the sun side and 5–10% on the polar side; HD/MX 15–25%; HH 10–20%. 'Sun side' means equator-facing: south in the northern hemisphere, north in the southern — Wellington and Winnipeg face opposite ways. Orientation is free the day you choose it.",
    src:"Guide Ch2 WWR table" }
];

const BGMS_COST_LABELS = { 1: "Under $50", 2: "$50–500", 3: "Over $500" };
const BGMS_EASE_LABELS = { 1: "No trade skill", 2: "One afternoon", 3: "Professional" };
const BGMS_HORIZON_LABELS = {
  today: "Today decision",
  replacement: "Replacement-time decision (15–40 yr horizon)",
  structural: "Structural decision (60–100 yr horizon)"
};
