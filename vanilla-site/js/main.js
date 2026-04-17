(() => {
  'use strict';

  const ASL_DATA = {
    alphabet: [
      { letter: 'A', image: '/images/asl/letter-a.jpg', description: 'Make a fist with your thumb resting on the side of your index finger.' },
      { letter: 'B', image: '/images/asl/letter-b.jpg', description: 'Hold your palm flat with fingers extended upward and thumb tucked across your palm.' },
      { letter: 'C', image: '/images/asl/letter-c.jpg', description: "Curve your hand to form a C shape, like you're holding a cup." },
      { letter: 'D', image: '/images/asl/letter-d.jpg', description: 'Point your index finger up while touching your thumb to your other fingers forming a circle.' },
      { letter: 'E', image: '/images/asl/letter-e.jpg', description: 'Curl your fingers with your thumb tucked under your fingertips.' },
      { letter: 'F', image: '/images/asl/letter-f.jpg', description: 'Touch your thumb and index finger to form a circle, extend your other three fingers.' },
      { letter: 'G', image: '/images/asl/letter-g.jpg', description: 'Point your index finger and thumb sideways, parallel to each other.' },
      { letter: 'H', image: '/images/asl/letter-h.jpg', description: 'Extend your index and middle finger horizontally, side by side.' },
      { letter: 'I', image: '/images/asl/letter-i.jpg', description: 'Make a fist with your pinky finger extended upward.' },
      { letter: 'J', image: '/images/asl/letter-j.jpg', description: 'Start with I hand shape and draw a J in the air with your pinky.' },
      { letter: 'K', image: '/images/asl/letter-k.jpg', description: 'Extend index and middle finger in a V, place thumb between them.' },
      { letter: 'L', image: '/images/asl/letter-l.jpg', description: 'Form an L shape with your thumb extended sideways and index finger pointing up.' },
      { letter: 'M', image: '/images/asl/letter-m.jpg', description: 'Place three fingers over your thumb in a fist position.' },
      { letter: 'N', image: '/images/asl/letter-n.jpg', description: 'Place two fingers over your thumb in a fist position.' },
      { letter: 'O', image: '/images/asl/letter-o.jpg', description: 'Curve all fingers to touch your thumb, forming an O shape.' },
      { letter: 'P', image: '/images/asl/letter-p.jpg', description: 'Make a K hand shape and point it downward.' },
      { letter: 'Q', image: '/images/asl/letter-q.jpg', description: 'Make a G hand shape and point it downward.' },
      { letter: 'R', image: '/images/asl/letter-r.jpg', description: 'Cross your index and middle finger, keep other fingers in a fist.' },
      { letter: 'S', image: '/images/asl/letter-s.jpg', description: 'Make a fist with your thumb over your fingers.' },
      { letter: 'T', image: '/images/asl/letter-t.jpg', description: 'Make a fist with your thumb tucked between index and middle finger.' },
      { letter: 'U', image: '/images/asl/letter-u.jpg', description: 'Extend index and middle finger together pointing up.' },
      { letter: 'V', image: '/images/asl/letter-v.jpg', description: 'Extend index and middle finger apart in a V shape.' },
      { letter: 'W', image: '/images/asl/letter-w.jpg', description: 'Extend index, middle, and ring fingers spread apart.' },
      { letter: 'X', image: '/images/asl/letter-x.jpg', description: 'Hook your index finger with other fingers in a fist.' },
      { letter: 'Y', image: '/images/asl/letter-y.jpg', description: 'Extend your pinky and thumb, curl other fingers.' },
      { letter: 'Z', image: '/images/asl/letter-z.jpg', description: 'Draw a Z in the air with your index finger.' },
    ],
    phrases: [
      { word: 'Hello', image: '/images/asl/phrase-hello.jpg', description: 'Start with a flat hand at your forehead (like a salute) and move it outward in a wave motion.', category: 'Greetings' },
      { word: 'Thank You', image: '/images/asl/phrase-thankyou.jpg', description: 'Touch your chin with the fingertips of a flat hand, then move your hand forward and down.', category: 'Greetings' },
      { word: 'Please', image: '/images/asl/phrase-please.jpg', description: 'Place your flat hand on your chest and move it in a circular motion.', category: 'Greetings' },
      { word: 'Sorry', image: '/images/asl/phrase-sorry.jpg', description: 'Make a fist with your hand (A handshape) and rub it in a circular motion on your chest.', category: 'Emotions' },
      { word: 'Yes', image: '/images/asl/phrase-yes.jpg', description: 'Make a fist and nod it up and down, like a head nodding yes.', category: 'Basic' },
      { word: 'No', image: '/images/asl/phrase-no.jpg', description: 'Extend your index and middle finger and thumb, then snap them together quickly.', category: 'Basic' },
      { word: 'Help', image: '/images/asl/phrase-help.jpg', description: 'Make a thumbs up with one hand, place it on your flat palm, and lift both hands up.', category: 'Emergency' },
      { word: 'I Love You', image: '/images/asl/phrase-love.jpg', description: 'Extend your thumb, index finger, and pinky while keeping your middle and ring fingers down.', category: 'Emotions' },
      { word: 'Food/Eat', image: '/images/asl/phrase-food.jpg', description: 'Bunch your fingers and thumb together and move them toward your mouth repeatedly.', category: 'Daily Life' },
      { word: 'Water', image: '/images/asl/phrase-water.jpg', description: 'Make a W hand shape and tap your index finger on your chin twice.', category: 'Daily Life' },
      { word: 'Friend', image: '/images/asl/phrase-friend.jpg', description: 'Hook your index fingers together, then reverse their positions.', category: 'People' },
    ],
    categories: [
      { name: 'Greetings', icon: '\uD83D\uDC4B', description: 'Common greetings and polite expressions' },
      { name: 'Basic', icon: '\u2713', description: 'Essential yes/no responses' },
      { name: 'Emotions', icon: '\u2764\uFE0F', description: 'Express your feelings' },
      { name: 'Emergency', icon: '\uD83D\uDEE8', description: 'Important emergency signs' },
      { name: 'Daily Life', icon: '\uD83C\uDFE0', description: 'Everyday needs and activities' },
      { name: 'People', icon: '\uD83D\uDC65', description: 'Family, friends, and relationships' },
    ],
  };

  const CARD_BASE = 'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm';
  const CARD_CONTENT_BASE = 'px-6';
  const BUTTON_BASE =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive";

  const BUTTON_VARIANT_OUTLINE =
    'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50';
  const BUTTON_SIZE_DEFAULT = 'h-9 px-4 py-2 has-[>svg]:px-3';
  const BUTTON_OUTLINE_DEFAULT_CLASS = `${BUTTON_BASE} ${BUTTON_VARIANT_OUTLINE} ${BUTTON_SIZE_DEFAULT}`;

  const BADGE_BASE =
    "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden";

  const DIALOG_OVERLAY_CLASS =
    'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50';
  const DIALOG_CONTENT_CLASS =
    'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg';
  const DIALOG_CLOSE_BUTTON_CLASS =
    "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4";

  function $(sel, root = document) {
    return root.querySelector(sel);
  }

  function $all(sel, root = document) {
    return Array.from(root.querySelectorAll(sel));
  }

  function createEl(tag, className, attrs = {}) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    for (const [k, v] of Object.entries(attrs)) {
      if (k === 'text') el.textContent = v;
      else if (k.startsWith('data-')) el.setAttribute(k, v);
      else if (k === 'html') el.innerHTML = v;
      else if (k === 'for') el.setAttribute('for', v);
      else el.setAttribute(k, v);
    }
    return el;
  }

  function lucideInit() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  function initHeader() {
    const header = $('#site-header');
    if (!header) return;

    const pageKey = document.body.dataset.page || '';

    const desktopLinks = $all('a[data-route]', header);
    desktopLinks.forEach((a) => {
      const route = a.getAttribute('data-route');
      if (route === pageKey) {
        a.classList.add('bg-primary', 'text-primary-foreground');
        a.classList.remove('text-muted-foreground', 'hover:text-foreground', 'hover:bg-muted');
      } else {
        a.classList.remove('bg-primary', 'text-primary-foreground');
        a.classList.add('text-muted-foreground', 'hover:text-foreground', 'hover:bg-muted');
      }
    });

    const toggleBtn = $('#mobile-menu-toggle');
    const mobileMenu = $('#mobile-menu');
    if (toggleBtn && mobileMenu) {
      const iconMenu = $('#icon-menu', toggleBtn);
      const iconX = $('#icon-x', toggleBtn);
      let open = false;

      const setOpen = (next) => {
        open = next;
        mobileMenu.classList.toggle('hidden', !open);
        iconMenu && iconMenu.classList.toggle('hidden', open);
        iconX && iconX.classList.toggle('hidden', !open);
      };

      toggleBtn.addEventListener('click', () => setOpen(!open));

      $all('a[data-mobile-link]', mobileMenu).forEach((a) => {
        a.addEventListener('click', () => setOpen(false));
      });

      // Default closed
      setOpen(false);
    }
  }

  function renderDashboard() {
    const navGrid = $('#nav-cards');
    const featuresGrid = $('#features-grid');
    if (!navGrid || !featuresGrid) return;

    const navCards = [
      {
        href: 'alphabet.html',
        icon: 'BookOpen',
        title: 'ASL Alphabet',
        description: 'Learn all 26 letters with images and detailed hand position guides',
        color: 'bg-teal-500',
        count: '26 Letters',
      },
      {
        href: 'phrases.html',
        icon: 'MessageCircle',
        title: 'Common Phrases',
        description: 'Master essential everyday phrases organized by category',
        color: 'bg-coral-500',
        count: '11 Phrases',
      },
      {
        href: 'translator.html',
        icon: 'Languages',
        title: 'Text Translator',
        description: 'Convert any text into sign language visuals instantly',
        color: 'bg-emerald-500',
        count: 'Instant',
      },
      {
        href: 'categories.html',
        icon: 'Layers',
        title: 'Categories',
        description: 'Browse signs organized by topics like greetings, emotions, and more',
        color: 'bg-amber-500',
        count: '6 Topics',
      },
      {
        href: 'quiz.html',
        icon: 'Trophy',
        title: 'Take a Quiz',
        description: 'Test your knowledge with interactive quizzes and track your progress',
        color: 'bg-violet-500',
        count: 'Multiple Levels',
      },
    ];

    const features = [
      {
        icon: 'BookOpen',
        title: 'Complete Alphabet',
        description: 'Learn all 26 letters of the ASL alphabet with detailed images.',
      },
      {
        icon: 'HandMetal',
        title: 'Common Phrases',
        description: 'Master essential everyday phrases organized by category.',
      },
      { icon: 'Zap', title: 'Instant Translation', description: 'Type any word and see the corresponding sign language.' },
      { icon: 'Users', title: 'Community Focused', description: 'Built with input from the deaf and mute community.' },
      { icon: 'Target', title: 'Step-by-Step Guide', description: 'Clear instructions for each sign technique.' },
      { icon: 'Accessibility', title: 'Fully Accessible', description: 'Designed for learners of all abilities.' },
    ];

    navGrid.innerHTML = '';
    featuresGrid.innerHTML = '';

    navCards.forEach((card) => {
      const link = createEl('a', '', { href: card.href });

      const outerCard = createEl(
        'div',
        `${CARD_BASE} h-full border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden`,
      );
      const cardContent = createEl('div', `${CARD_CONTENT_BASE} p-6`);

      const iconBubble = createEl('div', `h-14 w-14 rounded-2xl ${card.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`);
      const icon = createEl('i', '', { 'data-lucide': card.icon, class: 'h-8 w-8' });
      iconBubble.appendChild(icon);

      const topRow = createEl('div', 'flex items-start justify-between mb-2');
      const title = createEl('h3', 'text-xl font-semibold text-foreground group-hover:text-primary transition-colors', { text: card.title });
      const count = createEl('span', 'text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full', { text: card.count });
      topRow.appendChild(title);
      topRow.appendChild(count);

      const desc = createEl('p', 'text-muted-foreground mb-4', { text: card.description });

      const bottom = createEl('div', 'flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all');
      bottom.appendChild(document.createTextNode('Get Started '));
      const arrow = createEl('i', '', { 'data-lucide': 'ArrowRight', class: 'h-4 w-4 ml-1' });
      bottom.appendChild(arrow);

      cardContent.appendChild(iconBubble);
      cardContent.appendChild(topRow);
      cardContent.appendChild(desc);
      cardContent.appendChild(bottom);
      outerCard.appendChild(cardContent);
      link.appendChild(outerCard);
      navGrid.appendChild(link);
    });

    features.forEach((feature) => {
      const card = createEl('div', `${CARD_BASE} border-0 bg-card hover:shadow-lg transition-all duration-200 group`);
      // Note: React uses CardContent only and relies on its own hover styles.
      const cardContent = createEl('div', `px-6 p-6`);

      const iconBubble = createEl(
        'div',
        'h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors',
      );
      const icon = createEl('i', '', { 'data-lucide': feature.icon, class: 'h-7 w-7' });
      iconBubble.appendChild(icon);

      const title = createEl('h3', 'text-lg font-semibold text-foreground mb-2', { text: feature.title });
      const desc = createEl('p', 'text-muted-foreground text-sm leading-relaxed', { text: feature.description });

      cardContent.appendChild(iconBubble);
      cardContent.appendChild(title);
      cardContent.appendChild(desc);

      card.appendChild(cardContent);
      featuresGrid.appendChild(card);
    });

    lucideInit();
  }

  // Minimal routing: render the page based on `body[data-page]`.
  function initPage() {
    const page = document.body.dataset.page;
    if (!page) return;

    switch (page) {
      case 'dashboard':
        renderDashboard();
        break;
      case 'alphabet':
        initLetterDialog();
        renderAlphabet();
        break;
      case 'quiz':
        initQuiz();
        break;
      case 'phrases':
        initPhrases();
        break;
      case 'categories':
        initCategories();
        break;
      case 'translator':
        initTranslator();
        break;
      default:
        break;
    }
  }

  function initFooterYear() {
    const el = $('#footer-year');
    if (el) el.textContent = String(new Date().getFullYear());
  }

  const letterDialog = {
    overlayEl: null,
    contentEl: null,
    titleEl: null,
    bodyEl: null,
    selectedIndex: 0,
    selectedLetter: null,
  };

  function initLetterDialog() {
    letterDialog.overlayEl = $('#letter-dialog-overlay');
    letterDialog.contentEl = $('#letter-dialog-content');
    letterDialog.titleEl = $('#letter-dialog-title');
    letterDialog.bodyEl = $('#letter-dialog-body');
    const closeBtn = $('#letter-dialog-close-btn');

    if (!letterDialog.overlayEl || !letterDialog.contentEl || !letterDialog.titleEl || !letterDialog.bodyEl) return;

    const close = () => closeLetterDialog();
    letterDialog.overlayEl.addEventListener('click', close);
    closeBtn && closeBtn.addEventListener('click', close);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !letterDialog.contentEl.hidden) close();
    });
  }

  function openLetterDialog(letter, index) {
    if (!letterDialog.overlayEl || !letterDialog.contentEl) return;

    letterDialog.selectedLetter = letter;
    letterDialog.selectedIndex = index;
    updateLetterDialogBody();

    letterDialog.overlayEl.hidden = false;
    letterDialog.contentEl.hidden = false;
    letterDialog.overlayEl.dataset.state = 'open';
    letterDialog.contentEl.dataset.state = 'open';
    document.body.style.overflow = 'hidden';
    lucideInit();
  }

  function closeLetterDialog() {
    if (!letterDialog.overlayEl || !letterDialog.contentEl) return;

    letterDialog.overlayEl.dataset.state = 'closed';
    letterDialog.contentEl.dataset.state = 'closed';
    document.body.style.overflow = '';

    // Wait for the Tailwind data-[state=closed]:... animations to finish.
    window.setTimeout(() => {
      if (!letterDialog.overlayEl || !letterDialog.contentEl) return;
      letterDialog.overlayEl.hidden = true;
      letterDialog.contentEl.hidden = true;
    }, 200);
  }

  function updateLetterDialogBody() {
    const { selectedLetter, selectedIndex } = letterDialog;
    if (!selectedLetter) return;

    letterDialog.titleEl.textContent = `Letter ${selectedLetter.letter}`;

    const goToPrevious = () => {
      const newIndex = selectedIndex > 0 ? selectedIndex - 1 : ASL_DATA.alphabet.length - 1;
      openLetterDialog(ASL_DATA.alphabet[newIndex], newIndex);
    };
    const goToNext = () => {
      const newIndex = selectedIndex < ASL_DATA.alphabet.length - 1 ? selectedIndex + 1 : 0;
      openLetterDialog(ASL_DATA.alphabet[newIndex], newIndex);
    };

    const prevBtnId = 'letter-prev-btn';
    const nextBtnId = 'letter-next-btn';

    letterDialog.bodyEl.innerHTML = `
      <div class="space-y-4">
        <div class="relative aspect-square w-full max-w-sm mx-auto rounded-xl overflow-hidden bg-muted">
          <img
            src="${selectedLetter.image}"
            alt="ASL sign for letter ${selectedLetter.letter}"
            class="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div class="bg-secondary rounded-lg p-4">
          <h4 class="font-semibold text-foreground mb-2">How to Sign:</h4>
          <p class="text-muted-foreground leading-relaxed">${selectedLetter.description}</p>
        </div>
        <div class="flex items-center justify-between pt-2">
          <button id="${prevBtnId}" type="button" class="${BUTTON_OUTLINE_DEFAULT_CLASS}">
            <i data-lucide="ChevronLeft" class="h-4 w-4 mr-1"></i>
            Previous
          </button>
          <span class="text-sm text-muted-foreground">${selectedIndex + 1} of ${ASL_DATA.alphabet.length}</span>
          <button id="${nextBtnId}" type="button" class="${BUTTON_OUTLINE_DEFAULT_CLASS}">
            Next
            <i data-lucide="ChevronRight" class="h-4 w-4 ml-1"></i>
          </button>
        </div>
      </div>
    `;

    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);
    if (prevBtn) prevBtn.addEventListener('click', goToPrevious);
    if (nextBtn) nextBtn.addEventListener('click', goToNext);

    // Create SVGs for the chevrons after injecting.
    lucideInit();
  }

  function renderAlphabet() {
    const grid = $('#alphabet-grid');
    if (!grid) return;
    grid.innerHTML = '';

    ASL_DATA.alphabet.forEach((item, index) => {
      const card = createEl(
        'div',
        `${CARD_BASE} cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-200 border-2 hover:border-primary/50`,
      );

      const content = createEl('div', `${CARD_CONTENT_BASE} p-3 flex flex-col items-center`);

      const imgWrap = createEl('div', 'relative w-full aspect-square mb-2 rounded-lg overflow-hidden bg-muted');
      const img = createEl('img', 'absolute inset-0 h-full w-full object-cover', {
        src: item.image,
        alt: `ASL sign for letter ${item.letter}`,
      });
      imgWrap.appendChild(img);

      const letterSpan = createEl('span', 'text-2xl font-bold text-foreground', { text: item.letter });

      content.appendChild(imgWrap);
      content.appendChild(letterSpan);
      card.appendChild(content);

      card.addEventListener('click', () => openLetterDialog(item, index));
      grid.appendChild(card);
    });
  }

  // ---- Quiz (vanilla replacement for app/quiz/page.tsx) ----
  const quizState = {
    quizType: null, // "alphabet" | "phrases" | "mixed"
    state: 'selecting', // selecting | playing | finished
    questions: [],
    currentQuestionIndex: 0,
    selectedAnswer: null,
    isAnswered: false,
    score: 0,
    answers: [], // { question, userAnswer, correct }
  };

  function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  function generateQuestions(type, count = 10) {
    const questions = [];

    if (type === 'alphabet' || type === 'mixed') {
      const shuffledAlphabet = shuffleArray(ASL_DATA.alphabet);
      const alphabetCount = type === 'mixed' ? Math.ceil(count / 2) : count;

      for (let i = 0; i < Math.min(alphabetCount, shuffledAlphabet.length); i++) {
        const correct = shuffledAlphabet[i];
        const wrongOptions = shuffleArray(ASL_DATA.alphabet.filter((l) => l.letter !== correct.letter)).slice(0, 3);
        questions.push({
          type: 'alphabet',
          image: correct.image,
          correctAnswer: correct.letter,
          options: shuffleArray([correct.letter, ...wrongOptions.map((o) => o.letter)]),
          description: correct.description,
        });
      }
    }

    if (type === 'phrases' || type === 'mixed') {
      const shuffledPhrases = shuffleArray(ASL_DATA.phrases);
      const phraseCount = type === 'mixed' ? Math.floor(count / 2) : count;

      for (let i = 0; i < Math.min(phraseCount, shuffledPhrases.length); i++) {
        const correct = shuffledPhrases[i];
        const wrongOptions = shuffleArray(ASL_DATA.phrases.filter((p) => p.word !== correct.word)).slice(0, 3);
        questions.push({
          type: 'phrase',
          image: correct.image,
          correctAnswer: correct.word,
          options: shuffleArray([correct.word, ...wrongOptions.map((o) => o.word)]),
          description: correct.description,
        });
      }
    }

    return shuffleArray(questions).slice(0, count);
  }

  const BADGE_SECONDARY_CLASS = `${BADGE_BASE} border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90`;
  const BADGE_OUTLINE_CLASS = `${BADGE_BASE} text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground`;

  function initQuiz() {
    const appEl = $('#quiz-app');
    if (!appEl) return;

    // Reset state when entering quiz page.
    quizState.quizType = null;
    quizState.state = 'selecting';
    quizState.questions = [];
    quizState.currentQuestionIndex = 0;
    quizState.selectedAnswer = null;
    quizState.isAnswered = false;
    quizState.score = 0;
    quizState.answers = [];

    renderQuiz(appEl);
  }

  function renderQuiz(appEl) {
    if (quizState.state === 'selecting') return renderQuizSelection(appEl);
    if (quizState.state === 'playing') return renderQuizQuestion(appEl);
    return renderQuizResults(appEl);
  }

  function startQuiz(type) {
    quizState.quizType = type;
    quizState.questions = generateQuestions(type, 10);
    quizState.currentQuestionIndex = 0;
    quizState.selectedAnswer = null;
    quizState.isAnswered = false;
    quizState.score = 0;
    quizState.answers = [];
    quizState.state = 'playing';

    const appEl = $('#quiz-app');
    if (!appEl) return;
    renderQuiz(appEl);
  }

  function handleAnswer(answer) {
    if (quizState.isAnswered) return;

    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    const isCorrect = answer === currentQuestion.correctAnswer;

    quizState.selectedAnswer = answer;
    quizState.isAnswered = true;

    if (isCorrect) quizState.score += 1;

    quizState.answers.push({
      question: currentQuestion,
      userAnswer: answer,
      correct: isCorrect,
    });

    const appEl = $('#quiz-app');
    if (!appEl) return;
    renderQuiz(appEl);
  }

  function nextQuestion() {
    const total = quizState.questions.length;
    if (quizState.currentQuestionIndex < total - 1) {
      quizState.currentQuestionIndex += 1;
      quizState.selectedAnswer = null;
      quizState.isAnswered = false;
      const appEl = $('#quiz-app');
      if (appEl) renderQuiz(appEl);
    } else {
      quizState.state = 'finished';
      const appEl = $('#quiz-app');
      if (appEl) renderQuiz(appEl);
    }
  }

  function restartQuiz() {
    if (quizState.quizType) startQuiz(quizState.quizType);
  }

  function backToSelection() {
    quizState.state = 'selecting';
    quizState.quizType = null;
    quizState.questions = [];
    quizState.currentQuestionIndex = 0;
    quizState.selectedAnswer = null;
    quizState.isAnswered = false;
    quizState.score = 0;
    quizState.answers = [];

    const appEl = $('#quiz-app');
    if (appEl) renderQuiz(appEl);
  }

  function renderQuizSelection(appEl) {
    const quizTypes = [
      {
        type: 'alphabet',
        icon: 'BookOpen',
        title: 'Alphabet Quiz',
        description: 'Test your knowledge of the ASL alphabet. Identify letters from hand signs.',
        color: 'bg-teal-500',
        questions: '10 questions',
      },
      {
        type: 'phrases',
        icon: 'MessageCircle',
        title: 'Phrases Quiz',
        description: 'Identify common phrases and expressions from their signs.',
        color: 'bg-coral-500',
        questions: '10 questions',
      },
      {
        type: 'mixed',
        icon: 'Shuffle',
        title: 'Mixed Quiz',
        description: 'A combination of both alphabet letters and common phrases.',
        color: 'bg-violet-500',
        questions: '10 questions',
      },
    ];

    appEl.innerHTML = `
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-10">
          <h2 class="text-2xl font-bold text-foreground mb-3">Choose Your Quiz</h2>
          <p class="text-muted-foreground">Select a quiz type to begin testing your sign language knowledge</p>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          ${quizTypes
            .map(
              (quiz) => `
            <div
              role="button"
              tabindex="0"
              data-quiz-type="${quiz.type}"
              class="${CARD_BASE} cursor-pointer hover:shadow-lg transition-all duration-200 border-2 hover:border-primary/50 group"
            >
              <div class="px-6 p-6 text-center">
                <div class="h-16 w-16 rounded-2xl ${quiz.color} flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <i data-lucide="${quiz.icon}" class="h-8 w-8"></i>
                </div>
                <h3 class="text-xl font-semibold text-foreground mb-2">${quiz.title}</h3>
                <p class="text-muted-foreground text-sm mb-4">${quiz.description}</p>
                <span class="${BADGE_SECONDARY_CLASS}">${quiz.questions}</span>
              </div>
            </div>
          `,
            )
            .join('')}
        </div>

        <div class="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div class="flex flex-col items-center">
            <div class="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
              <i data-lucide="Target" class="h-6 w-6"></i>
            </div>
            <h4 class="font-semibold text-foreground">Multiple Choice</h4>
            <p class="text-sm text-muted-foreground">4 options per question</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
              <i data-lucide="Clock" class="h-6 w-6"></i>
            </div>
            <h4 class="font-semibold text-foreground">No Time Limit</h4>
            <p class="text-sm text-muted-foreground">Take your time to learn</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
              <i data-lucide="Sparkles" class="h-6 w-6"></i>
            </div>
            <h4 class="font-semibold text-foreground">Instant Feedback</h4>
            <p class="text-sm text-muted-foreground">Learn from your answers</p>
          </div>
        </div>
      </div>
    `;

    lucideInit();

    $all('[data-quiz-type]').forEach((el) => {
      el.addEventListener('click', () => startQuiz(el.getAttribute('data-quiz-type')));
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') startQuiz(el.getAttribute('data-quiz-type'));
      });
    });
  }

  function renderQuizQuestion(appEl) {
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    const totalQuestions = quizState.questions.length;
    const progress = totalQuestions > 0 ? ((quizState.currentQuestionIndex + 1) / totalQuestions) * 100 : 0;
    const questionNumber = quizState.currentQuestionIndex + 1;
    const selectedAnswer = quizState.selectedAnswer;
    const isAnswered = quizState.isAnswered;
    const isCorrectSelected = selectedAnswer === currentQuestion.correctAnswer;

    appEl.innerHTML = `
      <div class="max-w-2xl mx-auto">
        <div class="mb-8">
          <div class="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Question ${questionNumber} of ${totalQuestions}</span>
            <span>${Math.round(progress)}% Complete</span>
          </div>

          <div class="bg-primary/20 relative h-2 w-full overflow-hidden rounded-full">
            <div class="bg-primary h-full w-full flex-1 transition-all" style="transform: translateX(-${100 - progress}%)"></div>
          </div>
        </div>

        <div class="${CARD_BASE} border-2">
          <div class="flex flex-col gap-2 text-center">
            <div class="flex items-center justify-center">
              <span class="${BADGE_OUTLINE_CLASS} w-fit mx-auto mb-2">${currentQuestion.type === 'alphabet' ? 'Letter' : 'Phrase'}</span>
            </div>
            <div class="px-6 text-xl font-semibold leading-none">What sign is this?</div>
          </div>

          <div class="${CARD_CONTENT_BASE} space-y-6">
            <div class="relative aspect-square max-w-xs mx-auto rounded-xl overflow-hidden bg-muted">
              <img src="${currentQuestion.image}" alt="Sign to identify" class="absolute inset-0 h-full w-full object-cover" />
            </div>

            <div class="grid grid-cols-2 gap-3">
              ${currentQuestion.options
                .map((option) => {
                  const isSelected = selectedAnswer === option;
                  const isCorrectOption = option === currentQuestion.correctAnswer;
                  let buttonClass = 'h-auto py-4 text-lg font-medium border-2 transition-all ';

                  if (isAnswered) {
                    if (isCorrectOption) {
                      buttonClass += 'border-green-500 bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300';
                    } else if (isSelected && !isCorrectOption) {
                      buttonClass += 'border-red-500 bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300';
                    } else {
                      buttonClass += 'border-muted opacity-50';
                    }
                  } else {
                    buttonClass += 'hover:border-primary hover:bg-primary/5';
                  }

                  const iconHtml = isAnswered
                    ? isCorrectOption
                      ? '<i data-lucide="CheckCircle2" class="h-5 w-5 mr-2 text-green-500"></i>'
                      : isSelected && !isCorrectOption
                        ? '<i data-lucide="XCircle" class="h-5 w-5 mr-2 text-red-500"></i>'
                        : ''
                    : '';

                  return `<button type="button" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm shrink-0 ${buttonClass}" data-answer-option="${option}" ${isAnswered ? 'disabled' : ''}>
                    ${iconHtml}${option}
                  </button>`;
                })
                .join('')}
            </div>

            ${
              isAnswered
                ? `
              <div class="p-4 rounded-lg ${isCorrectSelected ? 'bg-green-50 dark:bg-green-950' : 'bg-amber-50 dark:bg-amber-950'}">
                <div class="flex items-center gap-2 mb-2">
                  ${
                    isCorrectSelected
                      ? '<i data-lucide="CheckCircle2" class="h-5 w-5 text-green-500"></i><span class="font-semibold text-green-700 dark:text-green-300">Correct!</span>'
                      : '<i data-lucide="XCircle" class="h-5 w-5 text-amber-500"></i><span class="font-semibold text-amber-700 dark:text-amber-300">The correct answer is: ' +
                        currentQuestion.correctAnswer +
                        '</span>'
                  }
                </div>
                <p class="text-sm text-muted-foreground">${currentQuestion.description}</p>
              </div>
            `
                : ''
            }

            ${
              isAnswered
                ? `
              <button
                type="button"
                class="${BUTTON_BASE} bg-primary text-primary-foreground hover:bg-primary/90 h-10 rounded-md px-6 has-[>svg]:px-4 w-full flex items-center justify-center gap-2"
                data-next="true"
              >
                ${questionNumber === totalQuestions ? 'See Results' : 'Next Question'}
              </button>
            `
                : ''
            }
          </div>
        </div>
      </div>
    `;

    lucideInit();

    $all('[data-answer-option]').forEach((btn) => {
      btn.addEventListener('click', () => handleAnswer(btn.getAttribute('data-answer-option')));
    });

    const nextBtn = $('[data-next="true"]');
    if (nextBtn) nextBtn.addEventListener('click', nextQuestion);
  }

  function renderQuizResults(appEl) {
    const score = quizState.score;
    const totalQuestions = quizState.questions.length;
    const scorePercentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

    const getMessage = () => {
      if (scorePercentage >= 90) return { text: 'Outstanding!', emoji: 'Excellent work!' };
      if (scorePercentage >= 70) return { text: 'Great Job!', emoji: 'Keep it up!' };
      if (scorePercentage >= 50) return { text: 'Good Effort!', emoji: 'Practice more!' };
      return { text: 'Keep Learning!', emoji: "You'll improve!" };
    };
    const message = getMessage();

    appEl.innerHTML = `
      <div class="max-w-2xl mx-auto">
        <div class="${CARD_BASE} border-2 mb-8">
          <div class="px-6 p-8 text-center">
            <div class="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <i data-lucide="Trophy" class="h-10 w-10 text-primary"></i>
            </div>
            <h2 class="text-3xl font-bold text-foreground mb-2">${message.text}</h2>
            <p class="text-muted-foreground mb-6">${message.emoji}</p>

            <div class="flex items-center justify-center gap-8 mb-6">
              <div>
                <div class="text-4xl font-bold text-primary">${score}/${totalQuestions}</div>
                <div class="text-sm text-muted-foreground">Correct Answers</div>
              </div>
              <div class="h-16 w-px bg-border"></div>
              <div>
                <div class="text-4xl font-bold text-primary">${scorePercentage}%</div>
                <div class="text-sm text-muted-foreground">Score</div>
              </div>
            </div>

            <div class="flex gap-3 justify-center">
              <button
                type="button"
                class="${BUTTON_BASE} bg-primary text-primary-foreground hover:bg-primary/90 h-10 rounded-md px-6 has-[>svg]:px-4"
                data-restart="true"
              >
                <i data-lucide="RotateCcw" class="h-4 w-4 mr-2"></i>
                Try Again
              </button>
              <button
                type="button"
                class="${BUTTON_BASE} border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6 has-[>svg]:px-4"
                data-back-selection="true"
              >
                Different Quiz
              </button>
            </div>
          </div>
        </div>

        <div class="${CARD_BASE}">
          <div class="px-6 py-6">
            <h3 class="text-lg leading-none font-semibold">Review Your Answers</h3>
            <p class="text-muted-foreground text-sm mt-2">See which questions you got right and wrong</p>
          </div>
          <div class="${CARD_CONTENT_BASE}">
            <div class="space-y-3">
              ${quizState.answers
                .map((answer) => {
                  const bgClass = answer.correct ? 'bg-green-50 dark:bg-green-950/30' : 'bg-red-50 dark:bg-red-950/30';
                  const icon = answer.correct
                    ? '<i data-lucide="CheckCircle2" class="h-4 w-4 text-green-500 flex-shrink-0"></i>'
                    : '<i data-lucide="XCircle" class="h-4 w-4 text-red-500 flex-shrink-0"></i>';
                  const reviewType = answer.question.type === 'alphabet' ? 'Letter' : 'Phrase';
                  return `
                    <div class="flex items-center gap-4 p-3 rounded-lg ${bgClass}">
                      <div class="relative h-12 w-12 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                        <img src="${answer.question.image}" alt="Sign" class="absolute inset-0 h-full w-full object-cover" />
                      </div>
                      <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2">
                          ${icon}
                          <span class="font-medium text-foreground">${answer.question.correctAnswer}</span>
                        </div>
                        ${
                          !answer.correct
                            ? `<p class="text-sm text-muted-foreground">You answered: ${answer.userAnswer}</p>`
                            : ''
                        }
                      </div>
                      <span class="${BADGE_OUTLINE_CLASS} flex-shrink-0">${reviewType}</span>
                    </div>
                  `;
                })
                .join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    lucideInit();

    const restartBtn = $('[data-restart="true"]');
    restartBtn && restartBtn.addEventListener('click', restartQuiz);
    const backBtn = $('[data-back-selection="true"]');
    backBtn && backBtn.addEventListener('click', backToSelection);
  }

  // ---- Phrases (vanilla replacement for app/phrases/page.tsx) ----
  const phrasesPageState = {
    activeCategory: 'all',
    phraseDialog: {
      overlayEl: null,
      contentEl: null,
      closeBtnEl: null,
      titleEl: null,
      categoryEl: null,
      bodyEl: null,
    },
  };

  function initPhrases() {
    const countEl = $('#phrases-count');
    if (countEl) countEl.textContent = `${ASL_DATA.phrases.length} Essential Signs`;

    initPhraseDialog();
    renderPhrasesTabs();
    renderPhrasesGrid();
  }

  function initPhraseDialog() {
    phrasesPageState.phraseDialog.overlayEl = $('#phrase-dialog-overlay');
    phrasesPageState.phraseDialog.contentEl = $('#phrase-dialog-content');
    phrasesPageState.phraseDialog.closeBtnEl = $('#phrase-dialog-close-btn');
    phrasesPageState.phraseDialog.titleEl = $('#phrase-dialog-title');
    phrasesPageState.phraseDialog.categoryEl = $('#phrase-dialog-category');
    phrasesPageState.phraseDialog.bodyEl = $('#phrase-dialog-body');

    const { overlayEl, contentEl, closeBtnEl } = phrasesPageState.phraseDialog;
    if (!overlayEl || !contentEl || !closeBtnEl || !phrasesPageState.phraseDialog.titleEl || !phrasesPageState.phraseDialog.bodyEl) return;

    const close = () => closePhraseDialog();
    overlayEl.addEventListener('click', close);
    closeBtnEl.addEventListener('click', close);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && contentEl && !contentEl.hidden) close();
    });
  }

  function openPhraseDialog(phrase) {
    const d = phrasesPageState.phraseDialog;
    if (!d.overlayEl || !d.contentEl) return;

    d.titleEl.textContent = phrase.word;
    d.categoryEl.className = `${BADGE_BASE} border-transparent bg-secondary text-secondary-foreground`;
    d.categoryEl.textContent = phrase.category;

    d.bodyEl.innerHTML = `
      <div class="relative aspect-video w-full rounded-xl overflow-hidden bg-muted">
        <img src="${phrase.image}" alt="ASL sign for ${phrase.word}" class="absolute inset-0 h-full w-full object-cover" />
      </div>
      <div class="bg-secondary rounded-lg p-4">
        <h4 class="font-semibold text-foreground mb-2">How to Sign:</h4>
        <p class="text-muted-foreground leading-relaxed">${phrase.description}</p>
      </div>
    `;

    d.overlayEl.hidden = false;
    d.contentEl.hidden = false;
    d.overlayEl.dataset.state = 'open';
    d.contentEl.dataset.state = 'open';
    document.body.style.overflow = 'hidden';
    lucideInit();
  }

  function closePhraseDialog() {
    const d = phrasesPageState.phraseDialog;
    if (!d.overlayEl || !d.contentEl) return;

    d.overlayEl.dataset.state = 'closed';
    d.contentEl.dataset.state = 'closed';
    document.body.style.overflow = '';

    window.setTimeout(() => {
      if (!d.overlayEl || !d.contentEl) return;
      d.overlayEl.hidden = true;
      d.contentEl.hidden = true;
    }, 200);
  }

  function renderPhrasesTabs() {
    const tabsList = $('#phrases-tabs-list');
    if (!tabsList) return;
    tabsList.innerHTML = '';

    const baseTrigger =
      'data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm';

    const activeClass = 'data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2';

    const tabs = [{ value: 'all', label: 'All Phrases' }, ...ASL_DATA.categories.map((c) => ({ value: c.name, label: c.name }))];

    tabs.forEach((t) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.dataset.phraseTab = t.value;
      btn.dataset.state = phrasesPageState.activeCategory === t.value ? 'active' : 'inactive';
      btn.className = `${baseTrigger} ${activeClass} ${t.value === 'all' ? 'w-fit' : 'w-fit'}`;
      btn.textContent = t.label;
      btn.addEventListener('click', () => {
        phrasesPageState.activeCategory = t.value;
        renderPhrasesTabs();
        renderPhrasesGrid();
      });
      tabsList.appendChild(btn);
    });
  }

  function renderPhrasesGrid() {
    const grid = $('#phrases-grid');
    if (!grid) return;

    const visible =
      phrasesPageState.activeCategory === 'all'
        ? ASL_DATA.phrases
        : ASL_DATA.phrases.filter((p) => p.category === phrasesPageState.activeCategory);

    grid.innerHTML = visible
      .map((phrase) => {
        const badgeClass = `${BADGE_BASE} text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground border`;
        return `
          <div
            class="cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all duration-200 border-2 hover:border-primary/50 overflow-hidden"
            role="button"
            tabindex="0"
            data-phrase-card="${phrase.word}"
          >
            <div class="relative aspect-video w-full bg-muted">
              <img src="${phrase.image}" alt="ASL sign for ${phrase.word}" class="absolute inset-0 h-full w-full object-cover" />
            </div>
            <div class="p-4">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-lg font-semibold text-foreground">${phrase.word}</h3>
                <span class="${badgeClass} text-xs">${phrase.category}</span>
              </div>
              <p class="text-sm text-muted-foreground line-clamp-2">${phrase.description}</p>
            </div>
          </div>
        `;
      })
      .join('');

    $all('[data-phrase-card]').forEach((el) => {
      el.addEventListener('click', () => {
        const word = el.getAttribute('data-phrase-card');
        const phrase = ASL_DATA.phrases.find((p) => p.word === word);
        if (phrase) openPhraseDialog(phrase);
      });
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          const word = el.getAttribute('data-phrase-card');
          const phrase = ASL_DATA.phrases.find((p) => p.word === word);
          if (phrase) openPhraseDialog(phrase);
        }
      });
    });
    lucideInit();
  }

  // ---- Categories (vanilla replacement for app/categories/page.tsx) ----
  const categoriesPageState = {
    categoryDialog: {
      overlayEl: null,
      contentEl: null,
      closeBtnEl: null,
      titleEl: null,
      descriptionEl: null,
      bodyEl: null,
    },
    phraseDialog: {
      overlayEl: null,
      contentEl: null,
      closeBtnEl: null,
      titleEl: null,
      categoryEl: null,
      bodyEl: null,
    },
    selectedCategory: null,
  };

  const categoriesIconMap = {
    Greetings: 'MessageSquare',
    Basic: 'Layers',
    Emotions: 'Heart',
    Emergency: 'AlertTriangle',
    'Daily Life': 'Home',
    People: 'Users',
  };

  const categoriesColorMap = {
    Greetings: 'bg-teal-500',
    Basic: 'bg-blue-500',
    Emotions: 'bg-pink-500',
    Emergency: 'bg-red-500',
    'Daily Life': 'bg-amber-500',
    People: 'bg-violet-500',
  };

  function initCategories() {
    const countEl = $('#categories-count');
    if (countEl) countEl.textContent = `${ASL_DATA.categories.length} Topics to Explore`;

    initCategoriesDialogs();
    renderCategoriesGrid();
  }

  function initCategoriesDialogs() {
    categoriesPageState.categoryDialog.overlayEl = $('#category-dialog-overlay');
    categoriesPageState.categoryDialog.contentEl = $('#category-dialog-content');
    categoriesPageState.categoryDialog.closeBtnEl = $('#category-dialog-close-btn');
    categoriesPageState.categoryDialog.titleEl = $('#category-dialog-title');
    categoriesPageState.categoryDialog.descriptionEl = $('#category-dialog-description');
    categoriesPageState.categoryDialog.bodyEl = $('#category-dialog-body');

    categoriesPageState.phraseDialog.overlayEl = $('#category-phrase-dialog-overlay');
    categoriesPageState.phraseDialog.contentEl = $('#category-phrase-dialog-content');
    categoriesPageState.phraseDialog.closeBtnEl = $('#category-phrase-dialog-close-btn');
    categoriesPageState.phraseDialog.titleEl = $('#category-phrase-dialog-title');
    categoriesPageState.phraseDialog.categoryEl = $('#category-phrase-dialog-category');
    categoriesPageState.phraseDialog.bodyEl = $('#category-phrase-dialog-body');

    const cd = categoriesPageState.categoryDialog;
    const pd = categoriesPageState.phraseDialog;
    if (!cd.overlayEl || !cd.contentEl || !cd.closeBtnEl || !pd.overlayEl || !pd.contentEl || !pd.closeBtnEl) return;

    cd.overlayEl.addEventListener('click', closeCategoryDialog);
    cd.closeBtnEl.addEventListener('click', closeCategoryDialog);
    pd.overlayEl.addEventListener('click', closePhraseDialogCategories);
    pd.closeBtnEl.addEventListener('click', closePhraseDialogCategories);

    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      if (pd.contentEl && !pd.contentEl.hidden) closePhraseDialogCategories();
      else if (cd.contentEl && !cd.contentEl.hidden) closeCategoryDialog();
    });
  }

  function renderCategoriesGrid() {
    const grid = $('#categories-grid');
    if (!grid) return;

    const cats = ASL_DATA.categories;
    grid.innerHTML = cats
      .map((category) => {
        const icon = categoriesIconMap[category.name];
        const color = categoriesColorMap[category.name];
        const catPhrases = ASL_DATA.phrases.filter((p) => p.category === category.name);
        return `
          <div
            class="cursor-pointer hover:shadow-lg transition-all duration-200 border-2 hover:border-primary/50 group"
            role="button"
            tabindex="0"
            data-category-card="${category.name}"
          >
            <div class="p-6">
              <div class="flex items-center gap-4">
                <div class="h-14 w-14 rounded-xl ${color} flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <i data-lucide="${icon}" class="h-7 w-7"></i>
                </div>
                <div>
                  <div class="text-xl font-semibold text-foreground">${category.name}</div>
                  <span class="${BADGE_BASE} border-transparent bg-secondary text-secondary-foreground text-xs mt-1 w-fit whitespace-nowrap shrink-0">${catPhrases.length} signs</span>
                </div>
              </div>
              <p class="text-muted-foreground mb-4 mt-4">${category.description}</p>
              <div class="flex flex-wrap gap-2">
                ${catPhrases
                  .slice(0, 3)
                  .map((phrase) => `<span class="${BADGE_BASE} ${'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground'} border px-2 py-0.5 text-xs">${phrase.word}</span>`)
                  .join('')}
                ${catPhrases.length > 3 ? `<span class="${BADGE_BASE} border px-2 py-0.5 text-xs">+${catPhrases.length - 3} more</span>` : ''}
              </div>
              <div class="mt-4 flex items-center text-primary text-sm font-medium">
                View all signs <i data-lucide="ArrowRight" class="h-4 w-4 ml-1"></i>
              </div>
            </div>
          </div>
        `;
      })
      .join('');

    $all('[data-category-card]').forEach((el) => {
      el.addEventListener('click', () => openCategoryDialog(el.getAttribute('data-category-card')));
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') openCategoryDialog(el.getAttribute('data-category-card'));
      });
    });
    lucideInit();
  }

  function openCategoryDialog(categoryName) {
    categoriesPageState.selectedCategory = categoryName;
    const cd = categoriesPageState.categoryDialog;
    if (!cd.overlayEl || !cd.contentEl) return;

    const category = ASL_DATA.categories.find((c) => c.name === categoryName);
    const catPhrases = ASL_DATA.phrases.filter((p) => p.category === categoryName);

    const icon = categoriesIconMap[categoryName];
    const color = categoriesColorMap[categoryName];

    cd.titleEl.innerHTML = `
      <div class="h-10 w-10 rounded-lg ${color} flex items-center justify-center text-white">
        <i data-lucide="${icon}" class="h-6 w-6"></i>
      </div>
      ${categoryName}
    `;
    cd.descriptionEl.textContent = `${catPhrases.length} signs in this category`;

    cd.bodyEl.innerHTML = catPhrases
      .map(
        (phrase) => `
        <div
          class="cursor-pointer hover:shadow-md transition-shadow border hover:border-primary/50"
          role="button"
          tabindex="0"
          data-category-phrase="${phrase.word}"
        >
          <div class="p-4 flex items-center gap-4">
            <div class="relative h-16 w-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
              <img src="${phrase.image}" alt="ASL sign for ${phrase.word}" class="absolute inset-0 h-full w-full object-cover" />
            </div>
            <div>
              <div class="font-semibold text-foreground">${phrase.word}</div>
              <p class="text-sm text-muted-foreground line-clamp-2">${phrase.description}</p>
            </div>
          </div>
        </div>
      `,
      )
      .join('');

    cd.overlayEl.hidden = false;
    cd.contentEl.hidden = false;
    cd.overlayEl.dataset.state = 'open';
    cd.contentEl.dataset.state = 'open';
    document.body.style.overflow = 'hidden';

    $all('[data-category-phrase]').forEach((el) => {
      el.addEventListener('click', () => {
        const word = el.getAttribute('data-category-phrase');
        const phrase = ASL_DATA.phrases.find((p) => p.word === word);
        if (phrase) openPhraseDialogCategories(phrase);
      });
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          const word = el.getAttribute('data-category-phrase');
          const phrase = ASL_DATA.phrases.find((p) => p.word === word);
          if (phrase) openPhraseDialogCategories(phrase);
        }
      });
    });

    lucideInit();
  }

  function closeCategoryDialog() {
    const cd = categoriesPageState.categoryDialog;
    if (!cd.overlayEl || !cd.contentEl) return;

    cd.overlayEl.dataset.state = 'closed';
    cd.contentEl.dataset.state = 'closed';
    const keepHidden =
      categoriesPageState.phraseDialog.contentEl && !categoriesPageState.phraseDialog.contentEl.hidden;
    document.body.style.overflow = keepHidden ? 'hidden' : '';
    window.setTimeout(() => {
      if (!cd.overlayEl || !cd.contentEl) return;
      cd.overlayEl.hidden = true;
      cd.contentEl.hidden = true;
    }, 200);
  }

  function openPhraseDialogCategories(phrase) {
    const pd = categoriesPageState.phraseDialog;
    if (!pd.overlayEl || !pd.contentEl) return;

    pd.titleEl.textContent = phrase.word;
    pd.categoryEl.className = `${BADGE_BASE} border-transparent bg-secondary text-secondary-foreground`;
    pd.categoryEl.textContent = phrase.category;

    pd.bodyEl.innerHTML = `
      <div class="relative aspect-video w-full rounded-xl overflow-hidden bg-muted">
        <img src="${phrase.image}" alt="ASL sign for ${phrase.word}" class="absolute inset-0 h-full w-full object-cover" />
      </div>
      <div class="bg-secondary rounded-lg p-4">
        <h4 class="font-semibold text-foreground mb-2">How to Sign:</h4>
        <p class="text-muted-foreground leading-relaxed">${phrase.description}</p>
      </div>
    `;

    pd.overlayEl.hidden = false;
    pd.contentEl.hidden = false;
    pd.overlayEl.dataset.state = 'open';
    pd.contentEl.dataset.state = 'open';
    document.body.style.overflow = 'hidden';
    lucideInit();
  }

  function closePhraseDialogCategories() {
    const pd = categoriesPageState.phraseDialog;
    if (!pd.overlayEl || !pd.contentEl) return;

    pd.overlayEl.dataset.state = 'closed';
    pd.contentEl.dataset.state = 'closed';
    const keepHidden =
      categoriesPageState.categoryDialog.contentEl && !categoriesPageState.categoryDialog.contentEl.hidden;
    document.body.style.overflow = keepHidden ? 'hidden' : '';

    window.setTimeout(() => {
      if (!pd.overlayEl || !pd.contentEl) return;
      pd.overlayEl.hidden = true;
      pd.contentEl.hidden = true;
    }, 200);
  }

  // ---- Translator (vanilla replacement for app/translator/page.tsx) ----
  function initTranslator() {
    const input = $('#translator-input');
    const suggestionsEl = $('#translator-suggestions');
    const translateBtn = $('#translator-translate-btn');
    const clearBtn = $('#translator-clear-btn');
    const emptyState = $('#translator-empty-state');
    const results = $('#translator-results');
    const signsContainer = $('#translator-signs-container');

    if (!input || !suggestionsEl || !translateBtn || !clearBtn || !emptyState || !results || !signsContainer) return;

    let translatedSigns = [];

    const exampleButtons = $all('button[data-example]');
    exampleButtons.forEach((b) => {
      b.addEventListener('click', () => {
        input.value = b.getAttribute('data-example') || '';
        updateSuggestions();
      });
    });

    function showSuggestions(list) {
      if (!input.value.trim() || list.length === 0) {
        suggestionsEl.classList.add('hidden');
        suggestionsEl.innerHTML = '';
        return;
      }

      suggestionsEl.classList.remove('hidden');
      suggestionsEl.innerHTML = list
        .map(
          (s) => `
        <button
          type="button"
          class="w-full px-4 py-2 text-left hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg"
          data-suggestion-word="${s.word}"
        >
          <span class="font-medium">${s.word}</span>
          <span class="text-muted-foreground text-sm ml-2">(${s.category})</span>
        </button>
      `,
        )
        .join('');

      $all('[data-suggestion-word]', suggestionsEl).forEach((btn) => {
        btn.addEventListener('click', () => {
          const word = btn.getAttribute('data-suggestion-word');
          input.value = word || '';
          suggestionsEl.classList.add('hidden');
          suggestionsEl.innerHTML = '';
        });
      });
    }

    function updateSuggestions() {
      const v = input.value;
      if (!v.trim()) return showSuggestions([]);
      const q = v.toLowerCase();
      const list = ASL_DATA.phrases
        .filter((p) => p.word.toLowerCase().includes(q))
        .slice(0, 5);
      showSuggestions(list);
    }

    input.addEventListener('input', updateSuggestions);

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') translate();
    });

    clearBtn.addEventListener('click', () => {
      input.value = '';
      translatedSigns = [];
      suggestionsEl.classList.add('hidden');
      suggestionsEl.innerHTML = '';
      results.classList.add('hidden');
      emptyState.classList.remove('hidden');
      clearBtn.classList.add('hidden');
      signsContainer.innerHTML = '';
    });

    translateBtn.addEventListener('click', translate);

    function translate() {
      const text = input.value;
      if (!text.trim()) return;

      const result = [];
      const words = text.toUpperCase().split(/\s+/);

      for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const matchedPhrase = ASL_DATA.phrases.find(
          (p) =>
            p.word.toUpperCase() === word ||
            p.word.toUpperCase().replace(/\s+/g, '') === word,
        );

        if (matchedPhrase) {
          result.push({
            type: 'word',
            value: matchedPhrase.word,
            image: matchedPhrase.image,
            description: matchedPhrase.description,
          });
        } else {
          for (const char of word) {
            const letter = ASL_DATA.alphabet.find((l) => l.letter === char);
            if (letter) {
              result.push({
                type: 'letter',
                value: letter.letter,
                image: letter.image,
                description: letter.description,
              });
            }
          }
        }

        if (i < words.length - 1) {
          result.push({
            type: 'space',
            value: ' ',
            image: '',
            description: 'Pause briefly between words',
          });
        }
      }

      translatedSigns = result;
      signsContainer.innerHTML = '';

      if (translatedSigns.length > 0) {
        emptyState.classList.add('hidden');
        results.classList.remove('hidden');
        clearBtn.classList.remove('hidden');
      }

      // Render sign cards.
      translatedSigns.forEach((sign, index) => {
        if (sign.type === 'space') {
          const spaceWrap = document.createElement('div');
          spaceWrap.className = 'flex items-center justify-center w-8';
          spaceWrap.innerHTML = '<div class="w-1 h-16 bg-border rounded-full"></div>';
          signsContainer.appendChild(spaceWrap);
          return;
        }

        const wrap = document.createElement('div');
        wrap.className = 'relative cursor-pointer group';

        const card = document.createElement('div');
        card.className = 'w-24 md:w-28 overflow-hidden hover:shadow-lg transition-shadow border-2 hover:border-primary/50';

        const imgWrap = document.createElement('div');
        imgWrap.className = 'relative aspect-square bg-background';
        imgWrap.innerHTML = `
          <img src="${sign.image}" alt="ASL sign for ${sign.value}" class="absolute inset-0 h-full w-full object-cover" />
        `;

        const cardContent = document.createElement('div');
        cardContent.className = 'p-2 text-center';

        const valueSpan = document.createElement('span');
        valueSpan.className = `font-bold ${sign.type === 'word' ? 'text-primary text-sm' : 'text-foreground text-lg'}`;
        valueSpan.textContent = sign.value;

        cardContent.appendChild(valueSpan);
        if (sign.type === 'word') {
          const phraseLabel = document.createElement('span');
          phraseLabel.className = 'block text-xs text-muted-foreground';
          phraseLabel.textContent = 'phrase';
          cardContent.appendChild(phraseLabel);
        }

        card.appendChild(imgWrap);
        card.appendChild(cardContent);
        wrap.appendChild(card);

        const descEl = document.createElement('div');
        descEl.className =
          'absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-popover border rounded-lg shadow-xl z-20 hidden';
        descEl.innerHTML = `
          <p class="text-sm text-popover-foreground">${sign.description}</p>
          <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-popover border-r border-b"></div>
        `;

        wrap.appendChild(descEl);
        wrap.addEventListener('click', () => {
          const isHidden = descEl.classList.contains('hidden');
          descEl.classList.toggle('hidden', !isHidden);
        });

        signsContainer.appendChild(wrap);
      });
    }
  }

  function init() {
    lucideInit();
    initHeader();
    initFooterYear();
    initPage();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

