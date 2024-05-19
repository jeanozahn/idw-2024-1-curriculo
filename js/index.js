function searchCards() {
    let input = document.getElementById('search');
    let filter = input.value.toLowerCase();
    let cards = document.getElementsByClassName('card');
    
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        let name = card.getElementsByTagName('h2')[0].innerText.toLowerCase();
        if (name.includes(filter)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    }
}
