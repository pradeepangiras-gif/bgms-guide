/* BGMS zone definitions — content traceable to Building Green, Made Simple V1.0
   (DOI 10.5281/zenodo.20365825). Zones follow the guide's simplified
   Köppen-Geiger alignment; boundaries are indicative. */
const BGMS_ZONES = {
  HH: {
    code: "HH", name: "Hot-Humid", cls: "hh",
    regions: "Coastal India, SE Asia, Caribbean, Gulf Coast, West Africa coast, Bangladesh",
    examples: "Mumbai, Lagos, Singapore",
    ieq: "Mould and dampness — cross-ventilation is the first response.",
    wisdom: "Raised-floor houses and deep verandas across SE Asia and West Africa move air and shed rain by design — no machinery required.",
    strategies: {
      under50: [
        "Open windows on two sides for 15–30 minutes each morning to purge humid air",
        "Seal food and fix drips fast — moisture is the enemy, leaks feed mould",
        "External shade for east/west glass: woven screens, bamboo chiks"
      ],
      mid: [
        "Ceiling or high-volume fans before any air conditioning",
        "Light-coloured or reflective roof coating to cut solar gain",
        "Insect-screened ventilation openings high and low for stack effect"
      ],
      over500: [
        "If building or re-roofing: a ventilated roof cavity and generous overhangs",
        "Right-sized high-efficiency AC only after shading and ventilation are done"
      ]
    },
    watch: "Thermal-mass-heavy walls work against you here — they hold heat and moisture overnight. Keep window-to-wall ratio low (10–20%) and prioritise ventilation openings."
  },
  HD: {
    code: "HD", name: "Hot-Dry", cls: "hd",
    regions: "Rajasthan, MENA, US Southwest, central Australia, Sahel",
    examples: "Jaipur, Riyadh, Phoenix",
    ieq: "Dust-storm PM10 can reach 20× WHO limits — filter and seal, don't just ventilate.",
    wisdom: "Jaali screens of Rajasthan and the courtyards of North Africa cool by shading, evaporation, and night-flushing — centuries of refinement, zero operating energy.",
    strategies: {
      under50: [
        "Seal gaps around windows and doors — keeps dust out and cool air in",
        "Night-flush: open up after sunset, close and shade before sunrise",
        "Light-coloured curtains or external screens on east/west windows"
      ],
      mid: [
        "Cool-roof coating — reflective surfaces sharply cut roof heat gain",
        "Evaporative cooling where water allows; far cheaper to run than AC in dry air",
        "Greywater to a small shaded courtyard garden (check local rules)"
      ],
      over500: [
        "If building: thick walls or CSEB for thermal mass, small shaded openings (WWR 15–25%)",
        "Shaded outdoor living space — a courtyard works as the house's lungs"
      ]
    },
    watch: "Water is the binding constraint. Rain barrels need sizing for the dry-spell length, not annual rainfall — a Jaipur household can need a tank ~10× larger than a far rainier city."
  },
  TM: {
    code: "TM", name: "Temperate", cls: "tm",
    regions: "UK, much of Europe, Pacific Northwest, parts of China, southern Canada",
    examples: "London, Vancouver, Melbourne",
    ieq: "Condensation on cold surfaces — the hidden mould risk in otherwise mild climates.",
    wisdom: "Traditional lime plasters across Europe breathe — they buffer indoor moisture instead of trapping it behind impermeable paint.",
    strategies: {
      under50: [
        "Draught-proof doors and windows; payback inside two heating seasons",
        "LED everything — the under-a-year payback is the easiest win in the guide",
        "Wipe down condensation and ventilate bathrooms/kitchens at the source"
      ],
      mid: [
        "Loft/attic insulation top-up — typically the best cost-per-saving in this zone",
        "Thermostatic controls and heating zoning",
        "Trickle vents or humidity-controlled extract fans to manage moisture"
      ],
      over500: [
        "Heat pump at boiler replacement time (4–6 year typical payback range)",
        "Double/secondary glazing when windows are due for replacement anyway"
      ]
    },
    watch: "Balance daylight against heat loss: WWR 20–30% is the guide's range here. Insulating without managing ventilation moves the condensation problem — it doesn't solve it."
  },
  CO: {
    code: "CO", name: "Cold / Subarctic", cls: "co",
    regions: "Northern Europe, Canada, northern USA, Russia, Patagonia",
    examples: "Helsinki, Winnipeg, Ulaanbaatar",
    ieq: "Airtightness versus ventilation — you cannot have one without the other.",
    wisdom: "High-mass stoves and compact shared-wall forms across the subarctic minimise surface area and store heat through the night.",
    strategies: {
      under50: [
        "Air-seal relentlessly: caulk, foam, weatherstrip — the cheapest heat you'll ever buy",
        "Window films and heavy curtains closed at dusk, opened to south sun by day",
        "Check and clear ventilation inlets — sealed homes still need fresh air"
      ],
      mid: [
        "Insulate the attic first, then rim joists and accessible walls",
        "Insulate hot water pipes and the tank",
        "A CO₂ meter (~$30–80) tells you if airtightness has outrun ventilation"
      ],
      over500: [
        "Cold-climate heat pump — modern units hold useful output well below freezing",
        "If building: equator-facing glazing 25–40% WWR (south side in the northern hemisphere, north side in the southern), polar side kept to 5–10%, superinsulated envelope"
      ]
    },
    watch: "Every air-sealing step needs a ventilation answer. In a tight home, plan fresh-air paths (HRV in deep retrofits) or indoor air quality pays the price."
  },
  HA: {
    code: "HA", name: "High Altitude", cls: "ha",
    regions: "Himalayas, Andes, Ethiopian highlands, Tibetan Plateau",
    examples: "Lhasa, Cusco, Addis Ababa",
    ieq: "Biomass cookstove smoke — indoor PM2.5 can reach 100× WHO guideline levels.",
    wisdom: "Kath-Kuni timber-and-stone walls of the Himalayas combine seismic resilience with thermal mass — performance under extreme conditions with local materials.",
    strategies: {
      under50: [
        "Get cooking smoke out: a sealed stove door, a maintained chimney, a window cracked while cooking",
        "Seal gaps and draughts — intense sun by day, hard frost by night rewards a tight envelope",
        "Sun-side curtains open by day, all curtains closed at dusk"
      ],
      mid: [
        "Improved cookstove with a flue, or LPG where supply and policy allow — the single biggest health upgrade in this zone",
        "Roof and ceiling insulation with locally available materials",
        "Equator-facing glazing (south side in the northern hemisphere, north side in the southern) to harvest winter sun"
      ],
      over500: [
        "If building: thermal mass walls (stone, CSEB, rammed earth) sized for the day-night swing",
        "Attached sunspace/greenhouse as a solar buffer room"
      ]
    },
    watch: "UV is stronger and nights are colder than the latitude suggests. Materials and sealants rated for UV and freeze-thaw last; bargain ones don't."
  },
  MX: {
    code: "MX", name: "Mixed / Composite", cls: "mx",
    regions: "North and Central India, much of China, Mediterranean inland",
    examples: "Delhi, Beijing, Madrid",
    ieq: "Outdoor air can invert the logic: Delhi PM2.5 runs 6–7× WHO limits — on bad-air days, sealing and filtering beats ventilating.",
    wisdom: "Courtyard houses from Delhi to Xi'an handle both seasons: shaded and ventilated in summer, a sun-trap in winter.",
    strategies: {
      under50: [
        "Check local air quality before ventilating — open up on clean days, seal and filter on bad ones",
        "Seasonal switching routine: shade and night-flush in summer, seal and sun-harvest in winter",
        "Seal gaps — it serves both the hot and cold season"
      ],
      mid: [
        "Adjustable external shading (the guide's WWR range here is 15–25%)",
        "A box-fan filter or HEPA purifier for the room you sleep in",
        "Ceiling fans to extend the no-AC season at both ends"
      ],
      over500: [
        "Reversible (heating + cooling) heat pump suits the dual season",
        "If building: orientation and movable shading designed for both solstices"
      ]
    },
    watch: "No single-season advice survives here. Anything you add for summer must be checked against winter, and vice versa — that's the zone's defining test."
  }
};
