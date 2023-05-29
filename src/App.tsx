import React from 'react';

function App() {
  return (
   <body>
    <div className='hello'>
      <h1 >Привет, меня зовут Станислав!</h1>
    </div>
    <div className='photo'>
      <img src='image/photo.jpg'/>
      
    </div>
    <div className='about_me'>
      <span>
        Я студент второго курса томского государственного университета систем управления и радиоэлектроники.
        Учусь на факультете систем управления на специальность программный инженер. Изучаю разработку мобильных 
        приложений на Flutter и Frontend разработку на TypeScript.
      </span>
    </div>
    <h3>мои соцсети</h3>
    <div className='link'>
      <a href='https://m.vk.com/ssstttaaasssiiikk'> ВК </a>
      <a href='https://t.me/ssstttaaasssiiikk'> телеграм </a>
      <a href='https://github.com/Ssstttaaasssiiikk'> гит</a>
    </div>
   </body>
  );
}

export default App;
