// assistant.js

document.addEventListener('DOMContentLoaded', () => {
  const assistant = document.getElementById('cannel-assistant');
  const bubble = document.getElementById('assistant-bubble');
  const response = document.getElementById('assistant-response');
  const closeBtn = document.getElementById('assistant-close');

  assistant.addEventListener('click', () => {
    bubble.style.display = bubble.style.display === 'block' ? 'none' : 'block';
    response.innerHTML = ''; // reset response
  });

  closeBtn.addEventListener('click', () => {
    bubble.style.display = 'none';
    response.innerHTML = '';
  });

  const showResponse = (text) => {
    response.innerHTML = text;
  };

  document.getElementById('option-degustation').addEventListener('click', () => {
    showResponse(`
      🍷 Pour une dégustation parfaite :
      <ul>
        <li>Sers les cannelés légèrement tièdes pour révéler leur arôme.</li>
        <li>Accompagne-les d’un verre de Sauternes ou d’un café corsé.</li>
        <li>Conserve-les à température ambiante pour garder leur croûte croustillante !</li>
      </ul>
    `);
  });

  document.getElementById('option-site').addEventListener('click', () => {
    showResponse(`
Ce site a été réalisé dans le cadre du cours d'Histoire au lycée Pontus de Tyard,
à Chalon-sur-Saône. Il a été conçu par Niels Béarnais-Barbry pour présenter l’histoire,
la tradition, et les déclinaisons modernes du cannelé de Bordeaux de manière interactive et ludique.
    `);
  });

  document.getElementById('option-fun').addEventListener('click', () => {
    showResponse(`
      Pourquoi le cannelé ne va jamais à la plage ?<br><strong>Parce qu’il a peur de fondre de plaisir ! 😄🍮</strong>
    `);
  });
});
