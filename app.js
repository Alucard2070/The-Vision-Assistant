const select = document.querySelector('select');
const allLang = ['en', 'ru', 'kz']
const langArr = {
    "txt": {
        "ru": "Помощь",
        "en": "Help",
        "kz": "Kömek",
    },
}
select.addEventListener('change', changeURLLanguage);

function changeURLLanguage(){
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage(){
    let hash = window.location.hash;
    hash = hash.substring(1);
    if(!allLang.includes(hash)){
        location.href = window.location.pathname + '#ru';
        location.reload();
    }
    select.value = hash;
    document.querySelector('.lng-txt').innerHTML = langArr['txt'][hash];
    console.log(hash);
}

changeLanguage();