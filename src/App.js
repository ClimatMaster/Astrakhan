import React from 'react';
import './index.css';

function App() {
  return (
    <div className="container">
        <h1>ООО "КлиматМастер"</h1>
        <p>Добро пожаловать на нашу визитку! Свяжитесь с нами:</p>
        <div className="contact-links">
            <a href="tel:+79678299996">Позвонить: +7 (967) 829-99-96</a>
            <a href="https://2gis.ru/astrakhan/geo/70000001084276329" target="_blank" rel="noopener noreferrer">2ГИС</a>
            <a href="https://yandex.ru/maps/org/klimatmaster/163107130213/?ll=48.030340%2C46.351266&z=15" target="_blank" rel="noopener noreferrer">Яндекс Карты</a>
            <a href="https://www.avito.ru/astrahan/predlozheniya_uslug/remont_chistka_zapravka_ustanovka_konditsionerov_4014893388?utm_campaign=native&utm_medium=item_page_ios&utm_source=soc_sharing_seller" target="_blank" rel="noopener noreferrer">Avito</a>
            <a href="https://vk.com/remonastrahan" target="_blank" rel="noopener noreferrer">ВКонтакте</a>
            <a href="https://www.instagram.com/climate_master30?igsh=dHozeGsxcG5sYXVy&utm_source=qr" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
    </div>
  );
}

export default App;