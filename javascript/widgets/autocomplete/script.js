const searchBox = document.getElementById('search');
const matchList = document.getElementById('match-list');

const updateMatchList = (filteredList) => {
    while (matchList.firstChild) {
        matchList.removeChild(matchList.firstChild);
    }
    const frag = document.createDocumentFragment();
    filteredList.forEach(item => {
        const suggestion = document.createElement('a');
        suggestion.href = '#';
        suggestion.classList.add('suggestions');
        suggestion.textContent = item.name;
        frag.append(suggestion);
    });

    matchList.append(frag);
}

const debounce = (fn, delay = 3000) => {
    let timeoutId;
    return function(...args) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn(...args);
        }, delay);
    }
}


const filterSearches = async (event) => {
    const fetchData = await fetch('data.json');
    const data = await fetchData.json();

    const text = event.target.value;
    if (!text || text.length === 0) {
        matchList.innerHTML = '';
        return;
    }
    const filteredList = data.filter(item => {
        const regex = new RegExp(`^${text}`, 'gi')
        return item.name.match(regex);
    });
    updateMatchList(filteredList);
}

searchBox.addEventListener('input', debounce(filterSearches));
matchList.addEventListener('click', (event) => {
    if (event.target.tagName !== 'A') {
        return;
    }
    searchBox.value = event.target.textContent;
    searchBox.dispatchEvent(new Event('input'));
});