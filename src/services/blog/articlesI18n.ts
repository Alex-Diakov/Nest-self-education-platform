import { BlogArticle } from '../../types/blog.ts';
import { SupportedLanguage } from '../../types/i18n.ts';

export const ARTICLES_TRANSLATIONS: Record<string, Record<SupportedLanguage, Partial<BlogArticle>>> = {
  'nlp-reimprinting-ai': {
    uk: {
      title: 'Як звільнити себе від травм, які заважають рухатися вперед. Техніка реімпринтингу в сучасних умовах ШІ',
      subtitle: 'Інженерний розбір перезапису ранніх когнітивних імпринтів за допомогою діалогових мовних моделей',
      excerpt: 'Покроковий розбір протоколу реімпринтингу Роберта Ділтса в комбінації із сучасними діалоговими моделями для безпечної симуляції терапевтичного діалогу та перезапису ранніх імпринтів.',
      categoryLabel: 'НЛП та когнітивістика',
      publishedDate: '24 Червня 2026',
      updatedDate: 'Вересень 2026',
      tags: ['НЛП', 'Реімпринтинг', 'ШІ-моделювання', 'Травми', 'Психотехнології'],
      author: {
        name: 'NextSelf Lab',
        role: 'Дослідницька група',
        affiliation: 'Лабораторія психотехнологій NextSelf',
        avatarInitials: 'NL',
        verified: true,
        bio: 'Дослідницька група лабораторії NextSelf під керівництвом Олександра Дьякова. Розробка прикладних протоколів когнітивного рефакторингу та інструментів швидкої стабілізації мислення.',
      },
      keyQuestions: [
        'Чому раціональні аргументи безсилі перед дитячими травматичними імпринтами?',
        'Як лінгвістичні моделі ШІ створюють безпечну сенсорну пісочницю для терапевтичного діалогу?',
        'Який точний покроковий алгоритм передачі ресурсів від Дорослого «Я» до Внутрішньої Дитини?',
      ],
      takeaways: [
        'Ранні імпринти формуються в моменти гострої дитячої безпорадності та застряють у лімбічній системі як автоматичні програми самосаботажу.',
        'Логічні спроби «просто взяти себе в руки» марні, тому що мигдалеподібне тіло реагує швидше за неокортекс на 250 мілісекунд.',
        'Симуляція терапевтичного діалогу з використанням ШІ дає змогу безпечно дисоціюватися від болю та передати внутрішньому «Я» відсутні ресурси захисту й визнання.',
      ],
      content: [
        {
          id: 'anatomy-of-imprint',
          heading: 'Анатомія раннього імпринту: як минуле блокує масштабування',
          readMinutes: 4,
          body: [
            'Імпринти — це фундаментальні зліпки досвіду, які нервова система зафіксувала в момент найвищої емоційної вразливості. Коли дитина стикається із ситуацією раптового відторгнення, публічного знецінення або гострої безпорадності, її мозок не займається філософією. Він негайно записує безапеляційний алгоритм виживання: «не висовуйся, це смертельно небезпечно», «контролюй абсолютно все», «нікому не довіряй».',
            'Спливають десятиліття. Людина будує бізнес, керує активами та командами. Але варто виникнути ситуації невизначеності, конфлікту чи ризику публічної оцінки — неокортекс миттєво відступає на другий план. Кермо керування фізіологією перехоплює та сама налякана семирічна дитина з її примітивними оборонними рефлексами.',
          ],
          quote: {
            text: 'Травма фіксується не фактом самої події, а тотальною самотністю та неможливістю захиститися в момент її проживання.',
            attribution: 'Олександр Дьяков, засновник NextSelf',
          },
          callout: {
            type: 'insight',
            label: 'Нейробіологічний факт',
            text: 'Доки лімбічний контур зберігає заряд незахищеності, психіка витрачатиме до 80% вашої добової енергії на превентивну тривогу та мікроконтроль.',
          },
        },
        {
          id: 'reimprinting-protocol',
          heading: 'Протокол реімпринтингу Ділтса у симуляційному середовищі ШІ',
          readMinutes: 5,
          body: [
            'Класичний метод реімпринтингу, створений Робертом Ділтсом, вимагає ретельної роботи з просторовою лінією часу (Timeline). Головна складність методу полягає в тому, що людині важко утримувати нейтральну позицію Спостерігача: емоційна пам’ять затягує її назад у травматичний афект.',
            'Сучасні діалогові моделі штучного інтелекту дозволяють вирішити цю інженерну проблему. ШІ виступає в ролі каліброваного дзеркала — він ставить структуровані запитання за протоколом, не даючи увазі провалюватися в ретравматизацію.',
            'Доросле «Я» з висоти свого життєвого досвіду, ресурсів та безпеки входить у симульовану точку імпринту не як жертва, а як захисник і наставник.',
          ],
          callout: {
            type: 'methodology',
            label: 'Інженерна механіка',
            text: 'Передача відчуття соматичної безпеки від Дорослого до Дитини перезаписує валентність пам’яті в гіпокампі, дезактивуючи фоновий стрес.',
          },
          protocolSteps: [
            {
              step: '01',
              title: 'Калібрування лінії часу',
              description: 'Ідентифікація тригерного тілесного відчуття та відстеження його першого виникнення в біографії.',
            },
            {
              step: '02',
              title: 'Дисоціація Спостерігача',
              description: 'Вихід у мета-позицію за межами лінії часу для усунення вегетативної паніки.',
            },
            {
              step: '03',
              title: 'Введення ресурсів підтримки',
              description: 'Доросле «Я» транслює захист, визнання та ресурси, яких критично бракувало в момент кризи.',
            },
          ],
        },
      ],
    },
    ru: {
      title: 'Как освободить себя от травм, которые мешают двигаться вперед. Техника реимпринтинга с помощью современных диалоговых моделей',
      subtitle: 'Инженерный разбор перепрошивки ранних когнитивных импринтов с помощью диалоговых языковых моделей',
      excerpt: 'Пошаговый разбор протокола реимпринтинга Роберта Дилтса в комбинации с современными диалоговыми моделями для безопасной симуляции терапевтического диалога и перепрошивки ранних импринтов.',
      categoryLabel: 'НЛП и когнитивистика',
      publishedDate: '24 Июня 2026',
      updatedDate: 'Сентябрь 2026',
      tags: ['НЛП', 'Реимпринтинг', 'ИИ-моделирование', 'Травмы', 'Психотехнологии'],
      author: {
        name: 'NextSelf Lab',
        role: 'Исследовательская группа',
        affiliation: 'Лаборатория психотехнологий NextSelf',
        avatarInitials: 'NL',
        verified: true,
        bio: 'Исследовательская группа лаборатории NextSelf под руководством Александра Дьякова. Разработка прикладных протоколов когнитивного рефакторинга и инструментов стабилизации.',
      },
      keyQuestions: [
        'Почему рациональные уговоры бессильны перед детскими травматическими импринтами?',
        'Как языковые модели ИИ создают безопасную песочницу для диалога без ретравматизации?',
        'Каков четкий пошаговый алгоритм передачи ресурсов от Взрослого «Я» к Внутреннему Ребенку?',
      ],
      takeaways: [
        'Ранние импринты формируются в моменты острой детской беспомощности и оседают в лимбической системе как автоматические программы саботажа.',
        'Логические попытки «взять себя в руки» бесполезны: миндалевидное тело реагирует на угрозу быстрее неокортекса на 250 миллисекунд.',
        'Симуляция терапевтического диалога с помощью ИИ позволяет безопасно диссоциироваться от боли и передать себе недостающие ресурсы защиты.',
      ],
      content: [
        {
          id: 'anatomy-of-imprint',
          heading: 'Анатомия раннего импринта: как прошлое блокирует масштаб',
          readMinutes: 4,
          body: [
            'Импринты — это фундаментальные слепки опыта, которые нервная система зафиксировала в момент предельной эмоциональной уязвимости. Когда ребенок сталкивается с ситуацией внезапного отвержения или публичного унижения, его мозг не рассуждает. Он записывает алгоритм выживания: «не высовывайся», «контролируй всё до мелочей», «не доверяй никому».',
            'Спустя 15–20 лет человек управляет проектами и людьми. Но в ситуации стресса или риска публичной оценки руль перехватывает именно тот напуганный ребенок с его защитными реакциями.',
          ],
          quote: {
            text: 'Травма фиксируется не фактом события, а чувством абсолютного одиночества и беспомощности в момент его проживания.',
            attribution: 'Александр Дьяков, основатель NextSelf',
          },
          callout: {
            type: 'insight',
            label: 'Нейробиологический факт',
            text: 'Пока лимбический контур хранит заряд тревоги, психика тратит до 80% вашей энергии на фоновый гиперконтроль.',
          },
        },
        {
          id: 'reimprinting-protocol',
          heading: 'Протокол реимпринтинга Дилтса в среде ИИ-моделирования',
          readMinutes: 5,
          body: [
            'Классический реимпринтинг Роберта Дилтса требует глубокой работы с линией времени. Главная трудность — удержать мета-позицию Наблюдателя и не провалиться в эмоциональный аффект.',
            'Современные диалоговые модели ИИ решают эту инженерную задачу: модель выступает беспристрастным фасилитатором, который строго ведет по протоколу.',
          ],
          callout: {
            type: 'methodology',
            label: 'Методология',
            text: 'Передача соматической безопасности от Взрослого к Ребенку перезаписывает след памяти в гиппокампе.',
          },
          protocolSteps: [
            {
              step: '01',
              title: 'Калибровка линии времени',
              description: 'Идентификация телесного симптома и отслеживание первого эпизода его возникновения.',
            },
            {
              step: '02',
              title: 'Диссоциация Наблюдателя',
              description: 'Выход в позицию силы вне линии времени для купирования вегетативной реакции.',
            },
            {
              step: '03',
              title: 'Передача ресурсов защиты',
              description: 'Взрослый передает Ребенку защиту, уверенность и принятие, устраняя ядро травмы.',
            },
          ],
        },
      ],
    },
    en: {
      title: 'Cognitive Re-Imprinting via LLM Simulations: Overcoming Developmental Trauma',
      subtitle: 'An engineering approach to reconsolidating early cognitive survival templates via conversational AI',
      excerpt: 'Step-by-step breakdown of Robert Dilts’ re-imprinting framework enhanced by modern conversational models for safe timeline reframing and belief reconsolidation.',
      categoryLabel: 'Applied NLP & Cognitive Science',
      publishedDate: 'June 24, 2026',
      updatedDate: 'September 2026',
      tags: ['NLP', 'Re-imprinting', 'AI Simulation', 'Trauma Protocols', 'Psychotechnology'],
      author: {
        name: 'NextSelf Lab',
        role: 'Research Division',
        affiliation: 'NextSelf Psychotechnology Laboratory',
        avatarInitials: 'NL',
        verified: true,
        bio: 'NextSelf research division headed by Oleksandr Diakov. Designing operational frameworks for cognitive refactoring and rapid autonomic stabilization.',
      },
      keyQuestions: [
        'Why does rational willpower fail against developmental childhood imprints?',
        'How do modern conversational models provide an objective sandbox for trauma deconstruction?',
        'What is the precise step-by-step sequence to transfer resources from the Adult Self to the Inner Child?',
      ],
      takeaways: [
        'Early imprints encode during peak developmental vulnerability, operating as unconscious algorithms of executive self-sabotage.',
        'Cognitive logic cannot disarm traumatic reflex loops because the amygdala activates 250 milliseconds ahead of the neocortex.',
        'Conversational simulations decouple the observer from visceral pain, facilitating clean somatic reconsolidation without re-traumatization.',
      ],
      content: [
        {
          id: 'anatomy-of-imprint',
          heading: 'Anatomy of an Early Imprint: How the Past Constrains Executive Scale',
          readMinutes: 4,
          body: [
            'Imprints are fundamental neural templates established during episodes of acute developmental vulnerability. When an adolescent faces abrupt abandonment or public humiliation, subcortical circuits record rigid survival imperatives: "stay invisible", "micromanage every variable", "trust nobody".',
            'Decades later, high-performing founders manage substantial enterprise assets. Yet under conditions of acute ambiguity or negotiation duress, executive command is seized by that traumatized seven-year-old and their defensive armor.',
          ],
          quote: {
            text: 'Trauma is structurally encoded not by the severity of the event, but by total isolation and somatic helplessness during its unfolding.',
            attribution: 'Oleksandr Diakov, Founder of NextSelf',
          },
          callout: {
            type: 'insight',
            label: 'Neurobiological Reality',
            text: 'As long as the limbic circuit harbors unresolved vulnerability, the nervous system burns up to 80% of daily cognitive capital on anticipatory hyper-vigilance.',
          },
        },
        {
          id: 'reimprinting-protocol',
          heading: 'Robert Dilts’ Timeline Re-Imprinting Protocol via AI Staging',
          readMinutes: 5,
          body: [
            'Classical re-imprinting demands disciplined navigation along the subjective timeline. The primary point of failure has always been emotional regression: the client collapses into the traumatic affect.',
            'Deploying conversational language models establishes a dispassionate, calibrated facilitator that preserves the Meta-Observer boundary throughout the protocol.',
          ],
          callout: {
            type: 'methodology',
            label: 'Operational Protocol',
            text: 'Transferring an internalized felt sense of safety from Adult to Child fundamentally alters memory reconsolidation in the hippocampus.',
          },
          protocolSteps: [
            {
              step: '01',
              title: 'Timeline Anchor Calibration',
              description: 'Tracing somatic sensations back to the root developmental inflection point.',
            },
            {
              step: '02',
              title: 'Observer Dissociation',
              description: 'Stepping into an empowered meta-position outside the temporal boundary to disarm vegetative arousal.',
            },
            {
              step: '03',
              title: 'Resource Inoculation',
              description: 'The Adult Self transmits protection, validation, and emotional stability to dissolve the trauma core.',
            },
          ],
        },
      ],
    },
  },
  'why-nlp-works': {
    uk: {
      title: 'Чому НЛП працює там, де буксує традиційна академічна психологія',
      subtitle: 'Кібернетика та конструкт-психологія: як зміна субмодальностей перебудовує нервову систему за 90 секунд',
      excerpt: 'Кібернетика та конструктивістський погляд на мислення. Чому інженерна робота із субмодальностями змінює вегетативний відгук за 90 секунд.',
      categoryLabel: 'Тривожні стани та кібернетика',
      publishedDate: '8 Квітня 2026',
      updatedDate: 'Вересень 2026',
      tags: ['НЛП', 'Кібернетика', 'Тривожні розлади', 'Олександр Дьяков'],
      author: {
        name: 'Олександр Дьяков',
        role: 'Засновник NextSelf',
        affiliation: 'NextSelf Lab',
        avatarInitials: 'ОД',
        verified: true,
        bio: 'Дослідник, профайлер, засновник лабораторії NextSelf. 12+ років приватної практики, понад 12,000 годин індивідуальної роботи з топ-менеджерами та підприємцями.',
      },
      keyQuestions: [
        'Чому місяці аналізу дитячих образ не зупиняють раптову панічну атаку в переговорній?',
        'Як саме субмодальності (розмір, звук, дистанція) кодують фізіологічний викид адреналіну?',
        'Що таке кібернетичний конструкт мислення і чому «карта — не територія»?',
      ],
      takeaways: [
        'Академічна психотерапія часто витрачає місяці на нозологію, тоді як НЛП ставить інженерне питання: як саме сконструйована ваша тривога в суб’єктивному досвіді.',
        'Будь-яка тривожна думка має просторові та сенсорні координати. Зміна локалізації або гучності внутрішнього критика руйнує адреналінову дугу за 90 секунд.',
        'Переналаштування суб’єктивної карти мислення дає миттєвий вегетативний спокій без тривалого копання в минулому.',
      ],
      content: [
        {
          id: 'cybernetic-view',
          heading: 'Кібернетичний погляд на структуру суб’єктивного досвіду',
          readMinutes: 4,
          body: [
            'Академічна наука виробила тисячі сторінок класифікацій симптомів і синдромів. Але коли підприємець сидить перед радою директорів і відчуває, як перехоплює дихання, йому байдуже, до якої категорії за DSM-5 належить його стан. Йому потрібен важіль, який прямо зараз зупинить фізіологічний колапс.',
            'Прикладна нейролінгвістика розглядає мозок як кібернетичну систему управління зворотним зв’язком. Ми не запитуємо «хто винен у вашій тривозі?». Ми запитуємо: «Яка точна сенсорна архітектура вашого страху? Що саме ви бачите, чуєте та відчуваєте за 3 секунди до початку паніки?»',
          ],
          quote: {
            text: 'Карта — це не територія. Але саме суб’єктивна карта визначає, чи буде ваше серце битися зі швидкістю 140 ударів на хвилину.',
            attribution: 'Альфред Коржибскі / Олександр Дьяков',
          },
          callout: {
            type: 'insight',
            label: 'Кібернетичний закон',
            text: 'Нервова система реагує не на об’єктивні факти реальності, а на внутрішню картинку, яку ви проекціюєте в полі своєї уваги.',
          },
        },
        {
          id: 'submodalities-reset',
          heading: 'Субмодальності та швидке перекодування вегетатики',
          readMinutes: 5,
          body: [
            'Кожен образ у нашій уяві має точні цифрові параметри (субмодальності): яскравість, розмір, дистанцію, колір та локалізацію. Якщо ви уявляєте зрив переговорів як гігантський кольоровий 3D-фільм просто перед очима — гіпоталамус сприймає це як смертельну загрозу просто зараз.',
            'Варто зменшити цю картинку до розміру поштової марки, відсунути її на 10 метрів і зробити чорно-білою — інтенсивність тривоги падає на 70% менш ніж за дві хвилини.',
          ],
          callout: {
            type: 'methodology',
            label: 'Протокол саморегуляції',
            text: 'Зміна тембру внутрішнього критичного голосу з загрозливого басу на кумедний мультяшний звук миттєво обнуляє соматичний страх.',
          },
          protocolSteps: [
            {
              step: '01',
              title: 'Діагностика субмодальностей',
              description: 'Визначення розміру, кольору та просторового розташування тривожного образу.',
            },
            {
              step: '02',
              title: 'Швидка трансформація параметрів',
              description: 'Зменшення масштабу, знебарвлення та відсунення картинки на безпечну відстань.',
            },
            {
              step: '03',
              title: 'Тілесна перевірка (Екологічний тест)',
              description: 'Оцінка частоти серцебиття та глибини дихання після завершення протоколу.',
            },
          ],
        },
      ],
    },
    ru: {
      title: 'Почему НЛП работает там, где ломается академическая наука',
      subtitle: 'Кибернетика и конструкт-психология: как работа с субмодальностями перенастраивает нервную систему за 90 секунд',
      excerpt: 'Чтобы разобраться, почему НЛП показывает результат там, где традиционная наука буксует, важно обратиться к кибернетике и конструктивистскому взгляду на мышление.',
      categoryLabel: 'Тревожные расстройства и кибернетика',
      publishedDate: '8 Апреля 2026',
      updatedDate: 'Сентябрь 2026',
      tags: ['НЛП', 'Кибернетика', 'Тревожные расстройства', 'Александр Дьяков'],
      author: {
        name: 'Александр Дьяков',
        role: 'Основатель NextSelf',
        affiliation: 'NextSelf Foundation',
        avatarInitials: 'АД',
        verified: true,
        bio: 'Исследователь, профайлер, основатель NextSelf. 12+ лет практики, более 12,000 часов индивидуальной работы с предпринимателями и топ-менеджерами.',
      },
      keyQuestions: [
        'Почему долгие беседы о детстве не спасают от ступора во время ключевых переговоров?',
        'Как сенсорные субмодальности управляют частотой пульса и выбросом кортизола?',
        'Что такое кибернетическая модель психики и как перенастроить субъективную карту?',
      ],
      takeaways: [
        'Традиционная психотерапия тратит месяцы на каталогизацию проблем, тогда как НЛП исследует инженерную структуру восприятия.',
        'Любой внутренний сценарий страха закодирован в пространстве. Изменение параметров картинки сбрасывает спазм за 90 секунд.',
        'Перенастройка субъективной карты дает мгновенное спокойствие без многолетней терапии.',
      ],
      content: [
        {
          id: 'cybernetic-view',
          heading: 'Кибернетический взгляд на структуру субъективного опыта',
          readMinutes: 4,
          body: [
            'Академическая психология создала тысячи страниц терминологии. Но когда руководитель заходит в переговорную и ощущает, как перехватывает дыхание, ему нужен рычаг, который остановит панику прямо сейчас.',
            'Нейролингвистическое программирование рассматривает мозг как кибернетическую систему. Мы спрашиваем: «Какова точная структура вашего страха? Что именно вы прокручиваете в голове за секунду до паники?»',
          ],
          quote: {
            text: 'Карта — не территория. Но именно ваша внутренняя карта заставляет надпочечники выбрасывать адреналин.',
            attribution: 'Александр Дьяков',
          },
          callout: {
            type: 'insight',
            label: 'Кибернетический принцип',
            text: 'Тело реагирует не на объективную реальность, а на кинофильм, который вы крутите перед внутренним взором.',
          },
        },
        {
          id: 'submodalities-reset',
          heading: 'Субмодальности и скоростная перезагрузка вегетатики',
          readMinutes: 5,
          body: [
            'Каждый образ в воображении закодирован через субмодальности: яркость, размер, контрастность. Если провал сделки видится огромным экраном прямо перед глазами — нервная система включает режим смертельной опасности.',
            'Уменьшение масштаба и выцветание картинки гасит стрессовый отклик более чем на 70% за 90 секунд.',
          ],
          callout: {
            type: 'methodology',
            label: 'Технический протокол',
            text: 'Смена тональности внутреннего критика с пугающей на нейтральную мгновенно обрывает вегетативный цикл паники.',
          },
          protocolSteps: [
            {
              step: '01',
              title: 'Фиксация параметров субмодальностей',
              description: 'Определение размеров, цветопередачи и расстояния до тревожного ментального образа.',
            },
            {
              step: '02',
              title: 'Смещение фокуса и обесцвечивание',
              description: 'Принудительное уменьшение масштаба и отдаление картинки на безопасную дистанцию.',
            },
            {
              step: '03',
              title: 'Проверка соматического тонуса',
              description: 'Контроль частоты пульса и расслабления диафрагмы.',
            },
          ],
        },
      ],
    },
    en: {
      title: 'Cybernetic Cognition: Why Applied NLP Succeeds Where Traditional Formats Stall',
      subtitle: 'Construct psychology and submodality recalibration: resetting autonomic stress tone within 90 seconds',
      excerpt: 'Exploring subjective reality constructs, submodality recoding, and the neurobiology of rapid autonomic recalibration within 90 seconds.',
      categoryLabel: 'Anxiety Mastery & Cybernetics',
      publishedDate: 'April 8, 2026',
      updatedDate: 'September 2026',
      tags: ['NLP', 'Cybernetics', 'Anxiety Mastery', 'Oleksandr Diakov'],
      author: {
        name: 'Oleksandr Diakov',
        role: 'NextSelf Founder',
        affiliation: 'NextSelf Lab',
        avatarInitials: 'OD',
        verified: true,
        bio: 'Applied cognitive researcher, profiler, and founder of NextSelf Lab. 12+ years of clinical and private practice with founders and high-level decision makers.',
      },
      keyQuestions: [
        'Why do months of childhood psychoanalysis fail during high-stakes board negotiations?',
        'How do sensory submodalities dictate autonomic heart rate and cortisol discharge?',
        'What is a cybernetic cognitive construct and how does "the map is not the territory" apply in practice?',
      ],
      takeaways: [
        'Academic psychotherapy often stalls on taxonomy, while applied neurolinguistics inspects the functional mechanics of subjective experience.',
        'Catastrophic scenarios possess precise spatial coordinates. Modulating scale or distance collapses adrenaline surges within 90 seconds.',
        'Recalibrating your subjective internal map delivers rapid vegetative equilibrium without protracted analytical therapy.',
      ],
      content: [
        {
          id: 'cybernetic-view',
          heading: 'A Cybernetic Paradigm of Subjective Experience',
          readMinutes: 4,
          body: [
            'Academic psychology has compiled thousands of pathology classifications. Yet when an executive enters a high-stakes negotiation and feels their throat constrict, DSM classifications are utterly useless. They require a mechanical lever to halt somatic collapse immediately.',
            'Applied neurolinguistics treats cognition as a cybernetic feedback control system. We do not ask who is at fault; we ask: "What is the sensory architecture of this dread? What internal audio-visual sequence precedes panic?"',
          ],
          quote: {
            text: 'The map is not the territory. But your subjective map dictates whether your heart pounds at 140 BPM.',
            attribution: 'Alfred Korzybski / Oleksandr Diakov',
          },
          callout: {
            type: 'insight',
            label: 'Cybernetic Axiom',
            text: 'The human autonomic nervous system responds not to raw external reality, but to the sensory simulation projected on your internal mental theater.',
          },
        },
        {
          id: 'submodalities-reset',
          heading: 'Submodalities and Rapid Autonomic Recalibration',
          readMinutes: 5,
          body: [
            'Every mental projection carries distinct submodalities: luminosity, scale, distance, and acoustic pitch. If you project deal failure as an IMAX-sized panoramic nightmare directly in front of your eyes, the hypothalamus perceives imminent physical peril.',
            'Shrinking that visualization to thumbnail dimensions, shifting it 10 meters away, and draining color lowers autonomic panic by over 70% in under two minutes.',
          ],
          callout: {
            type: 'methodology',
            label: 'Operational Protocol',
            text: 'Shifting the internal critical voice from an ominous pitch to an absurd cartoon timbre immediately breaks the adrenaline reflex arc.',
          },
          protocolSteps: [
            {
              step: '01',
              title: 'Submodality Audit',
              description: 'Isolating spatial locus, scale, and volume of the catastrophic internal script.',
            },
            {
              step: '02',
              title: 'Sensory Parameter Manipulation',
              description: 'Rapidly shrinking, desaturating, and displacing the image to a neutral focal point.',
            },
            {
              step: '03',
              title: 'Somatic Ecological Verification',
              description: 'Validating parasympathetic diaphragmatic release and stabilized heart rate.',
            },
          ],
        },
      ],
    },
  },
  'hidden-burnout-vacation': {
    uk: {
      title: 'Приховане вигорання: чому відпочинок на вихідних провокує тривогу',
      subtitle: 'Нейробіологія адреналінового обвалу (Adrenaline Crash) та протокол безпечного виходу зі ступору',
      excerpt: 'Феномен адреналінового обвалу (Adrenaline Crash). Чому хронічний стрес руйнує нейробіологію спокою та як правильно виходити зі ступору.',
      categoryLabel: 'Нейробіологія стресу',
      publishedDate: '21 Лютого 2026',
      updatedDate: 'Вересень 2026',
      tags: ['Вигорання', 'Стрес', 'Нейробіологія', 'Олександр Дьяков'],
      author: {
        name: 'Олександр Дьяков',
        role: 'Засновник NextSelf',
        affiliation: 'NextSelf Lab',
        avatarInitials: 'ОД',
        verified: true,
        bio: 'Дослідник, профайлер, засновник лабораторії NextSelf. Автор протоколів нейробіологічного відновлення лідерів після симпатичного виснаження.',
      },
      keyQuestions: [
        'Чому панічні атаки та мігрені найчастіше накривають у перші дні відпустки?',
        'Як хронічний кортизоловий фон блокує рецептори парасимпатичної системи?',
        'Чому раптова бездіяльність сприймається рептильним мозком як смертельна загроза?',
      ],
      takeaways: [
        'Адреналіновий обвал (Adrenaline Crash) настає тоді, коли гіперактивована нервова система раптово стикається з відсутністю зовнішніх подразників.',
        'Первісний мозок звик, що тиша і завмирання означають засідку хижака, тому на вихідних він штучно генерує тривожні думки для підтримання тонусу.',
        'Перехід до спокою має бути ступеневим: не можна різко перемикатися з 14-годинного робочого дня на повну нерухомість на дивані.',
      ],
      content: [
        {
          id: 'adrenaline-crash-phenomenon',
          heading: 'Феномен адреналінового обвалу (Adrenaline Crash)',
          readMinutes: 4,
          body: [
            'Коли керівник місяцями живе в режимі дедлайнів, його наднирники безперервно прокачують кортизол і норадреналін. Тіло сприймає цей стан гіпермобілізації як нову фізіологічну норму: судини звужені, больова чутливість притуплена, імунітет працює на знос.',
            'Але ось настають вихідні або перший день довгоочікуваної відпустки. Стимуляція зникає. Концентрація стресових гормонів починає різко падати. І замість довгоочікуваного блаженства людина раптом прокидається з тахікардією, відчуттям безпричинного жаху та дифузною панікою.',
          ],
          quote: {
            text: 'Для виснаженого мозку раптова абсолютна тиша — це не курорт. Це сигнал, що хижак підібрався впритул.',
            attribution: 'Олександр Дьяков',
          },
          callout: {
            type: 'warning',
            label: 'Фізіологічний ризик',
            text: 'Різке скидання навантаження без перехідного буфера часто провокує соматичні збої, вегетативні кризи та загострення хронічних запалень.',
          },
        },
        {
          id: 'stepped-recovery-protocol',
          heading: 'Ступеневий протокол безпечної декомпресії',
          readMinutes: 4,
          body: [
            'Щоб уникнути адреналінового обвалу, нервову систему потрібно уповільнювати за принципом посадки літака: плавно, зі зниженням висоти по глісаді.',
            'Перші 48 годин відпочинку мають містити низькоінтенсивну соматичну активність (довгі піші прогулянки без навушників), термальні контрасти та свідому стимуляцію блукаючого нерва через дихання з подовженим видихом.',
          ],
          callout: {
            type: 'methodology',
            label: 'Протокол декомпресії',
            text: 'Дихання 4-7-8 (вдих 4с, затримка 7с, видих 8с) вмикає парасимпатичне гальмо серця та запобігає панічним кризам.',
          },
          protocolSteps: [
            {
              step: '01',
              title: 'Соматичний буфер',
              description: 'Відмова від повного лежання на дивані на користь монотонної рухової активності на свіжому повітрі.',
            },
            {
              step: '02',
              title: 'Вагусна стимуляція',
              description: 'Виконання 8-10 циклів дихання 4-7-8 перед сном для нормалізації архітектури повільнохвильового сну.',
            },
            {
              step: '03',
              title: 'Цифровий карантин',
              description: 'Повне відключення робочих чатів для припинення імпульсних сплесків дофаміну та кортизолу.',
            },
          ],
        },
      ],
    },
    ru: {
      title: 'Скрытое выгорание: почему отдых на выходных вызывает панику',
      subtitle: 'Нейробиология адреналинового обвала (Adrenaline Crash) и пошаговый протокол восстановления покоя',
      excerpt: 'Почему в отпуске случаются панические атаки? Узнайте, как хронический стресс ломает нейробиологию отдыха и как правильно выходить из скрытого выгорания.',
      categoryLabel: 'Нейробиология стресса',
      publishedDate: '21 Февраля 2026',
      updatedDate: 'Сентябрь 2026',
      tags: ['Выгорание', 'Стресс', 'Нейробиология', 'Александр Дьяков'],
      author: {
        name: 'Александр Дьяков',
        role: 'Основатель NextSelf',
        affiliation: 'NextSelf Foundation',
        avatarInitials: 'АД',
        verified: true,
        bio: 'Исследователь, профайлер, основатель NextSelf. Автор протоколов нейробиологического восстановления после симпатического истощения.',
      },
      keyQuestions: [
        'Почему панические атаки и слабость чаще всего настигают в первые дни отдыха?',
        'Как непрерывный кортизоловый фон выжигает рецепторы покоя?',
        'Почему мозг предпринимателя воспринимает отсутствие задач как смертельную угрозу?',
      ],
      takeaways: [
        'Адреналиновый обвал наступает, когда перевозбужденная нервная система резко лишается привычной стимуляции.',
        'Первобытный мозг считает, что тишина и покой означают скрытую засаду, и генерирует тревогу для поддержания тонуса.',
        'Переход к отдыху должен быть мягким: нельзя резко падать на диван после 80-часовой рабочей недели.',
      ],
      content: [
        {
          id: 'adrenaline-crash-phenomenon',
          heading: 'Феномен адреналинового обвала (Adrenaline Crash)',
          readMinutes: 4,
          body: [
            'Когда предприниматель месяцами живет в режиме высокой боеготовности, надпочечники непрерывно синтезируют кортизол. Организм привыкает к гиперстимуляции.',
            'При резкой остановке в отпуске уровень стрессовых гормонов падает, и мозг включает сирену тревоги: «Вокруг подозрительно тихо, нужно срочно готовиться к обороне».',
          ],
          quote: {
            text: 'Для истощенного мозга внезапная тишина — это не курорт. Это сигнал об опасности.',
            attribution: 'Александр Дьяков',
          },
          callout: {
            type: 'warning',
            label: 'Предостережение',
            text: 'Резкий переход от перегрузки к полному бездействию провоцирует вегетативные кризы.',
          },
        },
        {
          id: 'stepped-recovery-protocol',
          heading: 'Ступенчатый протокол безопасной декомпрессии',
          readMinutes: 4,
          body: [
            'Замедление должно быть плавным: пешие прогулки, дыхательные практики и постепенное снижение темпа.',
          ],
          callout: {
            type: 'methodology',
            label: 'Протокол декомпрессии',
            text: 'Дыхание 4-7-8 мягко включает парасимпатический тормоз и возвращает глубокий сон.',
          },
          protocolSteps: [
            {
              step: '01',
              title: 'Соматический буфер',
              description: 'Умеренная циклическая активность вместо пассивного лежания.',
            },
            {
              step: '02',
              title: 'Вагусная стимуляция',
              description: 'Дыхательный протокол 4-7-8 для активации блуждающего нерва.',
            },
            {
              step: '03',
              title: 'Информационный детокс',
              description: 'Отключение рабочих уведомлений для стабилизации дофаминового фона.',
            },
          ],
        },
      ],
    },
    en: {
      title: 'Silent Burnout: Why Weekend Downtime Triggers Somatic Panic',
      subtitle: 'The neurobiology of the adrenaline crash and an executive protocol for autonomic decompression',
      excerpt: 'Deconstructing the neurobiology of the adrenaline crash: why the overstimulated brain misinterprets silence and rest as mortal danger.',
      categoryLabel: 'Stress Neurobiology',
      publishedDate: 'February 21, 2026',
      updatedDate: 'September 2026',
      tags: ['Burnout', 'Stress Physiology', 'Neurobiology', 'Oleksandr Diakov'],
      author: {
        name: 'Oleksandr Diakov',
        role: 'NextSelf Founder',
        affiliation: 'NextSelf Lab',
        avatarInitials: 'OD',
        verified: true,
        bio: 'Applied cognitive researcher, profiler, and founder of NextSelf Lab. Creator of neurobiological recovery protocols for executive exhaustion.',
      },
      keyQuestions: [
        'Why do panic surges and somatic breakdowns strike during the first days of vacation?',
        'How does sustained cortisol desensitize vegetative calming receptors?',
        'Why does subcortical cognition misinterpret absence of operational crises as mortal threat?',
      ],
      takeaways: [
        'The adrenaline crash occurs when a sympathetic-dominant physiology is abruptly stripped of habitual operational stressors.',
        'Subcortical threat-detection circuits treat quiet downtime as predatory stalking, artificially sparking anxiety to re-escalate arousal.',
        'Restoration demands stepped deceleration: transitioning smoothly through low-intensity somatic pacing rather than total inertia.',
      ],
      content: [
        {
          id: 'adrenaline-crash-phenomenon',
          heading: 'The Mechanics of the Adrenaline Crash',
          readMinutes: 4,
          body: [
            'When an executive operates across consecutive quarters under unrelenting duress, adrenal output keeps baseline noradrenaline and cortisol elevated. Somatic physiology adapts to hyperarousal as its operating baseline.',
            'Upon stepping into vacation downtime, stimuli cease. Circulating hormones plunge. Instead of tranquility, the individual is jolted awake with visceral tachycardia and unprovoked dread.',
          ],
          quote: {
            text: 'To an overstimulated brain, sudden stillness is not a retreat. It is a siren that a predator is closing in.',
            attribution: 'Oleksandr Diakov',
          },
          callout: {
            type: 'warning',
            label: 'Physiological Hazard',
            text: 'Abrupt deceleration from intense sympathetic load into complete passivity sparks acute vegetative shock and somatic panic surges.',
          },
        },
        {
          id: 'stepped-recovery-protocol',
          heading: 'A Stepped Autonomic Recalibration Protocol',
          readMinutes: 4,
          body: [
            'Deceleration must be executed progressively, akin to bringing a supersonic jet down along an optimal glide slope.',
            'The initial 48 hours require structured low-intensity somatic movement and vagal nerve activation via extended-exhale breathwork.',
          ],
          callout: {
            type: 'methodology',
            label: 'Decompression Protocol',
            text: 'Respiration pacing (4-7-8) directly engages the cardiac vagal brake, preventing weekend anxiety spikes.',
          },
          protocolSteps: [
            {
              step: '01',
              title: 'Somatic Buffer Zone',
              description: 'Engaging in continuous outdoor walking rather than total sedentary immobility.',
            },
            {
              step: '02',
              title: 'Vagal Nerve Activation',
              description: 'Executing 8-10 cycles of 4-7-8 respiration before sleep to restore slow-wave restorative architecture.',
            },
            {
              step: '03',
              title: 'Sensory Isolation',
              description: 'Severing all asynchronous communication channels to halt dopaminergic reactivity.',
            },
          ],
        },
      ],
    },
  },
};
