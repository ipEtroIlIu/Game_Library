fetch('./data.json')
	.then((res) => {
		if (!res.ok) {
			throw new Error(`HTTP error! Status: ${res.status}`);
		}
		return res.json();
	})
	.then((data) => {
		renderPlayed(data.played);
	})
	.catch((error) => {
		console.error('Ошибка загрузки данных:', error);
		document.getElementById('played').innerHTML = '<p style="text-align:center; color:#e74c3c; padding: 40px;">Ошибка загрузки игр</p>';
	});

function ratingToPercent(rating) {
	const percent = Math.max(0, Math.min(rating, 10)) * 10;
	return Math.max(0, percent - 1);
}

function createLoveTags(loveItems) {
	return loveItems.map((item) => `<span class="love-tag">${item}</span>`).join('');
}

function renderPlayed(games) {
	const root = document.getElementById('played');
	root.innerHTML = '';

	const fragment = document.createDocumentFragment();

	// Сортируем игры по названию (алфавиту)
	const sortedGames = [...games].sort((a, b) => {
		return a.name.localeCompare(b.name, 'ru', { sensitivity: 'base' });
	});

	sortedGames.forEach((data) => {
		const wrapper = document.createElement('div');
		wrapper.className = 'card-wrapper';

		wrapper.innerHTML = `
            <div class="card">
                <img src="${data.image}" onerror="this.style.display='none'" alt="${data.name}" loading="lazy">
                
                <div class="overlay">
                    <div class="status ${data.finished === true ? 'done' : data.finished === false ? 'dropped' : 'empty'}">
                        ${data.finished === true ? 'Пройдено' : data.finished === false ? 'Брошено' : '—'}
                    </div>

                    <div class="divider"></div>

                    <div class="ratings">
                        <div class="stars-container">
                            <div class="stars-background"></div>
                            <div class="stars-foreground" style="width: ${ratingToPercent(data.rating)}%"></div>
                        </div>
                    </div>

                    <div class="divider"></div>

                    <div class="love">
                        <strong>Впечатлило:</strong>
                        <div class="love-tags">
                            ${createLoveTags(data.love)}
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="card-text">${data.name}</div>
        `;

		fragment.appendChild(wrapper);
	});

	root.appendChild(fragment);
}
