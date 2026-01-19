document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Loader Logic
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
        document.querySelector('.hero-content').classList.add('active');
    }, 2000); 

    // 2. Scroll Animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                if (entry.target.querySelector('.counter')) {
                    startCounters(entry.target);
                }
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

    // 3. Parallax Effect on Hero
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const heroBg = document.getElementById('hero-bg');
        if (scrolled < window.innerHeight && heroBg) {
            heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // 4. Statistics Counters
    function startCounters(section) {
        const counters = section.querySelectorAll('.counter');
        const speed = 200; 

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target.toLocaleString();
                }
            };
            updateCount();
        });
    }

    // 5. Comparison Gallery Toggle
    initImageToggle();

    // 6. Expandable Cards
    initExpandableCards();

    // 7. Initialize One Life Gate
    initOneLifeGate();

    // 8. Initialize Translation
    initTranslation();
});

// --- TRANSLATION DATA ---
const translations = {
    en: {
        loader: "Witness",
        nav_context: "Context",
        nav_timeline: "Timeline",
        nav_map: "Map",
        nav_destruction: "Destruction",
        nav_impact: "Human Cost",
        nav_evidence: "Evidence",
        nav_onelife: "One Life",
        nav_support: "Support",
        hero_overline: "Investigative Documentary",
        hero_title: "The Genocide in Gaza",
        hero_subtitle: "A digital record of loss, endurance, and the humanitarian crisis.",
        hero_scroll: "Scroll to Witness",
        context_title: "The Context",
        context_p1: "In a densely populated strip of land, a humanitarian catastrophe has unfolded. This platform serves as a digital archive to document the events, the human cost, and the irreversible changes to the landscape. We present verified data and visual evidence to foster global awareness.",
        context_quote: "\"The scale of infrastructure destruction in this period is unprecedented in recent history.\"",
        context_p2: "Beyond the statistics lie entire neighborhoods erased and a history under threat. What follows is a chronological and geospatial account of the events.",
        timeline_title: "Chronology of Events",
        date_oct7: "October 7, 2023",
        tl_1_title: "The Escalation",
        tl_1_text: "Initial outbreaks of violence and the commencement of heavy aerial bombardment. Infrastructure damage begins targeting northern districts.",
        date_oct13: "October 13, 2023",
        tl_2_title: "The Displacement Order",
        tl_2_text: "1.1 million residents in North Gaza are ordered to evacuate south within 24 hours. This marks the beginning of the mass internal displacement crisis.",
        date_oct27: "October 27, 2023",
        tl_3_title: "The Ground Invasion",
        tl_3_text: "Israeli ground forces enter Gaza. A near-total communications blackout isolates the strip as the siege intensifies in the north.",
        date_dec1: "December 1, 2023",
        tl_4_title: "Expansion to the South",
        tl_4_text: "Following a brief ceasefire, ground operations expand into Khan Younis. The \"safe zone\" shrinks, trapping civilians in an increasingly small area.",
        date_may6: "May 6, 2024",
        tl_5_title: "The Rafah Offensive",
        tl_5_text: "Ground forces advance into Rafah, the last refuge for over a million displaced people. The seizure of the border crossing halts critical aid flow.",
        map_title: "Zones of Displacement",
        map_subtitle: "Geospatial analysis of evacuation corridors and safe zones.",
        map_legend_1: "Evacuation Zone",
        map_legend_2: "Shelter Cluster",
        map_source: "Map data source: UN OCHA & Field Reports (2024)",
        comp_title: "Erasure of Landscape",
        comp_subtitle: "Satellite imagery analysis showing the scale of destruction across multiple neighborhoods. Use the arrows to navigate locations.",
        loc_beit: "Beit Hanoun, North Gaza",
        loc_gaza: "Gaza City Center",
        loc_khan: "Khan Younis",
        btn_reveal: "Reveal Aftermath",
        impact_title: "The Human Cost",
        impact_subtitle: "Verified data aggregated from international health organizations.",
        stat_1: "Estimated Lives Lost",
        stat_2: "Children Widowed/Orphaned",
        stat_3: "% Population Displaced",
        evidence_title: "Visual Evidence",
        evidence_subtitle: "Click on a section below to read the full report.",
        card_1_title: "Medical Infrastructure",
        card_1_desc: "An analysis of the collapse of the healthcare system.",
        card_1_text: "The systematic dismantling of Gaza's healthcare infrastructure has created a catastrophic situation for civilians. Hospitals, once sanctuaries, have become targets or collateral damage in ongoing bombardments. This has led to a critical shortage of operational medical facilities, severe lack of essential medicines, and an exhausted medical workforce working under impossible conditions.",
        card_2_title: "Cultural Heritage",
        card_2_desc: "Historical mosques, churches, and archives lost to bombardment.",
        card_2_text: "The erasure of cultural heritage in Gaza is an irreversible loss to human history. Ancient sites, centuries-old mosques, historical churches, and vital archives have been reduced to rubble. This destruction goes beyond physical structures; it is an assault on the collective memory and identity of all people.",
        mem_overline: "In Memoriam",
        mem_title: "The Silence Left Behind",
        mem_intro: "\"Before you proceed, we ask you to pause. Behind the staggering statistics lie individual universes extinguished. These voices were unheard in their final hour, but their stories are carved here forever. We invite you not just to read, but to bear witness.\"",
        btn_witness: "Bear Witness",
        life_1_name: "Hind Rajab, Age 6",
        life_1_text: "Trapped in a car with her family members in Gaza City, Hind’s voice was heard by the world in a desperate phone call to emergency dispatchers. She waited for hours for a rescue that never arrived.",
        life_1_note: "Her story became a global symbol of the terrifying isolation faced by children. It is centrally featured in the documentary film \"The Night Won't End\".",
        life_2_name: "Reem, Age 3",
        life_2_text: "Known to the world as \"Ruh ar-ruh\" (Soul of my Soul), a phrase whispered by her grandfather Khaled Nabhan as he bid her farewell. She was killed in an airstrike on the Nuseirat refugee camp while sleeping.",
        life_2_note: "She is remembered for her laughter and the earring her grandfather tenderly adjusted one last time.",
        life_3_name: "Lubna Alyaan, Age 14",
        life_3_text: "A talented student at the Edward Said Conservatory of Music, Lubna dreamed of becoming a world-class violinist. She was killed alongside her family in Nuseirat.",
        life_3_note: "Her violin teacher remembers her as a dedicated soul who believed music could drown out the sound of war.",
        support_title: "Humanitarian Aid",
        support_text: "Millions are without access to clean water, food, and medical supplies.",
        btn_msf: "Medical Aid (MSF)",
        btn_wfp: "Food Relief (WFP)",
        btn_unicef: "Children's Fund (UNICEF)",
        support_note: "*Links direct to official verified donation pages.",
        meth_title: "Sources & Methodology",
        meth_1_title: "Data Verification",
        meth_1_text: "Statistics presented on this platform are aggregated from UN OCHA Situation Reports, World Health Organization (WHO) emergency updates, and UNICEF field reports from Oct 2023 to Jan 2024.",
        meth_2_title: "Satellite Imagery",
        meth_2_text: "Visual evidence of infrastructure damage is derived from open-source satellite data (Copernicus Sentinel-1/2) and independent geospatial analysis verified by third-party NGOs.",
        ethical_title: "Ethical Note:",
        ethical_text: "This project aims to document the scale of loss. We have deliberately excluded graphic imagery to preserve the dignity of victims while strictly adhering to factual reporting standards.",
        closing_quote: "\"There is no way to quantify the silence left behind.\"",
        footer_copy: "© 2024 Digital Documentary Project.",
        footer_note: "Archived for educational and historical record."
    },
    el: {
        loader: "Μάρτυρας",
        nav_context: "Πλαίσιο",
        nav_timeline: "Χρονολόγιο",
        nav_map: "Χάρτης",
        nav_destruction: "Καταστροφή",
        nav_impact: "Ανθρώπινο Κόστος",
        nav_evidence: "Αποδείξεις",
        nav_onelife: "Μια Ζωή",
        nav_support: "Υποστήριξη",
        hero_overline: "Ερευνητικό Ντοκιμαντέρ",
        hero_title: "Η Γενοκτονία στη Γάζα",
        hero_subtitle: "Ένα ψηφιακό αρχείο απώλειας, αντοχής και ανθρωπιστικής κρίσης.",
        hero_scroll: "Κυλήστε για να Γίνετε Μάρτυρες",
        context_title: "Το Πλαίσιο",
        context_p1: "Σε μια πυκνοκατοικημένη λωρίδα γης, εκτυλίσσεται μια ανθρωπιστική καταστροφή. Αυτή η πλατφόρμα λειτουργεί ως ψηφιακό αρχείο για την καταγραφή των γεγονότων, του ανθρώπινου κόστους και των μη αναστρέψιμων αλλαγών στο τοπίο. Παρουσιάζουμε επαληθευμένα δεδομένα και οπτικές αποδείξεις για την ενίσχυση της παγκόσμιας ευαισθητοποίησης.",
        context_quote: "\"Η κλίμακα καταστροφής των υποδομών αυτή την περίοδο είναι άνευ προηγουμένου στη σύγχρονη ιστορία.\"",
        context_p2: "Πέρα από τις στατιστικές, βρίσκονται ολόκληρες γειτονιές που έχουν σβηστεί και μια ιστορία υπό απειλή. Ακολουθεί μια χρονολογική και γεωχωρική καταγραφή των γεγονότων.",
        timeline_title: "Χρονολόγιο Γεγονότων",
        date_oct7: "7 Οκτωβρίου 2023",
        tl_1_title: "Η Κλιμάκωση",
        tl_1_text: "Αρχικά ξεσπάσματα βίας και έναρξη σφοδρών αεροπορικών βομβαρδισμών. Οι ζημιές στις υποδομές ξεκινούν στοχεύοντας τις βόρειες συνοικίες.",
        date_oct13: "13 Οκτωβρίου 2023",
        tl_2_title: "Η Εντολή Εκτοπισμού",
        tl_2_text: "1,1 εκατομμύριο κάτοικοι στη Βόρεια Γάζα λαμβάνουν εντολή να εκκενώσουν προς τα νότια εντός 24 ωρών. Αυτό σηματοδοτεί την αρχή της μαζικής κρίσης εσωτερικού εκτοπισμού.",
        date_oct27: "27 Οκτωβρίου 2023",
        tl_3_title: "Η Χερσαία Εισβολή",
        tl_3_text: "Ισραηλινές χερσαίες δυνάμεις εισέρχονται στη Γάζα. Ένα σχεδόν ολικό μπλακ άουτ επικοινωνιών απομονώνει τη λωρίδα καθώς η πολιορκία εντείνεται στο βορρά.",
        date_dec1: "1 Δεκεμβρίου 2023",
        tl_4_title: "Επέκταση στο Νότο",
        tl_4_text: "Μετά από μια σύντομη κατάπαυση του πυρός, οι χερσαίες επιχειρήσεις επεκτείνονται στο Χαν Γιουνίς. Η «ασφαλής ζώνη» συρρικνώνεται, παγιδεύοντας τους αμάχους σε μια ολοένα και μικρότερη περιοχή.",
        date_may6: "6 Μαΐου 2024",
        tl_5_title: "Η Επίθεση στη Ράφα",
        tl_5_text: "Οι χερσαίες δυνάμεις προωθούνται στη Ράφα, το τελευταίο καταφύγιο για πάνω από ένα εκατομμύριο εκτοπισμένους. Η κατάληψη του συνοριακού περάσματος σταματά την κρίσιμη ροή βοήθειας.",
        map_title: "Ζώνες Εκτοπισμού",
        map_subtitle: "Γεωχωρική ανάλυση διαδρόμων εκκένωσης και ασφαλών ζωνών.",
        map_legend_1: "Ζώνη Εκκένωσης",
        map_legend_2: "Σύμπλεγμα Καταφυγίων",
        map_source: "Πηγή δεδομένων χάρτη: UN OCHA & Αναφορές Πεδίου (2024)",
        comp_title: "Εξάλειψη του Τοπίου",
        comp_subtitle: "Ανάλυση δορυφορικών εικόνων που δείχνει την κλίμακα της καταστροφής σε πολλές γειτονιές. Χρησιμοποιήστε τα βέλη για πλοήγηση.",
        loc_beit: "Μπέιτ Χανούν, Βόρεια Γάζα",
        loc_gaza: "Κέντρο Πόλης της Γάζας",
        loc_khan: "Χαν Γιουνίς",
        btn_reveal: "Αποκάλυψη Συνεπειών",
        impact_title: "Το Ανθρώπινο Κόστος",
        impact_subtitle: "Επαληθευμένα δεδομένα από διεθνείς οργανισμούς υγείας.",
        stat_1: "Εκτιμώμενες Απώλειες Ζωών",
        stat_2: "Παιδιά Ορφανά/Χήρες",
        stat_3: "% Πληθυσμού Εκτοπισμένο",
        evidence_title: "Οπτικές Αποδείξεις",
        evidence_subtitle: "Κάντε κλικ σε μια ενότητα παρακάτω για να διαβάσετε την πλήρη αναφορά.",
        card_1_title: "Ιατρικές Υποδομές",
        card_1_desc: "Μια ανάλυση της κατάρρευσης του συστήματος υγείας.",
        card_1_text: "Η συστηματική διάλυση των υποδομών υγείας της Γάζας έχει δημιουργήσει μια καταστροφική κατάσταση για τους αμάχους. Τα νοσοκομεία, κάποτε καταφύγια, έχουν γίνει στόχοι ή παράπλευρες απώλειες σε συνεχείς βομβαρδισμούς. Αυτό έχει οδηγήσει σε κρίσιμη έλλειψη λειτουργικών ιατρικών εγκαταστάσεων, σοβαρή έλλειψη βασικών φαρμάκων και εξουθενωμένο ιατρικό προσωπικό που εργάζεται υπό αδύνατες συνθήκες.",
        card_2_title: "Πολιτιστική Κληρονομιά",
        card_2_desc: "Ιστορικά τζαμιά, εκκλησίες και αρχεία που χάθηκαν στους βομβαρδισμούς.",
        card_2_text: "Η εξάλειψη της πολιτιστικής κληρονομιάς στη Γάζα είναι μια μη αναστρέψιμη απώλεια για την ανθρώπινη ιστορία. Αρχαίοι χώροι, τζαμιά αιώνων, ιστορικές εκκλησίες και ζωτικά αρχεία έχουν μετατραπεί σε ερείπια. Αυτή η καταστροφή υπερβαίνει τις φυσικές δομές· είναι μια επίθεση στη συλλογική μνήμη και ταυτότητα όλων των ανθρώπων.",
        mem_overline: "Εις Μνήμην",
        mem_title: "Η Σιωπή που Μένει Πίσω",
        mem_intro: "\"Πριν συνεχίσετε, σας ζητάμε να σταθείτε για λίγο. Πίσω από τις συγκλονιστικές στατιστικές βρίσκονται ατομικά σύμπαντα που έσβησαν. Αυτές οι φωνές δεν ακούστηκαν την τελευταία τους ώρα, αλλά οι ιστορίες τους είναι χαραγμένες εδώ για πάντα. Σας καλούμε όχι απλώς να διαβάσετε, αλλά να γίνετε μάρτυρες.\"",
        btn_witness: "Γίνετε Μάρτυρες",
        life_1_name: "Χιντ Ρατζάμπ, 6 Ετών",
        life_1_text: "Παγιδευμένη σε ένα αυτοκίνητο με τα μέλη της οικογένειάς της στην Πόλη της Γάζας, η φωνή της Χιντ ακούστηκε από τον κόσμο σε μια απεγνωσμένη τηλεφωνική κλήση. Περίμενε για ώρες μια διάσωση που δεν έφτασε ποτέ.",
        life_1_note: "Η ιστορία της έγινε παγκόσμιο σύμβολο της τρομακτικής απομόνωσης που αντιμετωπίζουν τα παιδιά.",
        life_2_name: "Ριμ, 3 Ετών",
        life_2_text: "Γνωστή στον κόσμο ως «Ρουχ αρ-ρουχ» (Ψυχή της Ψυχής μου), μια φράση που ψιθύρισε ο παππούς της Χαλίντ Ναμπχάν καθώς την αποχαιρετούσε. Σκοτώθηκε σε αεροπορική επιδρομή στον προσφυγικό καταυλισμό Νουσεϊράτ ενώ κοιμόταν.",
        life_2_note: "Τη θυμούνται για το γέλιο της και το σκουλαρίκι που ο παππούς της διόρθωσε τρυφερά για τελευταία φορά.",
        life_3_name: "Λούμπνα Αλυάν, 14 Ετών",
        life_3_text: "Ταλαντούχα μαθήτρια στο Ωδείο Έντουαρντ Σαΐντ, η Λούμπνα ονειρευόταν να γίνει βιολίστρια παγκόσμιας κλάσης. Σκοτώθηκε μαζί με την οικογένειά της στο Νουσεϊράτ.",
        life_3_note: "Ο δάσκαλος βιολιού της τη θυμάται ως μια αφοσιωμένη ψυχή που πίστευε ότι η μουσική μπορούσε να πνίξει τον ήχο του πολέμου.",
        support_title: "Ανθρωπιστική Βοήθεια",
        support_text: "Εκατομμύρια άνθρωποι δεν έχουν πρόσβαση σε καθαρό νερό, τροφή και ιατρικές προμήθειες.",
        btn_msf: "Ιατρική Βοήθεια (MSF)",
        btn_wfp: "Επισιτιστική Βοήθεια (WFP)",
        btn_unicef: "Ταμείο για τα Παιδιά (UNICEF)",
        support_note: "*Οι σύνδεσμοι οδηγούν σε επίσημες σελίδες δωρεών.",
        meth_title: "Πηγές & Μεθοδολογία",
        meth_1_title: "Επαλήθευση Δεδομένων",
        meth_1_text: "Τα στατιστικά στοιχεία που παρουσιάζονται συγκεντρώνονται από Εκθέσεις Κατάστασης του UN OCHA, ενημερώσεις έκτακτης ανάγκης του ΠΟΥ και εκθέσεις πεδίου της UNICEF.",
        meth_2_title: "Δορυφορικές Εικόνες",
        meth_2_text: "Τα οπτικά στοιχεία ζημιών προέρχονται από δορυφορικά δεδομένα ανοιχτού κώδικα (Copernicus Sentinel-1/2) και ανεξάρτητη γεωχωρική ανάλυση.",
        ethical_title: "Ηθική Σημείωση:",
        ethical_text: "Αυτό το έργο στοχεύει στην καταγραφή της κλίμακας της απώλειας. Έχουμε αποκλείσει σκόπιμα σκληρές εικόνες για να διαφυλάξουμε την αξιοπρέπεια των θυμάτων.",
        closing_quote: "\"Δεν υπάρχει τρόπος να ποσοτικοποιηθεί η σιωπή που μένει πίσω.\"",
        footer_copy: "© 2024 Ψηφιακό Έργο Ντοκιμαντέρ.",
        footer_note: "Αρχειοθετήθηκε για εκπαιδευτική και ιστορική καταγραφή."
    }
};

function initTranslation() {
    const langBtn = document.getElementById('lang-toggle');
    let currentLang = localStorage.getItem('site_lang') || 'en';

    // Apply initial language
    applyLanguage(currentLang);

    langBtn.addEventListener('click', () => {
        // Toggle language
        currentLang = currentLang === 'en' ? 'el' : 'en';
        applyLanguage(currentLang);
        localStorage.setItem('site_lang', currentLang);
    });
}

function applyLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    const langBtn = document.getElementById('lang-toggle');
    
    // Update button text
    langBtn.textContent = lang === 'en' ? 'EN | EL' : 'EL | EN';

    // Update all text elements
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // If it's an input/textarea placeholder
            if (el.placeholder) {
                el.placeholder = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    document.documentElement.lang = lang;
}

// Function: Handles switching the image for EACH slide in the comparison carousel
function initImageToggle() {
    const buttons = document.querySelectorAll('.comparison-toggle-btn');
    
    buttons.forEach(btn => {
        btn.isShowingAfter = false; 

        btn.addEventListener('click', (e) => {
            const wrapper = btn.closest('.carousel-item');
            const img = wrapper.querySelector('.comparison-image');
            
            if (!img) return;

            const beforeSrc = img.getAttribute('data-before');
            const afterSrc = img.getAttribute('data-after');

            // 1. Start fade out
            img.classList.add('swapping');
            btn.disabled = true; 

            // 2. Swap after slight delay
            setTimeout(() => {
                if (btn.isShowingAfter) {
                    img.src = beforeSrc;
                    // Check language for button text update
                    const lang = localStorage.getItem('site_lang') || 'en';
                    btn.textContent = lang === 'en' ? "Reveal Aftermath" : "Αποκάλυψη Συνεπειών";
                    btn.isShowingAfter = false;
                } else {
                    img.src = afterSrc;
                    const lang = localStorage.getItem('site_lang') || 'en';
                    btn.textContent = lang === 'en' ? "Show Previous State" : "Εμφάνιση Προηγούμενης Κατάστασης";
                    btn.isShowingAfter = true;
                }
            }, 200); 

            // 3. Remove fade class
            setTimeout(() => {
                img.classList.remove('swapping');
                btn.disabled = false;
            }, 400); 
        });
    });
}

function initExpandableCards() {
    const cards = document.querySelectorAll('.expandable-card');
    cards.forEach(card => {
        const header = card.querySelector('.story-card-header');
        header.addEventListener('click', () => {
            card.classList.toggle('active');
        });
    });
}

function initOneLifeGate() {
    const btn = document.getElementById('reveal-lives-btn');
    const intro = document.getElementById('lives-intro');
    const content = document.getElementById('lives-content');

    if (!btn || !intro || !content) return;

    btn.addEventListener('click', () => {
        // 1. Hide the intro
        intro.style.transition = 'opacity 0.5s ease';
        intro.style.opacity = '0';

        // 2. Wait for fade out, then swap
        setTimeout(() => {
            intro.classList.add('d-none');
            content.classList.remove('d-none');
            content.classList.add('fade-in-up');
        }, 500);
    });
}