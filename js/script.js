// common helper
document.addEventListener('DOMContentLoaded', () => {

    /* -----------------------------
       POLAROID CLICK → LIGHTBOX
    ----------------------------- */
    document.querySelectorAll('.polaroid').forEach(p => {
        p.addEventListener('click', () => {
            const img = p.querySelector('img')?.src;
            if (img) openLightbox(img);
        });
    });

    /* -----------------------------
       OPEN CARD BUTTON
    ----------------------------- */
    const openBtn = document.getElementById('openCard');
    if (openBtn) {
        openBtn.addEventListener('click', () => {
            document.getElementById('cardMessage').classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* -----------------------------
       SURPRISE PAGE: 19 CANDLES
    ----------------------------- */
    const candleContainer = document.querySelector('.candles');
    if (candleContainer) {
        const colors = ['#ff7aa2', '#ffd47a', '#bfe8ff'];

        for (let i = 0; i < 19; i++) {
            const c = document.createElement('div');
            c.className = 'candle';
            c.style.background = `linear-gradient(180deg, #fff, ${colors[i % 3]})`;

            const f = document.createElement('div');
            f.className = 'flame';
            f.style.animation = `flicker ${0.8 + Math.random() * 0.6}s infinite`;

            c.appendChild(f);
            candleContainer.appendChild(c);
        }
    }

    /* -----------------------------
       MUSIC TOGGLE
    ----------------------------- */
    const bgm = document.getElementById('bgm');
    const btn = document.getElementById('musicToggle');

    if (bgm && btn) {
        btn.addEventListener('click', () => {
            if (bgm.paused) {
                bgm.play();
                btn.classList.add('playing');
            } else {
                bgm.pause();
                btn.classList.remove('playing');
            }
        });
    }

}); // ← ini penutup DOMContentLoaded YANG BENAR


/* -----------------------------
   LIGHTBOX FUNCTION
----------------------------- */
function openLightbox(src) {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.inset = 0;
    overlay.style.background = 'rgba(0,0,0,0.6)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = 9999;

    const img = document.createElement('img');
    img.src = src;
    img.style.maxWidth = '92%';
    img.style.maxHeight = '92%';
    img.style.borderRadius = '10px';

    overlay.appendChild(img);
    overlay.addEventListener('click', () => overlay.remove());

    document.body.appendChild(overlay);
}


/* -----------------------------
   CANDLE FLAME ANIMATION
----------------------------- */
const styleSheet = document.createElement('style');
styleSheet.innerHTML = `
@keyframes flicker {
    0% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-2px) scale(1.02); }
    100% { transform: translateY(0) scale(1); }
}`;
document.head.appendChild(styleSheet);
