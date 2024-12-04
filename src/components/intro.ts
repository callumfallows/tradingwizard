import { animate } from 'motion';

() => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        // New card animations
        const cards = entry.target.querySelectorAll('.animated-card');
        cards.forEach((card, index) => {
          animate(
            card,
            {},
            {
              duration: 1.5,
              delay: index * 0.25,
            }
          );
        });

        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.5 }
  );

  document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('animated-list');
    if (list) observer.observe(list);
  });
  console.log('Hello, world!');
};
