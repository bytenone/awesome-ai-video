// 工具数据：cat = video | image | music
// pricing = free | freemium | paid | opensource
// featured = true 时在列表中高亮显示
const TOOLS = [
  // ===================== AI 视频 =====================
  {
    id: "sora",
    name: "Sora",
    url: "https://sora.com",
    cat: "video",
    pricing: "freemium",
    tags: ["text-to-video", "image-to-video", "storyboard"],
    desc_en: "OpenAI's text-and-image-to-video model, known for strong prompt adherence and scene coherence, with storyboard and remix tools.",
    desc_zh: "OpenAI 的文生视频/图生视频模型，提示词遵循度高、场景连贯性强，支持分镜与混剪。"
  },
  {
    id: "veo",
    name: "Google Veo",
    url: "https://labs.google/veo",
    cat: "video",
    pricing: "freemium",
    tags: ["text-to-video", "native-audio", "4k"],
    desc_en: "Google DeepMind's video model family with native audio generation, cinematic controls and up to 4K output.",
    desc_zh: "Google DeepMind 的视频生成模型系列，支持原生音频生成、电影感控制，最高可达 4K。"
  },
  {
    id: "runway",
    name: "Runway",
    url: "https://runwayml.com",
    cat: "video",
    pricing: "freemium",
    tags: ["text-to-video", "editing-suite", "camera-control"],
    desc_en: "Gen-4 video generation plus a full AI creative suite: motion brush, camera control, inpainting and pro editing tools.",
    desc_zh: "Gen-4 视频生成 + 完整 AI 创作套件：运动笔刷、镜头控制、局部重绘与专业剪辑工具。"
  },
  {
    id: "kling",
    name: "Kling AI",
    url: "https://www.klingai.com",
    cat: "video",
    pricing: "freemium",
    tags: ["text-to-video", "image-to-video", "lip-sync"],
    desc_en: "Kuaishou's video model with strong motion quality, start/end frames, lip sync and a generous free tier.",
    desc_zh: "快手推出的视频生成模型，动作质量出色，支持首尾帧、对口型，免费额度较多。"
  },
  {
    id: "hailuo",
    name: "Hailuo AI",
    url: "https://hailuoai.video",
    cat: "video",
    pricing: "freemium",
    tags: ["text-to-video", "subject-reference"],
    desc_en: "MiniMax's video generator with strong physics simulation, subject reference (S2V) and fast iteration cycles.",
    desc_zh: "MiniMax 旗下视频生成工具，物理模拟出色，支持主体参照（S2V），迭代速度快。"
  },
  {
    id: "luma",
    name: "Luma Dream Machine",
    url: "https://lumalabs.ai/dream-machine",
    cat: "video",
    pricing: "freemium",
    tags: ["text-to-video", "keyframes"],
    desc_en: "Luma's video model with keyframes, loops and brainstorm boards for ideation.",
    desc_zh: "Luma 的视频生成模型，支持关键帧、循环视频与头脑风暴画板。"
  },
  {
    id: "pika",
    name: "Pika",
    url: "https://pika.art",
    cat: "video",
    pricing: "freemium",
    tags: ["video-effects", "video-to-video"],
    desc_en: "Creative video generation with fun effects (Pikaffects), scene ingredients and video-to-video restyling.",
    desc_zh: "创意视频生成工具，提供趣味特效（Pikaffects）、场景元素与视频风格化重绘。"
  },
  {
    id: "vidu",
    name: "Vidu",
    url: "https://www.vidu.com",
    cat: "video",
    pricing: "freemium",
    tags: ["reference-to-video", "consistency"],
    desc_en: "Shengshu's model with reference-to-video for multi-subject consistency and fast 4-step generation.",
    desc_zh: "生数科技的模型，支持参考生视频（多主体一致性），4 步极速生成。"
  },
  {
    id: "pixverse",
    name: "PixVerse",
    url: "https://app.pixverse.ai",
    cat: "video",
    pricing: "freemium",
    tags: ["anime", "effects"],
    desc_en: "Fast anime-friendly video generation with transitions and effect templates.",
    desc_zh: "生成速度快、动漫风格友好，提供转场与特效模板。"
  },
  {
    id: "seedance",
    name: "Seedance",
    url: "https://seed.bytedance.com/en/seedance",
    cat: "video",
    pricing: "freemium",
    tags: ["text-to-video", "multi-shot"],
    desc_en: "ByteDance's video model family, topping leaderboards for prompt adherence and multi-shot storytelling.",
    desc_zh: "字节跳动视频模型系列，提示词遵循度与多镜头叙事能力领先。"
  },
  {
    id: "wan",
    name: "Wan (Alibaba)",
    url: "https://wan.video",
    cat: "video",
    pricing: "opensource",
    tags: ["open-source", "text-to-video"],
    desc_en: "Alibaba's open-source video model family (Wan 2.1/2.2) with strong quality and consumer-GPU support.",
    desc_zh: "阿里开源视频模型系列（Wan 2.1/2.2），质量出色，支持消费级显卡本地运行。"
  },
  {
    id: "hunyuanvideo",
    name: "HunyuanVideo",
    url: "https://github.com/Tencent/HunyuanVideo",
    cat: "video",
    pricing: "opensource",
    tags: ["open-source", "text-to-video"],
    desc_en: "Tencent's open-source video foundation model with strong motion and a growing LoRA ecosystem.",
    desc_zh: "腾讯开源的视频基础模型，动作表现强，LoRA 生态丰富。"
  },
  {
    id: "ltxstudio",
    name: "LTX Studio",
    url: "https://ltx.studio",
    cat: "video",
    pricing: "freemium",
    tags: ["filmmaking", "storyboard"],
    desc_en: "Lightricks' end-to-end AI filmmaking platform: script to storyboard to shot-level control.",
    desc_zh: "Lightricks 的端到端 AI 电影制作平台：从剧本到分镜再到镜头级控制。"
  },
  {
    id: "higgsfield",
    name: "Higgsfield",
    url: "https://higgsfield.ai",
    cat: "video",
    pricing: "freemium",
    tags: ["camera-control", "cinematic"],
    desc_en: "Camera-motion-first video generation with 50+ preset camera moves for cinematic shots.",
    desc_zh: "以镜头运动为核心的视频生成，内置 50+ 电影级运镜预设。"
  },
  {
    id: "motioncontrol",
    name: "Kling AI Motion Control",
    url: "https://motioncontrol.app",
    cat: "video",
    pricing: "paid",
    tags: ["motion-transfer", "image-to-video", "character-consistency", "camera-control"],
    desc_en: "AI motion control for image-to-video: transfer motion from a reference video onto a still image with frame-accurate control, stable character consistency and cinematic camera moves. Also provides Veo, Seedance and Nano Banana models.",
    desc_zh: "面向图生视频的 AI 运动控制：上传参考图 + 运动视频，即可逐帧精准迁移动作，保持角色一致性，并支持电影级运镜。同时提供 Veo、Seedance、Nano Banana 等模型。"
  },
  {
    id: "genmo",
    name: "Genmo",
    url: "https://www.genmo.ai",
    cat: "video",
    pricing: "opensource",
    tags: ["open-source", "text-to-video"],
    desc_en: "Makers of Mochi 1, an open-source video model with strong motion fidelity.",
    desc_zh: "开源视频模型 Mochi 1 的开发团队，动作保真度高。"
  },
  {
    id: "haiper",
    name: "Haiper",
    url: "https://haiper.ai",
    cat: "video",
    pricing: "freemium",
    tags: ["templates"],
    desc_en: "Video generation with templates, motion presets and a simple free tier.",
    desc_zh: "视频生成工具，提供模板与运动预设，免费额度友好。"
  },
  {
    id: "svd",
    name: "Stable Video Diffusion",
    url: "https://stability.ai/news/stable-video-diffusion-svd-code",
    cat: "video",
    pricing: "opensource",
    tags: ["open-source", "image-to-video"],
    desc_en: "Stability AI's open-source image-to-video model for local experimentation.",
    desc_zh: "Stability AI 开源的图生视频模型，适合本地实验。"
  },
  {
    id: "heygen",
    name: "HeyGen",
    url: "https://www.heygen.com",
    cat: "video",
    pricing: "freemium",
    tags: ["avatar", "translation"],
    desc_en: "AI avatars and video translation with lip sync — popular for marketing and training videos.",
    desc_zh: "AI 数字人 + 视频翻译对口型，广泛用于营销与培训视频。"
  },
  {
    id: "synthesia",
    name: "Synthesia",
    url: "https://www.synthesia.io",
    cat: "video",
    pricing: "paid",
    tags: ["avatar", "enterprise"],
    desc_en: "Enterprise AI avatar videos from text, with 230+ voices and templates.",
    desc_zh: "企业级文本转数字人视频，230+ 音色与模板。"
  },
  {
    id: "did",
    name: "D-ID",
    url: "https://www.d-id.com",
    cat: "video",
    pricing: "freemium",
    tags: ["avatar", "api"],
    desc_en: "Talking-head generation and real-time streaming avatars via API.",
    desc_zh: "口播数字人生成与实时流式数字人 API。"
  },
  {
    id: "topazvideo",
    name: "Topaz Video AI",
    url: "https://www.topazlabs.com/topaz-video-ai",
    cat: "video",
    pricing: "paid",
    tags: ["upscaling", "desktop"],
    desc_en: "Local AI video upscaling, denoising and frame interpolation up to 8K/16K.",
    desc_zh: "本地 AI 视频放大、降噪与插帧，最高支持 8K/16K。"
  },
  {
    id: "opusclip",
    name: "Opus Clip",
    url: "https://www.opus.pro",
    cat: "video",
    pricing: "freemium",
    tags: ["shorts", "repurposing"],
    desc_en: "Turn long videos into viral shorts with AI clipping, captions and virality scoring.",
    desc_zh: "AI 自动把长视频剪成爆款短视频，带字幕与传播度评分。"
  },
  {
    id: "descript",
    name: "Descript",
    url: "https://www.descript.com",
    cat: "video",
    pricing: "freemium",
    tags: ["editing", "podcast"],
    desc_en: "Edit video and podcasts by editing text; AI eye contact, studio sound and filler-word removal.",
    desc_zh: "像改文档一样剪辑视频/播客；AI 眼神矫正、录音室级降噪、去除口头语。"
  },
  {
    id: "capcut",
    name: "CapCut",
    url: "https://www.capcut.com",
    cat: "video",
    pricing: "free",
    tags: ["editing", "captions"],
    desc_en: "Free all-round editor with AI captions, background removal and script-to-video.",
    desc_zh: "免费全能剪辑器，AI 字幕、抠图、图文成片一应俱全。"
  },
  {
    id: "submagic",
    name: "Submagic",
    url: "https://www.submagic.co",
    cat: "video",
    pricing: "paid",
    tags: ["captions", "shorts"],
    desc_en: "One-click captions, b-roll and zooms for short-form content.",
    desc_zh: "一键生成短视频字幕、B-roll 与变焦特效。"
  },

  // ===================== AI 图像 =====================
  {
    id: "midjourney",
    name: "Midjourney",
    url: "https://www.midjourney.com",
    cat: "image",
    pricing: "paid",
    tags: ["text-to-image", "style-reference"],
    desc_en: "Industry-leading aesthetic quality; now with a web editor, style references and personalization.",
    desc_zh: "美学质量业界标杆，现已提供网页版编辑器、风格参考与个性化调参。"
  },
  {
    id: "flux",
    name: "FLUX",
    url: "https://bfl.ai",
    cat: "image",
    pricing: "freemium",
    tags: ["text-to-image", "open-weights"],
    desc_en: "Black Forest Labs' model family (FLUX.1/2) — top open-weight and professional image generation.",
    desc_zh: "Black Forest Labs 模型系列（FLUX.1/2），开源权重与专业版图像生成俱佳。"
  },
  {
    id: "sd",
    name: "Stable Diffusion",
    url: "https://stability.ai",
    cat: "image",
    pricing: "opensource",
    tags: ["open-source", "text-to-image"],
    desc_en: "The original open-source image model ecosystem; SD 3.5 continues the lineage.",
    desc_zh: "开源图像模型生态的开创者，SD 3.5 延续其血脉。"
  },
  {
    id: "dalle3",
    name: "DALL·E 3",
    url: "https://openai.com/dall-e-3",
    cat: "image",
    pricing: "freemium",
    tags: ["text-to-image", "chat"],
    desc_en: "OpenAI's image model inside ChatGPT, great at following complex prompts.",
    desc_zh: "ChatGPT 内置的 OpenAI 图像模型，擅长理解复杂提示词。"
  },
  {
    id: "nanobanana",
    name: "Nano Banana (Gemini)",
    url: "https://gemini.google.com",
    cat: "image",
    pricing: "freemium",
    tags: ["image-editing", "consistency"],
    desc_en: "Google's Gemini image model, famous for character-consistent edits and natural-language retouching.",
    desc_zh: "Google Gemini 图像模型，以角色一致性编辑与自然语言修图著称。"
  },
  {
    id: "nanobananapro",
    name: "Nano Banana Pro",
    url: "https://banana-nano.pro",
    cat: "image",
    pricing: "freemium",
    tags: ["text-to-image", "image-editing", "4k", "text-rendering"],
    desc_en: "Web app for Google's Nano Banana Pro (Gemini 3 Pro Image): studio-quality generation and editing with legible multilingual text, multi-image fusion and up to 4K output.",
    desc_zh: "Google Nano Banana Pro（Gemini 3 Pro Image）网页版：工作室级生成与编辑，支持多语言图内文字、多图融合，最高 4K 输出。"
  },
  {
    id: "firefly",
    name: "Adobe Firefly",
    url: "https://www.adobe.com/products/firefly.html",
    cat: "image",
    pricing: "freemium",
    tags: ["commercial-safe", "photoshop"],
    desc_en: "Commercially-safe image and video models integrated into Photoshop and Express.",
    desc_zh: "商用安全的图像/视频模型，深度集成 Photoshop 与 Express。"
  },
  {
    id: "ideogram",
    name: "Ideogram",
    url: "https://ideogram.ai",
    cat: "image",
    pricing: "freemium",
    tags: ["text-rendering", "text-to-image"],
    desc_en: "Best-in-class text rendering inside images, plus strong style controls.",
    desc_zh: "图像内文字渲染能力一流，风格控制强大。"
  },
  {
    id: "leonardo",
    name: "Leonardo.Ai",
    url: "https://leonardo.ai",
    cat: "image",
    pricing: "freemium",
    tags: ["game-assets", "canvas"],
    desc_en: "Game-asset oriented generation with fine-tuned models, canvas and real-time sketching.",
    desc_zh: "面向游戏素材的生成平台，支持微调模型、画布与实时草图。"
  },
  {
    id: "recraft",
    name: "Recraft",
    url: "https://www.recraft.ai",
    cat: "image",
    pricing: "freemium",
    tags: ["vector", "brand"],
    desc_en: "Vector-native AI art, brand styles and an infinite design canvas.",
    desc_zh: "原生矢量 AI 艺术、品牌风格与无限画布。"
  },
  {
    id: "krea",
    name: "Krea",
    url: "https://www.krea.ai",
    cat: "image",
    pricing: "freemium",
    tags: ["realtime", "canvas"],
    desc_en: "Real-time generation canvas, enhancer and training — a playground for visual iteration.",
    desc_zh: "实时生成画布、增强器与模型训练，视觉迭代游乐场。"
  },
  {
    id: "freepik",
    name: "Freepik AI Suite",
    url: "https://www.freepik.com/ai",
    cat: "image",
    pricing: "freemium",
    tags: ["all-in-one", "stock"],
    desc_en: "Mystic image generator plus integrated video, mockups and a stock ecosystem.",
    desc_zh: "Mystic 图像生成器，整合视频、样机与素材生态。"
  },
  {
    id: "bingimage",
    name: "Bing Image Creator",
    url: "https://www.bing.com/images/create",
    cat: "image",
    pricing: "free",
    tags: ["free", "dall-e"],
    desc_en: "Free DALL·E-powered generation inside Bing and Copilot.",
    desc_zh: "微软 Bing/Copilot 内的免费 DALL·E 生成。"
  },
  {
    id: "comfyui",
    name: "ComfyUI",
    url: "https://www.comfy.org",
    cat: "image",
    pricing: "opensource",
    tags: ["open-source", "workflow", "local"],
    desc_en: "Node-based workflow engine for SD/FLUX power users; the standard for local pipelines.",
    desc_zh: "节点式工作流引擎，SD/FLUX 高级玩家的本地管线标准。"
  },
  {
    id: "a1111",
    name: "AUTOMATIC1111 WebUI",
    url: "https://github.com/AUTOMATIC1111/stable-diffusion-webui",
    cat: "image",
    pricing: "opensource",
    tags: ["open-source", "webui"],
    desc_en: "The classic Stable Diffusion web UI with a massive extension ecosystem.",
    desc_zh: "经典 Stable Diffusion 网页界面，扩展生态庞大。"
  },
  {
    id: "fooocus",
    name: "Fooocus",
    url: "https://github.com/lllyasviel/Fooocus",
    cat: "image",
    pricing: "opensource",
    tags: ["open-source", "simple"],
    desc_en: "Simple offline image generator — SD quality with Midjourney-like ease.",
    desc_zh: "极简本地图像生成器，SD 质量 + Midjourney 般易用。"
  },
  {
    id: "invoke",
    name: "Invoke",
    url: "https://invoke.com",
    cat: "image",
    pricing: "opensource",
    tags: ["open-source", "inpainting"],
    desc_en: "Professional open-source studio for controlled inpainting and IP workflows.",
    desc_zh: "专业开源工作室，擅长受控局部重绘与 IP 工作流。"
  },
  {
    id: "civitai",
    name: "Civitai",
    url: "https://civitai.com",
    cat: "image",
    pricing: "free",
    tags: ["model-hub", "community"],
    desc_en: "The largest community hub for model checkpoints, LoRAs and prompts.",
    desc_zh: "最大的模型/LoRA 社区资源站。"
  },
  {
    id: "magnific",
    name: "Magnific AI",
    url: "https://magnific.ai",
    cat: "image",
    pricing: "paid",
    tags: ["upscaling"],
    desc_en: "Premium AI upscaler that 'reimagines' detail — loved by designers.",
    desc_zh: "高端 AI 放大器，能“再创作”细节，设计师最爱。"
  },
  {
    id: "upscayl",
    name: "Upscayl",
    url: "https://upscayl.org",
    cat: "image",
    pricing: "opensource",
    tags: ["open-source", "upscaling", "free"],
    desc_en: "Free, open-source batch image upscaler for desktop.",
    desc_zh: "免费开源的桌面批量图像放大工具。"
  },
  {
    id: "removebg",
    name: "Remove.bg",
    url: "https://www.remove.bg",
    cat: "image",
    pricing: "freemium",
    tags: ["background-removal", "api"],
    desc_en: "One-click background removal with an API.",
    desc_zh: "一键抠图去背景，提供 API。"
  },
  {
    id: "photoroom",
    name: "Photoroom",
    url: "https://www.photoroom.com",
    cat: "image",
    pricing: "freemium",
    tags: ["ecommerce", "product-photo"],
    desc_en: "AI product photography: backgrounds, shadows and batch editing for e-commerce.",
    desc_zh: "AI 电商产品图：背景、阴影与批量编辑。"
  },
  {
    id: "canva",
    name: "Canva Magic Studio",
    url: "https://www.canva.com/magic-studio/",
    cat: "image",
    pricing: "freemium",
    tags: ["design", "all-in-one"],
    desc_en: "AI design toolkit inside Canva: Magic Edit, background remover and brand kits.",
    desc_zh: "Canva 内置 AI 设计全家桶：魔法编辑、抠图、品牌套件。"
  },
  {
    id: "kolors",
    name: "Kolors",
    url: "https://huggingface.co/Kwai-Kolors/Kolors",
    cat: "image",
    pricing: "opensource",
    tags: ["open-weights", "chinese"],
    desc_en: "Kuaishou's open-weight text-to-image model with strong photorealism and Chinese text rendering.",
    desc_zh: "快手开源文生图模型，写实强、中文文字渲染好。"
  },
  {
    id: "seedream",
    name: "Seedream",
    url: "https://seed.bytedance.com/en/seedream",
    cat: "image",
    pricing: "freemium",
    tags: ["text-to-image", "4k"],
    desc_en: "ByteDance's image model family with native 4K output and multi-image composition.",
    desc_zh: "字节跳动图像模型系列，原生 4K 输出与多图合成。"
  },
  {
    id: "qwenimage",
    name: "Qwen-Image",
    url: "https://qwen.ai",
    cat: "image",
    pricing: "opensource",
    tags: ["open-source", "text-rendering"],
    desc_en: "Alibaba's open-source 20B image model, excellent at Chinese/English text in images.",
    desc_zh: "阿里开源 20B 图像模型，中英文文字渲染出色。"
  },
  {
    id: "reve",
    name: "Reve",
    url: "https://reve.com",
    cat: "image",
    pricing: "freemium",
    tags: ["text-to-image", "typography"],
    desc_en: "Reve Image (Half Moon) — strong prompt adherence and typography.",
    desc_zh: "Reve Image（Half Moon），提示词遵循度与排版能力强。"
  },

  // ===================== AI 音乐 =====================
  {
    id: "suno",
    name: "Suno",
    url: "https://suno.com",
    cat: "music",
    pricing: "freemium",
    tags: ["full-song", "vocals"],
    desc_en: "The most popular AI music generator: full songs with vocals from a prompt, plus covers and personas.",
    desc_zh: "最流行的 AI 音乐生成器：一句话生成带人声的完整歌曲，支持翻唱与 Persona。"
  },
  {
    id: "udio",
    name: "Udio",
    url: "https://www.udio.com",
    cat: "music",
    pricing: "freemium",
    tags: ["full-song", "editing"],
    desc_en: "High-fidelity song generation with fine-grained editing, remixing and stems.",
    desc_zh: "高保真歌曲生成，支持精细编辑、混音与分轨。"
  },
  {
    id: "stableaudio",
    name: "Stable Audio",
    url: "https://stableaudio.com",
    cat: "music",
    pricing: "freemium",
    tags: ["sfx", "sound-design"],
    desc_en: "Stability AI's audio model for music, SFX and audio-to-audio transforms.",
    desc_zh: "Stability AI 音频模型，可生成音乐、音效并做音频转换。"
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    url: "https://elevenlabs.io",
    cat: "music",
    pricing: "freemium",
    tags: ["tts", "voice-clone"],
    desc_en: "Best-in-class TTS and voice cloning, now with music generation and SFX.",
    desc_zh: "顶级 TTS 与声音克隆，现已支持音乐与音效生成。"
  },
  {
    id: "musicfx",
    name: "MusicFX",
    url: "https://labs.google/aitestkitchen",
    cat: "music",
    pricing: "free",
    tags: ["experimental", "google"],
    desc_en: "Google's experimental text-to-music (Lyria) in AI Test Kitchen.",
    desc_zh: "Google 实验室（Lyria 模型）的文生音乐实验。"
  },
  {
    id: "aiva",
    name: "AIVA",
    url: "https://www.aiva.ai",
    cat: "music",
    pricing: "freemium",
    tags: ["cinematic", "orchestral"],
    desc_en: "Veteran AI composer for cinematic, orchestral and game scores with editable tracks.",
    desc_zh: "老牌 AI 作曲，擅长影视配乐与游戏配乐，支持编辑音轨。"
  },
  {
    id: "soundraw",
    name: "Soundraw",
    url: "https://soundraw.io",
    cat: "music",
    pricing: "paid",
    tags: ["royalty-free", "background-music"],
    desc_en: "Royalty-free background music generator with mood/genre control for creators.",
    desc_zh: "免版税背景音乐生成，可按情绪/流派控制。"
  },
  {
    id: "mubert",
    name: "Mubert",
    url: "https://mubert.com",
    cat: "music",
    pricing: "freemium",
    tags: ["ambient", "api"],
    desc_en: "Generative ambient/streaming music and an API for apps and content.",
    desc_zh: "生成式环境音乐与流媒体音乐，提供开发者 API。"
  },
  {
    id: "boomy",
    name: "Boomy",
    url: "https://boomy.com",
    cat: "music",
    pricing: "freemium",
    tags: ["distribution"],
    desc_en: "Create songs in seconds and distribute them to Spotify.",
    desc_zh: "几秒创建歌曲并分发到 Spotify。"
  },
  {
    id: "beatoven",
    name: "Beatoven.ai",
    url: "https://www.beatoven.ai",
    cat: "music",
    pricing: "freemium",
    tags: ["royalty-free", "podcast"],
    desc_en: "Mood-based royalty-free scores for videos and podcasts.",
    desc_zh: "按情绪生成免版税配乐，适合视频与播客。"
  },
  {
    id: "loudly",
    name: "Loudly",
    url: "https://www.loudly.com",
    cat: "music",
    pricing: "freemium",
    tags: ["royalty-free", "stems"],
    desc_en: "AI music generator with stem controls and a large royalty-free catalog.",
    desc_zh: "AI 音乐生成，支持分轨控制与大量免版税曲库。"
  },
  {
    id: "riffusion",
    name: "Riffusion",
    url: "https://www.riffusion.com",
    cat: "music",
    pricing: "freemium",
    tags: ["full-song", "diffusion"],
    desc_en: "Pioneering diffusion-based music model, now a full song generation app.",
    desc_zh: "扩散模型音乐生成先驱，现为完整歌曲生成应用。"
  },
  {
    id: "kits",
    name: "Kits.AI",
    url: "https://kits.ai",
    cat: "music",
    pricing: "freemium",
    tags: ["voice", "conversion"],
    desc_en: "AI voice models: train your own, convert vocals, split instruments.",
    desc_zh: "AI 音色平台：训练专属音色、人声转换、乐器分离。"
  },
  {
    id: "acestudio",
    name: "ACE Studio",
    url: "https://www.ace-studio.com",
    cat: "music",
    pricing: "paid",
    tags: ["singing", "vocaloid"],
    desc_en: "Professional AI singing voices with MIDI-level control for producers.",
    desc_zh: "专业 AI 歌声合成，MIDI 级控制，制作人友好。"
  },
  {
    id: "lalal",
    name: "LALAL.AI",
    url: "https://www.lalal.ai",
    cat: "music",
    pricing: "freemium",
    tags: ["stem-split", "api"],
    desc_en: "High-quality stem separation (vocals, drums, instruments) with an API.",
    desc_zh: "高质量分轨提取（人声/鼓/乐器），提供 API。"
  },
  {
    id: "moises",
    name: "Moises",
    url: "https://moises.ai",
    cat: "music",
    pricing: "freemium",
    tags: ["practice", "stems"],
    desc_en: "Practice app for musicians: stems, chord detection, pitch and speed change.",
    desc_zh: "音乐人练习应用：分轨、和弦识别、变调变速。"
  },
  {
    id: "izotope",
    name: "iZotope",
    url: "https://www.izotope.com",
    cat: "music",
    pricing: "paid",
    tags: ["mixing", "mastering"],
    desc_en: "AI-assisted mixing and mastering (Ozone, Neutron, RX) inside your DAW.",
    desc_zh: "DAW 内 AI 辅助混音/母带（Ozone、Neutron、RX）。"
  },
  {
    id: "landr",
    name: "LANDR",
    url: "https://www.landr.com",
    cat: "music",
    pricing: "freemium",
    tags: ["mastering", "distribution"],
    desc_en: "Instant AI mastering, distribution and samples.",
    desc_zh: "即时 AI 母带处理、发行与采样。"
  },
  {
    id: "bandlab",
    name: "BandLab SongStarter",
    url: "https://www.bandlab.com/songstarter",
    cat: "music",
    pricing: "free",
    tags: ["free", "ideation"],
    desc_en: "Free idea generator that drops you into a full mobile studio.",
    desc_zh: "免费灵感生成器，无缝接入移动端全功能工作站。"
  },
  {
    id: "soundful",
    name: "Soundful",
    url: "https://soundful.com",
    cat: "music",
    pricing: "freemium",
    tags: ["royalty-free"],
    desc_en: "Track-level royalty-free generation for creators and brands.",
    desc_zh: "面向创作者与品牌的免版税曲目生成。"
  },
  {
    id: "fadr",
    name: "Fadr",
    url: "https://fadr.com",
    cat: "music",
    pricing: "free",
    tags: ["remix", "free"],
    desc_en: "Free stems, remixes and DJ tools from any track.",
    desc_zh: "免费分轨、混音与 DJ 工具。"
  },
  {
    id: "mureka",
    name: "Mureka",
    url: "https://www.mureka.ai",
    cat: "music",
    pricing: "freemium",
    tags: ["full-song", "api"],
    desc_en: "Kunlun Tech's song/music generation with reference-to-music and an API.",
    desc_zh: "昆仑万维音乐生成，支持参考音乐生成与 API。"
  },
  {
    id: "jammable",
    name: "Jammable",
    url: "https://www.jammable.com",
    cat: "music",
    pricing: "freemium",
    tags: ["covers", "voice"],
    desc_en: "AI covers with thousands of community voice models.",
    desc_zh: "AI 翻唱平台，数千社区音色模型。"
  },
  {
    id: "musicgen",
    name: "MusicGen (Meta)",
    url: "https://github.com/facebookresearch/audiocraft",
    cat: "music",
    pricing: "opensource",
    tags: ["open-source", "text-to-music"],
    desc_en: "Meta's open-source text-to-music model (Audiocraft).",
    desc_zh: "Meta 开源文生音乐模型（Audiocraft）。"
  },
  {
    id: "yue",
    name: "YuE",
    url: "https://github.com/multimodal-art-projection/YuE",
    cat: "music",
    pricing: "opensource",
    tags: ["open-source", "full-song"],
    desc_en: "Open-source full-song generation (lyrics + vocals + backing) from a poem or lyrics.",
    desc_zh: "开源整曲生成（歌词+人声+伴奏）。"
  }
];
