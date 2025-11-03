interface ConcertPiece {
  panelId: string;
  title: string;
  composer: string;
  details: string;
  publisher?: string;
  grade?: string;
  time?: string;
  year?: string;
  conductor?: string;
  publisherWebsiteURL?: string;
}

export const accordionData: ConcertPiece[] = [
  {
    panelId: "panel1",
    title: "In Your Wildest Dreams",
    composer: "Tyler S. Grant",
    // publisher: "Brain Co., Ltd.",
    // publisherWebsiteURL:
    //   "https://www.bravomusic-inc.com/index.php?main_page=index",
    year: "2025",
    // grade: "4",
    // time: "4:00",
    details: `From the composer: Dreams are powerful. No matter our age, dreams are among the most important things we have to help us navigate the complicated pathways of life. I personally believe that dreams stem from our desire to feel fulfilled and to make the world a better place. In Your Wildest Dreams is a celebration of the dreamers in our world  and the determination it takes to turn a dream into reality.

    In Your Wildest Dreams was commissioned by Music & Arts and dedicated to anyone and everyone who brings music to the lives of young people.`,
  },
  {
    panelId: "panel2",
    title: "Ocean Blue",
    composer: "Adrian Sims",
    // publisher: "Excelcia Music Publishing",
    // publisherWebsiteURL:
    //   "https://excelciamusic.com/?podcast_episode=3855&ref=new_window",
    year: "2025",
    // grade: "1",
    // time: "3:30",
    details: `From the composer: Ocean Blue is inspired by the beauty and diversity of life in Earth’s breathtaking oceans. I wrote this piece with a marine-life trailer in mind, taking snapshots of life within the ocean.

    The music begins by exploring the seafloor, hinting at the calm and mysterious creatures that inhabit the deep. The camera slowly pans upward, capturing the light pouring into the ocean from the sky. As the tempo increases, the music bursts through the waves and we are majestically sailing alongside dolphins and whales. The texture thins halfway through to feature some of the calmer moments, only to once again pan out across the ocean to see schools of fish and large whales swimming by. The piece ends in cinematic fashion, hinting at the potential for exploring other regions of the ocean. Each sea creature has its own story, and this music attempts to capture that.

    To me, the piece deeply resonates with the color ocean blue itself, depicting joy, serenity, and tranquility.`,
  },
  {
    panelId: "panel3",
    title: "West Highlands Sojourn",
    composer: "Robert Sheldon",
    // publisher: "Hal Leonard, LLC",
    // publisherWebsiteURL: "https://www.halleonard.com/",
    year: "1993",
    // grade: "3",
    // time: "5:00",
    details: `West Highlands Sojourn is a three-movement musical journey through the landscapes and folk influences of western England and Wales. The composer drew inspiration directly from village visits and local folk traditions, weaving them into a score that blends character, lyricism, and rhythmic vitality.

    I. Stow-on-the-Wold
    This opening movement captures the spirit of a quaint market town, full of charm and rustic life. Its light, jaunty character suggests walking through stone streets, stopping at cafés and shops, and breathing in the quiet countryside.

    II. Bradford Ballade
    Here the mood slows and softens. The music evokes a quiet evening stroll along lantern-lit streams and rolling hills. It’s lyrical, introspective, and elegantly crafted to evoke both calmness and reflection.
    
    III. On Derwentwater
    Drawing from folk dance rhythms heard near Derwentwater in the Lake District, this movement introduces more rhythmic drive and interplay. Sheldon uses hemiolic shifts between brass and woodwinds to create a playful, spirited finale that recalls the folk dance tradition.
    `,
  },
  {
    panelId: "panel5",
    title: "A Life Worth Living",
    composer: "Brian Balmages",
    // publisher: "MakeMusic Publications",
    // publisherWebsiteURL:
    //   "https://www.alfred.com/mmpub/?srsltid=AfmBOoogNq9eNkzW2FwxLRN1JgJrqauIKjkgy5sy0WWdLKZeTKK1z_Tx",
    year: "2023",
    // grade: "3",
    // time: "5:00",
    details: `Commissioned by the Wiley Middle School Band in Leander, Texas, A Life Worth Living honors the life of Justin, a beloved husband, father, and former high school athlete who struggled with mental illness and ultimately passed away in 2021. Brian Balmages wrote the piece both to help Justin’s family process their loss and to remind us all that every life has meaning and the power to make an impact.

    The title was inspired by artwork in Stone Harbor, New Jersey, that reads, “Live a Life You’d Relive.” Balmages wanted the music to serve as a call to live fully—not defined by possessions or popularity, but by the beauty we bring into the world, the people we inspire, and the way we lift up others.

    Musically, the work begins with an ethereal, transparent quality, full of moments of brightness. Dissonance and consonance struggle against each other, reflecting the tension between darkness and light, until the main theme finally emerges over two minutes into the piece. Shifts in tonality and rising intensity lead to an overwhelming release of strength and clarity. The music then subsides into a more contemplative ending, closing with a spark of sound that seems to last forever.
    `,
    conductor: "Samuel Sommer",
  },
  {
    panelId: "panel4",
    title: "Across the Alaskan Snow",
    composer: "JaRod Hall",
    // publisher: "C.L. Barnhouse Company",
    // publisherWebsiteURL: "https://barnhouse.com/",
    year: "2024",
    // grade: "4",
    // time: "2:00",
    details: `From the composer: In 1925, a deadly outbreak in Nome, Alaska, endangered thousands of lives. The cure was an antitoxin serum that could only be delivered by dogsled across a portion of the Iditarod Trail—the only route accessible for transporting goods during the harsh winters. A heroic relay of dog teams transported hundreds of boxes of the life-saving serum across the 674-mile trail from Nenana to Nome in a record-breaking 127.5 hours, without a single broken vial. This came to be known as the 1925 Serum Run, commemorated annually by the Iditarod Race.

    Across the Alaskan Snow echoes this famous race’s riveting rush at the start, the dauntless determination of the sled dogs, and the awe-inspiring serenity of the Alaskan landscape. This voyage is a testament to perseverance, courage, and the bond between driver and dog—for victory is granted not to the swift nor the strong, but to those who endure to the end.`,
    conductor: "Robert Herrings",
  },
  {
    panelId: "panel6",
    title: "Thawing",
    composer: "Kazuki Shimoda",
    // publisher: "Manuscript",
    // publisherWebsiteURL: "https://www.adrianbsims.com/wind-ensemble",
    year: "2024",
    // grade: "3",
    // time: "3:30",
    details: `Thawing evokes the subtle and gradual process of nature emerging from winter’s hold. The music suggests frozen stillness at its outset—icelike textures, sparse sonorities, and restrained dynamics. Gradually, warmth infiltrates: harmonies soften, rhythms awaken, and motifs begin to stretch, as if ice cracking and water flowing anew. The piece celebrates transformation and renewal, inviting listeners to sense the fragile threshold between dormancy and rebirth. Through contrast, pacing, and textural layering, Thawing becomes a meditation on change, resilience, and the promise held in the delicate stirrings of life’s return.`,
    conductor: "Jorge Rivera",
  },
  {
    panelId: "panel7",
    title: "Kvetchers",
    composer: "Laura Estes",
    // publisher: "Belwin Music",
    // publisherWebsiteURL:
    //   "https://www.alfred.com/belwin-concert-band-performance-music/b/?srsltid=AfmBOookGsJkV7GthaHH59MRuZDQYHoTTUscqUI7oSXbbvRV5x5Ve5hd",
    year: "2020",
    // grade: "1",
    // time: "2:50",
    conductor: "Cynthia Lansford",
    details: `The title Kvetchers—a colloquial Yiddish-derived term meaning “complainers”—serves as a playful wink to the music’s character. Estes’s march is humorous in spirit: each section is designed with its own surprise twist, making it a fun showcase for independent section interplay and lighthearted musical dialogue. Though written in march form, it deliberately subverts expectations, turning familiar gestures into musical jokes. Through these surprises, the piece encourages both performers and listeners to stay alert—every moment might reveal a new turn, a comedic cue, or a sly rhythmic twist.`,
  },
  {
    panelId: "panel8",
    title: "Archipelagos",
    composer: "Dave Hall",
    // publisher: "Carl Fischer and Theodore Presser Company",
    // publisherWebsiteURL: "https://www.carlfischer.com/",
    year: "2012",
    // grade: "2",
    // time: "3:00",
    conductor: "Brian Perez",
    details: ` In Archipelagos, composer Dave Hall offers a musical vision of scattered islands, each with its own identity yet part of a greater whole. The piece explores interlocking rhythms and resonant timbres to evoke landmasses surrounded by water—sometimes isolated, sometimes connected by currents or shared material. Solo voices drift in and out like ocean winds, while ensemble textures swell and recede like tides. Over the course of the work, the interplay between separation and unity becomes central: islands that at first feel solitary gradually reveal connections through shared motifs, harmonic bridges, or rhythmic alignment. The result is a sonic archipelago—a network of musical places that invites discovery and reflection on distance, community, and the spaces between.`,
  },
  {
    panelId: "panel9",
    title: "Saddle Up!",
    composer: "Ryan George",
    // publisher: "Tyler S. Grant",
    // publisherWebsiteURL: "https://www.tylersgrant.com/concertband",
    year: "2025",
    // grade: "2",
    // time: "4:00",
    details: `Saddle Up! was written for the Henry Middle School Honors Band’s 2025 performance at the Western International Band Clinic. The piece draws inspiration from the soundtracks of classic spaghetti westerns, blending sweeping lyricism with rugged energy. A moody introduction gives way to a bold main theme first stated by the flute, evoking the unmistakable spirit of Ennio Morricone’s western scores. A faster, rhythmic section follows—full of drive and dust—before returning to a soulful trumpet solo and powerful full-ensemble chorale. The final reprise gallops toward a triumphant close, as the ensemble rides off into the musical sunset: confident, daring, and free.`,
  },
];
