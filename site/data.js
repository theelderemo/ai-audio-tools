export const BADGES = {
  f:  { label: "FREE",       bg: "#1a4731", fg: "#7ee2a8" },
  fm: { label: "FREEMIUM",   bg: "#4a3500", fg: "#ffd479" },
  p:  { label: "PAID",       bg: "#5c1a1a", fg: "#ff9a9a" },
  api:{ label: "API",        bg: "#0d2b45", fg: "#8ac2ff" },
  os: { label: "OPEN-SRC",   bg: "#4a2800", fg: "#ffb27a" },
  ent:{ label: "ENTERPRISE", bg: "#2a1a55", fg: "#b9a6ff" },
  vst:{ label: "VST",        bg: "#1a3d3d", fg: "#7fe0e0" },
  hw: { label: "HARDWARE",   bg: "#2e2e2e", fg: "#cfcfcf" },
  acq:{ label: "ACQUIRED",   bg: "#1c1c1c", fg: "#9a9a9a" }
};

export const PATHS = [
  { label: "Make a full song from scratch", cat: "creation" },
  { label: "Clone or transform a voice", cat: "voice" },
  { label: "Remove vocals from a track", cat: "separation" },
  { label: "Make a podcast", cat: "podcast" },
  { label: "Use audio for health / medicine", cat: "health" },
  { label: "Build an audio AI app", cat: "dev" }
];

export const CATS = [
{ id: "creation", name: "Creation & Production", tools: [
{ n: "VRS/A", u: "https://vrsa.app", b: ["fm"], d: "AI-powered lyric writing and music production workstation with multi-model Ghostwriter, Suno integration via browser extension, audio analysis, album art generation, and VRSA Studio (studio.vrsa.app) for a dedicated production environment." },
{ n: "Suno", u: "https://suno.com/", b: ["fm"], d: "Generative AI music creation platform that allows users to create full songs, including vocals and instrumentation, from text prompts." },
{ n: "Soundry AI", u: "https://soundry.ai/", b: ["fm"], d: "AI for Musicians, by Musicians." },
{ n: "Sonauto", u: "https://sonauto.ai/Home", b: ["fm"], d: "Create hit songs with AI." },
{ n: "Microphone Studio", u: "https://microphonestudio.app", b: ["fm"], d: "Multi-track recording without expensive studio equipment." },
{ n: "TuneFlow", u: "https://tuneflow.com/", b: ["f","os"], d: "Generate lyrics, melody, drum beats and more, while editing and mixing like any professional DAW." },
{ n: "CassetteAI", u: "https://cassetteAI.com", b: ["fm"], d: "AI powered music production platform: make lyrics, beats & vocals with AI then mix & publish straight from Cassette." },
{ n: "AIVA", u: "https://www.aiva.ai", b: ["fm"], d: "The Artificial Intelligence composing emotional soundtrack music." },
{ n: "beatoven.ai", u: "https://www.beatoven.ai", b: ["fm"], d: "A simplified music creation tool that helps you create music for your videos and podcasts." },
{ n: "Epidemic Sound", u: "https://www.epidemicsound.com", b: ["p"], d: "High quality music and sound effects for all your content, all rights included." },
{ n: "Wonder", u: "https://www.wonder.inc", b: ["p"], d: "Dynascore: The world's first Dynamic Music Engine." },
{ n: "AudioStack", u: "https://www.audiostack.ai", b: ["p","api"], d: "AI-first platform for producing audio at scale." },
{ n: "boomy", u: "https://boomy.com/", b: ["fm"], d: "Make instant music, share it with the world." },
{ n: "enote", u: "https://enote.com", b: ["p"], d: "Intelligent Sheet Music." },
{ n: "Qosmo", u: "https://qosmo.jp/en/", b: [], d: "Qosmo is a group of artists, researchers, designers, and programmers." },
{ n: "Splash HQ", u: "https://www.splashcorporate.com/", b: [], d: "The next generation of music producers." },
{ n: "musico", u: "https://www.musi-co.com/", b: [], d: "AI-driven software engine that generates music. It can react to gesture, movement, code or other sound." },
{ n: "Yousician", u: "https://yousician.com/", b: ["fm"], d: "The largest music educator on the planet." },
{ n: "Tape It", u: "https://tape.it/", b: ["f"], d: "App for songwriting & audio recording." },
{ n: "sessionwire", u: "http://sessionwire.com", b: ["p"], d: "All-in-one online collaboration platform that delivers a seamless studio experience." },
{ n: "Aflorithmic", u: "https://www.aflorithmic.ai", b: ["p","api"], d: "Professional audio, voice, sound and music to scale." },
{ n: "Audio Design Desk", u: "https://add.app", b: ["p"], d: "The Audio Solution for Video Editors." },
{ n: "Never Before Heard Sounds", u: "https://heardsounds.com", b: ["fm"], d: "A music studio powered by AI." },
{ n: "NeuralDSP", u: "https://neuraldsp.com", b: ["p","vst"], d: "Empowers music players by democratizing the access to world-class sound, through an intuitive software/hardware ecosystem." },
{ n: "Neutone", u: "https://neutone.space/", b: ["f","vst"], d: "AI audio plugin & community bridging the gap between AI research and creativity." },
{ n: "Udio", u: "https://www.udio.com", b: ["fm"], d: "AI music generator with full song creation from text prompts, integrated lyric editor, and granular line-by-line vocal control." },
{ n: "Mureka", u: "https://www.mureka.ai/", b: ["fm"], d: "AI music generation with style-reference input, vocal timbre selection, and voice cloning for demos and song prototyping." },
{ n: "Soundverse", u: "https://soundverse.ai", b: ["fm"], d: "Full-suite AI music studio with text-to-song, beat generation, stem separation, and SAAR — a voice-controlled music production assistant." },
{ n: "ACE Studio", u: "https://acestudio.ai", b: ["fm"], d: "All-in-one AI music studio with expressive AI vocals, natural-sounding AI instruments, and a DAW bridge for Logic, Ableton, and FL Studio." },
{ n: "Stable Audio", u: "https://stability.ai/stable-audio", b: ["fm"], d: "Text-to-audio and audio-to-audio generation for music and sound effects from Stability AI, trained on licensed datasets." },
{ n: "Riffusion", u: "https://www.riffusion.com/", b: ["f","os"], d: "Diffusion model-based real-time music generation from text prompts, operating directly on audio spectrograms." },
{ n: "LoudMe", u: "https://loudme.ai/", b: ["fm"], d: "Text-to-music generator for royalty-free songs and instrumentals with style and mood controls." },
{ n: "Ecrett Music", u: "https://ecrettmusic.com/", b: ["fm"], d: "Scene and mood-based AI background music generator aimed at video and content creators requiring instant scoring." },
{ n: "Soundful", u: "https://soundful.com/", b: ["fm"], d: "AI platform for generating royalty-free, high-quality soundtracks customizable by mood, tempo, and brand identity for commercial use." },
{ n: "SongGPT", u: "https://songgpt.com/", b: ["fm"], d: "AI song generator for producing full tracks from short text prompts with genre selection." },
{ n: "Tunee", u: "https://tunee.ai/", b: ["fm"], d: "AI music and lyric generation platform with access to multiple underlying generative models for varied output styles." }
]},
{ id: "lyrics", name: "Lyric Writing & Songwriting", tools: [
{ n: "VRS/A", u: "https://vrsa.app", b: ["fm"], d: "AI-powered lyric writing and music production workstation with multi-model Ghostwriter, Suno integration via browser extension, audio analysis, album art generation, and VRSA Studio." },
{ n: "Lyric Studio", u: "https://www.lyricstudio.co/", b: ["fm"], d: "Mobile-first AI songwriting ecosystem with a lyric editor, AI-generated verse/chorus drafts, rhyme suggestions, and song organization tools." }
]},
{ id: "voice", name: "AI Voice & Cover Generation", tools: [
{ n: "Jammable", u: "https://www.jammable.com", b: ["fm"], d: "(formerly Voicify AI) AI song cover generator with 22,000+ community-uploaded voice models and custom voice cloning from 10 minutes of audio." },
{ n: "Musicfy", u: "https://musicfy.lol", b: ["fm"], d: "AI voice covers and voice cloning platform with text-to-music generation, voice-to-instrument conversion, and a large copyright-free vocal library." },
{ n: "Lalals", u: "https://lalals.com/", b: ["fm"], d: "AI voice swapping tool suite with 1,000+ voice options, stem splitting, and real-time conversion for remixes and vocal experimentation." }
]},
{ id: "separation", name: "Source Separation", tools: [
{ n: "TuneFlow", u: "https://tuneflow.com/", b: ["f"], d: "A free DAW offering high quality vocal, drums, melody, bass stem separation, all-in-one audio separation, editing and vocal/instrument to MIDI transcription." },
{ n: "Spliter.ai", u: "https://splitter.ai/", b: ["fm"], d: "AI Audio Processing." },
{ n: "Gaudio", u: "https://www.gaudiolab.com/", b: ["ent","api"], d: "Redefine your audio experience in music/video streaming and virtual/augmented reality." },
{ n: "AudioShake", u: "https://www.audioshake.ai", b: ["p","api"], d: "An On-Demand Stem Creation Platform for the Music Industry." },
{ n: "Audionamix", u: "https://audionamix.com/", b: ["ent"], d: "Audio separation solutions for the entertainment industry." },
{ n: "vocali.se", u: "https://vocali.se/en", b: ["fm"], d: "Separate vocals and music from any song, in seconds." },
{ n: "lalal.ai", u: "https://www.lalal.ai/", b: ["fm"], d: "High-quality stem splitting based on the world's #1 AI-powered technology." },
{ n: "VocalRemover", u: "https://vocalremover.org/", b: ["f"], d: "Separate voice from music out of a song free with powerful AI algorithms." },
{ n: "PhonicMind", u: "https://phonicmind.com/", b: ["fm"], d: "Separate vocals, drums, bass and other instruments out of your songs with HiFi AI." },
{ n: "EasySplitter", u: "https://easysplitter.com/", b: ["fm"], d: "AI-Based Vocal Remover Online for DJ Singers." },
{ n: "Remover.studio", u: "https://vocalremover.co", b: ["f"], d: "Vocal Remover & Online Karaoke." },
{ n: "MVSep", u: "https://mvsep.com/", b: ["f"], d: "Free separation of songs with many different algorithms (Demucs, MDX, UVR etc)." },
{ n: "MuzLab", u: "https://muzlab.co/", b: ["fm"], d: "Remove vocals from songs and split drums, bass and other instruments out of music." },
{ n: "Fadr", u: "https://fadr.com/", b: ["fm"], d: "Remove stems, convert to MIDI, and create high-quality remixes and mashups using AI tools." }
]},
{ id: "mastering", name: "Mastering, Mixing & Production Analysis", tools: [
{ n: "SoundBoost AI", u: "https://soundboostai.com/", b: ["fm"], d: "AI music mastering platform with goal-based controls — specify targets like loudness, warmth, or punch and the engine applies processing automatically." }
]},
{ id: "plugins", name: "Plugins & Sample Tools", tools: [
{ n: "DD Shooter", u: "https://www.sonolisk.com/", b: ["fm","p","vst"], d: "AI-powered drum sample generator using text-conditioned diffusion models to create realistic isolated drum hits with control over drum type, genre, and timbral characteristics." },
{ n: "Samplab", u: "https://samplab.com/", b: ["p","vst"], d: "AI VST plugin for granular audio sample editing, enabling note-level pitch manipulation of polyphonic audio with automatic chord progression detection." },
{ n: "Slooply", u: "https://slooply.com/", b: ["fm"], d: "AI-powered sample discovery platform with similarity search, mood/key/BPM filtering, MIDI export, and direct drag-and-drop DAW integration." },
{ n: "Atlas", u: "https://atlasaudio.com/", b: ["p"], d: "AI sample library organizer with auto-tagging, similar-sound search, and a smart drum map interface for large sample collections." },
{ n: "Playbeat", u: "https://www.audiomodern.com/app/playbeat/", b: ["p","vst"], d: "AI generative groove sequencer for instant beat creation with MIDI export and real-time DAW sync." }
]},
{ id: "analysis", name: "Analysis & Recommendation", tools: [
{ n: "SONOTELLER", u: "https://sonoteller.ai", b: ["fm"], d: "AI music analysis tool for song lyric summarization, theme extraction, and musical feature identification." },
{ n: "Musicful", u: "https://musicful.ai/", b: ["fm"], d: "AI-powered music recommendation and discovery engine focused on contextual and emotional matching." },
{ n: "Harmix", u: "https://harmix.ai/", b: ["api"], d: "AI music search with natural language, videos, similar audio and lyrics. Auto-tagging for audio and video." },
{ n: "AIMS", u: "https://aimsapi.com", b: ["p","api"], d: "AI-powered music similarity search & auto-tagging for anyone who makes music discovery their business." },
{ n: "FeedForward", u: "https://www.feedforwardai.com", b: ["ent","api"], d: "The intuitive audio search engine for audio & sound catalogues." },
{ n: "Aimi", u: "https://www.aimi.fm", b: ["f"], d: "Discover the artists who freed their music from the shackles of songs and playlists." },
{ n: "Utopia Music", u: "https://utopiamusic.com", b: ["ent"], d: "Fair Pay for Every Play." },
{ n: "Musiio", u: "https://www.musiio.com", b: ["acq"], note: "(Acquired by SoundCloud)", d: "Use Artificial Intelligence to help automate your workflows." },
{ n: "cyanite", u: "https://cyanite.ai/", b: ["fm","api"], d: "AI for Music tagging and similarity search." },
{ n: "Musixmatch", u: "https://www.musixmatch.com/", b: ["fm","api"], d: "Algorithms and tools for music discovery, recommendation, and search based on lyrics." },
{ n: "hoopr", u: "https://www.hoopr.ai", b: ["p"], d: "Find the best music, tell better stories, grow your audience." },
{ n: "Pex", u: "https://www.pex.com", b: ["ent","api"], d: "Music identification and copyright compliance. Audio fingerprinting, cover song identification in large scale." }
]},
{ id: "health", name: "Health & Wellbeing", tools: [
{ n: "Endel", u: "https://endel.io", b: ["fm"], d: "Personalized soundscapes to help you focus, relax, and sleep." },
{ n: "Lucid", u: "https://www.thelucidproject.ca", b: [], d: "Transforming music into medicine, using AI to compose and curate a personalized therapeutic music experience." },
{ n: "Wavepaths", u: "https://wavepaths.com", b: ["p"], d: "Music for Psychedelic Therapy." },
{ n: "Suki", u: "https://www.suki.ai/", b: ["ent"], d: "AI-powered voice solutions for healthcare." },
{ n: "audEERING", u: "https://www.audeering.com/", b: ["ent","api"], d: "Technology that can detect emotions and health information from the voice." },
{ n: "brain.fm", u: "https://www.brain.fm/", b: ["fm"], d: "Music to Focus Better." },
{ n: "SPOKE", u: "https://www.spoke.world/", b: ["fm"], d: "Lo-fi & Lyricism-led Mindfulness music episodes." },
{ n: "sona", u: "https://sona.care/", b: [], d: "Music as medicine. Research-based music for anxiety made by Grammy-winning producers." },
{ n: "Novoic", u: "https://novoic.com/", b: ["ent"], d: "Using speech to detect neurological diseases." },
{ n: "Ubenwa", u: "https://www.ubenwa.ai", b: ["ent"], d: "Infant health analysis based on cry signals." }
]},
{ id: "podcast", name: "Radio & Podcast", tools: [
{ n: "faidr", u: "https://faidr.com", b: ["f"], d: "Your favorite radio, interruption free." },
{ n: "Nomono", u: "https://nomono.co", b: ["p","hw"], d: "A self-contained recording kit for capturing interviews in the field." },
{ n: "Descript", u: "https://www.descript.com", b: ["fm"], d: "All-in-one audio & video editing, as easy as a doc." },
{ n: "auphonic", u: "https://auphonic.com", b: ["fm"], d: "Automatic audio post production web service for podcasts, broadcasters, radio shows, movies, screencasts and more." },
{ n: "SimonSays", u: "https://www.simonsaysai.com/", b: ["p"], d: "Edit Video 5x Faster, Built For Teams." },
{ n: "Podcastle", u: "https://podcastle.ai/", b: ["fm"], d: "Studio-quality recording, AI-powered editing, and seamless exporting." },
{ n: "cleanvoice", u: "https://cleanvoice.ai/", b: ["fm"], d: "Removes filler sounds, stuttering and mouth sounds from your podcast or audio recording." },
{ n: "Super Hi-Fi", u: "https://www.superhifi.com/", b: ["ent"], d: "Artificial Intelligence Powered Music Experiences." }
]},
{ id: "hearing", name: "Hearing", tools: [
{ n: "Eargo", u: "https://www.eargo.com", b: ["p","hw"], d: "A Revolutionary New Hearing Aid." },
{ n: "Concha Labs", u: "https://conchalabs.com/", b: ["hw"], d: "Helping you hear more clearly." }
]},
{ id: "detection", name: "Sound Detection", tools: [
{ n: "SoundEye", u: "https://sound-eye.com/", b: ["ent"], d: "Advanced sound recognition solutions capable of classifying sounds such as screaming, gunshot, coughing, and crying." },
{ n: "cochl", u: "https://www.cochl.ai/", b: ["api","ent"], d: "A next-generation sound AI platform that understands any sounds like a human." },
{ n: "Josh.ai", u: "https://www.josh.ai/", b: ["p"], d: "A voice-controlled home automation system." },
{ n: "SEE SOUND", u: "https://www.see-sound.com/", b: ["p"], d: "The world's first smart home hearing system." },
{ n: "Epigos.ai", u: "https://www.epigos.ai/", b: ["api"], d: "AI models that can be used to extract hidden data from audio sources." },
{ n: "HyperSentience", u: "https://hypersentience.ai", b: ["ent"], d: "Delivers context awareness to phones, VR/AR headsets, smart watches, speakers and laptops." },
{ n: "Circulr Sound", u: "https://www.circulrsound.com/", b: ["hw"], d: "Smart audio wearables." },
{ n: "Securaxis", u: "https://www.securaxis.com/", b: ["ent"], d: "We turn sounds into information." },
{ n: "Deeply", u: "https://deeplyinc.com", b: ["ent","api"], d: "We add meaning to every sound in the world using advanced deep learning technology for sound event detection and context recognition." },
{ n: "Reef Pulse", u: "https://reef-pulse.com", b: [], d: "Coral reef monitoring using bioacoustics and AI: sound event detection (boats, divers, waves, marine mammals, fishes, invertebrates) for impactful management of marine ecosystems." }
]},
{ id: "enhance", name: "Enhancement & Manipulation", tools: [
{ n: "Meaning", u: "https://www.meaning.team/", b: [], d: "Streaming real-time voice and accent conversion." },
{ n: "VideoDubber", u: "https://videodubber.ai/", b: ["fm"], d: "Translating video/audio through voice cloning and accent conversion in 150+ languages." },
{ n: "krisp", u: "https://krisp.ai/", b: ["fm"], d: "An AI-powered software solution for effective online meetings." },
{ n: "voicemod", u: "https://www.voicemod.net/", b: ["fm"], d: "Free real-time voice changer." },
{ n: "audo", u: "https://audo.ai/", b: ["fm","api"], d: "Noise cancellation products for creators, developers, and virtual meetings." },
{ n: "immersitech.io", u: "https://immersitech.io/", b: ["ent"], d: "We don't make audio. We make audio better." },
{ n: "utterly", u: "https://www.utterly.app/", b: ["fm"], d: "Noise removal for meetings and audio." },
{ n: "Neural Love", u: "https://neural.love/audio", b: ["fm"], d: "Set of AI-powered tools to enhance audio quality." },
{ n: "HeardThat", u: "https://www.heardthatapp.com/", b: ["fm"], d: "A smartphone app that turns your smartphone into a sophisticated speech-enhancement device." },
{ n: "Chatable", u: "https://chatableapps.com", b: ["fm"], d: "A smartphone app that removes disruptive background noise." },
{ n: "BdSound", u: "https://www.bdsound.com/", b: ["ent"], d: "Intelligent Audio Solution for audio and voice-enabled products." },
{ n: "echosonic", u: "https://www.echosonic.ca/", b: [], d: "Revolutionizing microphone by bringing Machine Learning capabilities into it." },
{ n: "Insoundz", u: "https://insoundz.com/", b: ["fm"], d: "Generative AI Audio Enhancement." },
{ n: "Xound", u: "https://xound.io/", b: ["fm"], d: "AI-powered audio enhancements in just one click. Grammarly for audio." }
]},
{ id: "transcription", name: "Speech — Transcription", tools: [
{ n: "Ava", u: "https://www.ava.me", b: ["fm"], d: "Professional and AI-Based Captions for Deaf and HoH (Transcription & Diarization)." },
{ n: "verbit", u: "https://verbit.ai/", b: ["ent"], d: "Professional AI-Based Transcription & Captioning." },
{ n: "otter", u: "https://otter.ai/", b: ["fm"], d: "Everything hybrid teams need for productive, collaborative meetings." },
{ n: "Trint", u: "https://trint.com/", b: ["p"], d: "Audio Transcription Software — Speech to Text to Magic." },
{ n: "Rev", u: "https://rev.com", b: ["p"], d: "99% accurate captions, transcripts, and subtitles." },
{ n: "voiceitt", u: "https://voiceitt.com/", b: [], d: "An app for people with non-standard speech." },
{ n: "deepgram.com", u: "https://deepgram.com/", b: ["fm","api"], d: "Better voice applications with faster, more accurate transcription through AI Speech Recognition." },
{ n: "fireflies.ai", u: "https://fireflies.ai/", b: ["fm"], d: "AI assistant for your meetings." },
{ n: "SoapBox", u: "https://www.soapboxlabs.com/", b: ["api","ent"], d: "Speech technology that makes kids heard." },
{ n: "Amberscript", u: "https://www.amberscript.com/en/", b: ["fm"], d: "SaaS solutions that automatically transform audio and video into text and subtitles using speech recognition." },
{ n: "Speaksee", u: "https://speak-see.com/", b: [], d: "Live captions what's being said during in-person group meetings." },
{ n: "Speechmatics", u: "https://www.speechmatics.com/", b: ["api","ent"], d: "Autonomous Speech Recognition technology that understands every voice." },
{ n: "sonix", u: "https://sonix.ai/", b: ["fm"], d: "Automated transcription in 35+ languages." },
{ n: "Picovoice", u: "https://picovoice.ai/", b: ["fm","api","os"], d: "End-to-end Edge Voice AI, on-device voice recognition." },
{ n: "BoldVoice", u: "https://www.boldvoice.com/", b: ["p"], d: "Speak English clearly and confidently." },
{ n: "Gladia", u: "https://www.gladia.io", b: ["fm","api"], d: "Power your product with cutting-edge AI transcription, translation and audio intelligence using a single API." },
{ n: "Podsqueeze", u: "https://podsqueeze.com", b: ["fm"], d: "Re-purpose your audio or video podcast into transcript, show notes, blog post, video clips and other assets to publish and promote your show." }
]},
{ id: "tts", name: "Speech — Synthesis (TTS)", tools: [
{ n: "Aflorithmic", u: "https://www.aflorithmic.ai", b: ["p","api"], d: "Professional audio, voice, sound and music to scale." },
{ n: "kroop AI", u: "https://www.kroop.ai", b: [], d: "Harness synthetic media generation and detection with endless possibilities." },
{ n: "dubverse", u: "https://dubverse.ai", b: ["fm"], d: "Make your content multilingual at a click of a button and reach more people." },
{ n: "Resemble.ai", u: "https://www.resemble.ai", b: ["fm","api"], d: "Generate AI Voices that sound real." },
{ n: "Replica", u: "https://replicastudios.com", b: ["fm"], d: "AI voice actors for games, film & the metaverse." },
{ n: "Respeecher", u: "https://www.respeecher.com", b: ["p"], d: "Voice Cloning for Content Creators." },
{ n: "AssemblyAI", u: "https://www.assemblyai.com", b: ["fm","api"], d: "Transcribe and understand audio with a single AI-powered API." },
{ n: "WellSaid", u: "https://wellsaidlabs.com/", b: ["p"], d: "Text-to-speech technology that creates life-like synthetic voices, from the voices of real people." },
{ n: "Deepsync", u: "https://deepsync.co/", b: [], d: "Generate audio content that exactly sounds like you." },
{ n: "Voiseed", u: "https://voiseed.com/", b: [], d: "AI-based Voice Engine able to mimic the emotions and prosody of human speech." },
{ n: "Jellypod", u: "https://jellypod.ai", b: ["fm"], d: "The AI podcast studio. Create customizable AI podcasts in minutes." },
{ n: "MiSynth", u: "https://www.misynth.io", b: [], d: "A brain-controlled instrument that uses synaptic technology and BCIs to turn imagined sounds into a synthesized MIDI instrument." },
{ n: "ElevenLabs", u: "https://beta.elevenlabs.io/", b: ["fm","api"], d: "Developing the most compelling AI speech software for publishers and creators." },
{ n: "Wondercraft", u: "https://www.wondercraft.ai/", b: ["fm"], d: "Wondercraft enables users to generate podcasts using Text-to-Speech technology." },
{ n: "Revocalize.ai", u: "https://www.revocalize.ai", b: ["fm"], d: "Generate studio-quality AI Voices and train AI voice models from the web dashboard or the VST plugin." }
]},
{ id: "dev", name: "Development — Tools & SDKs", tools: [
{ n: "Quilio", u: "https://www.quilio.dev/", b: ["api"], d: "We maintain tools to help developers build real-time audio AI applications with ease." }
]}
];

export const REMOVED = [
{ n: "Infinite Album", u: "https://www.infinitealbum.io", c: "Creation & Production", r: "Connection not encrypted; SSL certificate error." },
{ n: "mayk.it", u: "https://www.mayk.it/", c: "Creation & Production", r: "Site returns 404." },
{ n: "AI Music", u: "http://www.aimusic.co.uk/", c: "Creation & Production", r: "Site no longer reachable after acquisition by Apple." },
{ n: "LOVO", u: "https://lovo.ai/", c: "Creation & Production", r: "Site returns 402 Payment Required." },
{ n: "VerifAI Audio", u: "https://verifai.audio/", c: "Mastering, Mixing & Production Analysis", r: "Site no longer reachable." },
{ n: "niland", u: "https://niland.io/", c: "Analysis & Recommendation", r: "Connection not encrypted; SSL certificate error." },
{ n: "musicube", u: "https://www.musicu.be/en/", c: "Analysis & Recommendation", r: "SSL certificate expired." },
{ n: "fathom", u: "https://hello.fathom.fm", c: "Radio & Podcast", r: "Site returns 404." },
{ n: "Whisper.ai", u: "https://whisper.ai", c: "Hearing", r: "Site no longer reachable." },
{ n: "Audio Analytic", u: "https://www.audioanalytic.com/", c: "Sound Detection", r: "Site no longer reachable." },
{ n: "HyperSurfaces", u: "https://www.hypersurfaces.com/", c: "Sound Detection", r: "Website expired." },
{ n: "AudioTelligence", u: "https://audiotelligence.com/", c: "Enhancement & Manipulation", r: "Connection not encrypted; SSL certificate error." },
{ n: "adauris.ai", u: "https://www.adauris.ai", c: "Speech — Synthesis (TTS)", r: "Connection not encrypted; TLS handshake fails." },
{ n: "Sonantic", u: "https://www.sonantic.io", c: "Speech — Synthesis (TTS)", r: "Site no longer reachable after acquisition by Spotify." },
{ n: "amai", u: "https://amai.io/", c: "Speech — Synthesis (TTS)", r: "Site no longer reachable." },
{ n: "DAISYS", u: "https://daisys.ai/", c: "Speech — Synthesis (TTS)", r: "Site returns 404." },
{ n: "coqui.ai", u: "https://coqui.ai/", c: "Speech — Synthesis (TTS)", r: "Site returns 404." },
{ n: "Speechki", u: "https://speechki.io", c: "Speech — Synthesis (TTS)", r: "Site no longer reachable." },
{ n: "play.ht", u: "https://play.ht/", c: "Speech — Synthesis (TTS)", r: "Site no longer reachable." },
{ n: "Amper", u: "https://www.ampermusic.com/", c: "Creation & Production", r: "Site no longer reachable." },
{ n: "Music AI", u: "https://musicai.audio/", c: "Source Separation", r: "Site no longer reachable." },
{ n: "claerity.ai", u: "https://www.claerity.ai/", c: "Enhancement & Manipulation", r: "Site no longer reachable." },
{ n: "morpheme.ai", u: "https://www.morpheme.ai", c: "Speech — Synthesis (TTS)", r: "Site returns 404." }
];
