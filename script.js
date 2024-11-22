// 點擊搜尋按鈕事件
document.getElementById("search-button").addEventListener("click", function () {
    const stockCode = document.getElementById("stock-input").value;
    if (stockCode) {
        fetchStockData(stockCode);
    } else {
        alert("請輸入股票代碼！");
    }
});

// Fetch 模擬數據並更新頁面
async function fetchStockData(stockCode) {
    // 模擬後端 API 返回的數據
    const mockData = {
        latestPrice: 150.25,
        openPrice: 145.00,
        highPrice: 152.00,
        lowPrice: 144.50,
        priceTrends: [145.5, 146.0, 147.8, 150.2, 148.5, 151.0, 150.25], // 模擬價格趨勢
        timestamps: ["09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30"] // 時間軸
    };

    // 更新數據展示區
    document.getElementById("latest-price").textContent = mockData.latestPrice;
    document.getElementById("open-price").textContent = mockData.openPrice;
    document.getElementById("high-price").textContent = mockData.highPrice;
    document.getElementById("low-price").textContent = mockData.lowPrice;

    // 更新圖表
    updateChart(mockData.timestamps, mockData.priceTrends);
}

// 使用 Chart.js 繪製圖表
function updateChart(labels, data) {
    const ctx = document.getElementById("price-chart").getContext("2d");
    new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [{
                label: "價格趨勢",
                data: data,
                borderColor: "#3498db",
                backgroundColor: "rgba(52, 152, 219, 0.2)",
                borderWidth: 2,
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "時間"
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: "價格"
                    }
                }
            }
        }
    });
}
