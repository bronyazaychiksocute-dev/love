// =============================================
//  DATA — 10 Questions
// =============================================
const questions = [
  {
    id: 1,
    emoji: "🌙",
    text: "วันนี้คุณเหนื่อยมั้ย?",
    choices: [
      {
        icon: "😮‍💨",
        label: "เหนื่อยมาก เหนื่อยใจด้วย",
        isNegative: true,
        comfort: {
          emoji: "🫂",
          title: "รู้แล้วว่าเหนื่อยมากแค่ไหน",
          text: `ความเหนื่อยที่คุณรู้สึกอยู่ตอนนี้ มันไม่ได้แสดงว่าคุณอ่อนแอนะคะ\nมันแสดงว่าคุณพยายามมากแค่ไหนต่างหาก 💜\n\nคนที่ไม่เคยพักเลยมักจะเหนื่อยแบบนี้แหละค่ะ\nลองวางทุกอย่างไว้สักครู่นึง แล้วหายใจลึกๆ พร้อมกันนะคะ\n\nคุณไม่จำเป็นต้องแข็งแกร่งทุกวินาทีหรอกค่ะ 🌸`
        }
      },
      {
        icon: "😌",
        label: "เหนื่อยนิดหน่อย แต่โอเค",
        isNegative: true,
        comfort: {
          emoji: "🌼",
          title: "เหนื่อยบ้างก็เป็นเรื่องปกตินะคะ",
          text: `แม้แต่นิดหน่อยก็รับรู้แล้วค่ะ 💛\nความรู้สึกทุกอย่างของคุณมีคุณค่าและสมควรถูกรับฟัง\n\nขอให้วันนี้ค่อยๆ ผ่านไปอย่างเบาๆ นะคะ\nและอย่าลืมดูแลตัวเองด้วยล่ะ 🌻`
        }
      },
      {
        icon: "😊",
        label: "ไม่เหนื่อยเลย วันนี้โอเคมาก",
        isNegative: false
      }
    ]
  },
  {
    id: 2,
    emoji: "☀️",
    text: "วันนี้คุณได้กินข้าวครบมั้ยคะ?",
    choices: [
      {
        icon: "🍱",
        label: "กินครบทุกมื้อเลย",
        isNegative: false
      },
      {
        icon: "🫙",
        label: "กินแค่มื้อหรือสองมื้อ",
        isNegative: true,
        comfort: {
          emoji: "🍜",
          title: "อย่าลืมดูแลท้องตัวเองด้วยนะคะ",
          text: `ร่างกายต้องการพลังงานเพื่อให้คุณสู้ต่อไปค่ะ 💛\nไม่ว่าจะยุ่งแค่ไหน ขอให้จำไว้ว่า\n"การกินข้าว" คือการดูแลตัวเองขั้นพื้นฐานที่สำคัญที่สุด\n\nวันนี้ถ้ายังมีเวลา ลองหาอะไรกินง่ายๆ สักอย่างนะคะ 🌸\nคุณสำคัญพอที่จะได้รับการดูแลค่ะ — แม้จะเป็นจากตัวคุณเอง`
        }
      },
      {
        icon: "😶",
        label: "ยังไม่ได้กินเลย ลืมกินหรือไม่อยากกิน",
        isNegative: true,
        comfort: {
          emoji: "🥺",
          title: "หัวใจเราพูดกับร่างกายด้วยนะ",
          text: `บางทีที่ไม่อยากกินข้าว มันอาจจะไม่ใช่แค่เรื่องของท้องค่ะ\nมันอาจจะเป็นสัญญาณว่าข้างในใจกำลังต้องการความช่วยเหลือ 💜\n\nลองเริ่มด้วยอะไรเล็กๆ น้อยๆ ก่อนก็ได้นะคะ\nขนมชิ้นเล็กๆ หรือน้ำอุ่นสักแก้ว ก็ยังดีค่ะ\nคุณดูแลตัวเองได้นะ 🌷`
        }
      }
    ]
  },
  {
    id: 3,
    emoji: "💭",
    text: "ช่วงนี้มีอะไรที่ทำให้คุณกังวลหรือคิดมากอยู่มั้ย?",
    choices: [
      {
        icon: "😰",
        label: "มีเยอะมาก คิดอยู่ตลอดเลย",
        isNegative: true,
        comfort: {
          emoji: "🌊",
          title: "ความคิดมากนั้น ไม่ได้แปลว่าชีวิตพัง",
          text: `เมื่อเรามีเรื่องกังวลเยอะๆ สมองจะทำงานหนักมากค่ะ\nเหมือนหน้าต่างเปิดไว้พร้อมกันทีละร้อยบาน 💻\n\nลองปิดสักบานนึงก่อนได้นะคะ —\nเขียนสิ่งที่กังวลลงในกระดาษ แล้ววางมันลง\nอย่างน้อยก็แค่วันนี้วันเดียวก่อนนะคะ 🌿\n\nคุณไม่ต้องแก้ทุกปัญหาในคืนเดียว`
        }
      },
      {
        icon: "😕",
        label: "มีบ้าง แต่พอรับได้",
        isNegative: true,
        comfort: {
          emoji: "🌤️",
          title: "ที่รับได้ นั่นคือความแข็งแกร่งของคุณแล้วนะ",
          text: `การรับมือกับความกังวลได้โดยที่ยังไปต่อได้นั้น\nไม่ใช่เรื่องเล็กน้อยเลยค่ะ 🌟\n\nขอให้รู้ว่าเรื่องที่คุณแบกอยู่นั้น มันจะเบาลงในวันหนึ่งนะคะ\nระหว่างทาง อย่าลืมดูแลใจตัวเองด้วยล่ะ 💜`
        }
      },
      {
        icon: "😌",
        label: "ไม่ค่อยมีเลย ใจสบายดี",
        isNegative: false
      }
    ]
  },
  {
    id: 4,
    emoji: "🌛",
    text: "คืนที่ผ่านมาคุณนอนหลับพักผ่อนได้ดีมั้ย?",
    choices: [
      {
        icon: "😴",
        label: "หลับดีมาก ตื่นมาสดชื่นเลย",
        isNegative: false
      },
      {
        icon: "😵",
        label: "หลับยาก ตื่นกลางดึกบ่อย",
        isNegative: true,
        comfort: {
          emoji: "🌙",
          title: "กลางคืนบางคืนมันยาวนานเป็นพิเศษ",
          text: `การนอนไม่หลับนั้นทรมานมากค่ะ ทั้งร่างกายและจิตใจ 💙\nบางทีมันอาจเป็นเพราะมีอะไรอยู่ในหัวเยอะเกินไป\n\nคืนนี้ ลองปิดมือถือก่อนนอน 30 นาที\nแล้วหายใจเข้าลึกๆ นับ 4 กลั้ว 7 ปล่อย 8 นะคะ\n\nร่างกายคุณต้องการการพักผ่อน และคุณก็สมควรได้พักค่ะ 🌸`
        }
      },
      {
        icon: "🥱",
        label: "แทบไม่ได้นอนเลย",
        isNegative: true,
        comfort: {
          emoji: "🫶",
          title: "ร่างกายเรียกหาการพักแล้วนะคะ",
          text: `การไม่ได้นอนทำให้ทุกอย่างหนักขึ้นสองเท่าค่ะ\nความเครียด ความเศร้า หรือแม้แต่ความสุขเล็กๆ ก็รู้สึกได้น้อยลง 🌙\n\nถ้าวันนี้มีโอกาส ขอให้ลองงีบแม้แค่ 20 นาทีก็ยังดีนะคะ\nร่างกายของคุณสมควรได้พักผ่อนค่ะ 💜\nดูแลตัวเองด้วยนะ`
        }
      }
    ]
  },
  {
    id: 5,
    emoji: "🫧",
    text: "ช่วงนี้คุณรู้สึกโดดเดี่ยวหรือเปล่า?",
    choices: [
      {
        icon: "😔",
        label: "รู้สึกโดดเดี่ยวมากเลย",
        isNegative: true,
        comfort: {
          emoji: "🤍",
          title: "คุณไม่ได้อยู่คนเดียวในโลกนี้นะคะ",
          text: `แม้ว่าตอนนี้จะรู้สึกว่าไม่มีใครเข้าใจ\nหรือรู้สึกอยู่คนเดียวในห้องที่เต็มไปด้วยผู้คน\n\nขอให้รู้ไว้ว่า — มีคนที่แคร์คุณอยู่เสมอค่ะ\nบางทีเราแค่ยังไม่ได้เจอกันเท่านั้นเอง 🌟\n\nการรู้สึกโดดเดี่ยวไม่ใช่ความผิดของคุณ\nและมันไม่ได้แปลว่าคุณไม่มีคุณค่านะคะ 💜`
        }
      },
      {
        icon: "😶",
        label: "บางทีก็รู้สึก บางทีก็ไม่",
        isNegative: true,
        comfort: {
          emoji: "🌷",
          title: "ความรู้สึกที่ขึ้นๆ ลงๆ นั้นเป็นเรื่องของคนเราค่ะ",
          text: `ไม่ต้องโกรธตัวเองที่รู้สึกแบบนั้นนะคะ 🌸\nความโดดเดี่ยวที่มาเป็นครั้งคราว ถือเป็นสัญญาณให้เราดูแลตัวเองมากขึ้น\n\nลองโทรหาคนที่คุณรู้สึกสบายใจด้วยดูนะคะ\nหรือแม้แต่แค่ส่งข้อความทักทายก็ทำให้ดีขึ้นได้ค่ะ 💛`
        }
      },
      {
        icon: "😊",
        label: "ไม่รู้สึกเลย มีคนอยู่รอบข้างตลอด",
        isNegative: false
      }
    ]
  },
  {
    id: 6,
    emoji: "💬",
    text: "มีเรื่องอะไรในใจที่อยากระบายออกมาแต่ยังไม่มีคนรับฟังมั้ย?",
    choices: [
      {
        icon: "🥺",
        label: "มีค่ะ/ครับ เก็บมานานแล้ว",
        isNegative: true,
        comfort: {
          emoji: "💌",
          title: "ที่นี่รับฟังคุณอยู่นะคะ",
          text: `บางเรื่องหนักเกินไปที่จะแบกคนเดียวค่ะ\nการเก็บทุกอย่างไว้ข้างในนานๆ ทำให้ใจเราล้าได้มาก 💜\n\nคุณไม่จำเป็นต้องสมบูรณ์แบบก่อนจะพูดถึงมันนะคะ\nไม่ว่าจะเรื่องเล็กหรือใหญ่ ความรู้สึกของคุณมีความหมายเสมอ\n\nถ้าวันหนึ่งพร้อม ลองเล่าให้คนที่ไว้ใจได้ฟังนะคะ 🌸`
        }
      },
      {
        icon: "🤔",
        label: "มีบ้าง แต่ยังไม่แน่ใจจะพูดกับใคร",
        isNegative: true,
        comfort: {
          emoji: "🌿",
          title: "ไม่ต้องรีบหาคำตอบก็ได้นะคะ",
          text: `การยังไม่รู้ว่าจะพูดกับใคร นั้นเป็นเรื่องที่เข้าใจได้มากค่ะ 💙\nบางทีการเขียนสิ่งที่รู้สึกลงในสมุดก็ช่วยได้มากนะคะ\n\nไม่ต้องส่งให้ใคร ไม่ต้องสมบูรณ์แบบ\nแค่ปล่อยมันออกมาจากข้างในก็พอค่ะ 🌟`
        }
      },
      {
        icon: "😌",
        label: "ไม่มีค่ะ/ครับ ระบายออกไปหมดแล้ว",
        isNegative: false
      }
    ]
  },
  {
    id: 7,
    emoji: "✨",
    text: "วันนี้คุณรู้สึกว่าตัวเองมีคุณค่ามั้ย?",
    choices: [
      {
        icon: "💔",
        label: "ไม่ค่อยรู้สึกเลย รู้สึกไม่มีคุณค่า",
        isNegative: true,
        comfort: {
          emoji: "🌟",
          title: "คุณมีคุณค่าเสมอ — แม้ในวันที่ลืมไปแล้ว",
          text: `คุณค่าของคุณไม่ได้ขึ้นอยู่กับสิ่งที่คุณทำได้\nหรือสิ่งที่คนอื่นมองเห็นนะคะ 💜\n\nแค่การที่คุณยังอยู่ที่นี่ ยังพยายาม ยังหายใจ\nนั่นมีความหมายมากพอแล้วค่ะ\n\nโลกนี้ต้องการคุณแบบที่คุณเป็น\nไม่ใช่แบบที่คุณคิดว่าควรจะเป็น 🌸`
        }
      },
      {
        icon: "😐",
        label: "รู้สึกบ้าง แต่ยังไม่มั่นใจในตัวเอง",
        isNegative: true,
        comfort: {
          emoji: "🌱",
          title: "ความมั่นใจค่อยๆ เติบโตได้นะคะ",
          text: `ไม่มีใครต้องมั่นใจ 100% ตลอดเวลาหรอกค่ะ 🌿\nและการที่คุณยังรู้สึกว่ามีคุณค่าบ้าง นั่นก็เป็นจุดเริ่มต้นที่ดีแล้ว\n\nลองมองย้อนไปดูว่าสัปดาห์ที่ผ่านมา\nคุณทำสิ่งดีๆ อะไรบ้าง แม้แต่เรื่องเล็กๆ ก็นับนะคะ 💛`
        }
      },
      {
        icon: "💪",
        label: "รู้สึกมีคุณค่าและภูมิใจในตัวเอง",
        isNegative: false
      }
    ]
  },
  {
    id: 8,
    emoji: "🎨",
    text: "วันนี้คุณได้ทำสิ่งที่รัก หรือสิ่งที่ทำให้มีความสุขมั้ย?",
    choices: [
      {
        icon: "🎉",
        label: "ได้ทำแล้ว มีความสุขมากเลย",
        isNegative: false
      },
      {
        icon: "😕",
        label: "ไม่มีเวลาเลย งานยุ่งมาก",
        isNegative: true,
        comfort: {
          emoji: "🎈",
          title: "ความสุขเล็กๆ ก็สำคัญมากนะคะ",
          text: `เมื่อชีวิตยุ่งมากจนลืมทำสิ่งที่รัก\nวันๆ ก็จะรู้สึกเหนื่อยและว่างเปล่าได้มากค่ะ 🌸\n\nวันนี้ขอแค่ 10 นาทีก็ยังดีนะคะ\nเปิดเพลงที่ชอบ วาดเส้นเล่นๆ อ่านหน้าที่โปรด\nหรือแม้แต่นั่งดูหน้าต่างโดยไม่ทำอะไรก็ยังได้ค่ะ 💛\n\nชีวิตไม่ได้มีไว้แค่ทำงานหรอกนะคะ`
        }
      },
      {
        icon: "😔",
        label: "ไม่รู้สึกอยากทำอะไรเลยในช่วงนี้",
        isNegative: true,
        comfort: {
          emoji: "🕊️",
          title: "ช่วงเวลาที่ไม่อยากทำอะไร มันก็ผ่านได้นะคะ",
          text: `บางทีใจมันก็ต้องการแค่ความเงียบ ไม่ใช่ความสนุก 💙\nและนั่นก็โอเคมากค่ะ\n\nอย่ากดดันตัวเองให้ต้อง "มีความสุข" ทุกวันนะคะ\nบางวันแค่ผ่านมันไปได้ ก็ถือว่าชนะแล้ว 🌿\n\nขอให้รู้ว่าความรู้สึกอยากทำสิ่งที่รักมันจะกลับมาเองค่ะ`
        }
      }
    ]
  },
  {
    id: 9,
    emoji: "💞",
    text: "ช่วงนี้คุณรู้สึกว่ามีคนรักและเข้าใจคุณมั้ย?",
    choices: [
      {
        icon: "🥰",
        label: "มีค่ะ/ครับ รู้สึกอบอุ่นและมีคนเคียงข้างเสมอ",
        isNegative: false
      },
      {
        icon: "😔",
        label: "ไม่ค่อยรู้สึกเท่าไหร่ รู้สึกว่าไม่มีใครเข้าใจ",
        isNegative: true,
        comfort: {
          emoji: "💜",
          title: "การไม่รู้สึกว่าถูกเข้าใจ เป็นหนึ่งในความเจ็บปวดที่ลึกที่สุดนะคะ",
          text: `และคุณไม่ได้ผิดปกติอะไรเลย ที่รู้สึกแบบนี้ค่ะ\n\nบางครั้งคนรอบข้างอาจไม่รู้ว่าเราต้องการอะไร\nหรือเราเองก็ยังไม่รู้จะพูดยังไง\n\nแต่ขอให้รู้ไว้ว่า ความรู้สึกของคุณนั้นสมจริงและสมควรถูกรับฟัง 🌸\nคุณคู่ควรกับความรักและความเข้าใจค่ะ — เสมอ 💜`
        }
      },
      {
        icon: "😐",
        label: "รู้สึกปนๆ กัน บางคนเข้าใจ บางคนไม่เข้าใจ",
        isNegative: false
      }
    ]
  },
  {
    id: 10,
    emoji: "🌈",
    text: "สุดท้ายแล้ว... ถ้าให้ให้คะแนนวันนี้ของตัวเอง คุณจะให้กี่คะแนน?",
    choices: [
      {
        icon: "⭐⭐⭐⭐⭐",
        label: "5 ดาว — วันนี้ดีมากเลย!",
        isNegative: false,
        score: 5
      },
      {
        icon: "⭐⭐⭐",
        label: "3 ดาว — พอใช้ได้ มีดีมีแย่ปนๆ",
        isNegative: false,
        score: 3
      },
      {
        icon: "⭐",
        label: "1 ดาว — วันนี้ยากมากสำหรับฉัน",
        isNegative: true,
        score: 1,
        comfort: {
          emoji: "🌻",
          title: "วันที่ยากที่สุด คือวันที่แสดงให้เห็นว่าคุณแข็งแกร่งแค่ไหน",
          text: `ขอบคุณที่ยังอยู่ที่นี่และตอบคำถามมาจนถึงข้อสุดท้ายค่ะ 💜\n\nวันที่คุณให้แค่ 1 ดาว — นั่นแปลว่าคุณผ่านมันมาได้แล้ว\nไม่ว่าจะหนักแค่ไหน คุณก็ยังอยู่ที่นี่ค่ะ\n\nและนั่นคือสิ่งที่กล้าหาญที่สุดแล้ว 🌸`
        }
      }
    ]
  }
];

// =============================================
//  FINAL MESSAGES
// =============================================
const finalMessages = {
  high: {
    text: "วันนี้ดูเหมือนคุณผ่านมาได้ดีมากเลยค่ะ 🌟\nขอให้พลังงานดีๆ นี้อยู่กับคุณนานๆ นะคะ",
    quote: "\"ความสุขที่แท้จริงไม่ได้อยู่ที่ว่าชีวิตสมบูรณ์แบบ แต่อยู่ที่ว่าเราเลือกจะมองเห็นความงามในสิ่งที่มี\" 🌸"
  },
  mid: {
    text: "วันนี้มีทั้งดีและไม่ดีปนกัน แต่คุณก็ผ่านมาได้ค่ะ 💛\nนั่นคือชัยชนะเล็กๆ ที่ควรภูมิใจนะคะ",
    quote: "\"ไม่ต้องเดินเร็ว แค่ยังเดินต่อไป ก็ถือว่าชนะแล้ว\" 🌿"
  },
  low: {
    text: "ขอบคุณที่เล่าให้ฟังนะคะ 💜\nวันนี้อาจจะยาก แต่คุณผ่านมาได้ถึงตอนนี้แล้วค่ะ\nพรุ่งนี้อาจจะดีขึ้นก็ได้นะคะ ค่อยๆ ไปนะ",
    quote: "\"ดอกไม้ไม่ได้บานทุกวัน แต่มันก็ยังงดงามในแบบของตัวเองเสมอ\" 🌺"
  }
};

// =============================================
//  STATE
// =============================================
let currentQuestion = 0;
let negativeAnswerCount = 0;
let pendingComfort = null;
let comfortThenNext = false;

// =============================================
//  PARTICLES
// =============================================
function createParticles() {
  const wrap = document.getElementById('particles');
  const colors = ['#f7a8c4', '#c9a7f5', '#a0d8f1', '#ffcba4', '#a8e6cf', '#ffd6e7'];
  for (let i = 0; i < 28; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 14 + 6;
    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}vw;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      animation-duration: ${Math.random() * 10 + 8}s;
      animation-delay: ${Math.random() * 10}s;
      filter: blur(${Math.random() * 3}px);
    `;
    wrap.appendChild(p);
  }
}

// =============================================
//  SCREEN MANAGEMENT
// =============================================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(id);
  target.classList.add('active');
}

// =============================================
//  START
// =============================================
function startQuiz() {
  currentQuestion = 0;
  negativeAnswerCount = 0;
  pendingComfort = null;
  showScreen('screen-q');
  renderQuestion();
}

// =============================================
//  RENDER QUESTION
// =============================================
function renderQuestion() {
  const q = questions[currentQuestion];
  const card = document.getElementById('question-card');

  // animate out then in
  card.classList.remove('slide-in');
  card.classList.add('slide-out');
  setTimeout(() => {
    card.classList.remove('slide-out');
    card.classList.add('slide-in');

    document.getElementById('q-emoji').textContent = q.emoji;
    document.getElementById('q-text').textContent = q.text;

    const choicesEl = document.getElementById('choices');
    choicesEl.innerHTML = '';
    q.choices.forEach((c, idx) => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.id = `choice-${idx}`;
      btn.innerHTML = `<span class="choice-icon">${c.icon}</span><span class="choice-label">${c.label}</span>`;
      btn.onclick = () => handleChoice(c);
      choicesEl.appendChild(btn);
    });

    // update progress
    const pct = ((currentQuestion) / questions.length) * 100;
    document.getElementById('progress-bar').style.width = pct + '%';
  }, 300);
}

// =============================================
//  HANDLE CHOICE
// =============================================
function handleChoice(choice) {
  if (choice.isNegative) {
    negativeAnswerCount++;
    pendingComfort = choice.comfort;
    showComfortScreen(choice.comfort);
  } else {
    goToNext();
  }
}

// =============================================
//  COMFORT SCREEN
// =============================================
function showComfortScreen(comfort) {
  document.getElementById('comfort-emoji').textContent = comfort.emoji;
  document.getElementById('comfort-title').textContent = comfort.title;
  document.getElementById('comfort-text').textContent = comfort.text;
  showScreen('screen-comfort');
}

function continueNext() {
  showScreen('screen-q');
  goToNext();
}

// =============================================
//  GO TO NEXT QUESTION OR END
// =============================================
function goToNext() {
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    showFinalScreen();
  } else {
    renderQuestion();
  }
}

// =============================================
//  FINAL SCREEN
// =============================================
function showFinalScreen() {
  // determine tone
  let tone;
  if (negativeAnswerCount <= 2) tone = finalMessages.high;
  else if (negativeAnswerCount <= 5) tone = finalMessages.mid;
  else tone = finalMessages.low;

  document.getElementById('final-text').textContent = tone.text;
  document.getElementById('final-quote').textContent = tone.quote;

  // progress to 100%
  document.getElementById('progress-bar').style.width = '100%';

  // create flying stars
  const wrap = document.getElementById('stars-wrap');
  wrap.innerHTML = '';
  const starEmojis = ['⭐','🌟','✨','💫','🌸','💜','💛','🌺'];
  for (let i = 0; i < 16; i++) {
    const s = document.createElement('div');
    s.className = 'star-anim';
    s.textContent = starEmojis[Math.floor(Math.random() * starEmojis.length)];
    s.style.cssText = `
      left: ${Math.random() * 90 + 5}%;
      top: ${Math.random() * 80 + 10}%;
      animation-delay: ${Math.random() * 4}s;
      animation-duration: ${Math.random() * 3 + 3}s;
      font-size: ${Math.random() * 1.2 + 0.7}rem;
    `;
    wrap.appendChild(s);
  }

  showScreen('screen-final');
}

// =============================================
//  RESTART
// =============================================
function restartQuiz() {
  document.getElementById('progress-bar').style.width = '0%';
  showScreen('screen-intro');
  currentQuestion = 0;
  negativeAnswerCount = 0;
}

// =============================================
//  INIT
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
});
