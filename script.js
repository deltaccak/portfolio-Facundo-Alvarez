 const typing = document.getElementById('typing');
    const phrases = ["Desarrollador Web", "Desarrollador de Bots de Discord"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    function type() {
      const currentPhrase = phrases[phraseIndex];
      if (isDeleting) {
        typing.textContent = currentPhrase.substring(0, charIndex--);
        if (charIndex < 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
      } else {
        typing.textContent = currentPhrase.substring(0, charIndex++);
        if (charIndex > currentPhrase.length) {
          isDeleting = true;
        }
      }
      setTimeout(type, isDeleting ? 50 : 100);
    }
    type();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });
    document.querySelectorAll('.card').forEach(card => observer.observe(card));
    const goTop = document.getElementById('go-top');
    window.addEventListener('scroll', () => {
      goTop.classList.toggle('show', window.scrollY > 200);
    });
    goTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));