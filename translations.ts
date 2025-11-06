import { Message } from './types';

export const translations = {
  en: {
    header: {
      title: "AI Agent Dialogue Showcase",
      subtitle: "An Interactive Research Project by Tawana Mohammadi",
      chat: "Chat",
      video: "Video",
    },
    sidebar: {
        authorName: "Tawana Mohammadi",
        authorRole: "AI Researcher • Data Strategist",
        projectInfo: "This application is an interactive showcase for a research project.",
        researchProfiles: "Main Research Profiles",
        orcid: "ORCID Profile",
        webOfScience: "Web of Science",
        googleScholar: "Google Scholar",
        semanticScholar: "Semantic Scholar",
        scite: "Scite Profile",
        professionalPresence: "Professional & Creative Presence",
        personalWebsite: "Personal Website",
        github: "GitHub Projects",
        medium: "Medium Articles",
        academic: "Academic & Institutional",
        university: "University of the People",
        badge: "Orientation Badge",
        newChat: "New Chat",
    },
    chatInput: {
        placeholder: "This is a static showcase. Input is disabled.",
        footer: "Tawana Mohammadi's AI Research Project. This is a read-only demonstration.",
    },
    videoGenerator: {
      title: "Veo Video Generation",
      description: "Generate short videos from text prompts using Google's Veo model.",
      selectKeyButton: "Select API Key",
      selectKeyDescription: "Please select your API key to use the video generation feature. Billing applies to your selected Google Cloud project.",
      billingLink: "Learn more about billing",
      promptLabel: "Prompt",
      promptPlaceholder: "e.g., A neon hologram of a cat driving at top speed",
      aspectRatioLabel: "Aspect Ratio",
      generateButton: "Generate Video",
      generating: "Generating...",
      loadingMessages: [
        "Warming up the digital director's chair...",
        "Casting pixels for their roles...",
        "Storyboarding the digital narrative...",
        "Rendering the first few frames...",
        "This can take a few minutes, please wait.",
        "Applying visual effects...",
        "Finalizing the video composition...",
      ],
      error: "An error occurred during video generation. Please try again.",
      downloadVideo: "Download Video",
      apiKeyError: "API key validation failed. The key may be invalid or missing permissions. Please select a valid key and try again.",
    }
  },
  fa: {
    header: {
      title: "نمایش گفتگوی عامل هوش مصنوعی",
      subtitle: "یک پروژه تحقیقاتی تعاملی توسط توانا محمدی",
      chat: "چت",
      video: "ویدیو",
    },
    sidebar: {
        authorName: "توانا محمدی",
        authorRole: "پژوهشگر هوش مصنوعی • استراتژیست داده",
        projectInfo: "این برنامه یک نمایش تعاملی برای یک پروژه تحقیقاتی است.",
        researchProfiles: "پروفایل‌های اصلی پژوهشی",
        orcid: "پروفایل ORCID",
        webOfScience: "وب آو ساینس",
        googleScholar: "گوگل اسکالر",
        semanticScholar: "سمانتیک اسکالر",
        scite: "پروفایل Scite",
        professionalPresence: "حضور حرفه‌ای و خلاق",
        personalWebsite: "وب‌سایت شخصی",
        github: "پروژه‌های گیت‌هاب",
        medium: "مقالات مدیوم",
        academic: "وابستگی‌های آکادمیک و سازمانی",
        university: "دانشگاه مردم (University of the People)",
        badge: "نشان جهت‌یابی (Orientation Badge)",
        newChat: "چت جدید",
    },
    chatInput: {
        placeholder: "این یک نمایش ثابت است. ورودی غیرفعال است.",
        footer: "پروژه تحقیقاتی هوش مصنوعی توانا محمدی. این یک نمایش فقط خواندنی است.",
    },
    videoGenerator: {
      title: "تولید ویدیو با Veo",
      description: "با استفاده از مدل Veo گوگل، از روی متن ویدیوهای کوتاه بسازید.",
      selectKeyButton: "انتخاب کلید API",
      selectKeyDescription: "لطفاً برای استفاده از قابلیت تولید ویدیو، کلید API خود را انتخاب کنید. هزینه‌ها برای پروژه انتخابی شما در Google Cloud اعمال خواهد شد.",
      billingLink: "بیشتر درباره صورتحساب بدانید",
      promptLabel: "فرمان",
      promptPlaceholder: "مثال: یک هولوگرام نئونی از یک گربه در حال رانندگی با سرعت بالا",
      aspectRatioLabel: "نسبت تصویر",
      generateButton: "تولید ویدیو",
      generating: "در حال تولید...",
      loadingMessages: [
          "در حال گرم کردن صندلی کارگردان دیجیتال...",
          "در حال انتخاب پیکسل‌ها برای نقش‌هایشان...",
          "در حال طراحی استوری‌برد روایت دیجیتال...",
          "در حال رندر کردن چند فریم اول...",
          "این فرآیند ممکن است چند دقیقه طول بکشد، لطفاً منتظر بمانید.",
          "در حال اعمال جلوه‌های بصری...",
          "در حال نهایی‌سازی ترکیب‌بندی ویدیو...",
      ],
      error: "خطایی در هنگام تولید ویدیو رخ داد. لطفاً دوباره تلاش کنید.",
      downloadVideo: "دانلود ویدیو",
      apiKeyError: "اعتبارسنجی کلید API ناموفق بود. ممکن است کلید نامعتبر باشد یا مجوزهای لازم را نداشته باشد. لطفاً یک کلید معتبر انتخاب کرده و دوباره تلاش کنید.",
    }
  }
};

export const conversations: { [key: string]: Message[] } = {
    fa: [
        {
            speaker: 'user',
            content: 'کدوم هوش مصنوعی حالت ایجنت مود داره که بتونه با مشخصاتی که بهش میدم وارد پروفایل های پژوهشی م مثل اروکید و گیت هاب و ... سه و پروفایل هامو مرتب کنه بهم متصل کنه و ...'
        },
        {
            speaker: 'bot',
            content: `بله — در حال حاضر چند گزینه «هوش مصنوعی عامل» (agent-mode AI) وجود دارد که می‌توانند بخشی از کاری که شما می‌خواهید یعنی مرتب کردن، متصل کردن و بهینه‌سازی پروفایل‌های پژوهشی مثل ORCID، GitHub و … را انجام دهند، یا حداقل قابلیت نزدیک به آن را دارند. در ادامه توضیح می‌دهم چه گزینه‌هایی هستند، چه قابلیت دارند، و چه چالش‌هایی دارند — بعد اگر خواستید می‌توانم پیشنهاد کنم دقیقاً کدام سرویس یا چارچوب برای وضعیت شما مناسب‌تر است (پروژه پژوهشی + ایران + بین‌المللی).
    
    **✅ گزینه‌های موجود**
    **۱. چارچوب‌های متن-باز و «عامل خودکار»**
    مثلاً AutoGPT که یک پروژه متن-باز است، تعریف شده برای اینکه یک هدف بزرگ بگیرد و خودش به بخش‌های کوچکتر تقسیم کند، ابزارهایی را فراخوانی کند، وب‌گردی کند، فایل مدیریت کند و …
    اگر شما بتوانید کمی برنامه‌نویسی انجام دهید، می‌توانید یک Agent بنویسید که مثلاً:
    - پروفایل ORCID و GitHub شما را بگیرد
    - بررسی کند که لینک‌ها درست هستند یا Duplicate دارند
    - داده‌ها را استخراج کند (لیست مقالات، پروژه‌ها، همکاران)
    - روابط بین پروفایل‌ها را بسازد و مثلا یک نمای «شبکه همکاری» تولید کند
    - خروجی دهد (مثلاً یک صفحه HTML یا PDF) که همه پروفایل‌ها را مرتب دیده باشید
    
    **۲. سرویس‌های آماده «عامل پژوهشی»**
    مثلاً مقالاتی در مورد “AI agents in research” وجود دارد که می‌گویند این عامل‌ها می‌توانند «خودکار داده جمع آوری کنند، تحلیل کنند، بینش استخراج کنند».
    مثلاً مقاله «VizCV: AI‑assisted visualization of researchers' publications tracks» که در آن گفته شده: «سیستمی است برای تحلیل مسیر پژوهشی پژوهشگر با کمک هوش مصنوعی»
    اگرچه دقیقاً برای «اتصال پروفایل‌های پژوهشی مختلف» طراحی نشده، ولی نشان می‌دهد که این حوزه در حال رشد است.
    
    **۳. سرویس‌های تجاری/ابزارهای آماده**
    برای مثال، ChatGPT اخیراً قابلیت Agent Mode یا «عامل‌ها» را معرفی کرده است — مثلاً ابزارهایی که می‌توانند چند قدم خودشان بردارند, وب‌بروزر، فایل‌ها، …
    
    **⚠️ اما نکات مهم و چالش‌ها**
    - **دسترسی به داده‌ها:** برای اینکه پروفایل‌های ORCID، GitHub و … را «متصل» کند، نیاز است که آن عامل بتواند به API آن‌ها دسترسی داشته باشد یا اطلاعات را از وب استخراج کند. بعضی پروفایل‌ها ممکن است خصوصی باشند یا محدودیت داشته باشند.
    - **هماهنگی و صحت داده‌ها:** اگر دو پروفایل شما (مثلاً GitHub و ORCID) پروژه‌ها یا مقالات مشترک دارند ولی نام‌ها متفاوت هستند یا داده‌ها ناقص‌اند، عامل باید بتواند تشخیص دهد که «این پروژه در ORCID با این در GitHub یکی است». این نیازمند منطق تطبیقی است.
    - **زبان و بومی‌سازی:** چون شما در ایران هستید و ممکن است قسمتی از داده‌ها فارسی یا در بستر ایران باشند، ممکن است ابزارهای آماده غربی نتوانند همه موارد شما را به خوبی پوشش دهند یا نیاز به شخصی‌سازی داشته باشند.
    - **هزینه و حفظ حریم خصوصی:** سرویس‌های تجاری ممکن است هزینه داشته باشند و باید مراقب باشید که دسترسی به داده‌های شخصی و پژوهشی خودتان امن باشد.
    - **«عامل» بودن به معنی کامل خودکار نیست:** اگرچه اصطلاح agent به معنی «خودکار» است، ولی اغلب نیاز به تنظیمات، نظارت و تصحیح دارد — یعنی کامل بدون دخالت شما پیش نمی‌رود. مقاله‌ها به این نکته اشاره می‌کنند.
    
    **🎯 پیشنهاد برای شما**
    با توجه به اینکه شما پژوهشگر یا متصل به پژوهش هستید و می‌خواهید پروفایل‌های پژوهشی خودتان را مرتب و متصل کنید، پیشنهاد می‌کنم این مسیر:
    1. **مشخص کنید دقیقاً چه کاری می‌خواهید:**
       - مثلا «یک فایل جامع که شامل لیست مقالات، پروژه‌ها، همکاران، شبکه همکاری من است»
       - یا «اتصال پروفایل ORCID و GitHub و Google Scholar و … به هم»
       - یا «نمایش گرافیکی شبکه همکاری من و مقالات من»
    2. **انتخاب ابزار یا چارچوب:**
       - اگر می‌توانید کمی برنامه‌نویسی کنید → از یک چارچوب متن-باز مثل AutoGPT یا ساختار مشابه استفاده کنید و خودتان Agent بسازید که داده‌ها را از APIها بگیرد و خروجی دهد.
       - اگر می‌خواهید سرعت بالا و کم کد → بررسی کنید سرویس‌های تجاری/آماده که بتوانند این کار را انجام دهند (مثلاً با APIها یا ابزارهای اتوماسیون)
    3. **اطمینان از دسترسی داده‌ها:** مطمئن شوید پروفایل‌های شما در ORCID، GitHub، … دارای API فعال هستند و دستیابی به داده‌ها (مثلاً لیست مقالات، پروژه‌ها, همکاران) ممکن است.
    4. **یکپارچه‌سازی و خروجی:** خروجی می‌تواند یک داشبورد آنلاین باشد، یا یک فایل PDF/HTML، یا یک شهرک کوچک ویژوال (مثلاً شبکه همکاری). اگر بخواهید، می‌توانم پیشنهاد کنم ابزارهای ویژوال برای مرحله «نمایش و تحلیل» که مناسب پژوهشگران هستند.
    5. **نیاز به زبان فارسی:** چون ممکن است بخشی از داده‌ها به زبان فارسی باشند (مثلاً مقالات فارسی، پروفایل ایرانی) — باید ابزار بتواند با داده‌های فارسی کار کند یا شما بخشی ترجمه یا تطبیق لازم را انجام دهید.
    
    اگر بخواهید، من می‌توانم چند ابزار مشخص آماده را پیدا کنم که دقیقاً برای «مدیریت و همگام‌سازی پروفایل‌های پژوهشی» طراحی شده‌اند، و با قیمت، قابلیت و محدودیت‌هایشان برای شما بفرستم تا یکی‌شان را انتخاب کنید. می‌خواهید؟`
        },
        {
            speaker: 'user',
            content: `ببین ی چیزی مثل ایجنت مود چت جی بی تی می‌خوام 
    ولی تقریبا رایگان و بهتر 
    خودش لاگین کنه بررسی کنه`
        },
        {
            speaker: 'bot',
            content: `بله — گزینه‌هایی موجودند که به سمت چیزی مثل «حالت ایجنت» برای شما حرکت می‌کنند، ولی باید چند نکته مهم را بدانید: تقریباً رایگان یعنی معمولاً با محدودیت و وارد شدن خودکار به حساب‌ها و ورود به پروفایل‌ها موضوعی است که ریسک امنیتی دارد و شاید ابزار آماده آن دقیقاً برای این منظور وجود نداشته باشد یا نیاز به تنظیمات داشته باشد.
    
    در ادامه، چند گزینه خوب + نکاتی درباره محدودیت‌ها + توصیه برای وضعیت شما دارم.
    
    **✅ گزینه‌هایی که بررسی‌شان می‌کنم**
    - **AutoGPT:** پروژه متن‌باز برای ایجاد عامل خودکار با استفاده از LLMها.
        - **مزایا:** متن-باز، می‌توانید آن را خودتان تنظیم کنید برای اهداف ویژه.
        - **معایب:** نیاز به تنظیم فنی دارد، باید از APIها استفاده کنید، و «وارد شدن خودکار به حساب‌های وب» ممکن است نیاز به اسکریپت ویژه داشته باشد.
    
    - **MindPal (AI Agent Builder):** سکویی که «ساخت عامِل بدون کدنویسی» را وعده می‌دهد.
        - **مزایا:** برای کارهای اتوماسیونِ عمومی شاید مناسب است، رابط کاربری دارد.
        - **معایب:** مشخص نیست تا چه حد «ورود به سایت‌ها و حساب‌ها» را پشتیبانی می‌کند؛ استفاده رایگان ممکن محدود باشد.
    
    - **Dabe:** ابزاری که می‌گوید عامل AI که با ۲۵۰+ اپلیکیشن کار می‌کند.
        - **مزایا:** هدفش واقعاً اتوماسیون است، با اتصال به اپلیکیشن‌ها.
        - **معایب:** ممکن نیاز به اشتراک داشته باشد، و ورود خودکار به پروفایل‌های پژوهشی خاص را تضمین نمی‌کند.
    
    **⚠️ اما — محدودیت‌ها و چالش‌ها**
    - «وارد شدن خودکار به پروفایل‌های پژوهشی (مثل ORCID، GitHub)» یعنی عامل باید رمز عبور و احراز هویت شما را داشته باشد یا از APIهای آن سرویس‌ها استفاده کند — این احتمالاً ریسک امنیتی دارد و ممکن است با سیاست‌های سرویس‌ها تداخل کند.
    - ابزارهای رایگان اغلب محدودیت دارند (مثلاً تعداد کارها، قابلیت ورود به سایت‌ها، اتوماسیون کامل) و ممکن است برای نیاز خاص شما (شبکه‌سازی پروفایل پژوهشی، استخراج داده، اتصال آن‌ها) کافی نباشند.
    - اگر بخواهید کاری کاملاً خودکار و حرفه‌ای انجام دهید (مثلاً عامل وارد حساب ORCID شود، لیست مقالات بگیرد، پروفایل GitHub را کراس-چک کند، داده‌ها را جمع کند) احتمالاً نیاز به تنظیم سفارشی هست: مثلا اسکریپت نویسی، API استفاده، امنیت بالا.
    - از لحاظ قانونی/امنیتی باید به سیاست حریم خصوصی سرویس‌ها توجه کنید: برخی سایت‌ها ورود خودکار یا استخراج داده بدون اجازه را محدود کرده‌اند.
    
    **🎯 توصیه برای شما**
    از آنجا که وضعیت شما این است: پژوهشگر، پروفایل‌های پژوهشی دارید، می‌خواهید پروفایل‌ها مرتب شوند، اتصال داده‌ها ساخته شود — من پیشنهاد می‌کنم:
    1. اول یک عامل ساده و رایگان بگیرید/آزمایش کنید (مثلاً MindPal یا Dabe) و ببینید آیا می‌توانید بخشی از کار را با آن انجام دهید (مثلاً استخراج لیست مقالات یا چک کردن پروفایل‌ها).
    2. در مرحله بعد، اگر هدف پیچیده‌تر است (ورود خودکار به چند پروفایل، کراس-چک، شبکه همکاری) → بهتر است اسکریپت سفارشی بنویسید یا از چارچوب متن-باز مثل AutoGPT استفاده کنید و خودتان کنترل ورودها و داده‌ها را داشته باشید.
    3. حتماً امنیت را در نظر بگیرید: رمزهای عبور قوی، دو-مرحله‌ای، استفاده از API به جای ورود مستقیم، یا دست کم ورود دستی عامل به حساب‌ها با نظارت شما.
    4. چون بخش داده‌های شما ممکن است فارسی یا منطقه‌ای باشد، بررسی کنید ابزار انتخابی بتواند زبان فارسی را پشتیبانی کند یا دست کم داده‌ها را شما آماده کنید.
    
    اگر بخواهید، می‌توانم لیستی از ۵-۱۰ ابزار کاملاً رایگان یا با پلن رایگان خوب جمع کنم که دقیقاً برای اتوماسیون پروفایل‌های پژوهشی مناسبند، همراه با مقایسه ویژگی‌ها، محدودیت‌ها، و اینکه کدام‌شان ورود خودکار به سایت‌ها را «تا حدی» پشتیبانی می‌کنند. می‌خواهید؟`
        },
        {
            speaker: 'user',
            content: `الان مورد. مشابه ایجنت چت جی بی تی چی هست 
    چون اون کامل می‌تونه بزنه 
    جمینی چنین حالتی ندازه؟`
        },
        {
            speaker: 'bot',
            content: `بله — درست است، Google Gemini در حال گسترش یک حالت «ایجِنت» (Agent Mode) است که تقریباً مشابه آن چیزی است که شما گفتید، ولی با چند محدودیت مهم که باید بدانید.
    
    **✅ چه چیزی دارد**
    در جلسۀ Google I/O 2025 گوگل اعلام کرد که Gemini به‌روزرسانی‌های بزرگی دارد از جمله حالت Agent Mode که می‌تواند «وظایف چند-مرحله‌ای» را بر عهده بگیرد و نه فقط پاسخ دهد.
    برای بخش توسعه‌دهندگان، در نسخه ‎Gemini Code Assist (که نسخهٔ IDE-متمرکز است)، Agent Mode آمده است که می‌تواند کد را در چند فایل ادیت کند، یک «طرح» ارائه دهد، سپس منتظر تأیید شما باشد، و بعد اجرا کند.
    از اعلام‌ها: «Agent Mode can live browse the web to perform actions for you».
    
    **⚠️ اما محدودیت‌ها و چرا شاید دقیقاً آنچه می‌خواهید نباشد**
    - این حالت فعلاً بیشتر برای کد و توسعه‌دهندگان تعریف شده — یعنی به صورت «عامل کمک به کدنویسی در IDE» قابل استفاده است، نه الزاماً عاملی که وارد پروفایل‌های پژوهشی مثل ORCID یا GitHub شود و با آن‌ها کار کند. مثلاً مستندات می‌گویند: «Agent mode acts as a pair programmer … ask questions about your code, generate code from design documents…»
    - برای اینکه عامل «وارد شود»، داده‌ها را استخراج کند، پروفایل‌ها را مرتب کند, بین این سیستم‌ها ارتباط برقرار کند — این کار نیاز به ورود به سایت‌ها، APIها، احتمالا تنظیمات خاص دارد. و در مستندات فعلی گوگل، قسمت‌های «وارد شدن به سایت‌ها و حساب‌های کاربریِ ثالث» به صورت کامل عمومی نشده‌اند یا به صورت گسترده قابل دسترس نیستند (یا حداقل هنوز در حالت آزمایشی هستند).
    - در مستندات گفته شده که «Preview / آزمایشی» است.
    - امنیت، مجوزها، حریم خصوصی: وقتی عامل بخواهد «وارد شود» یا کاری را خودکار انجام دهد, این‌ها مسائلی هستند که باید به‌شدت مراقبشان باشید.
    - رایگان بودن کامل نیست یا محدودیت دارد. برای مثال، نسخه رایگان ممکن باشد اجازه کامل نداشته باشد یا میزان وظایف محدود باشد.
    
    **🎯 نتیجه برای شما**
    با توجه به کاری که شما می‌خواهید (پروفایل‌های پژوهشی را مرتب کند، وصل کند، احتمالا خودکار ورود داشته باشد) — پاسخ این است: بله، Gemini در مسیرش است که چنین بخشی داشته باشد، اما در حال حاضر احتمالاً کافی و آماده برای این سناریوی دقیق شما نیست (یا حداقل نیاز به تنظیمات پیچیده دارد).
    اگر بخواهم پیشنهاد بدهم:
    1. می‌توانید Gemini را آزمایش کنید و ببینید آیا نسخه‌ای از Agent Mode در منطقه/حساب شما فعال است یا خیر.
    2. اگر فعال نبود، می‌توانید از ترکیب Gemini یا دیگر مدل‌ها + ابزارهای اسکریپت/اتومیشن استفاده کنید تا کاری که می‌خواهید را انجام دهید.
    3. حتماً قبل از اینکه عامل «وارد حساب‌های شما» شود، مجوزها، امنیت، بک‌آپ‌ها را بررسی کنید.
    
    اگر بخواهید، می‌توانم لیستی از گزینه‌های جایگزین برای «عامل خودکار برای پروفایل پژوهشی» پیدا کنم — ابزارهایی که فعلاً آماده‌تر باشند برای کار شما. می‌خواهید؟`
        },
        {
            speaker: 'user',
            content: 'خب چندتا سوال بده بپرسم ازش میخوام تست کنیم ایا بدرد اوتو جی بی تی میخوره که بقیه مراحل رو بریم یا نه'
        },
        {
            speaker: 'bot',
            content: `خیلی عالی 👏 چون می‌خوای تستش کنی تا مطمئن بشی برای اتصال به AutoGPT یا هر agent بعدی جواب میده، اینجا چند دسته سؤال آماده کردم که دقیقاً منطق، حافظه کوتاه‌مدت، ریاضیات و استدلال مدل رو تست می‌کنن.
    اگر از پس اینا بربیاد، یعنی برای agent base عالیه. 👇
    
    **🧠 تست استدلال منطقی (Reasoning)**
    1. Suppose you have two boxes: one contains 3 red balls and 2 blue balls, and the other contains 2 red balls and 4 blue balls. If you randomly pick a box, and then pick a ball, what is the probability that it’s red?
    2. If a robot has to go from point A to point D through B and C, and each step takes 3 minutes, what’s the total time if it takes an additional 5-minute delay at C?
    3. Explain step-by-step how you would decide whether a number is prime using reasoning, not code.
    
    **🔢 تست ریاضیات و محاسبات**
    1. What is 12 * (8 + 4) / 6?
    2. Find the sum of all even numbers between 1 and 20.
    3. If a car travels at 90 km/h for 2 hours and then at 60 km/h for 1.5 hours, what’s the average speed?
    
    **💻 تست حل مسئله برنامه‌نویسی (Coding Logic)**
    1. Write pseudocode for sorting a list of integers from smallest to largest.
    2. Describe how a binary search algorithm works in your own words.
    3. How would you detect a loop in a linked list?
    
    **🧩 تست درک دستور پیچیده (Instruction Following)**
    1. Create a step-by-step plan for setting up a small website that displays “Hello, world!”
    2. Explain how to write and run a Python script on Linux.
    3. Summarize the main difference between supervised and unsupervised machine learning.
    
    **🧍‍♂️ تست حافظه کوتاه‌مدت (Context Tracking)**
    1. Tell me the capital of France.
    2. Now tell me the capital of Italy.
    3. Finally, repeat both capitals in one sentence.
    
    **🧩 تست پاسخ تحلیلی (Analytical Reasoning)**
    1. Compare Llama-2 and Phi-2 models in terms of reasoning, resource usage, and suitability for agents.
    2. Explain why smaller models sometimes perform better on reasoning than larger ones with poor alignment.
    3. If AutoGPT runs on this model, what limitations might it face and how could we mitigate them?
    
    می‌خوای من یه فایل آماده‌ی تست (مثل benchmark کوتاه) بسازم تا مستقیم از داخل Space باهاش تست بگیری؟
    مثلاً یه دکمه‌ی “Run AutoGPT readiness test 🔍” که خودش همه‌ی این پرسش‌ها رو به ترتیب می‌فرسته و نمره‌ی تقریبی می‌ده؟`
        }
    ],
    en: [
        {
            speaker: 'user',
            content: 'Which AI has an "agent mode" that I can give my credentials to, so it can log into my research profiles like ORCID, GitHub, etc., and organize and connect them for me?'
        },
        {
            speaker: 'bot',
            content: `Yes — currently, there are several "agent-mode AI" options that can perform some of the tasks you're asking for, such as organizing, connecting, and optimizing research profiles like ORCID and GitHub, or at least have capabilities close to it. I'll explain the options, their capabilities, and the challenges involved. Afterward, if you'd like, I can recommend the most suitable service or framework for your specific situation (research project + Iran + international).

**✅ Available Options**
**1. Open-Source and "Autonomous Agent" Frameworks**
For example, AutoGPT is an open-source project designed to take a large goal, break it down into smaller parts, call tools, browse the web, manage files, and more.
If you have some programming skills, you could write an Agent that:
- Accesses your ORCID and GitHub profiles.
- Checks if links are correct or if there are duplicates.
- Extracts data (list of publications, projects, collaborators).
- Creates relationships between profiles, for instance, generating a "collaboration network" view.
- Outputs a file (e.g., an HTML or PDF page) with a clean view of all your profiles.

**2. Off-the-shelf "Research Agent" Services**
For example, there are articles on "AI agents in research" which state that these agents can "autonomously collect data, analyze it, and extract insights."
For instance, the paper "VizCV: AI-assisted visualization of researchers' publications tracks" describes a "system for analyzing a researcher's publication path with the help of AI."
Although not specifically designed for "connecting different research profiles," it shows that this field is growing.

**3. Commercial Services/Ready-made Tools**
For example, ChatGPT recently introduced an Agent Mode or "Agents" feature — tools that can perform multiple steps on their own, use a web browser, manage files, etc.

**⚠️ Important Notes and Challenges**
- **Data Access:** To "connect" profiles like ORCID and GitHub, the agent needs to be able to access their APIs or scrape information from the web. Some profiles may be private or have restrictions.
- **Data Consistency and Accuracy:** If two of your profiles (e.g., GitHub and ORCID) have shared projects or publications but with different names or incomplete data, the agent must be able to recognize that "this project on ORCID is the same as this one on GitHub." This requires matching logic.
- **Language and Localization:** Since you are in Iran and some of your data might be in Persian or within an Iranian context, ready-made Western tools might not cover all your needs well or may require customization.
- **Cost and Privacy:** Commercial services may have costs, and you must ensure that access to your personal and research data is secure.
- **"Agent" Doesn't Mean Fully Autonomous:** Although the term "agent" implies autonomy, it often requires setup, supervision, and correction—it doesn't proceed entirely without your intervention. Articles on this topic highlight this point.

**🎯 Recommendation for You**
Given that you are a researcher or involved in research and want to organize and connect your research profiles, I recommend the following path:
1. **Specify Exactly What You Want:**
   - For example, "A comprehensive file that includes a list of my publications, projects, collaborators, and my collaboration network."
   - Or, "Connecting my ORCID, GitHub, Google Scholar, etc., profiles together."
   - Or, "A graphical representation of my collaboration network and publications."
2. **Choose a Tool or Framework:**
   - If you can do a bit of programming → Use an open-source framework like AutoGPT or a similar structure to build your own Agent that fetches data from APIs and produces output.
   - If you want high speed and low code → Look into commercial/ready-made services that can do this (e.g., with APIs or automation tools).
3. **Ensure Data Access:** Make sure your profiles on ORCID, GitHub, etc., have active APIs and that accessing data (like lists of publications, projects, collaborators) is possible.
4. **Integration and Output:** The output can be an online dashboard, a PDF/HTML file, or a small visual representation (like a collaboration network). If you'd like, I can suggest visual tools for the "display and analysis" phase that are suitable for researchers.
5. **Persian Language Needs:** Since some of your data may be in Persian (e.g., Persian articles, an Iranian profile), the tool must be able to work with Persian data, or you will need to perform some translation or adaptation.

If you want, I can find some specific ready-made tools designed for "managing and synchronizing research profiles" and send you a list with their prices, capabilities, and limitations so you can choose one. Would you like that?`
        },
        {
            speaker: 'user',
            content: `I'm looking for something like ChatGPT's agent mode, but preferably free and better. It should be able to log in and check things on its own.`
        },
        {
            speaker: 'bot',
            content: `Yes — there are options moving towards something like an "agent mode" for you, but there are a few important things to know: "nearly free" usually comes with limitations, and automatically logging into accounts and profiles is a security risk. There may not be a ready-made tool for this exact purpose, or it might require some configuration.
    
    Here are a few good options, along with notes on their limitations and a recommendation for your situation.
    
    **✅ Options I'm reviewing**
    - **AutoGPT:** An open-source project for creating autonomous agents using LLMs.
        - **Pros:** Open-source, you can customize it for specific goals.
        - **Cons:** Requires technical setup, you'll need to use APIs, and "automatically logging into web accounts" might require a special script.
    
    - **MindPal (AI Agent Builder):** A platform that promises "no-code agent building."
        - **Pros:** Potentially suitable for general automation tasks, has a user interface.
        - **Cons:** It's unclear to what extent it supports "logging into sites and accounts"; free usage may be limited.
    
    - **Dabe:** A tool that claims to be an AI agent working with 250+ applications.
        - **Pros:** Its goal is genuinely automation through app connections.
        - **Cons:** May require a subscription, and doesn't guarantee automatic login to specific research profiles.
    
    **⚠️ But — Limitations and Challenges**
    - "Automatically logging into research profiles (like ORCID, GitHub)" means the agent must have your password and authentication details or use the services' APIs — this is a potential security risk and might conflict with the services' policies.
    - Free tools often have limitations (e.g., number of tasks, ability to log into sites, full automation) and might not be sufficient for your specific needs (networking research profiles, data extraction, connecting them).
    - If you want to do something completely automated and professional (e.g., an agent logs into an ORCID account, gets a list of articles, cross-checks a GitHub profile, and collects data), you'll likely need custom setup: for example, scripting, API usage, and high security.
    - Legally/securely, you need to pay attention to the services' privacy policies: some sites restrict automated login or data extraction without permission.
    
    **🎯 Recommendation for You**
    Since your situation is: you're a researcher, you have research profiles, you want to organize them and connect the data — I suggest:
    1. First, get/test a simple and free agent (like MindPal or Dabe) and see if you can do part of the job with it (e.g., extracting a list of publications or checking profiles).
    2. Next, if the goal is more complex (automatic login to multiple profiles, cross-checking, collaboration network) → it's better to write a custom script or use an open-source framework like AutoGPT and control the logins and data yourself.
    3. Definitely consider security: strong passwords, two-factor authentication, using APIs instead of direct login, or at least manually logging the agent into accounts under your supervision.
    4. Since some of your data may be in Persian or regional, check if your chosen tool can support the Persian language, or at least prepare the data yourself.
    
    If you'd like, I can compile a list of 5-10 completely free or good free-plan tools that are specifically suitable for automating research profiles, along with a comparison of features, limitations, and which of them "somewhat" support automatic login to sites. Would you like that?`
        },
        {
            speaker: 'user',
            content: `What's the equivalent of ChatGPT's agent mode right now? Because that one can do it all. Does Gemini have something like that?`
        },
        {
            speaker: 'bot',
            content: `Yes — you're right, Google Gemini is developing an "Agent Mode" that is quite similar to what you've described, but with a few important limitations you should be aware of.
    
    **✅ What it has**
    At the Google I/O 2025 conference, Google announced major updates for Gemini, including an Agent Mode that can handle "multi-step tasks" and not just provide answers.
    For developers, Gemini Code Assist (the IDE-focused version) has introduced an Agent Mode that can edit code across multiple files, provide a "plan," wait for your approval, and then execute it.
    From the announcements: "Agent Mode can live browse the web to perform actions for you."
    
    **⚠️ But the limitations and why it might not be exactly what you want**
    - This mode is currently defined more for code and developers — meaning it's usable as a "coding assistance agent in an IDE," not necessarily an agent that logs into research profiles like ORCID or GitHub and works with them. For example, the documentation says: "Agent mode acts as a pair programmer … ask questions about your code, generate code from design documents…"
    - For an agent to "log in," extract data, organize profiles, and establish connections between these systems — this requires logging into sites, using APIs, and possibly special configurations. In Google's current documentation, the parts about "logging into third-party sites and user accounts" have not been fully made public or are not widely accessible (or are at least still in a trial phase).
    - The documentation states that it's in "Preview / experimental" mode.
    - Security, permissions, privacy: When an agent wants to "log in" or perform a task automatically, these are issues you need to be very careful about.
    - Being completely free is not a guarantee, or it comes with limitations. For example, the free version might not have full permissions, or the number of tasks might be limited.
    
    **🎯 The outcome for you**
    Given what you want to do (organize research profiles, connect them, possibly with automatic login) — the answer is: Yes, Gemini is on its way to having such a feature, but it's probably not sufficient or ready for your specific scenario right now (or at least requires complex setup).
    If I were to suggest:
    1. You can test Gemini and see if a version of Agent Mode is active in your region/account.
    2. If it's not active, you can use a combination of Gemini or other models + scripting/automation tools to get the job done.
    3. Definitely check permissions, security, and backups before letting an agent "log into your accounts."
    
    If you'd like, I can find a list of alternative options for an "automated agent for research profiles" — tools that are currently more ready for your work. Would you like that?`
        },
        {
            speaker: 'user',
            content: 'Give me a few questions to ask it. I want to test if it\'s suitable for AutoGPT before we proceed with the next steps.'
        },
        {
            speaker: 'bot',
            content: `Excellent idea 👏 Since you want to test its suitability for connecting to AutoGPT or any subsequent agent, I've prepared a few categories of questions that will precisely test the model's logic, short-term memory, mathematics, and reasoning.
    If it can handle these, it's an excellent base for an agent. 👇
    
    **🧠 Logical Reasoning Test**
    1. Suppose you have two boxes: one contains 3 red balls and 2 blue balls, and the other contains 2 red balls and 4 blue balls. If you randomly pick a box, and then pick a ball, what is the probability that it’s red?
    2. If a robot has to go from point A to point D through B and C, and each step takes 3 minutes, what’s the total time if it takes an additional 5-minute delay at C?
    3. Explain step-by-step how you would decide whether a number is prime using reasoning, not code.
    
    **🔢 Mathematics and Calculation Test**
    1. What is 12 * (8 + 4) / 6?
    2. Find the sum of all even numbers between 1 and 20.
    3. If a car travels at 90 km/h for 2 hours and then at 60 km/h for 1.5 hours, what’s the average speed?
    
    **💻 Programming Logic Test**
    1. Write pseudocode for sorting a list of integers from smallest to largest.
    2. Describe how a binary search algorithm works in your own words.
    3. How would you detect a loop in a linked list?
    
    **🧩 Complex Instruction Following Test**
    1. Create a step-by-step plan for setting up a small website that displays “Hello, world!”
    2. Explain how to write and run a Python script on Linux.
    3. Summarize the main difference between supervised and unsupervised machine learning.
    
    **🧍‍♂️ Short-term Memory (Context Tracking) Test**
    1. Tell me the capital of France.
    2. Now tell me the capital of Italy.
    3. Finally, repeat both capitals in one sentence.
    
    **🧩 Analytical Response Test**
    1. Compare Llama-2 and Phi-2 models in terms of reasoning, resource usage, and suitability for agents.
    2. Explain why smaller models sometimes perform better on reasoning than larger ones with poor alignment.
    3. If AutoGPT runs on this model, what limitations might it face and how could we mitigate them?
    
    Would you like me to create a ready-made test file (like a short benchmark) so you can test it directly from the Space?
    For example, a button "Run AutoGPT readiness test 🔍" that sends all these questions sequentially and gives an approximate score?`
        }
    ]
};