// Stable introductory knowledge; source portals are supplied for further reading.
const fieldNotes = [
  ['science','01','光的边界','阳光区通常延伸至约 200 米；200–1,000 米为暮光区，更深处没有可用的太阳光。边界随水质、纬度和季节变化。','为什么蓝色留得更久？','水会选择性吸收光。红光衰减较快，蓝绿光通常传播得更远；颗粒物也会散射光，因此深度不是唯一决定因素。','NOAA Ocean Service'],
  ['science','02','压力不是重力','海水压力大致每下潜 10 米增加一个大气压。6,200 米处约为海面压力的六百多倍，但重力并没有增加六百倍。','深海动物为什么不被压扁？','许多动物没有充气空间，体内外压力接近平衡。细胞膜、蛋白质与渗透调节仍需适应高压；潜艇则必须以耐压壳保护内部空间。','NOAA Ocean Exploration'],
  ['science','03','海洋雪','上层海洋的有机碎屑、排泄物和死亡生物缓缓下沉，像连续的雪。这是许多深海食物网的能量来源。','每一片都能落到海底吗？','不能。大量有机物在下沉途中被消耗或分解。抵达海底的份额受到生产力、水深和微生物活动影响。','WHOI'],
  ['science','04','不用阳光的生态系统','热液喷口附近，微生物可以利用硫化氢等化学物质获得能量，并固定碳。这与植物依靠阳光的光合作用不同。','热泉周围都很烫吗？','喷口流体可很热，但与冷海水混合后形成复杂梯度。动物通常生活在适宜的混合区域，不是直接浸在最热的喷流中。','WHOI'],
  ['science','05','生物发光','生物发光由化学反应产生，可用于捕食、交流、防御或伪装。深海并非只有黑暗，也充满短暂而有意义的光。','红光在深海有什么用？','部分深海鱼具有红色发光能力。在许多深海动物不易感知红光的环境里，这可成为特殊的照明或捕食策略。','MBARI'],
  ['science','06','地球最大的迁徙','许多浮游动物与鱼类夜间上升取食、白天下沉避敌。昼夜垂直迁徙连接浅海生产与深层碳运输。','声呐为什么会发现“假海底”？','密集生物层会反射声波，形成深散射层；早期探测有时将它误认为海底，它还会随昼夜迁移。','NOAA Ocean Exploration'],
  ['science','07','声音比光走得远','海水中的声速通常约 1,500 米每秒，随温度、盐度和压力变化。声呐利用回波探测距离，而无线电很难直接穿透深海水体。','声呐如何换算距离？','脉冲到目标再返回有两段路程：距离约等于声速乘以往返时间，再除以二。海况和声速剖面影响精度。','NOAA Ocean Exploration'],
  ['science','08','海沟与超深渊','海沟常与板块俯冲相关。6,000 米以下常称超深渊带，分布在彼此隔离的海沟，环境差异可孕育不同群落。','“深渊”到底从哪里开始？','常见分区：深海带约 1,000–4,000 米，深渊带约 4,000–6,000 米，超深渊带约 6,000 米以下。名称不应取代具体深度。','NOAA Ocean Exploration'],
  ['species','09','巨型乌贼','Architeuthis dux','十条附肢，包括两条长捕食触腕；巨大眼睛有助于感知昏暗环境。它是真实动物，但成年个体在自然环境中的行为仍难以观察。','它与大王酸浆鱿不是同一种。电影中攻击潜艇的“海怪”情节也不能当作真实习性。','Smithsonian Ocean'],
  ['species','10','吸血鬼乌贼','Vampyroteuthis infernalis','名字吓人，食性却主要与海洋雪有关。它适应低氧环境，利用细长丝状结构收集有机碎屑。','它不是吸血动物。披风状腕膜与深红外观是名称来源，而非饮食说明。','MBARI'],
  ['species','11','管眼鱼','Macropinna microstoma','头部具有透明罩，管状眼睛可改变朝向，帮助它寻找上方猎物，并在进食时调整观察方向。','脸部看似“眼睛”的两个小点实际并非真正的眼球；绿色管状结构才是视觉器官的一部分。','MBARI'],
  ['species','12','深海鮟鱇','Melanocetus johnsonii','雌鱼的发光诱饵可以吸引猎物。深海鮟鱇类的性别差异和繁殖策略多样，不同物种不能一概而论。','并非所有鮟鱇的雄鱼都会永久融合到雌鱼身上。页面鱼影是艺术化轮廓。','Smithsonian Ocean'],
  ['species','13','管虫与共生细菌','Riftia pachyptila','巨型管虫成体没有普通的消化道，依靠体内共生细菌获得营养。细菌利用喷口化学物质合成有机物。','红色羽状结构参与物质交换。热液生态系统说明生命可以绕过当地的太阳光供能。','WHOI'],
  ['species','14','超深渊端足类','Hadal amphipods','这些小型甲壳动物可在海沟极深处活动，一些以沉降有机物或腐肉为食。极端环境中也存在完整的食物联系。','个体大小、分布与食性随种类变化，不能用单一“巨型深海虾”概括整个类群。','NOAA Ocean Exploration'],
  ['expedition','15','1960 · 的里雅斯特号','首次载人抵达挑战者深渊','雅克·皮卡尔与唐·沃尔什乘深潜器完成历史下潜。深潜器通过浮力系统、压载与耐压乘员舱应对高压。','探索里程碑','当年的水深测量与现代高精度测量存在差异；纪录应结合仪器和年代理解。','Smithsonian Ocean'],
  ['expedition','16','1977 · 热液生态发现','加拉帕戈斯裂谷','科学家发现深海热液喷口与丰盛生物群落，改变了对无光生态系统能量来源的理解。','为什么重要？','化学合成与共生机制成为深海生态研究的核心，也为生命起源和其他星球环境提供研究线索。','WHOI'],
  ['expedition','17','2012 · 单人极深下潜','DEEPSEA CHALLENGER','导演兼探险者詹姆斯·卡梅隆驾驶潜器单人抵达挑战者深渊，将工程、影像记录与海洋探索结合。','电影人与真实科考','这是真实探险事件，不是《深渊》的电影剧情；两者可以互相启发，但证据性质不同。','Smithsonian Ocean'],
  ['expedition','18','今天 · 机器人接力','ROV / AUV / HOV','载人潜器用于直接观察，遥控潜器通过缆线传输电力与数据，自主潜器按规划执行测绘与采样任务。','为什么不只用一种？','航程、载荷、通讯、导航和任务风险不同。多平台协作比一种设备包办所有调查更现实。','MBARI']
];
const movies = [
  ['1989','深渊','The Abyss','水下作业团队遭遇未知智慧生命。封闭空间、通讯中断与巨大水体共同制造电影的压迫感。','水下工程、耐压环境与团队协作有现实基础；外星文明与超常水体控制属于科幻。','LIQUID CONTACT'],
  ['2020','深海异兽','Underwater','海底设施事故后，幸存者穿越黑暗海床。影片用有限视野和庞大生物尺度营造生存恐惧。','海底作业有真实工程风险；怪物、设施情节与极端逃生方式是虚构，不能作为潜水操作指南。','UNKNOWN MASS'],
  ['2018','巨齿鲨','The Meg','史前巨型鲨鱼从未知深海区域出现，现代科考遭遇电影式巨兽危机。','巨齿鲨已灭绝；没有可靠科学证据表明它仍藏在海沟中。深海的神秘不等于所有史前生物都能在那里生存。','EXTINCTION FILE'],
  ['1989','烈血海底城','Leviathan','深海采矿人员发现残骸后遭遇生物变异危机。工业设施与恐怖叙事交织。','影片中的快速变异与怪物机制属于虚构。遗传学和污染研究需要证据，不能以电影设定推断现实风险。','MUTATION FICTION']
];
const categoryNames={science:'海洋科学',species:'生物档案',expedition:'探索历史'};
document.querySelector('#knowledgeGrid').innerHTML=fieldNotes.map(entry=>{
  const [category,id,title,lead,...notes]=entry;
  const [question,answer,source]=category==='expedition'?notes.slice(1):notes;
  const overview=category==='expedition'?`${lead} · ${notes[0]}`:lead;
  return `<article class="knowledge-card" data-category="${category}"><div class="archive-id">${categoryNames[category]} / ${id}</div><h3>${title}</h3><p>${overview}</p>${category==='species'?`<p>${question}</p>`:''}<details><summary>${category==='species'?'生态笔记 / 常见误解':question}</summary><p>${answer}</p></details><small>延伸阅读：${source}</small></article>`;
}).join('');
document.querySelector('#cinemaGrid').innerHTML=movies.map(([year,title,english,plot,science,label],index)=>`<article class="cinema-card"><div class="film-art film-${index}" aria-hidden="true"><i></i><b>${String(index+1).padStart(2,'0')}</b><span>${label}</span></div><div class="film-body"><span class="fiction-badge">电影虚构 · ${year}</span><h3>${title}</h3><em>${english}</em><p>${plot}</p><details><summary>电影想象 / 科学对照</summary><p>${science}</p></details></div></article>`).join('');
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));document.querySelectorAll('.knowledge-card').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&card.dataset.category!==button.dataset.filter;});}));
