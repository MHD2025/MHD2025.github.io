let games = [
    { id: 1, name: "Asterigos", size: "8.6", price: 3000, image: "https://i.imgur.com/hNjm5oi.jpeg" },
    { id: 2, name: "Assassins Creed Origins", size: "49.7", price: 3000, image: "https://i.imgur.com/8iPOFys.jpeg" },
    { id: 2, name: "Assassins Creed Odyssey", size: "71.6", price: 3000, image: "https://i.imgur.com/VxSsJPa.jpeg" },
    { id: 3, name: "Assassins Creed Valhalla", size: "48.2", price: 3000, image: "https://i.imgur.com/vDH15Bn.jpeg" },
    { id: 4, name: "Assassins Creed Mirage", size: "35.2", price: 3000, image: "https://i.imgur.com/lVijwEu.jpeg" },
    { id: 2, name: "Alien Isolation", size: "28.3", price: 3000, image: "https://i.imgur.com/FxM24uJ.jpeg" },
    { id: 5, name: "Battlefield 1 Arabic", size: "41.8", price: 3000, image: "https://i.imgur.com/PjGkBfz.jpeg" },
    { id: 6, name: "Battlefield 4", size: "35.9", price: 3000, image: "https://i.imgur.com/coMsfl3.jpeg" },
    { id: 7, name: "Battlefield V Arabic", size: "31.5", price: 3000, image: "https://i.imgur.com/gG9LMqy.jpeg" },
    { id: 8, name: "Battlefield Hardline", size: "45.5", price: 3000, image: "https://i.imgur.com/sw5rCNb.jpeg" },
    { id: 2, name: "Batman Arkham Knight", size: "46.6", price: 3000, image: "https://i.imgur.com/uELSRWt.jpeg" },
    { id: 9, name: "BEN 10", size: "1.1", price: 3000, image: "https://i.imgur.com/OBA5nuO.jpeg" },
    { id: 2, name: "Bloodborne", size: "31.7", price: 3000, image: "https://i.imgur.com/e50aA4V.jpeg" },
    { id: 10, name: "Call Of Duty Black Ops III", size: "43.5", price: 3000, image: "https://i.imgur.com/ixudEVm.jpeg" },
    { id: 11, name: "Call Of Duty Vanguard", size: "72.5", price: 3000, image: "https://i.imgur.com/ZImw4jF.jpeg" },
    { id: 12, name: "Call Of Duty Modern Warfare", size: "94.8", price: 3000, image: "https://i.imgur.com/QmkOmbI.jpeg" },
    { id: 13, name: "Call Of Duty Modern Warfare 2", size: "104.7", price: 3000, image: "https://i.imgur.com/Jvm1BpM.jpeg" },
    { id: 14, name: "Call Of Duty Modern Warfare 3", size: "121.8", price: 3000, image: "https://i.imgur.com/BkCLImb.jpeg" },
    { id: 15, name: "Call Of Duty Black Ops 6", size: "102.2", price: 3000, image: "https://i.imgur.com/jlEfeYK.jpeg" },
    { id: 16, name: "Crash Bandicoot N. Sane Trilogy", size: "21.1", price: 3000, image: "https://i.imgur.com/KczMmOx.jpeg" },
    { id: 17, name: "Crash Team Racing Nitro-Fueled", size: "12.7", price: 3000, image: "https://i.imgur.com/kFFaz0h.jpeg" },
    { id: 2, name: "Dakar 18", size: "42.7", price: 3000, image: "https://i.imgur.com/QPizv1y.jpeg" },
    { id: 2, name: "Dark Souls III", size: "26.8", price: 3000, image: "https://i.imgur.com/sLSru9e.jpeg" },
    { id: 2, name: "Days Gone", size: "42.3", price: 3000, image: "https://i.imgur.com/ZGXHyzI.jpeg" },
    { id: 2, name: "Death Stranding", size: "50.1", price: 3000, image: "https://i.imgur.com/re57kiZ.jpeg" },
    { id: 2, name: "Devil May Cry 5", size: "45.2", price: 3000, image: "https://i.imgur.com/4Y71LYq.jpeg" },
    { id: 18, name: "Detroit Become Human", size: "42.5", price: 3000, image: "https://i.imgur.com/TU2UPE7.jpeg" },
    { id: 2, name: "Doom Eternal", size: "46.2", price: 3000, image: "https://i.imgur.com/sbmzPKl.jpeg" },
    { id: 2, name: "Drive Club", size: "15.7", price: 3000, image: "https://i.imgur.com/Rf1jqtG.jpeg" },
    { id: 19, name: "Dragon Ball Z Kakarot", size: "68.6", price: 3000, image: "https://i.imgur.com/YHshEvC.jpeg" },
    { id: 20, name: "EA SPORTS FC 25", size: "44.1", price: 3000, image: "https://i.imgur.com/aPlrc54.jpeg" },
    { id: 21, name: "Elden Ring", size: "57.4", price: 3000, image: "https://i.imgur.com/YbkBapv.jpeg" },
    { id: 2, name: "Far Cry 4", size: "26.9", price: 3000, image: "https://i.imgur.com/seeK8fO.jpeg" },
    { id: 2, name: "Far Cry 5", size: "46.0", price: 3000, image: "https://i.imgur.com/up4DIlK.jpeg" },
    { id: 22, name: "Far Cry 6 Arabic", size: "36.7", price: 3000, image: "https://i.imgur.com/D7k8B2f.jpeg" },
    { id: 23, name: "Fortnite", size: "17.5", price: 3000, image: "https://i.imgur.com/sH5Ee5A.jpeg" },
    { id: 24, name: "Ghost of Tsushima Arabic", size: "48.6", price: 3000, image: "https://i.imgur.com/YQpd60k.jpeg" },
    { id: 25, name: "God Of War Arabic", size: "40.1", price: 3000, image: "https://i.imgur.com/fSFxAPl.jpeg" },
    { id: 26, name: "God Of War Ragnarok Arabic", size: "122.3", price: 3000, image: "https://i.imgur.com/2VcPJox.jpeg" },
    { id: 27, name: "God Of War® III Arabic", size: "36.7", price: 3000, image: "https://i.imgur.com/4bln5vL.jpeg" },
    { id: 28, name: "God Of War 1", size: "7.1", price: 3000, image: "https://i.imgur.com/zufh5m2.jpeg" },
    { id: 2, name: "Gran Turismo 7", size: "129.7", price: 3000, image: "https://i.imgur.com/7hneyfg.jpeg" },
    { id: 29, name: "GTA V", size: "41.6", price: 3000, image: "https://i.imgur.com/cN4QDxp.jpeg" },
    { id: 30, name: "GTA Vice City The Definitive Edition Arabic", size: "10.3", price: 3000, image: "https://i.imgur.com/KcAbKXt.jpeg" },
    { id: 31, name: "High On Life", size: "40.3", price: 3000, image: "https://i.imgur.com/ZQ7J2Ua.jpeg" },
    { id: 2, name: "Hogwarts Legacy", size: "70.4", price: 3000, image: "https://i.imgur.com/FLpcV3W.jpeg" },
    { id: 32, name: "Hot Wheels Unleashed Turbocharged 2", size: "23.5", price: 3000, image: "https://i.imgur.com/bbIJVb8.jpeg" },
    { id: 33, name: "Hollow Knight Arabic", size: "1.2", price: 3000, image: "https://i.imgur.com/oRKlAaS.jpeg" },
    { id: 34, name: "Horizon Zero Dawn", size: "47.1", price: 3000, image: "https://i.imgur.com/fBJI3xa.jpeg" },
    { id: 35, name: "Horizon Forbidden West", size: "89.6", price: 3000, image: "https://i.imgur.com/vCdP41I.jpeg" },
    { id: 36, name: "It Takes Two", size: "37.1", price: 3000, image: "https://i.imgur.com/xAIh1OL.jpeg" },
    { id: 37, name: "INSIDE Arabic", size: "1.3", price: 3000, image: "https://i.imgur.com/iFudJL8.jpeg" },
    { id: 38, name: "Jumanji Wild Adventures", size: "5.0", price: 3000, image: "https://i.imgur.com/k5yhbFB.jpeg" },
    { id: 39, name: "Jujutsu Kaisen Cursed Clash", size: "23.7", price: 3000, image: "https://i.imgur.com/d7GpqIk.jpeg" },
    { id: 2, name: "Killzone Shadow Fall", size: "42.3", price: 3000, image: "https://i.imgur.com/JB0cp8i.jpeg" },
    { id: 2, name: "Marvels Avengers", size: "67.0", price: 3000, image: "https://i.imgur.com/ac2EQJq.jpeg" },
    { id: 2, name: "Marvels Guardians of The Galaxy", size: "83.1", price: 3000, image: "https://i.imgur.com/uW53uRJ.jpeg" },
    { id: 40, name: "Midnight Fight Express", size: "5.0", price: 3000, image: "https://i.imgur.com/HZ2BIR1.jpeg" },
    { id: 41, name: "Minecraft", size: "0.173", price: 3000, image: "https://i.imgur.com/gJBBAsA.jpeg" },
    { id: 42, name: "Mortal Kombat X", size: "40.2", price: 3000, image: "https://i.imgur.com/etp14Km.jpeg" },
    { id: 43, name: "Mortal Kombat 11", size: "68.3", price: 3000, image: "https://i.imgur.com/Q9QspAO.jpeg" },
    { id: 2, name: "MX VS ATV LEGENDS", size: "26.3", price: 3000, image: "https://i.imgur.com/0i2FV5l.jpeg" },
    { id: 2, name: "Need For Speed Heat", size: "42.6", price: 3000, image: "https://i.imgur.com/cGQlnWr.jpeg" },
    { id: 44, name: "PES 2025", size: "45.4", price: 3000, image: "https://i.imgur.com/NKf9VDM.jpeg" },
    { id: 45, name: "Prince Of Persia The Lost Crown", size: "10.3", price: 3000, image: "https://i.imgur.com/5lgKeJl.jpeg" },
    { id: 2, name: "Ratchet & Clank", size: "27.5", price: 3000, image: "https://i.imgur.com/kclAk4H.jpeg" },
    { id: 46, name: "Red Dead Redemption 1", size: "9.5", price: 3000, image: "https://i.imgur.com/bnmw5Zp.jpeg" },
    { id: 47, name: "Red Dead Redemption 2", size: "106.1", price: 3000, image: "https://i.imgur.com/GnJCJxB.jpeg" },
    { id: 48, name: "Resident Evil 2", size: "24.6", price: 3000, image: "https://i.imgur.com/uQRNqMR.jpeg" },
    { id: 49, name: "Resident Evil 3", size: "22.4", price: 3000, image: "https://i.imgur.com/6sWrv7m.jpeg" },
    { id: 50, name: "Resident Evil 4", size: "33.6", price: 3000, image: "https://i.imgur.com/shQDqqh.jpeg" },
    { id: 51, name: "Resident Evil Village", size: "36.8", price: 3000, image: "https://i.imgur.com/1vPhpAG.jpeg" },
    { id: 52, name: "Rise Of the Tomb Raider Arabic", size: "14.3", price: 3000, image: "https://i.imgur.com/zZnx41b.jpeg" },
    { id: 2, name: "Riders Republic", size: "35.9", price: 3000, image: "https://i.imgur.com/huhQaY6.jpeg" },
    { id: 2, name: "Sekiro Shadows Die Twice", size: "25.4", price: 3000, image: "https://i.imgur.com/ylG2qhr.jpeg" },
    { id: 53, name: "SnowRunner", size: "23.1", price: 3000, image: "https://i.imgur.com/gRUqL85.jpeg" },
    { id: 54, name: "Smurfs Kart", size: "2.2", price: 3000, image: "https://i.imgur.com/V5mcui4.jpeg" },
    { id: 55, name: "Spider-Man Arabic", size: "40.3", price: 3000, image: "https://i.imgur.com/eutgZJy.jpeg" },
    { id: 56, name: "Spider-Man Miles Morales Arabic", size: "53.1", price: 3000, image: "https://i.imgur.com/hPumimR.jpeg" },
    { id: 57, name: "Shadow Of The Tomb Raider", size: "32.9", price: 3000, image: "https://i.imgur.com/CNWWLXs.jpeg" },
    { id: 58, name: "Stray Arabic", size: "13.9", price: 3000, image: "https://i.imgur.com/9wgk9zw.jpeg" },
    { id: 2, name: "Star Wars Jedi Fallen Order", size: "57.6", price: 3000, image: "https://i.imgur.com/QciaRoX.jpeg" },
    { id: 2, name: "Street Fighter 6", size: "38.6", price: 3000, image: "https://i.imgur.com/ZI0lOTT.jpeg" },
    { id: 2, name: "Tekken 7", size: "40.8", price: 3000, image: "https://i.imgur.com/MBhGgv1.jpeg" },
    { id: 2, name: "The Callisto Protocol", size: "62.4", price: 3000, image: "https://i.imgur.com/GttLnIm.jpeg" },
    { id: 59, name: "theHunter Call of The Wild", size: "54.1", price: 3000, image: "https://i.imgur.com/1BzAnO5.jpeg" },
    { id: 60, name: "The Last Of Us Part 1 Arabic", size: "48.4", price: 3000, image: "https://i.imgur.com/WabgEIy.jpeg" },
    { id: 61, name: "The Last Of Us Part 2 Arabic", size: "98.0", price: 3000, image: "https://i.imgur.com/WUrmG4K.jpeg" },
    { id: 62, name: "Tomb Raider I-III Remastered", size: "5.8", price: 3000, image: "https://i.imgur.com/U5ge3CH.jpeg" },
    { id: 63, name: "Truck Driver", size: "5.8", price: 3000, image: "https://i.imgur.com/0Nmd8My.jpeg" },
    { id: 64, name: "The Witcher 3", size: "40.4", price: 3000, image: "https://i.imgur.com/sVvhIlb.jpeg" },
    { id: 65, name: "Uncharted The Nathan Drake Collection Arabic", size: "43.5", price: 3000, image: "https://i.imgur.com/kJOyuMN.jpeg" },
    { id: 66, name: "Uncharted 4 Thiefs End Arabic", size: "47.4", price: 3000, image: "https://i.imgur.com/LIozB6W.jpeg" },
    { id: 67, name: "Uncharted The Lost Legacy Arabic", size: "47.8", price: 3000, image: "https://i.imgur.com/uUEjuAP.jpeg" },
    { id: 68, name: "Until Dawn", size: "49.1", price: 3000, image: "https://i.imgur.com/ysidgIL.jpeg" },
    { id: 69, name: "UFO Robot Grendizer", size: "8.5", price: 3000, image: "https://i.imgur.com/f86Fp9D.jpeg" },
    { id: 70, name: "Valiant Hearts The Great War Arabic", size: "1.7", price: 3000, image: "https://i.imgur.com/tzXNu0q.jpeg" },
    { id: 2, name: "Watch Dogs 2", size: "39.3", price: 3000, image: "https://i.imgur.com/9YzSMXS.jpeg" },
    { id: 2, name: "Watch Dogs Legion", size: "54.2", price: 3000, image: "https://i.imgur.com/F7K8E1g.jpeg" },
    { id: 2, name: "WRC Generations", size: "42.6", price: 3000, image: "https://i.imgur.com/OkRBAUG.jpeg" },


];

let cart = [];
let isAdmin = false;

function renderGames() {
    const container = document.getElementById('games-container');
    container.innerHTML = games.map(game => `
        <div class="game-card">
            <img src="${game.image}" alt="${game.name}">
            <div class="game-info">
                <h3>${game.name}</h3>
                <div class="game-details">
                    <span>${game.size} GB</span><br>
                    <span class="game-price"> ${game.price} د.ع</span>
                </div>
                
            </div>
        </div>
    `).join('');
}

function addToCart(gameId) {
    const game = games.find(g => g.id === gameId);
    if (game && !cart.find(g => g.id === gameId)) {
        cart.push(game);
        updateCartUI();
        const gameCard = document.querySelector(`#game-${gameId}`);
        gameCard.classList.add('added');
        const addButton = gameCard.querySelector('.add-to-cart');
        addButton.textContent = 'تمت الإضافة';
        addButton.disabled = true;
    }
}

function removeFromCart(gameId) {
    cart = cart.filter(game => game.id !== gameId);
    updateCartUI();
}

function updateCartUI() {
    const cartItems = document.querySelector('.cart-items');
    document.querySelector('.cart-button').textContent = `عرض الألعاب المختارة (${cart.length})`;
    
    cartItems.innerHTML = cart.map(game => `
        <div class="cart-item">
            <img src="${game.image}" alt="${game.name}">
            <div>
                <h4>${game.name}</h4>
                <p>${game.size} GB</p>
                <p>${game.price} دينار عراقي</p>
            </div>
            <button onclick="removeFromCart(${game.id})">حذف</button>
        </div>
    `).join('');
}

function showCart() {
    document.querySelector('.cart-sidebar').style.right = '0';
}

function closeCart() {
    document.querySelector('.cart-sidebar').style.right = '-300px';
}

function showAdminPrompt() {
    const password = prompt("الرجاء إدخال كلمة المرور:");
    if (password === "20082008") {
        isAdmin = true;
        document.querySelector('.admin-sidebar').style.right = '0';
    } else {
        alert("كلمة المرور غير صحيحة!");
    }
}

function closeAdmin() {
    document.querySelector('.admin-sidebar').style.right = '-300px';
    isAdmin = false;
}

function addGame(event) {
    event.preventDefault();
    const name = document.getElementById('game-name').value;
    const size = document.getElementById('game-size').value;
    const image = document.getElementById('game-image').value;

    const newGame = {
        id: games.length + 1,
        name: name,
        size: size,
        price: 3000,
        image: image
    };
    
    games.push(newGame);
    renderGames();
    document.getElementById('admin-form').reset();
}

function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = function() {
    const scrollButton = document.querySelector('.scroll-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.classList.add('visible');
    } else {
        scrollButton.classList.remove('visible');
    }
};

document.addEventListener('DOMContentLoaded', renderGames);
