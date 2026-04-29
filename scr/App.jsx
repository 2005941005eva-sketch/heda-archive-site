import React, { useState } from "react";
import "./index.css";

const profileRows = [
  ["Full Name", "Hedwig “Heda” Hatman Grindelwald-Dumbledore"],
  ["中文名", "海達・亥特曼"],
  ["Public Name", "Hatman"],
  ["House", "Slytherin"],
  ["Fathers", "Gellert = Father / Albus = Dad"],
  ["Appearance", "棕髮、綠眼，臉通常很臭"],
  ["Companion", "Mercurius，黃腳隼"],
  ["Main Field", "Transfiguration, Dark Arts, Alchemy, Life Conversion"],
];

const personalityPoints = [
  "話很少，不是因為腦袋空白，而是她通常已經在心裡分析完三輪。",
  "外表冷靜，臉常常很臭，導致同學以為她隨時都在不爽。",
  "不太會主動表達情緒，但會用行動記住別人的需求。",
  "非常討厭被人過度解讀，也不喜歡別人替她說出她的感受。",
  "對自己要求極高，常把休息視為浪費時間。",
  "有強烈的學術野心，但不是想出名，而是想解開別人不敢碰的問題。",
  "受 Gellert 影響，對黑魔法與禁忌知識沒有普通學生的恐懼感。",
  "受 Albus 影響，她並非沒有道德，而是會在越界前思考代價。",
  "她看起來冷淡，但對真正親近的人有非常深的依附與信任。",
  "她最可怕的地方不是情緒化，而是越痛苦越冷靜。"
];

const academicRows = [
  ["Transfiguration", "O", "能拆解高年級變形結構，後期生命轉化術的基礎。"],
  ["Charms", "O", "精準度極高，尤其擅長穩定型與保護型咒語。"],
  ["Defence Against the Dark Arts", "O", "理論與實戰都很強，部分理解來自 Gellert 的早期教導。"],
  ["Potions", "O", "步驟嚴謹，對材料變化的觀察力極細。"],
  ["Herbology", "O", "雖不熱情，但記憶力與分析能力足以支撐高分。"],
  ["History of Magic", "O", "能記住大量史料，也能做出政治與魔法史脈絡分析。"],
  ["Astronomy", "O", "穩定、精確，屬於她不太費力也能拿高分的科目。"],
  ["Alchemy", "O", "遠超同齡，公開論文即以鍊金術作為障眼法。"],
  ["Ancient Runes", "O", "擅長解讀古老魔法結構，常與黑魔法筆記交叉使用。"]
];

const pastRows = [
  ["出生狀態", "紀錄不完整。海達在被正式收養前，長期處於失去穩定照護者的狀態。"],
  ["生母", "海達對生母的記憶並不完整，但死亡、分離與被遺留的感覺成為她最早的生命經驗。"],
  ["流浪時期", "她曾在巫師與麻瓜世界邊界之間流浪，學會安靜、觀察與不向陌生人求助。"],
  ["夜騏／騎士墜鬼馬", "海達能看見牠們。這代表她曾真正理解死亡，而不是只聽說死亡。"],
  ["心理影響", "她早期缺乏安全感，因此後來非常討厭失控、討厭被拋下，也討厭自己顯得脆弱。"],
  ["後續影響", "生命轉化術並非純粹的學術狂熱，也與她過去對死亡、失去與『來不及』的執念有關。"]
];

const pastTimeline = [
  {
    year: "早期",
    title: "出生與生母的斷裂",
    text:
      "海達的早期紀錄並不完整。她與生母之間留下的不是清楚的家庭記憶，而是一種破碎、斷裂、無法回頭確認的缺口。這也是她後來對死亡與生命邊界產生執念的最早根源。"
  },
  {
    year: "幼年",
    title: "流浪時期",
    text:
      "在被收養以前，海達曾經有過一段流浪般的生活。她很早就學會降低存在感，不輕易相信陌生人，也不把需求說出口。這讓她後來看起來不像孩子，反而像一個過早學會自保的旁觀者。"
  },
  {
    year: "第一次看見",
    title: "夜騏／騎士墜鬼馬",
    text:
      "她能看見夜騏。對海達而言，那不是神秘動物課本上的知識，而是某種太早抵達她眼前的證明：死亡存在，而且死亡會留下痕跡。她沒有因此崩潰，只是把那份恐懼壓進了更深的地方。"
  },
  {
    year: "被接住",
    title: "遇見 Gellert 與 Albus",
    text:
      "Gellert 與 Albus 接住了她。這並不代表海達立刻變成幸福的小孩，她只是第一次開始理解：也許自己不需要永遠靠警覺活下去。只是這種安全感來得太晚，所以她仍然很難真正放鬆。"
  },
  {
    year: "後來",
    title: "死亡變成研究命題",
    text:
      "海達後來研究生命轉化術，不只是因為她聰明，也不只是因為她敢碰禁忌。某種程度上，她是在追問：如果當時有人來得及，如果死亡不是終點，如果生命能被重新導回，那麼失去是否仍然無法挽回？"
  }
];

const dimensionRows = [
  ["正式名稱", "死亡後短暫彌留之第四維度空間"],
  ["研究者", "Hedwig “Heda” Hatman"],
  ["核心媒介", "中間值"],
  ["狀態定義", "既非生命延續，也非完整死亡，而是死亡停損點後的短暫滯留區。"],
  ["主要目的", "觀測生命殘響、靈魂錨點與形體記憶在死亡後的短暫關聯。"],
  ["危險等級", "極高。此理論接近復活、招魂、靈魂分裂與黑魔法倫理禁區。"],
  ["後世影響", "此理論被後世黑巫師曲解，尤其被湯姆・瑞斗用於理解分靈體與死亡停損。"]
];

const dimensionPrinciples = [
  {
    title: "死亡不是瞬間，而是一段坍縮過程",
    text:
      "海達不認為死亡是一個絕對切點。她認為生命結束後，靈魂、魔力、形體記憶與意志殘響並不會在同一瞬間完全消失，而是會經歷極短暫的坍縮期。第四維度空間就是在這段坍縮期中被塑造出的暫時容器。"
  },
  {
    title: "中間值是空間的支架",
    text:
      "第四維度空間並非自然存在的死後世界，而是海達以中間值作為媒介強行撐起的魔法結構。中間值既不完全屬於生命，也不完全屬於無生命，因此能短暫承接死亡後殘留的生命訊號。"
  },
  {
    title: "靈魂錨點與形體記憶",
    text:
      "海達認為生命不只存在於靈魂，也存在於形體曾經維持生命的記憶裡。當靈魂錨點尚未徹底脫離、形體記憶尚未完全崩解時，第四維度空間能讓兩者短暫保持接觸。"
  },
  {
    title: "彌留不是復活",
    text:
      "第四維度空間本身不能等同復活。它只是讓死亡狀態暫停、延遲、可觀測。真正危險的地方在於：一旦海達能在此空間中重新導向生命殘響，她就可能讓死亡變成可被逆轉的工程問題。"
  }
];

const dimensionTimeline = [
  {
    year: "理論前提",
    title: "生命三域分類完成",
    text:
      "海達先建立有生命、中間值與無生命三域架構，確認生命狀態並非二分，而是可以存在過渡層。"
  },
  {
    year: "15歲",
    title: "中間值被穩定操作",
    text:
      "她成功以變形學配合中層黑魔法操作中間值，證明中間值可以被塑形、維持與導向。"
  },
  {
    year: "17歲",
    title: "死亡停損點被提出",
    text:
      "海達發現死亡不是立即歸零，而更像生命系統崩解前的停損點。只要介入得夠早，狀態就仍有被延緩的可能。"
  },
  {
    year: "完成期",
    title: "第四維度彌留空間成形",
    text:
      "她以中間值作為支架，塑造出死亡後短暫彌留的空間。這是生命轉化術最接近真正起死回生的部分。"
  },
  {
    year: "後世",
    title: "理論被湯姆・瑞斗扭曲",
    text:
      "湯姆・瑞斗並未真正理解海達理論中的生命倫理。他抓住了『死亡可以被停損』與『靈魂錨點可以被延長』兩個概念，卻將其扭曲為分裂靈魂、製造分靈體的黑魔法實踐。"
  },
  {
    year: "1998",
    title: "哈利與王十字車站現象",
    text:
      "哈利被佛地魔殺死後抵達王十字車站般的中介空間，並在那裡與鄧不利多對話。後世研究者常將此視為海達第四維度理論的現象證據：死亡後可能存在短暫、可被選擇、可被理解的彌留空間。"
  }
];

const horcruxRows = [
  ["湯姆的理解", "他沒有繼承海達的完整理論，只截取了死亡停損與靈魂錨點的部分。"],
  ["分靈體本質", "不是第四維度的完成，而是對靈魂錨點的粗暴、殘缺、暴力化應用。"],
  ["最大錯誤", "海達試圖理解死亡的過程；湯姆試圖否認死亡的權威。"],
  ["倫理差異", "海達的理論核心仍保留代價與邊界；湯姆則將他人的死亡作為自己延命的材料。"],
  ["後世評價", "分靈體被視為第四維度理論最惡劣的誤讀。它證明海達理論危險，但也證明湯姆從未真正理解它。"]
];

const researchCards = [
  {
    title: "生命轉化術",
    tag: "Core Theory",
    text:
      "海達將生命狀態分為有生命、中間值、無生命三個區域，並嘗試建立可操作的轉化路徑。這不是單純復活術，而是一套危險的魔法工程。"
  },
  {
    title: "中間值",
    tag: "Liminal Medium",
    text:
      "中間值是海達研究中最關鍵的介質。它既非完整生命，也非純粹無生命，而是能承接變形學與中層黑魔法的過渡狀態。"
  },
  {
    title: "死亡停損點",
    tag: "Forbidden Thesis",
    text:
      "海達最危險的結論是：死亡不是絕對終點，而是一種停損點。只要在狀態完全坍縮前介入，生命仍可能被重新導回。"
  },
  {
    title: "第四維度彌留空間",
    tag: "Restricted Archive",
    text:
      "她以中間值作為媒介，塑造出死亡後短暫彌留的空間。這個區域既不是生，也不是死，而是生命轉化術真正的禁忌核心。"
  }
];

const timeline = [
  {
    year: "6歲",
    title: "小小海達時期",
    text:
      "話少，但正處於探索世界的階段。她常跟在阿不思與蓋勒特身邊，雖然尚不熟練魔咒，卻已經能理解一、二年級課程內容。"
  },
  {
    year: "11歲",
    title: "進入霍格華茲",
    text:
      "以 Hatman 之名入學，分入 Slytherin。她外表冷靜、寡言，卻在學術能力上遠超同齡學生。"
  },
  {
    year: "15歲",
    title: "中間值研究成功",
    text:
      "海達嘗試將中間值以變形學配合中層黑魔法操作，成功建立生命與無生命之間的過渡模型。"
  },
  {
    year: "17歲",
    title: "完成生命轉化術",
    text:
      "她完成無生命到有生命的轉化，並意識到死亡只是一個停損點。真正的生命轉化術在此成形。"
  },
  {
    year: "畢業前",
    title: "發表鍊金術障眼法論文",
    text:
      "她公開刊登的是關於鍊金術的深層探討，某種程度上翻新了尼樂勒梅舊稿，用以掩蓋真正的研究方向。"
  }
];

const archiveRows = [
  {
    id: "HDA-001",
    name: "生命轉化術總綱",
    type: "Private Manuscript",
    status: "封存"
  },
  {
    id: "HDA-002",
    name: "中間值與變形學相容性筆記",
    type: "Research Notes",
    status: "限制閱覽"
  },
  {
    id: "HDA-003",
    name: "死亡停損點與彌留空間構築",
    type: "Forbidden Thesis",
    status: "禁閱"
  },
  {
    id: "HDA-004",
    name: "關於鍊金術的更深層探討",
    type: "Published Paper",
    status: "公開"
  },
  {
    id: "HDA-005",
    name: "分靈體與第四維度理論之誤讀",
    type: "Posthumous Commentary",
    status: "限制閱覽"
  },
  {
    id: "HDA-006",
    name: "王十字車站現象與彌留空間回推",
    type: "Later Case Study",
    status: "封存"
  }
];

const relations = [
  {
    name: "Gellert Grindelwald",
    role: "Father",
    text:
      "教導海達黑魔法、戰略性思考與近乎冷酷的實用主義。他讓海達敢於觸碰禁忌。"
  },
  {
    name: "Albus Dumbledore",
    role: "Dad",
    text:
      "給予海達學術秩序與道德框架。他不是讓海達停止探索，而是讓她知道越界必須承擔代價。"
  },
  {
    name: "Mercurius",
    role: "Companion",
    text:
      "海達的黃腳隼。牠像是海達冷靜外表中的一個小小破口，證明她並非真正沒有柔軟處。"
  }
];

function InfoTable({ rows = profileRows }) {
  return (
    <div className="info-table">
      {rows.map(([label, value]) => (
        <div className="info-row" key={label}>
          <div className="info-label">{label}</div>
          <div className="info-value">{value}</div>
        </div>
      ))}
    </div>
  );
}

function Section({ label, title, children }) {
  return (
    <section className="section">
      <div className="section-label">{label}</div>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default function App() {
  const [tab, setTab] = useState("profile");

  const pageTitle =
    tab === "profile"
      ? "Heda Hatman"
      : tab === "past"
      ? "Heda Before Adoption"
      : tab === "dimension"
      ? "Fourth Dimension Theory"
      : "Life Conversion Archive";

  return (
    <div className="site">
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-mark">H</div>
          <div>
            <div className="logo-title">HEDA</div>
            <div className="logo-subtitle">亥特曼全記錄</div>
          </div>
        </div>

        <nav className="nav">
          <button
            className={tab === "profile" ? "active" : ""}
            onClick={() => setTab("profile")}
          >
            個人官網
          </button>
          <button
            className={tab === "past" ? "active" : ""}
            onClick={() => setTab("past")}
          >
            過去檔案
          </button>
          <button
            className={tab === "dimension" ? "active" : ""}
            onClick={() => setTab("dimension")}
          >
            第四維度
          </button>
          <button
            className={tab === "archive" ? "active" : ""}
            onClick={() => setTab("archive")}
          >
            學術檔案庫
          </button>
        </nav>

        <div className="side-note">
          <div className="side-note-title">核心設定</div>
          <p>
            海達是葛林戴華德與鄧不利多的養女，以 Hatman 之名就讀霍格華茲。
            棕髮綠眼，臉通常很臭，但學業成績幾乎全 O。
          </p>
        </div>

        <div className="side-note">
          <div className="side-note-title">第四維度註記</div>
          <p>
            海達提出死亡停損點與彌留空間。後世認為，湯姆的分靈體與哈利的王十字車站經驗，
            都能被放進這套理論裡重新理解。
          </p>
        </div>
      </aside>

      <main className="main">
        <header className="top">
          <div>
            <div className="kicker">
              {tab === "profile"
                ? "PERSONAL WEBSITE"
                : tab === "past"
                ? "ORIGIN FILE"
                : tab === "dimension"
                ? "FOURTH DIMENSION"
                : "RESTRICTED ARCHIVE"}
            </div>
            <h1>{pageTitle}</h1>
          </div>

          <div className="top-tabs">
            <button
              className={tab === "profile" ? "active" : ""}
              onClick={() => setTab("profile")}
            >
              個人官網
            </button>
            <button
              className={tab === "past" ? "active" : ""}
              onClick={() => setTab("past")}
            >
              過去檔案
            </button>
            <button
              className={tab === "dimension" ? "active" : ""}
              onClick={() => setTab("dimension")}
            >
              第四維度
            </button>
            <button
              className={tab === "archive" ? "active" : ""}
              onClick={() => setTab("archive")}
            >
              學術檔案庫
            </button>
          </div>
        </header>

        <section className="hero">
          <div className="hero-badge">
            {tab === "profile"
              ? "Slytherin Student File"
              : tab === "past"
              ? "Pre-Adoption Record"
              : tab === "dimension"
              ? "Fourth Dimensional Liminal Space"
              : "Restricted Magical Research"}
          </div>
          <h2>
            {tab === "profile"
              ? "海達・亥特曼的人物全記錄"
              : tab === "past"
              ? "在成為 Hatman 以前"
              : tab === "dimension"
              ? "死亡後短暫彌留的第四維度空間"
              : "死亡不是終點，只是停損點。"}
          </h2>
          <p>
            {tab === "profile"
              ? "這是一份整理海達身分、外貌、個性、學業成績、家庭關係與重要時間線的角色網站。"
              : tab === "past"
              ? "這一頁收錄海達被收養前的過去：流浪、生母、死亡記憶，以及她為什麼能看見夜騏。這些不是附屬背景，而是她後來研究生命轉化術的心理根源。"
              : tab === "dimension"
              ? "這一頁整理海達生命轉化術中最危險的部分：她以中間值作為媒介，塑造出死亡後短暫彌留的第四維度空間。這套論述後來被湯姆・瑞斗扭曲成分靈體，也能解釋哈利在王十字車站的彌留經驗。"
              : "這裡收錄海達關於生命轉化術的核心研究：有生命、中間值、無生命，以及她對死亡狀態的重新定義。"}
          </p>
        </section>

        {tab === "profile" && (
          <>
            <div className="grid two">
              <Section label="SUBJECT FILE" title="人物檔案">
                <InfoTable />
              </Section>

              <Section label="APPEARANCE" title="外貌印象">
                <p>
                  海達是棕髮綠眼。她的五官並不柔弱，反而帶著一種很難親近的冷感。
                  她最常被同學記住的不是笑容，而是那張像是永遠不太高興的臉。
                </p>
                <p>
                  她不是真的一直生氣，但她天生表情少，加上觀察別人時眼神太銳利，
                  很容易讓人以為她正在審判整個房間。
                </p>
              </Section>
            </div>

            <Section label="PERSONALITY" title="海達的個性條列">
              <ul className="list">
                {personalityPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Section>

            <Section label="ACADEMIC RECORD" title="學業成績：全 O 大師">
              <p>
                海達是典型的全 O 型學生。她不是只會死背，而是能把不同科目的理論彼此串接，
                尤其擅長把變形學、黑魔法、鍊金術與古代魔法結構放進同一套邏輯裡。
              </p>

              <div className="archive-table">
                {academicRows.map(([subject, grade, note]) => (
                  <div className="archive-row" key={subject}>
                    <div className="archive-id">{grade}</div>
                    <div>
                      <div className="archive-name">{subject}</div>
                      <div className="archive-type">{note}</div>
                    </div>
                    <div className="status 公開">Outstanding</div>
                  </div>
                ))}
              </div>
            </Section>

            <Section label="TIMELINE" title="海達重要時間線">
              <div className="timeline">
                {timeline.map((item) => (
                  <div className="timeline-item" key={item.year + item.title}>
                    <div className="timeline-year">{item.year}</div>
                    <div>
                      <div className="timeline-title">{item.title}</div>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section label="RELATIONS" title="人物關係">
              <div className="card-grid">
                {relations.map((person) => (
                  <article className="mini-card" key={person.name}>
                    <div className="tag">{person.role}</div>
                    <h3>{person.name}</h3>
                    <p>{person.text}</p>
                  </article>
                ))}
              </div>
            </Section>
          </>
        )}

        {tab === "past" && (
          <>
            <div className="grid two">
              <Section label="ORIGIN FILE" title="被收養前的海達">
                <InfoTable rows={pastRows} />
              </Section>

              <Section label="THRESHOLD MEMORY" title="夜騏與死亡記憶">
                <p>
                  海達能看見夜騏／騎士墜鬼馬。這件事在她身上不是浪漫化的設定，
                  而是非常直接的傷痕：她確實理解死亡，並且很早就理解死亡。
                </p>
                <p>
                  對其他孩子來說，夜騏可能只是某種陰冷、神秘、難以親近的生物。
                  但對海達而言，牠們像是證明。證明有些事情曾經發生過，證明她沒有記錯，
                  也證明死亡不是成年人用來嚇小孩的抽象名詞。
                </p>
              </Section>
            </div>

            <Section label="PAST TIMELINE" title="過去時間線">
              <div className="timeline">
                {pastTimeline.map((item) => (
                  <div className="timeline-item" key={item.year + item.title}>
                    <div className="timeline-year">{item.year}</div>
                    <div>
                      <div className="timeline-title">{item.title}</div>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section label="MOTHER FILE" title="關於生母">
              <p>
                海達對生母的記憶不是完整的故事，而像是散落的碎片。她不一定能準確說出每一個細節，
                但她記得失去的感覺，記得被留下的感覺，也記得有些問題再也無法得到答案。
              </p>
              <p>
                這使她後來對「生命是否能被重新導回」產生異常強烈的執著。她研究死亡，不只是因為她天才，
                也不是因為她冷血，而是因為她太早知道了死亡的不可逆。
              </p>
              <p>
                因此，生命轉化術在海達身上不是單純的學術成就。它同時也是一種反抗：
                反抗來不及，反抗無法挽回，反抗那些成年人告訴她「事情已經結束了」的瞬間。
              </p>
            </Section>

            <Section label="CHARACTER IMPACT" title="這段過去如何塑造海達">
              <ul className="list">
                <li>她不輕易求助，因為流浪時期讓她學會先靠自己活下去。</li>
                <li>她不喜歡被看穿，因為過去的脆弱曾經讓她無法保護自己。</li>
                <li>她對死亡異常敏銳，因此比同齡人更早理解夜騏與失去的重量。</li>
                <li>她後來的臭臉與沉默，很大一部分其實是自我保護。</li>
                <li>她研究生命轉化術，並不是單純想挑戰禁忌，而是無法接受「來不及」成為最終答案。</li>
              </ul>
            </Section>
          </>
        )}

        {tab === "dimension" && (
          <>
            <div className="grid two">
              <Section label="THEORY FILE" title="第四維度基本檔案">
                <InfoTable rows={dimensionRows} />
              </Section>

              <Section label="CORE STATEMENT" title="海達的核心判斷">
                <p>
                  海達真正可怕的地方，不是她相信死亡可以被打敗，而是她把死亡拆解成一個可以被描述的過程。
                  在她的理論裡，死亡不是門關上的瞬間，而是生命訊號逐步坍縮、斷裂與消失的過程。
                </p>
                <p>
                  第四維度空間就是她在這個過程中撐起的暫時縫隙。只要縫隙還存在，
                  生命殘響、形體記憶與靈魂錨點就仍有被重新接合的可能。
                </p>
              </Section>
            </div>

            <Section label="PRINCIPLES" title="第四維度理論原則">
              <div className="card-grid">
                {dimensionPrinciples.map((item) => (
                  <article className="research-card" key={item.title}>
                    <div className="tag">Fourth Dimension</div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </Section>

            <Section label="DEVELOPMENT" title="第四維度形成時間線">
              <div className="timeline">
                {dimensionTimeline.map((item) => (
                  <div className="timeline-item" key={item.year + item.title}>
                    <div className="timeline-year">{item.year}</div>
                    <div>
                      <div className="timeline-title">{item.title}</div>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section label="HORCRUX MISREADING" title="湯姆・瑞斗對第四維度的誤讀">
              <p>
                湯姆・瑞斗接觸到的不是海達完整的生命轉化術，而是被切割、被轉述、被後世畏懼的殘片。
                他看見的不是生命的可逆性，而是死亡可以被拖延；他理解的不是彌留空間，而是靈魂可以被固定。
              </p>
              <p>
                因此，分靈體並不是海達理論的完成，而是它最扭曲的影子。海達試圖建立死亡與生命之間的暫時橋樑；
                湯姆則把他人的死亡當成材料，把自己的靈魂撕裂成不該存在的錨點。
              </p>

              <div className="info-table">
                {horcruxRows.map(([label, value]) => (
                  <div className="info-row" key={label}>
                    <div className="info-label">{label}</div>
                    <div className="info-value">{value}</div>
                  </div>
                ))}
              </div>
            </Section>

            <Section label="KING'S CROSS CASE" title="哈利、鄧不利多與王十字車站現象">
              <p>
                哈利被佛地魔的索命咒擊中後，並沒有立刻進入單純意義上的死亡。
                他抵達了一個如王十字車站般的白色空間，並在那裡與鄧不利多對話。這個空間既不像現世，
                也不像完整的死後世界，更像是死亡停損點之後的彌留區。
              </p>
              <p>
                在後世海達研究者眼中，王十字車站現象幾乎是第四維度理論的經典案例。
                哈利的身體尚未徹底失去回返可能，靈魂尚未完全離開，佛地魔殘留在他身上的靈魂碎片又在此處被呈現為畸形、痛苦、無法完整存在的生命殘渣。
              </p>
              <p>
                鄧不利多能在此處與哈利交談，也被視為一種特殊的意識投影或靈魂殘響接觸。
                這不代表鄧不利多被復活，而是他的存在以某種方式被哈利的死亡停損點召回、理解、並短暫呈現。
              </p>
            </Section>

            <Section label="ETHICAL RISK" title="倫理危險">
              <p>
                第四維度空間最危險的地方，是它讓死亡變得不再神聖、不可觸碰、不可逆。
                一旦死亡可以被延緩與觀測，下一步就是介入；一旦可以介入，就會有人試圖選擇誰該被帶回。
              </p>
              <p>
                這也是海達的研究最接近禁忌的地方。她不是單純招魂，也不是單純復活，
                而是在死亡與生命之間建造了一個可操作的技術空間。
              </p>
              <p>
                對海達而言，這不是狂妄，而是對「來不及」的反抗；但對魔法界而言，
                這是一種足以改寫死亡秩序的危險知識。
              </p>
            </Section>
          </>
        )}

        {tab === "archive" && (
          <>
            <div className="card-grid">
              {researchCards.map((card) => (
                <article className="research-card" key={card.title}>
                  <div className="tag">{card.tag}</div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>

            <Section label="ARCHIVE INDEX" title="封存檔案列表">
              <div className="archive-table">
                {archiveRows.map((row) => (
                  <div className="archive-row" key={row.id}>
                    <div className="archive-id">{row.id}</div>
                    <div>
                      <div className="archive-name">{row.name}</div>
                      <div className="archive-type">{row.type}</div>
                    </div>
                    <div className={`status ${row.status}`}>{row.status}</div>
                  </div>
                ))}
              </div>
            </Section>

            <Section label="RESEARCH SUMMARY" title="生命轉化術摘要">
              <p>
                海達的生命轉化術建立在三域分類之上：有生命、中間值與無生命。
                她先以變形學穩定物質形態，再以中層黑魔法維持其意志性導向，
                最後嘗試讓生命殘響重新與形體接合。
              </p>
              <p>
                這套研究最震撼的地方不在於「復活」本身，而是海達重新界定了死亡。
                在她的理論裡，死亡不是絕對終止，而是一個可以被延緩、觀測與介入的停損點。
              </p>
            </Section>
          </>
        )}
      </main>
    </div>
  );
}
