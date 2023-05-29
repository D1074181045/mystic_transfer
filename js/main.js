function transfer_url(to_name) {
	let mystic_num = document.getElementById("number").value;
	
	if (!mystic_num) {
		alert('尚未輸入');
		return;
	}
		
	let url;
	switch (to_name) {
		case 'nhentai':
			url = "https://nhentai.net/g/".concat(mystic_num);
			break;
		case 'wnacg':
			url = "https://www.wnacg.com/photos-index-aid-".concat(mystic_num, ".html");
			break;
		case 'pixiv':
			url = "https://www.pixiv.net/artworks/".concat(mystic_num);
			break;
		case 'jm':
			url = "https://18comic.vip/album/".concat(mystic_num);
			break;
	}
	
	if (url) window.open(url);
}

var mySwiper = new Swiper( ".swiper-container", {
    spaceBetween: 30,
	direction: "horizontal",
	navigation: {
		nextEl: ".swiper-button-next", // 上一頁按鈕物件
		prevEl: ".swiper-button-prev", // 下一頁按鈕物件
	},
	initialSlide: localStorage.position,
	on: {
		slideChangeTransitionEnd: function () {
			localStorage.position = this.activeIndex;
		},
	}
})