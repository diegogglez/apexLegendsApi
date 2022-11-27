const { mongoose } = require("mongoose");
const Legend = require('../../api/legends/legends.model');
require("dotenv").config();

const Legends = [
  {
    name: 'Ash',
    card: 'https://res.cloudinary.com/dxbrxx3l4/image/upload/v1669577679/apexLegends/legends/ash/ash-card_ndbobt.png',
    detail: 'https://res.cloudinary.com/dxbrxx3l4/image/upload/v1669577679/apexLegends/legends/ash/apex-section-bg-legends-ash-xl.jpg.adapt.1456w_u9ev4w.jpg',
    tacticLogo: 'https://res.cloudinary.com/dxbrxx3l4/image/upload/v1669577679/apexLegends/legends/ash/ash-tactic_afwwky.png',
    passiveLogo: 'https://res.cloudinary.com/dxbrxx3l4/image/upload/v1669577679/apexLegends/legends/ash/ash-passive_nn0pfw.png',
    ultimateLogo: 'https://res.cloudinary.com/dxbrxx3l4/image/upload/v1669577679/apexLegends/legends/ash/ash-ultimate_vhrcpv.png',
    info: 'Natalie “Wattson” Paquette is a familiar face in the Apex Games, though for a different reason than most. Daughter of the Games’ lead electrical engineer, she studied his manuals to stay close to him, and discovered her calling at a young age. Though she could be completely distracted one moment and hyper-focused the next, electricity grounded her – its ordered, predictable flow made sense in a way the rest of the world didn’t.',
    skills: {
      tactic: "Arc Share",
      passive: "Marked For Death",
      ultimate: "Phase breach"
    }
  },
  {
    name: 'Bangalore',
    card: 'https://res.cloudinary.com/dxbrxx3l4/image/upload/v1669577702/apexLegends/legends/bangalore/bangalore-card_mawpq0.png',
    detail: 'https://res.cloudinary.com/dxbrxx3l4/image/upload/v1669577708/apexLegends/legends/bangalore/bangalore-detail_skdbph.jpg',
    tacticLogo: 'https://res.cloudinary.com/dxbrxx3l4/image/upload/v1669577709/apexLegends/legends/bangalore/bangalore-tactic_eneahe.png',
    passiveLogo: 'https://res.cloudinary.com/dxbrxx3l4/image/upload/v1669577697/apexLegends/legends/bangalore/bangalore-passive_c5ubyh.png',
    ultimateLogo: 'https://res.cloudinary.com/dxbrxx3l4/image/upload/v1669577697/apexLegends/legends/bangalore/bangalore-ultimate_kwcm1y.png',
    info: 'Born into a military family where she, her parents, and her four older brothers all served with the IMC, Bangalore has been an exceptional soldier her whole life. Dedicated to the IMC cause, she was top of her class at the IMC Military Academy and the only cadet who could take apart a Peacekeeper, equip it with a Precision Choke hop-up, and put it back together in under twenty seconds – blindfolded.',
    skills: {
      tactic: "Smoke Launcher",
      passive: "Double Time",
      ultimate: "Rolling Thunder"
    }
  },
  {
    name: 'Bloudhount',
    card: 'https://res.cloudinary.com/dxbrxx3l4/image/upload/v1669577702/apexLegends/legends/bloodhount/bloodhount-card_yp49vu.png',
    detail: 'https://res.cloudinary.com/dxbrxx3l4/image/upload/v1669577707/apexLegends/legends/bloodhount/bloodhount-detail_ao4rpy.jpg',
    tacticLogo: 'https://res.cloudinary.com/dxbrxx3l4/image/upload/v1669577698/apexLegends/legends/bloodhount/bloodhount-tactic_cjbszx.png',
    passiveLogo: 'https://res.cloudinary.com/dxbrxx3l4/image/upload/v1669577698/apexLegends/legends/bloodhount/bloodhount-passive_e5uqnq.png',
    ultimateLogo: 'https://res.cloudinary.com/dxbrxx3l4/image/upload/v1669577698/apexLegends/legends/bloodhount/bloodhount-ultimate_svkqaf.png',
    info: 'Bloodhound is known across the Outlands as one of the greatest game hunters the Frontier has ever seen. The child of two engineers stationed at the New Dawn industrial plant on Talos, Bloodhound was taken in by their uncle Artur after a meltdown destroyed the facility and killed both their parents. Artur taught them the Old Ways, a belief system that focuses on the glory of nature and rejects modern technology. Yet Bloodhound was constantly drawn to technological marvels, and ultimately used both new and old methods to take down a Goliath that preyed on the people of their village, forever changing their life’s path.',
    skills: {
      tactic: "Eye of the Allfather",
      passive: "Tracker",
      ultimate: "Beast of the Hunt"
    }
  },
  {
    name: 'Catalyst',
    card: 'https://res.cloudinary.com/dxbrxx3l4/image/upload/v1669577707/apexLegends/legends/catalyst/catalyst-card_cpxpzl.png',
    detail: 'https://res.cloudinary.com/dxbrxx3l4/image/upload/v1669577710/apexLegends/legends/catalyst/catalyst-detail_obtfx2.png',
    tacticLogo: 'https://res.cloudinary.com/dxbrxx3l4/image/upload/v1669577698/apexLegends/legends/catalyst/catalyst-tactic_aohivo.png',
    passiveLogo: 'https://res.cloudinary.com/dxbrxx3l4/image/upload/v1669577698/apexLegends/legends/catalyst/catalyst-passive_vmbeny.png',
    ultimateLogo: 'https://res.cloudinary.com/dxbrxx3l4/image/upload/v1669577700/apexLegends/legends/catalyst/catalyst-ultimate_qfbchy.png',
    info: 'Tressa Crystal Smith isn’t everyone’s cup of tea–an elegant, standoffish woman, she likes crystals more than she likes most people. She grew up on Boreas, a faltering planet with a deteriorating moon. Conformity and efficiency were necessities there, but that never suited Tressa. Instead, she was more at home with fellow misfits who spent their time on crystal readings, moon rituals and personal witchery–they supported her through her self-discovery and transition, making her turbulent teenage years easier and less lonely. But when her closest friend went to extreme lengths to save their moon from corporate encroachment, Tressa was caught in the middle. Ultimately, she ran away from home, finding solace in the one place her friend cared about most: their moon, Cleo.',
    skills: {
      tactic: "Piercing Spikes",
      passive: "Barricade",
      ultimate: "Dark Veil"
    }
  },
  {
    name: 'Caustic',
    card: 'https://res.cloudinary.com/dxbrxx3l4/image/upload/v1669577704/apexLegends/legends/caustic/caustic-card_yjzidg.png',
    detail: 'https://res.cloudinary.com/dxbrxx3l4/image/upload/v1669577705/apexLegends/legends/caustic/caustic-detail_bfudmn.jpg',
    tacticLogo: 'https://res.cloudinary.com/dxbrxx3l4/image/upload/v1669577698/apexLegends/legends/caustic/caustic-tactic_i7v5dk.png',
    passiveLogo: 'https://res.cloudinary.com/dxbrxx3l4/image/upload/v1669577700/apexLegends/legends/caustic/caustic-passive_smyjni.png',
    ultimateLogo: 'https://res.cloudinary.com/dxbrxx3l4/image/upload/v1669577700/apexLegends/legends/caustic/caustic-ultimate_uh8xwd.png',
    info: 'Alexander Nox used to be one of the brightest scientists in the employ of Humbert Labs, the Frontier’s leading manufacturer of pesticide gases. Nox worked day and night developing new formulas for the glut of pesticides needed to protect the crops that sustained the Outlands. But he soon realized that progress was being hampered by his testing methods. He needed to test on more than just inert tissue: he needed living subjects.',
    skills: {
      tactic: "Nox Gas Trap",
      passive: "Nox Vision",
      ultimate: "Nox Gas Grenade"
    }
  },
  {
    name: 'Wattson',
    card: 'https://res.cloudinary.com/dxbrxx3l4/image/upload/v1669575462/apexLegends/legends/wattson/wattson-card_iw8hmx.png',
    detail: 'https://res.cloudinary.com/dxbrxx3l4/image/upload/v1669575461/apexLegends/legends/wattson/wattson-detail_sbt4wr.jpg',
    tacticLogo: 'https://res.cloudinary.com/dxbrxx3l4/image/upload/v1669575461/apexLegends/legends/wattson/wattson-tactic_rm4tfg.png',
    passiveLogo: 'https://res.cloudinary.com/dxbrxx3l4/image/upload/v1669575461/apexLegends/legends/wattson/wattson-passive_siyi2a.png',
    ultimateLogo: 'https://res.cloudinary.com/dxbrxx3l4/image/upload/v1669575461/apexLegends/legends/wattson/wattson-ultimate_njhsnv.png',
    info: 'Natalie “Wattson” Paquette is a familiar face in the Apex Games, though for a different reason than most. Daughter of the Games’ lead electrical engineer, she studied his manuals to stay close to him, and discovered her calling at a young age. Though she could be completely distracted one moment and hyper-focused the next, electricity grounded her – its ordered, predictable flow made sense in a way the rest of the world didn’t.',
    skills: {
      tactic: "Perimeter Security",
      passive: "Spark of Genius",
      ultimate: "Interception Pylon"
    }
  }
];

mongoose.connect(process.env.DB_URL)
  .then(async () => {
    const allLegends = await Legend.find().lean();
    
    if(!allLegends.length) {
      console.log('[seed]: Legends not found, we continue...')
    } else {
      console.log(`[seed]: found ${allLegends.length} Legends.`);
      await Legend.collection.drop();
      console.log('[seed]: Legends collection correctly removed');
    }
  })
  .catch((error) => console.log('[seed]: Error deleting the collection -->', error))
  .then(async() => {
    await Legend.insertMany(Legends);
    console.log('[seed]: New Legends added correctly');
  })
  .catch((error) => console.log('[seed]: Error adding Legends', error))
  .finally(() => mongoose.disconnect());