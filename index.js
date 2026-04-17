const express = require("express"); // nhúng giống export nhúng thư viện or nhúng file ở đây đang nhúng thư viện
const path = require("path");
const app = express();
const port = 3000;
// Thiết lập views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
	res.render("client/pages/home",{
			pageTitle: "Trang chủ"
	});
});

app.get("/tours", (req, res) => {
	// get là lấy ra đường dẫn chỗ /
	res.render("client/pages/tour-list", {
    pageTitle: "Danh sách tour"
  });
});

app.listen(port, () => {
	console.log(`Website đang chạy trên cổng ${port}`);
});
