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
  ['expedition','18','今天 · 机器人接力','ROV / AUV / HOV','载人潜器用于直接观察，遥控潜器通过缆线传输电力与数据，自主潜器按规划执行测绘与采样任务。','为什么不只用一种？','航程、载荷、通讯、导航和任务风险不同。多平台协作比一种设备包办所有调查更现实。','MBARI'],
  ['science','19','鲸落：一场漫长的接力','鲸的尸体沉到海底后，可能先吸引大型食腐动物，再供养利用骨骼有机物的生物。不同阶段可持续不同时间。','骨头为什么仍有营养？','骨内脂质与其他有机物可被微生物利用。部分鲸落还形成依赖硫化物的群落；并非每一次鲸落都经历相同阶段。','WHOI'],
  ['science','20','冷泉与热液不是一回事','冷泉是含甲烷或硫化物等流体从海床渗出的区域，常见化学合成群落。“冷”是相对热液而言。','为什么两处都能有管虫？','它们都可能提供共生微生物所需的化学物质，但地质机制、流体成分与生物种类不同。相似外观不代表相同环境。','NOAA Ocean Exploration'],
  ['science','21','缺氧不等于没有生命','海洋部分中层水体的溶解氧很低，形成氧最小带。耗氧分解、环流和通风共同影响其位置与强度。','深处一定比浅处更缺氧吗？','不一定。较冷、曾与大气交换的深水可以携带氧气。水深与溶解氧不能用一条直线对应。','WHOI'],
  ['science','22','温盐环流','海水密度受到温度、盐度与压力影响。大尺度环流把水体、热量、氧和营养盐连接起来。','“全球传送带”是准确地图吗？','它是帮助理解的简化图。真实环流还受风、混合、海底地形与涡旋影响，不是一条恒定速度的流水线。','WHOI'],
  ['science','23','海洋的碳账本','生物泵把上层固定的部分碳输送到深层；海水也通过溶解与环流参与碳储存。时间尺度差别很大。','下沉就等于永久封存吗？','不等于。许多有机碳被分解，释放回水体；深层碳还会随环流回到表面。储存需要说明地点、过程与时间尺度。','WHOI'],
  ['science','24','酸化不是海水变成酸','海洋吸收二氧化碳会改变碳酸盐体系，通常使 pH 降低。“酸化”描述变化方向，不要求 pH 低于 7。','所有海域变化相同吗？','不同水体的温度、缓冲能力、生物活动与环流不同。钙化生物的响应也与种类和生命阶段有关。','NOAA Ocean Service'],
  ['science','25','盐水湖：海底的密度边界','海底高盐卤水可因密度较大聚集在洼地，与上覆海水形成明显界面，看起来像水下湖泊。','可以像普通湖泊一样游进去吗？','这些环境可能高盐、缺氧并含有硫化物，对许多动物不适宜。视觉上像湖，不代表化学条件适合生存。','NOAA Ocean Exploration'],
  ['science','26','水合物：不是普通冰','在适合的低温高压条件下，水分子形成笼状结构包裹甲烷等气体，构成气体水合物。','一升温就会灾难性释放吗？','稳定性还受压力、沉积物与热量传递影响。释放速度与气体去向需要观测，不能由“可燃冰”这个名称推断全球后果。','WHOI'],
  ['science','27','地图不等于亲眼看见','卫星重力信息可推断大尺度海底地形；船载多波束声呐可更直接地测量水深。影像、取样又是另一些证据。','为什么不写一个“已探索百分比”？','“测绘”“成像”“取样”具有不同覆盖率、分辨率和标准。把它们混成单一比例容易误导。','NOAA Ocean Exploration'],
  ['science','28','深海采矿的研究问题','多金属结核、海底硫化物与富钴结壳是不同类型的矿产环境。采集可能改变栖息地并产生沉积物羽流。','结论可以简单说成零影响吗？','不能。需要评估生物多样性、羽流扩散、噪声与恢复时间，地区与操作方法差异很大。资源价值不能替代生态证据。','NOAA Ocean Exploration'],
  ['species','29','袋状深海水母','Deepstaria enigmatica','伞部如一层薄纱，可形成宽阔的袋状轮廓。它与传统画法中密集触手的水母外观不同。','柔软动物容易在采样时受损，水下影像对理解其形态与行为很重要。页面没有使用未经许可的科考影像。','MBARI'],
  ['species','30','栉水母','Ctenophora','成排纤毛帮助游动，照明下可见虹彩。虹彩与生物发光是不同现象；一些种类也具有发光能力。','它们不属于刺胞动物门，不能因为透明且像水母，就把两者当作同一类。','MBARI'],
  ['species','31','管水母：一个群体','Siphonophorae','许多管水母由分工不同的个员组成，协同完成游泳、捕食与繁殖。一条长链并非一条普通的单体水母。','群体长度不等于单个动物体长；以影像测量“最长动物”时必须说明定义与方法。','MBARI'],
  ['species','32','小飞象章鱼','Grimpoteuthis spp.','鳍像一对小耳朵，腕间有膜。它属于有鳍章鱼类，以鳍和腕的运动在深水中活动。','“小飞象”是俗称，包含多种动物；并非每一种都生活在相同深度或具有相同行为。','NOAA Ocean Exploration'],
  ['species','33','黑龙鱼类','Stomiidae','细长的身体、尖牙和发光器官适应昏暗水体。不同种类的诱饵、颜色与视觉能力各有差别。','有些龙鱼能产生或感知红光，但不能将一种鱼的能力推广到所有黑龙鱼。','Smithsonian Ocean'],
  ['species','34','深海狮子鱼','Liparidae','部分狮子鱼适应海沟高压环境，体形柔软，常以小型甲壳动物为食。它们仍受到生理条件的限制。','没有证据表明鱼类遍布海沟的每一个最深点；深度纪录应引用具体物种、地点与观测资料。','JAMSTEC'],
  ['species','35','巨型等足类','Bathynomus spp.','这些甲壳动物与潮虫同属等足类，部分种类体型显著大于浅水亲缘类群，常与食腐生活联系。','“深海巨型化”不是所有动物都会变大的定律，分类、温度、资源和演化历史都值得区分。','Smithsonian Ocean'],
  ['species','36','食骨蠕虫','Osedax spp.','没有传统意义上的口和消化道，借助共生细菌利用骨骼中的有机物。根状结构伸入骨内。','“食骨”不意味着单靠矿物质获得能量；理解其生态要关注骨内有机物与共生机制。','MBARI'],
  ['expedition','37','1872–1876 · 挑战者号','早期全球海洋科学航次','航次系统开展测深、温度测量与生物采集，为现代海洋学积累大量材料。','与挑战者深渊的关系','“挑战者”之名关联历史探测船只，但后来的深潜纪录与精确测深来自不同设备和航次。','Smithsonian Ocean'],
  ['expedition','38','1934 · 海底球','Beebe / Barton','威廉·毕比与奥蒂斯·巴顿利用缆绳悬挂的球形装置观察深水，留下早期直接观察记录。','为什么不是潜水艇？','装置依赖母船与缆绳，不能像自航潜器那样自由移动。观察能力和风险边界受到结构限制。','Smithsonian Ocean'],
  ['expedition','39','1964 · Alvin 投入使用','科学工作平台','Alvin 的科学航次包括地质、生态和海底化学研究，潜器也在服役期间持续升级。','参数为什么会变化？','耐压舱、浮力材料与设备更新会改变能力。不能用早期型号的额定深度代表当前版本。','WHOI'],
  ['expedition','40','日本 · 载人与无人协同','SHINKAI 6500 / KAIKO','日本的深海探索平台包括载人潜器与无人探测系统，用于地质、生态及海沟研究。','型号名称是否等于实测纪录？','额定工作能力、一次航次到达的深度和纪录是不同信息，应结合机构公布的型号与航次资料。','JAMSTEC'],
  ['expedition','41','海底钻探：时间的岩芯','科学钻探','从沉积物与岩石中取出岩芯，可以研究地球气候、构造和海底微生物的历史。','每层都代表同样时间吗？','沉积速率、扰动与侵蚀可能不同。年龄解释通常需要化石、化学指标和多种测年方法交叉检验。','IODP'],
  ['expedition','42','一份可信的观测记录','地点 / 时间 / 方法 / 不确定性','记录设备、坐标、深度、校准和取样条件，让其他研究者能够判断观察意味着什么。','漂亮照片足够证明新物种吗？','通常不够。分类研究还需比较形态、标本或遗传信息，遵循命名与证据规范；影像是线索而非万能结论。','MBARI']
];
const movies = [
  ['1989','深渊','The Abyss','水下作业团队遭遇未知智慧生命。封闭空间、通讯中断与巨大水体共同制造电影的压迫感。','水下工程、耐压环境与团队协作有现实基础；外星文明与超常水体控制属于科幻。','LIQUID CONTACT'],
  ['2020','深海异兽','Underwater','海底设施事故后，幸存者穿越黑暗海床。影片用有限视野和庞大生物尺度营造生存恐惧。','海底作业有真实工程风险；怪物、设施情节与极端逃生方式是虚构，不能作为潜水操作指南。','UNKNOWN MASS'],
  ['2018','巨齿鲨','The Meg','史前巨型鲨鱼从未知深海区域出现，现代科考遭遇电影式巨兽危机。','巨齿鲨已灭绝；没有可靠科学证据表明它仍藏在海沟中。深海的神秘不等于所有史前生物都能在那里生存。','EXTINCTION FILE'],
  ['1989','烈血海底城','Leviathan','深海采矿人员发现残骸后遭遇生物变异危机。工业设施与恐怖叙事交织。','影片中的快速变异与怪物机制属于虚构。遗传学和污染研究需要证据，不能以电影设定推断现实风险。','MUTATION FICTION'],
  ['1998','深海圆疑','Sphere','研究团队在海底残骸中遭遇难以解释的装置，心理压力与未知现象逐渐纠缠。','记忆与恐惧具现化属于科幻设定。真实调查首先排查仪器故障、通讯问题与环境变化，不把异常直接当作超自然证据。','MIND / MATTER'],
  ['1954','海底两万里','20,000 Leagues Under the Sea','尼摩船长与鹦鹉螺号把海底航行变成一场工程、冒险与伦理交织的旅程。','“两万里”描述旅程长度而非下潜深度。潜艇概念有现实对应，电影装备和巨型生物冲突经过戏剧化处理。','NAUTILUS ARCHIVE'],
  ['2004','水中生活','The Life Aquatic with Steve Zissou','一支风格独特的海洋纪录片团队追逐神秘生物，展开带有荒诞幽默的海上冒险。','影片中的彩色海洋生物带有明显的艺术设计。真实科考需要系统取样、物种鉴定与可重复记录，不能以冒险叙事代替。','EXPEDITION COMEDY'],
  ['2014','深海挑战','Deepsea Challenge 3D','纪录片记录詹姆斯·卡梅隆团队筹备与开展极深载人探索，将设备、训练与现场影像串联起来。','这是纪录片，不是怪物故事。真实影像仍有剪辑与叙事选择；精确参数与科学结论应对照航次和机构记录。','REAL EXPEDITION','纪录片']
];
const categoryNames={science:'海洋科学',species:'生物档案',expedition:'探索历史'};
const readingSources={
  'NOAA Ocean Service':'https://oceanservice.noaa.gov/facts/',
  'NOAA Ocean Exploration':'https://oceanexplorer.noaa.gov/',
  'MBARI':'https://www.mbari.org/', 'WHOI':'https://www.whoi.edu/',
  'Smithsonian Ocean':'https://ocean.si.edu/',
  'JAMSTEC':'https://www.jamstec.go.jp/e/', 'IODP':'https://www.iodp.org/'
};
document.querySelector('#knowledgeGrid').innerHTML=fieldNotes.map(entry=>{
  const [category,id,title,lead,...notes]=entry;
  const [question,answer,source]=category==='expedition'?notes.slice(1):notes;
  const overview=category==='expedition'?`${lead} · ${notes[0]}`:lead;
  return `<article class="knowledge-card" data-category="${category}"><div class="archive-id">${categoryNames[category]} / ${id}</div><h3>${title}</h3><p>${overview}</p>${category==='species'?`<p>${question}</p>`:''}<details><summary>${category==='species'?'生态笔记 / 常见误解':question}</summary><p>${answer}</p></details><small>延伸阅读（原文待核验）：<a href="${readingSources[source]}" target="_blank" rel="noopener noreferrer">${source} ↗</a></small></article>`;
}).join('');
document.querySelector('#cinemaGrid').innerHTML=movies.map(([year,title,english,plot,science,label,type],index)=>`<article class="cinema-card"><div class="film-art film-${index%4}" aria-hidden="true"><i></i><b>${String(index+1).padStart(2,'0')}</b><span>${label}</span></div><div class="film-body"><span class="fiction-badge">${type==='纪录片'?'纪录片 · 真实探险题材':'故事片 · 虚构剧情'} · ${year}</span><h3>${title}</h3><em>${english}</em><p>${plot}</p><details><summary>${type==='纪录片'?'影像记录 / 阅读提示':'电影想象 / 科学对照'}</summary><p>${science}</p></details></div></article>`).join('');
let activeCategory='all';
const archiveCards=[...document.querySelectorAll('.knowledge-card')];
const archiveSearch=document.querySelector('#archiveSearch');
const searchableText=archiveCards.map(card=>card.textContent.toLocaleLowerCase());
function filterArchives(){
  const query=archiveSearch.value.trim().toLocaleLowerCase();let visible=0;
  archiveCards.forEach((card,index)=>{
    card.hidden=(activeCategory!=='all'&&card.dataset.category!==activeCategory)||!searchableText[index].includes(query);
    if(!card.hidden)visible++;
  });
  document.querySelector('#archiveResults').textContent=`显示 ${visible} / ${archiveCards.length} 条档案`;
  document.querySelector('#archiveEmpty').hidden=visible!==0;
}
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
  activeCategory=button.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
  filterArchives();
}));
archiveSearch.addEventListener('input',filterArchives);filterArchives();

const vocabulary=[
  ['CTD','电导率 / 温度 / 深度','通过电导率估算盐度，并测量温度与压力，用于建立水体剖面。'],
  ['ROV','遥控潜器','与母船通过缆线连接，由操作者控制；可搭载摄像、机械臂与采样设备。'],
  ['AUV','自主潜器','按规划任务航行，常用于测绘；自主并不意味着永远不需要人工监督。'],
  ['HOV','载人潜器','乘员在耐压舱内观察和作业，活动能力取决于具体型号。'],
  ['MULTIBEAM','多波束声呐','同时发出多个声束测量海底条带，结合导航与声速校正生成地形。'],
  ['eDNA','环境 DNA','分析水或沉积物中的遗传物质线索；检出并不自动证明动物此刻就在附近。'],
  ['CHEMOSYNTHESIS','化学合成','利用化学反应提供能量合成有机物，深海热液与冷泉生态中尤为重要。'],
  ['SYMBIOSIS','共生','不同生物长期紧密关联。共生不总是互利，需要辨认具体关系。'],
  ['PELAGIC','水层环境','主要指开放水体，与海底底栖环境区分；许多动物在生命阶段间跨越二者。'],
  ['BENTHIC','底栖环境','海底表面或沉积物相关环境，不等于所有底栖生物都不会移动。'],
  ['HADAL','超深渊带','常指 6,000 米以下环境，主要分布于海沟，边界是约定的深度分区。'],
  ['UNCERTAINTY','测量不确定性','数值需要说明误差来源与范围；小数位更多，不代表测量更可信。']
];
document.querySelector('#glossaryGrid').innerHTML=vocabulary.map(([term,name,description])=>`<div class="glossary-entry"><dt><span>${term}</span>${name}</dt><dd>${description}</dd></div>`).join('');
const echoTime=document.querySelector('#echoTime'),echoSpeed=document.querySelector('#echoSpeed');
function updateEcho(){
  const seconds=Number(echoTime.value),speed=Number(echoSpeed.value),distance=seconds*speed/2;
  document.querySelector('#echoTimeValue').textContent=`${seconds.toFixed(1)} s`;
  document.querySelector('#echoSpeedValue').textContent=`${speed} m/s`;
  document.querySelector('#echoDistance').textContent=`${Math.round(distance).toLocaleString('zh-CN')} m`;
  document.querySelector('#echoFormula').textContent=`${speed} × ${seconds.toFixed(1)} ÷ 2 = ${distance.toFixed(0)} 米`;
  document.querySelector('#echoTrack').style.setProperty('--echo-distance',`${distance/6400*100}%`);
}
echoTime.addEventListener('input',updateEcho);echoSpeed.addEventListener('input',updateEcho);updateEcho();
