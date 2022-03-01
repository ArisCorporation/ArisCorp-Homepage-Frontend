import { Directus } from '@directus/sdk'

const directus = new Directus('https://cms.ariscorp.de')

directus.auth.static('ihGAYzxCs1LWxIGBSTWbx8w3cd7oTNCobhZdmr')

const carrack = directus.items('fleetyards')

export default async function fetchCarrack(data) {
  // await carrack.createOne({
  //   name: data.ship.data.Name,
  //   dd: data.ship.data.Description,
  // })

  await carrack.createMany([
    {
      name: 'Aegis Avenger Stalker',
      dd: 'Manufacturer: Aegis Dynamics<br />Focus: Interdiction<br /><br />Initially designed as Aegis’ frontline carrier ship for the military, the Avenger Stalker took a different path, ultimately having a long and storied career as the standard patrol craft of the UEE Advocacy. Utilizing its cargo hold for prisoner transport, the Avenger features a sturdy, reliable hull and the capacity for larger-than-expected engine mounts.',
    },
    {
      name: 'Aegis Avenger Titan',
      dd: 'Manufacturer: Aegis Dynamics<br />Focus: Light Freight <br /><br />Lacking the Prisoner Cells of the Stalker or the EMP Generator of the Warlock, the Titan’s hold is free to carry cargo. Couple that available space with the Avenger’s tried and true combat abilities and you’ve got a light cargo hauler that’s more than capable of handling itself in a fight.',
    },
    {
      name: 'Aegis Avenger Titan Renegade',
      dd: 'Manufacturer: Aegis Dynamics <br />Focus: Light Freight<br /><br />Created as part of the ‘Masters of Flight’ series in conjunction with the flight-sim Arena Commander, the Renegade pays tribute to famed pilot Danny Solomon for his notable work with the Advocacy to bring justice to Bremen. This Avenger Titan comes equipped with a specialized dogfighting focused loadout and a custom special edition livery honoring this iconic ship.',
    },
    {
      name: 'Aegis Avenger Warlock',
      dd: 'Manufacturer: Aegis Dynamics<br />Focus: Interdiction<br /><br />The Avenger Warlock was built towards a single design philosophy: stop ships, don’t destroy them. Probably the closest to a non-lethal fighter, the Warlock is outfitted with a Behring REP-8 EMP Generator, capable of emitting a powerful electromagnetic wave to disable any electronics unfortunate enough to be within the blast radius.',
    },
    {
      name: 'Aegis Eclipse',
      dd: "Manufacturer: Aegis Dynamics<br />Focus: Stealth Bomber<br /><br />The Aegis Eclipse is a bomber designed to get in and strike before it's ever even spotted. After extensive service with the UEE, this high-tech military equipment made its civilian market debut in 2947.",
    },
    {
      name: 'Aegis Gladius',
      dd: 'Manufacturer: Aegis Dynamics<br />Focus: Light Fighter<br /><br />The Gladius is an older design which has been updated over the years to keep up with modern technology. In military circles, the Gladius is beloved for its performance and its simplicity. A fast, light fighter with a laser-focus on dogfighting, the Gladius is an ideal interceptor or escort ship.',
    },
    {
      name: 'Aegis Gladius Valiant',
      dd: 'Manufacturer: Aegis Dynamics<br />Focus: Light Fighter <br /><br />Created as part of the ‘Masters of Flight’ series in conjunction with the flight-sim Arena Commander, the Valiant pays tribute to famed defense pilot Condi Hillard for being the first Human on record to defeat a Vanduul in combat. This Gladius comes equipped with a specialized dogfighting focused loadout and a custom special edition livery honoring her iconic ship.',
    },
    {
      name: 'Aegis Hammerhead',
      dd: 'Manufacturer: Aegis Dynamics <br />Focus: Heavy Gunship<br /><br />A fast patrol ship with multiple turrets designed to combat fighters, the Hammerhead is equally suited to support larger capital ships in a fleet or act as a flagship for fighter groups.',
    },
    {
      name: 'Aegis Idris',
      dd: "Manufacturer: Aegis Dynamics<br />Focus: Frigate<br /><br />A mark two 'peacekeeper' variant developed for the UEE patrol services, the Idris-P strips the standard ship's ship-to-ship gun and spinal mount in favor of additional cargo capacity and superior speed.",
    },
    {
      name: 'Aegis Javelin',
      dd: 'Manufacturer: Aegis Dynamics<br />Focus: Destroyer<br /><br />Designed for use by the UEE military, the Javelin is a massive, modular capital ship that can be appropriated for entrepreneurial use. With a detailed interior, plenty of modular room options, and a high crew capacity, the Javelin is a ship that has made a name for itself in a variety of roles.',
    },
    {
      name: 'Aegis Reclaimer',
      dd: 'Manufacturer: Aegis Dynamics<br />Focus: Heavy Salvage<br /><br />The Aegis Reclaimer is an industrial salvage ship. Equipped with a reinforced cargo bay, a long-range jump drive and launch pods for unmanned drones, the Reclaimer is an ideal ship for taking advantage of deep space wrecks. Tractor beams, floodlights, scanner options and docking ports round out the tools on this capable, utilitarian spacecraft.',
    },
    {
      name: 'Aegis Redeemer',
      dd: "Manufacturer: Aegis Dynamics<br />Focus: Gunship <br /><br />Now you can own the Next Great Starship! Designed by Star Citizen's backers, the Aegis Redeemer is a powerful fighting ship capable of holding its own in combat with a powerful weapons payload. Dotted with turrets and missiles, the Redeemer also doubles as an armored landing craft capable of delivering armored soldiers for first person combat!",
    },
    {
      name: 'Aegis Retaliator',
      dd: "Manufacturer: Aegis Dynamics<br />Focus: Heavy Bomber<br /><br />This civilian refit of the Retaliator trades the ship's massive torpedo bays for equally massive cargo capacity.",
    },
    {
      name: 'Aegis Sabre',
      dd: 'Manufacturer: Aegis Dynamics<br />Focus: Stealth Fighter<br /><br />Part of Aegis Dynamics’ Phase Two of new ship models, the Sabre was designed as a space superiority fighter for those situations where you need to leave a lighter footprint. Designed to be a rapid responder, the Sabre is more than capable of establishing battlefield dominance for any number of combat scenarios.',
    },
    {
      name: 'Aegis Sabre Comet',
      dd: 'Manufacturer: Aegis Dynamics<br />Focus: Stealth Fighter<br /><br />Created as part of the ‘Masters of Flight’ series in conjunction with the flight-sim Arena Commander, the Comet pays tribute to famed pilot Captain Kamur Dalion for his work with Aegis to usher in a new era of combat ship design. This Sabre comes equipped with a specialized dogfighting focused loadout and a custom special edition livery honoring this iconic ship.',
    },
    {
      name: 'Aegis Sabre Raven',
      dd: 'Manufacturer: Aegis Dynamics <br />Focus: Interdiction<br /><br />Aegis Dynamics have raised the bar yet again with their Raven variant, maintaining all the speed and maneuverability of its Sabre forebear, but with a lower ship signature, making it a fast, stealthy infiltrator.',
    },
    {
      name: 'Aegis Vanguard Warden',
      dd: 'Manufacturer: Aegis Dynamics<br />Focus: Heavy Fighter<br /><br />A hard-charging bulldog of a fighter which features extensive forward-mounted weaponry designed to tear through the shields and armor of other spacecraft. So-named because their multiple-jump range allows them to form the vanguard of any military expedition, Vanguards have seen extensive service against the Vanduul.',
    },
    {
      name: 'Aegis Vanguard Harbinger',
      dd: 'Manufacturer: Aegis Dynamics<br />Focus: Heavy Fighter<br /><br />A hard-charging bulldog of a fighter which features extensive forward-mounted weaponry designed to tear through the shields and armor of other spacecraft. So-named because their multiple-jump range allows them to form the vanguard of any military expedition, Vanguards have seen extensive service against the Vanduul.',
    },
    {
      name: 'Aegis Vanguard Hoplite',
      dd: 'Manufacturer: Aegis Dynamics<br />Focus: Dropship <br /><br />The Vanguard Hoplite is a cross between the winning Vanguard deep space fighter and a dedicated boarding ship. Adapted from proven assault ship designs, the Hoplite is the perfect tool for inserting an armored strike team with enough firepower to get them out again.',
    },
    {
      name: 'Aegis Vanguard Sentinel',
      dd: 'Manufacturer: Aegis Dynamics<br />Focus: Heavy Fighter<br /><br />A hard-charging bulldog of a fighter which features extensive forward-mounted weaponry designed to tear through the shields and armor of other spacecraft. So-named because their multiple-jump range allows them to form the vanguard of any military expedition, Vanguards have seen extensive service against the Vanduul.',
    },
    {
      name: 'Anvil Arrow',
      dd: 'Manufacturer: Anvil Aerospace <br />Focus: Light Fighter<br /><br />Unmatched design, blazing top speed, and ultra-responsive maneuverability make the Arrow the most agile scrapper in its class. With a robust weapons package that provides firepower to spare, this is truly the classic light fighter, updated for the next generation of combat.',
    },
    {
      name: 'Anvil C8X Pisces Expedition',
      dd: 'Manufacturer: Anvil Aerospace<br />Focus: Exploration / Pathfinder<br /><br />Sporting more guns and a limited-edition livery, the C8X Pisces Expedition turns the stout snub into a perfectly viable standalone exploration vessel. With its compact frame, deft maneuverability, and seating for three, the Pisces Expedition is ready to take on its own adventures.',
    },
    {
      name: 'Anvil C8 Pisces',
      dd: 'Manufacturer: Anvil Aerospace<br />Focus: Exploration / Pathfinder<br /><br />With its compact frame, deft maneuverability, and seating for three, the C8 Pisces snub craft, included with every Carrack, is built by Anvil Aerospace for scouting ahead or exploring environments inaccessible to its larger carrier ship. ',
    },
    {
      name: 'Anvil Carrack',
      dd: 'Manufacturer: Anvil Aerospace<br />Focus: Expedition / Pathfinder<br /><br />Adventure calls and Anvil Aerospace answers with the Carrack. Built to endure extreme conditions in both space and atmosphere, this self-sustaining explorer has more than earned its long-standing status as the go-to pathfinder for both military and civilian service. ',
    },
    {
      name: 'Anvil Carrack Expedition',
      dd: 'Manufacturer: Anvil Aerospace<br />Focus: Expedition / Pathfinder<br /><br />Adventure calls and Anvil Aerospace answers with the Carrack. Built to endure extreme conditions in both space and atmosphere, this self-sustaining explorer has more than earned its long-standing status as the go-to pathfinder for both military and civilian service. ',
    },
    {
      name: 'Anvil Gladiator',
      dd: 'Manufacturer: Anvil Aerospace<br />Focus: Bomber<br /><br />The civilian model of the Gladiator appeals to those that want explore the ‘Verse with a bit of added security. Supporting a maximum of two the Gladiator is perfectly equipped to explore and fight with or without a wingman. The Civilian model allows pilots to choose between an extra cargo hold or a bomb bay.',
    },
    {
      name: 'Anvil Hawk',
      dd: 'Manufacturer: Anvil Aerospace <br />Focus: Light Fighter<br /><br />A small, light fighter with an emphasis on weaponry, the Hawk boasts an impressive arsenal of lethal and non-lethal weapons, making it a perfect ship for independent bounty hunters or local security looking for a little more punch.',
    },
    {
      name: 'Anvil F7A Hornet',
      dd: "Manufacturer: Anvil Aerospace<br />Focus: Medium Fighter<br /><br />The UEE Navy's premier carrier-based fighter craft, the F7A is the front-line attack ship for military combat missions. While not outfitted for long range runs, the Hornet can take her share of hits... and dish out a consistent, powerful response.",
    },
    {
      name: 'Anvil F7A Hornet',
      dd: "Manufacturer: Anvil Aerospace<br />Focus: Medium Fighter<br /><br />The UEE Navy's premier carrier-based fighter craft, the F7A is the front-line attack ship for military combat missions. While not outfitted for long range runs, the Hornet can take her share of hits... and dish out a consistent, powerful response.",
    },
    {
      name: 'Anvil F7C Hornet',
      dd: "Manufacturer: Anvil Aerospace<br />Focus: Medium Fighter<br /><br />To the enemy, it is a weapon never to be underestimated. To allies, it's a savior. The F7C Hornet is the same dependable and resilient multi-purpose fighter that has become the face of the UEE Navy. The F7C is the foundation to build on and meet whatever requirements you have in mind.",
    },
    {
      name: 'Anvil F7C-M Super Hornet',
      dd: 'Manufacturer: Anvil Aerospace<br />Focus: Medium Fighter<br /><br />The closest to the Military load-out as is legally possible for a Civilian model, the F7C-M Super Hornet reattaches the ball turret and offers near milspec parts under the hood. Proving that two heads are better than one, a second seat has been added to split the logistic and combat duty, making the Super Hornet a truly terrifying mark to engage.',
    },
    {
      name: 'Anvil F7C-M Hornet Heartseeker',
      dd: "Manufacturer: Anvil Aerospace<br />Focus: Medium Fighter<br /><br />Designed for pilots whose true love is the pulse-pounding thrill of a harrowing dogfight, the limited-edition F7C-M Heartseeker is 'the one' for true combat die-hards. Loaded with top-of-the-line components and outfitted with four imposing Behring laser cannons, this fierce eradicator hones the legendary combat proficiency of the Super Hornet to give you the ultimate edge in space combat.",
    },
    {
      name: 'Anvil F7C-R Hornet Tracker',
      dd: 'Manufacturer: Anvil Aerospace<br />Focus: Pathfinder<br /><br />If the Ghost is made to hide, the Tracker is made to seek. The F7C-R Tracker boasts an advanced radar suite making it ideal for deep-space explorers who require depth and accuracy in their scan packages. Local militia and larger merc units will also repurpose Trackers to act as mobile C&C ships for their squadrons.',
    },
    {
      name: 'Anvil F7C-S Hornet Ghost',
      dd: "Manufacturer: Anvil Aerospace<br />Focus: Stealth Fighter<br /><br />Through a combination of low-emission drives, low-draw weapons, and Void Armor technology capable of diffusing scans, the F7C-S Ghost is built for the pilot who wants to keep a low profile. The Ghost is capable of slipping past the most ardent of observers to accomplish whatever goal you need to accomplish. Don't worry, we won't ask.",
    },
    {
      name: 'Anvil F7C Hornet Wildfire',
      dd: 'Manufacturer: Anvil Aerospace<br />Focus: Medium Fighter<br /><br />Created as part of the ‘Masters of Flight’ series in conjunction with the flight-sim Arena Commander, the Wildfire pays tribute to famed pilot Aria Reilly for her distinguished service with the legendary Squadron 42. This Hornet comes equipped with her own personally selected loadout preferences and a custom special edition livery honoring her iconic ship.',
    },
    {
      name: 'Anvil Hurricane',
      dd: "Manufacturer: Anvil Aerospace<br />Focus: Heavy Fighter<br /><br />Big things do come in small packages: the Hurricane is a fighting spacecraft that packs a deadly punch into a slight fuselage. The spacecraft compensates for its lack of creature comforts with its powerful armament: six guns capable of blasting their way through nearly anything. Hurricane pilots have yet to find an enemy shield they can't knock down.",
    },
    {
      name: 'Anvil F8 Lightning',
      dd: 'Manufacturer: Anvil Aerospace<br />Focus: Heavy Fighter<br /><br />Few vehicles employed by the proud men and women who serve in our Empire’s Navy inspire the awe of the legendary F8 Lightning. A force to be reckoned with, the F8 has secured Humanity’s freedom from numerous threats at home and abroad countless times.',
    },
    {
      name: 'Anvil Terrapin',
      dd: 'Manufacturer: Anvil Aerospace<br />Focus: Pathfinder<br /><br />Presenting the Anvil Aerospace U4A-3 Terrapin-class Scanning/Exploration Ship. The Terrapin was developed near the end of the 28th century to serve as the first ship in the Empire’s defensive restructuring of the Navy. The Terrapin’s watchword is protection, with extensive shield systems and armor layers designed to provide the maximum possible defense for pilot and crew. While it lacks the maneuverability of a dedicated fighter, it does maintain an advanced, hard-hitting array of weapons intended to keep the most fearsome Vanduul raider at bay.',
    },
    {
      name: 'Anvil Valkyrie',
      dd: 'Manufacturer: Anvil Aerospace <br />Focus: Military / Industrial<br /><br />The Valkyrie ups the ante on troop transport. Designed to carry up to twenty soldiers, as well as vehicles, to the most hostile locations, this conflict-ready mil-spec craft is a formidable force, both offensively and defensively. Built with military and private defense contractors in mind, the Valkyrie is one of the most efficient and effective personnel transports in its class.',
    },
    {
      name: 'Argo MOLE',
      dd: 'Manufacturer: Argo Astronautics<br />Focus: Mining<br /><br />Argo’s iconic multi-operator laser extractor, more commonly referred to as the MOLE, lets you work faster and more effectively than ever before, thanks to its patented trilateral mining system. Three independently controlled articulated extraction stations allow for maximum power and near-limitless versatility. The MOLE lives by the adage "many hands make for light work".',
    },
    {
      name: 'Argo MPUV Cargo',
      dd: "Manufacturer: Argo Astronautics<br />Focus: Light Freight<br /><br />The Argo Astronautics MPUV Cargo is a dedicated merchant transfer ship. A ubiquitous intergalactic stevedore, vast numbers of MPUV Cargos are responsible for loading and unloading goods onto ships that can't otherwise land on planets or drydocks, such as the Hull D and the Orion. Some hauler captains choose to own and operate their own Argo, while others prefer to contract with the local Argo owners found at many of the busier ports.",
    },
    {
      name: 'Argo MPUV Cargo',
      dd: "Manufacturer: Argo Astronautics<br />Focus: Light Freight<br /><br />The Argo Astronautics MPUV Cargo is a dedicated merchant transfer ship. A ubiquitous intergalactic stevedore, vast numbers of MPUV Cargos are responsible for loading and unloading goods onto ships that can't otherwise land on planets or drydocks, such as the Hull D and the Orion. Some hauler captains choose to own and operate their own Argo, while others prefer to contract with the local Argo owners found at many of the busier ports.",
    },
    {
      name: 'Argo MPUV Personnel',
      dd: 'Manufacturer: Argo Astronautics<br />Focus: Transport<br /><br />The Argo Astronautics MPUV-1P (commonly ‘Argo Personnel.’) This version of the Argo is geared towards a simple but incredibly important responsibility: moving grounds of people from place to place. The UEE Navy uses MPUV-1Ps extensively, and any new recruit can likely recall those terrifying moments in which such a ship carried them to their first space assignment. In civilian hands, Argo Personnel ships are adapted for everything from standard taxi services to use as makeshift combat dropships. The Argo MPUV-1P is capable of carrying up to eight humans and their equipment.',
    },
    {
      name: 'Argo RAFT',
      dd: 'Manufacturer: Argo Astronautics<br />Focus: Cargo<br /><br />The Argo RAFT features a hefty 96 SCU cargo hold, and is capable of carrying up to three standardized 32 SCU cargo containers. Perfect for entry-level haulers and old pros alike, the RAFT is an ideal solution for reliable local freight transport.',
    },
    {
      name: 'Banu Defender',
      dd: "Manufacturer: Banu <br />Focus: Light Fighter<br /><br />Meet the Banu Defender, a multi-crew fighter whose patchwork design highlights technology from a variety of species. Featuring modest accommodations for its crew and easy access to components, the Defender gets its name from the role it serves: the first line of defense against enemy attacks. That's why the Defender makes the ideal companion to the Merchantman: one to do the heavy hauling and the other to perform the deadly dogfighting.",
    },
    {
      name: 'C.O. HoverQuad',
      dd: "Manufacturer: Consolidated Outland<br />Focus: Transport<br /><br />Designed as a companion ground vehicle for the Nomad, the HoverQuad's sleek angular frame utilizes four gravlev pads for maximum maneuverability, making it the perfect transport across all kinds of surfaces.",
    },
    {
      name: 'C.O. Mustang Alpha',
      dd: 'Manufacturer: Consolidated Outland <br />Focus: Light Freight<br /><br />Inspired by Consolidated Outland CEO Silas Koerner’s cutting edge vision, the Mustang Alpha is a sleek, stylish spacecraft that uses ultralight alloys to push power ratios to the limits, albeit sometimes unsafely. And now, with the optional Cargo Carrier, you can have the Alpha’s advantages without sacrificing carrying capacity.',
    },
    {
      name: 'C.O. Mustang Beta',
      dd: 'Manufacturer: Consolidated Outland <br />Focus: Pathfinder<br /><br />The Mustang Beta, with its unprecedented range, is made for long duration flights. The factory standard Tarsus Leaper Jump Engine enables the Beta to travel to the galaxy’s farthest systems with ease, while the ship’s unique Com4T living quarters will make the journey feel like you never left home.',
    },
    {
      name: 'C.O. Mustang Delta',
      dd: 'Manufacturer: Consolidated Outland <br />Focus: Light Fighter<br /><br />While it may not be able to go toe to toe with some of the military specific ships, by reinforcing the Mustang’s already strong hull construction with Consolidated Outland’s own line of Cavalry Class Mass Reduction Armor, the Delta has a reduced cross-sectional signature that evens the playing field.',
    },
    {
      name: 'C.O. Mustang Gamma',
      dd: 'Manufacturer: Consolidated Outland <br />Focus: Racing<br /><br />Consolidated Outland’s design and engineering teams have managed to tweak and refine the Mustang into an admirable racer. The end result, the Mustang Gamma, has smooth acceleration, and power on demand thanks to an innovative package featuring three powerful Magma Jet engines for maximum thrust.',
    },
    {
      name: 'C.O. Mustang Omega',
      dd: 'Manufacturer: Consolidated Outland <br />Focus: Racing<br /><br />Consolidated Outland teamed up with custom tuning company Accelerated Mass Design to create a limited edition racer that features a ramped up fuel intake for faster recycling of the ship’s already impressive boost system. To cap off the collaboration, AMD enlisted resident underground artist Sektor8 to design the dynamic paint job.',
    },
    {
      name: 'C.O. Nomad',
      dd: 'Manufacturer: Consolidated Outland <br />Focus: Light Freight<br /><br />With the versatility of a medium-sized multi-purpose freighter packed into a stylish, compact frame, the Consolidated Outland Nomad is the model of self-sufficiency, the spirit of the open sky, and the perfect solution for anyone yearning to start a brand-new adventure.',
    },
    {
      name: 'Crusader Ares Star Fighter Inferno',
      dd: 'Manufacturer: Crusader Industries<br />Focus: Heavy Fighter<br /><br />Whether heading up a crew or hunting big ships solo, the Ares Inferno is a force to be reckoned with. This ballistic Gatling-equipped variant tears through gunship armor and turns smaller fighters to dust in seconds.',
    },
    {
      name: 'Crusader Ares Star Fighter Ion',
      dd: 'Manufacturer: Crusader Industries<br />Focus: Heavy Fighter<br /><br />Spark fear in the corridors of the most formidable gunships and frigates with the Ares Ion. This laser-equipped variant delivers extremely powerful shots to quickly disable the shields of even the biggest enemy vessels.',
    },
    {
      name: 'Crusader A2 Hercules Starlifter',
      dd: 'Manufacturer: Crusader Industries<br />Focus: Medium Freight / Gunship<br /><br />The A2 gunship has been used to devastating effect in airborne assaults, search and rescue operations, and landing initiatives. With more than double the firepower of the M2, and a custom bomb bay capable of delivering a staggering payload, the A2 caters to anyone hauling massive amounts of cargo through potentially unfriendly skies.',
    },
    {
      name: 'Crusader C2 Hercules Starlifter',
      dd: 'Manufacturer: Crusader Industries<br />Focus: Medium Freight<br /><br />Utilizing the patented Hercules military-grade spaceframe and expanding cargo capacity, while sacrificing barely any firepower, the C2 has taken the private sector by storm. It has become the industry standard for racing teams, ship dealers and manufacturers, construction orgs, mining corporations, and even large-scale touring entertainment outfits.',
    },
    {
      name: 'Crusader C2 Hercules Starlifter',
      dd: 'Manufacturer: Crusader Industries<br />Focus: Medium Freight<br /><br />Utilizing the patented Hercules military-grade spaceframe and expanding cargo capacity, while sacrificing barely any firepower, the C2 has taken the private sector by storm. It has become the industry standard for racing teams, ship dealers and manufacturers, construction orgs, mining corporations, and even large-scale touring entertainment outfits.',
    },
    {
      name: 'Crusader M2 Hercules Starlifter',
      dd: "Manufacturer: Crusader Industries<br />Focus: Medium Freight / Combat<br /><br />The M2 Hercules is the UEE's premier tactical starlifter. The ship's potent combination of capacity, maneuverability, and durability make it the obvious choice in large-scale transport, and a robust weapons package assures your cargo, and crew, gets to where they’re going in one piece.",
    },
    {
      name: 'Crusader Mercury Star Runner',
      dd: 'Manufacturer: Crusader Industries<br />Focus: Medium Freight<br /><br />If you need it there fast and unscathed, the Mercury checks all the boxes expected of a dependable courier vessel and then some. Built with the same engineering and design principals that has made Crusader Industries the go-to manufacturer for galactic transport on any scale, the Mercury Star Runner will let you stay ahead of schedule, trouble, and the competition.',
    },
    {
      name: 'Crusader Mercury Star Runner',
      dd: 'Manufacturer: Crusader Industries<br />Focus: Medium Freight<br /><br />If you need it there fast and unscathed, the Mercury checks all the boxes expected of a dependable courier vessel and then some. Built with the same engineering and design principals that has made Crusader Industries the go-to manufacturer for galactic transport on any scale, the Mercury Star Runner will let you stay ahead of schedule, trouble, and the competition.',
    },
    {
      name: 'Drake Buccaneer',
      dd: 'Manufacturer: Drake Interplanetary<br />Focus: Interdiction<br /><br />The Buccaneer has been designed from the ground up to fly and fight the way you live. No leather interiors or hyperpillows here: the Bucc is a scrapper designed to maneuver and fight above its weight class. This rough-and-tumble frontier fighter can be maintained in the worst of conditions in order to keep real, working space crews alive.',
    },
    {
      name: 'Drake Caterpillar',
      dd: "Manufacturer: Drake Interplanetary<br />Focus: Transport<br /><br />First introduced in 2871, Drake Interplanetary's Caterpillar has long proven to be a reliable, cost-effective multi-role vessel, capable of being outfitted for everything from mercantile operations to combat support. Long hailed as a hard-fought alternative to the ubiquitous Hull series, the Caterpillar is a freighter that doesn't skimp on weaponry or customization.",
    },
    {
      name: 'Drake Cutlass Black',
      dd: 'Manufacturer: Drake Interplanetary<br />Focus: Medium Fighter / Medium Freight<br /><br />Drake Interplanetary claims that the Cutlass Black is a low-cost, easy-to-maintain solution for local in-system militia units. The larger-than-average cargo hold, RIO seat and dedicated tractor mount are, the company literature insists, for facilitating search and rescue operations.',
    },
    {
      name: 'Drake Cutlass Blue',
      dd: 'Manufacturer: Drake Interplanetary<br />Focus: Interdiction<br /><br />Sleek, mean, and royal. The Cutlass Blue adds missiles, a more aggressive engine, and Durasteel holding cells in the cargo bay to the standard model. The Cutlass Blue is the outworld militia standard ship of choice for patrols.',
    },
    {
      name: 'Drake Cutlass Red',
      dd: 'Manufacturer: Drake Interplanetary<br />Focus: Medical<br /><br />The Cutlass Red converts the standard cargo hold to a well-equiped medical facility including an Autodoc. This starbound ambulance features the Nav-E7 Echo Transponder, a long range scanner, and a Secure Plus Docking Collar, making it ideal for search and rescue. This model also features a unique Red Crossbones skin.',
    },
    {
      name: 'Drake Cutlass Steel',
      dd: "Manufacturer: Drake Interplanetary<br />Focus: Medium Fighter / Medium Troop Transport<br /><br />The Cutlass Steel converts the standard cargo hold in to a well-equipped troop transport worthy of the Drake name. With a boost in weaponry and the addition of mounted guns, you'll be able to get your people to the frontlines of the hottest of drop zones and back out again.",
    },
    {
      name: 'Drake Dragonfly',
      dd: 'Manufacturer: Drake Interplanetary<br />Focus: Racing<br /><br />The Drake Dragonfly is the perfect snub ship for anyone looking to live on the edge. With nothing separating the pilot from the dangers of space, the Dragonfly is as much an adventure as a ship! Dual-mode conversion allows the Dragonfly to operate on the ground or in space, and a rear-facing second seat means you can even take a passenger!',
    },
    {
      name: 'Drake Herald',
      dd: 'Manufacturer: Drake Interplanetary<br />Focus: Medium Data<br /><br />The Drake Herald is a small, armored ship designed to safely get information from Point A to Point B. Featuring a powerful central engine (for high speed transit and generating the power needed for effective data encryption/containment), advanced encryption software and an armored computer core, the Herald is unique among personal spacecraft in that it is designed to be easily ‘cleaned’ when in danger of capture.',
    },
    {
      name: 'Esperia Prowler',
      dd: 'Manufacturer: Esperia<br />Focus: Dropship<br /><br />named after the UPE military designation, the Prowler is a modernized version of the infamous Tevarin boarding craft from the First Tevarin War. The Prowler’s effectiveness as a rapid personnel deployment vehicle was mainly due to its silence. With the Prowler, you will find the perfect fusion of two cultures: the elegance and effectiveness of the Tevarin war machine combined with the reliability of modern UEE technology.',
    },
    {
      name: 'Esperia Talon',
      dd: 'Manufacturer: Esperia<br />Focus: Light Fighter<br /><br />The Talon represents Esperia\'s continuing effort to preserve historically significant Tevarin ship designs. A maneuverable single-seat combat ship with light armor but powerful, directional "Phalanx" shields, the Talon is made to strike first and strike hard before using the shields to cover its escape.',
    },
    {
      name: 'Esperia Talon Shrike',
      dd: 'Manufacturer: Esperia<br />Focus: Light Fighter<br /><br />The Talon represents Esperia\'s continuing effort to preserve historically significant Tevarin ship designs. A maneuverable single-seat combat ship with light armor but powerful, directional "Phalanx" shields, the Talon is made to strike first and strike hard before using the shields to cover its escape. The infamous Shrike variant model is armed with additional internal missile racks.',
    },
    {
      name: 'Kruger P-52 Merlin',
      dd: 'Manufacturer: Kruger Intergalactic<br />Focus: Snub Fighter<br /><br />Designed in conjunction with RSI, this elegant short-range snub fighter represents the first ship produced under the Kruger Intergalactic brand. Utilizing centuries of manufacturing expertise, the compact precision of the Kruger hull blends perfectly with the trusted RSI thrusters to grant the Merlin exceptional handling and maneuverability while ensuring that it is capable of fulfilling a variety of roles from combat to scouting to scanning. ',
    },
    {
      name: 'Kruger P-72 Archimedes',
      dd: 'Manufacturer: Kruger Intergalactic<br />Focus: Racer<br /><br />Whether for added security, exploring a system or simply the joy of flying, the Kruger Intergalactic’s P-72 Archimedes snub craft was designed to deliver exceptional handling and nimble acceleration in a sleek and stylish package. ',
    },
    {
      name: 'MISC Freelancer',
      dd: 'Manufacturer: MISC<br />Focus: Medium Freight<br /><br />Freelancers are used as long haul merchant ships by major corporations, but they are just as frequently repurposed as dedicated exploration vessels by independent captains who want to operate on the fringes of the galaxy.',
    },
    {
      name: 'MISC Freelancer DUR',
      dd: 'Manufacturer: MISC<br />Focus: Expedition <br /><br />The Freelancer DUR variant specializes in exploration. Sacrificing 25% cargo capacity of the standard Freelancer for an enhanced jump drive, a more advanced scanner, and an expanded fuel tank may seem like a bad call to some, but those who value discovery over profit will find it to be their ship of choice.',
    },
    {
      name: 'MISC Freelancer MAX',
      dd: 'Manufacturer: MISC<br />Focus: Medium Freight<br /><br />Freelancer variant with additional cargo capacity at the expense of weapons. The Freelancer MAX variant sacrifices weaponry for an increased cargo capacity making it ideal for equipment or raw materials transport.',
    },
    {
      name: 'MISC Freelancer MIS',
      dd: 'Manufacturer: MISC<br />Focus: Gunship<br /><br />The Freelancer MIS is a limited edition militarized variant of the classic mercantile ship developed by the UEE. These were produced in very small quantity due to some early payload incidents. This version sacrifices the majority of the cargo capacity to make way for missiles.',
    },
    {
      name: 'MISC Prospector',
      dd: 'Manufacturer: MISC<br />Focus: Mining<br /><br />For years, the Prospector has been the universe’s preferred mining vessel for solo operators. Featuring MISC’s sleek design sensibility and a bevy of upgraded high-tech mining tools, the 2947 Prospector perfectly balances form and functionality. ',
    },
    {
      name: 'MISC Prospector',
      dd: 'Manufacturer: MISC<br />Focus: Mining<br /><br />For years, the Prospector has been the universe’s preferred mining vessel for solo operators. Featuring MISC’s sleek design sensibility and a bevy of upgraded high-tech mining tools, the 2947 Prospector perfectly balances form and functionality. ',
    },
    {
      name: 'MISC Razor',
      dd: "Manufacturer: MISC <br />Focus: Racing<br /><br />This advanced racer features an advanced composite spaceframe that puts pure speed ahead of everything else... it's the ship for pilots who want to leave the competition in the dust.",
    },
    {
      name: 'MISC Razor EX',
      dd: 'Manufacturer: MISC <br />Focus: Stealth<br /><br />Outfitted with signature-reducing materials, the Razor EX was a specialty build for the UEE Advocacy for use in surveillance and extraction operations. Although the EX was ultimately rejected for widespread use, MISC released a variation of the model for the public who were looking to keep a lower profile.',
    },
    {
      name: 'MISC Razor LX',
      dd: 'Manufacturer: MISC <br />Focus: Luxury<br /><br />The Razor gets supercharged. The LX features an overclocked engine to unleash blazing top speeds. This power comes at a cost with reduced maneuverability and armaments making it ideal for straight-shot racing. But who needs weapons when you’re leaving your competition in the dust.',
    },
    {
      name: 'MISC Reliant Kore',
      dd: 'Manufacturer: MISC<br />Focus: Light Freight<br /><br />With the Reliant Kore, MISC adds to its already impressive lineup of ships, a smaller introductory-class spacecraft. Utilizing advanced Xi’An designs, the Reliant features broad, sleek wings, omni-directional thrusters and a fully-articulated two-seat cockpit that supports horizontal and vertical flight modes. All of this combines with a larger carrying capacity than many ships in its class to make the Kore a natural choice for short-range hauling, or with the simple addition of a few optional components, this can-do ship can do anything you dream of.',
    },
    {
      name: 'MISC Reliant Mako',
      dd: 'Manufacturer: MISC<br />Focus: Reporting<br /><br />The Empire depends on up-to-the-second information, which is why reporters need to be able to go where the news is happening: wherever, whenever. Enter the Mako, all the flexibility and dependability of a MISC Reliant combined with a state-of-the-art Cernan camera package to capture every moment as it happens with the clarity and accuracy that makes headlines. ',
    },
    {
      name: 'MISC Reliant Sen',
      dd: 'Manufacturer: MISC<br />Focus: Light Science<br /><br />Magellan, Pierce, Croshaw, names that echo through history thanks to their adventurous spirit, a curious nature, and a reliable ship. The Reliant Sen is a versatile mobile science platform; outfitted with long range capabilities to take you further, longer, and the advanced Samos sensor suite. Perfect for the aspiring explorer who wants to whisper their name into the halls of history.',
    },
    {
      name: 'MISC Reliant Tana',
      dd: 'Manufacturer: MISC<br />Focus: Light Fighter<br /><br />With Humanity ever-expanding through the universe, the need for a versatile lightweight fighter has expanded with it. Easy to maintain with a rugged construction, the Reliant Tana makes for an ideal choice for frontier and outpost defense thanks to its custom high-yield power plant, stronger shields, and additional weapon mounts.',
    },
    {
      name: 'MISC Starfarer',
      dd: 'Manufacturer: MISC<br />Focus: Heavy Refueling<br /><br />The Starfarer differs from traditional bulk freighters in one key way: it is a dedicated fuel platform. The Starfarer is designed not only to load, store and protect fuel stasis units, it is designed to take in spaceborne hydrogen and then refine it for use without landing. The Starfarer can be used to ferry traditional bulk cargo pods (see diagram) but in such cases the fuel refining equipment would be useless. This equipment is modular and can be swapped out for another mission package for dry operations!',
    },
    {
      name: 'MISC Starfarer Gemini',
      dd: 'Manufacturer: MISC<br />Focus: Heavy Refueling<br /><br />The United Empire of Earth military uses an adapted ‘rough and tumble’ variant of the Starfarer for their front line operations. The G2M Gemini, more commonly the Starfarer Gemini or ‘Star G,’ trades some cargo capacity and maneuverability in exchange for reinforced armor, increased shielding, more powerful engines and stronger versions of the three manned turrets.',
    },
    {
      name: 'Origin 100i',
      dd: "Manufacturer: Origin Jumpworks<br />Focus: Starter / Touring<br /><br />Tour the universe with the perfect coupling of luxury and performance. The 100i features Origin Jumpworks' patented AIR fuel system, making it the most efficient and eco-friendly ship on the market. Capable of long distance flights that most ships of its size aren't equipped for, the 100i is perfect for solo pilots looking to turn heads without sacrificing functionality or reliability.",
    },
    {
      name: 'Origin 125a',
      dd: "Manufacturer: Origin Jumpworks<br />Focus: Starter / Light Fighter<br /><br />Risks were meant to be taken, but why risk running out of fuel in the heat of battle? With the AIR fuel system, a souped-up weapons package, and all the luxury and refinement you've come to expect from Origin Jumpworks, the 125a has been designed for the discerning maverick.",
    },
    {
      name: 'Origin 135c',
      dd: "Manufacturer: Origin Jumpworks<br />Focus: Starter / Light Freighter<br /><br />With a deceptive amount of storage space in its sleek, stylish frame, and Origin's patented AIR fuel system, the 135c model is the obvious choice for musicians, couriers, and anyone trying to get the party started. Get it there fast, and look good while you're doing it.",
    },
    {
      name: 'Origin 300i',
      dd: "Manufacturer: Origin Jumpworks<br />Focus: Touring<br /><br />If you're going to travel the stars... why not do it in style? The 300i is Origin Jumpworks' premiere luxury spacecraft. It is a sleek, silver killer that sends as much of a message with its silhouette as it does with its particle cannons.",
    },
    {
      name: 'Origin 315p',
      dd: "Manufacturer: Origin Jumpworks<br />Focus: Pathfinder<br /><br />Exploration is man's highest calling. Prepare to chart distant horizons with man's most sophisticated piece of technology, the Origin 315p. Featuring a more robust power plant and a custom scanning package, exclusively designed by Chimera Communications.",
    },
    {
      name: 'Origin 325a',
      dd: "Manufacturer: Origin Jumpworks<br />Focus: Interdiction<br /><br />Just because it's a rough galaxy doesn't mean you need to sacrifice your comfort: the 325a can come out on top in any dogfight. The 325a features an advanced weapon payload as well as a custom targeting system designed especially for the 325a by WillsOp.",
    },
    {
      name: 'Origin 350r',
      dd: "Manufacturer: Origin Jumpworks<br />Focus: Racing<br /><br />Origin Jumpwork's 300 series is the ultimate fusion of elegance and astroengineering. Every component is individually calibrated to ensure your ship stays in perfect harmony. By far the fastest member of the family, the 350r refocus the 300's power and translates it into pure speed. ",
    },
    {
      name: 'Origin 400i',
      dd: 'Manufacturer: Origin Jumpworks<br />Focus: Pathfinder<br /><br />To explore the stars is a most noble endeavor, and Origin Jumpworks has risen to the occasion in crafting the 400i high-performance pathfinder. With class-leading range, substantial defensive capabilities, and a factory-equipped scanning array, the 400i is ready to take on the harshest corners of the galaxy while maintaining the comfort and elegance Origin is known for. ',
    },
    {
      name: 'Origin 600i',
      dd: 'Manufacturer: Origin Jumpworks<br />Focus: Touring<br /><br />This multi-role luxury vessel from Origin Jumpworks features an exquisitely detailed hull design that balances performance and versatility in a sleek and timeless form. The 600i is designed with a cutting-edge modular technology, allowing you to customize your ship for your needs.',
    },
    {
      name: 'Origin 600i',
      dd: 'Manufacturer: Origin Jumpworks<br />Focus: Touring<br /><br />This multi-role luxury vessel from Origin Jumpworks features an exquisitely detailed hull design that balances performance and versatility in a sleek and timeless form. The 600i is designed with a cutting-edge modular technology, allowing you to customize your ship for your needs.',
    },
    {
      name: 'Origin 600i Executive Edition',
      dd: 'Manufacturer: Origin Jumpworks<br />Focus: Touring<br /><br />This multi-role luxury vessel from Origin Jumpworks features an exquisitely detailed hull design that balances performance and versatility in a sleek and timeless form. The 600i is designed with a cutting-edge modular technology, allowing you to customize your ship for your needs.',
    },
    {
      name: 'Origin 600i Touring',
      dd: 'Manufacturer: Origin Jumpworks<br />Focus: Touring<br /><br />This multi-role luxury vessel from Origin Jumpworks features an exquisitely detailed hull design that balances performance and versatility in a sleek and timeless form. The 600i is designed with a cutting-edge modular technology, allowing you to customize your ship for your needs.',
    },
    {
      name: 'Origin 85X Limited',
      dd: 'Manufacturer: Origin Jumpworks<br />Focus: Touring<br /><br />Elegantly styled and meticulously constructed, the 85X is a versatile and comprehensive away-vessel that features precision control in and out of atmosphere. Utilizing much of the same thruster technology as the 300 series, it has the power of a racer with the reliability of a touring ship. Whether descending down to the planet surface or taking in the sights of your system, this runabout continues Origin’s proud tradition of turning heads.',
    },
    {
      name: 'Origin 890 Jump',
      dd: 'Origin 890 Jump',
    },
    {
      name: 'Origin M50 Interceptor',
      dd: "Manufacturer: Origin Jumpworks<br />Focus: Racing<br /><br />If you want to get from point A to point B as quickly as possible and with as much style as possible then Origin's M50 is for you. Featuring supercharged engines that counter a tiny weapons loadout, the M50 is a ship for going FAST.",
    },
    {
      name: 'RSI Aurora CL',
      dd: 'Manufacturer: RSI<br />Focus: Light Freight<br /><br />Customized for mercantile and trading excursions, the Aurora Clipper is the perfect vessel for aspiring entrepreneurs and seasoned traders alike. Swapping a smaller power plant and armor capabilities for an expanded cargo capacity, the Clipper ups the ante for personal merchant craft.',
    },
    {
      name: 'RSI Aurora ES',
      dd: "Manufacturer: RSI<br />Focus: Pathfinder<br /><br />The Aurora is the modern day descendant of the Roberts Space Industries X-7 spacecraft which tested the very first jump engines. Utilitarian to a T, the Aurora is the perfect beginner's ship: what it lacks in style it makes up for in ample room for upgrade modules.",
    },
    {
      name: 'RSI Aurora LN',
      dd: 'Manufacturer: RSI<br />Focus: Light Fighter<br /><br />With a more robust shield generator and a pair of additional weapon hard points, the Legionnaire is a dedicated combat fighter, built to handle any obstacle the universe can throw at you.',
    },
    {
      name: 'RSI Aurora LX',
      dd: 'Manufacturer: RSI<br />Focus: Pathfinder<br /><br />Be proud of your roots with the brand-new Aurora Deluxe, built for the discerning pilot who never forgets where he or she came from. The LX features patent leather interior to guarantee comfort for those long stretches in the deep black.',
    },
    {
      name: 'RSI Aurora MR',
      dd: "Manufacturer: RSI<br />Focus: Light Fighter<br /><br />Perhaps you're looking for something that offers carrying capacity but has combat capabilities too? The Aurora Marque comes with a pair of Behring-quality lasers and a high quality gun cooler system.",
    },
    {
      name: 'RSI Constellation Andromeda',
      dd: "Manufacturer: RSI<br />Focus: Medium Freight / Gunship<br /><br />The Constellation Andromeda, a multi-person freighter, is the most popular ship in RSI's current production array. Constellations are beloved by smugglers and merchants alike because they are modular, high powered... and just downright iconic-looking.",
    },
    {
      name: 'RSI Constellation Aquila',
      dd: 'Manufacturer: RSI<br />Focus: Expedition<br /><br />Explore any distant horizons! The Constellation Aquila features a redesigned cockpit for maximum visibility, advanced sensors and an onboard Ursa rover for planetary exploration. Let’s see what’s out there!',
    },
    {
      name: 'RSI Constellation Phoenix',
      dd: 'Manufacturer: RSI<br />Focus: Touring<br /><br />A dedicated luxury spacecraft for the discerning star captain. The Constellation Phoenix can be operated as an organization command ship and features a luxurious redesigned interior. Includes a hidden sensor-dampened area for your most precious cargo. The Phoenix comes with a Lynx rover and a Kruger P-72 Archimedes Fighter.',
    },
    {
      name: 'RSI Constellation Taurus',
      dd: 'Manufacturer: RSI<br />Focus: Medium Freight<br /><br />Enjoy the adventure of a multi-crew Constellation on a budget! The Constellation Taurus is a dedicated freighter. Fully configurable but without all the bells-and-whistles, the Taurus is a great way to get started with crewed ships.',
    },
    {
      name: 'RSI Mantis',
      dd: 'Manufacturer: RSI<br />Focus: Interdiction<br /><br />Stop ships dead in their tracks with RSI’s premier Quantum Enforcement ship. The Mantis features a tailor-made Quantum Enforcement Device from Wei-Tek, capable of ripping ships out of QT with its Quantum Snare and preventing hasty escapes with its Quantum Dampener.',
    },
    {
      name: 'Origin 600i Touring',
      dd: 'Manufacturer: Origin Jumpworks<br />Focus: Touring<br /><br />This multi-role luxury vessel from Origin Jumpworks features an exquisitely detailed hull design that balances performance and versatility in a sleek and timeless form. The 600i is designed with a cutting-edge modular technology, allowing you to customize your ship for your needs.',
    },
    {
      name: 'Esperia Blade',
      dd: "Manufacturer: Esperia<br />Focus: Light Fighter<br /><br />These light fighters, designation 'Blade', are often used by Vanduul as scouts and first wave assault crafts. They have also served well as skirmisher units due to their speed allowing them to chase down any ships attempting to flee the area. For some decades, United Empire of Earth aggressor squadrons have operated replica Blade fighters produced under exclusive contract by Esperia, Inc. ",
    },
    {
      name: 'Esperia Glaive',
      dd: 'Manufacturer: Esperia<br />Focus: Medium Fighter<br /><br />The Glaive is a symmetrical version of the Scythe. Generally flown by Vanduul with more combat experience, they are better armed and have two huge blades/wings as opposed to one on the standard Scythe.',
    },
    {
      name: 'Vanduul Scythe',
      dd: "Manufacturer: Esperia<br />Focus: Medium Fighter<br /><br />Fast becoming the symbol of the Vanduul Race, the Scythe is the foot soldier in every raid and the target of every human fighter pilot. Featuring a hefty weapons payload, the Scythe's real asset is its maneuverability, found in the twin main and twelve maneuvering thrusters.",
    },
    {
      name: 'Aopoa Nox',
      dd: 'Manufacturer: Aopoa<br />Focus: Racing<br /><br />Hit the skids with the 2947 Nox. This speedy and maneuverable open-canopy racer from Aopoa is capable of zipping along planet surfaces or deep space. Available for the first time in Human space, the Nox has been specifically redesigned for Human pilots and is ready to race.',
    },
    {
      name: 'Aopoa Nox Kue',
      dd: 'Manufacturer: Aopoa <br />Focus: Racing<br /><br />Deriving its name from the Xi’an word for ‘thrust,’ the Nox Kue delivers that and more. This limited version of the open-canopy racer features a stunning brushed-silver finish and was specifically created to celebrate the inaugural sale of the first Nox for Human riders.',
    },
    {
      name: 'Aopoa Khartu-al',
      dd: "Manufacturer: Aopoa<br />Focus: Light Fighter<br /><br />The Xi'an Aopoa corporation manufactures an export model of the Qhire Khartu, the Khartu-al, for sale to human civilians as a dedicated scout/explorer. The export model features the same Xi'an maneuvering rig, but control surfaces modified for Human use and a more limited armament.",
    },
    {
      name: 'Anvil Ballista',
      dd: 'Manufacturer: Anvil Aerospace<br />Focus: Anti-Aircraft<br /><br />Keep your airspace clear of danger with the Anvil Ballista. Originally designed to defend outposts from Vanduul attacks, this mobile missile defense system packs a powerful loadout, allowing the Ballista to stand firm against any threat, whether it arrives by air or land.',
    },
    {
      name: 'Anvil Spartan',
      dd: 'Manufacturer: Anvil Aerospace<br />Focus: Troop Transport<br /><br />Built on Anvil’s robust Atlas Platform, the same chassis used for their devastating Ballista air defense system, the Spartan is a fully armored transport outfitted with eight jump seats. The Spartan’s rugged frame makes it perfect for all kinds of terrain, and its remote Gatling turret helps clear the area for easier deployment.',
    },
    {
      name: 'Greycat PTV',
      dd: 'Manufacturer: Greycat Industrial<br />Focus: Personal Transport<br /><br />The Greycat PTV is a simple and practical buggy frequently used to reduce long walk distance in large hangers or outpost.',
    },
    {
      name: 'Greycat ROC',
      dd: 'Manufacturer: Greycat Industrial<br />Focus: Mining<br /><br />By focusing on the essentials of terrestrial-based mining, Greycat Industrial designed their hardworking, no-nonsense ROC (Remote Ore Collector) to complement the miners who use it. From its precision gimbaled mining arm to its all-terrain wheels, this solo-operated vehicle shows how important it is to have the right tool for the job. ',
    },
    {
      name: 'Greycat ROC-DS',
      dd: "Manufacturer: Greycat Industrial<br />Focus: Mining<br /><br />By focusing on the essentials of terrestrial-based mining, Greycat Industrial designed their hardworking, no-nonsense ROC-DS (Remote Ore Collector Dual Seat) to let mining pairs do more while in the field. The ROC-DS raises the ground-mining game by adding extra cargo capacity and a second seat to operate the precision gimbaled mining arm. Greycat even upgraded the driver's cab with a protective enclosure to allow for longer excursions in harsh conditions. With the ROC-DS, mining duos now have the right tool to comfortably collect more ore. ",
    },
    {
      name: 'RSI Ursa Rover',
      dd: 'Manufacturer: RSI<br />Focus: Exploration<br /><br />Built by RSI specifically for the planetside explorer, the Ursa Rover offers civilians military-grade all-terrain capabilities and stands as the rugged standard in ground-based scouting, mapping and discovery applications.',
    },
    {
      name: 'Tumbril Cyclone',
      dd: 'Manufacturer: Tumbril Land Systems<br />Focus: Exploration / Recon<br /><br />With a potent combination of speed, maneuverability, and rugged durability, the Cyclone is a perfect choice for local deliveries and transport between planetside homesteads and outposts.',
    },
    {
      name: 'Tumbril Cyclone AA',
      dd: 'Manufacturer: Tumbril Land Systems <br />Focus: Combat<br /><br />A battlefield equalizer, the Cyclone AA comes equipped with a surface-to-air missile and countermeasure package to provide cover for ground troops against airborne targets.',
    },
    {
      name: 'Tumbril Cyclone MT',
      dd: 'Manufacturer: Tumbril Land Systems <br />Focus: Combat<br /><br />Following the success of the initial release of the Cyclone, Tumbril has taken your feedback and expanded their popular line of tactical vehicles with the all new Cyclone MT. Outfitted with a combination gun and missile turret, this module offers increased combat options in the field.',
    },
    {
      name: 'Tumbril Cyclone RC',
      dd: 'Manufacturer: Tumbril Land Systems <br />Focus: Racing<br /><br />For those who like to push the limits of speed, the Cyclone RC features a modified intake system to allow for controlled bursts of speed as well as tools to customize handling.',
    },
    {
      name: 'Tumbril Cyclone RN',
      dd: 'Manufacturer: Tumbril Land Systems <br />Focus: Recon<br /><br />Stay mobile and aware with the Cyclone RN. This light reconnaissance vehicle is the perfect solution for scouting runs, providing fast and detailed scans of terrain as well as beacon placement.',
    },
    {
      name: 'Tumbril Cyclone TR',
      dd: 'Manufacturer: Tumbril Land Systems <br />Focus: Combat<br /><br />Designed for militia and security use, the Cyclone TR module features upgraded armor and a single Human-operated turret capable of mounting a Size 1 weapon and a responsive 360° field of fire.',
    },
    {
      name: 'Tumbril Nova',
      dd: "Manufacturer: Tumbril Land Systems<br />Focus: Combat<br /><br />Tumbril's new Nova is a classic battlefield warrior, reimagined for the modern age. This heavy tank offers a devastating combination of weaponry to eliminate threats on the ground and in the air.",
    },
  ])
}
