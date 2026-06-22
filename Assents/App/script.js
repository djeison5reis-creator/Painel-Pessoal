/*======================== 
Animação do Cursor 
============================*/

function cursorani() {
    const cursor = document.getElementById("cursor"),
        r = document.getElementById("r");
    let mx = 0, my = 0, ry = 0, rx = 0;
    document.addEventListener("mousemove", function (e) {
        mx = e.x; my = e.y;
        cursor.style.opacity = "1"
        r.style.opacity = "1"
        cursor.style.left = (mx - 5) + "px";
        cursor.style.top = (my - 5) + "px";
    })
    function aniC() {
        rx += (mx - rx - 10) * .1;
        ry += (my - ry - 10) * .1;
        r.style.left = rx + "px";
        r.style.top = ry + "px";
        requestAnimationFrame(aniC)
    } aniC();
}
cursorani()

/*======================== 
Script do Relogio
============================*/

function relogio() {
    let a = new Date();
    let h = a.getHours().toString().padStart(2, "0");
    let m = a.getMinutes().toString().padStart(2, "0");
    let s = a.getSeconds().toString().padStart(2, "0");
    document.querySelector(".relogio").innerHTML = `${h}:${m}:${s}`
}
setInterval(relogio, 1000)
relogio()

/*======================== 
Função do menu
============================*/
function menuF() {
    const menuToggle = document.getElementById("menuToggle");
    const MenuP = document.getElementById("NavBar");

    menuToggle.addEventListener("click", function (e) {
        e.stopPropagation();
        MenuP.classList.toggle("menuToglle");
    });

    document.addEventListener("click", function (e) {
        const fP = menuToggle.contains(e.target) || MenuP.contains(e.target);

        if (!fP) {
            MenuP.classList.remove("menuToglle");

        }

    });
    document.addEventListener("keyup", function (e) {
        if (e.key == "Enter") {
            MenuP.classList.toggle("menuToglle")

        }
        if (e.key == "Escape") {
            MenuP.classList.remove("menuToglle")

        }
    })

} menuF()

    /*======================== 
    Função de Animação
    
    function animaP() {
        const elementos = document.querySelectorAll('.inicio, header, .subL');
    
        for (let el of elementos) {
    
            const topo = el.getBoundingClientRect.top;
            const alturaTela = window.innerHeight;
            const visivel = 150;
    
            if (topo < alturaTela - visivel) {
                el.classList.add("aniScroll");
            } else {
                el.classList.remove("aniScroll");
    
            }
    
        }
    }
    
    document.addEventListener("scroll", animaP)
    animaP()
    \
    /*======================== 
        Matriz das Paginas
        ============================*/



    /* ════════ CANVAS PARTICLES ════════ */
    (function () {
        const cv = document.getElementById('canvas');
        const ctx = cv.getContext('2d');
        let W, H, pts = [];

        function resize() {
            W = cv.width = window.innerWidth;
            H = cv.height = window.innerHeight;
        }
        resize();
        window.addEventListener('resize', () => { resize(); init() });

        const COLORS = ['rgb(0, 0, 0,', 'rgba(168,85,247,', 'rgba(6,182,212,', 'rgba(244,63,94,'];

        function init() {
            pts = [];
            const n = Math.min(Math.floor(W * H / 14000), 80);
            for (let i = 0; i < n; i++) pts.push({
                x: Math.random() * W, y: Math.random() * H,
                vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35,
                r: Math.random() * 1.8 + .4,
                c: COLORS[Math.floor(Math.random() * COLORS.length)],
                a: Math.random() * .5 + .1
            });
        }
        init();

        let mx = W / 2, my = H / 2;
        window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY });

        function draw() {
            ctx.clearRect(0, 0, W, H);
            pts.forEach(p => {
                p.x += p.vx; p.y += p.vy;
                if (p.x < 0 || p.x > W) p.vx *= -1;
                if (p.y < 0 || p.y > H) p.vy *= -1;
                // mouse repel
                const dx = p.x - mx, dy = p.y - my, d = Math.sqrt(dx * dx + dy * dy);
                if (d < 100) { const f = (100 - d) / 100 * .8; p.vx += dx / d * f * .12; p.vy += dy / d * f * .12 }
                // clamp velocity
                const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
                if (spd > 1.2) { p.vx = (p.vx / spd) * 1.2; p.vy = (p.vy / spd) * 1.2 }
                // draw dot
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = p.c + p.a + ')';
                ctx.fill();
            });
            // draw lines
            for (let i = 0; i < pts.length; i++) {
                for (let j = i + 1; j < pts.length; j++) {
                    const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
                    const d = Math.sqrt(dx * dx + dy * dy);
                    if (d < 120) {
                        ctx.beginPath();
                        ctx.moveTo(pts[i].x, pts[i].y);
                        ctx.lineTo(pts[j].x, pts[j].y);
                        const a = (1 - d / 120) * .12;
                        ctx.strokeStyle = `rgba(124,58,237,${a})`;
                        ctx.lineWidth = .5;
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(draw);
        }
        draw();
    })();


/*========================
  
  ============================*/
