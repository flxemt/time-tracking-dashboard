import data from './data.json'

const main = document.getElementById('main')
let selectedType = 'weekly'

function handleClick(event) {
  selectedType = event.target.dataset.type
  renderCards()
}

function renderCards() {
  let cards = ''

  data.forEach(card => {
    cards += `
      <div class="card" style="--bg-color: ${card.backgroundColor}; --bg-image: url('${card.backgroundImage}'); --bg-right: ${card.backgroundPosition.right}; --bg-top: ${card.backgroundPosition.top}">
        <div class="card-details">
          <div class="card-header">
            <p class="header-text">${card.title}</p>
            <button class="header-btn" aria-label="Options">
              <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill-rule="evenodd"/></svg>
            </button>
          </div>
          <div class="card-hours">
            <p class="card-hours-value">${card.timeframes[selectedType].current}hrs</p>
            <p class="card-hours-last-week">Last Week - ${card.timeframes[selectedType].previous}hrs</p>
          </div>
        </div>
      </div>
    `
  })

  main.innerHTML = `
    <div class="card-large">
      <div class="profile-info">
        <img src="/image-jeremy.png" class="profile-avatar" alt="Avatar" />
        <div class="profile-details">
          <p class="profile-details-brief">Report for</p>
          <h1 class="profile-details-title">Jeremy Robson</h1>
        </div>
      </div>
      <div class="profile-buttons">
        <button class="btn ${selectedType === 'daily' ? 'active' : ''}" data-type="daily">Daily</button>
        <button class="btn ${selectedType === 'weekly' ? 'active' : ''}" data-type="weekly">Weekly</button>
        <button class="btn ${selectedType === 'monthly' ? 'active' : ''}" data-type="monthly">Monthly</button>
      </div>
    </div>
    ${cards}
  `

  document.querySelectorAll('.profile-buttons .btn').forEach(item => {
    item.addEventListener('click', handleClick)
  })
}

renderCards()
