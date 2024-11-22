// scripts.js

// Mảng danh sách sản phẩm
const products = [
    {
        id: 1,
        name: "Nhà Mèo Đẹp Hiện Đại",
        description: "Nhà Mèo Đẹp Hiện Đại, sản phẩm này được thiết kế thông minh với ba tầng riêng biệt, tạo ra không gian rộng rãi cho mèo leo trèo, chơi đùa và nghỉ ngơi.",
        price: 200000,
        image: "images/sp6.jpg"
    },
    {
        id: 2,
        name: "Nhà Cây – Trụ cào móng cho mèo Cat tree",
        description: "Nhà Cây – Trụ cào móng cho mèo Cat tree làm bằng ván ép là một sản phẩm lý tưởng cho những chú mèo thích leo trèo và vui chơi. Thiết kế thông minh với ba tầng rộng rãi có nhiều phụ kiện cho mèo chơi đùa, nghỉ ngơi.",
        price: 150000,
        image: "images/sp7.jpg"
    },
    {
        id: 3,
        name: "Chuồng nhà mèo 3 tầng dành cho gia đình",
        description: "Chuồng mèo 3 tầng có kính là một sản phẩm hiện đại và tiện lợi dành cho những người yêu thích mèo. Thiết kế của chuồng thường gồm ba tầng riêng biệt, mỗi tầng được phân chia bằng các kệ hoặc vách ngăn làm bằng gỗ, giúp mèo có không gian để leo trèo, chơi đùa và nghỉ ngơi.",
        price: 200000,
        image: "images/sp8.jpg"
    },
    {
        id: 4,
        name: "Áo con vịt thời trang cho chó mèo",
        description: "Sản phẩm có vẻ ngoài nổi bật với hình con vịt đáng yêu. được làm từ vải polyester có khả năng thông thoáng nhất định, dễ vệ sinh, làm sạch. Chiếc áo có nhiều kích cỡ để lựa chọn phù hợp cho vừa với thú cưng nhà bạn.",
        price: 150000,
        image: "images/sp1.jpg"
    },
    {
        id: 5,
        name: "Váy dạ hội cao cấp",
        description: "Chúng tôi luôn có những sự lựa chọn dịch vụ spa cho chó mèo phù hợp nhất với những dòng sản phẩm sữa tắm trị liệu đảm bảo an toàn cho sức khỏe của thú cưng.",
        price: 150000,
        image: "images/sp2.jpg"
    },
    {
        id: 6,
        name: "Áo 2 dây mỏng cho chó mèo",
        description: "Chúng tôi luôn có những sự lựa chọn dịch vụ spa cho chó mèo phù hợp nhất với những dòng sản phẩm sữa tắm trị liệu đảm bảo an toàn cho sức khỏe của thú cưng.",
        price: 150000,
        image: "images/sp3.png"
    },
    {
        id: 7,
        name: "Chuồng cho chó mèo bằng nhựa",
        description: "Chúng tôi luôn có những sự lựa chọn dịch vụ spa cho chó mèo phù hợp nhất với những dòng sản phẩm sữa tắm trị liệu đảm bảo an toàn cho sức khỏe của thú cưng.",
        price: 150000,
        image: "images/sp4.webp"
    },
    {
        id: 8,
        name: "Nội thất nhà Mèo",
        description: "Nội thất nhà Mèo sản phẩm được làm từ chất liệu ván ép bền bỉ, dễ vệ sinh. Với hình dạng gọn gàng và phong cách thiết kế tinh tế, sản phẩm này không chỉ là nơi ở lý tưởng cho mèo mà còn là điểm nhấn trang trí cho không gian sống của bạn.",
        price: 150000,
        image: "images/sp5.jpg"
    },
    // Thêm nhiều sản phẩm hơn nếu cần
];

// Mảng đội ngũ nhân viên
const teamMembers = [
    {
        id: 1,
        name: "Nguyễn Phú Hữu",
        position: "Quản Lý Cửa Hàng , Quản Lý Website",
        photo: "images/about1.jpg"
    },
    {
        id: 2,
        name: "Trương Thịnh Phát",
        position: "Nhân Viên Khách Sạn Thú",
        photo: "images/about4.jpg"
    },
    {
        id: 3,
        name: "Vũ Văn Lợi",
        position: "BáC Sĩ Thú Y",
        photo: "images/about7.jpg"
    },
    // Thêm nhiều thành viên hơn nếu cần
];

// Hiển thị danh sách sản phẩm trên trang products.html
function displayProducts(productArray) {
    const productList = document.getElementById('product-list');
    if (productList) {
        productList.innerHTML = ''; // Xóa danh sách cũ
        if (productArray.length === 0) {
            productList.innerHTML = '<p>Không tìm thấy sản phẩm nào.</p>';
            return;
        }
        productArray.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'col-md-3 mb-4';
            productCard.innerHTML = `
                <div class="card h-100">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}" loading="lazy" />
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                    </div>
                    <div class="card-footer d-flex justify-content-between align-items-center">
                        <strong>${formatPrice(product.price)} VNĐ</strong>
                        <a href="product-detail.html?id=${product.id}" class="btn btn-primary btn-sm">Chi Tiết</a>
                    </div>
                </div>
            `;
            productList.appendChild(productCard);
        });
    }
}

// Hiển thị chi tiết sản phẩm trên product-detail.html
function displayProductDetail(product) {
    if (product) {
        const productDetailContainer = document.getElementById('product-detail');
        if (productDetailContainer) {
            productDetailContainer.innerHTML = `
                <div class="row">
                    <div class="col-md-6">
                        <img src="${product.image}" class="img-fluid" alt="${product.name}" loading="lazy" />
                    </div>
                    <div class="col-md-6">
                        <h2>${product.name}</h2>
                        <p>${product.description}</p>
                        <h4>${formatPrice(product.price)} VNĐ</h4>
                        <button class="btn btn-success" onclick="addToCart(${product.id})">Thêm Vào Giỏ Hàng</button>
                    </div>
                </div>
            `;
        }
    }
}

// Thêm sản phẩm vào giỏ hàng
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        const product = products.find(p => p.id === productId);
        if (product) {
            cart.push({ ...product, quantity: 1 });
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Đã thêm sản phẩm vào giỏ hàng!');
}

// Hiển thị giỏ hàng trên cart.html
function displayCart() {
    const cartContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    if (cartContainer) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartContainer.innerHTML = '';
        if (cart.length === 0) {
            cartContainer.innerHTML = '<p>Giỏ hàng của bạn đang trống.</p>';
            totalPriceElement.textContent = '0 VNĐ';
            return;
        }

        let totalPrice = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            totalPrice += itemTotal;

            const cartItem = document.createElement('div');
            cartItem.className = 'row mb-3 align-items-center';
            cartItem.innerHTML = `
                <div class="col-md-2">
                    <img src="${item.image}" class="img-fluid" alt="${item.name}" />
                </div>
                <div class="col-md-3">
                    <h5>${item.name}</h5>
                </div>
                <div class="col-md-2">
                    <strong>${formatPrice(item.price)} VNĐ</strong>
                </div>
                <div class="col-md-3">
                    <input type="number" min="1" value="${item.quantity}" class="form-control quantity-input" data-id="${item.id}" />
                </div>
                <div class="col-md-2">
                    <button class="btn btn-danger btn-sm" onclick="removeFromCart(${item.id})">Xóa</button>
                </div>
            `;
            cartContainer.appendChild(cartItem);
        });

        totalPriceElement.textContent = `${formatPrice(totalPrice)} VNĐ`;

        // Thêm sự kiện thay đổi số lượng
        const quantityInputs = document.querySelectorAll('.quantity-input');
        quantityInputs.forEach(input => {
            input.addEventListener('change', (e) => {
                const id = parseInt(e.target.getAttribute('data-id'));
                const newQuantity = parseInt(e.target.value);
                updateQuantity(id, newQuantity);
            });
        });
    }
}

// Cập nhật số lượng sản phẩm trong giỏ hàng
function updateQuantity(productId, quantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = cart.find(item => item.id === productId);
    if (product) {
        product.quantity = quantity;
        if (product.quantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
    }
}

// Xóa sản phẩm khỏi giỏ hàng
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

// Xử lý thanh toán trên checkout.html
function checkout() {
    // Kiểm tra giỏ hàng
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Giỏ hàng của bạn đang trống.');
        return;
    }

    // Lấy thông tin người dùng từ form
    const name = document.getElementById('customer-name').value.trim();
    const email = document.getElementById('customer-email').value.trim();
    const address = document.getElementById('customer-address').value.trim();
    const phone = document.getElementById('customer-phone').value.trim();

    if (!name || !email || !address || !phone) {
        alert('Vui lòng điền đầy đủ thông tin.');
        return;
    }

    // Xác thực định dạng email đơn giản
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Vui lòng nhập email hợp lệ.');
        return;
    }

    // Tạo đơn hàng (ở đây chỉ là hiển thị thông báo, bạn có thể gửi dữ liệu tới server)
    alert(`Cảm ơn ${name} đã đặt hàng! Chúng tôi sẽ liên hệ với bạn sớm.`);

    // Xóa giỏ hàng sau khi đặt hàng
    localStorage.removeItem('cart');

    // Chuyển hướng về trang chủ
    window.location.href = 'index.html';
}

// Hiển thị đội ngũ nhân viên trên about.html
function displayTeamMembers() {
    const teamContainer = document.getElementById('team-members');
    if (teamContainer) {
        teamMembers.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.className = 'col-md-4 mb-4';
            memberCard.innerHTML = `
                <div class="card h-100 text-center">
                    <img src="${member.photo}" class="card-img-top team-member" alt="${member.name}" loading="lazy" />
                    <div class="card-body">
                        <h5 class="card-title">${member.name}</h5>
                        <p class="card-text">${member.position}</p>
                    </div>
                </div>
            `;
            teamContainer.appendChild(memberCard);
        });
    }
}

// Xử lý gửi form liên hệ trên contact.html
function submitContactForm() {
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    // Kiểm tra dữ liệu nhập vào
    if (!name || !email || !message) {
        alert('Vui lòng điền đầy đủ thông tin.');
        return;
    }

    // Xác thực định dạng email đơn giản
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Vui lòng nhập email hợp lệ.');
        return;
    }

    // Ở đây bạn có thể xử lý gửi dữ liệu tới server thông qua AJAX hoặc API
    // Ví dụ sử dụng fetch để gửi dữ liệu tới một endpoint (cần có backend hỗ trợ)
    /*
    fetch('your-server-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert(`Cảm ơn ${name} đã liên hệ với chúng tôi!`);
            document.getElementById('contact-form').reset();
        } else {
            alert('Có lỗi xảy ra. Vui lòng thử lại sau.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Có lỗi xảy ra. Vui lòng thử lại sau.');
    });
    */

    // Nếu chưa có backend, chỉ hiển thị thông báo thành công
    alert(`Cảm ơn ${name} đã liên hệ với chúng tôi! Chúng tôi sẽ phản hồi sớm nhất có thể.`);

    // Xóa form sau khi gửi
    document.getElementById('contact-form').reset();
}

// Hàm định dạng giá tiền
function formatPrice(price) {
    return price.toLocaleString('vi-VN');
}

// Hàm lấy chi tiết sản phẩm từ URL
function getProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    return products.find(p => p.id === productId);
}

// Xử lý sự kiện khi DOM đã sẵn sàng
document.addEventListener('DOMContentLoaded', () => {
    // Hiển thị sản phẩm trên trang products.html
    const productList = document.getElementById('product-list');
    if (productList) {
        displayProducts(products);
    }

    // Hiển thị sản phẩm chi tiết trên product-detail.html
    const productDetail = getProductDetail();
    if (productDetail) {
        displayProductDetail(productDetail);
    }

    // Hiển thị giỏ hàng trên cart.html
    displayCart();

    // Hiển thị đội ngũ nhân viên trên about.html
    displayTeamMembers();

    // Thêm sự kiện cho form tìm kiếm trên products.html
    const searchForm = document.getElementById('search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const query = document.getElementById('search-input').value.trim().toLowerCase();
            const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
            displayProducts(filteredProducts);
        });
    }
});

// Kiểm tra trạng thái đăng nhập khi tải trang
window.addEventListener("load", function() {
    if (localStorage.getItem("isLoggedIn") === "true") {
        showUserProfile(); // Hiển thị hồ sơ nếu người dùng đã đăng nhập
    } else {
        logoutUser(); // Ẩn hồ sơ người dùng nếu chưa đăng nhập
    }
});

// Hiển thị thông tin người dùng sau khi đăng nhập
function showUserProfile() {
    document.getElementById("userProfile").style.display = 'block';
    document.getElementById("loginLink").style.display = 'none'; // Ẩn nút Đăng nhập
    localStorage.setItem("isLoggedIn", "true"); // Lưu trạng thái đăng nhập vào localStorage
}

// Ẩn thông tin người dùng và hiển thị lại nút Đăng nhập khi đăng xuất
function logoutUser() {
    document.getElementById("userProfile").style.display = 'none'; // Ẩn hồ sơ người dùng
    document.getElementById("loginLink").style.display = 'block'; // Hiển thị lại nút Đăng nhập
    localStorage.removeItem("isLoggedIn"); // Xóa trạng thái đăng nhập khỏi localStorage
}

// Giả lập đăng nhập thành công
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    showUserProfile();  // Hiển thị hồ sơ người dùng sau khi đăng nhập
    $('#loginModal').modal('hide'); // Đóng modal sau khi đăng nhập
});

// Xử lý sự kiện đăng xuất
document.getElementById("logoutButton").addEventListener("click", function(event) {
    logoutUser(); // Gọi hàm đăng xuất
});
//----------------------------------------------------------//

