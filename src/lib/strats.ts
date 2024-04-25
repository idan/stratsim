/** stratagem atlas 

# General 6
* Reinforcement: ▲, ▼, ▶, ◀, ▲
* Resupply: ▼, ▼, ▲, ▶
* SOS Beacon: ▲, ▼, ▶, ▲
* SEAF Artillery: ▶, ▲, ▲, ▼
* Hellbomb: ▼, ▲, ◀, ▼, ▲, ▶, ▼, ▲
* Super Earth Flag: ▼, ▲, ▼, ▲

# Weapons 9
* Machine Gun: ▼, ◀, ▼, ▲, ▶
* Anti-Material Rifle: ▼, ◀, ▶, ▲, ▼
* Stalwart: ▼, ◀, ▼, ▲, ▲, ◀
* Expendable Anti-Tank: ▼, ▼, ◀, ▲, ▶
* Recoiless Rifle: ▼, ◀, ▶, ▶, ◀
* Flamethrower: ▼, ◀, ▲, ▼, ▲
* Auto-Canon: ▼, ◀, ▼, ▲, ▲, ▶
* Railgun: ▼, ▶, ▼, ▲, ◀, ▶
* Spear: ▼, ▼, ▲, ▼, ▼

# Orbital 7
* Orbital Gatling Barrage: ▶, ▼, ◀, ▲, ▲
* Orbital Airburst Strike: ▶, ▶, ▶
* Orbital 120MM HE Barrage: ▶, ▶, ▼, ◀, ▶, ▼
* Orbital 380MM HE Barrage: ▶, ▼, ▲, ▲, ◀, ▼, ▼
* Orbital Walking Barrage: ▶, ▼, ▶, ▼, ▶, ▼
* Orbital Laser: ▶, ▼, ▲, ▶, ▼
* Orbital Railgun Strike: ▶, ▲, ▼, ▼, ▶

# Hangar 9
* Eagle Strafing Run: ▲, ▶, ▶
* Eagle Airstrike: ▲, ▶, ▼, ▶
* Eagle Cluster Bomb: ▲, ▶, ▼, ▼, ▶
* Eagle Napalm Strike: ▲, ▶, ▼, ▲
* Jump Pack: ▼, ▲, ▲, ▼, ▲
* Eagle Smoke Strike: ▲, ▶, ▼, ▲
* Eagle 110MM Rocket Pods: ▲, ▶, ▲, ◀
* Eagle 500KG Bomb: ▲, ▶, ▼, ▼, ▼
* Eagle Rearm: ▲, ▲, ◀, ▲, ▶

# Bridge 7
* Orbital Precision Strike: ▶, ▶, ▲
* Orbital Gas Strike: ▶, ▶, ▼, ▶
* Orbital EMS Strike: ▶, ▶, ◀, ▼
* Orbital Smoke Strike: ▶, ▶, ▼, ▲
* HMG Placement: ▼, ▲, ◀, ▶, ▶, ◀
* Shield Generator: ▼, ▼, ◀, ▶, ◀, ▶
* Tesla Tower: ▼, ▲, ▶, ▲, ◀, ▶

# Engineering 9
* Anti-Personnel Minefield: ▼, ◀, ▲, ▶
* Supply Pack: ▼, ◀, ▼, ▲, ▲, ▼
* Grenade Launcher: ▼, ◀, ▲, ◀, ▼
* Laser Canon: ▼, ◀, ▼, ▲, ◀
* Incendiary Mines: ▼, ◀, ◀, ▼
* Guard Dog Rover: ▲, ▼, ◀, ▲, ▶, ▶
* Ballistic Shield: ▼, ◀, ▼, ▼, ▲, ◀
* Arc Thrower: ▼, ▶, ▼, ▲, ◀, ◀
* Shield Generator Pack: ▼, ▲, ◀, ▶, ◀, ▶

# Robotics 7
* Machine Gun Sentry: ▼, ▲, ▶, ▶, ▲
* Gatling Sentry: ▼, ▲, ▶, ◀
* Mortar Sentry: ▼, ▲, ▶, ▶, ▼
* Guard Dog: ▼, ▲, ◀, ▲, ▶, ▼
* Autocanon Sentry: ▼, ▲, ▶, ▲, ◀, ▲
* Rocket Sentry: ▼, ▲, ▶, ▶, ◀
* EMS Mortar Sentry: ▼, ▲, ▶, ▼, ▶


*/

export type Direction = "up" | "down" | "left" | "right";
export const DirectionKeys: Record<string, Direction> = {
  "w": "up",
  "s": "down",
  "d": "right",
  "a": "left",
}
export type StratagemType =
  | "weapons"
  | "orbital"
  | "hangar"
  | "bridge"
  | "engineering"
  | "robotics"
  | "general";
export type Stratagem = {
  code: Direction[];
  name: string;
  type: string;
};


export const stratagems: Stratagem[] = [
  // General
  { code: ["down", "up", "right", "left", "up"], name: "Reinforcement", type: "general" },
  { code: ["down", "down", "up", "right"], name: "Resupply", type: "general" },
  { code: ["up", "down", "right", "up"], name: "SOS Beacon", type: "general" },
  { code: ["right", "up", "up", "down"], name: "SEAF Artillery", type: "general" },
  { code: ["down", "up", "left", "down", "up", "right", "down", "up"], name: "Hellbomb", type: "general" },
  { code: ["down", "up", "down", "up"], name: "Super Earth Flag", type: "general" },

  // Weapons
  { code: ["down", "left", "down", "up", "right"], name: "Machine Gun", type: "weapons" },
  { code: ["down", "left", "right", "up", "down"], name: "Anti-Material Rifle", type: "weapons" },
  { code: ["down", "left", "down", "up", "up", "left"], name: "Stalwart", type: "weapons" },
  { code: ["down", "down", "left", "up", "right"], name: "Expendable Anti-Tank", type: "weapons" },
  { code: ["down", "left", "right", "right", "left"], name: "Recoiless Rifle", type: "weapons" },
  { code: ["down", "left", "up", "down", "up"], name: "Flamethrower", type: "weapons" },
  { code: ["down", "left", "down", "up", "up", "right"], name: "Auto-Canon", type: "weapons" },
  { code: ["down", "right", "down", "up", "left", "right"], name: "Railgun", type: "weapons" },
  { code: ["down", "down", "up", "down", "down"], name: "Spear", type: "weapons" },

  // Orbital
  { code: ["right", "down", "left", "up", "up"], name: "Orbital Gatling Barrage", type: "orbital" },
  { code: ["right", "right", "right"], name: "Orbital Airburst Strike", type: "orbital" },
  { code: ["right", "right", "down", "left", "right", "down"], name: "Orbital 120MM HE Barrage", type: "orbital" },
  { code: ["right", "down", "up", "up", "left", "down", "down"], name: "Orbital 380MM HE Barrage", type: "orbital" },
  { code: ["right", "down", "right", "down", "right", "down"], name: "Orbital Walking Barrage", type: "orbital" },
  { code: ["right", "down", "up", "right", "down"], name: "Orbital Laser", type: "orbital" },
  { code: ["right", "up", "down", "down", "right"], name: "Orbital Railgun Strike", type: "orbital" },

  // Hangar
  { code: ["up", "right", "right"], name: "Eagle Strafing Run", type: "hangar" },
  { code: ["up", "right", "down", "right"], name: "Eagle Airstrike", type: "hangar" },
  { code: ["up", "right", "down", "down", "right"], name: "Eagle Cluster Bomb", type: "hangar" },
  { code: ["up", "right", "down", "up"], name: "Eagle Napalm Strike", type: "hangar" },
  { code: ["down", "up", "up", "down", "up"], name: "Jump Pack", type: "hangar" },
  { code: ["up", "right", "down", "up"], name: "Eagle Smoke Strike", type: "hangar" },
  { code: ["up", "right", "up", "left"], name: "Eagle 110MM Rocket Pods", type: "hangar" },
  { code: ["up", "right", "down", "down", "down"], name: "Eagle 500KG Bomb", type: "hangar" },
  { code: ["up", "up", "left", "up", "right"], name: "Eagle Rearm", type: "hangar" },

  // Bridge
  { code: ["right", "right", "up"], name: "Orbital Precision Strike", type: "bridge" },
  { code: ["right", "right", "down", "right"], name: "Orbital Gas Strike", type: "bridge" },
  { code: ["right", "right", "left", "down"], name: "Orbital EMS Strike", type: "bridge" },
  { code: ["right", "right", "down", "up"], name: "Orbital Smoke Strike", type: "bridge" },
  { code: ["down", "up", "left", "right", "right", "left"], name: "HMG Placement", type: "bridge" },
  { code: ["down", "down", "left", "right", "left", "right"], name: "Shield Generator", type: "bridge" },
  { code: ["down", "up", "right", "up", "left", "right"], name: "Tesla Tower", type: "bridge" },

  // Engineering
  { code: ["down", "left", "up", "right"], name: "Anti-Personnel Minefield", type: "engineering" },
  { code: ["down", "left", "down", "up", "up", "down"], name: "Supply Pack", type: "engineering" },
  { code: ["down", "left", "up", "left", "down"], name: "Grenade Launcher", type: "engineering" },
  { code: ["down", "left", "down", "up", "left"], name: "Laser Canon", type: "engineering" },
  { code: ["down", "left", "left", "down"], name: "Incendiary Mines", type: "engineering" },
  { code: ["up", "down", "left", "up", "right", "right"], name: "Guard Dog Rover", type: "engineering" },
  { code: ["down", "left", "down", "down", "up", "left"], name: "Ballistic Shield", type: "engineering" },
  { code: ["down", "right", "down", "up", "left", "left"], name: "Arc Thrower", type: "engineering" },
  { code: ["down", "up", "left", "right", "left", "right"], name: "Shield Generator Pack", type: "engineering" },

  // Robotics
  { code: ["down", "up", "right", "right", "up"], name: "Machine Gun Sentry", type: "robotics" },
  { code: ["down", "up", "right", "left"], name: "Gatling Sentry", type: "robotics" },
  { code: ["down", "up", "right", "right", "down"], name: "Mortar Sentry", type: "robotics" },
  { code: ["down", "up", "left", "up", "right", "down"], name: "Guard Dog", type: "robotics" },
  { code: ["down", "up", "right", "up", "left", "up"], name: "Autocanon Sentry", type: "robotics" },
  { code: ["down", "up", "right", "right", "left"], name: "Rocket Sentry", type: "robotics" },
  { code: ["down", "up", "right", "down", "right"], name: "EMS Mortar Sentry", type: "robotics" }
];
