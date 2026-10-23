import {CAREERS, INTERESTS, STAGES, RESOURCES, PATHWAYS} from './data.js';

export const ACADEMIC = {
 class10:[['notchosen','Still exploring'],['math','Mathematics / science'],['biology','Biology / life sciences'],['commerce','Commerce / business'],['arts','Languages / humanities'],['vocational','Technical / practical subjects']],
 inter:[['mpc','MPC / Maths & Physics'],['bipc','BiPC / Biology'],['mec','MEC / Commerce + Maths'],['cec','CEC / Commerce'],['arts','Humanities / arts'],['vocational','Vocational / other']],
 diploma:[['electrical','Electrical / electronics'],['mechanical','Mechanical / manufacturing'],['computer','Computer / IT'],['civil','Civil / construction'],['health','Healthcare trades'],['other','Other technical trade']],
 ug:[['cse','Computer science / IT'],['ece','Electronics / electrical'],['mechanical','Mechanical / civil'],['science','BSc / natural sciences'],['commerce','BCom / BBA / economics'],['arts','BA / humanities / design'],['health','Healthcare / life sciences'],['other','Another undergraduate field']],
 graduate:[['tech','Engineering / technology'],['science','Science / healthcare'],['commerce','Business / commerce'],['arts','Arts / humanities'],['vocational','Vocational / technical'],['other','Other qualification']],
 pg:[['tech','Technology / engineering'],['science','Science / research'],['commerce','Business / management'],['arts','Arts / social sciences'],['health','Health / medicine'],['other','Other specialization']]
};
export const STRENGTHS=[{id:'numbers',label:'Working with numbers',te:'సంఖ్యలతో పని'},{id:'writing',label:'Writing and communication',te:'రచన మరియు సంభాషణ'},{id:'hands',label:'Making and fixing things',te:'వస్తువులు తయారు చేయడం / మరమ్మత్తు'},{id:'empathy',label:'Listening and helping',te:'వినడం మరియు సహాయం'},{id:'visual',label:'Visual thinking and design',te:'చిత్రకల్పన మరియు డిజైన్'},{id:'logic',label:'Problem solving',te:'సమస్య పరిష్కారం'},{id:'organize',label:'Organizing and leading',te:'నిర్వహణ మరియు నాయకత్వం'},{id:'curiosity',label:'Research and curiosity',te:'పరిశోధన మరియు ఆసక్తి'}];
export const STYLES=[['balanced','A mix of learning styles'],['practical','Hands-on and practical'],['analytical','Research and analysis'],['creative','Creative and visual'],['people','Working closely with people']];
export const PRIORITIES=[['balanced','I want to explore openly'],['budget','Keep costs manageable'],['local','Prefer nearby options'],['fast','Build job-ready skills'],['flexible','Keep many future routes open']];
export const GOALS=[['explore','Understand my options'],['education','Choose further education'],['job','Explore jobs and employment'],['skills','Build relevant skills'],['research','Consider research or higher study'],['startup','Build something of my own']];
export const AREAS=[['any','Any location'],['local','Near my home / region'],['remote','Online / remote options']];
export const EXPERIENCE=[['beginner','I am just starting'],['some','I have studied / practiced a little'],['portfolio','I have projects or experience']];
const domains={software:'technology',ai:'technology',cyber:'technology',data:'technology',electrical:'machines',technician:'machines',automation:'machines',solar:'machines',nurse:'health',labtech:'health',publichealth:'health',ux:'creative',animation:'creative',business:'business',accounting:'business',entrepreneur:'business',agritech:'nature',teacher:'public',research:'science',civilservice:'public',pilot:'aviation',aircraft:'aviation',drone:'aviation',airport:'aviation'};
const strengthMap={numbers:['data','accounting','electrical','ai','research'],writing:['teacher','business','civilservice','publichealth'],hands:['technician','automation','electrical','solar','agritech','aircraft','drone'],empathy:['nurse','teacher','publichealth'],visual:['ux','animation'],logic:['software','cyber','ai','automation','data'],organize:['entrepreneur','business','civilservice'],curiosity:['research','ai','labtech','agritech','pilot','aircraft']};
const streamMap={math:['software','ai','electrical','data','pilot','aircraft'],biology:['nurse','labtech','publichealth','research'],commerce:['business','accounting','entrepreneur','data'],arts:['teacher','ux','animation','civilservice'],vocational:['technician','automation','solar'],mpc:['software','ai','electrical','data','pilot','aircraft'],bipc:['nurse','labtech','publichealth','research'],mec:['business','accounting','data'],cec:['business','accounting','civilservice'],electrical:['electrical','technician','automation','solar'],mechanical:['automation','electrical','solar'],computer:['software','cyber','data'],civil:['solar','civilservice'],health:['nurse','labtech','publichealth'],cse:['software','ai','cyber','data','ux'],ece:['electrical','automation','software'],science:['research','labtech','data','agritech'],arts:['teacher','civilservice','ux','animation'],tech:['software','ai','electrical','automation'],other:[],notchosen:[]};
const stageEmphasis={class10:['aircraft','drone','technician','electrical','teacher','nurse','software','agritech','animation','accounting'],inter:['aircraft','pilot','software','nurse','labtech','electrical','ux','teacher','accounting','agritech'],diploma:['technician','automation','electrical','solar','software'],ug:['software','ai','data','cyber','ux','business','research','publichealth'],graduate:['software','data','business','accounting','teacher','civilservice','entrepreneur'],pg:['research','ai','publichealth','business','teacher','agritech']};
export const ROADMAP_LIBRARY={
 'aviation': {title:'Aviation and mobility directions',steps:[['Explore the roles','Compare flying, maintenance, drone technology and airport coordination. Each role has different requirements.'],['Verify regulated qualifications','Consult the correct Indian aviation authority, training approval information and official eligibility notices.'],['Compare realistic routes','Investigate accredited education, medical requirements where relevant, costs and alternatives.'],['Develop transferable foundations','Strengthen mathematics, science, safety practice or operations skills appropriate to your interests.'],['Take an official next step','Read the source authority and shortlist a recognized training path or related career.']],alternatives:['Flight training where medically and financially feasible and officially eligible','Regulated aircraft maintenance engineering','Applicable drone operations training','Airport and ground operations roles'],resourceIds:['dgca','aai','ncs','ncert']},
 'technical': {title:'Technical / engineering direction',steps:[['Explore the work','Read career tasks, tools and specializations rather than choosing solely by name.'],['Compare learning routes','Consider appropriate Intermediate subjects, recognized diploma / ITI programs, or degrees depending on your current stage.'],['Verify admission criteria','Check official program-specific requirements, recognition and current admissions before applying.'],['Practice safely','Build a supervised practical project and develop basic math, science and safety skills.'],['Plan the next move','Shortlist two verified programs or opportunities and ask a teacher or practitioner about the difference.']],alternatives:['Academic engineering route (subject to eligibility)','Recognized diploma or technical training where eligible','Approved trades and apprenticeships','Related technician and applied-technology occupations'],resourceIds:['tgpoly','iti','ncs','nptel']},
 'digital':{title:'Computing and digital careers',steps:[['Understand the role','Compare coding, design, data and operations responsibilities.'],['Build foundations','Practice logical thinking, digital literacy and a suitable beginner course.'],['Choose a learning pathway','Compare formal study, accredited training and self-guided practice according to your stage.'],['Create proof of work','Build one small project, document what you learned and request feedback.'],['Explore real openings','Check official learning, career and internship portals for current qualifications.']],alternatives:['Computer science or related degree where eligible','Recognized diploma and vocational IT routes','Skill portfolio plus verified entry-level training','Related design, data or cybersecurity pathways'],resourceIds:['nptel','ncs','aicte','ncert']},
 'health':{title:'Health and life sciences',steps:[['Explore different healthcare roles','Distinguish regulated patient-care professions from research, public health and laboratory roles.'],['Check subject requirements','Verify the required science subjects, recognized institutions and regulator-specific criteria.'],['Compare programs','Review course duration, practical training, costs and location.'],['Learn responsibly','Develop science foundations and communication through authorized educational programs.'],['Confirm next application step','Use the official institution or regulator source, not a general recommendation score.']],alternatives:['Recognized nursing and allied-health courses','Laboratory science and diagnostics where eligible','Public-health or science education','Biological research and related education'],resourceIds:['ncs','ncert','epass']},
 'creative':{title:'Design and creative work',steps:[['Explore creative disciplines','Understand the difference between UI design, animation, visual media and product design.'],['Practice fundamentals','Develop drawing, storytelling, user empathy or software skills.'],['Create a portfolio','Complete two original projects and explain your design decisions.'],['Compare training choices','Review recognized courses, affordability and mentor feedback.'],['Take an action','Request portfolio feedback or explore a verified learning resource.']],alternatives:['Formal design or arts education','Shorter skill-training programs','Portfolio-driven project experience','Related user research, media and digital-product work'],resourceIds:['nptel','ncs','ncert']},
 'business':{title:'Business, commerce and entrepreneurship',steps:[['Understand the roles','Compare accounting, management, analysis and entrepreneurship.'],['Build fundamentals','Learn financial literacy, spreadsheets, communication and ethical business practices.'],['Compare qualifications','Check commerce, management or professional routes and their eligibility.'],['Apply in a small project','Analyze a local business process or create a safe practice budget.'],['Choose a next step','Explore a recognized course, entrepreneurship cell or official career resource.']],alternatives:['Commerce / business degree route','Vocational accounting or operations skills','Management or analytics progression','Small entrepreneurship experiment with appropriate support'],resourceIds:['ncs','nptel','epass']},
 'public':{title:'Education, research and public service',steps:[['Choose the type of impact','Compare teaching, public institutions, applied research and social work.'],['Identify qualifications','Check role-specific degree, accreditation and examination requirements.'],['Develop useful skills','Strengthen writing, research, subject knowledge and community communication.'],['Seek supervised experience','Explore authorized school, NGO or academic opportunities.'],['Verify the next milestone','Use current official eligibility and institutional information.']],alternatives:['Teaching and education programs','Public-service preparation where eligible','Social science and public-health routes','Research or specialist higher studies'],resourceIds:['ncs','ncert','nptel']}
};
export const CAREER_ROUTE={architect:'creative',biotech:'health',agronomist:'technical',renewable:'technical',journalist:'creative',logistics:'business',environment:'technical',socialwork:'public',robotics:'technical',teacherstem:'public',software:'digital',ai:'digital',cyber:'digital',data:'digital',electrical:'technical',technician:'technical',automation:'technical',solar:'technical',nurse:'health',labtech:'health',publichealth:'health',ux:'creative',animation:'creative',business:'business',accounting:'business',entrepreneur:'business',agritech:'technical',teacher:'public',research:'public',civilservice:'public',pilot:'aviation',aircraft:'aviation',drone:'aviation',airport:'aviation'};
export const STAGE_ACTION={class10:'Explore two post-Class-10 routes and verify their current admission information with a school teacher.',inter:'Check program-specific subject eligibility and official admissions before choosing a course.',diploma:'Compare one employment / apprenticeship route with one eligible further-study route.',ug:'Choose a role, identify two missing skills and start one portfolio-ready project.',graduate:'Compare two realistic job or further-education directions and plan your next application.',pg:'Assess specialist roles or research pathways and confirm exact qualification requirements.'};
export const EXTRA_RESOURCES=[
{id:'dgca',name:'DGCA - Directorate General of Civil Aviation',category:'Aviation regulation',url:'https://www.dgca.gov.in/',stages:['class10','inter','diploma','ug','graduate','pg'],desc:'Check regulated aviation training, safety and licensing information.',note:'Current licensing and medical eligibility must be verified directly.'},
{id:'aai',name:'Airports Authority of India',category:'Aviation careers',url:'https://www.aai.aero/',stages:['class10','inter','diploma','ug','graduate','pg'],desc:'Review official organization and recruitment information.',note:'Specific vacancy and degree requirements vary.'},
{id:'aicte',name:'AICTE National Internship Portal',category:'Internships',url:'https://internship.aicte-india.org/',stages:['diploma','ug','graduate','pg'],desc:'Browse internship listings. Eligibility and availability depend on the posting.',note:'Directory, not a verified current opening.'},
{id:'skillindia',name:'Skill India Digital Hub',category:'Skill development',url:'https://www.skillindiadigital.gov.in/',stages:['class10','inter','diploma','ug','graduate','pg'],desc:'Explore available skill and vocational learning resources.',note:'Programs and prerequisites must be checked.'},
{id:'swayam',name:'SWAYAM',category:'Learning',url:'https://swayam.gov.in/',stages:['inter','diploma','ug','graduate','pg'],desc:'Government-supported online course catalogue.',note:'Verify course intake, any examination fees and eligibility.'}
];
export const ALL_RESOURCES=[...RESOURCES.filter((r,i)=>RESOURCES.findIndex(x=>x.id===r.id)===i),...EXTRA_RESOURCES.filter(x=>!RESOURCES.some(r=>r.id===x.id))];
export const labelOf=(items,id)=>items.find(x=>Array.isArray(x)?x[0]===id:x.id===id)?.label||items.find(x=>Array.isArray(x)&&x[0]===id)?.[1]||id;
export function validateProfile(p){return !!p.stage && !!p.stream && Array.isArray(p.interests) && p.interests.length>0 && p.interests.length<=4 && Array.isArray(p.strengths) && p.strengths.length>0 && p.strengths.length<=3 && !!p.style && !!p.priority && !!p.goal;}
export function recommend(p){
 if(!validateProfile(p))return [];
 return CAREERS.map(c=>{
  const matched=p.interests.filter(id=>c.interests.includes(id));
  const strengths=p.strengths.filter(id=>(strengthMap[id]||[]).includes(c.id));
  const stream=(streamMap[p.stream]||[]).includes(c.id);
  const emphasis=(stageEmphasis[p.stage]||[]).includes(c.id);
  let score=matched.length*5+strengths.length*3+(stream?2:0)+(emphasis?1:0);
  const mode=(p.style==='practical'&&/hands|practical|outdoor/i.test(c.work))||(p.style==='analytical'&&/analytical|research|lab/i.test(c.work))||(p.style==='creative'&&/creative|design/i.test(c.work))||(p.style==='people'&&/people|community/i.test(c.work));
  if(mode)score+=2;
  const route=CAREER_ROUTE[c.id];
  if(p.goal==='research'&&['ai','research','labtech','publichealth'].includes(c.id))score+=2;
  if(p.goal==='startup'&&['entrepreneur','business','software','agritech'].includes(c.id))score+=2;
  if(p.goal==='skills'&&['technical','digital','creative'].includes(route))score+=1;
  if(p.priority==='fast'&&['technician','automation','solar','data','ux'].includes(c.id))score+=1;
  const reasons=[];
  if(matched.length)reasons.push(`Connects with ${matched.map(id=>INTERESTS.find(x=>x.id===id)?.label.toLowerCase()||id).slice(0,2).join(' and ')}`);
  if(strengths.length)reasons.push(`Uses strengths such as ${strengths.map(id=>STRENGTHS.find(x=>x.id===id)?.label.toLowerCase()||id).slice(0,2).join(' and ')}`);
  if(stream)reasons.push('Related to your selected study background');
  if(mode)reasons.push('Matches your preferred work style');
  if(!reasons.length)reasons.push('A different career family worth exploring');
  const watchouts=[];
  if(p.priority==='budget')watchouts.push('Compare actual program fees and financial assistance with official sources.');
  if(p.priority==='local'||p.location==='local')watchouts.push('Check local course availability; a relevant career may require travel or relocation.');
  if(['nurse','labtech'].includes(c.id))watchouts.push('Professional recognition and required subjects vary by program.');
  return {...c,score,matched,reasons,watchouts,route};
 }).sort((a,b)=>b.score-a.score||a.name.localeCompare(b.name));
}
export function getCareerPlan(profile,careerId){
 const career=CAREERS.find(x=>x.id===careerId); if(!career||!profile?.stage)return null;
 const r=ROADMAP_LIBRARY[CAREER_ROUTE[careerId]]||ROADMAP_LIBRARY.public;
 const stageInfo=PATHWAYS[profile.stage];
 const resources=ALL_RESOURCES.filter(x=>r.resourceIds.includes(x.id)&&x.stages.includes(profile.stage));
 const fallback=ALL_RESOURCES.filter(x=>x.stages.includes(profile.stage));
 const first=resources.length?resources:fallback;
 return {career,stage:STAGES.find(s=>s.id===profile.stage),title:r.title,steps:[...r.steps],stageSteps:stageInfo.steps,alternatives:r.alternatives,resources:first,stageAction:STAGE_ACTION[profile.stage],notice:'This route is an illustrative planning aid, not an eligibility assessment, job placement or real-time admission decision.'};
}
export function relevantResources(p,careerId=null){
 const candidates=ALL_RESOURCES.filter(r=>r.stages.includes(p.stage));
 if(!careerId)return candidates;
 const route=ROADMAP_LIBRARY[CAREER_ROUTE[careerId]];
 return candidates.map(r=>({...r,relevance:route?.resourceIds.includes(r.id)?1:0})).sort((a,b)=>b.relevance-a.relevance);
}
export function createActionList(p,careerId){
 const plan=getCareerPlan(p,careerId);if(!plan)return [];
 return [
 `Read the full ${plan.career.name} role description and note two skills you want to develop.`,
 `Explore at least one alternative route and compare what it requires.`,
 plan.stageAction,
 `Open an official resource and verify requirements, costs and current dates before applying.`,
 `Discuss your shortlist with a teacher, mentor, counsellor or guardian where appropriate.`
 ];
}
