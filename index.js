const express = require("express"); // nhúng giống export nhúng thư viện or nhúng file ở đây đang nhúng thư viện
const app = express();
const port = 3000;

app.get("/", (req, res) => {// get là lấy ra đường dẫn chỗ /
	res.send("Trang chủ");
});

app.get("/tours", (req, res) => {
	// get là lấy ra đường dẫn chỗ /
	res.send("Danh sách tour");
});

app.listen(port, () => {
	console.log(`Website đang chạy trên cổng ${port}`);
});
