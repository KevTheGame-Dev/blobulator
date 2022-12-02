# Plans And Notes
This page details out the planned steps for each tool, including what is required for release candidates. It also contains some misc notes.

---
## Clear Calculator Steps
- Design calculator architecture and item/champ stat formats
- Build out calculator functions
- Pathing Calculator must be at **MVP 1** in order to progress here
- **MVP 1**: a working clear time calculator for 1 clear path for a simple champ (rip zac) maybe olaf or mundo or something simple
- **MVP 2**: expand to multiple clear paths
- **MVP 3**: UI
- **V1**: Soft go live with github pages
- **V1.1**: Compare clear feature (between item builds)
- **V1.2**: Add support for a second champ
- **V1.3**: Support for comparing champ clears
- **V1.x**: Support for more champs, more items

---
## Pathing Calculator Steps
- Distance calculator between 2 points
- Time to Travel calculator between 2 points (abs)
- **MVP 1**: Time to Travel v2 w/ pathing logic (Basic code-graph might be easiest here? Graph needs to mimic the Rift)
- SVGs of assets (for camps, could use simplified clash logos)
- **MVP 2**: UI that allows you to select 2 points on the map and provided a movespeed, tells you how long to travel between
- **V1**: Soft go live with github pages
- **V1.1**: Support for different dragon maps
- **V1.x**: Support for special cases (champ abilities, flash, ect)

---
## Reference links:
- Rift img lrg: https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blteee710504baccf73/618e1709d11a66021302719a/objective_bounty_map.png?disposition=inline
- Rift svg reference: https://preview.redd.it/fgrxon2d9km71.png?width=750&format=png&auto=webp&s=6e0157b2ec829080cb4f137c1e9aa99a3f0f30cd
- Clash logos: https://leagueoflegends.fandom.com/wiki/Clash#Logos
- SVG editor: inkscape.org
- RIOT API: https://developer.riotgames.com/docs/lol

---
## Factors Included in Calculating Zac Clear Speed
- Current Stats
- XP to track lvls, health, AD, armor growth
- Ability damages, track ability CDs (including blob pickups)
- Item damage
- Distances and walk times
- Monster health, dmg / s, ect
- Camp leash ranges
- Factor in Smite
- Configurable Clear Pathing
- Blast cones
