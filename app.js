// ============ 多语言文案 ============
const I18N = {
  en: {
    skip: "Skip to tools",
    heroKicker: "Curated & updated · 2026",
    heroTitle: "The Best AI Video, Image & Music Tools — All in One Searchable List",
    heroSub: "78 hand-picked tools for generating video, images and music with AI. Search instantly, filter by pricing, and find the right tool in seconds.",
    catAll: "All tools", catVideo: "AI Video", catImage: "AI Image", catMusic: "AI Music",
    priceAll: "Any price", priceFree: "Free", priceFreemium: "Freemium", pricePaid: "Paid", priceOpensource: "Open source",
    featured: "Featured",
    toolsTitle: "AI Tools Directory",
    noResults: "No tools found. Try different keywords or clear the filters.",
    updated: "Last updated",
    resultCount: (n) => `${n} tool${n === 1 ? "" : "s"}`,
    tipsTitle: "How to choose the right tool",
    tip1Title: "1. Start from your output",
    tip1Body: "Need motion? Look at video generators first. Need stills, posters or game assets? Image models. Need a soundtrack or voiceover? Music and audio tools. This list's category tabs get you there in one click.",
    tip2Title: "2. Control beats raw quality",
    tip2Body: 'For production work, controllability matters more than one lucky generation. If you need a character to perform a specific action, look for motion-control workflows — <a href="https://motioncontrol.app" target="_blank" rel="noopener">Kling AI Motion Control</a> transfers motion from a reference video with frame-accurate precision.',
    tip3Title: "3. Check the license, then the price",
    tip3Body: 'Free tiers are great for testing, but commercial use often needs a paid plan. Open-source models run free on your own GPU — filter by “Open source” above to find them.',
    faqTitle: "FAQ",
    faq1Q: "What is the best AI video generator right now?",
    faq1A: "It depends on your needs. Sora, Google Veo and Runway lead on overall quality; Kling and Hailuo offer great value with generous free tiers; for controllable, frame-accurate motion from a reference video, Kling AI Motion Control specializes in AI motion control for image-to-video.",
    faq2Q: "Which AI tools on this list are free to use?",
    faq2A: "Many tools offer free tiers or credits, including Kling, Hailuo, Pika, Bing Image Creator, CapCut, MusicFX, BandLab SongStarter and Fadr. Open-source options like ComfyUI, Wan, HunyuanVideo, Qwen-Image, MusicGen and Upscayl are fully free to run locally.",
    faq3Q: "Which AI image generator handles text inside images best?",
    faq3A: "Ideogram, Recraft and Qwen-Image are currently the strongest for rendering readable text inside images. Qwen-Image is especially good with Chinese and English typography.",
    faq4Q: "Can I use AI-generated music commercially?",
    faq4A: "It depends on each service's license and your subscription tier. Services like Soundraw, Loudly and Beatoven.ai are built around royalty-free licensing for commercial use. Always check the current terms before publishing.",
    faq5Q: "How do I add a tool to this list?",
    faq5A: "This list is open source and hosted on GitHub. Open a pull request or an issue with the tool name, URL, a one-line description and its pricing model.",
    footerDesc: "A curated, searchable list of AI video, image and music generation tools. Open source — contributions welcome.",
    footerLinks: "Links",
    footerDisclaimerTitle: "Disclaimer",
    footerDisclaimer: "Tool descriptions are editorial summaries. Pricing and features change often — always verify on the official site.",
    license: "License", madeWith: "Made with ❤ for the AI creator community",
    pageTitle: "Awesome AI Video — 78 Best AI Video, Image & Music Generation Tools (2026)",
    searchPlaceholder: "Search tools — try “text-to-video”, “Suno”, “open source”…"
  },
  zh: {
    skip: "跳到工具列表",
    heroKicker: "人工精选 · 持续更新 · 2026",
    heroTitle: "AI 视频、图像与音乐工具精选 — 一个页面，即搜即得",
    heroSub: "78 个精选 AI 生成工具，覆盖视频、图像与音乐。支持即时搜索与价格筛选，几秒找到合适的工具。",
    catAll: "全部工具", catVideo: "AI 视频", catImage: "AI 图像", catMusic: "AI 音乐",
    priceAll: "不限价格", priceFree: "免费", priceFreemium: "免费增值", pricePaid: "付费", priceOpensource: "开源",
    featured: "精选推荐",
    toolsTitle: "AI 工具目录",
    noResults: "没有找到匹配的工具，试试其他关键词或清除筛选条件。",
    updated: "最后更新",
    resultCount: (n) => `${n} 个工具`,
    tipsTitle: "如何选择合适的工具",
    tip1Title: "1. 从产出物出发",
    tip1Body: "需要动态画面？先看视频生成器。需要静图、海报或游戏素材？看图像模型。需要配乐或配音？看音乐与音频工具。用上方的分类标签一键直达。",
    tip2Title: "2. 可控性比单次出片质量更重要",
    tip2Body: '在实际生产中，可控性比“抽卡运气”更关键。如果需要角色完成指定动作，请关注运动控制类工作流——<a href="https://motioncontrol.app" target="_blank" rel="noopener">Kling AI Motion Control</a> 可以从参考视频逐帧精准迁移动作。',
    tip3Title: "3. 先看授权，再看价格",
    tip3Body: "免费额度适合试用，但商用通常需要付费计划。开源模型可以在自己的显卡上免费运行——用上方“开源”筛选即可找到。",
    faqTitle: "常见问题",
    faq1Q: "现在最好的 AI 视频生成器是哪个？",
    faq1A: "取决于需求：Sora、Google Veo、Runway 综合质量领先；Kling 和海螺性价比高、免费额度充足；如果需要从参考视频进行逐帧可控的运动迁移，Kling AI Motion Control 专注图生视频的 AI 运动控制。",
    faq2Q: "列表里哪些工具可以免费用？",
    faq2A: "很多工具提供免费额度，包括 Kling、海螺、Pika、Bing Image Creator、CapCut、MusicFX、BandLab SongStarter、Fadr 等。ComfyUI、Wan、混元视频、Qwen-Image、MusicGen、Upscayl 等开源方案可完全免费本地运行。",
    faq3Q: "哪个 AI 图像工具生成图中文字最好？",
    faq3A: "Ideogram、Recraft 和 Qwen-Image 目前在图内文字渲染上最强，其中 Qwen-Image 对中英文排版尤其出色。",
    faq4Q: "AI 生成的音乐可以商用吗？",
    faq4A: "取决于各服务的授权条款与订阅等级。Soundraw、Loudly、Beatoven.ai 等围绕免版税授权设计，适合商用。发布前请务必核对最新条款。",
    faq5Q: "如何向清单添加新工具？",
    faq5A: "本清单开源并托管在 GitHub。欢迎提交 Pull Request 或 Issue，附上工具名称、网址、一句话简介与定价模式。",
    footerDesc: "精选、可搜索的 AI 视频/图像/音乐生成工具清单。开源项目，欢迎参与贡献。",
    footerLinks: "链接",
    footerDisclaimerTitle: "免责声明",
    footerDisclaimer: "工具简介为编辑摘要，价格与功能可能随时变化，请以官网为准。",
    license: "许可协议", madeWith: "为 AI 创作者社区而做 ❤",
    pageTitle: "Awesome AI Video — 78 个最佳 AI 视频/图像/音乐生成工具（2026）",
    searchPlaceholder: "搜索工具，如“文生视频”“Suno”“开源”…"
  }
};

// ============ 状态 ============
const state = {
  cat: "all",
  pricing: "all",
  q: "",
  lang: "en"
};

const $ = (sel) => document.querySelector(sel);
const grid = $("#grid");
const searchInput = $("#search");
const resultCount = $("#resultCount");
const noResults = $("#noResults");

// ============ 工具函数 ============
// 根据名称生成稳定的渐变色（首字母头像用）
function hueFromName(name) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) % 360;
  return h;
}

function pricingLabel(pricing) {
  const t = I18N[state.lang];
  return { free: t.priceFree, freemium: t.priceFreemium, paid: t.pricePaid, opensource: t.priceOpensource }[pricing];
}

// ============ 渲染 ============
function cardHTML(tool) {
  const t = I18N[state.lang];
  const desc = state.lang === "zh" ? tool.desc_zh : tool.desc_en;
  const hue = hueFromName(tool.name);
  const badge = tool.featured ? `<span class="badge badge-featured">${t.featured}</span>` : "";
  const tags = tool.tags.slice(0, 4).map((tag) => `<span>${tag}</span>`).join("");
  const host = new URL(tool.url).hostname.replace(/^www\./, "");
  return `
    <article class="card${tool.featured ? " featured-card" : ""}">
      <div class="card-top">
        <div class="card-avatar" style="background:linear-gradient(135deg,hsl(${hue},70%,55%),hsl(${(hue + 60) % 360},70%,45%))" aria-hidden="true">${tool.name.charAt(0).toUpperCase()}</div>
        <h3 class="card-name"><a href="${tool.url}" target="_blank" rel="noopener">${tool.name}</a> ${badge}</h3>
        <span class="badge badge-${tool.pricing}">${pricingLabel(tool.pricing)}</span>
      </div>
      <p class="card-desc">${desc}</p>
      <div class="card-tags">${tags}</div>
      <div class="card-footer">
        <a class="card-visit" href="${tool.url}" target="_blank" rel="noopener">${state.lang === "zh" ? "访问官网 →" : "Visit site →"}</a>
        <span class="card-host">${host}</span>
      </div>
    </article>`;
}

function filteredTools() {
  const q = state.q.trim().toLowerCase();
  return TOOLS.filter((tool) => {
    if (state.cat !== "all" && tool.cat !== state.cat) return false;
    if (state.pricing !== "all" && tool.pricing !== state.pricing) return false;
    if (!q) return true;
    const haystack = [tool.name, tool.desc_en, tool.desc_zh, tool.tags.join(" ")].join(" ").toLowerCase();
    return q.split(/\s+/).every((word) => haystack.includes(word));
  });
}

function render() {
  const tools = filteredTools();
  grid.innerHTML = tools.map(cardHTML).join("");
  noResults.hidden = tools.length > 0;
  resultCount.textContent = I18N[state.lang].resultCount(tools.length);
}

// ============ 文案切换 ============
function applyLang() {
  const dict = I18N[state.lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.innerHTML = typeof dict[key] === "function" ? dict[key](TOOLS.length) : dict[key];
  });
  searchInput.placeholder = dict.searchPlaceholder;
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
  document.title = dict.pageTitle;
  $("#langToggle").textContent = state.lang === "zh" ? "EN" : "中文";
  localStorage.setItem("aav-lang", state.lang);
  render();
}

// ============ 事件绑定 ============
// 分类标签
document.querySelectorAll(".cat-tabs .tab").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".cat-tabs .tab").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    state.cat = btn.dataset.cat;
    render();
  });
});

// 价格筛选
document.querySelectorAll(".pricing-tabs .chip").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".pricing-tabs .chip").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    state.pricing = btn.dataset.pricing;
    render();
  });
});

// Hero 统计卡片点击 = 快捷分类筛选
document.querySelectorAll("[data-filter-cat]").forEach((chip) => {
  chip.addEventListener("click", () => {
    const cat = chip.dataset.filterCat;
    const tab = document.querySelector(`.cat-tabs .tab[data-cat="${cat}"]`);
    if (tab) tab.click();
  });
});

// 搜索框
searchInput.addEventListener("input", () => {
  state.q = searchInput.value;
  render();
});

// 快捷键：/ 聚焦搜索，Esc 清空
document.addEventListener("keydown", (e) => {
  if (e.key === "/" && document.activeElement !== searchInput) {
    e.preventDefault();
    searchInput.focus();
  } else if (e.key === "Escape" && document.activeElement === searchInput) {
    searchInput.value = "";
    state.q = "";
    render();
    searchInput.blur();
  }
});

// 语言切换
$("#langToggle").addEventListener("click", () => {
  state.lang = state.lang === "en" ? "zh" : "en";
  applyLang();
});

// 返回顶部
const backTop = $("#backTop");
window.addEventListener("scroll", () => {
  backTop.hidden = window.scrollY < 600;
});
backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// ============ 初始化 ============
(function init() {
  // 语言优先级：URL 参数 > 本地存储 > 浏览器语言
  const urlLang = new URLSearchParams(location.search).get("lang");
  const saved = localStorage.getItem("aav-lang");
  const browser = navigator.language || "";
  state.lang = urlLang === "zh" || urlLang === "en"
    ? urlLang
    : saved || (browser.toLowerCase().startsWith("zh") ? "zh" : "en");

  // 支持 ?q= 站内搜索（配合 JSON-LD SearchAction）
  const q = new URLSearchParams(location.search).get("q");
  if (q) {
    state.q = q;
    searchInput.value = q;
  }

  applyLang();
})();
