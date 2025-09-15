// function createHeart() {
//     const heart = document.createElement('div');
//     heart.className = 'heart';
//     heart.style.left = Math.random() * 100 + 'vw';
//     heart.style.animationDuration = (6 + Math.random() * 4) + 's';

//     // Set a random starting top position
//     const startTop = Math.random() * 240;
//     heart.style.top = startTop + 'vh';

//     document.body.appendChild(heart);

//     setTimeout(() => {
//         heart.remove();
//     }, 10000);
// }

function showMessage(index) {
            const template = document.getElementById(`msg-${index}`);
            document.getElementById('messageDisplay').innerHTML = template.innerHTML;
            const items = document.querySelectorAll('#messageList li');
            items.forEach((li, i) => {
                li.classList.toggle('active', i === index);
            });
        }
        showMessage(0);

// setInterval(createHeart, 350);