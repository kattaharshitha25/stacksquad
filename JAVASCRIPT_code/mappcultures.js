const culturelist = [
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [79.73999,15.9129]
    },
    "properties": {
      "name": "Kalamkari art",
      "origin": "Andhra Pradesh",
      "Technique": "Eco-friendly & Uses natural dyes and organic processes, 23-step method including bleaching, dyeing, hand-painting, and sun-drying",
      "FamousArtist": "Lakshmaiah, D. Laxmi Amma, Harinath N.",
      "Famous Museum": "Salar Jung Museum",
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [94.7278,28.2180]
    },
    "properties": {
      "name": "Bamboo & Cane Toys",
      "origin": "Arunachal Pradesh",
      "Technique": "Raw Materials: Locally sourced bamboo and cane, Handcrafted using slicing, weaving, and dyeing techniques, 100% biodegradable and made with vegetal dyes like red, black, and yellow",
      "FamousArtist": "Each tribe (e.g. Adi, Apatani, Mishmi, Wancho) has distinct toy styles and motifs, Traditionally crafted by men, passed down through generations",
      "Famous Museum": "Jawaharlal Nehru State Museum",
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [89.9376,26.2006]
    },
    "properties": {
      "name": "Wooden Toys & Bamboo Houses",
      "origin": "Assam",
      "Technique": "Bamboo culms woven into panels, reinforced with wooden beams, Mud or woven bamboo slats, sometimes finished with cow dung for insulation, Traditional methods using natural adhesives like jaggery water",
      "FamousArtist": "Khonikars, Sutradhar Community, Asharikandi Village (Goalpara District), Mukta Bhawan (Majpuri Village, Jorhat), Avinibesh Sharma",
      "Famous Museum": "Assam State Museum",
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [85.3131,26.0961]
    },
    "properties": {
      "name": "Madhubani Arts",
      "origin": "Bihar,Jharkand",
      "Technique": "Derived from turmeric, indigo, rice paste, soot, Twigs, fingers, matchsticks, bamboo pens",
      "FamousArtist": "Sita Devi, Ganga Devi, Mahasundari Devi, Dulari Devi",
      "Famous Museum": "Patna Museum , State Museum Hotwar",
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [71.1924, 22.2587]
    },
    "properties": {
      "name": "Dholl",
      "origin": "Gujarat",
      "Technique": "Dhol is widely used in Gujarat’s folk music, especially during festivals like Navratri, Janmashtami, and Makar Sankranti. It accompanies dances such as Garba, Dandiya Raas, and Tippani, energizing the crowd with its deep, resonant beats.",
      "FamousArtist": "Navratri Nights: Dhol players lead Garba circles, keeping dancers in sync, During religious parades or political rallies, dhol beats stir excitement.",
      "Famous Museum": "Baroda Museum & Picture Gallery",
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [76.1734,34.6048]
    },
    "properties": {
      "name": "Kashmiri Arts",
      "origin": "Jammu & Kashmir",
      "Technique": "Signature Kashmiri Art Forms: Pashmina weaving, Kani shawls, Paper-mache, Walnut wood carving, copperware(traam), carpet weaving, Sozni Embroidery",
      "FamousArtist": "Dina Nath Walli, Gulam Rasool Santosh, Manohar Kaul, Veer Munshi,etc",
      "Famous Museum": "SPS Museum",
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [75.7139,15.3173]
    },
    "properties": {
      "name": "Yakshagana",
      "origin": "Karnataka",
      "Technique": "“Yaksha” refers to celestial beings, and “Gana” means song—so Yakshagana is the “song of the celestial beings.”, It’s a night-long performance that narrates stories from the Ramayana, Mahabharata, and Bhagavata Purana through dance-drama,",
      "FamousArtist": "Keremane Shivarama Hegde, Sheni Gopalakrishna Bhat, Chittani Ramachandra Hegde, Kumble Sundar Rao, Kota Shivaram Karanth, etc",
      "Famous Museum": "Government Museum",
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [78.6569,22.9734]
    },
    "properties": {
      "name": "Gond Paint",
      "origin": "Madhya Pradesh",
      "Technique": "Asymmetrical compositions with dense detailing and vibrant colors.",
      "FamousArtist": "Jangarh Singh Shyam,Nankusia Bai,Mayank Shyam etc",
      "Famous Museum": "State Museum",
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [75.7139,19.7515]
    },
    "properties": {
      "name": "Warli Art",
      "origin": "Maharashtra",
      "Technique": " Typically white pigment made from rice paste on a red ochre or mud base,-  Uses circles (sun/moon), triangles (mountains/trees), and squares (sacred enclosures).",
      "FamousArtist": "Artist Jivya Soma Mashe played a pivotal role in popularizing Warli art beyond tribal boundaries.",
      "Famous Museum": "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya",
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [93.9063,24.6637]
    },
    "properties": {
      "name": "Manipuri Folk Dance",
      "origin": "Manipur",
      "Technique": "Manipuri folk dance is a mesmerizing blend of spirituality, storytelling, and rhythmic grace. Rooted in the traditions of the Meitei community and other tribal groups of Manipur",
      "FamousArtist": "Guru Bipin Singh,Guru Kalavati Devi,Guru Darshana Jhaveri,etc ",
      "Famous Museum": "Manipur State Museum",
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [83.0985,20.0451]
    },
    "properties": {
      "name": "Patachitra art",
      "origin": "Odissa",
      "Technique": "The notable stylistic feature is the bold black outlines used to define figures and scenes, which are drawn without any perspective, keeping the imagery flat but full of symbolic depth.",
      "FamousArtist": "Dinabandhu Mohapatra, Trilochan Jena,  Subham Prusty,etc",
      "Famous Museum": "Odisha State Museum",
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [76.3412,30.9471]
    },
    "properties": {
      "name": "Punjabi Bhangra",
      "origin": "Punjab",
      "Technique": "Bhangra is built on high-energy movements that sync with the beat of the dhol, a double-headed drum that drives the rhythm. Dancers often begin with a basic bounce—feet flat, knees bent, arms raised with palms outward—creating a joyful, springy motion.",
      "FamousArtist": "Daler Mehndi is a household name, known for his booming voice and hits like “Tunak Tunak Tun.” Malkit Singh, dubbed the “King of Bhangra,” was even honored with an MBE in the UK for his contributions to Punjabi music",
      "Famous Museum": "Virast-e-Khalsa",
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [74.2179,27.0238]
    },
    "properties": {
      "name": "Ghoomer",
      "origin": "Rajasthan",
      "Technique": "“ghoomna” being the root word—which give Ghoomar its name. Dancers move in circular formations, synchronizing their steps to the rhythm of folk music played on instruments like the dholak, harmonium, and manjira.",
      "FamousArtist": " Gulabo Sapera,Maharani Rajmata Goverdhan Kumari of Santrampur,etc",
      "Famous Museum": "Albert Hall Museum",
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [78.6569,11.1271]
    },
    "properties": {
      "name": "Tanjhore",
      "origin": "Tamil Nadu",
      "Technique": "The technique begins with preparing a wooden plank, usually made from jackfruit or teak, which is coated with a mixture of chalk powder and tamarind seed paste. gold foil is applied, giving the painting its signature glow.",
      "FamousArtist": "Raja Ravi Varma,Dinabandhu Mohapatra ,etc",
      "Famous Museum": "Government Museum",
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [80.9462,27.8467]
    },
    "properties": {
      "name": "Sanjhi",
      "origin": "Uttar Pradesh",
      "Technique": "The technique involves hand-cutting elaborate designs into paper using a fine cutting tool called a kalam.Some designs are even made underwater or on earthen platforms during temple rituals.",
      "FamousArtist": "The Kumar family from Mathura, especially Vijay and Mohan Kumar Verma, are among the most respected custodians of this art.",
      "Famous Museum": "State Museum",
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [87.8550,22.9868]
    },
    "properties": {
      "name": "Kalighat",
      "origin": "West Bengal",
      "Technique": "Themes ranged from mythological scenes—like Kali slaying demons or Krishna’s playful antics—to biting satire of colonial babus, corrupt priests, and social hypocrisy. The art was both devotional and democratic.",
      "FamousArtist": "Jamini Roy,Anwar Chitrakar,etc",
      "Famous Museum": "Indian Museum",
    }
  },
]